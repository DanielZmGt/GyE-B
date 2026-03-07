export const moldings = [
  { name: 'Dark Walnut', file: '/assets/moldings/walnut.svg', category: 'Wood' },
  { name: 'Classic Oak', file: '/assets/moldings/oak.svg', category: 'Wood' },
  { name: 'Cherry Wood', file: '/assets/moldings/cherry.svg', category: 'Wood' },
  { name: 'Classic Crown', file: '/assets/moldings/crown_molding.svg', category: 'Wood' },
  { name: 'Maple Base', file: '/assets/moldings/baseboard.svg', category: 'Wood' },
  { name: 'Mahogany Rail', file: '/assets/moldings/chair_rail.svg', category: 'Wood' },
  { name: 'Gold Leaf', file: '/assets/moldings/gold.svg', category: 'Metallic' },
];

export const matColorGroups = [
  {
    name: 'Neutrals',
    colors: [
      { name: 'Pure White', value: '#FFFFFF' },
      { name: 'Antique White', value: '#F5F5F0' },
      { name: 'Cream', value: '#FFFDD0' },
      { name: 'Soft Gray', value: '#D3D3D3' },
      { name: 'Charcoal', value: '#36454F' },
      { name: 'Gallery Black', value: '#1a1a1a' },
    ]
  },
  {
    name: 'Bolds',
    colors: [
      { name: 'Navy Blue', value: '#1B2A4A' },
      { name: 'Burgundy', value: '#4A1B1B' },
      { name: 'Forest Green', value: '#1B3022' },
      { name: 'Deep Plum', value: '#361B30' },
    ]
  },
  {
    name: 'Earthy',
    colors: [
      { name: 'Sage Green', value: '#8A9A5B' },
      { name: 'Ochre', value: '#CC7722' },
      { name: 'Terracotta', value: '#E2725B' },
      { name: 'Slate Blue', value: '#708090' },
    ]
  }
];

export type Molding = typeof moldings[0];
export type MatColor = typeof matColorGroups[0]['colors'][0];
