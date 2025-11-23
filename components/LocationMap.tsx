import React, { useState } from 'react';
import { MapPin, Navigation, Building2 } from 'lucide-react';

const projects = [
    {
        id: 1,
        name: "Villa Dago Pakar",
        type: "Total Renovation",
        location: "Dago, Bandung",
        coords: { top: '30%', left: '40%' }
    },
    {
        id: 2,
        name: "Podomoro Park Cluster",
        type: "Interior Design",
        location: "Buahbatu, Bandung",
        coords: { top: '60%', left: '70%' }
    },
    {
        id: 3,
        name: "Kota Baru Parahyangan",
        type: "Build & Construct",
        location: "Padalarang, Bandung",
        coords: { top: '20%', left: '20%' }
    }
];

const LocationMap: React.FC = () => {
    const [activeProject, setActiveProject] = useState<number | null>(null);

    return (
        <section className="py-20 bg-neutral-900 text-white relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Text Content */}
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <h2 className="text-luxury-gold uppercase tracking-widest text-sm font-bold mb-3">Our Presence</h2>
                            <h3 className="text-4xl font-serif mb-6">Berbasis di Bandung, Melayani Nasional</h3>

                            <p className="text-neutral-400 leading-relaxed">
                                Berbasis di Bandung, kami melayani proyek premium di seluruh Jawa Barat dan Jabodetabek.
                                Kunjungi studio kami untuk konsultasi langsung.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="p-3 bg-luxury-gold/20 text-luxury-gold rounded-lg">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Bandung, Indonesia</h4>
                                    <p className="text-neutral-400 text-sm mb-2">Proudly Local. Ready for Coffee Meeting by Appointment.</p>
                                </div>
                            </div>
                        </div>


                        {/* Project List */}
                        <div>
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                <Building2 size={18} className="text-luxury-gold" />
                                Featured Projects
                            </h4>
                            <div className="space-y-2">
                                {projects.map((project) => (
                                    <button
                                        key={project.id}
                                        onMouseEnter={() => setActiveProject(project.id)}
                                        onMouseLeave={() => setActiveProject(null)}
                                        className={`w-full text-left p-3 rounded-lg transition-all ${activeProject === project.id
                                            ? 'bg-luxury-gold text-black translate-x-2'
                                            : 'bg-transparent text-neutral-400 hover:bg-white/5 hover:text-white'
                                            }`}
                                    >
                                        <div className="font-bold text-sm">{project.name}</div>
                                        <div className="text-xs opacity-70">{project.type} • {project.location}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Map Visual */}
                    <div className="lg:col-span-2 h-[500px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                        {/* Dark Mode Map Overlay */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.57311687148142!3d-6.903444341687889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1647589234567!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                            allowFullScreen={false}
                            loading="lazy"
                            className="absolute inset-0"
                        ></iframe>

                        {/* Custom Markers Overlay */}
                        <div className="absolute inset-0 pointer-events-none">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className={`absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${activeProject === project.id ? 'scale-125 z-10' : 'scale-100 z-0'
                                        }`}
                                    style={{ top: project.coords.top, left: project.coords.left }}
                                >
                                    <div className="relative group/marker">
                                        <div className={`w-4 h-4 rounded-full border-2 border-black shadow-lg ${activeProject === project.id ? 'bg-luxury-gold animate-bounce' : 'bg-white'
                                            }`}></div>

                                        {/* Tooltip */}
                                        <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-[#0D1117] text-white text-xs p-2 rounded-lg text-center transition-opacity ${activeProject === project.id ? 'opacity-100' : 'opacity-0'
                                            }`}>
                                            <div className="font-bold text-luxury-gold">{project.name}</div>
                                            <div className="text-[10px]">{project.type}</div>
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[#0D1117] rotate-45"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;
