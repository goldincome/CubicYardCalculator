import Calculator from '@/components/Calculator';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Cubic Yard Calculator | Instant & Accurate Estimates',
  description: 'Instantly calculate cubic yards for your project. Enter measurements in feet, inches, or yards. Fast, free, and mobile-friendly tool for contractors & DIYers.',
  robots: 'index, follow',
  keywords: 'cubic yard calculator, volume calculator, construction calculator, landscaping calculator, earthwork calculator, gravel calculator, concrete calculator, material calculator, cubic feet calculator, tons calculator, square feet to cubic yards, cubic yards to tons',
  publisher: 'Cubic Yard Calculator',
  alternates: {
    canonical: 'https://cubicyardcalculator.xyz/',
  },
  other: {
    'X-Robots-Tag': 'index, follow',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Content Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl text-center font-bold text-gray-900 mb-4">
            Cubic Yard Calculator
          </h1>
          <p className="text-xl text-center text-gray-600 mb-6">
            Professional-grade cubic yard calculator for construction, landscaping, and earthwork professionals.
            Calculate volume, weight, and cost with industry-standard accuracy.
          </p>
        </div>
      </header>

      {/* Main Calculator */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Calculator />
      </main>

      {/* Educational Content Sections */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* How It Works */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Cubic Yard Calculations Work</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4">The Basic Formula</h3>
              <p className="text-gray-600 mb-4">
                Cubic yard volume is calculated using the simple formula: Length × Width × Depth.
                However, professional calculations require unit conversions and material considerations.
              </p>
              {/* Core Calculation Diagram */}
              <div className="bg-gray-100 p-4 rounded mb-4">
                <Image
                  src="/diagrams/Length-x-Width-x-Depth.png"
                  alt="3D visualization of Length × Width × Depth cubic yard calculation"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>

          {/* Scale Comparison */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Scale</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4">What Does 1 Cubic Yard Look Like?</h3>
              <p className="text-gray-600 mb-4">
                One cubic yard equals 27 cubic feet. That's roughly the size of a standard washing machine
                or a small refrigerator. Understanding this scale helps you visualize your project needs.
              </p>
              {/* Scale Comparison Diagram */}
              <div className="bg-gray-100 p-4 rounded mb-4">
                <Image
                  src="/diagrams/Scale-Comparison.png"
                  alt="Scale comparison showing 1 cubic yard compared to a washing machine"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Earthwork Concepts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Earthwork Calculations: BCY, LCY, CCY</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-2">
                  <div className="text-2xl font-bold text-blue-600">BCY</div>
                  <div className="text-sm text-blue-800">Bank Cubic Yards</div>
                </div>
                <p className="text-sm text-gray-600">Material as it sits in the ground</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-lg mb-2">
                  <div className="text-2xl font-bold text-green-600">LCY</div>
                  <div className="text-sm text-green-800">Loose Cubic Yards</div>
                </div>
                <p className="text-sm text-gray-600">Material after excavation (expanded)</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-lg mb-2">
                  <div className="text-2xl font-bold text-purple-600">CCY</div>
                  <div className="text-sm text-purple-800">Compacted Cubic Yards</div>
                </div>
                <p className="text-sm text-gray-600">Material after compaction</p>
              </div>
            </div>
            {/* BCY/LCY/CCY Visualization Chart */}
            <div className="bg-gray-100 p-4 rounded mb-6">
              <Image
                src="/diagrams/BCYLCYCCY-Visualization-Chart.png"
                alt="BCY LCY CCY earthwork visualization chart showing bank, loose, and compacted cubic yards"
                width={800}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
            <div className="text-sm text-gray-600">
              <h4 className="font-semibold mb-3">Technical Insights: Understanding Bulking and Compaction</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-3 rounded">
                  <h5 className="font-medium text-blue-800 mb-2">Bank Cubic Yards (BCY)</h5>
                  <p className="text-xs">Material volume in its natural, undisturbed state in the ground. This is your starting point for excavation estimates.</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <h5 className="font-medium text-green-800 mb-2">Loose Cubic Yards (LCY)</h5>
                  <p className="text-xs">Volume after excavation - material expands due to air pockets. Typically 20-30% more volume than BCY for most soils.</p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <h5 className="font-medium text-purple-800 mb-2">Compacted Cubic Yards (CCY)</h5>
                  <p className="text-xs">Volume after compaction - material is densely packed. Usually 15-25% less volume than BCY for fill materials.</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400">
                <p className="text-yellow-800 text-xs">
                  <strong>Key Formula:</strong> BCY × Bulking Factor = LCY | CCY × Compaction Factor = BCY
                  Always verify factors with your specific soil conditions and equipment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Complex Shapes */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Complex Shapes & Irregular Areas</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">
              Real-world projects rarely have perfect rectangular shapes. Learn how to break down
              irregular areas into manageable geometric shapes for accurate calculations.
            </p>
            {/* Irregular Area Decomposition Diagram */}
            <div className="bg-gray-100 p-4 rounded mb-4">
              <Image
                src="/diagrams/irregular-area-decomposition.png"
                alt="Irregular area decomposition showing how to break down L-shaped areas into rectangles for calculation"
                width={600}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
            <div className="text-sm text-gray-600">
              <p className="mb-2"><strong>How to Decompose Irregular Areas:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Identify the shape:</strong> Break down complex areas into basic geometric forms (rectangles, triangles, circles)</li>
                <li><strong>Calculate each section:</strong> Measure and calculate volume for each geometric component separately</li>
                <li><strong>Sum the volumes:</strong> Add all individual volumes together for the total project volume</li>
                <li><strong>Example:</strong> An L-shaped patio becomes Rectangle A (10×8×0.5 ft) + Rectangle B (6×4×0.5 ft) = Total volume</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Volume to Order Conversion */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">From Volume to Order: CY-to-Tons Conversion and Pricing</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Understanding Density Factors</h3>
                <p className="text-gray-600 mb-4">
                  Different materials have different densities, which affects how much they weigh per cubic yard.
                  This is crucial for ordering the right amount of material by weight.
                </p>
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <h4 className="font-medium mb-2">Common Material Densities:</h4>
                  <ul className="text-sm space-y-1">
                    <li><strong>Gravel:</strong> 1.4 - 1.6 tons per cubic yard</li>
                    <li><strong>Sand:</strong> 1.2 - 1.4 tons per cubic yard</li>
                    <li><strong>Topsoil:</strong> 0.8 - 1.0 tons per cubic yard</li>
                    <li><strong>Concrete:</strong> 2.0 - 2.4 tons per cubic yard</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Weight-Based Ordering Process</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</div>
                    <div>
                      <strong>Calculate Volume:</strong> Use our calculator to get cubic yards needed
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</div>
                    <div>
                      <strong>Select Material:</strong> Choose your material type for accurate density
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</div>
                    <div>
                      <strong>Get Weight:</strong> Convert cubic yards to tons using material density
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</div>
                    <div>
                      <strong>Calculate Cost:</strong> Multiply tons by price per ton for total cost
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400">
              <p className="text-green-800 text-sm">
                <strong>Pro Tip:</strong> Always order 5-10% extra material to account for waste, compaction, and grading.
                Most suppliers sell by the ton, so accurate weight calculations prevent costly shortages or excess.
              </p>
            </div>
          </div>
        </div>

        {/* Advanced Material Density Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Material Density and Conversion Factors</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-6">
              Professional material estimation requires accurate density factors to convert volume (cubic yards) to weight (tons).
              The table below provides industry-standard conversion factors for common construction and landscaping materials.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Material Category</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Example Material</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Typical Loose Density<br/>(lbs/cy)</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Volume-to-Weight Factor<br/>(Tons/CY)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes on Density Variation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Fine Aggregate/Concrete</td>
                    <td className="border border-gray-300 px-4 py-3">Sand (Loose)</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">2,700 – 3,200</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">1.35 – 1.6</td>
                    <td className="border border-gray-300 px-4 py-3">Density fluctuates significantly based on moisture content (bulking). Professional concrete factor is often 1.5.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Coarse Aggregate</td>
                    <td className="border border-gray-300 px-4 py-3">Gravel/Crushed Rock</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">2,500 – 2,900</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">1.3 – 1.5</td>
                    <td className="border border-gray-300 px-4 py-3">Factors for specific base materials (e.g., 304, 411) can increase up to 1.75.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Soil/Fill Dirt</td>
                    <td className="border border-gray-300 px-4 py-3">Topsoil (Loose/Dry)</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">2,000 – 2,700</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">1.0 – 1.35</td>
                    <td className="border border-gray-300 px-4 py-3">Dependent on composition, moisture, and organic content.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Organic Material</td>
                    <td className="border border-gray-300 px-4 py-3">Mulch/Woodchips</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">400 – 800</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">0.2 – 0.4</td>
                    <td className="border border-gray-300 px-4 py-3">Lightest category; primary metric for sales is volume, not weight.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> These factors represent typical ranges. Always verify with your specific supplier for exact density values,
                as local material variations can affect these numbers. Use the custom density input in our calculator for precise calculations.
              </p>
            </div>
          </div>
        </div>

        {/* Earthwork Conversion Factors Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Earthwork Conversion Factors (Bulking and Compaction)</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-6">
              Earthwork calculations require understanding how soil behavior changes during excavation and compaction.
              Use these industry-standard factors for accurate project planning and material logistics.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Material</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Typical Bulking Factor<br/>(LCY/BCY)</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Typical Compaction Factor<br/>(CCY/BCY)</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Bank Density<br/>(lb/yd³)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Clay</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">1.3</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">0.8</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">3,100 – 3,500</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Soil</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">1.25</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">0.9</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">N/A</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Sand & Gravel</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">1.12</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">0.88</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">3,250 – 3,500</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Rock (Blasted)</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">1.5</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">1.3</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-50 border-l-4 border-green-400">
                <h4 className="font-medium text-green-800 mb-2">Bulking Factor Application</h4>
                <p className="text-green-800 text-sm">
                  <strong>Formula:</strong> BCY × Bulking Factor = LCY<br/>
                  Example: 100 BCY of clay × 1.3 = 130 LCY (30% volume increase when excavated)
                </p>
              </div>
              <div className="p-3 bg-purple-50 border-l-4 border-purple-400">
                <h4 className="font-medium text-purple-800 mb-2">Compaction Factor Application</h4>
                <p className="text-purple-800 text-sm">
                  <strong>Formula:</strong> CCY ÷ Compaction Factor = BCY<br/>
                  Example: 100 CCY of clay ÷ 0.8 = 125 BCY (25% more material needed for final compaction)
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400">
              <p className="text-yellow-800 text-sm">
                <strong>Professional Tip:</strong> These factors are essential for accurate trucking, disposal planning, and material procurement.
                Always test soil conditions on-site and consult with geotechnical engineers for large projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Silo Links */}
      <section className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Specialized Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/gravel-calculator" className="block p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Gravel Calculator</h3>
              <p className="text-sm text-gray-600">Calculate gravel needs for driveways, paths, and drainage</p>
            </a>
            <a href="/concrete-calculator" className="block p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Concrete Calculator</h3>
              <p className="text-sm text-gray-600">Estimate concrete volume for slabs, foundations, and structures</p>
            </a>
            <a href="/topsoil-and-mulch-calculator" className="block p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Topsoil & Mulch Calculator</h3>
              <p className="text-sm text-gray-600">Calculate soil and mulch needs for gardens and landscaping</p>
            </a>
            <a href="/earthwork-calculator" className="block p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Earthwork Calculator</h3>
              <p className="text-sm text-gray-600">Professional excavation and fill calculations</p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How Many Cubic Feet in a Yard?</h3>
                <p className="text-gray-600">
                  One cubic yard equals exactly 27 cubic feet. This is because: 3 feet × 3 feet × 3 feet = 27 cubic feet.
                  Knowing this conversion is essential for accurate material ordering.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How Do I Convert Square Feet to Cubic Yards?</h3>
                <p className="text-gray-600">
                  To convert square feet to cubic yards, multiply your square footage by the depth in feet, then divide by 27.
                  Formula: (Square Feet × Depth in Feet) ÷ 27 = Cubic Yards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's the Difference Between Loose and Compacted Material?</h3>
                <p className="text-gray-600">
                  Loose material (after excavation) expands and takes up more volume. Compacted material is densely packed and takes up less space.
                  Always account for these changes when estimating quantities.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How Much Material Should I Order Extra?</h3>
                <p className="text-gray-600">
                  Order 5-10% extra material to account for waste, spillage, and grading. For large projects or irregular terrain,
                  consider ordering 10-15% extra to avoid running short during construction.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How Do I Calculate Depth Conversions?</h3>
                <p className="text-gray-600">
                  Convert inches to feet by dividing by 12. For example: 6 inches = 0.5 feet.
                  Always use consistent units in your calculations to avoid errors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Do Material Weights Vary?</h3>
                <p className="text-gray-600">
                  Different materials have different densities. Gravel is heavier than topsoil, concrete heavier than sand.
                  Always use material-specific density factors for accurate weight and cost calculations.
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
