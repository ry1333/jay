import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Zap, TrainFront, Trees, Heart, Home, Users, ArrowRight } from 'lucide-react';
import { sectors } from '../content/bws';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={28} />,
  Zap: <Zap size={28} />,
  TrainFront: <TrainFront size={28} />,
  Trees: <Trees size={28} />,
  Heart: <Heart size={28} />,
  Home: <Home size={28} />,
  Users: <Users size={28} />,
};

export default function WhoWeServe() {
  const [activeChip, setActiveChip] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const scrollToCard = (index: number) => {
    setActiveChip(index);
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="pt-28 pb-24">
      {/* Hero Section - Reduced height */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-12">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Who We Serve
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We partner with public agencies, industry leaders, and landowners to plan and implement wildfire risk reduction.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Request a Consultation</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Interactive Sector Chips */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8" aria-label="Sector filters">
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {sectors.map((sector, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeChip === i
                    ? 'bg-bws-red text-white'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:border-bws-red/50 hover:text-white'
                }`}
              >
                {sector.name}
              </button>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Section Divider */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Sectors We Work With</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </div>

      {/* Sector Cards */}
      <section
        className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24"
        aria-label="Sector details"
      >
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {sectors.map((sector, i) => (
            <StaggerItem key={i}>
              <article
                ref={(el) => (cardRefs.current[i] = el)}
                className={`group card p-6 rounded-2xl flex flex-col transition-all ${
                  activeChip === i ? 'border-bws-red/50 bg-bws-red/5' : ''
                }`}
              >
                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-bws-red/10 transition-colors text-bws-red/80 group-hover:text-bws-red">
                  {iconMap[sector.icon]}
                </div>
                <h2 className="text-lg font-bold leading-tight mb-2 group-hover:text-bws-red transition-colors">
                  {sector.name}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {sector.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Bottom CTA - Using doc language */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/night-wildfire-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reach Out to Discuss Your Needs</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Our team is ready to help with wildfire planning, management, education and implementation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Request a Consultation</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
