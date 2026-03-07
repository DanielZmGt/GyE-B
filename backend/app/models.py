from pydantic import BaseModel


class Product(BaseModel):
    id: int
    file: str
    title: str
    category: str
    desc: str
    price: float


class PortfolioItem(BaseModel):
    id: int
    file: str
    title: str
    category: str
    desc: str
    aspect: str


class Molding(BaseModel):
    name: str
    file: str
    category: str


class MatColor(BaseModel):
    name: str
    value: str


class MatColorGroup(BaseModel):
    name: str
    colors: list[MatColor]


class Service(BaseModel):
    title: str
    description: str
    icon: str


class QuoteItem(BaseModel):
    product_id: int
    quantity: int


class QuoteRequest(BaseModel):
    customer_name: str
    customer_phone: str
    items: list[QuoteItem]
    message: str = ""


class QuoteResponse(BaseModel):
    id: int
    customer_name: str
    customer_phone: str
    items: list[QuoteItem]
    total: float
    whatsapp_url: str
