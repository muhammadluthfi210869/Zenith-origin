import React from 'react';

const Studio: React.FC = () => {
    return (
        <section id="studio" className="py-32 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative h-[500px] border border-white/5 bg-white/[0.02] flex items-center justify-center overflow-hidden group animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
                    {/* Decorative background element */}
                    <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-gold/10 to-transparent opacity-50 transition-opacity duration-700 group-hover:opacity-80"></div>

                    <div className="absolute inset-8 border border-luxury-gold/20 transition-all duration-700 group-hover:inset-6 group-hover:border-luxury-gold/40"></div>
                    <div className="flex flex-col items-center justify-center z-10">
                        <div className="text-8xl font-serif text-luxury-gold opacity-20 transition-all duration-700 group-hover:opacity-40 group-hover:scale-110">Z</div>
                        <div className="text-neutral-500 font-serif text-sm tracking-[0.4em] mt-6 border-t border-neutral-800 pt-4">EST. 2024</div>
                    </div>
                </div>

                <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
                    <span className="text-luxury-gold tracking-[0.3em] text-sm font-medium mb-4 block uppercase">The System</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">Arsitektur <br /><span className="bg-gradient-to-r from-luxury-gold to-yellow-500 bg-clip-text text-transparent">Sistem 24 Jam</span></h2>
                    <p className="text-slate-300 leading-relaxed mb-8 text-lg font-light tracking-wide">
                        Jangan biarkan bisnis Anda tidur. Sementara Anda beristirahat, sistem AI kami bekerja 24/7 menyambut pengunjung, menjawab pertanyaan, dan mengamankan janji temu survei secara otomatis.
                    </p>
                    <p className="text-slate-300 leading-relaxed font-light tracking-wide">
                        Tidak ada lagi leads yang hilang di malam hari. Tidak ada lagi pertanyaan yang tertunda. Website Anda menjadi sales representative yang tidak pernah lelah, tidak pernah libur, dan selalu siap melayani calon klien premium Anda.
                    </p>

                    <div className="mt-10">
                        <div className="flex gap-8">
                            <div>
                                <span className="block text-3xl font-serif text-white mb-1">24/7</span>
                                <span className="text-xs text-neutral-500 tracking-widest uppercase">AI Active</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-serif text-white mb-1">100%</span>
                                <span className="text-xs text-neutral-500 tracking-widest uppercase">Automated</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-serif text-white mb-1">0</span>
                                <span className="text-xs text-neutral-500 tracking-widest uppercase">Missed Leads</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Studio;
