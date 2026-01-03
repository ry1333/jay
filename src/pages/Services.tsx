import { Link } from 'react-router-dom';
import {
  BarChart3,
  FileText,
  GraduationCap,
  ClipboardList,
  FlameKindling,
  Trees,
  Users,
  ArrowRight,
} from 'lucide-react';
import { services, mission, about } from '../content/bws';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion';

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 size={32} />,
  FileText: <FileText size={32} />,
  GraduationCap: <GraduationCap size={32} />,
  ClipboardList: <ClipboardList size={32} />,
  FlameKindling: <FlameKindling size={32} />,
  Trees: <Trees size={32} />,
  Users: <Users size={32} />,
};

const colorMap: Record<string, string> = {
  orange: 'group-hover:bg-orange-400/10 text-orange-400',
  blue: 'group-hover:bg-blue-400/10 text-blue-400',
  purple: 'group-hover:bg-purple-400/10 text-purple-400',
  green: 'group-hover:bg-green-400/10 text-green-400',
  red: 'group-hover:bg-red-400/10 text-red-400',
  emerald: 'group-hover:bg-emerald-400/10 text-emerald-400',
  cyan: 'group-hover:bg-cyan-400/10 text-cyan-400',
};

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-24">
        <FadeIn>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8">
            Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
            {about}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link to="/contact" className="btn-primary">
              Request a Consultation
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Services Grid */}
      <section
        className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32"
        aria-label="Our services"
      >
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <Link
                to={`/services/${service.id}`}
                className="group card p-8 rounded-3xl block h-full hover:-translate-y-1 transition-all"
              >
                <div
                  className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 transition-colors ${colorMap[service.color]}`}
                >
                  {iconMap[service.icon]}
                </div>
                <h2 className="text-2xl font-bold mb-4 min-h-[3rem] group-hover:text-bws-orange transition-colors">
                  {service.name}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.shortDescription}</p>
                <span className="inline-flex items-center space-x-2 text-sm font-bold text-gray-500 group-hover:text-bws-orange transition-colors">
                  <span>Learn more</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Mission Callout */}
      <section
        className="bg-bws-card border-y border-white/5 py-24 px-4 mb-32 relative overflow-hidden"
        aria-labelledby="mission-heading"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-bws-orange/5 blur-3xl rounded-full"
          aria-hidden="true"
        />
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2
              id="mission-heading"
              className="text-xs font-black uppercase tracking-[0.3em] text-bws-orange mb-8"
            >
              Mission
            </h2>
            <p className="text-2xl md:text-4xl font-semibold leading-tight text-white/90">
              "{mission}"
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 text-center max-w-2xl mx-auto pb-12">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-10 text-gray-400 italic">Ready to get started?</h2>
          <Link
            to="/contact"
            className="inline-block bg-bws-red hover:bg-bws-red-dark text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-red-900/40 transform hover:-translate-y-1 active:scale-95"
          >
            Request a Consultation
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
