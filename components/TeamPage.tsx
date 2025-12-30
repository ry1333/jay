import React, { useState } from 'react';
import { ChevronDown, ChevronUp, User, Shield, Map, GraduationCap } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  shortBio: string;
  longBio?: string[];
  image: string;
  icon: React.ReactNode;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, shortBio, longBio, image, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-custom-card border border-white/5 rounded-3xl overflow-hidden transition-all duration-300 hover:border-custom-orange/30 group flex flex-col h-full">
      <div className="aspect-[4/5] relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-custom-card via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-custom-orange border border-white/10">
          {icon}
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold group-hover:text-custom-orange transition-colors">{name}</h3>
        <p className="text-xs font-black text-custom-orange uppercase tracking-widest mt-1 mb-6">{role}</p>
        
        <p className="text-sm text-gray-400 leading-relaxed mb-6">
          {shortBio}
        </p>

        {longBio && (
          <div className="mt-auto">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-2 text-xs font-bold text-white hover:text-custom-orange transition-colors uppercase tracking-wider"
            >
              <span>{isExpanded ? 'Show Less' : 'Read More Bio'}</span>
              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            
            {isExpanded && (
              <div className="mt-6 space-y-3 pt-6 border-t border-white/5 animate-in fade-in slide-in-from-top-2 duration-300">
                {longBio.map((fact, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-custom-orange rounded-full mt-2 flex-shrink-0" />
                    <p className="text-xs text-gray-500 leading-relaxed italic">{fact}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

interface TeamPageProps {
  onContactClick: () => void;
}

const TeamPage: React.FC<TeamPageProps> = ({ onContactClick }) => {
  const team = [
    {
      name: 'Christy Bailey',
      role: 'President / CFO',
      shortBio: 'As a business owner for more than 25 years and a parent to three children, Christy has devoted much of her life to balancing professional and family responsibilities.',
      longBio: [
        'A graduate of Elon University.',
        'Passionate about the outdoors and committed to preserving and restoring natural habitats through systematic, cost-effective, and efficient processes.'
      ],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
      icon: <User size={20} />
    },
    {
      name: 'Jay Bailey',
      role: 'VP / COO',
      shortBio: 'With nearly three decades dedicated to wildfire response, mitigation, and incident management.',
      longBio: [
        'Began in the 1990s with the Florida Forest Service during intense wildfire activity.',
        'Led Sarasota County’s wildfire management program for 17 years.',
        'Oversaw more than 750 prescribed burns; responded to hundreds of wildfires.',
        'Conducted risk assessments for numerous homes and properties each year; helped educate hundreds of firefighters and residents.',
        'Joined Incident Response Teams for hurricanes and other natural disasters across the country.',
        'Post-retirement private sector disaster response including extended deployment to North Carolina following Hurricane Helene.'
      ],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      icon: <Shield size={20} />
    },
    {
      name: 'David Cavanaugh',
      role: 'Wildfire Mitigation Coordinator',
      shortBio: 'Fire Program Lead for The Nature Conservancy’s Pennsylvania/Delaware Business Unit.',
      longBio: [
        'Supports partners statewide building fire capacity, planning prescribed burns, and leading operations.',
        'Previously Wildfire Mitigation Specialist for Sarasota County.',
        'Florida Certified Burn Manager.',
        'Burn boss on more than 200 prescribed fires; participated in over 600 burns.',
        'NWCG qualifications: TFLD, RXB2, READ, FIRB, HEQB, ENGB.',
        'Degree in Environmental Studies from Florida Gulf Coast University.'
      ],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
      icon: <Map size={20} />
    },
    {
      name: 'Shepard Zedaker, PhD',
      role: 'Fire Scientist / Forester / Teacher',
      shortBio: 'Expert in fire science, forestry, and educational instruction, providing foundational scientific oversight for BWS mitigation strategies.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
      icon: <GraduationCap size={20} />
    }
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-24">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8">Our Team</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
          Meet the team behind BWS.
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

      {/* Team Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {team.map((member, i) => (
          <TeamMemberCard key={i} {...member} />
        ))}
      </section>

      {/* Bottom CTA Band */}
      <section className="px-4 text-center max-w-2xl mx-auto pb-12">
        <h3 className="text-4xl font-black mb-10 text-white">Reach out</h3>
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

export default TeamPage;