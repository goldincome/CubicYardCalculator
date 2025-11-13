import { Material } from '@/types/material';
import { EarthworkFactor } from '@/types/earthwork';

// Unit conversion constants
const UNITS = {
  ft: 1,
  in: 1/12,
  yd: 3,
  m: 3.28084,
  cm: 0.0328084,
} as const;

export type Unit = keyof typeof UNITS;
export type Shape = 'rectangle' | 'circle' | 'triangle' | 'area';

export interface Dimensions {
  length?: number;
  width?: number;
  depth: number;
  radius?: number;
  base?: number;
  height?: number;
  area?: number;
}

export interface CalculationInputs {
  shape: Shape;
  dimensions: Dimensions;
  lengthUnit: Unit;
  widthUnit: Unit;
  depthUnit: Unit;
  radiusUnit?: Unit;
  baseUnit?: Unit;
  heightUnit?: Unit;
  areaUnit?: Unit;
}

/**
 * Convert any unit to feet
 */
export function convertToFeet(value: number, unit: Unit): number {
  return value * UNITS[unit];
}

/**
 * Calculate volume in cubic yards
 */
export function calculateVolume(inputs: CalculationInputs): number {
  const { shape, dimensions, lengthUnit, widthUnit, depthUnit, radiusUnit, baseUnit, heightUnit, areaUnit } = inputs;

  // Convert depth to feet
  const depthFt = convertToFeet(dimensions.depth || 0, depthUnit);

  let areaSqFt: number = 0;

  switch (shape) {
    case 'rectangle':
      const lengthFt = convertToFeet(dimensions.length || 0, lengthUnit);
      const widthFt = convertToFeet(dimensions.width || 0, widthUnit);
      areaSqFt = lengthFt * widthFt;
      break;

    case 'circle':
      const radiusFt = convertToFeet(dimensions.radius || 0, radiusUnit!);
      areaSqFt = Math.PI * radiusFt * radiusFt;
      break;

    case 'triangle':
      const baseFt = convertToFeet(dimensions.base || 0, baseUnit!);
      const heightFt = convertToFeet(dimensions.height || 0, heightUnit!);
      areaSqFt = (baseFt * heightFt) / 2;
      break;

    case 'area':
      areaSqFt = convertToFeet(dimensions.area || 0, areaUnit!);
      break;

    default:
      return 0;
  }

  // Convert to cubic feet, then to cubic yards
  const volumeCuFt = areaSqFt * depthFt;
  const volumeCuYd = volumeCuFt / 27;

  return volumeCuYd;
}

/**
 * Calculate weight in tons
 */
export function calculateWeight(volumeCuYd: number, material: Material): number {
  return volumeCuYd * material.density;
}

/**
 * Calculate cost
 */
export function calculateCost(volumeCuYd: number, pricePerUnit: number, unit: 'cuyd' | 'ton'): number {
  if (unit === 'cuyd') {
    return volumeCuYd * pricePerUnit;
  }
  // For ton pricing, we need weight, but we'll handle this in the component
  return 0;
}

/**
 * Calculate earthwork volumes
 */
export function calculateEarthworkVolumes(volumeCuYd: number, earthworkFactor: EarthworkFactor, type: 'bulking' | 'compaction'): {
  bankCubicYards: number;
  looseCubicYards?: number;
  compactedCubicYards?: number;
} {
  if (type === 'bulking') {
    // LCY = BCY * bulkingFactor
    const looseCubicYards = volumeCuYd * earthworkFactor.bulkingFactor;
    return {
      bankCubicYards: volumeCuYd,
      looseCubicYards,
    };
  } else {
    // BCY = CCY / compactionFactor
    const bankCubicYards = volumeCuYd / earthworkFactor.compactionFactor;
    return {
      bankCubicYards,
      compactedCubicYards: volumeCuYd,
    };
  }
}

/**
 * Calculate retail bags needed
 */
export function calculateBagsNeeded(volumeCuYd: number, bagSizeCuFt: number = 0.5): number {
  const volumeCuFt = volumeCuYd * 27;
  return Math.ceil(volumeCuFt / bagSizeCuFt);
}
