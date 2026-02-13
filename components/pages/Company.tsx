
import React from 'react';

interface Props {
  navigateTo: (id: string) => void;
}

const Company: React.FC<Props> = ({ navigateTo }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
        <div className="animate-fade-in-up opacity-0">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">Our Story</h2>
          <h1 className="text-4xl md:text-6xl font-black mb-8">Driven by <span className="gradient-text">Impact</span></h1>
          <p className="text-slate-400 text-xl mb-10 leading-relaxed">
            Founded in Sri Lanka with a global mindset, WebNexlanka started as a collective of passionate engineers. 
            Today, we are a full-scale digital partner helping companies navigate the age of AI.
          </p>
          <div className="space-y-6">
            <div className="p-6 glass rounded-2xl border-white/5">
              <h4 className="font-bold text-white mb-2">Our Mission</h4>
              <p className="text-slate-500">To democratize enterprise-grade AI and web technology for businesses of all sizes.</p>
            </div>
            <div className="p-6 glass rounded-2xl border-white/5">
              <h4 className="font-bold text-white mb-2">Our Vision</h4>
              <p className="text-slate-500">To become the leading hub for AI-first digital engineering in South Asia.</p>
            </div>
          </div>
        </div>
        <div className="relative animate-scale-in opacity-0">
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full animate-pulse"></div>
          <div className="glass rounded-[3rem] p-12 relative z-10 aspect-square flex flex-col justify-center">
            <div className="text-center">
              <div className="text-7xl font-black text-white mb-4">5+</div>
              <div className="text-slate-400 font-bold uppercase tracking-widest">Years of Innovation</div>
            </div>
            <div className="mt-12 space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2 text-slate-400">
                <span>Team Members</span>
                <span className="text-white font-bold">24</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2 text-slate-400">
                <span>Projects Delivered</span>
                <span className="text-white font-bold">150+</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2 text-slate-400">
                <span>Countries Reached</span>
                <span className="text-white font-bold">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Careers / Partnership Section */}
      <div className="bg-slate-900/40 rounded-[3rem] p-12 lg:p-20 border border-white/5 animate-fade-in-up opacity-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tight">Growth Partnership Program</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">We are looking for high-energy partners to help expand our digital footprint globally.</p>
        </div>
        <div className="glass p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center group hover:border-emerald-500/30 transition-all">
          <div className="max-w-xl">
            <div className="text-sm font-bold text-emerald-500 mb-1 uppercase tracking-wider">Join as a Partner</div>
            <h3 className="text-3xl font-bold text-white mb-4">Lead Acquisition Specialist</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Drive our agency's expansion by identifying and closing leads for custom websites and AI agents. No technical knowledge required—just your network and sales skills.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-black text-emerald-400 uppercase tracking-widest">20% commission on every contract</span>
            </div>
          </div>
          <button 
            onClick={() => navigateTo('contact')}
            className="mt-8 md:mt-0 px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-emerald-500/20"
          >
            Apply to Partner
          </button>
        </div>
      </div>
    </div>
  );
};

export default Company;
