
import React from 'react';
import { Mail, Send, MessageCircle, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="animate-fade-in-up opacity-0">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">Get in Touch</h2>
          <h1 className="text-4xl md:text-6xl font-black mb-8">Ready to <span className="gradient-text">Scale?</span></h1>
          <p className="text-slate-400 text-xl mb-12 leading-relaxed">
            Our strategists are standing by to discuss your vision and provide a custom technical blueprint for your next project.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-center group cursor-pointer" onClick={() => window.open('mailto:webnexlanka@gmail.com')}>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500/20 transition-all">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">Direct Email</div>
                <div className="text-xl font-bold text-white">webnexlanka@gmail.com</div>
              </div>
            </div>
            
            <div className="flex gap-6 items-center group cursor-pointer" onClick={() => window.open('https://wa.me/94761842687')}>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500/20 transition-all">
                <MessageCircle size={24} />
              </div>
              <div>
                <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">WhatsApp Hotline</div>
                <div className="text-xl font-bold text-white">+94 76 184 2687</div>
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">Base of Operations</div>
                <div className="text-xl font-bold text-white">Colombo, Sri Lanka</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-[3rem] border-white/5 animate-scale-in opacity-0">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-400 text-sm font-bold mb-2 ml-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm font-bold mb-2 ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-slate-400 text-sm font-bold mb-2 ml-1">Project Category</label>
              <select className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all">
                <option>Custom Website</option>
                <option>AI Agent / Automation</option>
                <option>Mobile Application</option>
                <option>Partnership Inquiry</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-400 text-sm font-bold mb-2 ml-1">Brief Description</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                placeholder="Tell us what you're building..."
              ></textarea>
            </div>
            <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 group">
              Submit Inquiry
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
