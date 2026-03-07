import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasLogo, setHasLogo] = useState(false)
  const location = useLocation()

  // Check if logo exists
  useEffect(() => {
    const checkLogo = async () => {
      try {
        const response = await fetch('/logo.png')
        if (response.ok) {
          setHasLogo(true)
          return
        }
      } catch (e) {
        // PNG not found, try JPG
      }

      try {
        const response = await fetch('/logo.jpg')
        if (response.ok) {
          setHasLogo(true)
        }
      } catch (e) {
        // No logo found, use default
      }
    }
    checkLogo()
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our CAD', path: '/cad' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Want to Sponsor?', path: '/want-to-sponsor' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-navy-700 text-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {hasLogo ? (
              <img
                src={`/logo.png`}
                alt="JAWS Robotics Logo"
                className="h-12 w-auto"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/logo.jpg'
                }}
              />
            ) : (
              <div className="w-12 h-12 bg-electric-blue-500 rounded-lg flex items-center justify-center font-bold text-2xl group-hover:bg-electric-blue-600 transition-colors duration-300">
                J
              </div>
            )}
            <span className="text-2xl font-bold">JAWS Robotics</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-electric-blue-500 text-white'
                    : 'text-gray-200 hover:bg-navy-600 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-navy-600 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-electric-blue-500 text-white'
                      : 'text-gray-200 hover:bg-navy-600 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

