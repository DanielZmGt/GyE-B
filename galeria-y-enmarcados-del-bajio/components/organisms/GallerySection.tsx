'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionTitle from '../atoms/SectionTitle';
import FilterBar from '../molecules/FilterBar';
import GalleryCard from '../molecules/GalleryCard';
import Lightbox from '../molecules/Lightbox';
import { portfolioItems, type PortfolioItem } from '../../data/portfolio';

const categories = ['All', 'Framing', 'Mounting', 'Maintenance'];

export default function GallerySection() {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Selected Works"
              subtitle="A curated selection from our 2015-2018 archive, showcasing our dedication to craftsmanship and detail."
            />
          </motion.div>

          <FilterBar categories={categories} active={filter} onChange={setFilter} />
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
