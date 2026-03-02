"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Download } from "lucide-react";

export default function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasTriggered) {
                setIsVisible(true);
                setHasTriggered(true);

                // Set cookie or local storage here to prevent showing again for 30 days
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }, [hasTriggered]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Simulate API call for newsletter/lead magnet
        setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-[#0c0c0c] border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_60px_-15px_rgba(var(--primary-rgb),0.5)] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-6 right-6 text-foreground/40 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {!isSubmitted ? (
                            <div className="relative z-10 space-y-6">
                                <div className="space-y-2">
                                    <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Wait Before You Go</span>
                                    <h3 className="text-3xl font-black uppercase tracking-tighter italic">Is Your SaaS Slowing Down?</h3>
                                </div>
                                <p className="text-foreground/60 leading-relaxed font-medium">
                                    Get my <span className="text-white font-bold">Free MERN Performance Checklist</span> used by top US/UK startups to cut load times by 50% and reduce AWS bills.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your work email"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-sm"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors"
                                    >
                                        <Download className="w-4 h-4" />
                                        Send Me The Checklist
                                    </button>
                                </form>
                                <p className="text-[10px] text-foreground/40 text-center uppercase tracking-widest">No spam. Unsubscribe anytime.</p>
                            </div>
                        ) : (
                            <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4 py-8">
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tighter italic text-white">Checklist Sent!</h3>
                                <p className="text-foreground/60 text-sm">Check your inbox in a few minutes.</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
