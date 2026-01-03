import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { siteConfig, navigation } from '../content/bws';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/">
              <img src={siteConfig.logo} alt="Bailey Wildfire Solutions" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Dedicated to creating resilient landscapes through science, planning, and
              professional mitigation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-300">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm text-gray-500">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-bws-orange transition-colors focus-visible:text-bws-orange focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-300">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center space-x-3">
                <Mail size={14} className="text-bws-orange" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-bws-orange transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={14} className="text-bws-orange mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <span className="block">{siteConfig.location}</span>
                  <span className="text-xs text-gray-600">Serving the Southeast & Rocky Mountain areas</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-300">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-500 mb-4">Get wildfire mitigation news and updates.</p>
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="flex"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="footer-email"
                name="email"
                placeholder="Email"
                required
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm outline-none w-full focus:border-bws-orange transition-colors"
              />
              <button
                type="submit"
                className="bg-bws-red px-4 py-2 rounded-r-lg font-bold hover:bg-bws-red-dark transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] uppercase font-bold text-gray-600 tracking-widest">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
