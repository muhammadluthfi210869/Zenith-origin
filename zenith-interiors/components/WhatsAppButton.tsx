"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
    const phoneNumber = '62881023221414'; // Format internasional (tanpa +)
    const message = encodeURIComponent('Halo Mas Luthfi! Saya tertarik dengan layanan Zenith Studio.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20BA5A] hover:scale-110 transition-all duration-300 group animate-bounce"
            style={{ animationDuration: '2s' }}
            aria-label="Chat via WhatsApp"
        >
            <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />

            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>

            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>

            {/* Tooltip */}
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <span className="font-semibold">Chat Langsung dengan Mas Luthfi</span>
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-neutral-900"></div>
            </div>
        </a>
    );
};

export default WhatsAppButton;
