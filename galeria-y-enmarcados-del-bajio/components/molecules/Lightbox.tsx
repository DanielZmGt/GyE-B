import Image from 'next/image';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import type { PortfolioItem } from '../../data/portfolio';

type LightboxProps = {
  item: PortfolioItem;
  onClose: () => void;
};

export default function Lightbox({ item, onClose }: LightboxProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
      onClick={onClose}
    >
      <button
        className="absolute top-8 right-8 text-white hover:text-brand-oak transition-colors"
        onClick={onClose}
      >
        <X size={32} />
      </button>

      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full aspect-[4/3] md:w-2/3">
          <Image
            src={`/assets/${item.file}`}
            alt={item.title}
            fill
            className="object-contain"
          />
        </div>
        <div className="w-full md:w-1/3 text-white">
          <span className="text-brand-oak text-sm uppercase tracking-[0.2em] mb-4 block">{item.category}</span>
          <h3 className="font-serif text-3xl md:text-5xl mb-6">{item.title}</h3>
          <p className="text-gray-400 font-light leading-relaxed mb-8">
            {item.desc}
          </p>
          <div className="border-t border-white/10 pt-8">
            <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Project Period</p>
            <p className="font-light italic text-brand-oak">2015 - 2018 Archive</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
