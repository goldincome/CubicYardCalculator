import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600">
            Cubic Yard Calculator
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Calculator
            </Link>
            <Link href="/gravel-calculator" className="text-gray-700 hover:text-blue-600 font-medium">
              Gravel
            </Link>
            <Link href="/concrete-calculator" className="text-gray-700 hover:text-blue-600 font-medium">
              Concrete
            </Link>
            <Link href="/topsoil-and-mulch-calculator" className="text-gray-700 hover:text-blue-600 font-medium">
              Topsoil
            </Link>
            <Link href="/earthwork-calculator" className="text-gray-700 hover:text-blue-600 font-medium">
              Earthwork
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Conversions
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href="/conversions/cubic-yards-to-tons" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Cubic Yards to Tons
                  </Link>
                  <Link href="/conversions/square-feet-to-cubic-yards" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Square Feet to Cubic Yards
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
