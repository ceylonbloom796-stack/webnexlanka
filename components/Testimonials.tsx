
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dilshan Perera",
    role: "CEO, FinTech Lanka",
    text: "WebNexlanka transformed our manual processing into a fully automated AI-driven workflow. The speed and quality of their delivery are unmatched in the region.",
    avatar: "DP"
  },
  {
    name: "Sarah Jenkins",
    role: "Marketing Director, GlobalReach",
    text: "The website they built isn't just beautiful—it's a lead-generating machine. Our conversion rate increased by 40% within the first month of launch.",
    avatar: "SJ"
  },
  {
    name: "Tharindu Silva",
    role: "Founder, GreenAgro",
    text: "Building an AI agent with Nex was the best decision we made this year. It handles 80% of our customer queries instantly, allowing our team to focus on growth.",
    avatar: "TS"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 animate-fade-in-up opacity-0">
        <h2 className="text-pink-500 font-bold tracking-widest uppercase mb-4">Client Feedback</h2>
        <h3 className="text-4xl md:text-5xl font-black mb-6">Trusted by Innovators</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div 
            key={idx}
            className={`glass p-8 rounded-[2.5rem] relative border-white/5 animate-scale-in opacity-0 stagger-${idx + 1}`}
          >
            <Quote className="absolute top-8 right-8 text-white/5" size={48} />
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <p className="text-slate-300 mb-8 leading-relaxed italic">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white">
                {t.avatar}
              </div>
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
