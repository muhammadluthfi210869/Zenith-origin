import Image from 'next/image';

const features = [
  {
    image: "/images/services/icon-building-structure.jpg",
    title: "PSYCHOLOGY COPY",
    description: "Narasi persuasif yang mengubah pengunjung menjadi klien premium dengan copywriting berbasis psikologi.",
  },
  {
    image: "/images/services/icon-ai-chip.jpg",
    title: "AI ARCHITECTURE",
    description: "Sistem AI concierge yang bekerja 24/7 untuk mengkualifikasi leads dan menjadwalkan survei otomatis.",
  },
  {
    image: "/images/services/icon-blueprint-scroll.jpg",
    title: "STRATEGIC BRANDING",
    description: "Identitas visual dan digital yang menonjolkan value proposition Anda di tengah kompetisi brutal.",
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-neutral-950/50" id="collections">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-luxury-gold/50 transition-all duration-500 animate-slide-up opacity-0 rounded-xl relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="mb-8 relative h-48 w-full overflow-hidden rounded-lg border border-white/10 group-hover:border-luxury-gold/30 transition-colors duration-500">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <h3 className="text-2xl font-serif text-luxury-text mb-4 tracking-wide relative z-10">
                {feature.title}
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed tracking-wide relative z-10">
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