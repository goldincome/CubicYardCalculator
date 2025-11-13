import SquareFeetToCubicYardsCalculator from '@/components/SquareFeetToCubicYardsCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Square Feet to Cubic Yards Calculator – Fast Volume & Material Calculator',
  description: 'Quickly convert square feet to cubic yards for concrete, gravel, mulch, or soil. Our free Square Feet to Cubic Yards Calculator delivers instant, accurate volume estimates.',
  robots: 'index, follow',
  keywords: 'Square Feet to Cubic Yards, Square Feet to Cubic Yards calculator',
  publisher: 'Cubic Yard Calculator',
  alternates: {
    canonical: 'https://cubicyardcalculator.xyz/conversions/square-feet-to-cubic-yards',
  },
  other: {
    'X-Robots-Tag': 'index, follow',
  },
};

export default function SquareFeetToCubicYards() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Content Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Square Feet to Cubic Yards Conversion - Complete Area to Volume Guide
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Learn how to convert square feet to cubic yards for accurate material volume calculations.
            Includes step-by-step methods, depth considerations, and practical examples for construction projects.
          </p>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-800">
              <strong>Key Formula:</strong> Cubic Yards = (Square Feet × Depth in Feet) ÷ 27 |
              <strong>Purpose:</strong> Convert area measurements to material volume requirements
            </p>
          </div>
        </div>
      </header>

      {/* Main Calculator */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <SquareFeetToCubicYardsCalculator />
      </main>

      {/* Conversion Methodology */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Basic Conversion */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Conversion Method</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4">The Area × Depth Formula</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium mb-2">Step 1: Measure Your Area</h4>
                  <p className="text-sm text-gray-600">
                    Calculate or measure the total square footage of the area you need to cover.
                    For irregular shapes, break them down into rectangles and sum the areas.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium mb-2">Step 2: Determine Required Depth</h4>
                  <p className="text-sm text-gray-600">
                    Convert your desired depth to feet. Remember: 6 inches = 0.5 feet, 12 inches = 1 foot.
                    Always add extra depth for compaction and settling.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium mb-2">Step 3: Apply the Conversion</h4>
                  <p className="text-sm text-gray-600">
                    <strong>Cubic Yards = (Square Feet × Depth in Feet) ÷ 27</strong><br/>
                    Example: (500 sq ft × 0.5 ft depth) ÷ 27 = 9.26 cubic yards
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Depth Conversion Guide */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Depth Conversion Reference</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Common Depth Measurements</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Measurement</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Inches</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Feet</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">2 inches</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">2"</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">0.167 ft</td>
                      <td className="border border-gray-300 px-4 py-3">Top dressing, mulch</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">3 inches</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">3"</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">0.25 ft</td>
                      <td className="border border-gray-300 px-4 py-3">Garden paths, base layer</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">4 inches</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">4"</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">0.333 ft</td>
                      <td className="border border-gray-300 px-4 py-3">Driveways, walkways</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">6 inches</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">6"</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">0.5 ft</td>
                      <td className="border border-gray-300 px-4 py-3">Concrete slabs, gardens</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">8 inches</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">8"</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">0.667 ft</td>
                      <td className="border border-gray-300 px-4 py-3">Raised beds, foundations</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">12 inches</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">12"</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">1.0 ft</td>
                      <td className="border border-gray-300 px-4 py-3">Deep foundations, grading</td>
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
              <h3 className="font-semibold text-gray-900 mb-3">Residential Driveway</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Area:</strong> 800 square feet</p>
                <p><strong>Depth:</strong> 4 inches (0.333 ft)</p>
                <p><strong>Formula:</strong> (800 × 0.333) ÷ 27</p>
                <p><strong>Result:</strong> 9.9 cubic yards</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Garden Bed (4×20 ft)</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Area:</strong> 80 square feet</p>
                <p><strong>Depth:</strong> 8 inches (0.667 ft)</p>
                <p><strong>Formula:</strong> (80 × 0.667) ÷ 27</p>
                <p><strong>Result:</strong> 2.0 cubic yards</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Concrete Patio</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Area:</strong> 300 square feet</p>
                <p><strong>Depth:</strong> 6 inches (0.5 ft)</p>
                <p><strong>Formula:</strong> (300 × 0.5) ÷ 27</p>
                <p><strong>Result:</strong> 5.6 cubic yards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Irregular Area Methods */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Handling Irregular Areas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Break Down Method</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>1. Divide into rectangles:</strong> Split complex shapes into simple rectangular sections</p>
                <p><strong>2. Calculate each area:</strong> Length × Width for each rectangle</p>
                <p><strong>3. Sum all areas:</strong> Add up the square footage of all sections</p>
                <p><strong>4. Apply depth:</strong> Multiply total area by depth in feet</p>
                <p><strong>5. Convert to cubic yards:</strong> Divide by 27</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">L-Shaped Area Example</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <p><strong>Main area:</strong> 20×15 ft = 300 sq ft</p>
                  <p><strong>Extension:</strong> 10×8 ft = 80 sq ft</p>
                  <p><strong>Total area:</strong> 380 sq ft</p>
                  <p><strong>With 4" depth:</strong> 380 × 0.333 = 126.5 cu ft</p>
                  <p><strong>Cubic yards:</strong> 126.5 ÷ 27 = 4.7 CY</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Tips */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Calculation Tips</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h3 className="font-semibold text-blue-800 mb-2">✅ Do: Include Waste Factors</h3>
                <p className="text-blue-700 text-sm">
                  Add 5-10% to your calculations for cutting waste, spillage, and uneven terrain.
                  It's better to order slightly more than run short.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h3 className="font-semibold text-blue-800 mb-2">✅ Do: Account for Compaction</h3>
                <p className="text-blue-700 text-sm">
                  Some materials compact significantly. Gravel and soil may settle 20-30% after placement.
                  Plan for this in your depth calculations.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                <h3 className="font-semibold text-orange-800 mb-2">⚠️ Watch: Unit Consistency</h3>
                <p className="text-orange-700 text-sm">
                  Always convert everything to feet before calculating. Mixing inches and feet in the same
                  calculation is the most common source of errors.
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                <h3 className="font-semibold text-orange-800 mb-2">⚠️ Watch: Slope and Grading</h3>
                <p className="text-orange-700 text-sm">
                  For sloped areas, use the average depth or calculate in sections with different depths.
                  Don't use a single depth measurement for the entire area.
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
              <div className="text-sm opacity-90">Complete volume calculations</div>
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
