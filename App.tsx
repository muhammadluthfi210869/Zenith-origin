import React from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import Calculator from './components/Calculator';
import Process from './components/Process';
import Studio from './components/Studio';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Mencegah navigasi URL yang menyebabkan error "refused to connect"
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-luxury-bg text-luxury-text font-sans selection:bg-luxury-gold selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-luxury-bg/80 backdrop-blur-md border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div 
            className="text-2xl font-serif tracking-widest text-luxury-gold cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ZENITH
          </div>
          
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
            >
              INQUIRE
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-luxury-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
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
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        <Hero />
        <Features />
        <Process />
        <Studio />
        <Calculator />
      </main>

      <footer className="py-12 text-center border-t border-luxury-border mt-20 bg-neutral-950">
        <div className="mb-4 text-xl font-serif text-luxury-gold">ZENITH INTERIORS</div>
        <p className="text-neutral-500 text-xs tracking-widest">
          &copy; 2024 CRAFTED FOR EXCELLENCE. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}