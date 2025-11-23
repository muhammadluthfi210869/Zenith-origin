import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0D1117]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div
                    className="cursor-pointer relative h-10 md:h-12"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <img
                        src="/logo/zenith-logo-gold.png"
                        alt="Zenith Interiors"
                        className="h-full w-auto object-contain"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-[0.2em] text-neutral-400">
                    {['COLLECTIONS', 'PROCESS', 'STUDIO'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => handleScrollTo(e, item.toLowerCase())}
                            className="relative group overflow-hidden py-1"
                        >
                            <span className="relative z-10 group-hover:text-luxury-gold transition-colors duration-300">{item}</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="#estimate"
                        onClick={(e) => handleScrollTo(e, 'estimate')}
                        className="px-8 py-3 border border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all duration-500 tracking-[0.2em]"
                    >
                        START MY SYSTEM
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-luxury-gold transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#0D1117]/95 backdrop-blur-xl border-b border-white/10 absolute w-full">
                    <div className="flex flex-col px-6 py-12 gap-8 text-center">
                        {['COLLECTIONS', 'PROCESS', 'STUDIO', 'ESTIMATE'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => handleScrollTo(e, item.toLowerCase() === 'estimate' ? 'estimate' : item.toLowerCase())}
                                className="text-xl font-serif tracking-widest text-neutral-300 hover:text-luxury-gold transition-colors"
                            >
                                {item === 'ESTIMATE' ? 'START MY SYSTEM' : item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
