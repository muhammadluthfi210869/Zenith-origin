import React from 'react';

const Studio: React.FC = () => {
  return (
    <section id="studio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[400px] border border-white/5 bg-white/[0.02] flex items-center justify-center overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-gold/5 to-transparent opacity-50"></div>
          
          <div className="absolute inset-4 border border-luxury-gold/20"></div>
          <div className="flex flex-col items-center justify-center z-10">
             <div className="text-6xl font-serif text-luxury-gold opacity-20">Z</div>
             <div className="text-neutral-500 font-serif text-sm tracking-[0.3em] mt-4">EST. 2024</div>
          </div>
        </div>
        
        <div>
          <span className="text-luxury-gold tracking-widest text-sm font-medium mb-2 block">THE STUDIO</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Crafting Legacy</h2>
          <p className="text-neutral-400 leading-relaxed mb-6 text-lg font-light">
            At Zenith Interiors, we don't just design rooms; we curate experiences. Founded on the principles of uncompromising quality and artistic integrity, our studio is a collective of visionary architects and designers.
          </p>
          <p className="text-neutral-400 leading-relaxed font-light">
            Every project is approached as a unique narrative, woven together with textures, light, and spatial harmony to create environments that resonate with the soul of the inhabitant.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Studio;