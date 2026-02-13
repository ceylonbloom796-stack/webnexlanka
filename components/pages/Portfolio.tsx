
import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "NexFlow Fintech",
    category: "Web / Finance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    color: "from-blue-600/20"
  },
  {
    title: "EcoSmart AI",
    category: "AI / Sustainability",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    color: "from-emerald-600/20"
  },
  {
    title: "LankaRide App",
    category: "Mobile / Logistics",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1000",
    color: "from-purple-600/20"
  },
  {
    title: "Nova Health SaaS",
    category: "Enterprise / Health",
    image: "https://images.unsplash.com/photo-1504868584819-f8e90526ef79?auto=format&fit=crop&q=80&w=1000",
    color: "from-pink-600/20"
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 animate-fade-in-up opacity-0">
        <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">Case Studies</h2>
        <h1 className="text-4xl md:text-6xl font-black mb-8">Selected <span className="gradient-text">Work</span></h1>
        <p className="text-slate-400 text-xl max-w-3xl mx-auto">
          Explore a curated selection of our most challenging and impactful digital transformations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className={`group relative rounded-[2.5rem] overflow-hidden glass border-white/5 aspect-[4/3] cursor-pointer animate-scale-in opacity-0 stagger-${(i % 4) + 1}`}>
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-60 group-hover:opacity-80 transition-opacity`}></div>
            <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-slate-950/80 to-transparent">
              <div className="text-sm font-bold text-blue-400 mb-2 tracking-widest uppercase transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 stagger-1">{project.category}</div>
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">{project.title}</h3>
                <div className="w-12 h-12 rounded-full bg-blue-600/20 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 group-hover:rotate-12 shadow-2xl">
                  <ExternalLink size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
