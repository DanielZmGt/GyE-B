'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import SectionTitle from '../atoms/SectionTitle';
import FilterBar from '../molecules/FilterBar';
import ProductCard from '../molecules/ProductCard';
import CartSidebar, { type CartEntry } from './CartSidebar';
import { products, type Product } from '../../data/products';
import { useLanguage } from '../../app/i18n-context';

const categoryKeys = ['all', 'framing', 'mounting', 'restoration'];

export default function ShopSection() {
  const { lang, t } = useLanguage();
  const [filterKey, setFilterKey] = useState('all');
  const [cart, setCart] = useState<CartEntry[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const categories = categoryKeys.map(k => t(`shop.categories.${k}`));
  const activeCategory = t(`shop.categories.${filterKey}`);

  const handleFilterChange = (selectedLocalCat: string) => {
    const key = categoryKeys.find(k => t(`shop.categories.${k}`) === selectedLocalCat) || 'all';
    setFilterKey(key);
  };

  const filteredProducts = filterKey === 'all'
    ? products
    : products.filter(p => {
      const cat = lang === 'en' ? p.category_en : p.category_es;
      return cat === activeCategory;
    });

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart(prev =>
      prev
        .map(item =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SectionTitle
              title={t('shop.title')}
              subtitle={t('shop.subtitle')}
            />
          </motion.div>

          <div className="flex items-center gap-6">
            <FilterBar categories={categories} active={activeCategory} onChange={handleFilterChange} />

            <button
              onClick={() => setCartOpen(true)}
              className="relative p-3 border border-brand-surface hover:border-brand-oak/50 transition-colors rounded-sm"
            >
              <ShoppingCart className="w-5 h-5 text-brand-text" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-oak text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const inCart = cart.find(item => item.product.id === product.id);
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  quantity={inCart?.quantity ?? 0}
                  onAdd={() => addToCart(product)}
                  onUpdateQuantity={(delta) => updateQuantity(product.id, delta)}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {cartOpen && (
          <CartSidebar
            cart={cart}
            onClose={() => setCartOpen(false)}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
