<<<<<<< HEAD
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealOnScroll } from './RevealOnScroll';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax effect: Move background at 20% speed of scroll
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);

=======
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
>>>>>>> 8dbcbe6c1cbc0e16e5b3867431a61bec1bc548e6
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<<<<<<< HEAD
    <section ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <img
          src="/images/hero/hero-texture-slate.png"
          alt="Luxury Interior Texture"
          className="w-full h-full object-cover opacity-40 scale-110" // scale-110 to prevent whitespace at bottom when scrolling
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0D1117]/50 to-[#0D1117]"></div>
      </motion.div>

      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[128px] animate-pulse z-0" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] animate-pulse z-0" style={{ animationDuration: '5s' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <RevealOnScroll delay={0.2}>
          <span className="inline-block py-1 px-4 border border-white/10 rounded-full text-xs font-medium tracking-[0.3em] text-luxury-gold mb-8 uppercase bg-white/5 backdrop-blur-sm">
            SPECIALIZED ARCHITECTURE FOR INTERIOR & CONTRACTORS
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4} width="100%">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-8 text-white leading-tight">
            Ubah Studio Digital Anda <br />
            <span className="bg-gradient-to-r from-luxury-gold to-yellow-500 bg-clip-text text-transparent">Menjadi Magnet</span> Klien Elite
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.6}>
          <p className="text-white/80 text-xl mb-10 leading-relaxed max-w-2xl">
            Zenith membangun <span className="text-luxury-gold font-semibold">Ekosistem Digital</span> yang secara otomatis menolak penawar harga rendah dan hanya menyodorkan klien siap bayar ke meja Anda. 24/7.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.8}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#estimate"
              onClick={(e) => handleScroll(e, 'estimate')}
              className="shimmer-effect group relative px-10 py-4 bg-luxury-gold text-black font-medium tracking-widest overflow-hidden transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(197,160,89,0.6)] cursor-pointer clip-path-slant"
            >
              <span className="relative z-10 flex items-center gap-2">
                [AUDIT SISTEM SAYA] <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>

            <a
              href="#process"
              onClick={(e) => handleScroll(e, 'process')}
              className="px-10 py-4 border border-luxury-gold/50 text-slate-300 hover:text-white hover:border-luxury-gold hover:bg-luxury-gold/10 transition-all cursor-pointer tracking-widest backdrop-blur-sm"
            >
              PELAJARI STRATEGI
            </a>
          </div>
        </RevealOnScroll>
=======
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
>>>>>>> 8dbcbe6c1cbc0e16e5b3867431a61bec1bc548e6
      </div>
    </section>
  );
};

export default Hero;