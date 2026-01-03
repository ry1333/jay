import { Link } from 'react-router-dom';
import { useScroll, useTransform, motion } from 'framer-motion';
import {
  BarChart3,
  FileText,
  GraduationCap,
  ClipboardList,
  FlameKindling,
  Trees,
  Users,
  Globe,
  Zap,
  TrainFront,
  Heart,
  Home as HomeIcon,
  ArrowRight,
  ShieldCheck,
  Award,
  Flame,
  Clock,
  MessageSquare,
  Search,
  FileCheck,
} from 'lucide-react';
import { mission, about, services, sectors, stats, siteConfig } from '../content/bws';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '../components/Motion';

const serviceIconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 className="text-orange-400" size={28} />,
  FileText: <FileText className="text-blue-400" size={28} />,
  GraduationCap: <GraduationCap className="text-purple-400" size={28} />,
  ClipboardList: <ClipboardList className="text-green-400" size={28} />,
  FlameKindling: <FlameKindling className="text-red-400" size={28} />,
  Trees: <Trees className="text-emerald-400" size={28} />,
  Users: <Users className="text-cyan-400" size={28} />,
};

const sectorIconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={24} />,
  Zap: <Zap size={24} />,
  TrainFront: <TrainFront size={24} />,
  Trees: <Trees size={24} />,
  Heart: <Heart size={24} />,
  Home: <HomeIcon size={24} />,
  Users: <Users size={24} />,
};


// Trust bar items for above-the-fold social proof
const trustItems = [
  { icon: <ShieldCheck size={16} />, label: 'Fully Insured' },
  { icon: <Award size={16} />, label: 'NWCG Member' },
  { icon: <Flame size={16} />, label: '750+ Burns Led' },
  { icon: <Clock size={16} />, label: '25+ Years Exp.' },
];

// Process steps for "What happens next"
const processSteps = [
  {
    step: 1,
    icon: <MessageSquare size={20} />,
    title: 'Tell Us About Your Project',
    description: 'Share your property details and goals',
  },
  {
    step: 2,
    icon: <Search size={20} />,
    title: 'Consultation & Risk Review',
    description: 'We assess your site and needs',
  },
  {
    step: 3,
    icon: <FileCheck size={20} />,
    title: 'Receive Your Mitigation Plan',
    description: 'Get a tailored action plan',
  },
];

export default function Home() {
  // Parallax scroll effect for hero image
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroImageScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="space-y-8 z-10">
              <div className="inline-flex items-center space-x-2 bg-bws-red/10 border border-bws-red/20 px-4 py-1 rounded-full">
                <div className="w-2 h-2 bg-bws-red rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-bws-red">
                  {siteConfig.tagline}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                Reduce Wildfire <br />
                Risk. <span className="text-bws-red">Strengthen<br />Resilience.</span>
              </h1>

              {/* Improved contrast: gray-400 -> gray-300 */}
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                {mission}
              </p>

              <div className="space-y-4 pt-4">
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary">
                    Request a Consultation
                  </Link>
                  <Link to="/services" className="btn-secondary">
                    View Services
                  </Link>
                </div>

                {/* Microcopy - explains what happens after CTA */}
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full" aria-hidden="true" />
                  Free initial consult • We reply within 1 business day
                </p>

                {/* Trust Bar - compact social proof */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
                  {trustItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 text-gray-400"
                    >
                      <span className="text-bws-red" aria-hidden="true">{item.icon}</span>
                      <span className="text-xs font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <motion.div className="relative" style={{ opacity: heroOpacity }}>
              <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <motion.img
                  src="/images/hero-prescribed-burn.jpg"
                  alt="Prescribed burn - wildfire mitigation in action"
                  className="w-full h-full object-cover brightness-90 hover:brightness-100 transition-all duration-700"
                  loading="eager"
                  style={{ y: heroImageY, scale: heroImageScale }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Updated overlay with relevant proof points instead of confusing "Mitigation Plan Active" */}
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/10 border border-white/20 p-4 rounded-2xl">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="text-green-500 w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Certified • Insured • Compliant</p>
                        <p className="text-[10px] text-gray-300">NWCG Member • Federally Certified Firefighters</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-20 -right-20 w-80 h-80 bg-bws-red/10 blur-[100px] rounded-full -z-10" aria-hidden="true" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full -z-10" aria-hidden="true" />
            </motion.div>
          </FadeIn>
        </div>
      </header>

      {/* What Happens Next - Process Stepper */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto" aria-labelledby="process-heading">
        <FadeIn>
          <div className="bg-bws-card border border-white/5 rounded-2xl p-6 md:p-8">
            <h2 id="process-heading" className="sr-only">Our Process</h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-4">
              {processSteps.map((step, i) => (
                <div key={step.step} className="flex md:flex-col items-start md:items-center md:text-center gap-4">
                  {/* Step indicator */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-bws-red/10 border border-bws-red/30 flex items-center justify-center text-bws-red">
                      {step.icon}
                    </div>
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-bws-red text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-xs text-gray-400">{step.description}</p>
                  </div>
                  {/* Connector line (desktop only, not on last item) */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-white/10" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/5 bg-black/20 py-16" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            {stats.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="space-y-1">
                  <p className="text-4xl font-black text-white">{stat.value}</p>
                  {/* Improved contrast: gray-500 -> gray-400 */}
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto" aria-labelledby="experience-heading">
        <FadeIn>
          <div className="text-center">
            <h2 id="experience-heading" className="text-xs font-black uppercase tracking-[0.3em] text-bws-red mb-4">
              Why Choose BWS
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-white mb-6">25+ Years of Experience</p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Based in Florida and Colorado, we serve the Southeast and Rocky Mountain areas with NWCG member firefighters who are federally certified wildland professionals.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* About Section with All 7 Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-labelledby="about-heading">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 id="about-heading" className="text-xs font-black uppercase tracking-[0.3em] text-bws-red mb-4">
              About BWS
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-white/90 max-w-4xl mx-auto leading-relaxed">
              {about}
            </p>
          </div>
        </FadeIn>

        {/* Show 6 services in a 3x2 grid for symmetry, link to full list */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <StaggerItem key={service.id}>
              <Link
                to={`/services/${service.id}`}
                className="group card p-6 block hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-bws-red/10 transition-colors">
                  {serviceIconMap[service.icon]}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-bws-red transition-colors">
                  {service.name}
                </h3>
                {/* Improved contrast: gray-400 -> gray-300 */}
                <p className="text-sm text-gray-300 leading-relaxed">{service.shortDescription}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-bws-red font-bold hover:translate-x-1 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-bws-red focus-visible:ring-offset-2 focus-visible:ring-offset-bws-dark rounded-lg px-2 py-1"
            >
              <span>View all services</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Who We Serve Section */}
      <section className="bg-bws-card border-y border-white/5 py-24 px-4" aria-labelledby="sectors-heading">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 id="sectors-heading" className="text-xs font-black uppercase tracking-[0.3em] text-bws-red mb-4">
                Who We Serve
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-white">Partners Across Multiple Sectors</p>
            </div>
          </FadeIn>

          {/* Sector pills - now clearly clickable links to /who-we-serve */}
          <StaggerContainer className="flex flex-wrap justify-center gap-3 mb-12">
            {sectors.map((sector, i) => (
              <StaggerItem key={i}>
                <Link
                  to="/who-we-serve"
                  className="flex items-center space-x-3 px-5 py-3 bg-white/5 border border-white/10 rounded-full
                           hover:border-bws-red/50 hover:bg-bws-red/10
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-bws-red focus-visible:ring-offset-2 focus-visible:ring-offset-bws-card
                           transition-all cursor-pointer group"
                  aria-label={`Learn more about our services for ${sector.name}`}
                >
                  <span className="text-bws-red group-hover:scale-110 transition-transform" aria-hidden="true">
                    {sectorIconMap[sector.icon]}
                  </span>
                  {/* Improved contrast: gray-300 -> gray-200 */}
                  <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                    {sector.name}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <div className="text-center">
              <Link
                to="/who-we-serve"
                className="inline-flex items-center space-x-2 text-bws-red font-bold hover:translate-x-1 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-bws-red focus-visible:ring-offset-2 focus-visible:ring-offset-bws-card rounded-lg px-2 py-1"
              >
                <span>Learn more about who we serve</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Callout */}
      <section className="py-24 px-4" aria-labelledby="mission-heading">
        <ScaleIn>
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="mission-heading" className="text-xs font-black uppercase tracking-[0.3em] text-bws-red mb-8">
              Our Mission
            </h2>
            <blockquote className="text-2xl md:text-4xl font-semibold leading-tight text-white/90 italic">
              "{mission}"
            </blockquote>
          </div>
        </ScaleIn>
      </section>

      {/* CTA Section */}
      <section className="relative border-y border-white/5 py-24 px-4 overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0">
          <img
            src="/images/night-wildfire-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            {/* Improved contrast */}
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
              Contact our team of wildfire mitigation experts for a consultation.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-10 py-5">
              Request a Consultation
            </Link>
            {/* Microcopy for bottom CTA */}
            <p className="text-sm text-gray-400 mt-4">
              No obligation • Free initial consultation
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
