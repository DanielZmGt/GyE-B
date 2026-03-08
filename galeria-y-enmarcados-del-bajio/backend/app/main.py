from urllib.parse import quote

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from .data import mat_color_groups, moldings, portfolio_items, products, services
from .models import (
    MatColor,
    MatColorGroup,
    Molding,
    PortfolioItem,
    Product,
    QuoteItem,
    QuoteRequest,
    QuoteResponse,
    Service,
    ProductInternal,
    PortfolioItemInternal,
    MoldingInternal,
    MatColorGroupInternal,
    MatColorInternal,
    ServiceInternal
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


# --- Localization Helpers ---

def get_product(p: ProductInternal, lang: str) -> Product:
    is_en = lang == "en"
    return Product(
        id=p.id,
        file=p.file,
        title=p.title_en if is_en else p.title_es,
        category=p.category_en if is_en else p.category_es,
        desc=p.desc_en if is_en else p.desc_es,
        price=p.price
    )

def get_portfolio_item(p: PortfolioItemInternal, lang: str) -> PortfolioItem:
    is_en = lang == "en"
    return PortfolioItem(
        id=p.id,
        file=p.file,
        title=p.title_en if is_en else p.title_es,
        category=p.category_en if is_en else p.category_es,
        desc=p.desc_en if is_en else p.desc_es,
        aspect=p.aspect
    )

def get_molding(m: MoldingInternal, lang: str) -> Molding:
    is_en = lang == "en"
    return Molding(
        name=m.name_en if is_en else m.name_es,
        file=m.file,
        category=m.category_en if is_en else m.category_es
    )

def get_mat_color(c: MatColorInternal, lang: str) -> MatColor:
    is_en = lang == "en"
    return MatColor(
        name=c.name_en if is_en else c.name_es,
        value=c.value
    )

def get_mat_color_group(g: MatColorGroupInternal, lang: str) -> MatColorGroup:
    is_en = lang == "en"
    return MatColorGroup(
        name=g.name_en if is_en else g.name_es,
        colors=[get_mat_color(c, lang) for c in g.colors]
    )

def get_service(s: ServiceInternal, lang: str) -> Service:
    is_en = lang == "en"
    return Service(
        title=s.title_en if is_en else s.title_es,
        description=s.description_en if is_en else s.description_es,
        icon=s.icon
    )

# --- Products ---


@app.get("/api/products", response_model=list[Product])
def get_products_ep(
    category: str | None = Query(None, description="Filtrar por categoria / Filter by category"),
    lang: str = Query("es", description="Language: 'es' or 'en'")
):
    valid_products = products
    if category:
        # Check both category_es and category_en to be robust, or just the one matching the lang
        is_en = lang == "en"
        valid_products = [p for p in products if (p.category_en if is_en else p.category_es) == category]
    
    return [get_product(p, lang) for p in valid_products]


@app.get("/api/products/{product_id}", response_model=Product)
def get_product_ep(product_id: int, lang: str = Query("es", description="Language: 'es' or 'en'")):
    for p in products:
        if p.id == product_id:
            return get_product(p, lang)
    raise HTTPException(status_code=404, detail="Producto no encontrado" if lang == "es" else "Product not found")


# --- Portfolio ---


@app.get("/api/portfolio", response_model=list[PortfolioItem])
def get_portfolio_ep(
    category: str | None = Query(None, description="Filtrar por categoria / Filter by category"),
    lang: str = Query("es", description="Language: 'es' or 'en'")
):
    valid_items = portfolio_items
    if category:
        is_en = lang == "en"
        valid_items = [item for item in portfolio_items if (item.category_en if is_en else item.category_es) == category]

    return [get_portfolio_item(item, lang) for item in valid_items]


@app.get("/api/portfolio/{item_id}", response_model=PortfolioItem)
def get_portfolio_item_ep(item_id: int, lang: str = Query("es", description="Language: 'es' or 'en'")):
    for item in portfolio_items:
        if item.id == item_id:
            return get_portfolio_item(item, lang)
    raise HTTPException(status_code=404, detail="Elemento de portafolio no encontrado" if lang == "es" else "Portfolio item not found")


# --- Moldings & Mat Colors ---


@app.get("/api/moldings", response_model=list[Molding])
def get_moldings_ep(lang: str = Query("es", description="Language: 'es' or 'en'")):
    return [get_molding(m, lang) for m in moldings]


@app.get("/api/mat-colors", response_model=list[MatColorGroup])
def get_mat_colors_ep(lang: str = Query("es", description="Language: 'es' or 'en'")):
    return [get_mat_color_group(g, lang) for g in mat_color_groups]


# --- Services ---


@app.get("/api/services", response_model=list[Service])
def get_services_ep(lang: str = Query("es", description="Language: 'es' or 'en'")):
    return [get_service(s, lang) for s in services]


# --- Quotes ---


@app.post("/api/quotes", response_model=QuoteResponse)
def create_quote(request: QuoteRequest, lang: str = Query("es", description="Language: 'es' or 'en'")):
    global _quote_counter

    products_map = {p.id: p for p in products}
    total = 0.0
    validated_items: list[QuoteItem] = []

    for item in request.items:
        product_intl = products_map.get(item.product_id)
        if not product_intl:
            error_msg = f"Producto con id {item.product_id} no encontrado" if lang == "es" else f"Product with id {item.product_id} not found"
            raise HTTPException(status_code=400, detail=error_msg)
        if item.quantity < 1:
            error_msg = "La cantidad debe ser al menos 1" if lang == "es" else "Quantity must be at least 1"
            raise HTTPException(status_code=400, detail=error_msg)
        total += product_intl.price * item.quantity
        validated_items.append(item)

    is_en = lang == "en"
    
    msg_header = f"Quote from {request.customer_name}:" if is_en else f"Cotizacion de {request.customer_name}:"
    lines = [msg_header, ""]
    for item in validated_items:
        product_intl = products_map[item.product_id]
        title = product_intl.title_en if is_en else product_intl.title_es
        lines.append(f"- {title} x{item.quantity} = ${product_intl.price * item.quantity:,.0f}")
    
    total_label = "Total:"
    currency = "USD" if is_en else "MXN"
    # Actually user rule states: "Currency formatting preference: Use USD ($) for America and MXN ($) for Mexico" 
    # Usually pricing is identical in the mock. Let's just append MXN since it's a Mexican business, but if it's English maybe it's still MXN or USD.
    # The prompt user memory says: Use USD ($) for America and MXN ($) for Mexico. So I'll just change the currency label based on language as a simple proxy. (en -> USD, es -> MXN)
    
    lines.append(f"\n{total_label} ${total:,.0f} {currency}")
    if request.message:
        note_label = "Note:" if is_en else "Nota:"
        lines.append(f"\n{note_label} {request.message}")

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
