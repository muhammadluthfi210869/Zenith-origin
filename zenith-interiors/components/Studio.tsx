import React from 'react';

const Studio: React.FC = () => {
  return (
    <section id="studio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] border border-white/5 bg-white/[0.02] flex items-center justify-center overflow-hidden group animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          {/* Decorative background element */}
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-gold/10 to-transparent opacity-50 transition-opacity duration-700 group-hover:opacity-80"></div>

          <div className="absolute inset-8 border border-luxury-gold/20 transition-all duration-700 group-hover:inset-6 group-hover:border-luxury-gold/40"></div>
          <div className="flex flex-col items-center justify-center z-10">
            <div className="text-8xl font-serif text-luxury-gold opacity-20 transition-all duration-700 group-hover:opacity-40 group-hover:scale-110">Z</div>
            <div className="text-neutral-500 font-serif text-sm tracking-[0.4em] mt-6 border-t border-neutral-800 pt-4">EST. 2024</div>
          </div>
        </div>

        <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
          <span className="text-luxury-gold tracking-[0.3em] text-sm font-medium mb-4 block uppercase">The Studio</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">Crafting <br /><span className="text-neutral-500 italic">Timeless</span> Legacy</h2>
          <p className="text-neutral-400 leading-relaxed mb-8 text-lg font-light tracking-wide">
            At Zenith Interiors, we don't just design rooms; we curate experiences. Founded on the principles of uncompromising quality and artistic integrity, our studio is a collective of visionary architects and designers.
          </p>
          <p className="text-neutral-400 leading-relaxed font-light tracking-wide">
            Every project is approached as a unique narrative, woven together with textures, light, and spatial harmony to create environments that resonate with the soul of the inhabitant.
          </p>

          <div className="mt-10">
            <div className="flex gap-8">
              <div>
                <span className="block text-3xl font-serif text-white mb-1">50+</span>
                <span className="text-xs text-neutral-500 tracking-widest uppercase">Projects</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-white mb-1">12</span>
                <span className="text-xs text-neutral-500 tracking-widest uppercase">Awards</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-white mb-1">100%</span>
                <span className="text-xs text-neutral-500 tracking-widest uppercase">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;