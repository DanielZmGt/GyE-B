import { Ruler, Image as ImageIcon, Palette } from 'lucide-react';

const services = [
  {
    title: 'Custom Framing',
    description: 'Tailored frames designed to perfectly complement and protect your artwork, using premium hardwoods like Walnut, Oak, and Mahogany.',
    icon: Ruler,
  },
  {
    title: 'Large-Scale Frames',
    description: 'Specialized structural framing for oversized pieces, ensuring stability and visual impact without compromising elegance.',
    icon: ImageIcon,
  },
  {
    title: 'Artistic Mounting',
    description: 'Museum-quality mounting techniques that preserve the integrity of your pieces while enhancing their presentation.',
    icon: Palette,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-surface/30 border-y border-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl mb-4">Our Expertise</h2>
          <div className="w-24 h-1 bg-brand-oak mx-auto rounded-full opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 border border-brand-surface bg-brand-bg/50 hover:border-brand-oak/50 transition-colors rounded-sm"
            >
              <div className="w-14 h-14 bg-brand-surface rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-oak/20 transition-colors">
                <service.icon className="w-6 h-6 text-brand-oak" />
              </div>
              <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
              <p className="text-brand-text-muted leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
