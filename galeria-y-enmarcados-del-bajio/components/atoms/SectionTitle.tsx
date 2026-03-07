type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className="font-serif text-3xl md:text-5xl mb-4">{title}</h2>
      {centered && <div className="w-24 h-1 bg-brand-oak mx-auto rounded-full opacity-50" />}
      {subtitle && (
        <p className="text-brand-text-muted max-w-xl font-light mt-4 mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
