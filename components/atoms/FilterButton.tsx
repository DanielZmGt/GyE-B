type FilterButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export default function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`text-sm uppercase tracking-widest pb-1 transition-all duration-300 border-b-2 ${
        active
          ? 'text-brand-oak border-brand-oak'
          : 'text-brand-text-muted border-transparent hover:text-brand-text'
      }`}
    >
      {label}
    </button>
  );
}
