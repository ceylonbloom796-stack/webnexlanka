
import React from 'react';
import { Globe, Cpu, Smartphone } from 'lucide-react';
import { PageID } from '../App';

interface Props {
  navigateTo: (page: PageID) => void;
}

const services = [
  {
    title: 'Custom Web Development',
    desc: 'High-performance React/Next.js applications optimized for speed and conversion.',
    icon: <Globe className="text-blue-500" />,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Autonomous AI Agents',
    desc: 'Deploy custom LLM-powered agents that handle customer support, sales, and operations.',
    icon: <Cpu className="text-purple-500" />,
    color: 'from-purple-500/20 to-indigo-500/20',
  },
  {
    title: 'Mobile App Engineering',
    desc: 'Cross-platform iOS and Android apps built with Flutter and React Native.',
    icon: <Smartphone className="text-pink-500" />,
    color: 'from-pink-500/20 to-rose-500/20',
  }
];

const Services: React.FC<Props> = ({ navigateTo }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 animate-fade-in-up opacity-0">
        <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">Our Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-black mb-6">Future-Proof Solutions</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          We combine technical excellence with creative innovation to deliver products that redefine markets.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div 
            key={idx}
            onClick={() => navigateTo('services')}
            className={`group relative p-8 rounded-[2rem] glass border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-scale-in opacity-0 stagger-${idx + 1}`}
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl`}>
              {React.cloneElement(service.icon as React.ReactElement<any>, { size: 32 })}
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{service.title}</h4>
            <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
              {service.desc}
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-blue-400 transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              Learn More <span>→</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center animate-fade-in-up opacity-0 stagger-3">
        <button 
          onClick={() => navigateTo('services')}
          className="text-white font-bold border-b-2 border-blue-500 pb-1 hover:text-blue-500 hover:border-blue-400 transition-all"
        >
          View all specialized services
        </button>
      </div>
    </div>
  );
};

export default Services;
