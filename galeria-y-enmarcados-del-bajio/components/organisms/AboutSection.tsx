"use client";

import Image from 'next/image';
import { Award, Clock, ShieldCheck } from 'lucide-react';
import FeatureItem from '../molecules/FeatureItem';
import { useLanguage } from '../../app/i18n-context';

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 bg-brand-surface/20 border-t border-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative border-4 border-brand-surface z-10">
              <Image
                src="https://picsum.photos/800/1000?random=20"
                alt="Craftsman working on a frame"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-brand-oak/10 border border-brand-oak/30 z-0" />
            <div className="absolute -top-8 -left-8 w-1/2 aspect-square bg-brand-walnut/20 border border-brand-walnut/30 z-0" />
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-5xl mb-6">{t('about.title')}</h2>
            <div className="w-16 h-1 bg-brand-oak mb-8 rounded-full opacity-50" />

            <p className="text-brand-text-muted text-lg font-light leading-relaxed mb-8">
              {t('about.desc')}
            </p>

            <div className="space-y-6">
              <FeatureItem
                icon={Clock}
                title={t('about.archive')}
                description={t('about.archiveDesc')}
              />
              <FeatureItem
                icon={Award}
                title={t('about.materials')}
                description={t('about.materialsDesc')}
              />
              <FeatureItem
                icon={ShieldCheck}
                title={t('about.support')}
                description={t('about.supportDesc')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
