"use client";

import Image from 'next/image';
import type { Molding } from '../../data/moldings';
import { useLanguage } from '../../app/i18n-context';

type MoldingOptionProps = {
  molding: Molding;
  selected: boolean;
  onClick: () => void;
};

export default function MoldingOption({ molding, selected, onClick }: MoldingOptionProps) {
  const { lang } = useLanguage();
  const name = lang === 'en' ? molding.name_en : molding.name_es;

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 p-2 rounded-sm border transition-all ${selected
          ? 'border-brand-oak bg-brand-oak/10'
          : 'border-brand-surface hover:border-brand-text-muted/50'
        }`}
    >
      <div className="relative w-12 h-12 flex-shrink-0 border border-brand-surface">
        <Image
          src={molding.file}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <span className="text-xs uppercase tracking-wider text-left">{name}</span>
    </button>
  );
}
