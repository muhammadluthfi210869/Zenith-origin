import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, Cpu, CheckCircle, ShieldCheck, Lock,
    Layout, Smartphone, Zap, MapPin, Search, Heart,
    Filter, Calculator, PenTool, Package, Map, Award,
    BarChart, Crown
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

// 15-Feature Pricing Path
const featuresPath = [
    // BASE TIER (Rp 1.950.000)
    { id: 1, name: "Premium UI/UX Design", price: 0, step: 0, icon: Layout },
    { id: 2, name: "Mobile Responsive", price: 0, step: 1, icon: Smartphone },
    { id: 3, name: "One-Tap Conversion System", price: 0, step: 2, icon: Zap },

    // MID TIER
    { id: 4, name: "Google Maps Embed", price: 150000, step: 3, icon: MapPin },
    { id: 5, name: "Search Visibility Architecture", price: 250000, step: 4, icon: Search },
    { id: 6, name: "The 24/7 Digital Salesman", price: 700000, step: 5, icon: Cpu, highlight: true }, // AI unlock
    { id: 7, name: "Humanized Logic", price: 200000, step: 6, icon: Heart },
    { id: 8, name: "Lead Qualifier System", price: 300000, step: 7, icon: Filter },

    // TOP TIER
    { id: 9, name: "Instant Scope Calculator", price: 350000, step: 8, icon: Calculator },
    { id: 10, name: "Psychology Copywriting", price: 550000, step: 9, icon: PenTool },
    { id: 11, name: "Digital Product Catalog", price: 400000, step: 10, icon: Package },
    { id: 12, name: "Interactive Service Map", price: 250000, step: 11, icon: Map },
    { id: 13, name: "Social Proof & Authority Engine", price: 250000, step: 12, icon: Award },
    { id: 14, name: "Monthly Data Report", price: 200000, step: 13, icon: BarChart },
    { id: 15, name: "VIP Priority Support", price: 400000, step: 14, icon: Crown }
];

const BASE_PRICE = 1950000;
const MIN_MONTHLY = 399000;
const MAX_MONTHLY = 999000;

const PricingSlider: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(2); // Start at step 2 (3 features unlocked)
    const [isDragging, setIsDragging] = useState(false);
    const [showAIPulse, setShowAIPulse] = useState(false);

    // Calculate prices based on unlocked features
    const calculatePrices = (step: number) => {
        let setupFee = BASE_PRICE;

        featuresPath.forEach((feature) => {
            if (step >= feature.step) {
                setupFee += feature.price;
            }
        });

        // Monthly fee scales with step
        const monthlyFee = Math.round(
            MIN_MONTHLY + (step / 14) * (MAX_MONTHLY - MIN_MONTHLY) / 1000
        ) * 1000;

        return { setupFee, monthlyFee };
    };

    // Get phase based on step
    const getPhase = (step: number) => {
        if (step <= 4) return {
            name: "STARTER PHASE",
            subtext: "Digital Presence Foundation",
            color: "from-blue-500 to-cyan-500",
            icon: Layout
        };
        if (step <= 9) return {
            name: "GROWTH PHASE",
            subtext: "AI Concierge Active & Lead Filtering",
            color: "from-purple-500 to-pink-500",
            icon: Cpu
        };
        return {
            name: "EMPIRE PHASE",
            subtext: "Full System Integration & Priority Support",
            color: "from-luxury-gold to-yellow-500",
            icon: Crown
        };
    };

    // Format price
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const { setupFee, monthlyFee } = calculatePrices(currentStep);
    const currentPhase = getPhase(currentStep);
    const unlockedFeatures = featuresPath.filter(f => currentStep >= f.step);
    const isAIUnlocked = currentStep >= 5;

    // Handle step change
    const handleStepChange = (newStep: number) => {
        const oldStep = currentStep;
        setCurrentStep(newStep);

        // Trigger AI pulse animation when crossing step 5
        if (oldStep < 5 && newStep >= 5) {
            setShowAIPulse(true);
            setTimeout(() => setShowAIPulse(false), 2000);
        }
    };

    return (
        <section className="py-12 md:py-24 px-4 md:px-6 bg-[#0D1117] relative overflow-hidden" id="pricing">
            {/* Background Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[128px] animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px] animate-pulse" style={{ animationDuration: '5s' }} />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <RevealOnScroll width="100%">
                    <div className="text-center mb-8 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/30 rounded-full mb-6">
                            <Sparkles size={16} className="text-luxury-gold" />
                            <span className="text-xs font-bold text-luxury-gold tracking-widest uppercase">Build Your System</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6 text-white">
                            Digital Configurator
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg px-4">
                            Geser untuk membuka fitur. Setiap langkah menambah nilai sistem Anda.
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Two-Column Layout */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* LEFT: Visual Icon - Hidden on mobile */}
                    <RevealOnScroll delay={0.2} width="100%">
                        <div className="hidden md:flex items-center justify-center">
                            <motion.div
                                animate={{
                                    scale: isAIUnlocked ? [1, 1.1, 1] : 1,
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: showAIPulse ? 3 : 0,
                                }}
                                className={`relative p-12 rounded-full bg-gradient-to-br ${currentPhase.color} bg-opacity-10`}
                            >
                                <currentPhase.icon
                                    size={120}
                                    className={`${isAIUnlocked ? 'text-teal-400' : 'text-luxury-gold'} transition-colors duration-500`}
                                    strokeWidth={1.5}
                                />
                                {isAIUnlocked && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="absolute -top-2 -right-2 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                                    >
                                        AI ACTIVE
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>
                    </RevealOnScroll>

                    {/* RIGHT: Data & Action */}
                    <RevealOnScroll delay={0.3} width="100%">
                        <div className="space-y-6 md:space-y-8">
                            {/* Price Display */}
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden">
                                {/* Phase Badge */}
                                <div className={`absolute top-3 right-3 md:top-4 md:right-4 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r ${currentPhase.color} text-white text-[10px] md:text-xs font-bold text-center`}>
                                    <div className="leading-tight">{currentPhase.name}</div>
                                    <div className="text-[8px] md:text-[10px] font-normal opacity-90 hidden md:block">{currentPhase.subtext}</div>
                                </div>

                                <div className="mb-6">
                                    <p className="text-slate-300 text-xs md:text-sm mb-2 font-medium">Investasi Awal (Setup)</p>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={setupFee}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{
                                                y: 0,
                                                opacity: 1,
                                                scale: isDragging ? 1.05 : 1
                                            }}
                                            exit={{ y: -20, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={`text-3xl md:text-5xl font-bold font-serif ${isDragging ? 'text-luxury-gold drop-shadow-[0_0_20px_rgba(197,160,89,0.6)]' : 'text-luxury-gold'
                                                }`}
                                            style={{ fontFamily: 'Playfair Display, serif' }}
                                        >
                                            {formatPrice(setupFee)}
                                        </motion.div>
                                    </AnimatePresence>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={monthlyFee}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="flex items-start gap-2 text-sm md:text-lg text-white mt-3"
                                        >
                                            <ShieldCheck size={18} className="text-luxury-gold flex-shrink-0 mt-0.5" />
                                            <span className="leading-tight">
                                                <span className="font-bold text-luxury-gold">{formatPrice(monthlyFee)}</span> / bulan — System Guarantee & AI Updates
                                            </span>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="flex items-start gap-2 text-xs md:text-sm text-slate-400 bg-white/5 p-2.5 md:p-3 rounded-lg">
                                    <Sparkles size={14} className="text-luxury-gold mt-0.5 flex-shrink-0 md:w-4 md:h-4" />
                                    <span className="leading-tight">{unlockedFeatures.length} dari {featuresPath.length} fitur aktif</span>
                                </div>
                            </div>

                            {/* Slider */}
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8">
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <label className="text-white font-medium text-sm md:text-base">Pilih Konfigurasi</label>
                                        <span className="text-luxury-gold font-bold text-sm md:text-base">Step {currentStep + 1}/15</span>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="range"
                                            min="0"
                                            max="14"
                                            step="1"
                                            value={currentStep}
                                            onChange={(e) => handleStepChange(Number(e.target.value))}
                                            onMouseDown={() => setIsDragging(true)}
                                            onMouseUp={() => setIsDragging(false)}
                                            onTouchStart={() => setIsDragging(true)}
                                            onTouchEnd={() => setIsDragging(false)}
                                            className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer slider-thumb"
                                            style={{
                                                background: `linear-gradient(to right, ${isAIUnlocked ? '#14B8A6' : '#D4AF37'} 0%, ${isAIUnlocked ? '#14B8A6' : '#D4AF37'} ${(currentStep / 14) * 100}%, rgba(255,255,255,0.1) ${(currentStep / 14) * 100}%, rgba(255,255,255,0.1) 100%)`
                                            }}
                                        />
                                        {/* Tooltip */}
                                        {isDragging && featuresPath[currentStep] && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute -top-14 md:-top-12 left-1/2 -translate-x-1/2 bg-neutral-900 text-white px-3 py-2 rounded-lg text-xs md:text-sm whitespace-nowrap border border-luxury-gold/30 max-w-[200px] md:max-w-none text-center"
                                            >
                                                {featuresPath[currentStep].name}
                                            </motion.div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-between text-[10px] md:text-xs text-slate-400">
                                    <span>Starter</span>
                                    <span>Growth</span>
                                    <span>Empire</span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                animate={{
                                    scale: showAIPulse ? [1, 1.05, 1] : 1,
                                    boxShadow: showAIPulse
                                        ? ['0 0 0 0 rgba(20, 184, 166, 0)', '0 0 0 20px rgba(20, 184, 166, 0)']
                                        : '0 0 0 0 rgba(20, 184, 166, 0)'
                                }}
                                transition={{ duration: 0.6, repeat: showAIPulse ? 3 : 0 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-4 md:py-5 ${isAIUnlocked ? 'bg-teal-500' : 'bg-luxury-gold'} text-black font-bold text-base md:text-lg rounded-xl hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95`}
                            >
                                <span className="hidden md:inline">Dapatkan Sistem Ini Sekarang</span>
                                <span className="md:hidden">Dapatkan Sekarang</span>
                                <Sparkles size={18} className="md:w-5 md:h-5" />
                            </motion.button>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Feature Checklist */}
                <RevealOnScroll delay={0.4} width="100%">
                    <div className="mt-12 md:mt-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-serif text-white mb-4 md:mb-6 flex items-center gap-2">
                            <CheckCircle className="text-luxury-gold w-5 h-5 md:w-6 md:h-6" />
                            Fitur Yang Anda Dapatkan
                        </h3>

                        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                            {featuresPath.map((feature, idx) => {
                                const isUnlocked = currentStep >= feature.step;
                                const FeatureIcon = feature.icon;

                                return (
                                    <motion.div
                                        key={feature.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{
                                            opacity: isUnlocked ? 1 : 0.4,
                                            x: 0,
                                        }}
                                        transition={{ delay: idx * 0.05 }}
                                        className={`flex items-center gap-2.5 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl border transition-all ${isUnlocked
                                            ? feature.highlight && isAIUnlocked
                                                ? 'bg-teal-500/10 border-teal-500/30'
                                                : 'bg-luxury-gold/10 border-luxury-gold/30'
                                            : 'bg-white/5 border-white/10'
                                            }`}
                                    >
                                        <div className={`flex-shrink-0 ${isUnlocked ? feature.highlight && isAIUnlocked ? 'text-teal-400' : 'text-luxury-gold' : 'text-neutral-600'}`}>
                                            {isUnlocked ? (
                                                <FeatureIcon size={18} className="md:w-5 md:h-5" />
                                            ) : (
                                                <Lock size={18} className="md:w-5 md:h-5" />
                                            )}
                                        </div>
                                        <p className={`flex-1 text-sm md:text-base leading-tight ${isUnlocked ? 'text-white font-bold' : 'text-neutral-500'}`}>
                                            {feature.name}
                                        </p>
                                        {!isUnlocked && (
                                            <span className="text-[10px] md:text-xs text-neutral-600 bg-white/5 px-1.5 md:px-2 py-0.5 md:py-1 rounded flex-shrink-0">
                                                Step {feature.step + 1}
                                            </span>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </RevealOnScroll>
            </div>

            <style>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #D4AF37, #F4E5C3);
          cursor: pointer;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.8);
          transition: all 0.3s ease;
          border: 3px solid #0D1117;
        }

        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(212, 175, 55, 1);
        }

        .slider-thumb::-moz-range-thumb {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #D4AF37, #F4E5C3);
          cursor: pointer;
          border: 3px solid #0D1117;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.8);
          transition: all 0.3s ease;
        }

        .slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(212, 175, 55, 1);
        }

        @media (max-width: 768px) {
          .slider-thumb::-webkit-slider-thumb {
            width: 36px;
            height: 36px;
          }
          
          .slider-thumb::-moz-range-thumb {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
        </section>
    );
};

export default PricingSlider;
