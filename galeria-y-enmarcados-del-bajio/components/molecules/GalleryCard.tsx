import Image from 'next/image';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import type { PortfolioItem } from '../../data/portfolio';

type GalleryCardProps = {
  item: PortfolioItem;
  onClick: () => void;
};

export default function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className={`relative overflow-hidden ${item.aspect} mb-4 border-4 border-brand-surface group-hover:border-brand-oak/70 transition-colors duration-500`}>
        <Image
          src={`/assets/${item.file}`}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Maximize2 className="text-white w-8 h-8" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-serif text-xl">{item.title}</h3>
        <span className="text-xs uppercase tracking-wider text-brand-text-muted">{item.category}</span>
      </div>
    </motion.div>
  );
}
