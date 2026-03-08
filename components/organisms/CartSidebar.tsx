'use client';

import { motion } from 'motion/react';
import { X, ShoppingCart, MessageCircle } from 'lucide-react';
import CartItemComponent from '../molecules/CartItem';
import type { Product } from '../../data/products';
import { formatPrice } from '../../data/products';
import { useLanguage } from '../../app/i18n-context';

export type CartEntry = {
  product: Product;
  quantity: number;
};

type CartSidebarProps = {
  cart: CartEntry[];
  onClose: () => void;
  onUpdateQuantity: (productId: number, delta: number) => void;
  onRemove: (productId: number) => void;
};

export default function CartSidebar({ cart, onClose, onUpdateQuantity, onRemove }: CartSidebarProps) {
  const { lang, t } = useLanguage();
  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const sendWhatsApp = () => {
    const phone = '15419166276';
    const lines = cart.map(item => {
      const title = lang === 'en' ? item.product.title_en : item.product.title_es;
      return `- ${title} x${item.quantity} (${formatPrice(item.product.price * item.quantity)})`;
    });
    const message = encodeURIComponent(
      `${t('cart.whatsappMessage')}\n\n${lines.join('\n')}\n\n${t('cart.estimatedTotalMsg')} ${formatPrice(totalPrice)}\n\n${t('cart.closingMsg')}`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-brand-bg border-l border-brand-surface shadow-2xl flex flex-col"
      >
        <div className="flex items-center justify-between p-6 border-b border-brand-surface">
          <h2 className="font-serif text-2xl">{t('cart.title')}</h2>
          <button
            onClick={onClose}
            className="text-brand-text-muted hover:text-brand-text transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-12 h-12 text-brand-surface mx-auto mb-4" />
              <p className="text-brand-text-muted font-light">{t('cart.empty')}</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <CartItemComponent
                  key={item.product.id}
                  product={item.product}
                  quantity={item.quantity}
                  onUpdateQuantity={(delta) => onUpdateQuantity(item.product.id, delta)}
                  onRemove={() => onRemove(item.product.id)}
                />
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-brand-surface space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-brand-text-muted uppercase text-sm tracking-wider">{t('cart.estimatedTotal')}</span>
              <span className="font-serif text-2xl text-brand-oak">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-brand-text-muted font-light">
              {t('cart.disclaimer')}
            </p>
            <button
              onClick={sendWhatsApp}
              className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-3 rounded-sm uppercase text-sm tracking-wider font-medium transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              {t('cart.quoteButton')}
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
}
