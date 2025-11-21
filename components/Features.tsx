import React from 'react';
import { Gem, Armchair, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Armchair size={32} />,
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
  }
];

const Features: React.FC = () => {
  return (
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
      </div>
    </section>
  );
};

export default Features;