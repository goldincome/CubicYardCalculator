import { Shape } from '@/lib/calculator';

interface ShapeTabsProps {
  selectedShape: Shape;
  onShapeChange: (shape: Shape) => void;
}

const SHAPE_OPTIONS = [
  { value: 'rectangle' as Shape, label: 'Rectangle', icon: '▭' },
  { value: 'circle' as Shape, label: 'Circle', icon: '○' },
  { value: 'triangle' as Shape, label: 'Triangle', icon: '△' },
  { value: 'area' as Shape, label: 'Area', icon: '⬜' },
];

export default function ShapeTabs({ selectedShape, onShapeChange }: ShapeTabsProps) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Shape
      </label>
      <div className="flex flex-wrap gap-2">
        {SHAPE_OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => onShapeChange(option.value)}
            className={`px-4 py-2 rounded-md border transition-colors ${
              selectedShape === option.value
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <span className="mr-2">{option.icon}</span>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
