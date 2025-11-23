"use client";

import React, { useState } from 'react';
import { Target, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';

interface FormData {
    budget: string;
    timeline: string;
    painPoint: string;
    customPainPoint: string;
}

interface HighTicketQualifierProps {
    onOpenChat?: (message?: string) => void;
}

const HighTicketQualifier: React.FC<HighTicketQualifierProps> = ({ onOpenChat }) => {
    const [formData, setFormData] = useState<FormData>({
        budget: '',
        timeline: '',
        painPoint: '',
        customPainPoint: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const budgetOptions = [
        { value: '100-250jt', label: 'Rp 100 - 250 Juta' },
        { value: '250-500jt', label: 'Rp 250 - 500 Juta' },
        { value: '>500jt', label: 'Lebih dari Rp 500 Juta' }
    ];

    const timelineOptions = [
        { value: '<1month', label: 'Kurang dari 1 Bulan (Urgent)' },
        { value: '1-3months', label: '1 sampai 3 Bulan' },
        { value: '3-6months', label: '3 sampai 6 Bulan' }
    ];

    const painPointOptions = [
        { value: 'filtering', label: 'Mendapatkan klien serius (Filtering)' },
        { value: 'positioning', label: 'Membuat Brand terlihat mahal (Positioning)' },
        { value: 'admin', label: 'Mengatur jadwal survei/meeting (Admin Chaos)' },
        { value: 'portfolio', label: 'Web yang bisa update portofolio otomatis' },
        { value: 'closing', label: 'Meningkatkan closing rate (Sales)' },
        { value: 'custom', label: '✍️ Ketikan Sendiri (Masalah Unik)' }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Get human-readable labels
        const budgetLabel = budgetOptions.find(opt => opt.value === formData.budget)?.label || formData.budget;
        const timelineLabel = timelineOptions.find(opt => opt.value === formData.timeline)?.label || formData.timeline;
        const painPointLabel = formData.painPoint === 'custom'
            ? formData.customPainPoint
            : painPointOptions.find(opt => opt.value === formData.painPoint)?.label || formData.painPoint;

        // Format message for chatbot
        const contextMessage = `Saya baru saja mengisi kualifikasi proyek:

📊 Budget: ${budgetLabel}
⏰ Timeline: ${timelineLabel}
🎯 Masalah Utama: ${painPointLabel}

Bisakah Anda memberikan rekomendasi untuk proyek saya?`;

        console.log('High-Ticket Lead Qualified:', formData);
        console.log('Context Message:', contextMessage);

        // Open chatbot with context
        if (onOpenChat) {
            onOpenChat(contextMessage);
        }

        // Show success message
        setIsSubmitted(true);

        // Reset form after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ budget: '', timeline: '', painPoint: '', customPainPoint: '' });
        }, 5000);
    };

    const isFormValid = formData.budget && formData.timeline &&
        (formData.painPoint && (formData.painPoint !== 'custom' || formData.customPainPoint.trim().length > 10));

    if (isSubmitted) {
        return (
            <section className="py-20 bg-gradient-to-br from-neutral-900 to-[#0D1117] text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="mb-8 inline-block p-6 bg-luxury-gold/20 rounded-full">
                            <CheckCircle2 size={64} className="text-luxury-gold" />
                        </div>
                        <h2 className="text-3xl font-serif text-luxury-gold mb-4">Chatbot Sedang Merespons!</h2>
                        <p className="text-neutral-300 text-lg mb-4">
                            AI Concierge kami sedang menganalisis kualifikasi Anda dan memberikan rekomendasi terbaik.
                        </p>
                        <p className="text-neutral-400 text-sm">
                            Lihat chatbot di kanan bawah untuk respons lengkap, atau klik WhatsApp di kiri bawah untuk langsung chat dengan Mas Luthfi.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-gradient-to-br from-neutral-900 to-[#0D1117] text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-luxury-gold/5 blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-luxury-gold uppercase tracking-widest text-sm font-bold mb-3">High-Ticket Qualifier</h2>
                        <h3 className="text-4xl font-serif mb-6">Apakah Proyek Anda Cocok?</h3>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            Kami hanya bekerja dengan klien yang serius. Jawab 3 pertanyaan ini untuk mendapatkan diagnostic call gratis dengan Brand Architect kami.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                        {/* Q1: Budget Question */}
                        <div className="mb-8">
                            <label className="flex items-center gap-3 text-luxury-gold text-lg font-semibold mb-4">
                                <Target size={24} />
                                <span>Q1: Apa estimasi Budget Proyek Anda saat ini?</span>
                            </label>
                            <div className="space-y-3">
                                {budgetOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, budget: option.value })}
                                        className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-3 ${formData.budget === option.value
                                            ? 'bg-luxury-gold text-black font-semibold'
                                            : 'bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/10'
                                            }`}
                                    >
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.budget === option.value ? 'border-black' : 'border-neutral-500'
                                            }`}>
                                            {formData.budget === option.value && (
                                                <div className="w-3 h-3 rounded-full bg-black"></div>
                                            )}
                                        </div>
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Q2: Timeline Question */}
                        <div className="mb-8">
                            <label className="flex items-center gap-3 text-luxury-gold text-lg font-semibold mb-4">
                                <Clock size={24} />
                                <span>Q2: Kapan target Timeline Proyek Anda dimulai?</span>
                            </label>
                            <div className="space-y-3">
                                {timelineOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, timeline: option.value })}
                                        className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-3 ${formData.timeline === option.value
                                            ? 'bg-luxury-gold text-black font-semibold'
                                            : 'bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/10'
                                            }`}
                                    >
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.timeline === option.value ? 'border-black' : 'border-neutral-500'
                                            }`}>
                                            {formData.timeline === option.value && (
                                                <div className="w-3 h-3 rounded-full bg-black"></div>
                                            )}
                                        </div>
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Q3: Pain Point Question */}
                        <div className="mb-8">
                            <label className="flex items-center gap-3 text-luxury-gold text-lg font-semibold mb-4">
                                <AlertCircle size={24} />
                                <span>Q3: Apa Masalah Terbesar yang Ingin Anda Selesaikan?</span>
                            </label>
                            <div className="space-y-3">
                                {painPointOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, painPoint: option.value })}
                                        className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-3 ${formData.painPoint === option.value
                                            ? 'bg-luxury-gold text-black font-semibold'
                                            : 'bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/10'
                                            }`}
                                    >
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.painPoint === option.value ? 'border-black' : 'border-neutral-500'
                                            }`}>
                                            {formData.painPoint === option.value && (
                                                <div className="w-3 h-3 rounded-full bg-black"></div>
                                            )}
                                        </div>
                                        {option.label}
                                    </button>
                                ))}
                            </div>

                            {/* Custom Pain Point Input */}
                            {formData.painPoint === 'custom' && (
                                <div className="mt-4 animate-slide-up">
                                    <textarea
                                        value={formData.customPainPoint}
                                        onChange={(e) => setFormData({ ...formData, customPainPoint: e.target.value })}
                                        placeholder="Jelaskan masalah spesifik Anda di sini... (Contoh: Saya butuh solusi untuk marketing di TikTok)"
                                        rows={4}
                                        className="w-full bg-white/5 border border-luxury-gold/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-neutral-600 resize-none"
                                    />
                                    <p className="text-xs text-neutral-500 mt-2">
                                        Minimal 10 karakter. Mas Luthfi akan langsung review masalah unik Anda.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${isFormValid
                                ? 'bg-luxury-gold text-black hover:bg-white hover:shadow-lg'
                                : 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
                                }`}
                        >
                            {formData.painPoint === 'custom' && formData.customPainPoint.trim()
                                ? 'Hubungi Mas Luthfi via WhatsApp'
                                : isFormValid
                                    ? 'Kirim Kualifikasi & Dapatkan Call Gratis'
                                    : 'Lengkapi Semua Pertanyaan'}
                        </button>

                        <p className="text-xs text-neutral-500 text-center mt-4">
                            Kami menghargai privasi Anda. Data hanya digunakan untuk diagnostic call.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HighTicketQualifier;
