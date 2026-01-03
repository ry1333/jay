import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Don't show on contact page
  const isContactPage = location.pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isContactPage) return null;

  return (
    <div
      className={`fixed bottom-6 left-4 right-4 z-50 md:hidden transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2 w-full bg-bws-red hover:bg-bws-red-dark text-white font-bold py-4 px-6 rounded-2xl shadow-2xl shadow-red-900/40 transition-all active:scale-95"
      >
        <MessageSquare size={20} />
        <span>Request Consultation</span>
      </Link>
    </div>
  );
}
