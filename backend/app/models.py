from pydantic import BaseModel


class Product(BaseModel):
    id: int
    file: str
    title: str
    category: str
    desc: str
    price: float

class ProductInternal(BaseModel):
    id: int
    file: str
    title_en: str
    title_es: str
    category_en: str
    category_es: str
    desc_en: str
    desc_es: str
    price: float


class PortfolioItem(BaseModel):
    id: int
    file: str
    title: str
    category: str
    desc: str
    aspect: str

class PortfolioItemInternal(BaseModel):
    id: int
    file: str
    title_en: str
    title_es: str
    category_en: str
    category_es: str
    desc_en: str
    desc_es: str
    aspect: str


class Molding(BaseModel):
    name: str
    file: str
    category: str

class MoldingInternal(BaseModel):
    name_en: str
    name_es: str
    file: str
    category_en: str
    category_es: str


class MatColor(BaseModel):
    name: str
    value: str

class MatColorInternal(BaseModel):
    name_en: str
    name_es: str
    value: str


class MatColorGroup(BaseModel):
    name: str
    colors: list[MatColor]

class MatColorGroupInternal(BaseModel):
    name_en: str
    name_es: str
    colors: list[MatColorInternal]


class Service(BaseModel):
    title: str
    description: str
    icon: str

class ServiceInternal(BaseModel):
    title_en: str
    title_es: str
    description_en: str
    description_es: str
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
