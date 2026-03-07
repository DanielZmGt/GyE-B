import Image from 'next/image';
import { Award, Clock, ShieldCheck } from 'lucide-react';
import FeatureItem from '../molecules/FeatureItem';

export default function AboutSection() {
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
            <h2 className="font-serif text-3xl md:text-5xl mb-6">A Legacy of Craftsmanship</h2>
            <div className="w-16 h-1 bg-brand-oak mb-8 rounded-full opacity-50" />

            <p className="text-brand-text-muted text-lg font-light leading-relaxed mb-8">
              Since 2015, Galeria & Enmarcados del Bajio has been dedicated to the art of presentation.
              We believe that every piece of art, photograph, or memorabilia deserves a frame that not only protects it but elevates its visual impact.
            </p>

            <div className="space-y-6">
              <FeatureItem
                icon={Clock}
                title="Rich Archive"
                description="Drawing from our extensive 2015-2018 portfolio to bring timeless techniques to modern framing."
              />
              <FeatureItem
                icon={Award}
                title="Premium Materials"
                description="Sourcing only the finest hardwoods including Walnut, Oak, and Mahogany for lasting elegance."
              />
              <FeatureItem
                icon={ShieldCheck}
                title="USA Support"
                description="While rooted in the Bajío region, we provide dedicated support for our clients across the USA."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
