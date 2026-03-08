"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import type { Product } from '../../data/products';
import { formatPrice } from '../../data/products';
import { useLanguage } from '../../app/i18n-context';

type ProductCardProps = {
  product: Product;
  quantity: number;
  onAdd: () => void;
  onUpdateQuantity: (delta: number) => void;
};

export default function ProductCard({ product, quantity, onAdd, onUpdateQuantity }: ProductCardProps) {
  const { lang, t } = useLanguage();
  const title = lang === 'en' ? product.title_en : product.title_es;
  const description = lang === 'en' ? product.desc_en : product.desc_es;
  const category = lang === 'en' ? product.category_en : product.category_es;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group border border-brand-surface hover:border-brand-oak/40 transition-colors rounded-sm overflow-hidden bg-brand-bg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={`/assets/${product.file}`}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-brand-walnut/80 text-white text-xs uppercase tracking-wider px-3 py-1 backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-xl mb-1">{title}</h3>
        <p className="text-brand-text-muted text-sm font-light leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-serif text-xl text-brand-oak">
            {formatPrice(product.price)}
          </span>

          {quantity > 0 ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onUpdateQuantity(-1)}
                className="w-8 h-8 flex items-center justify-center border border-brand-surface hover:border-brand-oak/50 rounded-sm transition-colors"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-6 text-center text-sm font-medium">{quantity}</span>
              <button
                onClick={() => onUpdateQuantity(1)}
                className="w-8 h-8 flex items-center justify-center border border-brand-surface hover:border-brand-oak/50 rounded-sm transition-colors"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <button
              onClick={onAdd}
              className="flex items-center gap-2 px-4 py-2 bg-brand-walnut text-white text-sm uppercase tracking-wider hover:bg-brand-oak transition-colors rounded-sm"
            >
              <Plus className="w-4 h-4" />
              {lang === 'en' ? 'Add' : 'Agregar'}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
