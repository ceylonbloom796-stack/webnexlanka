
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { getGeminiResponse } from '../services/gemini';
import { Message } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm Nex, your AI business consultant. How can WebNexlanka help you innovate today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await getGeminiResponse(input);
    const botMessage: Message = { role: 'model', text: responseText };
    
    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 animate-fade-in-up opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-purple-300">Nex AI Consulting</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Consult with our <br />
            <span className="gradient-text">AI Architect</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Wondering how AI agents can automate your workflows or which tech stack suits your next big idea? 
            Ask Nex—our intelligent assistant trained on our agency's processes and modern tech standards.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 glass">
              <div className="font-bold text-white mb-1">24/7 Strategy</div>
              <div className="text-sm text-slate-500">Always available for advice.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 glass">
              <div className="font-bold text-white mb-1">Project Scoping</div>
              <div className="text-sm text-slate-500">Fast technology matching.</div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full animate-scale-in opacity-0 stagger-2">
          <div className="glass rounded-[2.5rem] overflow-hidden border-white/10 shadow-2xl h-[550px] flex flex-col relative">
            {/* Chat Header */}
            <div className="p-6 border-b border-white/5 flex items-center gap-4 bg-white/5">
              <div className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <Bot size={24} />
              </div>
              <div>
                <div className="font-bold text-white">Nex AI</div>
                <div className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Active Strategy Agent
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      m.role === 'user' ? 'bg-blue-600 shadow-lg shadow-blue-500/20' : 'bg-slate-700'
                    }`}>
                      {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      m.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none shadow-xl' 
                      : 'bg-white/10 text-slate-200 rounded-tl-none border border-white/5'
                    }`}>
                      {m.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-4 rounded-2xl flex gap-2">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-6 border-t border-white/5 bg-slate-950/50">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about your website project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center text-white transition-all disabled:opacity-50 shadow-lg shadow-blue-500/20"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
