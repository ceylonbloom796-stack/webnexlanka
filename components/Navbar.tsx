
import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
];

interface Props {
  isScrolled: boolean;
  navigateTo: (id: string) => void;
}

const Navbar: React.FC<Props> = ({ isScrolled, navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (id: string) => {
    navigateTo(id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-2xl transition-all duration-500 px-6 py-4 flex items-center justify-between ${
          isScrolled ? 'shadow-2xl shadow-blue-500/10 bg-slate-950/80' : ''
        }`}>
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => handleNav('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center font-bold text-xl text-white">
              W
            </div>
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
              WebNex<span className="text-blue-500">lanka</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.id)}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => handleNav('contact')}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-all flex items-center gap-2 group shadow-lg shadow-blue-500/20"
            >
              Contact Us
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-slate-950 transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.id)}
              className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNav('contact')}
            className="mt-4 px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold text-xl"
          >
            Start Project
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
