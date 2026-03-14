-- Migration: Update moldings and mat colors to match new JPG assets and expanded color palettes

-- 1. Clear existing data to avoid conflicts
TRUNCATE TABLE moldings RESTART IDENTITY CASCADE;
TRUNCATE TABLE mat_color_groups RESTART IDENTITY CASCADE;

-- 2. Insert updated moldings (using the new JPG paths and 32 options)
INSERT INTO moldings (name_en, name_es, file, category_en, category_es) VALUES
('Acrylic', 'Acrílico', '/assets/moldings1/named_materials/acrylic.jpg', 'Modern', 'Moderno'),
('Baseboard', 'Zócalo', '/assets/moldings1/named_materials/baseboard.jpg', 'Classic', 'Clásico'),
('Beech', 'Haya', '/assets/moldings1/named_materials/beech.jpg', 'Wood', 'Madera'),
('Birch', 'Abedul', '/assets/moldings1/named_materials/birch.jpg', 'Wood', 'Madera'),
('Matte Black', 'Negro Mate', '/assets/moldings1/named_materials/black_matte.jpg', 'Painted', 'Pintado'),
('Bronze', 'Bronce', '/assets/moldings1/named_materials/bronze.jpg', 'Metallic', 'Metálico'),
('Brushed Aluminum', 'Aluminio Cepillado', '/assets/moldings1/named_materials/brushed_aluminum.jpg', 'Metallic', 'Metálico'),
('Burl Wood', 'Madera de Raíz', '/assets/moldings1/named_materials/burl_wood.jpg', 'Exotic', 'Exótico'),
('Cedar', 'Cedro', '/assets/moldings1/named_materials/cedar.jpg', 'Wood', 'Madera'),
('Chair Rail', 'Pasamanos', '/assets/moldings1/named_materials/chair_rail.jpg', 'Classic', 'Clásico'),
('Charcoal', 'Carbón', '/assets/moldings1/named_materials/charcoal.jpg', 'Painted', 'Pintado'),
('Cherry', 'Cerezo', '/assets/moldings1/named_materials/cherry.jpg', 'Wood', 'Madera'),
('Distressed White', 'Blanco Desgastado', '/assets/moldings1/named_materials/distressed_white.jpg', 'Rustic', 'Rústico'),
('Driftwood', 'Madera Flotante', '/assets/moldings1/named_materials/driftwood.jpg', 'Rustic', 'Rústico'),
('Ebonized Oak 1', 'Roble Ebonizado 1', '/assets/moldings1/named_materials/ebonized_oak_1.jpg', 'Modern', 'Moderno'),
('Ebonized Oak 2', 'Roble Ebonizado 2', '/assets/moldings1/named_materials/ebonized_oak_2.jpg', 'Modern', 'Moderno'),
('Gilded Gold', 'Dorado', '/assets/moldings1/named_materials/gilded_gold.jpg', 'Metallic', 'Metálico'),
('Leather Wrapped', 'Envuelto en Cuero', '/assets/moldings1/named_materials/leather_wrapped.jpg', 'Exotic', 'Exótico'),
('Mahogany', 'Caoba', '/assets/moldings1/named_materials/mahogany.jpg', 'Wood', 'Madera'),
('Maple', 'Arce', '/assets/moldings1/named_materials/maple.jpg', 'Wood', 'Madera'),
('Olive Wood', 'Madera de Olivo', '/assets/moldings1/named_materials/olive_wood.jpg', 'Exotic', 'Exótico'),
('Pine', 'Pino', '/assets/moldings1/named_materials/pine.jpg', 'Wood', 'Madera'),
('Polished Brass', 'Latón Pulido', '/assets/moldings1/named_materials/polished_brass.jpg', 'Metallic', 'Metálico'),
('Purpleheart', 'Corazón Púrpura', '/assets/moldings1/named_materials/purpleheart.jpg', 'Exotic', 'Exótico'),
('Rattan', 'Ratán', '/assets/moldings1/named_materials/rattan.jpg', 'Natural', 'Natural'),
('Red Oak', 'Roble Rojo', '/assets/moldings1/named_materials/red_oak.jpg', 'Wood', 'Madera'),
('Rosewood', 'Palo de Rosa', '/assets/moldings1/named_materials/rosewood.jpg', 'Exotic', 'Exótico'),
('Spalted Maple', 'Arce Espaltado', '/assets/moldings1/named_materials/spalted_maple.jpg', 'Exotic', 'Exótico'),
('Teak', 'Teca', '/assets/moldings1/named_materials/teak.jpg', 'Wood', 'Madera'),
('Walnut', 'Nogal', '/assets/moldings1/named_materials/walnut.jpg', 'Wood', 'Madera'),
('White Oak', 'Roble Blanco', '/assets/moldings1/named_materials/white_oak.jpg', 'Wood', 'Madera'),
('Zebrawood', 'Zebrawood', '/assets/moldings1/named_materials/zebrawood.jpg', 'Exotic', 'Exótico');

-- 3. Insert updated mat color groups
INSERT INTO mat_color_groups (id, name_en, name_es) VALUES
(1, 'Whites & Creams', 'Blancos y Cremas'),
(2, 'Grays & Charcoal', 'Gris y Carbón'),
(3, 'Warm & Earthy', 'Cálidos y Terrosos'),
(4, 'Blues & Greens', 'Azules y Verdes'),
(5, 'Reds & Purples', 'Rojos y Purpúreos');

-- 4. Insert updated mat colors
-- Group 1: Whites & Creams
INSERT INTO mat_colors (group_id, name_en, name_es, value) VALUES
(1, 'Pure White', 'Blanco Puro', '#FFFFFF'),
(1, 'Antique White', 'Blanco Antiguo', '#F5F5F0'),
(1, 'Snow White', 'Blanco Nieve', '#F8FBF8'),
(1, 'Soft Cream', 'Crema Suave', '#FFFDD0'),
(1, 'Ivory', 'Marfil', '#FFFFF0'),
(1, 'Linen', 'Lino', '#FAF0E6'),
(1, 'Pearl', 'Conchaperla', '#F0EAD6'),
(1, 'Vanilla', 'Vainilla', '#F3E5AB');

-- Group 2: Grays & Charcoal
INSERT INTO mat_colors (group_id, name_en, name_es, value) VALUES
(2, 'Soft Gray', 'Gris Suave', '#D3D3D3'),
(2, 'Silver Gray', 'Gris Plata', '#C0C0C0'),
(2, 'Smoke Gray', 'Gris Humo', '#708090'),
(2, 'Ash Gray', 'Gris Ceniza', '#B2BEB5'),
(2, 'Charcoal', 'Carbón', '#36454F'),
(2, 'Slate', 'Gris Pizarra', '#2F4F4F'),
(2, 'Gallery Black', 'Negro Galería', '#1a1a1a'),
(2, 'Matte Black', 'Negro Mate', '#000000');

-- Group 3: Warm & Earthy
INSERT INTO mat_colors (group_id, name_en, name_es, value) VALUES
(3, 'Sand', 'Arena', '#C2B280'),
(3, 'Ochre', 'Ocre', '#CC7722'),
(3, 'Terracotta', 'Terracota', '#E2725B'),
(3, 'Sienna', 'Siena', '#A0522D'),
(3, 'Clay', 'Arcilla', '#B66A50'),
(3, 'Coffee', 'Café', '#6F4E37'),
(3, 'Cinnamon', 'Canela', '#D2691E'),
(3, 'Tan', 'Bronceado', '#D2B48C');

-- Group 4: Blues & Greens
INSERT INTO mat_colors (group_id, name_en, name_es, value) VALUES
(4, 'Navy Blue', 'Azul Marino', '#1B2A4A'),
(4, 'Royal Blue', 'Azul Real', '#002366'),
(4, 'Slate Blue', 'Azul Pizarra', '#6A5ACD'),
(4, 'Forest Green', 'Verde Bosque', '#1B3022'),
(4, 'Sage Green', 'Verde Salvia', '#8A9A5B'),
(4, 'Olive Green', 'Verde Oliva', '#556B2F'),
(4, 'Hunter Green', 'Verde Cazador', '#355E3B'),
(4, 'Dark Teal', 'Turquesa Oscuro', '#008080');

-- Group 5: Reds & Purples
INSERT INTO mat_colors (group_id, name_en, name_es, value) VALUES
(5, 'Burgundy', 'Borgoña', '#4A1B1B'),
(5, 'Wine Red', 'Rojo Vino', '#722F37'),
(5, 'Crimson', 'Carmesí', '#990000'),
(5, 'Deep Plum', 'Ciruela Profundo', '#361B30'),
(5, 'Eggplant', 'Berenjena', '#614051'),
(5, 'Amethyst', 'Amatista', '#9966CC'),
(5, 'Brick Red', 'Ladrillo', '#CB4154'),
(5, 'Mauve', 'Mauve', '#E0B0FF');
