import Calculator from '@/components/Calculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Earthwork Calculator | Excavation & Cut-and-Fill Estimates',
  description: 'Calculate total volume for site prep and excavation. Estimate cut, fill, and dirt removal accurately. Our earthwork calculator is free tool for civil contractors.',
  robots: 'index, follow',
  keywords: 'earthwork calculator, excavation calculator, cut and fill calculator, dirt removal calculator, site prep calculator, civil engineering calculator, grading calculator, soil volume calculator, construction calculator, BCY calculator, LCY calculator, CCY calculator, bulking factor calculator, compaction calculator',
  publisher: 'Cubic Yard Calculator',
  alternates: {
    canonical: 'https://cubicyardcalculator.xyz/earthwork-calculator',
  },
  other: {
    'X-Robots-Tag': 'index, follow',
  },
};

export default function EarthworkCalculator() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Content Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Earthwork Calculator - Professional Excavation and Fill Calculations
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Advanced earthwork calculator for contractors and excavators. Calculate cut/fill volumes,
            bulking factors, compaction requirements, and material hauling needs.
          </p>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="text-orange-800">
              <strong>BCY/LCY/CCY Framework:</strong> Bank Cubic Yards • Loose Cubic Yards • Compacted Cubic Yards |
              <strong>Professional Tool:</strong> Industry-standard earthwork calculations
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
          {/* BCY/LCY/CCY Explanation */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding BCY, LCY, CCY</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-lg">BCY</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Bank Cubic Yards</h3>
                    <p className="text-sm text-gray-600">Material volume in its natural, undisturbed state</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  This is the volume of soil or rock as it sits in the ground before any excavation.
                  Used for estimating how much material needs to be removed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-lg">LCY</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Loose Cubic Yards</h3>
                    <p className="text-sm text-gray-600">Material after excavation (expanded volume)</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  When soil is excavated, it expands due to the release of confining pressure.
                  LCY = BCY × Bulking Factor (typically 1.25-1.5).
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold text-lg">CCY</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Compacted Cubic Yards</h3>
                    <p className="text-sm text-gray-600">Material after compaction (reduced volume)</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  When fill material is compacted, it reduces in volume.
                  BCY Required = CCY ÷ Compaction Factor (typically 0.8-0.95).
                </p>
              </div>
            </div>
          </div>

          {/* Earthwork Factors */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Material-Specific Factors</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Bulking & Compaction Factors</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Material Type</th>
                      <th className="text-center py-2">Bulking Factor</th>
                      <th className="text-center py-2">Compaction Factor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Clay</td>
                      <td className="text-center py-2">1.3</td>
                      <td className="text-center py-2">0.8</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Soil</td>
                      <td className="text-center py-2">1.25</td>
                      <td className="text-center py-2">0.9</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Sand</td>
                      <td className="text-center py-2">1.1</td>
                      <td className="text-center py-2">0.95</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Gravel</td>
                      <td className="text-center py-2">1.15</td>
                      <td className="text-center py-2">0.92</td>
                    </tr>
                    <tr>
                      <td className="py-2">Rock</td>
                      <td className="text-center py-2">1.5</td>
                      <td className="text-center py-2">0.75</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Pro Tip</h4>
                <p className="text-yellow-700 text-sm">
                  Always test actual soil conditions on site. Laboratory testing provides the most accurate factors for your specific project.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Applications */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Earthwork Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Foundation Excavation</h3>
              <p className="text-gray-600 text-sm mb-3">Calculate soil removal for building foundations</p>
              <div className="text-sm">
                <p><strong>Typical bulking:</strong> 25-30% volume increase</p>
                <p><strong>Hauling consideration:</strong> Account for truck capacity</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Site Grading</h3>
              <p className="text-gray-600 text-sm mb-3">Cut and fill calculations for level sites</p>
              <div className="text-sm">
                <p><strong>Cut volume:</strong> BCY to be removed</p>
                <p><strong>Fill volume:</strong> CCY required for compaction</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Retaining Walls</h3>
              <p className="text-gray-600 text-sm mb-3">Backfill calculations behind wall structures</p>
              <div className="text-sm">
                <p><strong>Compaction required:</strong> 90-95% density</p>
                <p><strong>Drainage consideration:</strong> Gravel backfill</p>
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
