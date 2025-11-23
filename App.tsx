<<<<<<< HEAD
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Studio from './components/Studio';
import Chatbot from './components/Chatbot';
import PricingSlider from './components/PricingSlider';
import FeaturedProjects from './components/FeaturedProjects';
import LocationMap from './components/LocationMap';
import Testimonials from './components/Testimonials';
import WhatsAppButton from './components/WhatsAppButton';
import MeetTheArchitect from './components/MeetTheArchitect';
import ProcessAndMaintenance from './components/ProcessAndMaintenance';



export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInitialMessage, setChatInitialMessage] = useState<string>('');
=======
import React from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import Calculator from './components/Calculator';
import Process from './components/Process';
import Studio from './components/Studio';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
>>>>>>> 8dbcbe6c1cbc0e16e5b3867431a61bec1bc548e6

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Mencegah navigasi URL yang menyebabkan error "refused to connect"
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

<<<<<<< HEAD
  // Auto-open chatbot after 4 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setChatInitialMessage("Halo! Saya Sarah, asisten AI Zenith. Ada yang bisa saya bantu jelaskan soal strategi 'Anti-Perang Harga' untuk bisnis Anda?");
      setIsChatOpen(true);
      // Optional: Play sound here if we had a sound asset
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-luxury-bg text-luxury-text font-sans selection:bg-luxury-gold selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div
            className="text-2xl font-serif tracking-widest text-luxury-gold cursor-pointer hover:text-white transition-colors duration-500"
=======
  return (
    <div className="min-h-screen bg-luxury-bg text-luxury-text font-sans selection:bg-luxury-gold selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-luxury-bg/80 backdrop-blur-md border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div 
            className="text-2xl font-serif tracking-widest text-luxury-gold cursor-pointer"
>>>>>>> 8dbcbe6c1cbc0e16e5b3867431a61bec1bc548e6
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ZENITH
          </div>
<<<<<<< HEAD

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-[0.2em] text-neutral-400">
            {['PROCESS', 'STUDIO'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item.toLowerCase())}
                className="relative group overflow-hidden py-1"
              >
                <span className="relative z-10 group-hover:text-luxury-gold transition-colors duration-300">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#estimate"
              onClick={(e) => handleScroll(e, 'estimate')}
              className="px-8 py-3 border border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all duration-500 tracking-[0.2em]"
=======
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-light tracking-widest text-neutral-400">
            <a 
              href="#collections" 
              onClick={(e) => handleScroll(e, 'collections')}
              className="hover:text-luxury-gold transition-colors duration-300"
            >
              COLLECTIONS
            </a>
            <a 
              href="#process" 
              onClick={(e) => handleScroll(e, 'process')}
              className="hover:text-luxury-gold transition-colors duration-300"
            >
              PROCESS
            </a>
            <a 
              href="#studio" 
              onClick={(e) => handleScroll(e, 'studio')}
              className="hover:text-luxury-gold transition-colors duration-300"
            >
              STUDIO
            </a>
            <a 
              href="#estimate" 
              onClick={(e) => handleScroll(e, 'estimate')}
              className="px-6 py-2 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all duration-300"
>>>>>>> 8dbcbe6c1cbc0e16e5b3867431a61bec1bc548e6
            >
              INQUIRE
            </a>
          </div>

          {/* Mobile Menu Toggle */}
<<<<<<< HEAD
          <button
            className="md:hidden text-luxury-text hover:text-luxury-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
=======
          <button 
            className="md:hidden text-luxury-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
>>>>>>> 8dbcbe6c1cbc0e16e5b3867431a61bec1bc548e6
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
<<<<<<< HEAD
          <div className="md:hidden bg-luxury-bg/95 backdrop-blur-xl border-b border-luxury-border animate-fade-in absolute w-full">
            <div className="flex flex-col px-6 py-12 gap-8 text-center">
              {['PROCESS', 'STUDIO', 'ESTIMATE'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase() === 'estimate' ? 'estimate' : item.toLowerCase())}
                  className="text-xl font-serif tracking-widest text-neutral-300 hover:text-luxury-gold transition-colors animate-slide-up"
                  style={{ animationDelay: '100ms' }}
                >
                  {item === 'ESTIMATE' ? 'INQUIRE' : item}
                </a>
              ))}
=======
          <div className="md:hidden bg-neutral-900 border-b border-luxury-border">
            <div className="flex flex-col px-6 py-8 gap-6 text-center">
              <a 
                href="#collections" 
                onClick={(e) => handleScroll(e, 'collections')}
                className="text-neutral-300 hover:text-luxury-gold"
              >
                COLLECTIONS
              </a>
              <a 
                href="#process" 
                onClick={(e) => handleScroll(e, 'process')}
                className="text-neutral-300 hover:text-luxury-gold"
              >
                PROCESS
              </a>
              <a 
                href="#studio" 
                onClick={(e) => handleScroll(e, 'studio')}
                className="text-neutral-300 hover:text-luxury-gold"
              >
                STUDIO
              </a>
              <a 
                href="#estimate" 
                onClick={(e) => handleScroll(e, 'estimate')}
                className="text-neutral-300 hover:text-luxury-gold"
              >
                INQUIRE
              </a>
>>>>>>> 8dbcbe6c1cbc0e16e5b3867431a61bec1bc548e6
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        <Hero />
        <Features />
<<<<<<< HEAD
        <PricingSlider />
        <ProcessAndMaintenance />
        <div id="process">
          <Process />
        </div>
        <FeaturedProjects />
        <div id="studio">
          <Studio />
        </div>
        <div id="estimate">
          {/* HighTicketQualifier removed in favor of Auto-Chat */}
        </div>

        <Testimonials />
        <LocationMap />
      </main>

      <Chatbot
        isOpen={isChatOpen}
        setIsOpen={setIsChatOpen}
        initialMessage={chatInitialMessage}
      />
      <WhatsAppButton />

      <WhatsAppButton />

      <MeetTheArchitect />

      <footer className="py-20 text-center border-t border-white/5 mt-20 bg-neutral-950 relative overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 text-2xl font-serif text-luxury-gold tracking-widest">ZENITH NARRATIVE STUDIO</div>
          <div className="flex justify-center gap-8 mb-8 text-xs tracking-widest text-neutral-500">
            <a href="#" className="hover:text-luxury-gold transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">PINTEREST</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">LINKEDIN</a>
          </div>
          <p className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase">
            &copy; 2024 Crafted for Excellence. All Rights Reserved.
          </p>
        </div>
=======
        <Process />
        <Studio />
        <Calculator />
      </main>

      <footer className="py-12 text-center border-t border-luxury-border mt-20 bg-neutral-950">
        <div className="mb-4 text-xl font-serif text-luxury-gold">ZENITH INTERIORS</div>
        <p className="text-neutral-500 text-xs tracking-widest">
          &copy; 2024 CRAFTED FOR EXCELLENCE. ALL RIGHTS RESERVED.
        </p>
>>>>>>> 8dbcbe6c1cbc0e16e5b3867431a61bec1bc548e6
      </footer>
    </div>
  );
}