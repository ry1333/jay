
import React from 'react';
import { Flame, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Who We Serve', id: 'who-we-serve' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onPageChange(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-custom-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => handleNavClick('home')} className="flex items-center space-x-2">
            <Flame className="w-8 h-8 text-custom-orange fill-custom-orange" />
            <span className="text-2xl font-black tracking-tighter">BWS</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id ? 'text-custom-orange' : 'hover:text-custom-orange'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-custom-orange hover:bg-orange-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all"
            >
              Request a Consultation
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-400">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-custom-dark border-b border-white/10 px-4 pt-2 pb-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left text-lg font-medium py-2"
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col space-y-3 pt-4 border-t border-white/5">
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-custom-orange text-white py-3 rounded-lg font-semibold"
            >
              Request Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
