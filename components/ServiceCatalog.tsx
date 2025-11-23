import { Layout, Bot, Cpu, Check, ArrowRight } from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Brand Architecture Blueprint",
        icon: <Layout size={40} />,
        image: "/images/features/feature-kitchen-overlay.png",
        description: "Fondasi digital yang kokoh untuk brand interior Anda. Kami merancang identitas visual dan struktur website yang mengkonversi pengunjung menjadi klien.",
        features: ["Premium UI/UX Design", "Mobile Responsive", "SEO Basic Setup", "WhatsApp Integration"],
        setupFee: "Rp 2.500.000",
        retainer: "Rp 300.000",
        highlight: false
    },
    {
        id: 2,
        title: "AI Concierge Implementation",
        icon: <Bot size={40} />,
        image: "/images/features/feature-multi-device.png",
        description: "Asisten virtual cerdas yang bekerja 24/7. Mengkualifikasi leads, menjawab pertanyaan teknis, dan menjadwalkan survei tanpa henti.",
        features: ["Custom Persona Chatbot", "Lead Qualification Logic", "Knowledge Base Integration", "Auto-Handover to Sales"],
        setupFee: "Rp 3.500.000",
        retainer: "Rp 500.000",
        highlight: true
    },
    {
        id: 3,
        title: "Full System Integration",
        icon: <Cpu size={40} />,
        image: "/images/features/feature-kitchen-overlay.png",
        description: "Solusi end-to-end untuk dominasi pasar. Gabungan desain premium, AI canggih, dan sistem manajemen leads otomatis.",
        features: ["All Brand Architecture Features", "Advanced AI Concierge", "CRM Integration", "Monthly Performance Report"],
        setupFee: "Rp 5.000.000",
        retainer: "Rp 750.000",
        highlight: false
    }
];

const ServiceCatalog: React.FC = () => {
    return (
        <section className="py-24 bg-[#0D1117] text-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-luxury-gold tracking-widest uppercase mb-3">Our Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-serif mb-6">Solusi Digital Premium</h3>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        Tingkatkan otoritas brand Anda dengan ekosistem digital yang dirancang khusus untuk industri interior & konstruksi.
                    </p>
                </div>

                <div className="flex flex-col gap-24">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-1/2 relative h-[400px] rounded-3xl overflow-hidden border border-white/10 group">
                                <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2">
                                <div className={`mb-6 p-3 rounded-2xl inline-block ${service.highlight ? 'bg-luxury-gold text-black' : 'bg-white/5 text-luxury-gold'}`}>
                                    {service.icon}
                                </div>

                                <h4 className="text-3xl font-serif mb-4">{service.title}</h4>
                                <p className="text-neutral-400 mb-8 leading-relaxed text-lg">
                                    {service.description}
                                </p>

                                <div className="space-y-4 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                                            <Check size={16} className="text-luxury-gold mt-0.5 shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-white/10">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-neutral-500 text-sm">Setup Fee</span>
                                        <span className="text-xl font-bold text-white">{service.setupFee}</span>
                                    </div>
                                    <div className="flex justify-between items-end mb-6">
                                        <span className="text-neutral-500 text-sm">Monthly Retainer</span>
                                        <span className="text-luxury-gold font-bold">{service.retainer}<span className="text-xs font-normal text-neutral-500">/bln</span></span>
                                    </div>

                                    <button className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${service.highlight
                                        ? 'bg-luxury-gold text-black hover:bg-white'
                                        : 'bg-white/10 text-white hover:bg-white hover:text-black'
                                        }`}>
                                        Pilih Paket <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCatalog;
