import CubicYardsToTonsCalculator from '@/components/CubicYardsToTonsCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cubic Yards to Tons Converter – Instantly Calculate Material Weight',
  description: 'Easily convert cubic yards to tons for gravel, sand, dirt, or concrete. Our free Cubic Yards to Tons Calculator gives instant, accurate weight estimates.',
  robots: 'index, follow',
  keywords: 'Cubic Yards to Tons, Cubic Yards to Tons calculator',
  publisher: 'Cubic Yard Calculator',
  alternates: {
    canonical: 'https://cubicyardcalculator.xyz/conversions/cubic-yards-to-tons',
  },
  other: {
    'X-Robots-Tag': 'index, follow',
  },
};

export default function CubicYardsToTons() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Content Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cubic Yards to Tons Conversion - Complete Guide for Material Ordering
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Learn how to convert cubic yards to tons for accurate material ordering. Includes density factors,
            material-specific calculations, and professional ordering tips for construction and landscaping projects.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              <strong>Key Formula:</strong> Tons = Cubic Yards × Material Density Factor |
              <strong>Purpose:</strong> Convert volume measurements to weight for supplier ordering
            </p>
          </div>
        </div>
      </header>

      {/* Main Calculator */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <CubicYardsToTonsCalculator />
      </main>

      {/* Conversion Methodology */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Basic Conversion */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Conversion Method</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4">The Density Factor Approach</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium mb-2">Step 1: Identify Your Material</h4>
                  <p className="text-sm text-gray-600">
                    Different materials have different densities. Select the appropriate density factor for your specific material.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium mb-2">Step 2: Apply the Formula</h4>
                  <p className="text-sm text-gray-600">
                    <strong>Tons = Cubic Yards × Density Factor</strong><br/>
                    Example: 10 cubic yards of gravel × 1.4 tons/cubic yard = 14 tons
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium mb-2">Step 3: Verify with Supplier</h4>
                  <p className="text-sm text-gray-600">
                    Always confirm density factors with your material supplier, as local variations can affect these numbers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Material Density Table */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Material Density Reference</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Common Construction Materials</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Material</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Density Factor<br/>(Tons/CY)</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Gravel (Crushed)</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">1.4</td>
                      <td className="border border-gray-300 px-4 py-3">1.3 - 1.5</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Sand (Dry)</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">1.3</td>
                      <td className="border border-gray-300 px-4 py-3">1.2 - 1.4</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Topsoil</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">1.1</td>
                      <td className="border border-gray-300 px-4 py-3">1.0 - 1.3</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Concrete</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">2.4</td>
                      <td className="border border-gray-300 px-4 py-3">2.0 - 2.4</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Clay (Dry)</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">1.8</td>
                      <td className="border border-gray-300 px-4 py-3">1.6 - 2.0</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Mulch (Bark)</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">0.6</td>
                      <td className="border border-gray-300 px-4 py-3">0.4 - 0.8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Examples */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Conversion Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Driveway Gravel</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Volume:</strong> 15 cubic yards</p>
                <p><strong>Material:</strong> Crushed gravel (1.4 tons/cy)</p>
                <p><strong>Calculation:</strong> 15 × 1.4 = 21 tons</p>
                <p><strong>Order:</strong> 21-23 tons (with 10% extra)</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Garden Topsoil</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Volume:</strong> 8 cubic yards</p>
                <p><strong>Material:</strong> Topsoil (1.1 tons/cy)</p>
                <p><strong>Calculation:</strong> 8 × 1.1 = 8.8 tons</p>
                <p><strong>Order:</strong> 9-10 tons (with settling allowance)</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Concrete Slab</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Volume:</strong> 12 cubic yards</p>
                <p><strong>Material:</strong> Ready-mix concrete (2.4 tons/cy)</p>
                <p><strong>Calculation:</strong> 12 × 2.4 = 28.8 tons</p>
                <p><strong>Order:</strong> 29 tons (full yard increments)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Tips */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Ordering Tips</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h3 className="font-semibold text-green-800 mb-2">✅ Do: Account for Waste</h3>
                <p className="text-green-700 text-sm">
                  Always order 5-15% extra material to account for spillage, compaction, and grading.
                  Better to have a little leftover than run short mid-project.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h3 className="font-semibold text-green-800 mb-2">✅ Do: Verify Density</h3>
                <p className="text-green-700 text-sm">
                  Contact your supplier for exact density factors. Local material variations can significantly
                  affect weight calculations.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h3 className="font-semibold text-red-800 mb-2">❌ Don't: Use Volume for Ordering</h3>
                <p className="text-red-700 text-sm">
                  Most suppliers sell by weight, not volume. Ordering by cubic yards when they sell by tons
                  can lead to costly under-ordering.
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h3 className="font-semibold text-red-800 mb-2">❌ Don't: Ignore Moisture Content</h3>
                <p className="text-red-700 text-sm">
                  Wet materials weigh more than dry materials. Always specify moisture conditions when
                  getting density factors from suppliers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Calculators */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="/" className="block p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center">
              <div className="font-semibold">General Calculator</div>
              <div className="text-sm opacity-90">Complete volume & weight calc</div>
            </a>
            <a href="/gravel-calculator" className="block p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-center">
              <div className="font-semibold">Gravel Calculator</div>
              <div className="text-sm opacity-90">Driveway & drainage gravel</div>
            </a>
            <a href="/concrete-calculator" className="block p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-center">
              <div className="font-semibold">Concrete Calculator</div>
              <div className="text-sm opacity-90">Slabs & foundations</div>
            </a>
            <a href="/topsoil-and-mulch-calculator" className="block p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-center">
              <div className="font-semibold">Topsoil Calculator</div>
              <div className="text-sm opacity-90">Gardens & landscapes</div>
            </a>
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
