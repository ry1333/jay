import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, User, Shield, Map, GraduationCap } from 'lucide-react';
import { team } from '../content/bws';

const iconMap: Record<string, React.ReactNode> = {
  User: <User size={20} />,
  Shield: <Shield size={20} />,
  Map: <Map size={20} />,
  GraduationCap: <GraduationCap size={20} />,
};

interface TeamMemberCardProps {
  name: string;
  role: string;
  shortBio: string;
  longBio: string[];
  image: string;
  icon: string;
}

function TeamMemberCard({ name, role, shortBio, longBio, image, icon }: TeamMemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Use real images from content, fallback to placeholder for members without photos yet
  const placeholderImages: Record<string, string> = {
    'Christy Bailey':
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    'David Cavanaugh':
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    'Shepard Zedaker, PHD':
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
  };

  // Use real image if it's a local path, otherwise check for placeholder
  const finalImage = image.startsWith('/images/') ? image : (placeholderImages[name] || image);

  return (
    <article className="card rounded-3xl overflow-hidden flex flex-col h-full group">
      <div className="aspect-[4/5] relative overflow-hidden">
        <img
          src={finalImage}
          alt={`${name} - ${role}`}
          className="w-full h-full object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bws-card via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-bws-orange border border-white/10">
          {iconMap[icon]}
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold group-hover:text-bws-orange transition-colors">{name}</h2>
        <p className="text-xs font-black text-bws-orange uppercase tracking-widest mt-1 mb-6">
          {role}
        </p>

        {shortBio && (
          <p className="text-sm text-gray-400 leading-relaxed mb-6">{shortBio}</p>
        )}

        {longBio && longBio.length > 0 && (
          <div className="mt-auto">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-2 text-xs font-bold text-white hover:text-bws-orange transition-colors uppercase tracking-wider"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? 'Show Less' : 'Read More Bio'}</span>
              {isExpanded ? (
                <ChevronUp size={14} aria-hidden="true" />
              ) : (
                <ChevronDown size={14} aria-hidden="true" />
              )}
            </button>

            {isExpanded && (
              <div className="mt-6 space-y-3 pt-6 border-t border-white/5">
                {longBio.map((fact, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div
                      className="w-1 h-1 bg-bws-orange rounded-full mt-2 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <p className="text-xs text-gray-500 leading-relaxed italic">{fact}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-24">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8">
          Our Team
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
          Meet the experienced professionals behind BWS.
        </p>
        <div className="mt-12">
          <Link to="/contact" className="btn-primary">
            Request a Consultation
          </Link>
        </div>
      </section>

      {/* Team Grid */}
      <section
        className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32"
        aria-label="Team members"
      >
        {team.map((member, i) => (
          <TeamMemberCard key={i} {...member} />
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="px-4 text-center max-w-2xl mx-auto pb-12">
        <h2 className="text-4xl font-black mb-10 text-white">Work With Us</h2>
        <Link
          to="/contact"
          className="inline-block bg-bws-red hover:bg-bws-red-dark text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-red-900/40 transform hover:-translate-y-1 active:scale-95"
        >
          Request a Consultation
        </Link>
      </section>
    </div>
  );
}
