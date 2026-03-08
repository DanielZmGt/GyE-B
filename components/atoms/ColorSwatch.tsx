type ColorSwatchProps = {
  color: string;
  name: string;
  selected: boolean;
  onClick: () => void;
};

export default function ColorSwatch({ color, name, selected, onClick }: ColorSwatchProps) {
  return (
    <button
      onClick={onClick}
      className={`w-7 h-7 rounded-full border shadow-sm transition-all hover:scale-110 flex-shrink-0 ${
        selected ? 'border-brand-oak ring-1 ring-brand-oak ring-offset-1' : 'border-gray-300'
      }`}
      style={{ backgroundColor: color }}
      title={name}
    />
  );
}
