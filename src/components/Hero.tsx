"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GridPattern } from "./GridPattern";
import { TypewriterEffect } from "./TypewriterEffect";

export default function Hero() {
    const [target, setTarget] = useState<HTMLElement | null>(null);
    const [mounted, setMounted] = useState(false);

    const { scrollYProgress } = useScroll({
        target: target ? { current: target } : undefined,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // We use a CSS-based reveal for the first mount to prevent layout shift
    // while ensuring content is always present for SEO and client-side navigation.
    const [isFullyMounted, setIsFullyMounted] = useState(false);
    useEffect(() => {
        setIsFullyMounted(true);
    }, []);

    return (
        <section
            ref={setTarget}
            className="relative h-screen flex items-center justify-center overflow-hidden selection:bg-primary/30"
        >
            {/* Animated grid background */}
            <div className="absolute inset-0 bg-[#0a0a0a]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-900/10" />
                <GridPattern />
            </div>

            {/* Main content */}
            <motion.div
                style={{ y, opacity: opacityTransform }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-5xl mx-auto px-6 text-center"
            >
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs px-4 py-2 rounded-full mb-8 sm:mb-12 backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span className="tracking-widest uppercase font-black">Available for new projects</span>
                </motion.div>

                {/* Name with gradient */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 sm:mb-8 uppercase">
                    <span className="text-white">Hi, I'm </span>
                    <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Jenil Rupapara
                    </span>
                </h1>

                {/* Animated role text */}
                <div className="text-xl md:text-3xl text-foreground/50 mb-10 sm:mb-16 font-bold h-10 tracking-tight">
                    <TypewriterEffect
                        words={[
                            "I build scalable web ecosystems",
                            "I architect microservices that handle 50K+ users",
                            "I turn ideas into production-ready apps",
                            "I make backends 300% faster",
                        ]}
                    />
                </div>

                {/* Proof bar */}
                <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-foreground/40 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-12 sm:mb-20">
                    <Stat value="4+" label="Years Experience" />
                    <Stat value="50K+" label="Users Served" />
                    <Stat value="99.9%" label="Uptime Delivered" />
                    <Stat value="300%" label="Avg Performance Gain" />
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:row gap-4 sm:gap-6 justify-center">
                    <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ opacity: opacityTransform }}>
                        <Link
                            href="/projects"
                            className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-gray-100 transition-all active:scale-95 text-sm"
                        >
                            View My Work →
                        </Link>
                        <Link
                            href="/contact"
                            className="px-10 py-5 border border-white/10 bg-white/5 backdrop-blur-md text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all active:scale-95 text-sm"
                        >
                            Let's Talk
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20"
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}

function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex items-center gap-2 group cursor-default">
            <span className="text-white font-black text-sm sm:text-base group-hover:text-primary transition-colors italic">{value}</span>
            <span className="font-mono">{label}</span>
        </div>
    );
}
