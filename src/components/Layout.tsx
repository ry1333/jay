import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyMobileCTA from './StickyMobileCTA';
import PageLoader from './PageLoader';

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-bws-dark flex flex-col">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      <StickyMobileCTA />
      <PageLoader />
    </div>
  );
}
