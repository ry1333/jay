import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-8xl md:text-9xl font-black text-bws-orange mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary flex items-center space-x-2">
            <Home size={18} aria-hidden="true" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary flex items-center space-x-2"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
