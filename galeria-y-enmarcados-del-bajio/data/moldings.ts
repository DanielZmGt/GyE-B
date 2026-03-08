export const moldings = [
  { name_es: 'Nogal Oscuro', name_en: 'Dark Walnut', file: '/assets/moldings/walnut.svg', category_es: 'Madera', category_en: 'Wood' },
  { name_es: 'Roble Clasico', name_en: 'Classic Oak', file: '/assets/moldings/oak.svg', category_es: 'Madera', category_en: 'Wood' },
  { name_es: 'Madera de Cerezo', name_en: 'Cherry Wood', file: '/assets/moldings/cherry.svg', category_es: 'Madera', category_en: 'Wood' },
  { name_es: 'Corona Clasica', name_en: 'Classic Crown', file: '/assets/moldings/crown_molding.svg', category_es: 'Madera', category_en: 'Wood' },
  { name_es: 'Base de Maple', name_en: 'Maple Base', file: '/assets/moldings/baseboard.svg', category_es: 'Madera', category_en: 'Wood' },
  { name_es: 'Borde de Caoba', name_en: 'Mahogany Rail', file: '/assets/moldings/chair_rail.svg', category_es: 'Madera', category_en: 'Wood' },
  { name_es: 'Hoja de Oro', name_en: 'Gold Leaf', file: '/assets/moldings/gold.svg', category_es: 'Metalico', category_en: 'Metallic' },
];

export const matColorGroups = [
  {
    name_es: 'Neutros',
    name_en: 'Neutrals',
    colors: [
      { name_es: 'Blanco Puro', name_en: 'Pure White', value: '#FFFFFF' },
      { name_es: 'Blanco Antiguo', name_en: 'Antique White', value: '#F5F5F0' },
      { name_es: 'Crema', name_en: 'Cream', value: '#FFFDD0' },
      { name_es: 'Gris Suave', name_en: 'Soft Gray', value: '#D3D3D3' },
      { name_es: 'Carbon', name_en: 'Charcoal', value: '#36454F' },
      { name_es: 'Negro Galeria', name_en: 'Gallery Black', value: '#1a1a1a' },
    ]
  },
  {
    name_es: 'Llamativos',
    name_en: 'Bolds',
    colors: [
      { name_es: 'Azul Marino', name_en: 'Navy Blue', value: '#1B2A4A' },
      { name_es: 'Borgona', name_en: 'Burgundy', value: '#4A1B1B' },
      { name_es: 'Verde Bosque', name_en: 'Forest Green', value: '#1B3022' },
      { name_es: 'Ciruela Profundo', name_en: 'Deep Plum', value: '#361B30' },
    ]
  },
  {
    name_es: 'Terrosos',
    name_en: 'Earthy',
    colors: [
      { name_es: 'Verde Salvia', name_en: 'Sage Green', value: '#8A9A5B' },
      { name_es: 'Ocre', name_en: 'Ochre', value: '#CC7722' },
      { name_es: 'Terracota', name_en: 'Terracotta', value: '#E2725B' },
      { name_es: 'Azul Pizarra', name_en: 'Slate Blue', value: '#708090' },
    ]
  }
];

export type Molding = typeof moldings[0];
export type MatColor = typeof matColorGroups[0]['colors'][0];
