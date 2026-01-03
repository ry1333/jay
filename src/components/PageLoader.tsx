import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start loading
    setIsLoading(true);

    // Simulate minimum loading time for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-bws-dark flex items-center justify-center transition-opacity duration-300">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-white/10 rounded-full" />
        {/* Spinning arc */}
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-bws-red rounded-full animate-spin" />
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-bws-red rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
