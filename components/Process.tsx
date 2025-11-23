<<<<<<< HEAD
import { Brain, Filter, Sparkles } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const features = [
  {
    icon: <Brain size={28} />,
    title: "24/7 AI Concierge",
    desc: "Chatbot cerdas yang melayani calon klien jam 2 pagi, menjawab pertanyaan teknis, dan menjadwalkan survei tanpa bantuan admin."
  },
  {
    icon: <Filter size={28} />,
    title: "High-Ticket Qualifier",
    desc: "Formulir psikologis yang otomatis memfilter 'Ghost Leads' (PHP) dan hanya meloloskan klien dengan budget serius."
  },
  {
    icon: <Sparkles size={28} />,
    title: "Narrative Branding",
    desc: "Copywriting yang memposisikan brand Anda sebagai otoritas, membuat klien malu untuk menawar harga rendah."
=======
import React from 'react';
import { ClipboardList, PencilRuler, Hammer, Key } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList size={24} />,
    title: "Consultation",
    desc: "We begin by understanding your vision, needs, and lifestyle."
  },
  {
    icon: <PencilRuler size={24} />,
    title: "Concept",
    desc: "Our designers craft bespoke concepts and 3D visualizations."
  },
  {
    icon: <Hammer size={24} />,
    title: "Creation",
    desc: "Expert craftsmen bring the design to life with precision."
  },
  {
    icon: <Key size={24} />,
    title: "Completion",
    desc: "The final reveal of your transformed sanctuary."
>>>>>>> 8dbcbe6c1cbc0e16e5b3867431a61bec1bc548e6
  }
];

const Process: React.FC = () => {
  return (
<<<<<<< HEAD
    <section id="process" className="py-32 px-6 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll width="100%">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 tracking-widest">FITUR SISTEM UNGGULAN</h2>
            <div className="w-24 h-[1px] bg-luxury-gold mx-auto"></div>
            <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg">
              Teknologi yang mengubah website Anda dari brosur digital menjadi mesin penjualan otomatis
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <RevealOnScroll key={index} delay={index * 0.15} width="100%">
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-neutral-900 to-neutral-800 border-2 border-luxury-gold/30 flex items-center justify-center mb-8 relative z-10 transition-all duration-500 group-hover:border-luxury-gold group-hover:scale-110 shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                  <div className="text-luxury-gold">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-serif text-white mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light tracking-wide max-w-sm text-left md:text-center">{feature.desc}</p>
              </div>
            </RevealOnScroll>
=======
    <section id="process" className="py-24 px-6 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-luxury-text mb-4">The Process</h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
               {/* Connector Line (Desktop) */}
               {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-[1px] bg-white/10 -z-10"></div>
              )}
              
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-luxury-gold text-luxury-gold flex items-center justify-center mb-6 relative z-10 transition-all duration-300 group-hover:bg-luxury-gold group-hover:text-black">
                {step.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-3">{step.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
>>>>>>> 8dbcbe6c1cbc0e16e5b3867431a61bec1bc548e6
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;