interface OutputDisplayProps {
  volume: number;
  weight?: number;
  cost?: number;
}

export default function OutputDisplay({ volume, weight, cost }: OutputDisplayProps) {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-sm text-gray-600 mb-1">Volume</div>
          <div className="text-3xl font-bold text-blue-600">
            {volume.toFixed(2)} cu yd
          </div>
        </div>

        {weight !== undefined && (
          <div>
            <div className="text-sm text-gray-600 mb-1">Weight</div>
            <div className="text-3xl font-bold text-blue-600">
              {weight.toFixed(2)} tons
            </div>
          </div>
        )}

        {cost !== undefined && cost > 0 && (
          <div>
            <div className="text-sm text-gray-600 mb-1">Total Cost</div>
            <div className="text-3xl font-bold text-green-600">
              ${cost.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
