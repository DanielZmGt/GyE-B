"use client";

import Image from 'next/image';
import { Plus, Minus, Trash2 } from 'lucide-react';
import type { Product } from '../../data/products';
import { formatPrice } from '../../data/products';
import { useLanguage } from '../../app/i18n-context';

type CartItemProps = {
  product: Product;
  quantity: number;
  onUpdateQuantity: (delta: number) => void;
  onRemove: () => void;
};

export default function CartItem({ product, quantity, onUpdateQuantity, onRemove }: CartItemProps) {
  const { lang } = useLanguage();
  const title = lang === 'en' ? product.title_en : product.title_es;

  return (
    <div className="flex gap-4">
      <div className="relative w-20 h-20 flex-shrink-0 border border-brand-surface rounded-sm overflow-hidden">
        <Image
          src={`/assets/${product.file}`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-serif text-sm truncate">{title}</h4>
        <p className="text-brand-oak text-sm font-medium mt-1">
          {formatPrice(product.price)}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onUpdateQuantity(-1)}
              className="w-7 h-7 flex items-center justify-center border border-brand-surface hover:border-brand-oak/50 rounded-sm transition-colors"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-5 text-center text-xs">{quantity}</span>
            <button
              onClick={() => onUpdateQuantity(1)}
              className="w-7 h-7 flex items-center justify-center border border-brand-surface hover:border-brand-oak/50 rounded-sm transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <button
            onClick={onRemove}
            className="text-brand-text-muted hover:text-red-600 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
