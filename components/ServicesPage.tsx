
import React from 'react';
import { 
  BarChart3, 
  FileText, 
  GraduationCap, 
  ClipboardList, 
  FlameKindling, 
  Trees, 
  Users, 
  ArrowRight 
} from 'lucide-react';

interface ServicesPageProps {
  onContactClick: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onContactClick }) => {
  const services = [
    { name: 'Wildfire Risk Planning', icon: <BarChart3 /> },
    { name: 'CWPP Development', icon: <FileText /> },
    { name: 'Wildfire Courses/certification', icon: <GraduationCap /> },
    { name: 'Prescribed Burn Planning', icon: <ClipboardList /> },
    { name: 'Prescribed Burn Assistance', icon: <FlameKindling /> },
    { name: 'Fire Breaks and Fuels management', icon: <Trees /> },
    { name: 'Workshops and seminars', icon: <Users /> },
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-24">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8">Services</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
          With decades of experience from a team with a robust background in several states, BWS offers a variety of solutions to the ever-growing need for wildfire planning, management, education and implementation.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <button 
            onClick={onContactClick}
            className="bg-custom-orange hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-900/20 active:scale-95"
          >
            Request a Consultation
          </button>
          <button 
            onClick={onContactClick}
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold transition-all active:scale-95"
          >
            Contact
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {services.map((service, i) => (
          <div key={i} className="group bg-custom-card border border-white/5 p-8 rounded-3xl hover:border-custom-orange/30 transition-all duration-300">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-custom-orange/10 transition-colors text-custom-orange">
              {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
            </div>
            <h3 className="text-2xl font-bold mb-6 min-h-[4rem] group-hover:text-custom-orange transition-colors">{service.name}</h3>
            <a href="#" className="inline-flex items-center space-x-2 text-sm font-bold text-gray-500 hover:text-custom-orange transition-colors group-hover:translate-x-1 duration-300">
              <span>Learn more</span>
              <ArrowRight size={18} />
            </a>
          </div>
        ))}
      </section>

      {/* Mission Callout Band */}
      <section className="bg-custom-card border-y border-white/5 py-24 px-4 mb-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-custom-orange/5 blur-3xl rounded-full" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-custom-orange mb-8">Mission</h2>
          <p className="text-2xl md:text-4xl font-semibold leading-tight text-white/90">
            “To reduce wildfire risk, strengthen community resilience, and safeguard lives, property, and natural landscapes through science-based mitigation strategies and expert guidance.”
          </p>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="px-4 text-center max-w-2xl mx-auto pb-12">
        <h3 className="text-3xl font-bold mb-10 text-gray-400 italic">Reach out</h3>
        <button 
          onClick={onContactClick}
          className="bg-custom-orange hover:bg-orange-700 text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-orange-900/40 transform hover:-translate-y-1 active:scale-95"
        >
          Request a Consultation
        </button>
      </section>
    </div>
  );
};

export default ServicesPage;
