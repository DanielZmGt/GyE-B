import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-surface/50 border-t border-brand-surface pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl tracking-wider mb-6">GALERIA & ENMARCADOS</h2>
            <p className="text-brand-text-muted max-w-md font-light leading-relaxed mb-8">
              Elevating art through premium custom framing and artistic mounting. 
              Serving the Bajío region and providing USA support with unmatched craftsmanship.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-widest text-brand-oak mb-6 font-medium">Contact</h3>
            <ul className="space-y-4 text-brand-text-muted font-light">
              <li className="flex items-center gap-3 hover:text-brand-text transition-colors">
                <Phone className="w-4 h-4" />
                <a href="tel:+15419166276">+1 541-916-6276</a>
              </li>
              <li className="flex items-center gap-3 hover:text-brand-text transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:zam.zagd@gmail.com">zam.zagd@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Bajío, MX <br />USA Support</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-brand-oak mb-6 font-medium">Hours</h3>
            <ul className="space-y-4 text-brand-text-muted font-light">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-surface pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-text-muted font-light">
          <p>&copy; {new Date().getFullYear()} Galeria & Enmarcados del Bajio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-text transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-text transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
