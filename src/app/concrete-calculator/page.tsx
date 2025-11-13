import Calculator from '@/components/Calculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concrete Calculator – Estimate Concrete Volume in Yards, Feet & Bags Instantly',
  description: 'Calculate exactly how much concrete you need. Use our free Concrete Calculator to get accurate volume estimates in cubic yards, feet, or 60/80 lb bags.',
  robots: 'index, follow',
  keywords: 'concrete calculator, concrete volume calculator, cubic yards concrete, concrete bags calculator, concrete slab calculator, concrete footing calculator, concrete driveway calculator, concrete foundation calculator, concrete wall calculator, concrete patio calculator, ready mix concrete calculator',
  publisher: 'Cubic Yard Calculator',
  alternates: {
    canonical: 'https://cubicyardcalculator.xyz/concrete-calculator',
  },
  other: {
    'X-Robots-Tag': 'index, follow',
  },
};

export default function ConcreteCalculator() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Content Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Concrete Calculator - Calculate Concrete Volume for Slabs, Foundations & Structures
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional concrete calculator for accurate volume calculations. Perfect for slabs, foundations,
            footings, and structural concrete work with precise cubic yard measurements.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              <strong>Concrete Density:</strong> 2.4 tons per cubic yard |
              <strong>Common Slabs:</strong> 4-6 inches thick | <strong>Foundations:</strong> 8-12 inches thick
            </p>
          </div>
        </div>
      </header>

      {/* Main Calculator */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Calculator />
      </main>

      {/* Educational Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Concrete Types */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Concrete Work</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Slab-on-Grade</h3>
                <p className="text-gray-600 text-sm">Garage floors, basements, driveways. Typically 4-6" thick.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Footings & Foundations</h3>
                <p className="text-gray-600 text-sm">Load-bearing foundations. 8-12" thick, often with rebar.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Walls & Retaining Walls</h3>
                <p className="text-gray-600 text-sm">Structural walls requiring forms and reinforcement.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Patios & Walkways</h3>
                <p className="text-gray-600 text-sm">Decorative concrete work. 4-5" thick with control joints.</p>
              </div>
            </div>
          </div>

          {/* Concrete Calculations */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Concrete Calculation Factors</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Fresh vs. Hardened Concrete</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Fresh concrete density:</span>
                  <span className="font-semibold">2,400 lbs/cubic yard</span>
                </div>
                <div className="flex justify-between">
                  <span>Hardened concrete density:</span>
                  <span className="font-semibold">2,500-2,600 lbs/cubic yard</span>
                </div>
                <div className="flex justify-between">
                  <span>Typical waste factor:</span>
                  <span className="font-semibold">5-10%</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Pro Tip</h4>
                <p className="text-yellow-700 text-sm">
                  Order concrete in full yard increments. Ready-mix trucks deliver in 1-yard batches.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Projects */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Concrete Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Garage Slab (4" thick)</h3>
              <p className="text-gray-600 text-sm mb-3">Single car garage</p>
              <div className="text-sm">
                <p><strong>20×20 ft:</strong> ~2.5 cubic yards</p>
                <p><strong>24×24 ft:</strong> ~3.6 cubic yards</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">House Foundation (10" thick)</h3>
              <p className="text-gray-600 text-sm mb-3">Perimeter foundation</p>
              <div className="text-sm">
                <p><strong>1,000 sq ft house:</strong> ~23 cubic yards</p>
                <p><strong>2,000 sq ft house:</strong> ~46 cubic yards</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Driveway (6" thick)</h3>
              <p className="text-gray-600 text-sm mb-3">Residential driveway</p>
              <div className="text-sm">
                <p><strong>20×20 ft:</strong> ~3.7 cubic yards</p>
                <p><strong>24×30 ft:</strong> ~8.3 cubic yards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Calculators</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-blue-300">General Calculator</a></li>
                <li><a href="/gravel-calculator" className="hover:text-blue-300">Gravel Calculator</a></li>
                <li><a href="/concrete-calculator" className="hover:text-blue-300">Concrete Calculator</a></li>
                <li><a href="/topsoil-and-mulch-calculator" className="hover:text-blue-300">Topsoil Calculator</a></li>
                <li><a href="/earthwork-calculator" className="hover:text-blue-300">Earthwork Calculator</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Conversions</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/conversions/cubic-yards-to-tons" className="hover:text-blue-300">Cubic Yards to Tons</a></li>
                <li><a href="/conversions/square-feet-to-cubic-yards" className="hover:text-blue-300">Square Feet to Cubic Yards</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Material Types</h3>
              <ul className="space-y-2 text-sm">
                <li>Gravel & Crushed Stone</li>
                <li>Sand & Aggregates</li>
                <li>Topsoil & Soil</li>
                <li>Concrete & Cement</li>
                <li>Mulch & Organics</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Professional Tools</h3>
              <ul className="space-y-2 text-sm">
                <li>Multi-Area Projects</li>
                <li>Earthwork Calculations</li>
                <li>Cost Estimation</li>
                <li>Material Density Factors</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/about-us" className="hover:text-blue-300">About Us</a></li>
                <li><a href="/contact-us" className="hover:text-blue-300">Contact Us</a></li>
                <li><a href="/privacy-policy" className="hover:text-blue-300">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions" className="hover:text-blue-300">Terms and Conditions</a></li>
                <li><a href="/disclaimer" className="hover:text-blue-300">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>Professional cubic yard calculator for accurate construction and landscaping estimates.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
