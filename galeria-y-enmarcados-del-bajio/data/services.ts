import { Ruler, Image as ImageIcon, Palette, type LucideIcon } from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: 'Custom Framing',
    description: 'Tailored frames designed to perfectly complement and protect your artwork, using premium hardwoods like Walnut, Oak, and Mahogany.',
    icon: Ruler,
  },
  {
    title: 'Large-Scale Frames',
    description: 'Specialized structural framing for oversized pieces, ensuring stability and visual impact without compromising elegance.',
    icon: ImageIcon,
  },
  {
    title: 'Artistic Mounting',
    description: 'Museum-quality mounting techniques that preserve the integrity of your pieces while enhancing their presentation.',
    icon: Palette,
  },
];
