export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-6">
              Have questions about our cubic yard calculators or need help with your calculations?
              We're here to help! Please reach out to us using the contact information below.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Inquiries</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4">
                For general questions about our calculators, calculation methods, or material density factors,
                please contact our support team.
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> support@cubicyardcalculator.com
                </p>
                <p className="text-gray-700">
                  <strong>Response Time:</strong> We typically respond within 24-48 hours
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Support</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4">
                Experiencing technical issues with our calculators or need help understanding calculation results?
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> tech@cubicyardcalculator.com
                </p>
                <p className="text-gray-700">
                  <strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Business Partnerships</h2>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4">
                Interested in partnering with us or have suggestions for new calculator features?
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> partnerships@cubicyardcalculator.com
                </p>
                <p className="text-gray-700">
                  <strong>Subject Line:</strong> Please include "Partnership Inquiry" in your email
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700 mb-4">
              Before contacting us, please check our comprehensive FAQ section on the main page,
              which covers common questions about:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>How cubic yard calculations work</li>
              <li>Material density factors and conversions</li>
              <li>Earthwork calculations (BCY/LCY/CCY)</li>
              <li>Converting between different units</li>
              <li>Ordering extra materials and waste factors</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Feedback & Suggestions</h2>
            <p className="text-gray-700 mb-4">
              We value your feedback! Help us improve our calculators by sharing your suggestions
              and experiences.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> feedback@cubicyardcalculator.com
                </p>
                <p className="text-gray-700">
                  <strong>What to Include:</strong> Calculator type, specific suggestion, and how it would help your work
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Consultation</h2>
            <p className="text-gray-700 mb-4">
              While our calculators provide accurate estimates, we recommend consulting qualified professionals
              for critical construction projects. We can provide referrals to certified professionals in your area.
            </p>

            <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> This website does not provide emergency construction consultation.
                For urgent construction issues, please contact local authorities or qualified emergency services.
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
