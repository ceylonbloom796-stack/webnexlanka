
import React from 'react';
import { Twitter, Instagram, Linkedin, Github, Mail } from 'lucide-react';
import { PageID } from '../App';

interface Props {
  navigateTo: (page: PageID) => void;
}

const Footer: React.FC<Props> = ({ navigateTo }) => {
  return (
    <footer className="relative pt-24 pb-12 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div 
              className="flex items-center gap-2 mb-6 cursor-pointer"
              onClick={() => navigateTo('home')}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl text-white">W</div>
              <span className="text-xl font-bold tracking-tight text-white">WebNexlanka</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              We are a boutique digital agency specialized in crafting high-impact 
              digital experiences through modern web technologies and AI automation.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-slate-500">
              <li><button onClick={() => navigateTo('services')} className="hover:text-blue-500 transition-colors text-left">Web Development</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-blue-500 transition-colors text-left">AI Agents</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-blue-500 transition-colors text-left">Mobile Apps</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-blue-500 transition-colors text-left">Cloud Solutions</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500">
              <li><button onClick={() => navigateTo('company')} className="hover:text-blue-500 transition-colors text-left">Our Story</button></li>
              <li><button onClick={() => navigateTo('work')} className="hover:text-blue-500 transition-colors text-left">Work</button></li>
              <li><button onClick={() => navigateTo('company')} className="hover:text-blue-500 transition-colors text-left">Careers</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-blue-500 transition-colors text-left">Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <p>© 2024 WebNexlanka. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="flex items-center gap-2 text-slate-400 cursor-pointer" onClick={() => navigateTo('contact')}>
            <Mail size={16} />
            webnexlanka@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
