<<<<<<< HEAD
import { Armchair, Cpu, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUpVariants, viewportConfig } from '../lib/animations';
=======
import React from 'react';
import { Gem, Armchair, Sparkles } from 'lucide-react';
>>>>>>> 8dbcbe6c1cbc0e16e5b3867431a61bec1bc548e6

const features = [
  {
    icon: <Armchair size={32} />,
<<<<<<< HEAD
    title: "PSYCHOLOGY COPY",
    description: "Narasi persuasif yang mengubah pengunjung menjadi klien premium dengan copywriting berbasis psikologi.",
  },
  {
    icon: <Cpu size={32} />,
    title: "AI ARCHITECTURE",
    description: "Sistem AI concierge yang bekerja 24/7 untuk mengkualifikasi leads dan menjadwalkan survei otomatis.",
    isAI: true, // Flag for AI glow effect
  },
  {
    icon: <Palette size={32} />,
    title: "STRATEGIC BRANDING",
    description: "Identitas visual dan digital yang menonjolkan value proposition Anda di tengah kompetisi brutal.",
=======
    title: "Modern Design",
    description: "Clean lines and monochromatic palettes that define contemporary sophistication.",
  },
  {
    icon: <Gem size={32} />,
    title: "Timeless Classics",
    description: "Heritage-inspired aesthetics blended with modern functionality for enduring beauty.",
  },
  {
    icon: <Sparkles size={32} />,
    title: "Smart Living",
    description: "Seamless integration of technology and comfort for the connected sanctuary.",
>>>>>>> 8dbcbe6c1cbc0e16e5b3867431a61bec1bc548e6
  }
];

const Features: React.FC = () => {
  return (
<<<<<<< HEAD
    <section className="py-32 px-6 bg-neutral-950/50" id="collections">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-luxury-gold/50 transition-all duration-500 rounded-xl relative overflow-hidden ${feature.isAI ? 'ai-glow-ring' : ''
                }`}
              variants={fadeUpVariants}
            >
              <div className="absolute inset-0 bg-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="mb-8 relative h-24 w-24 mx-auto flex items-center justify-center rounded-full bg-luxury-gold/10 border border-luxury-gold/30 group-hover:bg-luxury-gold/20 transition-all duration-500">
                <div className="text-luxury-gold">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-2xl font-serif text-luxury-text mb-4 tracking-wide relative z-10">
                {feature.title}
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed tracking-wide relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
=======
    <section className="py-24 px-6 bg-neutral-950/50" id="collections">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-luxury-gold/30 transition-all duration-500"
            >
              <div className="mb-6 text-luxury-gold group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif text-luxury-text mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
>>>>>>> 8dbcbe6c1cbc0e16e5b3867431a61bec1bc548e6
      </div>
    </section>
  );
};

export default Features;