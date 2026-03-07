from urllib.parse import quote

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from .data import mat_color_groups, moldings, portfolio_items, products, services
from .models import (
    MatColorGroup,
    Molding,
    PortfolioItem,
    Product,
    QuoteItem,
    QuoteRequest,
    QuoteResponse,
    Service,
)

app = FastAPI(
    title="Galeria y Enmarcados del Bajio API",
    description="Backend API para la galeria de enmarcados",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

WHATSAPP_PHONE = "5219166276"

_quote_counter = 0


# --- Products ---


@app.get("/api/products", response_model=list[Product])
def get_products(category: str | None = Query(None, description="Filtrar por categoria: Enmarcado, Montaje, Restauracion")):
    if category:
        return [p for p in products if p.category == category]
    return products


@app.get("/api/products/{product_id}", response_model=Product)
def get_product(product_id: int):
    for p in products:
        if p.id == product_id:
            return p
    raise HTTPException(status_code=404, detail="Producto no encontrado")


# --- Portfolio ---


@app.get("/api/portfolio", response_model=list[PortfolioItem])
def get_portfolio(category: str | None = Query(None, description="Filtrar por categoria: Framing, Mounting, Maintenance")):
    if category:
        return [item for item in portfolio_items if item.category == category]
    return portfolio_items


@app.get("/api/portfolio/{item_id}", response_model=PortfolioItem)
def get_portfolio_item(item_id: int):
    for item in portfolio_items:
        if item.id == item_id:
            return item
    raise HTTPException(status_code=404, detail="Elemento de portafolio no encontrado")


# --- Moldings & Mat Colors ---


@app.get("/api/moldings", response_model=list[Molding])
def get_moldings():
    return moldings


@app.get("/api/mat-colors", response_model=list[MatColorGroup])
def get_mat_colors():
    return mat_color_groups


# --- Services ---


@app.get("/api/services", response_model=list[Service])
def get_services():
    return services


# --- Quotes ---


@app.post("/api/quotes", response_model=QuoteResponse)
def create_quote(request: QuoteRequest):
    global _quote_counter

    products_map = {p.id: p for p in products}
    total = 0.0
    validated_items: list[QuoteItem] = []

    for item in request.items:
        product = products_map.get(item.product_id)
        if not product:
            raise HTTPException(status_code=400, detail=f"Producto con id {item.product_id} no encontrado")
        if item.quantity < 1:
            raise HTTPException(status_code=400, detail="La cantidad debe ser al menos 1")
        total += product.price * item.quantity
        validated_items.append(item)

    lines = [f"Cotizacion de {request.customer_name}:", ""]
    for item in validated_items:
        product = products_map[item.product_id]
        lines.append(f"- {product.title} x{item.quantity} = ${product.price * item.quantity:,.0f}")
    lines.append(f"\nTotal: ${total:,.0f} MXN")
    if request.message:
        lines.append(f"\nNota: {request.message}")

    message_text = "\n".join(lines)
    whatsapp_url = f"https://wa.me/{WHATSAPP_PHONE}?text={quote(message_text)}"

    _quote_counter += 1

    return QuoteResponse(
        id=_quote_counter,
        customer_name=request.customer_name,
        customer_phone=request.customer_phone,
        items=validated_items,
        total=total,
        whatsapp_url=whatsapp_url,
    )
