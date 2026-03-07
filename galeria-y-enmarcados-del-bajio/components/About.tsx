import Image from 'next/image';
import { Award, Clock, ShieldCheck } from 'lucide-react';

export default function About() {
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
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-surface rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand-oak" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Rich Archive</h3>
                  <p className="text-brand-text-muted font-light">Drawing from our extensive 2015-2018 portfolio to bring timeless techniques to modern framing.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-surface rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-brand-oak" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Premium Materials</h3>
                  <p className="text-brand-text-muted font-light">Sourcing only the finest hardwoods including Walnut, Oak, and Mahogany for lasting elegance.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-surface rounded-full flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-brand-oak" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">USA Support</h3>
                  <p className="text-brand-text-muted font-light">While rooted in the Bajío region, we provide dedicated support for our clients across the USA.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
