
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does a typical website project take?",
    answer: "Most custom website projects take between 4 to 8 weeks depending on complexity. We follow an agile process with bi-weekly updates so you're always in the loop."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, we provide comprehensive maintenance packages that include security updates, performance optimization, and minor content updates to keep your site running at peak performance."
  },
  {
    question: "Can you integrate AI into my existing platform?",
    answer: "Absolutely. We specialize in retrofitting existing systems with custom AI models, RAG systems, and autonomous agents to automate workflows and enhance user experience."
  },
  {
    question: "What industries do you specialize in?",
    answer: "While we are industry-agnostic, we have extensive experience in FinTech, E-commerce, Healthcare, and Logistics, helping them navigate complex digital challenges."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16 animate-fade-in-up opacity-0">
        <h2 className="text-emerald-500 font-bold tracking-widest uppercase mb-4">Questions</h2>
        <h3 className="text-4xl md:text-5xl font-black mb-6">Common Inquiries</h3>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div 
            key={idx}
            className="glass rounded-2xl border-white/5 overflow-hidden animate-fade-in-up opacity-0"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all"
            >
              <span className="font-bold text-white text-lg">{faq.question}</span>
              {openIndex === idx ? <Minus className="text-blue-500" /> : <Plus className="text-slate-500" />}
            </button>
            <div 
              className={`px-8 transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'max-h-40 py-6 border-t border-white/5' : 'max-h-0'
              } overflow-hidden`}
            >
              <p className="text-slate-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
