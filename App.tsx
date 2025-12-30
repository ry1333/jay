import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  MapPin, 
  Users, 
  FileText, 
  GraduationCap, 
  FlameKindling, 
  Flame,
  Zap, 
  Trees, 
  ArrowRight,
  ShieldCheck,
  ClipboardList,
  Compass,
  Mail,
  Phone
} from 'lucide-react';
import Navbar from './components/Navbar';
import RiskAssessmentTool from './components/RiskAssessmentTool';
import ServicesPage from './components/ServicesPage';
import WhoWeServePage from './components/WhoWeServePage';
import TeamPage from './components/TeamPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderHomePage = () => (
    <>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center space-x-2 bg-custom-orange/10 border border-custom-orange/20 px-4 py-1 rounded-full">
              <div className="w-2 h-2 bg-custom-orange rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-custom-orange">Wildfire Mitigation Specialists</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Reduce Wildfire <br />
              Risk. <span className="text-custom-orange">Strengthen <br />Resilience.</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Science-based planning, professional training, and on-the-ground mitigation support to protect lives, property, and landscapes from catastrophic fire.
            </p>

            <ul className="space-y-3">
              {['Decades of Field-Proven Experience', 'Science-Backed Risk Modeling', 'Multi-Sector Partnerships & Compliance'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm font-medium text-gray-300">
                  <div className="w-1.5 h-1.5 bg-custom-orange rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-custom-orange hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-900/20 active:scale-95"
              >
                Request a Consultation
              </button>
              <button 
                onClick={() => setCurrentPage('services')}
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold transition-all active:scale-95"
              >
                View Services
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2070&auto=format&fit=crop" 
                alt="Controlled Burn" 
                className="w-full h-full object-cover grayscale-[20%] brightness-75 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/10 border border-white/20 p-4 rounded-2xl flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-green-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Status</p>
                  <p className="text-sm font-bold">Mitigation Plan Active</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-custom-orange/10 blur-[100px] rounded-full -z-10" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full -z-10" />
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="border-y border-white/5 bg-black/20 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          {[
            { value: '20+', label: 'Years of Experience' },
            { value: 'A-Z', label: 'Plan to Implement' },
            { value: '100%', label: 'Science-Based' },
            { value: 'Multi', label: 'Sector Partnerships' }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <h4 className="text-4xl font-black text-white">{stat.value}</h4>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid (Preview) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Comprehensive <br />Wildfire Solutions</h2>
            <p className="text-gray-400 max-w-xl">
              From strategic planning documents to boots-on-the-ground fuels reduction, we handle the full lifecycle of wildfire risk management.
            </p>
          </div>
          <button 
            onClick={() => setCurrentPage('services')}
            className="flex items-center space-x-2 text-custom-orange font-bold text-sm hover:translate-x-1 transition-transform"
          >
            <span>View all services</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <BarChart3 className="text-orange-400" />, title: "Wildfire Risk Planning", desc: "Comprehensive risk assessment, spatial analysis, and strategic development for communities." },
            { icon: <FileText className="text-blue-400" />, title: "CWPP Development", desc: "Community Wildfire Protection Plans tailored to local regulations and funding opportunities." },
            { icon: <GraduationCap className="text-purple-400" />, title: "Courses & Certification", desc: "NWCG compliant training for agencies, private crews, and land managers." },
            { icon: <FlameKindling className="text-red-400" />, title: "Prescribed Burn Planning", desc: "Detailed burn plans (RXB2) including permits, ecological goals, and compliance." },
          ].map((service, i) => (
            <div key={i} className="group bg-custom-card border border-white/5 p-8 rounded-2xl hover:border-custom-orange/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-custom-orange/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">{service.desc}</p>
              <button 
                onClick={() => setCurrentPage('services')}
                className="inline-flex items-center space-x-2 text-xs font-bold text-gray-500 hover:text-custom-orange transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight size={12} />
              </button>
            </div>
          ))}
          <div className="lg:col-span-2">
            <RiskAssessmentTool />
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen bg-custom-dark overflow-hidden flex flex-col">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />

      <main className="flex-grow">
        {currentPage === 'home' && renderHomePage()}
        {currentPage === 'services' && <ServicesPage onContactClick={() => setCurrentPage('contact')} />}
        {currentPage === 'who-we-serve' && <WhoWeServePage onContactClick={() => setCurrentPage('contact')} />}
        {currentPage === 'team' && <TeamPage onContactClick={() => setCurrentPage('contact')} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="bg-black pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Flame className="w-8 h-8 text-custom-orange fill-custom-orange" />
                <span className="text-2xl font-black tracking-tighter">BWS</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Dedicated to creating resilient landscapes through science, planning, and professional mitigation services.
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-300">Quick Links</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-custom-orange transition-colors">Home</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-custom-orange transition-colors">Services</button></li>
                <li><button onClick={() => setCurrentPage('who-we-serve')} className="hover:text-custom-orange transition-colors">Who We Serve</button></li>
                <li><button onClick={() => setCurrentPage('team')} className="hover:text-custom-orange transition-colors">Team</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-custom-orange transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-300">Contact</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex items-center space-x-3">
                  <Mail size={14} className="text-custom-orange" />
                  <span>info@placeholder.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin size={14} className="text-custom-orange" />
                  <span>City, State</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-300">Join the Mission</h5>
              <p className="text-sm text-gray-500 mb-4">Stay updated on mitigation news.</p>
              <div className="flex">
                <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm outline-none w-full" />
                <button className="bg-custom-orange px-4 py-2 rounded-r-lg font-bold hover:bg-orange-700 transition-colors">Join</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] uppercase font-bold text-gray-600 tracking-widest">
            <p>© 2024 Burning Wildfire Services. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;