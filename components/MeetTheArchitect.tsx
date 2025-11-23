import React from 'react';
import { motion } from 'framer-motion';

const MeetTheArchitect: React.FC = () => {
    return (
        <section className="py-20 bg-neutral-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center md:justify-end"
                    >
                        <div className="relative w-full max-w-[400px]">
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10"></div>
                            <img
                                src="/images/team/portrait_luthfi.png"
                                alt="Luthfi - Architect"
                                className="w-full h-auto object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
                                style={{ maxHeight: '400px', maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
                            />
                        </div>
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-left"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-luxury-gold mb-6 tracking-wide">
                            Arsitek di Balik Layar
                        </h2>
                        <p className="text-neutral-300 text-lg leading-relaxed mb-8 font-light">
                            "Di era AI, sentuhan manusia justru makin mahal. Saya Luthfi, dan saya pastikan logika bisnis Anda diterjemahkan dengan sempurna ke dalam sistem ini. Bukan template, tapi strategi."
                        </p>

                        <div className="mt-8">
                            <img
                                src="/images/team/signature_luthfi.png"
                                alt="Signature"
                                className="w-[150px] h-auto opacity-90"
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MeetTheArchitect;
