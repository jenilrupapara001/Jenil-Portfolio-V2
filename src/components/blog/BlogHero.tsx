"use client";

import { motion } from "framer-motion";

export default function BlogHero() {
    return (
        <div className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[100px] opacity-30 rounded-full" />
            </div>

            <div className="w-full px-6 md:px-12 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-primary mb-8 shadow-[0_0_20px_-5px_rgba(var(--primary-rgb),0.3)]"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Knowledge Hub
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6"
                >
                    Engineering <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Insights.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed"
                >
                    Deep dives into full-stack architecture, system design, and the modern web ecosystem.
                </motion.p>
            </div>
        </div>
    );
}
