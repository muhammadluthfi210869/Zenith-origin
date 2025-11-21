import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/5 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block py-1 px-3 border border-white/10 rounded-full text-xs tracking-[0.2em] text-neutral-400 mb-8 uppercase">
          Redefining Luxury Living
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-8 text-luxury-text leading-tight">
          Transforming Spaces <br />
          <span className="text-neutral-500 italic">into</span> Sanctuaries
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          We curate interiors that breathe elegance and whisper sophistication. 
          Where modern minimalism meets timeless grandeur.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#estimate"
            onClick={(e) => handleScroll(e, 'estimate')}
            className="group relative px-8 py-4 bg-luxury-gold text-black font-medium tracking-wide overflow-hidden transition-all hover:bg-luxury-goldHover cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              GET ESTIMATE <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="#process" 
            onClick={(e) => handleScroll(e, 'process')}
            className="px-8 py-4 border border-white/10 text-neutral-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
          >
            VIEW PORTFOLIO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;