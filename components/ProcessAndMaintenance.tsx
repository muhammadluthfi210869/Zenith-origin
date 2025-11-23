import React from 'react';
import { CheckCircle2, Shield, Zap } from 'lucide-react';

const processSteps = [
    {
        icon: <Shield size={24} />,
        title: "Risk-Free Preview",
        description: "Kami mendiagnosa celah bisnis Anda & memberikan mockup solusi visual tanpa biaya.",
        highlight: "No Risk"
    },
    {
        icon: <Zap size={24} />,
        title: "Strategic Blueprint Session",
        description: "Penyelarasan visi bisnis & penguncian slot produksi.",
        highlight: "Consultation"
    },
    {
        icon: <CheckCircle2 size={24} />,
        title: "Build & Launch",
        description: "Instalasi AI, Copywriting Neuro-Persuasion, & Launching.",
        highlight: "Execution"
    }
];

const ProcessAndMaintenance: React.FC = () => {
    return (
        <section className="py-20 bg-neutral-900/50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-gold/5 to-transparent opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-luxury-gold tracking-widest uppercase mb-3">How It Works</h2>
                    <h3 className="text-4xl md:text-5xl font-serif mb-6">Process & Maintenance</h3>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                        Transparansi penuh dari konsultasi hingga maintenance jangka panjang
                    </p>
                </div>

                {/* Process Timeline */}
                <div className="mb-16">
                    <h4 className="text-2xl font-serif text-white mb-8 text-center">Our Process</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Connector Line (Desktop Only) */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 left-[50%] w-full h-[2px] bg-gradient-to-r from-luxury-gold/50 to-luxury-gold/20 z-0"></div>
                                )}

                                {/* Step Card */}
                                <div className="relative bg-neutral-800/50 border border-luxury-gold/20 rounded-2xl p-6 hover:border-luxury-gold/50 transition-all duration-300 z-10 backdrop-blur-sm">
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-luxury-gold text-black rounded-full flex items-center justify-center font-bold text-sm">
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className="flex justify-center mb-4 mt-4">
                                        <div className="w-16 h-16 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold">
                                            {step.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <span className="inline-block px-3 py-1 bg-luxury-gold/20 text-luxury-gold text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                                            {step.highlight}
                                        </span>
                                        <h5 className="text-xl font-serif text-white mb-2">{step.title}</h5>
                                        <p className="text-neutral-400 text-sm">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Maintenance Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-2 border-luxury-gold/30 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/10 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-luxury-gold/10 blur-3xl"></div>

                        <div className="relative z-10">
                            {/* Badge */}
                            <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                                ⚠️ Warning
                            </div>

                            {/* Title */}
                            <h4 className="text-3xl md:text-4xl font-serif text-white mb-4">
                                Bukan Vendor "Hit & Run"
                            </h4>

                            {/* Content */}
                            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                                Banyak developer kabur setelah website jadi. Kami menjaga sistem Anda tetap hidup.
                            </p>

                            {/* Highlight Box */}
                            <div className="bg-luxury-gold/10 border-l-4 border-luxury-gold p-6 rounded-lg mb-6">
                                <p className="text-luxury-gold text-xl md:text-2xl font-bold mb-2">
                                    Jangan Biarkan Aset Digital Anda Mati
                                </p>
                            </div>

                            {/* Note */}
                            <p className="text-neutral-400 text-sm italic">
                                💡 Lebih murah dari tagihan listrik, tapi menjaga mesin uang Anda tetap hidup saat Anda tidur. Tanpa ini, website hanyalah brosur mati.
                            </p>

                            {/* Benefits List */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                {[
                                    "Server hosting & monitoring",
                                    "AI chatbot uptime 24/7",
                                    "Security updates rutin",
                                    "Priority support"
                                ].map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 size={20} className="text-luxury-gold flex-shrink-0" />
                                        <span className="text-neutral-300 text-sm">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessAndMaintenance;
