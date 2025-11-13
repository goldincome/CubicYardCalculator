import { Unit } from '@/lib/calculator';

interface DimensionInputProps {
  label: string;
  value: number | string;
  unit: Unit;
  onValueChange: (value: number) => void;
  onUnitChange: (unit: Unit) => void;
  placeholder?: string;
  required?: boolean;
}

const UNIT_OPTIONS: { value: Unit; label: string }[] = [
  { value: 'ft', label: 'Feet' },
  { value: 'in', label: 'Inches' },
  { value: 'yd', label: 'Yards' },
  { value: 'm', label: 'Meters' },
  { value: 'cm', label: 'Centimeters' },
];

export default function DimensionInput({
  label,
  value,
  unit,
  onValueChange,
  onUnitChange,
  placeholder = '0',
  required = false,
}: DimensionInputProps) {
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target?.value || '';
    const numValue = val === '' ? 0 : parseFloat(val);
    if (!isNaN(numValue)) {
      onValueChange(numValue);
    }
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUnit = e.target?.value as Unit;
    if (selectedUnit) {
      onUnitChange(selectedUnit);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex">
        <input
          type="number"
          value={value}
          onChange={handleValueChange}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          min="0"
          step="0.01"
        />
        <select
          value={unit}
          onChange={handleUnitChange}
          className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {UNIT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
