import FilterButton from '../atoms/FilterButton';

type FilterBarProps = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
};

export default function FilterBar({ categories, active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-nowrap md:flex-wrap gap-3 md:gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
      {categories.map((cat) => (
        <div key={cat} className="flex-shrink-0">
          <FilterButton
            label={cat}
            active={active === cat}
            onClick={() => onChange(cat)}
          />
        </div>
      ))}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
