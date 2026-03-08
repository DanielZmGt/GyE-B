"use client";

import { Phone, Mail, MapPin } from 'lucide-react';
import ContactItem from '../molecules/ContactItem';
import { useLanguage } from '../../app/i18n-context';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="bg-brand-surface/50 border-t border-brand-surface pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl tracking-wider mb-6">{t('footer.title')}</h2>
            <p className="text-brand-text-muted max-w-md font-light leading-relaxed mb-8">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-brand-oak mb-6 font-medium">{t('footer.contactHeading')}</h3>
            <ul className="space-y-4 text-brand-text-muted font-light">
              <ContactItem icon={Phone} href="tel:+15419166276">
                +1 541-916-6276
              </ContactItem>
              <ContactItem icon={Mail} href="mailto:zam.zagd@gmail.com">
                zam.zagd@gmail.com
              </ContactItem>
              <ContactItem icon={MapPin}>
                <span>Bajío, MX <br />USA Support</span>
              </ContactItem>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-brand-oak mb-6 font-medium">{t('footer.hoursHeading')}</h3>
            <ul className="space-y-4 text-brand-text-muted font-light">
              <li className="flex justify-between">
                <span>{t('footer.days.weekdays')}</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.days.saturday')}</span>
                <span>10:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.days.sunday')}</span>
                <span>{t('footer.status.closed')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-surface pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-text-muted font-light">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-text transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-text transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
