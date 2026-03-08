from urllib.parse import quote
from typing import List, Optional

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from .supabase_client import supabase
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
    allow_origins=["*"], # Allow all for now, or specify frontend URL
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
async def get_products_ep(
    category: Optional[str] = Query(None, description="Filtrar por categoria / Filter by category"),
    lang: str = Query("es", description="Language: 'es' or 'en'")
):
    query = supabase.table("products").select("*")
    
    if category:
        # Check both category_es and category_en to be robust
        # This is a bit tricky with a single filter in Supabase if we want OR.
        # But we can just fetch and filter in python for simplicity, or use .or_()
        pass

    response = query.execute()
    data = response.data

    products_intl = [ProductInternal(**row) for row in data]
    
    if category:
        is_en = lang == "en"
        products_intl = [p for p in products_intl if (p.category_en if is_en else p.category_es) == category]

    return [get_product(p, lang) for p in products_intl]


@app.get("/api/products/{product_id}", response_model=Product)
async def get_product_ep(product_id: int, lang: str = Query("es", description="Language: 'es' or 'en'")):
    response = supabase.table("products").select("*").eq("id", product_id).single().execute()
    if not response.data:
        raise HTTPException(status_code=404, detail="Producto no encontrado" if lang == "es" else "Product not found")
    
    p = ProductInternal(**response.data)
    return get_product(p, lang)


# --- Portfolio ---


@app.get("/api/portfolio", response_model=list[PortfolioItem])
async def get_portfolio_ep(
    category: Optional[str] = Query(None, description="Filtrar por categoria / Filter by category"),
    lang: str = Query("es", description="Language: 'es' or 'en'")
):
    query = supabase.table("portfolio_items").select("*")
    response = query.execute()
    data = response.data

    items_intl = [PortfolioItemInternal(**row) for row in data]
    
    if category:
        is_en = lang == "en"
        items_intl = [item for item in items_intl if (item.category_en if is_en else item.category_es) == category]

    return [get_portfolio_item(item, lang) for item in items_intl]


@app.get("/api/portfolio/{item_id}", response_model=PortfolioItem)
async def get_portfolio_item_ep(item_id: int, lang: str = Query("es", description="Language: 'es' or 'en'")):
    response = supabase.table("portfolio_items").select("*").eq("id", item_id).single().execute()
    if not response.data:
        raise HTTPException(status_code=404, detail="Elemento de portafolio no encontrado" if lang == "es" else "Portfolio item not found")
    
    item = PortfolioItemInternal(**response.data)
    return get_portfolio_item(item, lang)


# --- Moldings & Mat Colors ---


@app.get("/api/moldings", response_model=list[Molding])
async def get_moldings_ep(lang: str = Query("es", description="Language: 'es' or 'en'")):
    response = supabase.table("moldings").select("*").execute()
    moldings_intl = [MoldingInternal(**row) for row in response.data]
    return [get_molding(m, lang) for m in moldings_intl]


@app.get("/api/mat-colors", response_model=list[MatColorGroup])
async def get_mat_colors_ep(lang: str = Query("es", description="Language: 'es' or 'en'")):
    # Fetch groups and colors
    groups_response = supabase.table("mat_color_groups").select("*").execute()
    colors_response = supabase.table("mat_colors").select("*").execute()
    
    groups_data = groups_response.data
    colors_data = colors_response.data
    
    # Map colors to groups
    groups_intl = []
    for g in groups_data:
        group_colors = [MatColorInternal(**c) for c in colors_data if c["group_id"] == g["id"]]
        groups_intl.append(MatColorGroupInternal(
            name_en=g["name_en"],
            name_es=g["name_es"],
            colors=group_colors
        ))
        
    return [get_mat_color_group(g, lang) for g in groups_intl]


# --- Services ---


@app.get("/api/services", response_model=list[Service])
async def get_services_ep(lang: str = Query("es", description="Language: 'es' or 'en'")):
    response = supabase.table("services").select("*").execute()
    services_intl = [ServiceInternal(**row) for row in response.data]
    return [get_service(s, lang) for s in services_intl]


# --- Quotes ---


@app.post("/api/quotes", response_model=QuoteResponse)
async def create_quote(request: QuoteRequest, lang: str = Query("es", description="Language: 'es' or 'en'")):
    global _quote_counter

    # Fetch products involved in the quote
    product_ids = [item.product_id for item in request.items]
    response = supabase.table("products").select("*").in_("id", product_ids).execute()
    products_data = response.data
    products_map = {p["id"]: ProductInternal(**p) for p in products_data}
    
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
