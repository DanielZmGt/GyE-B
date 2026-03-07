from urllib.parse import quote

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from .models import (
    MatColorGroup,
    Molding,
    PortfolioItem,
    Product,
    QuoteRequest,
    QuoteResponse,
    Service,
)
from .supabase_client import supabase

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


# --- Products ---


@app.get("/api/products", response_model=list[Product])
def get_products(category: str | None = Query(None, description="Filtrar por categoria: Enmarcado, Montaje, Restauracion")):
    query = supabase.table("products").select("id, file, title, category, description, price")
    if category:
        query = query.eq("category", category)
    result = query.order("id").execute()
    return [
        Product(id=r["id"], file=r["file"], title=r["title"], category=r["category"], desc=r["description"], price=r["price"])
        for r in result.data
    ]


@app.get("/api/products/{product_id}", response_model=Product)
def get_product(product_id: int):
    result = supabase.table("products").select("id, file, title, category, description, price").eq("id", product_id).execute()
    if not result.data:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    r = result.data[0]
    return Product(id=r["id"], file=r["file"], title=r["title"], category=r["category"], desc=r["description"], price=r["price"])


# --- Portfolio ---


@app.get("/api/portfolio", response_model=list[PortfolioItem])
def get_portfolio(category: str | None = Query(None, description="Filtrar por categoria: Framing, Mounting, Maintenance")):
    query = supabase.table("portfolio").select("id, file, title, category, description, aspect")
    if category:
        query = query.eq("category", category)
    result = query.order("id").execute()
    return [
        PortfolioItem(id=r["id"], file=r["file"], title=r["title"], category=r["category"], desc=r["description"], aspect=r["aspect"])
        for r in result.data
    ]


@app.get("/api/portfolio/{item_id}", response_model=PortfolioItem)
def get_portfolio_item(item_id: int):
    result = supabase.table("portfolio").select("id, file, title, category, description, aspect").eq("id", item_id).execute()
    if not result.data:
        raise HTTPException(status_code=404, detail="Elemento de portafolio no encontrado")
    r = result.data[0]
    return PortfolioItem(id=r["id"], file=r["file"], title=r["title"], category=r["category"], desc=r["description"], aspect=r["aspect"])


# --- Moldings & Mat Colors ---


@app.get("/api/moldings", response_model=list[Molding])
def get_moldings():
    result = supabase.table("moldings").select("name, file, category").order("id").execute()
    return [Molding(**r) for r in result.data]


@app.get("/api/mat-colors", response_model=list[MatColorGroup])
def get_mat_colors():
    groups = supabase.table("mat_color_groups").select("id, name").order("id").execute()
    colors = supabase.table("mat_colors").select("group_id, name, value").order("id").execute()

    colors_by_group: dict[int, list[dict]] = {}
    for c in colors.data:
        colors_by_group.setdefault(c["group_id"], []).append({"name": c["name"], "value": c["value"]})

    return [
        MatColorGroup(name=g["name"], colors=colors_by_group.get(g["id"], []))
        for g in groups.data
    ]


# --- Services ---


@app.get("/api/services", response_model=list[Service])
def get_services():
    result = supabase.table("services").select("title, description, icon").order("id").execute()
    return [Service(**r) for r in result.data]


# --- Quotes ---


@app.post("/api/quotes", response_model=QuoteResponse)
def create_quote(request: QuoteRequest):
    # Validar productos y calcular total
    product_ids = [item.product_id for item in request.items]
    products_result = supabase.table("products").select("id, title, price").in_("id", product_ids).execute()
    products_map = {p["id"]: p for p in products_result.data}

    total = 0.0
    for item in request.items:
        product = products_map.get(item.product_id)
        if not product:
            raise HTTPException(status_code=400, detail=f"Producto con id {item.product_id} no encontrado")
        if item.quantity < 1:
            raise HTTPException(status_code=400, detail="La cantidad debe ser al menos 1")
        total += product["price"] * item.quantity

    # Generar mensaje WhatsApp
    lines = [f"Cotizacion de {request.customer_name}:", ""]
    for item in request.items:
        p = products_map[item.product_id]
        lines.append(f"- {p['title']} x{item.quantity} = ${p['price'] * item.quantity:,.0f}")
    lines.append(f"\nTotal: ${total:,.0f} MXN")
    if request.message:
        lines.append(f"\nNota: {request.message}")

    message_text = "\n".join(lines)
    whatsapp_url = f"https://wa.me/{WHATSAPP_PHONE}?text={quote(message_text)}"

    # Guardar cotizacion en Supabase
    quote_result = supabase.table("quotes").insert({
        "customer_name": request.customer_name,
        "customer_phone": request.customer_phone,
        "message": request.message,
        "total": total,
        "whatsapp_url": whatsapp_url,
    }).execute()

    quote_id = quote_result.data[0]["id"]

    # Guardar items de la cotizacion
    quote_items_data = [
        {"quote_id": quote_id, "product_id": item.product_id, "quantity": item.quantity}
        for item in request.items
    ]
    supabase.table("quote_items").insert(quote_items_data).execute()

    return QuoteResponse(
        id=quote_id,
        customer_name=request.customer_name,
        customer_phone=request.customer_phone,
        items=request.items,
        total=total,
        whatsapp_url=whatsapp_url,
    )
