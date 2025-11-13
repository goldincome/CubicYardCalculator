import Calculator from '@/components/Calculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Topsoil & Mulch Calculator – Estimate Yard Coverage & Cost Instantly',
  description: 'Calculate coverage for flower beds and gardens. Our free Topsoil & Mulch Calculator provides instant cubic yard, bag, and cost estimates instantly.',
  robots: 'index, follow',
  keywords: 'topsoil calculator, mulch calculator, garden soil calculator, landscaping calculator, flower bed calculator, cubic yards topsoil, mulch coverage calculator, soil volume calculator, garden mulch calculator, compost calculator, raised bed calculator, lawn installation calculator',
  publisher: 'Cubic Yard Calculator',
  alternates: {
    canonical: 'https://cubicyardcalculator.xyz/topsoil-and-mulch-calculator',
  },
  other: {
    'X-Robots-Tag': 'index, follow',
  },
};

export default function TopsoilCalculator() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Content Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Topsoil & Mulch Calculator - Calculate Soil and Mulch Needs for Gardens & Landscapes
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional calculator for topsoil, garden soil, compost, and mulch calculations.
            Perfect for lawn installation, garden beds, raised beds, and landscape projects.
          </p>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-800">
              <strong>Topsoil Density:</strong> 1.2 tons per cubic yard |
              <strong>Mulch Density:</strong> 0.8 tons per cubic yard |
              <strong>Recommended Depth:</strong> 4-6 inches for gardens
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
          {/* Soil Types */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Soil & Mulch</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Topsoil</h3>
                <p className="text-gray-600 text-sm">Rich, fertile soil for planting beds and lawns. Contains organic matter.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Garden Soil</h3>
                <p className="text-gray-600 text-sm">Blended soil mix with compost for vegetable gardens and flower beds.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Compost</h3>
                <p className="text-gray-600 text-sm">Organic matter for soil amendment. Excellent for improving soil structure.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Mulch</h3>
                <p className="text-gray-600 text-sm">Bark, wood chips, or stone for weed control and moisture retention.</p>
              </div>
            </div>
          </div>

          {/* Calculation Tips */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Soil & Mulch Calculation Tips</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Density Factors</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Topsoil:</strong> 1.0 - 1.3 tons/cubic yard</li>
                <li><strong>Garden Soil:</strong> 1.1 - 1.4 tons/cubic yard</li>
                <li><strong>Compost:</strong> 0.8 - 1.0 tons/cubic yard</li>
                <li><strong>Bark Mulch:</strong> 0.6 - 0.9 tons/cubic yard</li>
                <li><strong>Stone Mulch:</strong> 1.3 - 1.6 tons/cubic yard</li>
              </ul>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Pro Tip</h4>
                <p className="text-yellow-700 text-sm">
                  For vegetable gardens, use 8-12 inches of topsoil. For established lawns, 4-6 inches is usually sufficient.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Projects */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Landscape Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Raised Garden Bed (6" deep)</h3>
              <p className="text-gray-600 text-sm mb-3">4×8 foot raised bed</p>
              <div className="text-sm">
                <p><strong>Soil needed:</strong> ~1.3 cubic yards</p>
                <p><strong>Compost amendment:</strong> ~0.3 cubic yards</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">New Lawn Installation (4" deep)</h3>
              <p className="text-gray-600 text-sm mb-3">1,000 square foot lawn</p>
              <div className="text-sm">
                <p><strong>Topsoil needed:</strong> ~12.3 cubic yards</p>
                <p><strong>Per 1,000 sq ft:</strong> ~3.1 cubic yards</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Garden Path Mulch (2" deep)</h3>
              <p className="text-gray-600 text-sm mb-3">2×50 foot path</p>
              <div className="text-sm">
                <p><strong>Bark mulch:</strong> ~1.2 cubic yards</p>
                <p><strong>Stone mulch:</strong> ~1.2 cubic yards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Soil Testing */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Soil Quality & Testing</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Soil pH Levels</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>6.0-7.0:</strong> Ideal for most plants</li>
                  <li><strong>5.5-6.0:</strong> Good for acid-loving plants</li>
                  <li><strong>7.0-8.0:</strong> Alkaline soil</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Nutrient Testing</h3>
                <p className="text-gray-600 mb-4">
                  Professional soil testing provides N-P-K ratios and micronutrient levels.
                  Available through local extension services or private labs.
                </p>
                <p className="text-sm text-gray-500">
                  Test your soil before major amendments to avoid over-fertilization.
                </p>
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
