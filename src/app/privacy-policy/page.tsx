export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, such as when you use our calculator tools
              or contact us. This may include calculation inputs, but we do not store personal information
              or calculation history.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Information</h2>
            <p className="text-gray-700 mb-4">
              Any information collected is used solely to provide the calculator functionality and improve
              our services. We do not sell, trade, or otherwise transfer your information to third parties.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Storage</h2>
            <p className="text-gray-700 mb-4">
              Calculation data is processed in real-time and is not stored on our servers. All calculations
              are performed locally in your browser.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              This website may use cookies for functionality purposes only. We do not use tracking cookies
              or analytics services that collect personal information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We do not integrate with third-party services that collect user data. All functionality is
              self-contained within this website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect against unauthorized access to or
              alteration of your information. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              This website is not intended for children under 13 years of age. We do not knowingly collect
              personal information from children under 13.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by
              posting the new policy on this page.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this privacy policy, please contact us through our contact page.
            </p>

            <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-400">
              <p className="text-blue-800 text-sm">
                <strong>Summary:</strong> This website respects your privacy. We collect minimal information
                necessary for functionality and do not share or sell any data.
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
