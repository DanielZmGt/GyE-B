import SectionTitle from '../atoms/SectionTitle';
import ServiceCard from '../molecules/ServiceCard';
import { services } from '../../data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-brand-surface/30 border-y border-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionTitle title="Our Expertise" centered />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
