'use client';

import { useState, useEffect } from 'react';

export default function SquareFeetToCubicYardsCalculator() {
  const [squareFeet, setSquareFeet] = useState<number>(500);
  const [depth, setDepth] = useState<number>(6); // in inches
  const [depthUnit, setDepthUnit] = useState<'inches' | 'feet'>('inches');
  const [cubicYards, setCubicYards] = useState<number>(0);

  // Calculate cubic yards whenever inputs change
  useEffect(() => {
    // Convert depth to feet
    const depthInFeet = depthUnit === 'inches' ? depth / 12 : depth;

    // Formula: (Square Feet × Depth in Feet) ÷ 27
    const calculatedCubicYards = (squareFeet * depthInFeet) / 27;
    setCubicYards(calculatedCubicYards);
  }, [squareFeet, depth, depthUnit]);

  const depthInFeet = depthUnit === 'inches' ? depth / 12 : depth;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Square Feet to Cubic Yards Calculator
      </h2>

      <div className="space-y-6">
        {/* Square Feet Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Square Feet
          </label>
          <input
            type="number"
            value={squareFeet}
            onChange={(e) => setSquareFeet(parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="0"
            step="0.1"
            placeholder="Enter square feet"
          />
        </div>

        {/* Depth Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Depth
          </label>
          <div className="flex gap-4">
            <input
              type="number"
              value={depth}
              onChange={(e) => setDepth(parseFloat(e.target.value) || 0)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              step="0.1"
              placeholder="Enter depth"
            />
            <select
              value={depthUnit}
              onChange={(e) => setDepthUnit(e.target.value as 'inches' | 'feet')}
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="inches">Inches</option>
              <option value="feet">Feet</option>
            </select>
          </div>
        </div>

        {/* Depth Conversion Info */}
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Depth Conversion</h3>
          <div className="text-sm text-blue-700 space-y-1">
            <p><strong>Input:</strong> {depth} {depthUnit}</p>
            <p><strong>Converted to feet:</strong> {depthInFeet.toFixed(3)} ft</p>
            <p><strong>Common conversions:</strong></p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>2" = 0.167 ft</li>
              <li>4" = 0.333 ft</li>
              <li>6" = 0.5 ft</li>
              <li>12" = 1.0 ft</li>
            </ul>
          </div>
        </div>

        {/* Result */}
        <div className="p-6 bg-green-50 rounded-lg border-2 border-green-200">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Conversion Result</h3>
            <div className="text-3xl font-bold text-green-600 mb-1">
              {cubicYards.toFixed(2)} cubic yards
            </div>
            <div className="text-sm text-green-700">
              ({squareFeet} sq ft × {depthInFeet.toFixed(3)} ft depth) ÷ 27
            </div>
          </div>
        </div>

        {/* Quick Examples */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">Quick Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-white rounded">
              <strong>500 sq ft × 4":</strong><br />
              (500 × 0.333) ÷ 27 = 6.17 CY
            </div>
            <div className="p-3 bg-white rounded">
              <strong>300 sq ft × 6":</strong><br />
              (300 × 0.5) ÷ 27 = 5.56 CY
            </div>
            <div className="p-3 bg-white rounded">
              <strong>1000 sq ft × 2":</strong><br />
              (1000 × 0.167) ÷ 27 = 6.17 CY
            </div>
            <div className="p-3 bg-white rounded">
              <strong>200 sq ft × 12":</strong><br />
              (200 × 1.0) ÷ 27 = 7.41 CY
            </div>
          </div>
        </div>

        {/* Formula Explanation */}
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">Formula Explanation</h3>
          <div className="text-sm text-yellow-700">
            <p><strong>Step 1:</strong> Convert depth to feet (divide inches by 12)</p>
            <p><strong>Step 2:</strong> Multiply area by depth: Area × Depth = Cubic Feet</p>
            <p><strong>Step 3:</strong> Convert to cubic yards: Cubic Feet ÷ 27 = Cubic Yards</p>
            <p><strong>Why 27?</strong> Because 1 cubic yard = 3 ft × 3 ft × 3 ft = 27 cubic feet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
