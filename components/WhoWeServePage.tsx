import React from 'react';
import { 
  Globe, 
  Zap, 
  TrainFront, 
  Trees, 
  Heart, 
  Home, 
  Users, 
  ArrowRight 
} from 'lucide-react';

interface WhoWeServePageProps {
  onContactClick: () => void;
}

const WhoWeServePage: React.FC<WhoWeServePageProps> = ({ onContactClick }) => {
  const sectors = [
    { name: 'Federal, State and local governments', icon: <Globe /> },
    { name: 'Utility and Power companies', icon: <Zap /> },
    { name: 'Rail Industry', icon: <TrainFront /> },
    { name: 'Timber Industry', icon: <Trees /> },
    { name: 'Non-profit and land preservation organizations', icon: <Heart /> },
    { name: 'Private landowners', icon: <Home /> },
    { name: 'HOA’s', icon: <Users /> },
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-24">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8">Who We Serve</h1>
        <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium">
          “To reduce wildfire risk, strengthen community resilience, and safeguard lives, property, and natural landscapes through science-based mitigation strategies and expert guidance.”
        </p>
        <div className="mt-12">
          <button 
            onClick={onContactClick}
            className="bg-custom-orange hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-900/20 active:scale-95"
          >
            Request a Consultation
          </button>
        </div>
      </section>

      {/* Sector Chip Row (Quick Scan) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="flex flex-wrap justify-center gap-3">
          {sectors.map((sector, i) => (
            <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-wider text-gray-400">
              {sector.name}
            </span>
          ))}
        </div>
      </section>

      {/* Sector Cards Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-32">
        {sectors.map((sector, i) => (
          <div key={i} className="group bg-custom-card border border-white/5 p-8 rounded-3xl hover:border-custom-orange/30 transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-custom-orange/10 transition-colors text-custom-orange">
              {React.cloneElement(sector.icon as React.ReactElement, { size: 36 })}
            </div>
            <h3 className="text-xl font-bold leading-tight group-hover:text-custom-orange transition-colors">
              {sector.name}
            </h3>
          </div>
        ))}
      </section>

      {/* About Section Callout */}
      <section className="bg-white/[0.02] border-y border-white/5 py-24 px-4 mb-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-400 italic leading-relaxed">
            “With decades of experience from a team with a robust background in several states, BWS offers a variety of solutions to the ever-growing need for wildfire planning, management, education and implementation.”
          </p>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="px-4 text-center max-w-2xl mx-auto pb-12">
        <h3 className="text-4xl font-black mb-10 text-white">Reach out</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={onContactClick}
            className="bg-custom-orange hover:bg-orange-700 text-white px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-orange-900/40 transform hover:-translate-y-1 active:scale-95"
          >
            Request a Consultation
          </button>
          <button 
            onClick={onContactClick}
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-2xl font-black text-lg transition-all active:scale-95"
          >
            Contact
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhoWeServePage;