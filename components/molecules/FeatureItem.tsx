import type { LucideIcon } from 'lucide-react';
import IconCircle from '../atoms/IconCircle';

type FeatureItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex gap-4">
      <IconCircle icon={icon} />
      <div>
        <h3 className="font-serif text-xl mb-2">{title}</h3>
        <p className="text-brand-text-muted font-light">{description}</p>
      </div>
    </div>
  );
}
