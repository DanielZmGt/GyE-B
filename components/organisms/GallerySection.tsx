'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionTitle from '../atoms/SectionTitle';
import FilterBar from '../molecules/FilterBar';
import GalleryCard from '../molecules/GalleryCard';
import Lightbox from '../molecules/Lightbox';
import { portfolioItems, type PortfolioItem } from '../../data/portfolio';
import { useLanguage } from '../../app/i18n-context';

const categoryKeys = ['all', 'drawings', 'paintings', 'pictures', 'posters', 'jerseys', 'objects', 'maintenance'];

export default function GallerySection() {
  const { lang, t } = useLanguage();
  const [filterKey, setFilterKey] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = categoryKeys.map(k => t(`gallery.categories.${k}`));
  const activeCategory = t(`gallery.categories.${filterKey}`);

  const handleFilterChange = (selectedLocalCat: string) => {
    const key = categoryKeys.find(k => t(`gallery.categories.${k}`) === selectedLocalCat) || 'all';
    setFilterKey(key);
  };

  const filteredItems = filterKey === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filterKey);

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
              title={t('gallery.title')}
              subtitle={t('gallery.subtitle')}
            />
          </motion.div>

          <FilterBar categories={categories} active={activeCategory} onChange={handleFilterChange} />
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
