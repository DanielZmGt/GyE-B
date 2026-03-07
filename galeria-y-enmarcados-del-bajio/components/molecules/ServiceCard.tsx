import type { Service } from '../../data/services';

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group p-8 border border-brand-surface bg-brand-bg/50 hover:border-brand-oak/50 transition-colors rounded-sm">
      <div className="w-14 h-14 bg-brand-surface rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-oak/20 transition-colors">
        <service.icon className="w-6 h-6 text-brand-oak" />
      </div>
      <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
      <p className="text-brand-text-muted leading-relaxed font-light">
        {service.description}
      </p>
    </div>
  );
}
