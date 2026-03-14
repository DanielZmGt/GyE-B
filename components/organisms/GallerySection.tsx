'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../atoms/SectionTitle';
import FilterBar from '../molecules/FilterBar';
import GalleryCard from '../molecules/GalleryCard';
import Lightbox from '../molecules/Lightbox';
import { portfolioItems, type PortfolioItem } from '../../data/portfolio';
import { useLanguage } from '../../app/i18n-context';

const categoryKeys = ['all', 'drawings', 'paintings', 'pictures', 'posters', 'jerseys', 'objects', 'maintenance'];
const ITEMS_PER_PAGE = 5;

export default function GallerySection() {
  const { lang, t } = useLanguage();
  const [filterKey, setFilterKey] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = categoryKeys.map(k => t(`gallery.categories.${k}`));
  const activeCategory = t(`gallery.categories.${filterKey}`);

  const handleFilterChange = (selectedLocalCat: string) => {
    const key = categoryKeys.find(k => t(`gallery.categories.${k}`) === selectedLocalCat) || 'all';
    setFilterKey(key);
    setCurrentPage(1);
  };

  const filteredItems = filterKey === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filterKey);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const pageStart = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = filteredItems.slice(pageStart, pageStart + ITEMS_PER_PAGE);

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
            {pageItems.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-6 mt-16"
          >
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-5 py-2.5 border border-brand-oak/40 text-brand-oak hover:bg-brand-oak hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 text-sm uppercase tracking-widest"
              aria-label={lang === 'en' ? 'Previous page' : 'Página anterior'}
            >
              <ChevronLeft className="w-4 h-4" />
              {lang === 'en' ? 'Prev' : 'Ant.'}
            </button>

            <span className="text-sm text-brand-text-muted font-light tracking-wider">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-5 py-2.5 border border-brand-oak/40 text-brand-oak hover:bg-brand-oak hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 text-sm uppercase tracking-widest"
              aria-label={lang === 'en' ? 'Next page' : 'Página siguiente'}
            >
              {lang === 'en' ? 'Next' : 'Sig.'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
