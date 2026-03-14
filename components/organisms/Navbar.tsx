"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, Globe, X } from 'lucide-react';
import ThemeToggle from '../atoms/ThemeToggle';
import { useLanguage } from '../../app/i18n-context';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'es' : 'en');
  };

  const navLinks = [
    { href: '/tienda', label: t('nav.shop'), highlight: true },
    { href: '/virtual-framer', label: t('nav.virtualFramer') },
    { href: '/#services', label: t('nav.services') },
    { href: '/gallery', label: t('nav.portfolio') },
    { href: '/#about', label: t('nav.about') },
    { href: '/#contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-sm border border-brand-oak/20 group-hover:border-brand-oak transition-colors">
                <Image
                  src="/assets/logo.jpg"
                  alt="Galeria & Enmarcados Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-sm md:text-xl tracking-wider text-brand-text group-hover:text-brand-oak transition-colors whitespace-nowrap">
                GALERIA & ENMARCADOS
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`text-xs uppercase tracking-widest transition-colors ${
                  link.highlight ? 'text-brand-oak font-bold hover:text-brand-walnut' : 'text-brand-text-muted hover:text-brand-oak'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-4 border-l border-brand-surface pl-8">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-sm uppercase tracking-widest text-brand-text hover:text-brand-oak transition-colors"
                title="Toggle Language"
              >
                <Globe className="w-4 h-4" />
                <span>{lang.toUpperCase()}</span>
              </button>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-text hover:text-brand-oak transition-colors p-1"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg border-b border-brand-surface overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-4 text-base font-medium uppercase tracking-[0.2em] border-b border-brand-surface/50 last:border-0 ${
                    link.highlight ? 'text-brand-oak' : 'text-brand-text'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center justify-between px-3 py-6 pt-8">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-brand-text font-bold"
                >
                  <Globe className="w-5 h-5 text-brand-oak" />
                  <span>{lang === 'en' ? 'Español' : 'English'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
