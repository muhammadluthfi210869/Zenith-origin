import Image from 'next/image';

const steps = [
    {
        image: "/images/process/process-1-diagnosis.jpg",
        title: "Consultation",
        desc: "We begin by understanding your vision, needs, and lifestyle."
    },
    {
        image: "/images/process/process-2-strategy.jpg",
        title: "Concept",
        desc: "Our designers craft bespoke concepts and 3D visualizations."
    },
    {
        image: "/images/process/process-3-ai-system.jpg",
        title: "Creation",
        desc: "Expert craftsmen bring the design to life with precision."
    },
    {
        image: "/images/process/process-4-launch.jpg",
        title: "Completion",
        desc: "The final reveal of your transformed sanctuary."
    }
];

const Process: React.FC = () => {
    return (
        <section id="process" className="py-32 px-6 bg-neutral-900/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 animate-slide-up opacity-0">
                    <h2 className="text-3xl md:text-4xl font-serif text-luxury-text mb-6 tracking-widest">THE PROCESS</h2>
                    <div className="w-24 h-[1px] bg-luxury-gold mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center text-center group animate-slide-up opacity-0"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Connector Line (Desktop) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-white/5 -z-10"></div>
                            )}

                            <div className="w-24 h-24 rounded-full bg-neutral-900 border-2 border-luxury-gold/30 flex items-center justify-center mb-8 relative z-10 transition-all duration-500 group-hover:border-luxury-gold group-hover:scale-110 shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] overflow-hidden">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-serif text-white mb-4 tracking-wide">{step.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed font-light tracking-wide">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
