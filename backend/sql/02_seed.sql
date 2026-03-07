-- Seed data: Productos
INSERT INTO products (file, title, category, description, price) VALUES
('20180125_170337.jpg', 'Marco Nogal Clasico', 'Enmarcado', 'Marco de nogal profundo hecho a medida, perfecto para retratos familiares.', 850),
('20180202_164440.jpg', 'Caja de Sombras Roble', 'Enmarcado', 'Caja de sombras de roble rustico acabada a mano para preservar recuerdos.', 1200),
('20180205_165928.jpg', 'Marco Galeria Moderno', 'Enmarcado', 'Marco de galeria negro con montaje de archivo de calidad museo.', 950),
('20180208_184850.jpg', 'Acabado Dorado Ornamentado', 'Restauracion', 'Restauracion de marco antiguo con hoja de oro, devolviendo la historia a la vida.', 1500),
('20180208_184953.jpg', 'Maple Minimalista', 'Enmarcado', 'Marco de madera de maple natural con acabado transparente contemporaneo.', 750),
('20180215_185709.jpg', 'Blanco Vintage', 'Enmarcado', 'Marco blanco desgastado perfecto para decoracion costera o campestre.', 680),
('20180329_104214.jpg', 'Flotador para Canvas', 'Montaje', 'Marco flotador personalizado que da la ilusion del canvas flotando.', 1100),
('20180423_193653.jpg', 'Presentacion Doble Mat', 'Enmarcado', 'Elegante doble matting en crema y azul marino para acentuar la obra.', 900),
('20180503_192206.jpg', 'Restauracion de Herencia', 'Restauracion', 'Trabajo detallado de restauracion en un marco danado de mediados de siglo.', 1800),
('20180507_183731.jpg', 'Certificado Corporativo', 'Enmarcado', 'Enmarcado profesional para diplomas y premios corporativos.', 550),
('20180509_151018.jpg', 'Union de Esquinas Artesanal', 'Enmarcado', 'Mostrando nuestras tecnicas de precision en union de esquinas.', 1050),
('20180619_213821.jpg', 'Gran Formato Personalizado', 'Enmarcado', 'Marco personalizado reforzado para fotografia de gran escala.', 2200),
('20180623_194708.jpg', 'Exhibidor de Jersey', 'Montaje', 'Caja de sombras profunda con vidrio UV para proteger un jersey firmado.', 1600),
('20180714_222234.jpg', 'Mezcla Eclectica', 'Enmarcado', 'Una combinacion unica de elementos modernos y tradicionales.', 980),
('20180819_145754.jpg', 'Preservacion de Arte Fino', 'Enmarcado', 'Enmarcado de conservacion con materiales libres de acido para arte valioso.', 1350),
('20180831_193243.jpg', 'Textura y Profundidad', 'Enmarcado', 'Perfil de marco texturizado para agregar profundidad a una impresion plana.', 870),
('DSC_0022.JPG', 'Coleccion Pared Galeria', 'Enmarcado', 'Parte de un conjunto cohesivo para la pared de galeria de un cliente.', 920),
('DSC_0100.JPG', 'Tallado en Madera Detallado', 'Enmarcado', 'Detalles intricados de tallado en madera en un marco personalizado.', 1450),
('DSC_0871.JPG', 'Marco Acento Metalico', 'Enmarcado', 'Marco con acabado de metal cepillado para interiores industriales modernos.', 1050),
('FB_IMG_1516136999466.jpg', 'Enmarcado de Espejo', 'Enmarcado', 'Transformando un espejo simple en una pieza de declaracion.', 1150),
('IMG_20180208_185310_102.jpg', 'Acabado Tenido a Mano', 'Enmarcado', 'Tinte mezclado a medida para combinar con los muebles existentes del cliente.', 980),
('IMG-20180414-WA0023.jpg', 'Serie Foto de Boda', 'Enmarcado', 'Enmarcado elegante y romantico para fotografia de boda.', 1100),
('IMG-20180414-WA0024.jpg', 'Herencia Familiar', 'Enmarcado', 'Preservando fotografias familiares antiguas con estandares de archivo.', 850),
('IMG-20180415-WA0020.jpg', 'Exhibicion de Artista', 'Enmarcado', 'Enmarcado disenado para dejar que el arte hable por si mismo.', 780),
('IMG-20180526-WA0038.jpg', 'Color Audaz', 'Enmarcado', 'Un color vibrante de marco elegido para resaltar contra una pared neutral.', 720),
('IMG-20180528-WA0014.jpg', 'Elegancia Sutil', 'Enmarcado', 'Diseno discreto que complementa en lugar de competir.', 690),
('IMG-20180611-WA0045.jpg', 'Proceso de Taller', 'Restauracion', 'Detras de escenas en nuestro taller de madera.', 600),
('IMG-20180611-WA0046.jpg', 'Corte de Precision', 'Restauracion', 'Asegurando que cada angulo sea perfecto para una union sin costuras.', 650),
('IMG-20180611-WA0047.jpg', 'Ensamblaje Final', 'Restauracion', 'Los toques finales antes de que la pieza este lista para entrega.', 700),
('IMG-20180908-WA0022.jpeg', 'Pieza de Exhibicion', 'Restauracion', 'La obra terminada lista para exhibir en el hogar del cliente.', 950);

-- Seed data: Portafolio
INSERT INTO portfolio (file, title, category, description, aspect) VALUES
('20180125_170337.jpg', 'Classic Walnut Frame', 'Framing', 'A timeless deep walnut frame custom-built for a family portrait.', 'aspect-square'),
('20180202_164440.jpg', 'Rustic Oak Shadowbox', 'Framing', 'Hand-finished rustic oak shadowbox designed to preserve memorabilia.', 'aspect-[3/4]'),
('20180205_165928.jpg', 'Modern Gallery Frame', 'Framing', 'Sleek black gallery frame with museum-grade archival matting.', 'aspect-[4/3]'),
('20180208_184850.jpg', 'Ornate Gold Finish', 'Maintenance', 'Restoration of an antique gold-leaf frame, bringing history back to life.', 'aspect-square'),
('20180208_184953.jpg', 'Minimalist Maple', 'Framing', 'Natural maple wood frame with a clear finish for a contemporary look.', 'aspect-[3/4]'),
('20180215_185709.jpg', 'Vintage White Wash', 'Framing', 'Distressed white frame perfect for coastal or farmhouse decor.', 'aspect-[4/3]'),
('20180329_104214.jpg', 'Deep Canvas Floater', 'Mounting', 'A custom floater frame that gives the illusion of the canvas floating inside.', 'aspect-square'),
('20180423_193653.jpg', 'Double Mat Presentation', 'Framing', 'Elegant double matting in cream and navy to accent the artwork.', 'aspect-[3/4]'),
('20180503_192206.jpg', 'Heirloom Restoration', 'Maintenance', 'Detailed restoration work on a damaged mid-century frame.', 'aspect-[4/3]'),
('20180507_183731.jpg', 'Corporate Certificate', 'Framing', 'Professional framing for diplomas and corporate awards.', 'aspect-square'),
('20180509_151018.jpg', 'Artisan Corner Joinery', 'Framing', 'Showcasing our precision corner joinery techniques.', 'aspect-[3/4]'),
('20180619_213821.jpg', 'Large Format Custom', 'Framing', 'Oversized custom frame built reinforced for large-scale photography.', 'aspect-[4/3]'),
('20180623_194708.jpg', 'Sports Jersey Display', 'Mounting', 'Deep shadowbox with UV glass to protect a signed jersey.', 'aspect-square'),
('20180714_222234.jpg', 'Eclectic Mix', 'Framing', 'A unique combination of modern and traditional elements.', 'aspect-[3/4]'),
('20180819_145754.jpg', 'Fine Art Preservation', 'Framing', 'Conservation framing using acid-free materials to protect valuable art.', 'aspect-[4/3]'),
('20180831_193243.jpg', 'Texture & Depth', 'Framing', 'Using a textured frame profile to add depth to a flat print.', 'aspect-square'),
('DSC_0022.JPG', 'Gallery Wall Collection', 'Framing', 'Part of a cohesive set designed for a client''s gallery wall.', 'aspect-[3/4]'),
('DSC_0100.JPG', 'Detailed Wood Carving', 'Framing', 'Close-up of intricate wood carving details on a custom frame.', 'aspect-[4/3]'),
('DSC_0871.JPG', 'Metallic Accent Frame', 'Framing', 'Brushed metal finish frame suitable for modern industrial interiors.', 'aspect-square'),
('FB_IMG_1516136999466.jpg', 'Custom Mirror Framing', 'Framing', 'Transforming a simple mirror into a statement piece.', 'aspect-[3/4]'),
('IMG_20180208_185310_102.jpg', 'Hand-Stained Finish', 'Framing', 'Custom mixed stain to match the client''s existing furniture.', 'aspect-[4/3]'),
('IMG-20180414-WA0023.jpg', 'Wedding Photo Series', 'Framing', 'Elegant and romantic framing for wedding photography.', 'aspect-square'),
('IMG-20180414-WA0024.jpg', 'Family Heritage', 'Framing', 'Preserving old family photographs with archival standards.', 'aspect-[3/4]'),
('IMG-20180415-WA0020.jpg', 'Artist Showcase', 'Framing', 'Framing designed to let the art speak for itself.', 'aspect-[4/3]'),
('IMG-20180526-WA0038.jpg', 'Bold Color Choice', 'Framing', 'A vibrant frame color chosen to pop against a neutral wall.', 'aspect-square'),
('IMG-20180528-WA0014.jpg', 'Subtle Elegance', 'Framing', 'Understated design that complements rather than competes.', 'aspect-[3/4]'),
('IMG-20180611-WA0045.jpg', 'Workshop Process', 'Maintenance', 'Behind the scenes in our woodshop.', 'aspect-[4/3]'),
('IMG-20180611-WA0046.jpg', 'Precision Cutting', 'Maintenance', 'Ensuring every angle is perfect for a seamless joint.', 'aspect-square'),
('IMG-20180611-WA0047.jpg', 'Final Assembly', 'Maintenance', 'The final touches before the piece is ready for delivery.', 'aspect-[3/4]'),
('IMG-20180908-WA0022.jpeg', 'Showcase Piece', 'Maintenance', 'The finished work ready to be displayed in the client''s home.', 'aspect-[4/3]');

-- Seed data: Molduras
INSERT INTO moldings (name, file, category) VALUES
('Dark Walnut', '/assets/moldings/walnut.svg', 'Wood'),
('Classic Oak', '/assets/moldings/oak.svg', 'Wood'),
('Cherry Wood', '/assets/moldings/cherry.svg', 'Wood'),
('Classic Crown', '/assets/moldings/crown_molding.svg', 'Wood'),
('Maple Base', '/assets/moldings/baseboard.svg', 'Wood'),
('Mahogany Rail', '/assets/moldings/chair_rail.svg', 'Wood'),
('Gold Leaf', '/assets/moldings/gold.svg', 'Metallic');

-- Seed data: Grupos de colores
INSERT INTO mat_color_groups (id, name) VALUES
(1, 'Neutrals'),
(2, 'Bolds'),
(3, 'Earthy');

-- Seed data: Colores de matboard
INSERT INTO mat_colors (group_id, name, value) VALUES
(1, 'Pure White', '#FFFFFF'),
(1, 'Antique White', '#F5F5F0'),
(1, 'Cream', '#FFFDD0'),
(1, 'Soft Gray', '#D3D3D3'),
(1, 'Charcoal', '#36454F'),
(1, 'Gallery Black', '#1a1a1a'),
(2, 'Navy Blue', '#1B2A4A'),
(2, 'Burgundy', '#4A1B1B'),
(2, 'Forest Green', '#1B3022'),
(2, 'Deep Plum', '#361B30'),
(3, 'Sage Green', '#8A9A5B'),
(3, 'Ochre', '#CC7722'),
(3, 'Terracotta', '#E2725B'),
(3, 'Slate Blue', '#708090');

-- Seed data: Servicios
INSERT INTO services (title, description, icon) VALUES
('Custom Framing', 'Tailored frames designed to perfectly complement and protect your artwork, using premium hardwoods like Walnut, Oak, and Mahogany.', 'Ruler'),
('Large-Scale Frames', 'Specialized structural framing for oversized pieces, ensuring stability and visual impact without compromising elegance.', 'Image'),
('Artistic Mounting', 'Museum-quality mounting techniques that preserve the integrity of your pieces while enhancing their presentation.', 'Palette');
