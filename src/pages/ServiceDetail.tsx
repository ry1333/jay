import { useParams, Link, Navigate } from 'react-router-dom';
import {
  BarChart3,
  FileText,
  GraduationCap,
  ClipboardList,
  FlameKindling,
  Trees,
  Users,
  ArrowLeft,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { services } from '../content/bws';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion';

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 size={48} />,
  FileText: <FileText size={48} />,
  GraduationCap: <GraduationCap size={48} />,
  ClipboardList: <ClipboardList size={48} />,
  FlameKindling: <FlameKindling size={48} />,
  Trees: <Trees size={48} />,
  Users: <Users size={48} />,
};

const colorMap: Record<string, string> = {
  orange: 'text-orange-400 bg-orange-400/10',
  blue: 'text-blue-400 bg-blue-400/10',
  purple: 'text-purple-400 bg-purple-400/10',
  green: 'text-green-400 bg-green-400/10',
  red: 'text-red-400 bg-red-400/10',
  emerald: 'text-emerald-400 bg-emerald-400/10',
  cyan: 'text-cyan-400 bg-cyan-400/10',
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const currentIndex = services.findIndex((s) => s.id === serviceId);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <div className="pt-32 pb-24">
      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
        <Link
          to="/services"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-bws-orange transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Services</span>
        </Link>
      </div>

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div
              className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-8 ${colorMap[service.color]}`}
            >
              {iconMap[service.icon]}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              {service.name}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              {service.fullDescription}
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight size={18} />
            </Link>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden border border-white/10">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bws-dark/80 to-transparent" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="bg-bws-card border-y border-white/5 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Features */}
            <FadeIn>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-bws-orange mb-6">
                What We Provide
              </h2>
              <h3 className="text-3xl font-bold mb-8">Service Features</h3>
              <StaggerContainer className="space-y-4">
                {service.features.map((feature, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/5">
                      <CheckCircle className="text-bws-orange flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeIn>

            {/* Benefits */}
            <FadeIn delay={0.2}>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-bws-orange mb-6">
                Why It Matters
              </h2>
              <h3 className="text-3xl font-bold mb-8">Key Benefits</h3>
              <StaggerContainer className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start space-x-4 p-4 bg-bws-orange/5 rounded-xl border border-bws-orange/20">
                      <div className="w-8 h-8 bg-bws-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-bws-orange font-bold text-sm">{i + 1}</span>
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started with {service.name}?
            </h2>
            <p className="text-gray-300 mb-10 text-lg">
              Contact our team to discuss your specific needs and how we can help.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-10 py-5">
              Request a Consultation
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Navigation */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-t border-white/10 pt-12 flex justify-between">
          {prevService ? (
            <Link
              to={`/services/${prevService.id}`}
              className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">Previous</p>
                <p className="font-semibold">{prevService.name}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextService && (
            <Link
              to={`/services/${nextService.id}`}
              className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-colors text-right"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">Next</p>
                <p className="font-semibold">{nextService.name}</p>
              </div>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
