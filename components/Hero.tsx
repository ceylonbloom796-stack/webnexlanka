
import React from 'react';
import { ArrowRight, Code, Sparkles, Smartphone } from 'lucide-react';
import { PageID } from '../App';

interface Props {
  navigateTo: (page: PageID) => void;
}

const Hero: React.FC<Props> = ({ navigateTo }) => {
  return (
    <div className="relative pt-40 pb-20 px-6 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full animate-blob [animation-delay:2s]"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-8 animate-fade-in-up opacity-0">
          <Sparkles size={16} className="text-yellow-500 animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-slate-300">Transforming Businesses with AI</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight animate-fade-in-up opacity-0 stagger-1">
          Crafting Digital <br />
          <span className="gradient-text">Masterpieces</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-12 leading-relaxed animate-fade-in-up opacity-0 stagger-2">
          WebNexlanka is a premiere digital studio building cutting-edge web applications,
          autonomous AI agents, and stunning user experiences for world-class brands.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up opacity-0 stagger-3">
          <button 
            onClick={() => navigateTo('contact')}
            className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 group"
          >
            Book a Strategy Call
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => navigateTo('work')}
            className="w-full sm:w-auto px-10 py-5 glass hover:bg-white/5 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3"
          >
            View Our Work
          </button>
        </div>

        {/* Floating Icons Grid */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-scale-in opacity-0 stagger-4">
          <div 
            onClick={() => navigateTo('services')}
            className="p-8 rounded-3xl glass flex flex-col items-center gap-4 hover:border-blue-500/50 transition-all group cursor-pointer animate-float"
          >
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform shadow-inner">
              <Code size={32} />
            </div>
            <h3 className="font-bold">Next-Gen Web</h3>
          </div>
          <div 
            onClick={() => navigateTo('services')}
            className="p-8 rounded-3xl glass flex flex-col items-center gap-4 hover:border-purple-500/50 transition-all group cursor-pointer animate-float [animation-delay:0.5s]"
          >
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform shadow-inner">
              <Sparkles size={32} />
            </div>
            <h3 className="font-bold">AI Autonomy</h3>
          </div>
          <div 
            onClick={() => navigateTo('services')}
            className="p-8 rounded-3xl glass hidden md:flex flex-col items-center gap-4 hover:border-pink-500/50 transition-all group cursor-pointer animate-float [animation-delay:1s]"
          >
            <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform shadow-inner">
              <Smartphone size={32} />
            </div>
            <h3 className="font-bold">Mobile First</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
