
import React from 'react';
import { Globe, Cpu, Smartphone, Cloud } from 'lucide-react';

const detailedServices = [
  {
    icon: <Globe />,
    title: "Next-Gen Web Platforms",
    description: "We don't just build websites; we build high-performance engines for your business. Utilizing Next.js, React, and advanced SSR strategies, we ensure sub-second load times.",
    features: ["Custom CMS integration", "Performance Audit", "Progressive Web Apps (PWA)", "API First Architecture"],
    color: "text-blue-500"
  },
  {
    icon: <Cpu />,
    title: "Autonomous AI Solutions",
    description: "Leverage Gemini 3.0 and custom RAG systems to automate customer support, sales prospecting, and internal data analysis with human-like precision.",
    features: ["Custom GPT Models", "Workflow Automation", "LLM Fine-tuning", "Voice-to-Action Agents"],
    color: "text-purple-500"
  },
  {
    icon: <Smartphone />,
    title: "Enterprise Mobile Apps",
    description: "Stunning cross-platform experiences that feel native. We specialize in Flutter and React Native to deliver maximum reach with minimal maintenance.",
    features: ["Real-time Sync", "Biometric Security", "Offline Capabilities", "Smooth Animations"],
    color: "text-pink-500"
  },
  {
    icon: <Cloud />,
    title: "Cloud & DevOps",
    description: "Scaling your ideas from prototype to millions of users. We architect secure, resilient cloud environments on AWS, GCP, and Azure.",
    features: ["Serverless Scaling", "CI/CD Pipelines", "Docker & Kubernetes", "Infrastructure as Code"],
    color: "text-emerald-500"
  }
];

const DetailedServices: React.FC = () => {
  return (
    <div className="px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24 animate-fade-in-up opacity-0">
        <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">Capabilities</h2>
        <h1 className="text-4xl md:text-6xl font-black mb-8">What We <span className="gradient-text">Deliver</span></h1>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
          We bridge the gap between complex engineering and elegant design. 
          Discover our specialized solutions tailored for the digital frontier.
        </p>
      </div>

      <div className="grid gap-12">
        {detailedServices.map((service, i) => (
          <div key={i} className={`glass p-8 md:p-12 rounded-[3rem] border-white/5 flex flex-col lg:flex-row gap-12 hover:border-white/10 transition-all animate-fade-in-up opacity-0 stagger-${(i % 4) + 1}`}>
            <div className={`w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 ${service.color} shadow-inner shadow-white/5`}>
              {React.cloneElement(service.icon as React.ReactElement<any>, { size: 40 })}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-white">{service.title}</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedServices;
