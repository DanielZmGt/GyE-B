"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../atoms/SectionTitle';
import ServiceCard from '../molecules/ServiceCard';
import { services } from '../../data/services';
import { useLanguage } from '../../app/i18n-context';
import { MessageSquare, PenTool, Hammer, CheckCircle } from 'lucide-react';

export default function ServicesSection() {
  const { t } = useLanguage();

  const processSteps = [
    { icon: MessageSquare, title: t('services.steps.consultation'), desc: t('services.steps.consultationDesc') },
    { icon: PenTool, title: t('services.steps.design'), desc: t('services.steps.designDesc') },
    { icon: Hammer, title: t('services.steps.crafting'), desc: t('services.steps.craftingDesc') },
    { icon: CheckCircle, title: t('services.steps.delivery'), desc: t('services.steps.deliveryDesc') },
  ];

  return (
    <section id="services" className="py-24 bg-brand-surface/30 border-y border-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionTitle title={t('services.title')} centered />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* New Process Functionality */}
        <div className="pt-16 border-t border-brand-surface">
          <SectionTitle 
            title={t('services.processTitle')} 
            subtitle={t('services.processSubtitle')}
            centered 
          />
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[1px] bg-brand-surface group-hover:bg-brand-oak/30 transition-colors" />
                )}
                
                <div className="w-20 h-20 bg-brand-bg border border-brand-surface rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-brand-oak transition-colors">
                  <step.icon className="w-8 h-8 text-brand-oak" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-surface text-brand-text text-xs rounded-full flex items-center justify-center font-serif border border-brand-surface">
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                <p className="text-brand-text-muted text-sm font-light leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/gallery"
              className="group flex items-center gap-3 border border-brand-oak text-brand-oak hover:bg-brand-oak hover:text-brand-bg px-8 py-3 rounded-sm font-medium tracking-wide transition-all"
            >
              {t('hero.viewPortfolio')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
