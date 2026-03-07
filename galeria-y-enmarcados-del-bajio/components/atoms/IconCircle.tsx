import type { LucideIcon } from 'lucide-react';

type IconCircleProps = {
  icon: LucideIcon;
};

export default function IconCircle({ icon: Icon }: IconCircleProps) {
  return (
    <div className="w-12 h-12 bg-brand-surface rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-brand-oak" />
    </div>
  );
}
