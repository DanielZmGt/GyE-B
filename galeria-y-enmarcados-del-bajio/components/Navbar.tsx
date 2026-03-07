import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-sm border border-brand-oak/20 group-hover:border-brand-oak transition-colors">
                <Image
                  src="/assets/logo.jpg"
                  alt="Galeria & Enmarcados Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-xl tracking-wider text-brand-text group-hover:text-brand-oak transition-colors">
                GALERIA & ENMARCADOS
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/tienda" className="text-sm uppercase tracking-widest text-brand-oak font-medium hover:text-brand-walnut transition-colors">Tienda</Link>
            <Link href="#virtual-framer" className="text-sm uppercase tracking-widest text-brand-text-muted hover:text-brand-oak transition-colors">Virtual Framer</Link>
            <Link href="#services" className="text-sm uppercase tracking-widest text-brand-text-muted hover:text-brand-oak transition-colors">Services</Link>
            <Link href="#portfolio" className="text-sm uppercase tracking-widest text-brand-text-muted hover:text-brand-oak transition-colors">Portfolio</Link>
            <Link href="#about" className="text-sm uppercase tracking-widest text-brand-text-muted hover:text-brand-oak transition-colors">About</Link>
            <Link href="#contact" className="text-sm uppercase tracking-widest text-brand-text-muted hover:text-brand-oak transition-colors">Contact</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-brand-text hover:text-brand-oak transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
