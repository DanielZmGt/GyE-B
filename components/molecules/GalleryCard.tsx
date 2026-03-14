"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import type { PortfolioItem } from '../../data/portfolio';
import { useLanguage } from '../../app/i18n-context';

type GalleryCardProps = {
  item: PortfolioItem;
  onClick: () => void;
};

export default function GalleryCard({ item, onClick }: GalleryCardProps) {
  const { lang, t } = useLanguage();
  const title = lang === 'en' ? item.title_en : item.title_es;
  const category = t(`gallery.categories.${item.category}`);

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
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out"
          style={item.rotation
            ? {
                transform: `rotate(${item.rotation}deg) scale(${[90, 270].includes(item.rotation) ? 1.42 : 1})`,
              }
            : {}}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Maximize2 className="text-white w-8 h-8" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-serif text-xl">{title}</h3>
        <span className="text-xs uppercase tracking-wider text-brand-text-muted">{category}</span>
      </div>
    </motion.div>
  );
}
