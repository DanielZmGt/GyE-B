-- Tablas para Galeria y Enmarcados del Bajio

-- Productos (tienda)
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    file TEXT NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Enmarcado', 'Montaje', 'Restauracion')),
    description TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Portafolio (galeria de trabajos)
CREATE TABLE portfolio (
    id SERIAL PRIMARY KEY,
    file TEXT NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Framing', 'Mounting', 'Maintenance')),
    description TEXT NOT NULL,
    aspect TEXT NOT NULL DEFAULT 'aspect-square',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Molduras
CREATE TABLE moldings (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    file TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Wood', 'Metallic'))
);

-- Grupos de colores de matboard
CREATE TABLE mat_color_groups (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- Colores de matboard
CREATE TABLE mat_colors (
    id SERIAL PRIMARY KEY,
    group_id INTEGER NOT NULL REFERENCES mat_color_groups(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    value TEXT NOT NULL
);

-- Servicios
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    icon TEXT NOT NULL
);

-- Cotizaciones
CREATE TABLE quotes (
    id SERIAL PRIMARY KEY,
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    message TEXT DEFAULT '',
    total NUMERIC(10, 2) NOT NULL,
    whatsapp_url TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Items de cotizacion
CREATE TABLE quote_items (
    id SERIAL PRIMARY KEY,
    quote_id INTEGER NOT NULL REFERENCES quotes(id) ON DELETE CASCADE,
    product_id INTEGER NOT NULL REFERENCES products(id),
    quantity INTEGER NOT NULL CHECK (quantity > 0)
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE moldings ENABLE ROW LEVEL SECURITY;
ALTER TABLE mat_color_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE mat_colors ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_items ENABLE ROW LEVEL SECURITY;

-- Politicas de lectura publica para catalogo
CREATE POLICY "Public read products" ON products FOR SELECT USING (true);
CREATE POLICY "Public read portfolio" ON portfolio FOR SELECT USING (true);
CREATE POLICY "Public read moldings" ON moldings FOR SELECT USING (true);
CREATE POLICY "Public read mat_color_groups" ON mat_color_groups FOR SELECT USING (true);
CREATE POLICY "Public read mat_colors" ON mat_colors FOR SELECT USING (true);
CREATE POLICY "Public read services" ON services FOR SELECT USING (true);

-- Politicas para cotizaciones (solo insertar publicamente, leer via service_role)
CREATE POLICY "Public insert quotes" ON quotes FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert quote_items" ON quote_items FOR INSERT WITH CHECK (true);
