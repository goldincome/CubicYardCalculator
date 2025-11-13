'use client';

import { useState, useEffect } from 'react';
import { Shape, Unit, calculateVolume, calculateWeight, calculateCost, calculateBagsNeeded } from '@/lib/calculator';
import { Material } from '@/types/material';
import { EarthworkFactor } from '@/types/earthwork';
import materialsData from '@/lib/data/materials.json';
import earthworkData from '@/lib/data/earthwork.json';
import OutputDisplay from './OutputDisplay';
import ShapeTabs from './ShapeTabs';
import DimensionInput from './DimensionInput';

interface ProjectArea {
  id: string;
  name: string;
  shape: Shape;
  dimensions: {
    length?: number;
    width?: number;
    depth: number;
    radius?: number;
    base?: number;
    height?: number;
    area?: number;
  };
  units: {
    lengthUnit: Unit;
    widthUnit: Unit;
    depthUnit: Unit;
    radiusUnit?: Unit;
    baseUnit?: Unit;
    heightUnit?: Unit;
    areaUnit?: Unit;
  };
  volume: number;
  weight?: number;
  cost?: number;
  material?: Material;
  earthwork?: EarthworkFactor;
  customDensity?: number;
  pricePerUnit?: number;
  priceUnit?: 'cuyd' | 'ton';
}

export default function Calculator() {
  // Basic calculator state
  const [shape, setShape] = useState<Shape>('rectangle');
  const [dimensions, setDimensions] = useState({
    length: 10,
    width: 10,
    depth: 0.5,
    radius: 5,
    base: 10,
    height: 10,
    area: 100,
  } as {
    length?: number;
    width?: number;
    depth: number;
    radius?: number;
    base?: number;
    height?: number;
    area?: number;
  });
  const [units, setUnits] = useState({
    lengthUnit: 'ft' as Unit,
    widthUnit: 'ft' as Unit,
    depthUnit: 'ft' as Unit,
    radiusUnit: 'ft' as Unit,
    baseUnit: 'ft' as Unit,
    heightUnit: 'ft' as Unit,
    areaUnit: 'ft' as Unit,
  });

  // Material and cost state
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
  const [customDensity, setCustomDensity] = useState<number>(0);
  const [pricePerUnit, setPricePerUnit] = useState<number>(0);
  const [priceUnit, setPriceUnit] = useState<'cuyd' | 'ton'>('cuyd');

  // Earthwork state
  const [earthworkType, setEarthworkType] = useState<'bulking' | 'compaction'>('bulking');
  const [selectedEarthwork, setSelectedEarthwork] = useState<EarthworkFactor | null>(null);

  // Project wizard state
  const [projectMode, setProjectMode] = useState(false);
  const [projectAreas, setProjectAreas] = useState<ProjectArea[]>([]);
  const [currentAreaName, setCurrentAreaName] = useState('');

  // UI state
  const [showMaterialModule, setShowMaterialModule] = useState(false);
  const [showEarthworkModule, setShowEarthworkModule] = useState(false);

  // Calculated values
  const [volume, setVolume] = useState(0);
  const [weight, setWeight] = useState<number | undefined>();
  const [cost, setCost] = useState<number | undefined>();
  const [bagsNeeded, setBagsNeeded] = useState<number | undefined>();

  // Calculate volume whenever dimensions or shape change
  useEffect(() => {
    try {
      const calcInputs = {
        shape,
        dimensions,
        ...units,
      };
      const calculatedVolume = calculateVolume(calcInputs);
      setVolume(calculatedVolume);
    } catch (error) {
      console.error('Volume calculation error:', error);
      setVolume(0);
    }
  }, [shape, dimensions, units]);

  // Calculate weight and cost when volume or material changes
  useEffect(() => {
    if (selectedMaterial && volume > 0) {
      const density = customDensity > 0 ? customDensity : selectedMaterial.density;
      const calculatedWeight = calculateWeight(volume, { ...selectedMaterial, density });
      setWeight(calculatedWeight);

      if (pricePerUnit > 0) {
        const calculatedCost = priceUnit === 'cuyd'
          ? volume * pricePerUnit
          : calculatedWeight * pricePerUnit;
        setCost(calculatedCost);
      }

      // Calculate bags for retail (assuming 0.5 cu ft bags)
      setBagsNeeded(calculateBagsNeeded(volume));
    } else {
      setWeight(undefined);
      setCost(undefined);
      setBagsNeeded(undefined);
    }
  }, [volume, selectedMaterial, customDensity, pricePerUnit, priceUnit]);

  const handleDimensionChange = (key: string, value: number) => {
    setDimensions(prev => ({ ...prev, [key]: value }));
  };

  const handleUnitChange = (key: string, unit: Unit) => {
    setUnits(prev => ({ ...prev, [key]: unit }));
  };

  const addToProject = () => {
    if (!currentAreaName.trim()) return;

    const newArea: ProjectArea = {
      id: Date.now().toString(),
      name: currentAreaName,
      shape,
      dimensions: { ...dimensions },
      units: { ...units },
      volume,
      weight,
      cost,
      material: selectedMaterial || undefined,
      earthwork: selectedEarthwork || undefined,
      customDensity: customDensity > 0 ? customDensity : undefined,
      pricePerUnit: pricePerUnit || undefined,
      priceUnit,
    };

    setProjectAreas(prev => [...prev, newArea]);
    setCurrentAreaName('');
  };

  const projectTotal = projectAreas.reduce(
    (total, area) => ({
      volume: total.volume + area.volume,
      weight: total.weight !== undefined && area.weight !== undefined ? total.weight + area.weight : undefined,
      cost: total.cost !== undefined && area.cost !== undefined ? total.cost + area.cost : undefined,
    }),
    { volume: 0, weight: undefined as number | undefined, cost: undefined as number | undefined }
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Ultimate Cubic Yard Calculator
      </h1>

      {/* Project Mode Toggle */}
      <div className="mb-6">
        <button
          onClick={() => setProjectMode(!projectMode)}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          {projectMode ? 'Exit Project Mode' : 'Start Multi-Area Project'}
        </button>
      </div>

      {projectMode ? (
        /* Project Wizard */
        <div className="bg-white p-6 rounded-lg border mb-6">
          <h2 className="text-xl font-semibold mb-4">Project Areas</h2>

          {/* Current Area Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Area name (e.g., Front Patio)"
              value={currentAreaName}
              onChange={(e) => setCurrentAreaName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Shape and Dimensions for current area */}
          <ShapeTabs selectedShape={shape} onShapeChange={setShape} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shape === 'rectangle' && (
              <>
                <DimensionInput
                  label="Length"
                  value={dimensions.length || ''}
                  unit={units.lengthUnit}
                  onValueChange={(value) => handleDimensionChange('length', value)}
                  onUnitChange={(unit) => handleUnitChange('lengthUnit', unit)}
                  required
                />
                <DimensionInput
                  label="Width"
                  value={dimensions.width || ''}
                  unit={units.widthUnit}
                  onValueChange={(value) => handleDimensionChange('width', value)}
                  onUnitChange={(unit) => handleUnitChange('widthUnit', unit)}
                  required
                />
              </>
            )}

            {shape === 'circle' && (
              <DimensionInput
                label="Radius"
                value={dimensions.radius || ''}
                unit={units.radiusUnit!}
                onValueChange={(value) => handleDimensionChange('radius', value)}
                onUnitChange={(unit) => handleUnitChange('radiusUnit', unit)}
                required
              />
            )}

            {shape === 'triangle' && (
              <>
                <DimensionInput
                  label="Base"
                  value={dimensions.base || ''}
                  unit={units.baseUnit!}
                  onValueChange={(value) => handleDimensionChange('base', value)}
                  onUnitChange={(unit) => handleUnitChange('baseUnit', unit)}
                  required
                />
                <DimensionInput
                  label="Height"
                  value={dimensions.height || ''}
                  unit={units.heightUnit!}
                  onValueChange={(value) => handleDimensionChange('height', value)}
                  onUnitChange={(unit) => handleUnitChange('heightUnit', unit)}
                  required
                />
              </>
            )}

            {shape === 'area' && (
              <DimensionInput
                label="Area (sq ft)"
                value={dimensions.area || ''}
                unit={units.areaUnit!}
                onValueChange={(value) => handleDimensionChange('area', value)}
                onUnitChange={(unit) => handleUnitChange('areaUnit', unit)}
                required
              />
            )}

            <DimensionInput
              label="Depth"
              value={dimensions.depth}
              unit={units.depthUnit}
              onValueChange={(value) => handleDimensionChange('depth', value)}
              onUnitChange={(unit) => handleUnitChange('depthUnit', unit)}
              required
            />
          </div>

          {/* Material Selection & Density Override */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Material Selection & Density Override</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Material & Density
                </label>
                <select
                  value={selectedMaterial?.id || ''}
                  onChange={(e) => {
                    const material = materialsData.find(m => m.id === e.target.value);
                    setSelectedMaterial(material || null);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Material</option>
                  {materialsData.map((material) => (
                    <option key={material.id} value={material.id}>
                      {material.name} ({material.density} tons/cy)
                    </option>
                  ))}
                  <option value="custom">Custom Density</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Material Category
                </label>
                <div className="px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700">
                  {selectedMaterial ? selectedMaterial.category : 'Select a material first'}
                </div>
              </div>
            </div>

            {selectedMaterial && selectedMaterial.id !== 'custom' && (
              <div className="mb-4 p-3 bg-blue-50 rounded-md">
                <div className="text-sm text-blue-800">
                  <strong>Default Density Factor (Tons/CY):</strong> {selectedMaterial.density}
                  <br />
                  <strong>Typical Loose Density (lbs/CY):</strong> {selectedMaterial.category === 'aggregate' ? '2,500 - 2,900' : '1,800 - 2,200'}
                  <br />
                  <small>Factors for specific base materials (e.g., 304, 411) can increase up to 1.75.</small>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Custom Density (Tons/CY) - Optional override
              </label>
              <input
                type="number"
                value={customDensity || ''}
                onChange={(e) => setCustomDensity(parseFloat(e.target.value) || 0)}
                placeholder="Leave blank to use the default density factor for the selected material."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          {/* Earthwork & Compaction Factors */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Earthwork & Compaction Factors</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Material Type
              </label>
              <select
                value={selectedEarthwork?.id || ''}
                onChange={(e) => {
                  const earthwork = earthworkData.find(ew => ew.id === e.target.value);
                  setSelectedEarthwork(earthwork || null);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Material Type</option>
                {earthworkData.map((earthwork) => (
                  <option key={earthwork.id} value={earthwork.id}>
                    {earthwork.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Cost Estimation */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Cost Estimation</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cost per Cubic Yard ($/CY)
                </label>
                <input
                  type="number"
                  value={pricePerUnit || ''}
                  onChange={(e) => setPricePerUnit(parseFloat(e.target.value) || 0)}
                  placeholder="0.00"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cost per Ton ($/Ton)
                </label>
                <input
                  type="number"
                  value={priceUnit === 'ton' ? pricePerUnit : ''}
                  onChange={(e) => {
                    setPricePerUnit(parseFloat(e.target.value) || 0);
                    setPriceUnit('ton');
                  }}
                  placeholder="0.00"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
          </div>

          {/* Summary for this Area */}
          <div className="mt-6 p-4 bg-green-50 rounded-lg border-2 border-green-200">
            <h3 className="text-lg font-medium mb-4 text-green-800">Summary for this Area</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-sm text-green-700 mb-1">Volume</div>
                <div className="text-xl font-bold text-green-800">{volume.toFixed(2)} CY</div>
              </div>

              <div>
                <div className="text-sm text-green-700 mb-1">Weight</div>
                <div className="text-xl font-bold text-green-800">{weight?.toFixed(2) || '0.00'} Tons</div>
              </div>

              <div>
                <div className="text-sm text-green-700 mb-1">Retail Units</div>
                <div className="text-xl font-bold text-green-800">{bagsNeeded || 0} bags</div>
              </div>

              <div>
                <div className="text-sm text-green-700 mb-1">Estimated Cost</div>
                <div className="text-xl font-bold text-green-800">${cost?.toFixed(2) || '0.00'}</div>
              </div>
            </div>
          </div>

          <button
            onClick={addToProject}
            disabled={!currentAreaName.trim()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
          >
            Add to Project
          </button>

          {/* Project Areas List */}
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Project Areas</h3>
            {projectAreas.length === 0 ? (
              <p className="text-gray-500">No areas added yet</p>
            ) : (
              <div className="space-y-2">
                {projectAreas.map((area) => (
                  <div key={area.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">{area.name}</span>
                    <span className="text-sm text-gray-600">{area.volume.toFixed(2)} cu yd</span>
                  </div>
                ))}
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded font-semibold">
                  <span>Total Volume</span>
                  <span>{projectTotal.volume.toFixed(2)} cu yd</span>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Single Calculator */
        <>
          <ShapeTabs selectedShape={shape} onShapeChange={setShape} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {shape === 'rectangle' && (
              <>
                <DimensionInput
                  label="Length"
                  value={dimensions.length || ''}
                  unit={units.lengthUnit}
                  onValueChange={(value) => handleDimensionChange('length', value)}
                  onUnitChange={(unit) => handleUnitChange('lengthUnit', unit)}
                  required
                />
                <DimensionInput
                  label="Width"
                  value={dimensions.width || ''}
                  unit={units.widthUnit}
                  onValueChange={(value) => handleDimensionChange('width', value)}
                  onUnitChange={(unit) => handleUnitChange('widthUnit', unit)}
                  required
                />
              </>
            )}

            {shape === 'circle' && (
              <DimensionInput
                label="Radius"
                value={dimensions.radius || ''}
                unit={units.radiusUnit!}
                onValueChange={(value) => handleDimensionChange('radius', value)}
                onUnitChange={(unit) => handleUnitChange('radiusUnit', unit)}
                required
              />
            )}

            {shape === 'triangle' && (
              <>
                <DimensionInput
                  label="Base"
                  value={dimensions.base || ''}
                  unit={units.baseUnit!}
                  onValueChange={(value) => handleDimensionChange('base', value)}
                  onUnitChange={(unit) => handleUnitChange('baseUnit', unit)}
                  required
                />
                <DimensionInput
                  label="Height"
                  value={dimensions.height || ''}
                  unit={units.heightUnit!}
                  onValueChange={(value) => handleDimensionChange('height', value)}
                  onUnitChange={(unit) => handleUnitChange('heightUnit', unit)}
                  required
                />
              </>
            )}

            {shape === 'area' && (
              <DimensionInput
                label="Area (sq ft)"
                value={dimensions.area || ''}
                unit={units.areaUnit!}
                onValueChange={(value) => handleDimensionChange('area', value)}
                onUnitChange={(unit) => handleUnitChange('areaUnit', unit)}
                required
              />
            )}

            <DimensionInput
              label="Depth"
              value={dimensions.depth}
              unit={units.depthUnit}
              onValueChange={(value) => handleDimensionChange('depth', value)}
              onUnitChange={(unit) => handleUnitChange('depthUnit', unit)}
              required
            />
          </div>

          {/* Advanced Modules */}
          <div className="space-y-4">
            {/* Material Estimation Module */}
            <div className="border rounded-lg">
              <button
                onClick={() => setShowMaterialModule(!showMaterialModule)}
                className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg flex justify-between items-center"
              >
                <span className="font-medium">Material Estimation (Weight & Cost)</span>
                <span>{showMaterialModule ? '−' : '+'}</span>
              </button>

              {showMaterialModule && (
                <div className="p-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Material
                    </label>
                    <select
                      value={selectedMaterial?.id || ''}
                      onChange={(e) => {
                        const material = materialsData.find(m => m.id === e.target.value);
                        setSelectedMaterial(material || null);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Material</option>
                      {materialsData.map((material) => (
                        <option key={material.id} value={material.id}>
                          {material.name} ({material.density} tons/cy)
                        </option>
                      ))}
                      <option value="custom">Custom Density</option>
                    </select>
                  </div>

                  {selectedMaterial?.id === 'custom' && (
                    <DimensionInput
                      label="Custom Density (tons/cy)"
                      value={customDensity}
                      unit="ft" // Not used for density
                      onValueChange={setCustomDensity}
                      onUnitChange={() => {}} // Not used
                    />
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price per Unit
                      </label>
                      <input
                        type="number"
                        value={pricePerUnit}
                        onChange={(e) => setPricePerUnit(parseFloat(e.target.value) || 0)}
                        placeholder="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="0"
                        step="0.01"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Unit
                      </label>
                      <select
                        value={priceUnit}
                        onChange={(e) => setPriceUnit(e.target.value as 'cuyd' | 'ton')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="cuyd">per Cubic Yard</option>
                        <option value="ton">per Ton</option>
                      </select>
                    </div>
                  </div>

                  {bagsNeeded && (
                    <div className="p-3 bg-green-50 rounded-md">
                      <p className="text-sm text-green-800">
                        <strong>Retail Bags Needed:</strong> {bagsNeeded} bags (0.5 cu ft each)
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Earthwork Module */}
            <div className="border rounded-lg">
              <button
                onClick={() => setShowEarthworkModule(!showEarthworkModule)}
                className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg flex justify-between items-center"
              >
                <span className="font-medium">Earthwork Calculation (Bulking & Compaction)</span>
                <span>{showEarthworkModule ? '−' : '+'}</span>
              </button>

              {showEarthworkModule && (
                <div className="p-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Calculation Type
                    </label>
                    <select
                      value={earthworkType}
                      onChange={(e) => setEarthworkType(e.target.value as 'bulking' | 'compaction')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="bulking">Loose Volume (Swell) from Bank</option>
                      <option value="compaction">Bank Volume from Compacted</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Material Type
                    </label>
                    <select
                      value={selectedEarthwork?.id || ''}
                      onChange={(e) => {
                        const earthwork = earthworkData.find(ew => ew.id === e.target.value);
                        setSelectedEarthwork(earthwork || null);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Material</option>
                      {earthworkData.map((earthwork) => (
                        <option key={earthwork.id} value={earthwork.id}>
                          {earthwork.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {selectedEarthwork && (
                    <div className="p-3 bg-orange-50 rounded-md">
                      <p className="text-sm text-orange-800">
                        {earthworkType === 'bulking' ? (
                          <>
                            <strong>Loose Volume:</strong> {volume * selectedEarthwork.bulkingFactor} cu yd
                            <br />
                            <small>Bank Volume × {selectedEarthwork.bulkingFactor} = Loose Volume</small>
                          </>
                        ) : (
                          <>
                            <strong>Bank Volume Required:</strong> {volume / selectedEarthwork.compactionFactor} cu yd
                            <br />
                            <small>Compacted Volume ÷ {selectedEarthwork.compactionFactor} = Bank Volume</small>
                          </>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Output Display - Moved to bottom */}
      <OutputDisplay
        volume={projectMode ? projectTotal.volume : volume}
        weight={projectMode ? projectTotal.weight : weight}
        cost={projectMode ? projectTotal.cost : cost}
      />
    </div>
  );
}
