
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Stats from './components/Stats';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import DetailedServices from './components/pages/DetailedServices';
import Portfolio from './components/pages/Portfolio';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import AIConsultant from './components/AIConsultant';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

export type PageID = 'home' | 'services' | 'work' | 'company' | 'contact';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712]">
      <ParticleBackground />
      <Navbar isScrolled={isScrolled} navigateTo={navigateTo} />
      
      <main className="relative z-10">
        <section id="home">
          <Hero navigateTo={navigateTo} />
        </section>
        
        <section className="py-12">
          <Stats />
        </section>

        <section id="services" className="py-24 border-t border-white/5">
          <DetailedServices />
        </section>

        <section id="work" className="py-24 border-t border-white/5">
          <Portfolio />
        </section>

        <section id="ai-consultant" className="py-24 bg-blue-600/5">
          <AIConsultant />
        </section>

        <section id="about" className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <Company navigateTo={navigateTo} />
          </div>
        </section>

        <section id="process" className="py-24 bg-slate-900/20">
          <Process />
        </section>

        <section className="py-24 border-t border-white/5">
          <Testimonials />
        </section>

        <section className="py-24">
          <FAQ />
        </section>

        <section id="contact" className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-blue-900/10">
          <Contact />
        </section>
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
