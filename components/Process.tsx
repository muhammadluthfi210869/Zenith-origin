import { Brain, Filter, Sparkles } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const features = [
  {
    icon: <Brain size={28} />,
    title: "24/7 AI Concierge",
    desc: "Chatbot cerdas yang melayani calon klien jam 2 pagi, menjawab pertanyaan teknis, dan menjadwalkan survei tanpa bantuan admin."
  },
  {
    icon: <Filter size={28} />,
    title: "High-Ticket Qualifier",
    desc: "Formulir psikologis yang otomatis memfilter 'Ghost Leads' (PHP) dan hanya meloloskan klien dengan budget serius."
  },
  {
    icon: <Sparkles size={28} />,
    title: "Narrative Branding",
    desc: "Copywriting yang memposisikan brand Anda sebagai otoritas, membuat klien malu untuk menawar harga rendah."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 px-6 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll width="100%">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 tracking-widest">FITUR SISTEM UNGGULAN</h2>
            <div className="w-24 h-[1px] bg-luxury-gold mx-auto"></div>
            <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg">
              Teknologi yang mengubah website Anda dari brosur digital menjadi mesin penjualan otomatis
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <RevealOnScroll key={index} delay={index * 0.15} width="100%">
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-neutral-900 to-neutral-800 border-2 border-luxury-gold/30 flex items-center justify-center mb-8 relative z-10 transition-all duration-500 group-hover:border-luxury-gold group-hover:scale-110 shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                  <div className="text-luxury-gold">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-serif text-white mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light tracking-wide max-w-sm text-left md:text-center">{feature.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;