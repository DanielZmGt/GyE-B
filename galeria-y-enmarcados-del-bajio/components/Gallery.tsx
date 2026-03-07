'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const portfolioItems = [
  { id: 1, file: '20180125_170337.jpg', title: 'Classic Walnut Frame', category: 'Framing', desc: 'A timeless deep walnut frame custom-built for a family portrait.', aspect: 'aspect-square' },
  { id: 2, file: '20180202_164440.jpg', title: 'Rustic Oak Shadowbox', category: 'Framing', desc: 'Hand-finished rustic oak shadowbox designed to preserve memorabilia.', aspect: 'aspect-[3/4]' },
  { id: 3, file: '20180205_165928.jpg', title: 'Modern Gallery Frame', category: 'Framing', desc: 'Sleek black gallery frame with museum-grade archival matting.', aspect: 'aspect-[4/3]' },
  { id: 4, file: '20180208_184850.jpg', title: 'Ornate Gold Finish', category: 'Maintenance', desc: 'Restoration of an antique gold-leaf frame, bringing history back to life.', aspect: 'aspect-square' },
  { id: 5, file: '20180208_184953.jpg', title: 'Minimalist Maple', category: 'Framing', desc: 'Natural maple wood frame with a clear finish for a contemporary look.', aspect: 'aspect-[3/4]' },
  { id: 6, file: '20180215_185709.jpg', title: 'Vintage White Wash', category: 'Framing', desc: 'Distressed white frame perfect for coastal or farmhouse decor.', aspect: 'aspect-[4/3]' },
  { id: 7, file: '20180329_104214.jpg', title: 'Deep Canvas Floater', category: 'Mounting', desc: 'A custom "floater" frame that gives the illusion of the canvas floating inside.', aspect: 'aspect-square' },
  { id: 8, file: '20180423_193653.jpg', title: 'Double Mat Presentation', category: 'Framing', desc: 'Elegant double matting in cream and navy to accent the artwork.', aspect: 'aspect-[3/4]' },
  { id: 9, file: '20180503_192206.jpg', title: 'Heirloom Restoration', category: 'Maintenance', desc: 'Detailed restoration work on a damaged mid-century frame.', aspect: 'aspect-[4/3]' },
  { id: 10, file: '20180507_183731.jpg', title: 'Corporate Certificate', category: 'Framing', desc: 'Professional framing for diplomas and corporate awards.', aspect: 'aspect-square' },
  { id: 11, file: '20180509_151018.jpg', title: 'Artisan Corner Joinery', category: 'Framing', desc: 'Showcasing our precision corner joinery techniques.', aspect: 'aspect-[3/4]' },
  { id: 12, file: '20180619_213821.jpg', title: 'Large Format Custom', category: 'Framing', desc: 'Oversized custom frame built reinforced for large-scale photography.', aspect: 'aspect-[4/3]' },
  { id: 13, file: '20180623_194708.jpg', title: 'Sports Jersey Display', category: 'Mounting', desc: 'Deep shadowbox with UV glass to protect a signed jersey.', aspect: 'aspect-square' },
  { id: 14, file: '20180714_222234.jpg', title: 'Eclectic Mix', category: 'Framing', desc: 'A unique combination of modern and traditional elements.', aspect: 'aspect-[3/4]' },
  { id: 15, file: '20180819_145754.jpg', title: 'Fine Art Preservation', category: 'Framing', desc: 'Conservation framing using acid-free materials to protect valuable art.', aspect: 'aspect-[4/3]' },
  { id: 16, file: '20180831_193243.jpg', title: 'Texture & Depth', category: 'Framing', desc: 'Using a textured frame profile to add depth to a flat print.', aspect: 'aspect-square' },
  { id: 17, file: 'DSC_0022.JPG', title: 'Gallery Wall Collection', category: 'Framing', desc: 'Part of a cohesive set designed for a client’s gallery wall.', aspect: 'aspect-[3/4]' },
  { id: 18, file: 'DSC_0100.JPG', title: 'Detailed Wood Carving', category: 'Framing', desc: 'Close-up of intricate wood carving details on a custom frame.', aspect: 'aspect-[4/3]' },
  { id: 19, file: 'DSC_0871.JPG', title: 'Metallic Accent Frame', category: 'Framing', desc: 'Brushed metal finish frame suitable for modern industrial interiors.', aspect: 'aspect-square' },
  { id: 20, file: 'FB_IMG_1516136999466.jpg', title: 'Custom Mirror Framing', category: 'Framing', desc: 'Transforming a simple mirror into a statement piece.', aspect: 'aspect-[3/4]' },
  { id: 21, file: 'IMG_20180208_185310_102.jpg', title: 'Hand-Stained Finish', category: 'Framing', desc: 'Custom mixed stain to match the client’s existing furniture.', aspect: 'aspect-[4/3]' },
  { id: 22, file: 'IMG-20180414-WA0023.jpg', title: 'Wedding Photo Series', category: 'Framing', desc: 'Elegant and romantic framing for wedding photography.', aspect: 'aspect-square' },
  { id: 23, file: 'IMG-20180414-WA0024.jpg', title: 'Family Heritage', category: 'Framing', desc: 'Preserving old family photographs with archival standards.', aspect: 'aspect-[3/4]' },
  { id: 24, file: 'IMG-20180415-WA0020.jpg', title: 'Artist Showcase', category: 'Framing', desc: 'Framing designed to let the art speak for itself.', aspect: 'aspect-[4/3]' },
  { id: 25, file: 'IMG-20180526-WA0038.jpg', title: 'Bold Color Choice', category: 'Framing', desc: 'A vibrant frame color chosen to pop against a neutral wall.', aspect: 'aspect-square' },
  { id: 26, file: 'IMG-20180528-WA0014.jpg', title: 'Subtle Elegance', category: 'Framing', desc: 'Understated design that complements rather than competes.', aspect: 'aspect-[3/4]' },
  { id: 27, file: 'IMG-20180611-WA0045.jpg', title: 'Workshop Process', category: 'Maintenance', desc: 'Behind the scenes in our woodshop.', aspect: 'aspect-[4/3]' },
  { id: 28, file: 'IMG-20180611-WA0046.jpg', title: 'Precision Cutting', category: 'Maintenance', desc: 'Ensuring every angle is perfect for a seamless joint.', aspect: 'aspect-square' },
  { id: 29, file: 'IMG-20180611-WA0047.jpg', title: 'Final Assembly', category: 'Maintenance', desc: 'The final touches before the piece is ready for delivery.', aspect: 'aspect-[3/4]' },
  { id: 30, file: 'IMG-20180908-WA0022.jpeg', title: 'Completed Project', category: 'Framing', desc: 'Another happy client’s project ready for their home.', aspect: 'aspect-[4/3]' }
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  const categories = ['All', 'Framing', 'Mounting', 'Maintenance'];

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-5xl mb-4">Selected Works</h2>
            <p className="text-brand-text-muted max-w-xl font-light">
              A curated selection from our 2015-2018 archive, showcasing our dedication to craftsmanship and detail.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm uppercase tracking-widest pb-1 transition-all duration-300 border-b-2 ${filter === cat
                    ? 'text-brand-oak border-brand-oak'
                    : 'text-brand-text-muted border-transparent hover:text-brand-text'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
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
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-8 right-8 text-white hover:text-brand-oak transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <X size={32} />
            </button>

            <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full aspect-[4/3] md:w-2/3">
                <Image
                  src={`/assets/${selectedItem.file}`}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full md:w-1/3 text-white">
                <span className="text-brand-oak text-sm uppercase tracking-[0.2em] mb-4 block">{selectedItem.category}</span>
                <h3 className="font-serif text-3xl md:text-5xl mb-6">{selectedItem.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  {selectedItem.desc}
                </p>
                <div className="border-t border-white/10 pt-8">
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Project Period</p>
                  <p className="font-light italic text-brand-oak">2015 - 2018 Archive</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
