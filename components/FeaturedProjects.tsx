import { PenTool, Cpu } from 'lucide-react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealOnScroll } from './RevealOnScroll';

const FeaturedProjects: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax for the project image
    const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    // Single Hero Project Data
    const heroProject = {
        id: 1,
        title: "ANTI-PRICE WAR SYSTEM",
        category: "Kitchen Set Specialist",
        main_image: "/images/features/feature-kitchen-overlay.png",
        description: "Strategi Brand Architecture yang mengubah website kitchen set menjadi mesin penjualan otomatis dengan AI dan Psychology Copywriting.",
        features: [
            {
                type: "psychology",
                label: "THE NARRATIVE",
                visual_asset: "/images/projects/seni_tidak_untuk_ditawar.png",
                title: "Authority Anchoring",
                desc: "Menggunakan manifesto 'Seni Tidak Untuk Ditawar' untuk mematikan negosiasi harga sejak detik pertama."
            },
            {
                type: "ai",
                label: "THE ENGINE",
                visual_asset: "/images/projects/iphone15.png",
                title: "Auto-Qualification",
                desc: "Sistem otomatis memfilter 'Cek Harga Gan' dan memberikan notifikasi instan hanya untuk lead berkualitas tinggi."
            }
        ]
    };

    return (
        <section ref={containerRef} className="py-24 bg-[#0D1117] text-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <RevealOnScroll width="100%">
                        <h2 className="text-sm font-bold text-luxury-gold tracking-widest uppercase mb-3">Case Study</h2>
                        <h3 className="text-4xl md:text-5xl font-serif mb-6">Featured Project</h3>
                        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                            Bagaimana kami menggunakan AI dan Psychology Copywriting untuk mengubah website menjadi mesin penjualan otomatis.
                        </p>
                    </RevealOnScroll>
                </div>

                {/* Single Hero Project Card */}
                <div className="max-w-7xl mx-auto">
                    <RevealOnScroll width="100%">
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:border-luxury-gold/30 transition-all duration-500">

                            {/* 2-Column Grid Layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                                {/* LEFT COLUMN - Main Project */}
                                <div className="flex flex-col">
                                    {/* Main Project Image */}
                                    <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden mb-6 group">
                                        <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                                        <motion.img
                                            src={heroProject.main_image}
                                            alt={heroProject.title}
                                            className="w-full h-[120%] object-cover -mt-[10%]" // Increased height for parallax space
                                            style={{ y: imageY }}
                                        />
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 z-20">
                                            <span className="text-xs text-luxury-gold font-medium tracking-wider">{heroProject.category}</span>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div>
                                        <h4 className="text-2xl md:text-3xl font-serif text-luxury-gold mb-3 tracking-wide">
                                            {heroProject.title}
                                        </h4>
                                        <p className="text-slate-300 leading-relaxed text-base">
                                            {heroProject.description}
                                        </p>
                                    </div>

                                    {/* Status Badge */}
                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <div className="flex items-center gap-2 text-sm text-neutral-400">
                                            <div className="w-2 h-2 bg-luxury-gold rounded-full animate-pulse"></div>
                                            <span>Sistem aktif dan menghasilkan leads berkualitas</span>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT COLUMN - The Anatomy */}
                                <div className="flex flex-col gap-6">
                                    <div className="mb-2">
                                        <h5 className="text-sm font-bold text-neutral-400 tracking-widest uppercase">The Anatomy</h5>
                                    </div>

                                    {/* Feature Cards - Stacked */}
                                    {heroProject.features.map((feature, idx) => (
                                        <RevealOnScroll key={idx} delay={idx * 0.15} width="100%">
                                            <div
                                                className={`rounded-xl border p-5 transition-all duration-300 ${feature.type === "psychology"
                                                        ? "bg-gradient-to-br from-luxury-gold/10 to-luxury-gold/5 border-luxury-gold/30 hover:border-luxury-gold/50"
                                                        : "bg-gradient-to-br from-teal-500/10 to-teal-500/5 border-teal-500/30 hover:border-teal-500/50 ai-glow-ring"
                                                    }`}
                                            >
                                                {/* Label */}
                                                <div className="flex items-center gap-2 mb-4">
                                                    <div
                                                        className={`p-1.5 rounded-lg ${feature.type === "psychology"
                                                                ? "bg-luxury-gold/20 text-luxury-gold"
                                                                : "bg-teal-500/20 text-teal-400"
                                                            }`}
                                                    >
                                                        {feature.type === "psychology" ? <PenTool size={18} /> : <Cpu size={18} />}
                                                    </div>
                                                    <h6
                                                        className={`text-xs font-bold tracking-widest uppercase ${feature.type === "psychology" ? "text-luxury-gold" : "text-teal-400"
                                                            }`}
                                                    >
                                                        {feature.label}
                                                    </h6>
                                                </div>

                                                {/* Horizontal Layout: Image (Left) + Text (Right) */}
                                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                                    {/* Thumbnail Image */}
                                                    <div className="w-full sm:w-32 md:w-40 flex-shrink-0 rounded-lg overflow-hidden border border-white/10 bg-neutral-900">
                                                        <img
                                                            src={feature.visual_asset}
                                                            alt={feature.title}
                                                            className="w-full h-auto object-contain"
                                                        />
                                                    </div>

                                                    {/* Text Content */}
                                                    <div className="flex-1 min-w-0">
                                                        <h6 className="text-lg font-bold text-white mb-2">{feature.title}</h6>
                                                        <p className="text-slate-300 text-sm leading-relaxed">{feature.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </RevealOnScroll>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
