"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PhoneCall, X } from "lucide-react";

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300 && !isDismissed) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isDismissed]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-6 md:bottom-6 z-50 w-[90%] md:w-auto"
                >
                    <div className="relative group flex items-center justify-between gap-4 p-4 pr-12 rounded-2xl bg-black/80 backdrop-blur-xl border border-primary/30 shadow-[0_0_40px_-10px_rgba(var(--primary-rgb),0.5)]">
                        <div className="absolute inset-0 bg-primary/10 rounded-2xl pointer-events-none" />

                        <div className="flex items-center gap-3 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <PhoneCall className="w-5 h-5 animate-pulse" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm tracking-tight">Get a Free 20-Min Technical Review</span>
                                <span className="text-foreground/60 text-xs italic">No sales pitch. Just architectural clarity.</span>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="relative z-10 px-4 py-2 bg-primary text-white rounded-lg text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors shrink-0"
                            onClick={() => setIsDismissed(true)}
                        >
                            Book Now
                        </Link>

                        <button
                            onClick={() => setIsDismissed(true)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-foreground/40 hover:text-white transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
