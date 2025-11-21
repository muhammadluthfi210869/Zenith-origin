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
  }
];

const Process: React.FC = () => {
  return (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;