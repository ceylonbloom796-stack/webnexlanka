
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Vision',
    desc: 'Deep dive into your business goals, target audience, and functional requirements.'
  },
  {
    number: '02',
    title: 'Strategic Architecture',
    desc: 'Designing the technical blueprint and user journey for maximum scalability.'
  },
  {
    number: '03',
    title: 'Agile Development',
    desc: 'Bi-weekly sprints with full transparency and iterative feedback loops.'
  },
  {
    number: '04',
    title: 'AI & Performance',
    desc: 'Integrating autonomous models and optimizing for lighting fast speeds.'
  }
];

const Process: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">The Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-8">How we build the <br /> future together.</h3>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Our systematic approach ensures that every pixel and every line of code serves a strategic purpose. We don't just build features; we build assets.
          </p>
          <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-slate-200 transition-all">
            See Detailed Playbook
          </button>
        </div>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="group relative p-8 rounded-3xl glass border-white/5 hover:border-blue-500/20 transition-all">
              <div className="flex gap-6">
                <span className="text-5xl font-black text-white/10 group-hover:text-blue-500/20 transition-colors">
                  {step.number}
                </span>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">{step.title}</h4>
                  <p className="text-slate-500">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
