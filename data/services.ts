import { Ruler, Image as ImageIcon, Palette, type LucideIcon } from 'lucide-react';

export type Service = {
  title_en: string;
  title_es: string;
  description_en: string;
  description_es: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title_en: 'Custom Framing',
    title_es: 'Enmarcado a Medida',
    description_en: 'Tailored frames designed to perfectly complement and protect your artwork, using premium hardwoods like Walnut, Oak, and Mahogany.',
    description_es: 'Marcos diseñados a medida para complementar y proteger perfectamente su obra de arte, utilizando maderas duras premium como Nogal, Roble y Caoba.',
    icon: Ruler,
  },
  {
    title_en: 'Large-Scale Frames',
    title_es: 'Marcos de Gran Escala',
    description_en: 'Specialized structural framing for oversized pieces, ensuring stability and visual impact without compromising elegance.',
    description_es: 'Enmarcado estructural especializado para piezas de gran tamano, asegurando estabilidad e impacto visual sin comprometer la elegancia.',
    icon: ImageIcon,
  },
  {
    title_en: 'Artistic Mounting',
    title_es: 'Montaje Artistico',
    description_en: 'Museum-quality mounting techniques that preserve the integrity of your pieces while enhancing their presentation.',
    description_es: 'Tecnicas de montaje de calidad de museo que preservan la integridad de sus piezas mientras mejoran su presentacion.',
    icon: Palette,
  },
];
