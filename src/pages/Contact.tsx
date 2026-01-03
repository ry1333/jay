import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';
import { FadeIn } from '../components/Motion';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const serviceOptions = [
  'Wildfire Risk Planning',
  'CWPP Development',
  'Wildfire Courses/Certification',
  'Prescribed Burn Planning',
  'Prescribed Burn Assistance',
  'Fire Breaks and Fuels Management',
  'Workshops and Seminars',
  'Other / Not Sure',
];

const faqs = [
  {
    question: 'How much does a consultation cost?',
    answer: 'Initial consultations are free. We\'ll discuss your needs and provide a customized quote based on the scope of your project.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We\'re based in Florida and serve clients throughout the Southeast United States. We also travel nationally for larger projects and training programs.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope. A property assessment might take a few days, while a Community Wildfire Protection Plan (CWPP) can take several months. We\'ll provide a timeline during your consultation.',
  },
  {
    question: 'Do you work with homeowners or just agencies?',
    answer: 'We work with everyone—from individual homeowners and HOAs to government agencies, utilities, and large land management organizations.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes. We are fully insured, NWCG certified, and hold Florida Certified Burn Manager credentials among other qualifications.',
  },
];

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your wildfire mitigation needs? Reach out and we'll respond within 1 business day.
            </p>
          </div>
        </FadeIn>

        {/* Contact Form - Full Width */}
        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto">
              <div className="card p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-64 h-64 bg-bws-orange/5 blur-[100px] -z-10 rounded-full"
                  aria-hidden="true"
                />

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-green-500 w-8 h-8" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                    <p className="text-gray-400 mb-8">
                      Thank you for reaching out. We'll get back to you within 1 business day.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-bws-orange font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === 'error' && (
                      <div className="flex items-center space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                        <p className="text-sm text-red-400">
                          Something went wrong. Please try again or email us directly.
                        </p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1"
                        >
                          Name <span className="text-bws-orange">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Your Full Name"
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-bws-orange focus:ring-1 focus:ring-bws-orange outline-none transition-all placeholder:text-gray-600"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1"
                        >
                          Email <span className="text-bws-orange">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="email@example.com"
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-bws-orange focus:ring-1 focus:ring-bws-orange outline-none transition-all placeholder:text-gray-600"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1"
                        >
                          Phone (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="(555) 000-0000"
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-bws-orange focus:ring-1 focus:ring-bws-orange outline-none transition-all placeholder:text-gray-600"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="organization"
                          className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1"
                        >
                          Organization (Optional)
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          placeholder="Company or Agency Name"
                          className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-bws-orange focus:ring-1 focus:ring-bws-orange outline-none transition-all placeholder:text-gray-600"
                        />
                      </div>
                    </div>

                    {/* Service Dropdown */}
                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1"
                      >
                        What do you need help with? <span className="text-bws-orange">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-bws-orange focus:ring-1 focus:ring-bws-orange outline-none transition-all text-white appearance-none cursor-pointer"
                        defaultValue=""
                      >
                        <option value="" disabled className="text-gray-600">
                          Select a service...
                        </option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service} className="bg-bws-dark text-white">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1"
                      >
                        Message <span className="text-bws-orange">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Tell us about your property, project, or questions..."
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-bws-orange focus:ring-1 focus:ring-bws-orange outline-none transition-all placeholder:text-gray-600 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-bws-red hover:bg-bws-red-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-black rounded-2xl py-5 shadow-xl shadow-red-900/40 transition-all active:scale-[0.98] flex items-center justify-center space-x-3 text-lg group"
                    >
                      <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                      <Send
                        size={20}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        aria-hidden="true"
                      />
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      Free consultation • No obligation • We respect your privacy
                    </p>
                  </form>
                )}
              </div>
          </div>
        </FadeIn>

      </section>

      {/* Map Section */}
      <section className="mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-bws-orange mb-4">
              Our Service Area
            </h2>
            <p className="text-2xl font-bold text-white">Based in Florida, Serving the Southeast & Beyond</p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/10 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582284.6695  !2d-82.5!3d27.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bailey Wildfire Solutions Service Area - Florida"
            />
          </div>
        </FadeIn>
      </section>

      {/* FAQ Section */}
      <section className="mt-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" aria-labelledby="faq-heading">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-xs font-black uppercase tracking-[0.3em] text-bws-orange mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-2xl font-bold text-white">Common Questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-bold text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-bws-orange flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
