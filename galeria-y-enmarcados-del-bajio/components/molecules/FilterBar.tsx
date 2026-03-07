import FilterButton from '../atoms/FilterButton';

type FilterBarProps = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
};

export default function FilterBar({ categories, active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((cat) => (
        <FilterButton
          key={cat}
          label={cat}
          active={active === cat}
          onClick={() => onChange(cat)}
        />
      ))}
    </div>
  );
}
