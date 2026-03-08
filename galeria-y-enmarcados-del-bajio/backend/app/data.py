from .models import (
    ProductInternal,
    PortfolioItemInternal,
    MoldingInternal,
    MatColorGroupInternal,
    MatColorInternal,
    ServiceInternal,
)

products: list[ProductInternal] = [
    ProductInternal(
        id=1, file="20180125_170337.jpg",
        title_es="Marco Nogal Clasico", title_en="Classic Walnut Frame",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Marco de nogal profundo hecho a medida, perfecto para retratos familiares.", desc_en="A timeless deep walnut frame custom-built for a family portrait.",
        price=850
    ),
    ProductInternal(
        id=2, file="20180202_164440.jpg",
        title_es="Caja de Sombras Roble", title_en="Rustic Oak Shadowbox",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Caja de sombras de roble rustico acabada a mano para preservar recuerdos.", desc_en="Hand-finished rustic oak shadowbox designed to preserve memorabilia.",
        price=1200
    ),
    ProductInternal(
        id=3, file="20180205_165928.jpg",
        title_es="Marco Galeria Moderno", title_en="Modern Gallery Frame",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Marco de galeria negro con montaje de archivo de calidad museo.", desc_en="Sleek black gallery frame with museum-grade archival matting.",
        price=950
    ),
    ProductInternal(
        id=4, file="20180208_184850.jpg",
        title_es="Acabado Dorado Ornamentado", title_en="Ornate Gold Finish",
        category_es="Restauracion", category_en="Maintenance",
        desc_es="Restauracion de marco antiguo con hoja de oro, devolviendo la historia a la vida.", desc_en="Restoration of an antique gold-leaf frame, bringing history back to life.",
        price=1500
    ),
    ProductInternal(
        id=5, file="20180208_184953.jpg",
        title_es="Maple Minimalista", title_en="Minimalist Maple",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Marco de madera de maple natural con acabado transparente contemporaneo.", desc_en="Natural maple wood frame with a clear finish for a contemporary look.",
        price=750
    ),
    ProductInternal(
        id=6, file="20180215_185709.jpg",
        title_es="Blanco Vintage", title_en="Vintage White Wash",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Marco blanco desgastado perfecto para decoracion costera o campestre.", desc_en="Distressed white frame perfect for coastal or farmhouse decor.",
        price=680
    ),
    ProductInternal(
        id=7, file="20180329_104214.jpg",
        title_es="Flotador para Canvas", title_en="Deep Canvas Floater",
        category_es="Montaje", category_en="Mounting",
        desc_es="Marco flotador personalizado que da la ilusion del canvas flotando.", desc_en="A custom floater frame that gives the illusion of the canvas floating inside.",
        price=1100
    ),
    ProductInternal(
        id=8, file="20180423_193653.jpg",
        title_es="Presentacion Doble Mat", title_en="Double Mat Presentation",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Elegante doble matting en crema y azul marino para acentuar la obra.", desc_en="Elegant double matting in cream and navy to accent the artwork.",
        price=900
    ),
    ProductInternal(
        id=9, file="20180503_192206.jpg",
        title_es="Restauracion de Herencia", title_en="Heirloom Restoration",
        category_es="Restauracion", category_en="Maintenance",
        desc_es="Trabajo detallado de restauracion en un marco danado de mediados de siglo.", desc_en="Detailed restoration work on a damaged mid-century frame.",
        price=1800
    ),
    ProductInternal(
        id=10, file="20180507_183731.jpg",
        title_es="Certificado Corporativo", title_en="Corporate Certificate",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Enmarcado profesional para diplomas y premios corporativos.", desc_en="Professional framing for diplomas and corporate awards.",
        price=550
    ),
    ProductInternal(
        id=11, file="20180509_151018.jpg",
        title_es="Union de Esquinas Artesanal", title_en="Artisan Corner Joinery",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Mostrando nuestras tecnicas de precision en union de esquinas.", desc_en="Showcasing our precision corner joinery techniques.",
        price=1050
    ),
    ProductInternal(
        id=12, file="20180619_213821.jpg",
        title_es="Gran Formato Personalizado", title_en="Large Format Custom",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Marco personalizado reforzado para fotografia de gran escala.", desc_en="Oversized custom frame built reinforced for large-scale photography.",
        price=2200
    ),
    ProductInternal(
        id=13, file="20180623_194708.jpg",
        title_es="Exhibidor de Jersey", title_en="Sports Jersey Display",
        category_es="Montaje", category_en="Mounting",
        desc_es="Caja de sombras profunda con vidrio UV para proteger un jersey firmado.", desc_en="Deep shadowbox with UV glass to protect a signed jersey.",
        price=1600
    ),
    ProductInternal(
        id=14, file="20180714_222234.jpg",
        title_es="Mezcla Eclectica", title_en="Eclectic Mix",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Una combinacion unica de elementos modernos y tradicionales.", desc_en="A unique combination of modern and traditional elements.",
        price=980
    ),
    ProductInternal(
        id=15, file="20180819_145754.jpg",
        title_es="Preservacion de Arte Fino", title_en="Fine Art Preservation",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Enmarcado de conservacion con materiales libres de acido para arte valioso.", desc_en="Conservation framing using acid-free materials to protect valuable art.",
        price=1350
    ),
    ProductInternal(
        id=16, file="20180831_193243.jpg",
        title_es="Textura y Profundidad", title_en="Texture & Depth",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Perfil de marco texturizado para agregar profundidad a una impresion plana.", desc_en="Using a textured frame profile to add depth to a flat print.",
        price=870
    ),
    ProductInternal(
        id=17, file="DSC_0022.JPG",
        title_es="Coleccion Pared Galeria", title_en="Gallery Wall Collection",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Parte de un conjunto cohesivo para la pared de galeria de un cliente.", desc_en="Part of a cohesive set designed for a client's gallery wall.",
        price=920
    ),
    ProductInternal(
        id=18, file="DSC_0100.JPG",
        title_es="Tallado en Madera Detallado", title_en="Detailed Wood Carving",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Detalles intricados de tallado en madera en un marco personalizado.", desc_en="Close-up of intricate wood carving details on a custom frame.",
        price=1450
    ),
    ProductInternal(
        id=19, file="DSC_0871.JPG",
        title_es="Marco Acento Metalico", title_en="Metallic Accent Frame",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Marco con acabado de metal cepillado para interiores industriales modernos.", desc_en="Brushed metal finish frame suitable for modern industrial interiors.",
        price=1050
    ),
    ProductInternal(
        id=20, file="FB_IMG_1516136999466.jpg",
        title_es="Enmarcado de Espejo", title_en="Custom Mirror Framing",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Transformando un espejo simple en una pieza de declaracion.", desc_en="Transforming a simple mirror into a statement piece.",
        price=1150
    ),
    ProductInternal(
        id=21, file="IMG_20180208_185310_102.jpg",
        title_es="Acabado Tenido a Mano", title_en="Hand-Stained Finish",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Tinte mezclado a medida para combinar con los muebles existentes del cliente.", desc_en="Custom mixed stain to match the client's existing furniture.",
        price=980
    ),
    ProductInternal(
        id=22, file="IMG-20180414-WA0023.jpg",
        title_es="Serie Foto de Boda", title_en="Wedding Photo Series",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Enmarcado elegante y romantico para fotografia de boda.", desc_en="Elegant and romantic framing for wedding photography.",
        price=1100
    ),
    ProductInternal(
        id=23, file="IMG-20180414-WA0024.jpg",
        title_es="Herencia Familiar", title_en="Family Heritage",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Preservando fotografias familiares antiguas con estandares de archivo.", desc_en="Preserving old family photographs with archival standards.",
        price=850
    ),
    ProductInternal(
        id=24, file="IMG-20180415-WA0020.jpg",
        title_es="Exhibicion de Artista", title_en="Artist Showcase",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Enmarcado disenado para dejar que el arte hable por si mismo.", desc_en="Framing designed to let the art speak for itself.",
        price=780
    ),
    ProductInternal(
        id=25, file="IMG-20180526-WA0038.jpg",
        title_es="Color Audaz", title_en="Bold Color Choice",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Un color vibrante de marco elegido para resaltar contra una pared neutral.", desc_en="A vibrant frame color chosen to pop against a neutral wall.",
        price=720
    ),
    ProductInternal(
        id=26, file="IMG-20180528-WA0014.jpg",
        title_es="Elegancia Sutil", title_en="Subtle Elegance",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Diseno discreto que complementa en lugar de competir.", desc_en="Understated design that complements rather than competes.",
        price=690
    ),
    ProductInternal(
        id=27, file="IMG-20180611-WA0045.jpg",
        title_es="Proceso de Taller", title_en="Workshop Process",
        category_es="Restauracion", category_en="Maintenance",
        desc_es="Detras de escenas en nuestro taller de madera.", desc_en="Behind the scenes in our woodshop.",
        price=600
    ),
    ProductInternal(
        id=28, file="IMG-20180611-WA0046.jpg",
        title_es="Corte de Precision", title_en="Precision Cutting",
        category_es="Restauracion", category_en="Maintenance",
        desc_es="Asegurando que cada angulo sea perfecto para una union sin costuras.", desc_en="Ensuring every angle is perfect for a seamless joint.",
        price=650
    ),
    ProductInternal(
        id=29, file="IMG-20180611-WA0047.jpg",
        title_es="Ensamblaje Final", title_en="Final Assembly",
        category_es="Restauracion", category_en="Maintenance",
        desc_es="Los toques finales antes de que la pieza este lista para entrega.", desc_en="The final touches before the piece is ready for delivery.",
        price=700
    ),
    ProductInternal(
        id=30, file="IMG-20180908-WA0022.jpeg",
        title_es="Pieza de Exhibicion", title_en="Showcase Piece",
        category_es="Restauracion", category_en="Maintenance",
        desc_es="La obra terminada lista para exhibir en el hogar del cliente.", desc_en="The finished work ready to be displayed in the client's home.",
        price=950
    ),
]

portfolio_items: list[PortfolioItemInternal] = [
    PortfolioItemInternal(
        id=1, file="20180125_170337.jpg",
        title_es="Marco Nogal Clasico", title_en="Classic Walnut Frame",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Marco de nogal profundo hecho a medida, perfecto para retratos familiares.", desc_en="A timeless deep walnut frame custom-built for a family portrait.",
        aspect="aspect-square"
    ),
    PortfolioItemInternal(
        id=2, file="20180202_164440.jpg",
        title_es="Caja de Sombras Roble", title_en="Rustic Oak Shadowbox",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Caja de sombras de roble rustico acabada a mano para preservar recuerdos.", desc_en="Hand-finished rustic oak shadowbox designed to preserve memorabilia.",
        aspect="aspect-[3/4]"
    ),
    PortfolioItemInternal(
        id=3, file="20180205_165928.jpg",
        title_es="Marco Galeria Moderno", title_en="Modern Gallery Frame",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Marco de galeria negro con montaje de archivo de calidad museo.", desc_en="Sleek black gallery frame with museum-grade archival matting.",
        aspect="aspect-[4/3]"
    ),
    PortfolioItemInternal(
        id=4, file="20180208_184850.jpg",
        title_es="Acabado Dorado Ornamentado", title_en="Ornate Gold Finish",
        category_es="Restauracion", category_en="Maintenance",
        desc_es="Restauracion de marco antiguo con hoja de oro, devolviendo la historia a la vida.", desc_en="Restoration of an antique gold-leaf frame, bringing history back to life.",
        aspect="aspect-square"
    ),
    PortfolioItemInternal(
        id=5, file="20180208_184953.jpg",
        title_es="Maple Minimalista", title_en="Minimalist Maple",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Marco de madera de maple natural con acabado transparente contemporaneo.", desc_en="Natural maple wood frame with a clear finish for a contemporary look.",
        aspect="aspect-[3/4]"
    ),
    PortfolioItemInternal(
        id=6, file="20180215_185709.jpg",
        title_es="Blanco Vintage", title_en="Vintage White Wash",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Marco blanco desgastado perfecto para decoracion costera o campestre.", desc_en="Distressed white frame perfect for coastal or farmhouse decor.",
        aspect="aspect-[4/3]"
    ),
    PortfolioItemInternal(
        id=7, file="20180329_104214.jpg",
        title_es="Flotador para Canvas", title_en="Deep Canvas Floater",
        category_es="Montaje", category_en="Mounting",
        desc_es="Marco flotador personalizado que da la ilusion del canvas flotando.", desc_en="A custom floater frame that gives the illusion of the canvas floating inside.",
        aspect="aspect-square"
    ),
    PortfolioItemInternal(
        id=8, file="20180423_193653.jpg",
        title_es="Presentacion Doble Mat", title_en="Double Mat Presentation",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Elegante doble matting en crema y azul marino para acentuar la obra.", desc_en="Elegant double matting in cream and navy to accent the artwork.",
        aspect="aspect-[3/4]"
    ),
    PortfolioItemInternal(
        id=9, file="20180503_192206.jpg",
        title_es="Restauracion de Herencia", title_en="Heirloom Restoration",
        category_es="Restauracion", category_en="Maintenance",
        desc_es="Trabajo detallado de restauracion en un marco danado de mediados de siglo.", desc_en="Detailed restoration work on a damaged mid-century frame.",
        aspect="aspect-[4/3]"
    ),
    PortfolioItemInternal(
        id=10, file="20180507_183731.jpg",
        title_es="Certificado Corporativo", title_en="Corporate Certificate",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Enmarcado profesional para diplomas y premios corporativos.", desc_en="Professional framing for diplomas and corporate awards.",
        aspect="aspect-square"
    ),
    PortfolioItemInternal(
        id=11, file="20180509_151018.jpg",
        title_es="Union de Esquinas Artesanal", title_en="Artisan Corner Joinery",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Mostrando nuestras tecnicas de precision en union de esquinas.", desc_en="Showcasing our precision corner joinery techniques.",
        aspect="aspect-[3/4]"
    ),
    PortfolioItemInternal(
        id=12, file="20180619_213821.jpg",
        title_es="Gran Formato Personalizado", title_en="Large Format Custom",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Marco personalizado reforzado para fotografia de gran escala.", desc_en="Oversized custom frame built reinforced for large-scale photography.",
        aspect="aspect-[4/3]"
    ),
    PortfolioItemInternal(
        id=13, file="20180623_194708.jpg",
        title_es="Exhibidor de Jersey", title_en="Sports Jersey Display",
        category_es="Montaje", category_en="Mounting",
        desc_es="Caja de sombras profunda con vidrio UV para proteger un jersey firmado.", desc_en="Deep shadowbox with UV glass to protect a signed jersey.",
        aspect="aspect-square"
    ),
    PortfolioItemInternal(
        id=14, file="20180714_222234.jpg",
        title_es="Mezcla Eclectica", title_en="Eclectic Mix",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Una combinacion unica de elementos modernos y tradicionales.", desc_en="A unique combination of modern and traditional elements.",
        aspect="aspect-[3/4]"
    ),
    PortfolioItemInternal(
        id=15, file="20180819_145754.jpg",
        title_es="Preservacion de Arte Fino", title_en="Fine Art Preservation",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Enmarcado de conservacion con materiales libres de acido para arte valioso.", desc_en="Conservation framing using acid-free materials to protect valuable art.",
        aspect="aspect-[4/3]"
    ),
    PortfolioItemInternal(
        id=16, file="20180831_193243.jpg",
        title_es="Textura y Profundidad", title_en="Texture & Depth",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Perfil de marco texturizado para agregar profundidad a una impresion plana.", desc_en="Using a textured frame profile to add depth to a flat print.",
        aspect="aspect-square"
    ),
    PortfolioItemInternal(
        id=17, file="DSC_0022.JPG",
        title_es="Coleccion Pared Galeria", title_en="Gallery Wall Collection",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Parte de un conjunto cohesivo para la pared de galeria de un cliente.", desc_en="Part of a cohesive set designed for a client's gallery wall.",
        aspect="aspect-[3/4]"
    ),
    PortfolioItemInternal(
        id=18, file="DSC_0100.JPG",
        title_es="Tallado en Madera Detallado", title_en="Detailed Wood Carving",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Detalles intricados de tallado en madera en un marco personalizado.", desc_en="Close-up of intricate wood carving details on a custom frame.",
        aspect="aspect-[4/3]"
    ),
    PortfolioItemInternal(
        id=19, file="DSC_0871.JPG",
        title_es="Marco Acento Metalico", title_en="Metallic Accent Frame",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Marco con acabado de metal cepillado para interiores industriales modernos.", desc_en="Brushed metal finish frame suitable for modern industrial interiors.",
        aspect="aspect-square"
    ),
    PortfolioItemInternal(
        id=20, file="FB_IMG_1516136999466.jpg",
        title_es="Enmarcado de Espejo", title_en="Custom Mirror Framing",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Transformando un espejo simple en una pieza de declaracion.", desc_en="Transforming a simple mirror into a statement piece.",
        aspect="aspect-[3/4]"
    ),
    PortfolioItemInternal(
        id=21, file="IMG_20180208_185310_102.jpg",
        title_es="Acabado Tenido a Mano", title_en="Hand-Stained Finish",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Tinte mezclado a medida para combinar con los muebles existentes del cliente.", desc_en="Custom mixed stain to match the client's existing furniture.",
        aspect="aspect-[4/3]"
    ),
    PortfolioItemInternal(
        id=22, file="IMG-20180414-WA0023.jpg",
        title_es="Serie Foto de Boda", title_en="Wedding Photo Series",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Enmarcado elegante y romantico para fotografia de boda.", desc_en="Elegant and romantic framing for wedding photography.",
        aspect="aspect-square"
    ),
    PortfolioItemInternal(
        id=23, file="IMG-20180414-WA0024.jpg",
        title_es="Herencia Familiar", title_en="Family Heritage",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Preservando fotografias familiares antiguas con estandares de archivo.", desc_en="Preserving old family photographs with archival standards.",
        aspect="aspect-[3/4]"
    ),
    PortfolioItemInternal(
        id=24, file="IMG-20180415-WA0020.jpg",
        title_es="Exhibicion de Artista", title_en="Artist Showcase",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Enmarcado disenado para dejar que el arte hable por si mismo.", desc_en="Framing designed to let the art speak for itself.",
        aspect="aspect-[4/3]"
    ),
    PortfolioItemInternal(
        id=25, file="IMG-20180526-WA0038.jpg",
        title_es="Color Audaz", title_en="Bold Color Choice",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Un color vibrante de marco elegido para resaltar contra una pared neutral.", desc_en="A vibrant frame color chosen to pop against a neutral wall.",
        aspect="aspect-square"
    ),
    PortfolioItemInternal(
        id=26, file="IMG-20180528-WA0014.jpg",
        title_es="Elegancia Sutil", title_en="Subtle Elegance",
        category_es="Enmarcado", category_en="Framing",
        desc_es="Diseno discreto que complementa en lugar de competir.", desc_en="Understated design that complements rather than competes.",
        aspect="aspect-[3/4]"
    ),
    PortfolioItemInternal(
        id=27, file="IMG-20180611-WA0045.jpg",
        title_es="Proceso de Taller", title_en="Workshop Process",
        category_es="Restauracion", category_en="Maintenance",
        desc_es="Detras de escenas en nuestro taller de madera.", desc_en="Behind the scenes in our woodshop.",
        aspect="aspect-[4/3]"
    ),
    PortfolioItemInternal(
        id=28, file="IMG-20180611-WA0046.jpg",
        title_es="Corte de Precision", title_en="Precision Cutting",
        category_es="Restauracion", category_en="Maintenance",
        desc_es="Asegurando que cada angulo sea perfecto para una union sin costuras.", desc_en="Ensuring every angle is perfect for a seamless joint.",
        aspect="aspect-square"
    ),
    PortfolioItemInternal(
        id=29, file="IMG-20180611-WA0047.jpg",
        title_es="Ensamblaje Final", title_en="Final Assembly",
        category_es="Restauracion", category_en="Maintenance",
        desc_es="Los toques finales antes de que la pieza este lista para entrega.", desc_en="The final touches before the piece is ready for delivery.",
        aspect="aspect-[3/4]"
    ),
    PortfolioItemInternal(
        id=30, file="IMG-20180908-WA0022.jpeg",
        title_es="Pieza de Exhibicion", title_en="Showcase Piece",
        category_es="Restauracion", category_en="Maintenance",
        desc_es="La obra terminada lista para exhibir en el hogar del cliente.", desc_en="The finished work ready to be displayed in the client's home.",
        aspect="aspect-[4/3]"
    ),
]

moldings: list[MoldingInternal] = [
    MoldingInternal(name_es="Nogal Oscuro", name_en="Dark Walnut", file="/assets/moldings/walnut.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Roble Clasico", name_en="Classic Oak", file="/assets/moldings/oak.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Madera de Cerezo", name_en="Cherry Wood", file="/assets/moldings/cherry.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Corona Clasica", name_en="Classic Crown", file="/assets/moldings/crown_molding.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Base de Maple", name_en="Maple Base", file="/assets/moldings/baseboard.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Borde de Caoba", name_en="Mahogany Rail", file="/assets/moldings/chair_rail.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Hoja de Oro", name_en="Gold Leaf", file="/assets/moldings/gold.svg", category_es="Metalico", category_en="Metallic"),
    MoldingInternal(name_es="Fresno Claro", name_en="Light Ash", file="/assets/moldings/ash.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Bambu Natural", name_en="Natural Bamboo", file="/assets/moldings/bamboo.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Haya", name_en="Beechwood", file="/assets/moldings/beech.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Abedul", name_en="Birch", file="/assets/moldings/birch.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Cedro", name_en="Cedar", file="/assets/moldings/cedar.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Ebano Oscuro", name_en="Dark Ebony", file="/assets/moldings/ebony.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Olmo", name_en="Elm", file="/assets/moldings/elm.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Nogal Americano", name_en="Hickory", file="/assets/moldings/hickory.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Madera de Hierro", name_en="Ironwood", file="/assets/moldings/ironwood.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Caoba Oscura", name_en="Dark Mahogany", file="/assets/moldings/mahogany_dark.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Maple Claro", name_en="Light Maple", file="/assets/moldings/maple_light.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Pino", name_en="Pine", file="/assets/moldings/pine.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Alamo", name_en="Poplar", file="/assets/moldings/poplar.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Secuoya", name_en="Redwood", file="/assets/moldings/redwood.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Palo de Rosa", name_en="Rosewood", file="/assets/moldings/rosewood.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Sicomoro", name_en="Sycamore", file="/assets/moldings/sycamore.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Teca", name_en="Teak", file="/assets/moldings/teak.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Wengue", name_en="Wenge", file="/assets/moldings/wenge.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Zebrawood", name_en="Zebrawood", file="/assets/moldings/zebrawood.svg", category_es="Madera", category_en="Wood"),
    MoldingInternal(name_es="Plata Cepillada", name_en="Brushed Silver", file="/assets/moldings/silver.svg", category_es="Metalico", category_en="Metallic"),
    MoldingInternal(name_es="Bronce Antiguo", name_en="Antique Bronze", file="/assets/moldings/bronze.svg", category_es="Metalico", category_en="Metallic"),
    MoldingInternal(name_es="Cobre", name_en="Copper", file="/assets/moldings/copper.svg", category_es="Metalico", category_en="Metallic"),
    MoldingInternal(name_es="Oro Rosa", name_en="Rose Gold", file="/assets/moldings/rose_gold.svg", category_es="Metalico", category_en="Metallic"),
    MoldingInternal(name_es="Platino", name_en="Platinum", file="/assets/moldings/platinum.svg", category_es="Metalico", category_en="Metallic"),
    MoldingInternal(name_es="Negro Mate", name_en="Matte Black", file="/assets/moldings/black_matte.svg", category_es="Pintado", category_en="Painted"),
    MoldingInternal(name_es="Blanco Mate", name_en="Matte White", file="/assets/moldings/white_matte.svg", category_es="Pintado", category_en="Painted"),
    MoldingInternal(name_es="Blanco Desgastado", name_en="Distressed White", file="/assets/moldings/distressed_white.svg", category_es: "Pintado", category_en="Painted"),
    MoldingInternal(name_es="Carbon", name_en="Charcoal", file="/assets/moldings/charcoal.svg", category_es="Pintado", category_en="Painted"),
    MoldingInternal(name_es="Azul Marino", name_en="Navy Blue", file="/assets/moldings/navy_blue.svg", category_es="Pintado", category_en="Painted"),
    MoldingInternal(name_es="Verde Bosque", name_en="Forest Green", file="/assets/moldings/forest_green.svg", category_es="Pintado", category_en="Painted"),
]

mat_color_groups: list[MatColorGroupInternal] = [
    MatColorGroupInternal(name_es="Neutros", name_en="Neutrals", colors=[
        MatColorInternal(name_es="Blanco Puro", name_en="Pure White", value="#FFFFFF"),
        MatColorInternal(name_es="Blanco Antiguo", name_en="Antique White", value="#F5F5F0"),
        MatColorInternal(name_es="Crema", name_en="Cream", value="#FFFDD0"),
        MatColorInternal(name_es="Gris Suave", name_en="Soft Gray", value="#D3D3D3"),
        MatColorInternal(name_es="Carbon", name_en="Charcoal", value="#36454F"),
        MatColorInternal(name_es="Negro Galeria", name_en="Gallery Black", value="#1a1a1a"),
    ]),
    MatColorGroupInternal(name_es="Llamativos", name_en="Bolds", colors=[
        MatColorInternal(name_es="Azul Marino", name_en="Navy Blue", value="#1B2A4A"),
        MatColorInternal(name_es="Borgona", name_en="Burgundy", value="#4A1B1B"),
        MatColorInternal(name_es="Verde Bosque", name_en="Forest Green", value="#1B3022"),
        MatColorInternal(name_es="Ciruela Profundo", name_en="Deep Plum", value="#361B30"),
    ]),
    MatColorGroupInternal(name_es="Terrosos", name_en="Earthy", colors=[
        MatColorInternal(name_es="Verde Salvia", name_en="Sage Green", value="#8A9A5B"),
        MatColorInternal(name_es="Ocre", name_en="Ochre", value="#CC7722"),
        MatColorInternal(name_es="Terracota", name_en="Terracotta", value="#E2725B"),
        MatColorInternal(name_es="Azul Pizarra", name_en="Slate Blue", value="#708090"),
    ]),
]

services: list[ServiceInternal] = [
    ServiceInternal(
        title_es="Enmarcado a Medida", title_en="Custom Framing",
        description_es="Marcos diseñados a medida para complementar y proteger perfectamente su obra de arte, utilizando maderas duras premium como Nogal, Roble y Caoba.", description_en="Tailored frames designed to perfectly complement and protect your artwork, using premium hardwoods like Walnut, Oak, and Mahogany.",
        icon="Ruler"
    ),
    ServiceInternal(
        title_es="Marcos de Gran Escala", title_en="Large-Scale Frames",
        description_es="Enmarcado estructural especializado para piezas de gran tamano, asegurando estabilidad e impacto visual sin comprometer la elegancia.", description_en="Specialized structural framing for oversized pieces, ensuring stability and visual impact without compromising elegance.",
        icon="Image"
    ),
    ServiceInternal(
        title_es="Montaje Artistico", title_en="Artistic Mounting",
        description_es="Tecnicas de montaje de calidad de museo que preservan la integridad de sus piezas mientras mejoran su presentacion.", description_en="Museum-quality mounting techniques that preserve the integrity of your pieces while enhancing their presentation.",
        icon="Palette"
    ),
]
