import React, { useState, useMemo } from 'react';
import { MessageSquare } from 'lucide-react';

type StyleOption = 'modern' | 'classic';

const Calculator: React.FC = () => {
  const [size, setSize] = useState<number>(45);
  const [style, setStyle] = useState<StyleOption>('modern');

  // Constants
  const PRICE_MODERN = 50;
  const PRICE_CLASSIC = 80;
  const FIXED_FEE = 500;

  const estimatedCost = useMemo(() => {
    const basePrice = style === 'modern' ? PRICE_MODERN : PRICE_CLASSIC;
    return (size * basePrice) + FIXED_FEE;
  }, [size, style]);

  const handleWhatsAppClick = () => {
    const styleLabel = style === 'modern' ? 'Modern Minimalist' : 'Classic Luxury';
    const message = `Hello, I want an estimate for ${styleLabel} design, size ${size}m2. Est price: $${estimatedCost}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-24 px-6" id="estimate">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-text mb-6">
              Estimate Your <br /> <span className="text-luxury-gold">Transformation</span>
            </h2>
            <p className="text-neutral-400 font-light mb-8 leading-relaxed">
              Transparency is the foundation of trust. Use our tailored estimator to get an immediate sense of investment for your sanctuary. 
            </p>
            
            <div className="space-y-4 text-sm text-neutral-500">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span>Fixed Consultation Fee: ${FIXED_FEE}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span>Modern Base Rate: ${PRICE_MODERN}/m²</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span>Classic Base Rate: ${PRICE_CLASSIC}/m²</span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator Card */}
          <div className="bg-neutral-900/50 border border-white/10 p-8 md:p-12 rounded-sm backdrop-blur-sm shadow-2xl">
            
            {/* Size Slider */}
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm uppercase tracking-widest text-neutral-400">Room Size</label>
                <span className="text-3xl font-serif text-luxury-text">{size} <span className="text-sm text-neutral-500 font-sans">m²</span></span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="1"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full appearance-none bg-neutral-800 h-1 rounded-full outline-none"
              />
              <div className="flex justify-between text-xs text-neutral-600 mt-2">
                <span>10m²</span>
                <span>100m²</span>
              </div>
            </div>

            {/* Style Selection */}
            <div className="mb-12">
              <label className="block text-sm uppercase tracking-widest text-neutral-400 mb-4">Design Aesthetic</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setStyle('modern')}
                  className={`px-4 py-4 border text-sm transition-all duration-300 ${
                    style === 'modern'
                      ? 'border-luxury-gold bg-luxury-gold/10 text-luxury-gold'
                      : 'border-white/10 text-neutral-500 hover:border-white/30'
                  }`}
                >
                  Modern Minimalist
                </button>
                <button
                  onClick={() => setStyle('classic')}
                  className={`px-4 py-4 border text-sm transition-all duration-300 ${
                    style === 'classic'
                      ? 'border-luxury-gold bg-luxury-gold/10 text-luxury-gold'
                      : 'border-white/10 text-neutral-500 hover:border-white/30'
                  }`}
                >
                  Classic Luxury
                </button>
              </div>
            </div>

            {/* Result and Action */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex justify-between items-center mb-8">
                <span className="text-neutral-400 text-sm">Estimated Investment</span>
                <span className="text-4xl font-serif text-luxury-gold">
                  ${estimatedCost.toLocaleString()}
                </span>
              </div>
              
              <button
                onClick={handleWhatsAppClick}
                className="w-full py-4 bg-luxury-text text-black font-medium hover:bg-white transition-colors flex items-center justify-center gap-3"
              >
                <MessageSquare size={20} />
                BOOK VIA WHATSAPP
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;