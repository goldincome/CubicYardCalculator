export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              We provide professional-grade cubic yard calculation tools to help construction professionals,
              landscapers, and DIY enthusiasts make accurate material estimates. Our calculators combine
              industry-standard formulas with user-friendly interfaces to deliver reliable results.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Comprehensive Calculators</h3>
                <p className="text-blue-800 text-sm">
                  Specialized calculators for gravel, concrete, topsoil, mulch, and earthwork calculations
                  with material-specific density factors.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Professional Accuracy</h3>
                <p className="text-green-800 text-sm">
                  Industry-standard conversion factors and calculation methods used by construction
                  professionals worldwide.
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Educational Content</h3>
                <p className="text-purple-800 text-sm">
                  In-depth guides on cubic yard calculations, material densities, and construction best practices.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Free Access</h3>
                <p className="text-orange-800 text-sm">
                  All tools and resources are completely free to use, with no registration or subscription required.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-gray-700 mb-4">
              Our calculation tools are built on decades of construction industry experience and incorporate
              the latest material science data. We understand that accurate material estimation is crucial
              for project success, cost control, and waste reduction.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Industry Standards</h2>
            <p className="text-gray-700 mb-4">
              We adhere to industry standards and best practices, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>ASTM material density standards</li>
              <li>Professional construction estimation methods</li>
              <li>Earthwork calculation protocols (BCY/LCY/CCY)</li>
              <li>Local building code considerations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Commitment to Quality</h2>
            <p className="text-gray-700 mb-4">
              Every calculator undergoes rigorous testing and validation against real-world construction scenarios.
              We continuously update our tools based on user feedback and industry developments to ensure
              the highest level of accuracy and reliability.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy & Security</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. All calculations are performed locally in your browser,
              and we do not store or transmit any personal information or calculation data.
            </p>

            <div className="mt-8 p-4 bg-green-50 border-l-4 border-green-400">
              <p className="text-green-800 text-sm">
                <strong>Professional Tool for Professional Results:</strong> Whether you're a contractor estimating
                a large project or a homeowner planning a landscaping project, our calculators provide the
                accuracy and reliability you need to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

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
