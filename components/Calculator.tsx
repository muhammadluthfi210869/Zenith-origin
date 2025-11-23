<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, RefreshCw, ChevronRight } from 'lucide-react';

type ServiceType = 'kitchen' | 'renovation' | 'design';

interface CalculationResult {
  min: number;
  max: number;
  unit: string;
}

interface CalculatorProps {
  onOpenChat?: () => void;
}

const Calculator: React.FC<CalculatorProps> = ({ onOpenChat }) => {
  const [serviceType, setServiceType] = useState<ServiceType>('kitchen');
  const [size, setSize] = useState<number>(10);
  const [material, setMaterial] = useState<string>('premium');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Pricing Logic
  const calculatePrice = () => {
    setIsAnimating(true);
    let min = 0;
    let max = 0;
    let unit = '';

    if (serviceType === 'kitchen') {
      unit = 'Total';
      // Size is in linear meters
      if (material === 'basic') {
        min = size * 2000000;
        max = size * 2500000;
      } else if (material === 'premium') {
        min = size * 2800000;
        max = size * 3500000;
      } else { // luxury
        min = size * 4000000;
        max = size * 5000000; // Estimate upper bound
      }
    } else if (serviceType === 'renovation') {
      unit = 'Total';
      // Size is in m2
      if (material === 'minor') {
        min = size * 3000000;
        max = size * 4500000;
      } else { // total
        min = size * 5000000;
        max = size * 7500000;
      }
    } else if (serviceType === 'design') {
      unit = 'Total';
      // Size is in m2
      min = size * 150000;
      max = size * 350000;
    }

    setTimeout(() => {
      setResult({ min, max, unit });
      setIsAnimating(false);
    }, 600);
  };

  useEffect(() => {
    calculatePrice();
  }, [serviceType, size, material]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-luxury-gold mb-4">Estimasi Investasi Anda</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Gunakan kalkulator pintar kami untuk mendapatkan gambaran awal biaya proyek interior Anda.
            Transparan, akurat, dan tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Controls */}
            <div className="space-y-8">
              {/* Service Type */}
              <div className="space-y-3">
                <label className="text-sm text-luxury-gold uppercase tracking-wider font-semibold">Jenis Layanan</label>
                <div className="grid grid-cols-3 gap-2 p-1 bg-[#0D1117]/20 rounded-xl">
                  {(['kitchen', 'renovation', 'design'] as ServiceType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setServiceType(type)}
                      className={`py-2 px-4 rounded-lg text-sm transition-all duration-300 ${serviceType === type
                        ? 'bg-luxury-gold text-black shadow-lg font-medium'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {type === 'kitchen' ? 'Kitchen' : type === 'renovation' ? 'Renovasi' : 'Desain'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Input */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <label className="text-luxury-gold uppercase tracking-wider font-semibold">
                    {serviceType === 'kitchen' ? 'Panjang (Meter Lari)' : 'Luas Area (m²)'}
                  </label>
                  <span className="text-white font-mono bg-white/10 px-2 py-1 rounded">{size} {serviceType === 'kitchen' ? 'm\'' : 'm²'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={size}
                  onChange={(e) => setSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
                />
              </div>

              {/* Material/Type Selector */}
              {serviceType !== 'design' && (
                <div className="space-y-3">
                  <label className="text-sm text-luxury-gold uppercase tracking-wider font-semibold">
                    {serviceType === 'kitchen' ? 'Material Finishing' : 'Tipe Renovasi'}
                  </label>
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full bg-[#0D1117]/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors"
                  >
                    {serviceType === 'kitchen' ? (
                      <>
                        <option value="basic">Basic (HPL Standard)</option>
                        <option value="premium">Premium (HPL Taco + Edging)</option>
                        <option value="luxury">Luxury (Duco/Lacquer)</option>
                      </>
                    ) : (
                      <>
                        <option value="minor">Minor Renovation</option>
                        <option value="total">Total Renovation / Build</option>
                      </>
                    )}
                  </select>
                </div>
              )}
            </div>

            {/* Result Display */}
            <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-white/5 flex flex-col justify-center items-center text-center group overflow-hidden">
              <div className="absolute inset-0 bg-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="mb-4 p-4 bg-white/5 rounded-full">
                <CalcIcon size={32} className="text-luxury-gold" />
              </div>

              <h3 className="text-neutral-400 text-sm uppercase tracking-widest mb-2">Estimasi Kisaran Harga</h3>

              {result && (
                <div className={`space-y-2 transition-all duration-500 ${isAnimating ? 'opacity-50 blur-sm scale-95' : 'opacity-100 blur-0 scale-100'}`}>
                  <div className="text-3xl md:text-4xl font-serif text-white">
                    {formatCurrency(result.min)}
                  </div>
                  <div className="text-neutral-500 text-sm font-medium">- s/d -</div>
                  <div className="text-3xl md:text-4xl font-serif text-luxury-gold">
                    {formatCurrency(result.max)}
                  </div>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-white/10 w-full">
                <p className="text-xs text-neutral-500 mb-4">
                  *Harga ini adalah estimasi awal. Konsultasikan detailnya dengan tim kami.
                </p>
                <button
                  onClick={onOpenChat}
                  className="w-full py-3 bg-white text-black rounded-xl font-semibold hover:bg-luxury-gold transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  Konsultasi Sekarang <ChevronRight size={16} />
                </button>
              </div>
            </div>
=======
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

>>>>>>> 8dbcbe6c1cbc0e16e5b3867431a61bec1bc548e6
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;