'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Plus, Minus, X, Trash2, MessageCircle } from 'lucide-react';

const products = [
  { id: 1, file: '20180125_170337.jpg', title: 'Marco Nogal Clasico', category: 'Enmarcado', desc: 'Marco de nogal profundo hecho a medida, perfecto para retratos familiares.', price: 850 },
  { id: 2, file: '20180202_164440.jpg', title: 'Caja de Sombras Roble', category: 'Enmarcado', desc: 'Caja de sombras de roble rustico acabada a mano para preservar recuerdos.', price: 1200 },
  { id: 3, file: '20180205_165928.jpg', title: 'Marco Galeria Moderno', category: 'Enmarcado', desc: 'Marco de galeria negro con montaje de archivo de calidad museo.', price: 950 },
  { id: 4, file: '20180208_184850.jpg', title: 'Acabado Dorado Ornamentado', category: 'Restauracion', desc: 'Restauracion de marco antiguo con hoja de oro, devolviendo la historia a la vida.', price: 1500 },
  { id: 5, file: '20180208_184953.jpg', title: 'Maple Minimalista', category: 'Enmarcado', desc: 'Marco de madera de maple natural con acabado transparente contemporaneo.', price: 750 },
  { id: 6, file: '20180215_185709.jpg', title: 'Blanco Vintage', category: 'Enmarcado', desc: 'Marco blanco desgastado perfecto para decoracion costera o campestre.', price: 680 },
  { id: 7, file: '20180329_104214.jpg', title: 'Flotador para Canvas', category: 'Montaje', desc: 'Marco flotador personalizado que da la ilusion del canvas flotando.', price: 1100 },
  { id: 8, file: '20180423_193653.jpg', title: 'Presentacion Doble Mat', category: 'Enmarcado', desc: 'Elegante doble matting en crema y azul marino para acentuar la obra.', price: 900 },
  { id: 9, file: '20180503_192206.jpg', title: 'Restauracion de Herencia', category: 'Restauracion', desc: 'Trabajo detallado de restauracion en un marco danado de mediados de siglo.', price: 1800 },
  { id: 10, file: '20180507_183731.jpg', title: 'Certificado Corporativo', category: 'Enmarcado', desc: 'Enmarcado profesional para diplomas y premios corporativos.', price: 550 },
  { id: 11, file: '20180509_151018.jpg', title: 'Union de Esquinas Artesanal', category: 'Enmarcado', desc: 'Mostrando nuestras tecnicas de precision en union de esquinas.', price: 1050 },
  { id: 12, file: '20180619_213821.jpg', title: 'Gran Formato Personalizado', category: 'Enmarcado', desc: 'Marco personalizado reforzado para fotografia de gran escala.', price: 2200 },
  { id: 13, file: '20180623_194708.jpg', title: 'Exhibidor de Jersey', category: 'Montaje', desc: 'Caja de sombras profunda con vidrio UV para proteger un jersey firmado.', price: 1600 },
  { id: 14, file: '20180714_222234.jpg', title: 'Mezcla Eclectica', category: 'Enmarcado', desc: 'Una combinacion unica de elementos modernos y tradicionales.', price: 980 },
  { id: 15, file: '20180819_145754.jpg', title: 'Preservacion de Arte Fino', category: 'Enmarcado', desc: 'Enmarcado de conservacion con materiales libres de acido para arte valioso.', price: 1350 },
  { id: 16, file: '20180831_193243.jpg', title: 'Textura y Profundidad', category: 'Enmarcado', desc: 'Perfil de marco texturizado para agregar profundidad a una impresion plana.', price: 870 },
  { id: 17, file: 'DSC_0022.JPG', title: 'Coleccion Pared Galeria', category: 'Enmarcado', desc: 'Parte de un conjunto cohesivo para la pared de galeria de un cliente.', price: 920 },
  { id: 18, file: 'DSC_0100.JPG', title: 'Tallado en Madera Detallado', category: 'Enmarcado', desc: 'Detalles intricados de tallado en madera en un marco personalizado.', price: 1450 },
  { id: 19, file: 'DSC_0871.JPG', title: 'Marco Acento Metalico', category: 'Enmarcado', desc: 'Marco con acabado de metal cepillado para interiores industriales modernos.', price: 1050 },
  { id: 20, file: 'FB_IMG_1516136999466.jpg', title: 'Enmarcado de Espejo', category: 'Enmarcado', desc: 'Transformando un espejo simple en una pieza de declaracion.', price: 1150 },
  { id: 21, file: 'IMG_20180208_185310_102.jpg', title: 'Acabado Tenido a Mano', category: 'Enmarcado', desc: 'Tinte mezclado a medida para combinar con los muebles existentes del cliente.', price: 980 },
  { id: 22, file: 'IMG-20180414-WA0023.jpg', title: 'Serie Foto de Boda', category: 'Enmarcado', desc: 'Enmarcado elegante y romantico para fotografia de boda.', price: 1100 },
  { id: 23, file: 'IMG-20180414-WA0024.jpg', title: 'Herencia Familiar', category: 'Enmarcado', desc: 'Preservando fotografias familiares antiguas con estandares de archivo.', price: 850 },
  { id: 24, file: 'IMG-20180415-WA0020.jpg', title: 'Exhibicion de Artista', category: 'Enmarcado', desc: 'Enmarcado disenado para dejar que el arte hable por si mismo.', price: 780 },
  { id: 25, file: 'IMG-20180526-WA0038.jpg', title: 'Color Audaz', category: 'Enmarcado', desc: 'Un color vibrante de marco elegido para resaltar contra una pared neutral.', price: 720 },
  { id: 26, file: 'IMG-20180528-WA0014.jpg', title: 'Elegancia Sutil', category: 'Enmarcado', desc: 'Diseno discreto que complementa en lugar de competir.', price: 690 },
  { id: 27, file: 'IMG-20180611-WA0045.jpg', title: 'Proceso de Taller', category: 'Restauracion', desc: 'Detras de escenas en nuestro taller de madera.', price: 600 },
  { id: 28, file: 'IMG-20180611-WA0046.jpg', title: 'Corte de Precision', category: 'Restauracion', desc: 'Asegurando que cada angulo sea perfecto para una union sin costuras.', price: 650 },
  { id: 29, file: 'IMG-20180611-WA0047.jpg', title: 'Ensamblaje Final', category: 'Restauracion', desc: 'Los toques finales antes de que la pieza este lista para entrega.', price: 700 },
  { id: 30, file: 'IMG-20180908-WA0022.jpeg', title: 'Proyecto Completado', category: 'Enmarcado', desc: 'Otro proyecto de cliente feliz listo para su hogar.', price: 880 },
];

type CartItem = {
  product: typeof products[0];
  quantity: number;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price);
}

export default function Shop() {
  const [filter, setFilter] = useState('Todos');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const categories = ['Todos', 'Enmarcado', 'Montaje', 'Restauracion'];

  const filteredProducts = filter === 'Todos'
    ? products
    : products.filter(p => p.category === filter);

  const addToCart = (product: typeof products[0]) => {
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
  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const sendWhatsApp = () => {
    const phone = '15419166276';
    const lines = cart.map(
      item => `- ${item.product.title} x${item.quantity} (${formatPrice(item.product.price * item.quantity)})`
    );
    const message = encodeURIComponent(
      `Hola! Me gustaria cotizar los siguientes productos:\n\n${lines.join('\n')}\n\nTotal estimado: ${formatPrice(totalPrice)}\n\nQuedo al pendiente, gracias!`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-serif text-3xl md:text-5xl mb-4">Nuestra Tienda</h1>
            <p className="text-brand-text-muted max-w-xl font-light">
              Explora nuestros trabajos y agrega los que te interesen al carrito para cotizar por WhatsApp.
            </p>
          </motion.div>

          <div className="flex items-center gap-6">
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-sm uppercase tracking-widest pb-1 transition-all duration-300 border-b-2 ${
                    filter === cat
                      ? 'text-brand-oak border-brand-oak'
                      : 'text-brand-text-muted border-transparent hover:text-brand-text'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Cart button */}
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

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const inCart = cart.find(item => item.product.id === product.id);
              return (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group border border-brand-surface hover:border-brand-oak/40 transition-colors rounded-sm overflow-hidden bg-brand-bg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={`/assets/${product.file}`}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-brand-walnut/80 text-white text-xs uppercase tracking-wider px-3 py-1 backdrop-blur-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-xl mb-1">{product.title}</h3>
                    <p className="text-brand-text-muted text-sm font-light leading-relaxed mb-4 line-clamp-2">
                      {product.desc}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="font-serif text-xl text-brand-oak">
                        {formatPrice(product.price)}
                      </span>

                      {inCart ? (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(product.id, -1)}
                            className="w-8 h-8 flex items-center justify-center border border-brand-surface hover:border-brand-oak/50 rounded-sm transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-medium">{inCart.quantity}</span>
                          <button
                            onClick={() => updateQuantity(product.id, 1)}
                            className="w-8 h-8 flex items-center justify-center border border-brand-surface hover:border-brand-oak/50 rounded-sm transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(product)}
                          className="flex items-center gap-2 px-4 py-2 bg-brand-walnut text-white text-sm uppercase tracking-wider hover:bg-brand-oak transition-colors rounded-sm"
                        >
                          <Plus className="w-4 h-4" />
                          Agregar
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setCartOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-brand-bg border-l border-brand-surface shadow-2xl flex flex-col"
            >
              {/* Cart Header */}
              <div className="flex items-center justify-between p-6 border-b border-brand-surface">
                <h2 className="font-serif text-2xl">Carrito</h2>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-brand-text-muted hover:text-brand-text transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-12 h-12 text-brand-surface mx-auto mb-4" />
                    <p className="text-brand-text-muted font-light">Tu carrito esta vacio</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.product.id} className="flex gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0 border border-brand-surface rounded-sm overflow-hidden">
                          <Image
                            src={`/assets/${item.product.file}`}
                            alt={item.product.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm truncate">{item.product.title}</h4>
                          <p className="text-brand-oak text-sm font-medium mt-1">
                            {formatPrice(item.product.price)}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.product.id, -1)}
                                className="w-7 h-7 flex items-center justify-center border border-brand-surface hover:border-brand-oak/50 rounded-sm transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-5 text-center text-xs">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, 1)}
                                className="w-7 h-7 flex items-center justify-center border border-brand-surface hover:border-brand-oak/50 rounded-sm transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-brand-text-muted hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-brand-surface space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-brand-text-muted uppercase text-sm tracking-wider">Total estimado</span>
                    <span className="font-serif text-2xl text-brand-oak">{formatPrice(totalPrice)}</span>
                  </div>
                  <p className="text-xs text-brand-text-muted font-light">
                    * Los precios son referenciales. El precio final se confirma por WhatsApp.
                  </p>
                  <button
                    onClick={sendWhatsApp}
                    className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-3 rounded-sm uppercase text-sm tracking-wider font-medium transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Cotizar por WhatsApp
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
