"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import type { PortfolioItem } from '../../data/portfolio';
import { useLanguage } from '../../app/i18n-context';

type LightboxProps = {
  item: PortfolioItem;
  onClose: () => void;
};

export default function Lightbox({ item, onClose }: LightboxProps) {
  const { lang, t } = useLanguage();
  const title = lang === 'en' ? item.title_en : item.title_es;
  const category = lang === 'en' ? item.category_en : item.category_es;
  const desc = lang === 'en' ? item.desc_en : item.desc_es;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
      onClick={onClose}
    >
      <button
        className="absolute top-8 right-8 text-white hover:text-brand-oak transition-colors"
        onClick={onClose}
      >
        <X size={32} />
      </button>

      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full aspect-[4/3] md:w-2/3">
          <Image
            src={`/assets/${item.file}`}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
        <div className="w-full md:w-1/3 text-white">
          <span className="text-brand-oak text-sm uppercase tracking-[0.2em] mb-4 block">{category}</span>
          <h3 className="font-serif text-3xl md:text-5xl mb-6">{title}</h3>
          <p className="text-gray-400 font-light leading-relaxed mb-8">
            {desc}
          </p>
          <div className="border-t border-white/10 pt-8">
            <p className="text-xs uppercase tracking-widest text-white/50 mb-2">{t('lightbox.projectPeriod')}</p>
            <p className="font-light italic text-brand-oak">{t('lightbox.archiveDate')}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
