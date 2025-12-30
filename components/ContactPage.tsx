import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6">Reach out</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Send a message and we’ll follow up.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Sidebar */}
          <div className="space-y-6 lg:col-span-1">
            <div className="bg-custom-card border border-white/5 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-custom-orange/10 rounded-2xl flex items-center justify-center text-custom-orange mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-500 mb-2">Email</h3>
              <p className="text-lg font-bold text-white tracking-tight">hello@placeholder.com</p>
            </div>

            <div className="bg-custom-card border border-white/5 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-custom-orange/10 rounded-2xl flex items-center justify-center text-custom-orange mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-500 mb-2">Phone</h3>
              <p className="text-lg font-bold text-white tracking-tight">(XXX) XXX-XXXX</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-custom-card border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-custom-orange/5 blur-[100px] -z-10 rounded-full" />
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your Full Name"
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-custom-orange focus:ring-1 focus:ring-custom-orange outline-none transition-all placeholder:text-gray-700" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="email@example.com"
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-custom-orange focus:ring-1 focus:ring-custom-orange outline-none transition-all placeholder:text-gray-700" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Phone (Optional)</label>
                    <input 
                      type="tel" 
                      placeholder="(555) 000-0000"
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-custom-orange focus:ring-1 focus:ring-custom-orange outline-none transition-all placeholder:text-gray-700" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Organization (Optional)</label>
                    <input 
                      type="text" 
                      placeholder="Company or Agency Name"
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-custom-orange focus:ring-1 focus:ring-custom-orange outline-none transition-all placeholder:text-gray-700" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Message</label>
                  <textarea 
                    rows={6} 
                    required
                    placeholder="Tell us about your requirements or project site..."
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-custom-orange focus:ring-1 focus:ring-custom-orange outline-none transition-all placeholder:text-gray-700 resize-none" 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-custom-orange hover:bg-orange-700 text-white font-black rounded-2xl py-5 shadow-xl shadow-orange-900/40 transition-all active:scale-[0.98] flex items-center justify-center space-x-3 text-lg group"
                >
                  <span>Send</span>
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;