import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigation, siteConfig } from '../content/bws';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-bws-dark border-b border-white/5"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link
            to="/"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bws-red focus-visible:ring-offset-2 focus-visible:ring-offset-bws-dark rounded-lg"
            aria-label={`${siteConfig.name} - Home`}
          >
            <img
              src={siteConfig.logo}
              alt="Bailey Wildfire Solutions"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'nav-link-active' : ''}`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-bws-red hover:bg-bws-red-dark text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-bws-red focus-visible:ring-offset-2 focus-visible:ring-offset-bws-dark"
            >
              Request a Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bws-orange rounded-lg"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-bws-dark border-b border-white/10 px-4 pt-2 pb-6"
        >
          <nav className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left text-lg font-medium py-3 px-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'text-bws-orange bg-bws-orange/10'
                    : 'hover:text-bws-orange hover:bg-white/5'
                }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 mt-4 border-t border-white/5">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-bws-orange text-white text-center py-3 rounded-lg font-semibold"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
