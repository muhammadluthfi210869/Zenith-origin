import { Armchair, Cpu, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUpVariants, viewportConfig } from '../lib/animations';

const features = [
  {
    icon: <Armchair size={32} />,
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
  }
];

const Features: React.FC = () => {
  return (
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
      </div>
    </section>
  );
};

export default Features;