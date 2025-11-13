import Calculator from '@/components/Calculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gravel Calculator – Estimate Gravel, Crushed Stone & Rock in Cubic Yards or Tons',
  description: 'Calculate exactly how much gravel you need. Convert driveway or landscaping dimensions into cubic yards and estimated tonnage in seconds.',
  robots: 'index, follow',
  keywords: 'gravel calculator, crushed stone calculator, rock calculator, driveway gravel calculator, landscaping gravel calculator, cubic yards gravel, tons gravel, gravel volume calculator, pea gravel calculator, river rock calculator, #57 stone calculator, #67 stone calculator',
  publisher: 'Cubic Yard Calculator',
  alternates: {
    canonical: 'https://cubicyardcalculator.xyz/gravel-calculator',
  },
  other: {
    'X-Robots-Tag': 'index, follow',
  },
};

export default function GravelCalculator() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Content Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gravel Calculator - Calculate Gravel Needs for Your Project
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional gravel calculator for driveways, paths, drainage, and landscaping projects.
            Calculate cubic yards, tons, and cost with accurate gravel density factors.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              <strong>Gravel Density:</strong> 1.3 - 1.5 tons per cubic yard |
              <strong>Typical Uses:</strong> Driveways, French drains, base layers, decorative landscaping
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
          {/* Gravel Types */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Gravel</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">#57 Stone (Crushed)</h3>
                <p className="text-gray-600 text-sm">1/2" - 1" diameter, excellent for drainage and base layers</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">#67 Stone</h3>
                <p className="text-gray-600 text-sm">3/4" diameter, good for driveways and parking areas</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Pea Gravel</h3>
                <p className="text-gray-600 text-sm">1/4" - 3/8" diameter, decorative and walkways</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">River Rock</h3>
                <p className="text-gray-600 text-sm">Various sizes, natural appearance for landscaping</p>
              </div>
            </div>
          </div>

          {/* Gravel Calculations */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gravel Calculation Tips</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Density Factors</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Crushed Stone:</strong> 1.4 - 1.5 tons/cubic yard</li>
                <li><strong>Pea Gravel:</strong> 1.3 - 1.4 tons/cubic yard</li>
                <li><strong>River Rock:</strong> 1.3 - 1.5 tons/cubic yard</li>
                <li><strong>Washed Gravel:</strong> 1.35 - 1.45 tons/cubic yard</li>
              </ul>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Pro Tip</h4>
                <p className="text-yellow-700 text-sm">
                  Always order 10-15% extra gravel to account for compaction and waste during installation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Projects */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Gravel Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Driveway (4" deep)</h3>
              <p className="text-gray-600 text-sm mb-3">Typical residential driveway</p>
              <div className="text-sm">
                <p><strong>20×20 ft:</strong> ~5.6 cubic yards</p>
                <p><strong>24×30 ft:</strong> ~10.0 cubic yards</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">French Drain (6" wide × 2 ft deep)</h3>
              <p className="text-gray-600 text-sm mb-3">Per linear foot of trench</p>
              <div className="text-sm">
                <p><strong>50 ft trench:</strong> ~3.5 cubic yards</p>
                <p><strong>100 ft trench:</strong> ~7.0 cubic yards</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Garden Path (2 ft wide × 4" deep)</h3>
              <p className="text-gray-600 text-sm mb-3">Decorative walkway</p>
              <div className="text-sm">
                <p><strong>50 ft path:</strong> ~1.2 cubic yards</p>
                <p><strong>100 ft path:</strong> ~2.4 cubic yards</p>
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
