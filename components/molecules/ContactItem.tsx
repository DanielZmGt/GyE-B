import type { LucideIcon } from 'lucide-react';

type ContactItemProps = {
  icon: LucideIcon;
  children: React.ReactNode;
  href?: string;
};

export default function ContactItem({ icon: Icon, children, href }: ContactItemProps) {
  const content = (
    <>
      <Icon className="w-4 h-4" />
      {children}
    </>
  );

  if (href) {
    return (
      <li className="flex items-center gap-3 hover:text-brand-text transition-colors">
        <a href={href} className="flex items-center gap-3">
          {content}
        </a>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-3">
      {content}
    </li>
  );
}
