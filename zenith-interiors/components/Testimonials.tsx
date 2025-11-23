"use client";

import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Ibu Maya Wulandari",
        role: "Creative Director",
        company: "Maya's Design Lab",
        image: "/images/testimonials/client-maya-wulandari.jpg",
        quote: "Sebelumnya, 70% chat yang masuk ke WA hanya tanya harga tanpa minat serius. Setelah Luthfi merombak Copywriting kami, narasi brand kami langsung naik kelas. Klien yang datang sekarang sudah teredukasi dan tidak berani menawar sadis. Ini bukan web biasa, ini sales strategy.",
        rating: 5,
        tags: ["Kualitas Lead", "High-Ticket"]
    },
    {
        id: 2,
        name: "Bapak Roni Susanto",
        role: "Owner Kontraktor",
        company: "PT. Karya Graha Utama",
        image: "/images/testimonials/client-roni-susanto.jpg",
        quote: "Sebagai kontraktor, waktu saya habis di lapangan. Sistem lama membuat admin kami slow response dan leads sering hilang di malam hari. AI Concierge dari Zenith benar-benar jadi penyelamat. Sekarang, saya fokus di konstruksi, biar AI yang urus saringan lead.",
        rating: 5,
        tags: ["Efisiensi Waktu", "Automasi"]
    },
    {
        id: 3,
        name: "Kang Dadang Permana",
        role: "Spesialis Kitchen Set",
        company: "Dapur Juara Custom",
        image: "/images/testimonials/client-dadang-permana.jpg",
        quote: "Persaingan kitchen set di Bandung gila-gilaan. Website lama kami terlihat sama dengan yang lain. Luthfi berhasil menonjolkan value material anti-rayap kami dengan storytelling yang meyakinkan. Ditambah kalkulator estimasi yang responsif, penjualan kami naik 15% dalam 2 bulan.",
        rating: 5,
        tags: ["Konversi", "Brand Story"]
    }
];

const Testimonials: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-luxury-gold/5 skew-x-12 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-luxury-gold uppercase tracking-widest text-sm font-bold mb-3">Success Stories</h2>
                    <h3 className="text-4xl font-serif">Trusted by Industry Leaders</h3>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="relative bg-[#0D1117]/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/5 rounded-full hover:bg-luxury-gold hover:text-black transition-all z-20 hidden md:block"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/5 rounded-full hover:bg-luxury-gold hover:text-black transition-all z-20 hidden md:block"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Content */}
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            {/* Image */}
                            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 relative">
                                <div className="absolute inset-0 bg-luxury-gold rounded-full blur-lg opacity-20"></div>
                                <img
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].name}
                                    className="w-full h-full object-cover rounded-full border-2 border-luxury-gold/50 relative z-10"
                                />
                                <div className="absolute -bottom-2 -right-2 bg-luxury-gold text-black p-2 rounded-full z-20">
                                    <Quote size={16} fill="currentColor" />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex justify-center md:justify-start gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="#D4AF37" className="text-luxury-gold" />
                                    ))}
                                </div>

                                <blockquote className="text-lg md:text-xl text-neutral-300 italic mb-6 leading-relaxed">
                                    "{testimonials[activeIndex].quote}"
                                </blockquote>

                                <div>
                                    <h4 className="text-xl font-serif text-white">{testimonials[activeIndex].name}</h4>
                                    <p className="text-luxury-gold text-sm mb-1">{testimonials[activeIndex].role}</p>
                                    <p className="text-neutral-500 text-xs uppercase tracking-wider">{testimonials[activeIndex].company}</p>
                                </div>

                                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
                                    {testimonials[activeIndex].tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-xs text-neutral-400 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${activeIndex === idx ? 'w-8 bg-luxury-gold' : 'bg-white/20 hover:bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
