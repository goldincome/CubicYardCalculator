'use client';

import { useState, useEffect } from 'react';
import materialsData from '@/lib/data/materials.json';

export default function CubicYardsToTonsCalculator() {
  const [cubicYards, setCubicYards] = useState<number>(10);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>('gravel');
  const [customDensity, setCustomDensity] = useState<number>(0);
  const [tons, setTons] = useState<number>(0);

  // Calculate tons whenever inputs change
  useEffect(() => {
    const material = materialsData.find(m => m.id === selectedMaterialId);
    if (material) {
      const density = customDensity > 0 ? customDensity : material.density;
      const calculatedTons = cubicYards * density;
      setTons(calculatedTons);
    }
  }, [cubicYards, selectedMaterialId, customDensity]);

  const selectedMaterial = materialsData.find(m => m.id === selectedMaterialId);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Cubic Yards to Tons Calculator
      </h2>

      <div className="space-y-6">
        {/* Cubic Yards Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cubic Yards
          </label>
          <input
            type="number"
            value={cubicYards}
            onChange={(e) => setCubicYards(parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="0"
            step="0.1"
            placeholder="Enter cubic yards"
          />
        </div>

        {/* Material Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Material Type
          </label>
          <select
            value={selectedMaterialId}
            onChange={(e) => setSelectedMaterialId(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {materialsData.map((material) => (
              <option key={material.id} value={material.id}>
                {material.name} ({material.density} tons/cubic yard)
              </option>
            ))}
            <option value="custom">Custom Density</option>
          </select>
        </div>

        {/* Custom Density Input */}
        {selectedMaterialId === 'custom' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Custom Density (tons/cubic yard)
            </label>
            <input
              type="number"
              value={customDensity}
              onChange={(e) => setCustomDensity(parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              step="0.01"
              placeholder="Enter custom density"
            />
          </div>
        )}

        {/* Material Info */}
        {selectedMaterial && selectedMaterialId !== 'custom' && (
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Material Information</h3>
            <div className="text-sm text-blue-700 space-y-1">
              <p><strong>Density:</strong> {selectedMaterial.density} tons/cubic yard</p>
              <p><strong>Category:</strong> {selectedMaterial.category}</p>
            </div>
          </div>
        )}

        {/* Result */}
        <div className="p-6 bg-green-50 rounded-lg border-2 border-green-200">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Conversion Result</h3>
            <div className="text-3xl font-bold text-green-600 mb-1">
              {tons.toFixed(2)} tons
            </div>
            <div className="text-sm text-green-700">
              {cubicYards} cubic yards × {(customDensity > 0 ? customDensity : selectedMaterial?.density || 0)} tons/cubic yard
            </div>
          </div>
        </div>

        {/* Quick Examples */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">Quick Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-white rounded">
              <strong>10 CY Gravel:</strong><br />
              10 × 1.5 = 15 tons
            </div>
            <div className="p-3 bg-white rounded">
              <strong>5 CY Concrete:</strong><br />
              5 × 2.4 = 12 tons
            </div>
            <div className="p-3 bg-white rounded">
              <strong>8 CY Topsoil:</strong><br />
              8 × 1.2 = 9.6 tons
            </div>
            <div className="p-3 bg-white rounded">
              <strong>3 CY Mulch:</strong><br />
              3 × 0.8 = 2.4 tons
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
