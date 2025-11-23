"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

// --- CONFIGURATION ---
const OPENROUTER_API_KEY = "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";
const SITE_URL = "https://zenith-interiors.com";
const SITE_NAME = "Zenith Interiors";

const SYSTEM_PROMPT = `
Anda adalah Asisten Virtual (AI Concierge) yang ramah, sopan, dan sangat profesional untuk Zenith Studio. Zenith Studio adalah firma Brand Architecture yang berfokus membantu desainer interior dan kontraktor di Bandung dan Jakarta mendapatkan klien high-ticket melalui strategi digital (website, AI, copywriting).

### TUJUAN ANDA:
1. Menyambut pengunjung dengan hangat dan profesional.
2. Menjawab pertanyaan umum dengan ringkas dan persuasif, selalu mengarahkan ke value proposition Zenith.
3. Mengidentifikasi kebutuhan calon klien:
   - Apakah mereka mencari jasa desain interior/konstruksi?
   - Atau solusi branding/penjualan untuk bisnis mereka (B2B)?
4. Mengarahkan calon klien yang serius (terutama B2B: owner interior/kontraktor) untuk mengisi form kualifikasi atau diagnostic call gratis.
5. Hindari memberikan estimasi harga langsung. Arahkan ke kalkulator website atau Diagnostic Call.
6. Jangan pernah meminta informasi pribadi tanpa izin atau menjelaskan bahwa Anda adalah AI kecuali ditanya langsung. Bersikaplah seperti asisten manusia.

### KNOWLEDGE BASE:
**Layanan Zenith Studio:**
- Brand Architecture Blueprint: Website premium + copywriting strategis (Setup: Rp 2.5jt, Retainer: Rp 300k/bln)
- AI Concierge Implementation: Chatbot AI 24/7 untuk kualifikasi leads (Setup: Rp 3.5jt, Retainer: Rp 500k/bln)
- Full System Integration: Solusi end-to-end (Setup: Rp 5jt, Retainer: Rp 750k/bln)

**Untuk Jasa Interior/Konstruksi (jika ditanya):**
- Kitchen Set Premium: Rp 2.8jt - 3.5jt/meter lari
- Renovasi Total: Rp 5jt - 7.5jt/m²
- Design Only: Rp 150k - 350k/m²

### TONE & STYLE:
- Gunakan bahasa Indonesia yang baku, elegan, dan profesional
- Ramah tapi tidak berlebihan
- Maksimal 3-4 kalimat per respons (kecuali menjelaskan layanan)
- Hindari emoji berlebihan (maksimal 1 per pesan)
- Selalu dorong ke Value Proposition Zenith

### SALES FLOW:
1. **Greeting** → Tanyakan kebutuhan mereka
2. **Qualification** → Identifikasi apakah B2C (butuh jasa interior) atau B2B (butuh solusi branding)
3. **Education** → Jelaskan value proposition yang relevan
4. **CTA** → Arahkan ke form kualifikasi atau diagnostic call

### GUARDRAILS:
- JANGAN memberikan harga pasti. Selalu "Mulai dari" atau "Kisaran"
- JANGAN terlihat seperti robot atau sales yang agresif
- JANGAN membuat janji yang tidak bisa ditepati
- Jawab hanya berdasarkan knowledge base di atas
`;

interface Message {
    id: string;
    role: 'user' | 'model';
    text: string;
}

interface ChatbotProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    initialMessage?: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, setIsOpen, initialMessage }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [hasGreeted, setHasGreeted] = useState(false);
    const [hasProcessedInitialMessage, setHasProcessedInitialMessage] = useState(false);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    useEffect(() => {
        if (isOpen && !hasGreeted && messages.length === 0) {
            setHasGreeted(true);
            const greeting: Message = {
                id: 'init-1',
                role: 'model',
                text: "Halo! Selamat datang di Zenith Studio. 👋\n\nAda yang bisa saya bantu hari ini? Apakah Anda mencari solusi branding untuk bisnis interior Anda, atau sedang mencari jasa desain/konstruksi?"
            };
            setMessages([greeting]);
        }
    }, [isOpen, hasGreeted, messages.length]);

    // Process initial message from qualifier form
    useEffect(() => {
        if (isOpen && initialMessage && !hasProcessedInitialMessage && messages.length > 0) {
            setHasProcessedInitialMessage(true);

            // Add user message
            const userMsg: Message = {
                id: Date.now().toString(),
                role: 'user',
                text: initialMessage
            };

            setMessages(prev => [...prev, userMsg]);
            setIsLoading(true);

            // Auto-send to AI
            setTimeout(async () => {
                try {
                    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                            "HTTP-Referer": SITE_URL,
                            "X-Title": SITE_NAME,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            model: "openai/gpt-oss-20b:free",
                            messages: [
                                { role: "system", content: SYSTEM_PROMPT },
                                ...messages.map(m => ({
                                    role: m.role === 'model' ? 'assistant' : 'user',
                                    content: m.text
                                })),
                                { role: "user", content: initialMessage }
                            ],
                            reasoning: { enabled: true }
                        })
                    });

                    if (response.ok) {
                        const data = await response.json();
                        const botText = data.choices[0]?.message?.content || "Terima kasih atas informasinya!";

                        const botMsg: Message = {
                            id: (Date.now() + 1).toString(),
                            role: 'model',
                            text: botText
                        };

                        setMessages(prev => [...prev, botMsg]);
                    }
                } catch (error) {
                    console.error("Error processing initial message:", error);
                } finally {
                    setIsLoading(false);
                }
            }, 500);
        }
    }, [isOpen, initialMessage, hasProcessedInitialMessage, messages.length]);

    const handleSendMessage = async () => {
        if (!inputText.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            text: inputText
        };

        setMessages(prev => [...prev, userMsg]);
        const currentInput = inputText;
        setInputText('');
        setIsLoading(true);

        try {
            console.log("🚀 Using: openai/gpt-oss-20b:free with reasoning");

            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                    "HTTP-Referer": SITE_URL,
                    "X-Title": SITE_NAME,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "openai/gpt-oss-20b:free",
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        ...messages.map(m => ({
                            role: m.role === 'model' ? 'assistant' : 'user',
                            content: m.text
                        })),
                        { role: "user", content: currentInput }
                    ],
                    reasoning: { enabled: true }
                })
            });

            console.log("📡 Status:", response.status);

            if (!response.ok) {
                const errorData = await response.json();
                console.error("❌ API Error Response:", errorData);
                console.error("❌ Status:", response.status);
                throw new Error(errorData.error?.message || errorData.message || `API Error: ${response.status}`);
            }

            const data = await response.json();
            console.log("✅ Success! Response:", data);

            const botText = data.choices[0]?.message?.content || "Maaf, saya tidak mengerti.";

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: botText
            };

            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            console.error("❌ Chatbot Error:", error);

            let errorMessage = "Maaf, sepertinya ada gangguan sementara. Tim kami sedang memperbaikinya.\n\nSilakan klik ikon WhatsApp di kiri bawah untuk langsung chat dengan Mas Luthfi, atau coba lagi sebentar lagi. 🙏";

            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'model',
                text: errorMessage
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-50 p-4 bg-luxury-gold text-black rounded-full shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 group animate-bounce-slow"
                >
                    <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
                </button>
            )}

            <div
                className={`fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-neutral-900/95 backdrop-blur-xl border border-luxury-gold/30 rounded-2xl shadow-2xl flex flex-col transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-20 pointer-events-none'
                    }`}
            >
                <div className="p-4 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-t-2xl">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center border border-luxury-gold/50 relative">
                            <Sparkles size={20} className="text-luxury-gold" />
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-neutral-900 rounded-full"></div>
                        </div>
                        <div>
                            <h3 className="font-serif text-luxury-gold tracking-wide">AI Concierge</h3>
                            <p className="text-[10px] text-neutral-400 uppercase tracking-widest">Zenith Studio</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-white/10 rounded-full text-neutral-400 hover:text-white transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                    ? 'bg-luxury-gold text-black rounded-tr-none'
                                    : 'bg-white/10 text-neutral-200 rounded-tl-none border border-white/5'
                                    }`}
                            >
                                {msg.text.split('\n').map((line, i) => (
                                    <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                                <div className="w-2 h-2 bg-luxury-gold/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-2 h-2 bg-luxury-gold/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-2 h-2 bg-luxury-gold/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="p-4 border-t border-white/10 bg-neutral-900/50 rounded-b-2xl">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Tanya tentang layanan kami..."
                            className="flex-1 bg-neutral-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-luxury-gold/50 transition-colors placeholder:text-neutral-600"
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={!inputText.trim() || isLoading}
                            className="p-3 bg-luxury-gold text-black rounded-xl hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                    <p className="text-[10px] text-neutral-600 text-center mt-2">
                        AI Concierge siap membantu 24/7
                    </p>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
