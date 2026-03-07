import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/cwvpo0l4mklb1.jpg"
          alt="Custom framing workshop"
          fill
          className="object-cover opacity-40"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/50 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <p className="text-brand-oak uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium">
          Master Craftsmanship since 2013
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-tight text-brand-text">
          Elevate Your Art with <br className="hidden md:block" />
          <span className="italic text-brand-text-muted">Custom Framing</span>
        </h1>
        <p className="text-brand-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
          Specializing in large-scale frames and artistic mounting in the Bajío region.
          We transform your pieces into timeless masterpieces.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="#portfolio"
            className="group flex items-center gap-3 bg-brand-oak text-brand-bg px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-brand-oak/90 transition-all"
          >
            View Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-3 border border-brand-surface bg-brand-surface/50 backdrop-blur-sm text-brand-text px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-brand-surface hover:border-brand-oak/50 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
