"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-texture-slate.jpg"
          alt="Luxury Interior Texture"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0D1117]/50 to-[#0D1117]"></div>
      </div>

      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[128px] animate-pulse z-0" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] animate-pulse z-0" style={{ animationDuration: '5s' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <span className="inline-block py-1 px-4 border border-white/10 rounded-full text-xs font-medium tracking-[0.3em] text-luxury-gold mb-8 uppercase bg-white/5 backdrop-blur-sm">
            Redefining Luxury Living
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-8 text-luxury-text leading-tight animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
          Merancang Narasi Brand <br />
          <span className="text-neutral-500 italic font-light">yang Mengubah</span> Ruangan Menjadi Aset
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
          We curate interiors that breathe elegance and whisper sophistication.
          Where modern minimalism meets timeless grandeur.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
          <a
            href="#estimate"
            onClick={(e) => handleScroll(e, 'estimate')}
            className="group relative px-10 py-4 bg-luxury-gold text-black font-medium tracking-widest overflow-hidden transition-all hover:bg-luxury-goldHover cursor-pointer clip-path-slant"
          >
            <span className="relative z-10 flex items-center gap-2">
              GET ESTIMATE <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>

          <a
            href="#process"
            onClick={(e) => handleScroll(e, 'process')}
            className="px-10 py-4 border border-white/10 text-neutral-300 hover:text-white hover:border-luxury-gold/50 hover:bg-white/5 transition-all cursor-pointer tracking-widest backdrop-blur-sm"
          >
            VIEW PORTFOLIO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;