export const moldings = [
  { name: 'Dark Walnut', file: '/assets/moldings/walnut.svg', category: 'Wood' },
  { name: 'Classic Oak', file: '/assets/moldings/oak.svg', category: 'Wood' },
  { name: 'Cherry Wood', file: '/assets/moldings/cherry.svg', category: 'Wood' },
  { name: 'Classic Crown', file: '/assets/moldings/crown_molding.svg', category: 'Wood' },
  { name: 'Maple Base', file: '/assets/moldings/baseboard.svg', category: 'Wood' },
  { name: 'Mahogany Rail', file: '/assets/moldings/chair_rail.svg', category: 'Wood' },
  { name: 'Gold Leaf', file: '/assets/moldings/gold.svg', category: 'Metallic' },
  { name: 'Light Ash', file: '/assets/moldings/ash.svg', category: 'Wood' },
  { name: 'Natural Bamboo', file: '/assets/moldings/bamboo.svg', category: 'Wood' },
  { name: 'Beechwood', file: '/assets/moldings/beech.svg', category: 'Wood' },
  { name: 'Birch', file: '/assets/moldings/birch.svg', category: 'Wood' },
  { name: 'Cedar', file: '/assets/moldings/cedar.svg', category: 'Wood' },
  { name: 'Dark Ebony', file: '/assets/moldings/ebony.svg', category: 'Wood' },
  { name: 'Elm', file: '/assets/moldings/elm.svg', category: 'Wood' },
  { name: 'Hickory', file: '/assets/moldings/hickory.svg', category: 'Wood' },
  { name: 'Ironwood', file: '/assets/moldings/ironwood.svg', category: 'Wood' },
  { name: 'Dark Mahogany', file: '/assets/moldings/mahogany_dark.svg', category: 'Wood' },
  { name: 'Light Maple', file: '/assets/moldings/maple_light.svg', category: 'Wood' },
  { name: 'Pine', file: '/assets/moldings/pine.svg', category: 'Wood' },
  { name: 'Poplar', file: '/assets/moldings/poplar.svg', category: 'Wood' },
  { name: 'Redwood', file: '/assets/moldings/redwood.svg', category: 'Wood' },
  { name: 'Rosewood', file: '/assets/moldings/rosewood.svg', category: 'Wood' },
  { name: 'Sycamore', file: '/assets/moldings/sycamore.svg', category: 'Wood' },
  { name: 'Teak', file: '/assets/moldings/teak.svg', category: 'Wood' },
  { name: 'Wenge', file: '/assets/moldings/wenge.svg', category: 'Wood' },
  { name: 'Zebrawood', file: '/assets/moldings/zebrawood.svg', category: 'Wood' },
  { name: 'Brushed Silver', file: '/assets/moldings/silver.svg', category: 'Metallic' },
  { name: 'Antique Bronze', file: '/assets/moldings/bronze.svg', category: 'Metallic' },
  { name: 'Copper', file: '/assets/moldings/copper.svg', category: 'Metallic' },
  { name: 'Rose Gold', file: '/assets/moldings/rose_gold.svg', category: 'Metallic' },
  { name: 'Platinum', file: '/assets/moldings/platinum.svg', category: 'Metallic' },
  { name: 'Matte Black', file: '/assets/moldings/black_matte.svg', category: 'Painted' },
  { name: 'Matte White', file: '/assets/moldings/white_matte.svg', category: 'Painted' },
  { name: 'Distressed White', file: '/assets/moldings/distressed_white.svg', category: 'Painted' },
  { name: 'Charcoal', file: '/assets/moldings/charcoal.svg', category: 'Painted' },
  { name: 'Navy Blue', file: '/assets/moldings/navy_blue.svg', category: 'Painted' },
  { name: 'Forest Green', file: '/assets/moldings/forest_green.svg', category: 'Painted' },
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
