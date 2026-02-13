"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, Clock, Layers, Cpu, Terminal, Globe, Search, Activity, Box } from "lucide-react";
import { useRef, useState, useEffect, useMemo } from "react";


const MagneticButton = ({ children, href, variant = "primary" }: any) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const { left, top, width, height } = rect;
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            x.set((e.clientX - centerX) * 0.4);
            y.set((e.clientY - centerY) * 0.4);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className="w-full sm:w-auto"
        >
            <Link
                href={href}
                className={`flex sm:inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl transition-all shadow-xl active:scale-95 ${variant === "primary"
                    ? "bg-primary text-white shadow-primary/20 hover:shadow-primary/40 ring-1 ring-white/20"
                    : "bg-background/50 backdrop-blur-md border border-white/10 text-foreground hover:bg-white/10 ring-1 ring-white/5"
                    }`}
            >
                {children}
            </Link>
        </motion.div>
    );
};

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden selection:bg-primary/30 pt-20 md:pt-0 pb-12 md:pb-0">
            <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">

                {/* Text Content */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-12 md:pt-0 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 rounded-full bg-white/5 border border-white/10 text-primary-foreground text-[8px] sm:text-sm font-black mb-6 sm:mb-10 backdrop-blur-md whitespace-nowrap"
                    >
                        <ShieldCheck className="w-3 h-3 sm:w-5 sm:h-5 text-primary" />
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-widest sm:tracking-wide">AVAILABLE FOR HIGH-STAKES PROJECTS</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-[9rem] xl:text-[11rem] font-black mb-6 sm:mb-10 leading-[0.85] sm:leading-[0.8] tracking-tighter w-full"
                    >
                        I BUILD <br />
                        <span className="text-transparent bg-clip-text bg-[image:linear-gradient(45deg,#4F46E5,#0EA5E9,#A855F7,#4F46E5)] bg-[size:300%_auto] animate-gradient-flow italic">SCALABLE</span> <br />
                        EXPERIENCES.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg sm:text-xl md:text-2xl text-foreground/40 mb-10 sm:mb-14 max-w-2xl leading-relaxed font-medium italic px-4 sm:px-0"
                    >
                        Engineering <span className="text-foreground font-black underline underline-offset-8 decoration-primary/30">high-performance ecosystems</span> where scalability is architectural standard.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center w-full sm:w-auto"
                    >
                        <MagneticButton href="/contact" variant="primary">
                            Work With Me <ArrowRight className="ml-3 sm:ml-4 w-5 h-5 sm:w-6 sm:h-6" />
                        </MagneticButton>
                        <MagneticButton href="/projects" variant="secondary">
                            The Portfolio
                        </MagneticButton>
                    </motion.div>
                </div>

                {/* Right Visual Element: Premium Architecture Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="flex-1 w-full max-w-[600px] flex justify-center lg:justify-end relative items-center lg:mt-0"
                >
                    <div className="relative group perspective-1000 w-full aspect-square sm:aspect-auto sm:h-[450px] md:h-[500px] lg:h-[600px]">
                        {/* Dynamic Glow */}
                        <div className="absolute inset-0 bg-primary/20 rounded-[3rem] sm:rounded-[5rem] blur-[80px] sm:blur-[120px] group-hover:bg-primary/40 transition-all duration-700 animate-pulse" />

                        {/* Image Container */}
                        <motion.div
                            whileHover={{ rotateY: 10, rotateX: -5 }}
                            className="relative w-full h-full bg-gradient-to-br from-[#0c0c0c] to-[#020202] rounded-[3rem] sm:rounded-[5rem] border border-white/10 shadow-3xl flex flex-col z-20 overflow-hidden"
                        >
                            <img
                                src="/hero-architecture.png"
                                alt="Premium Architecture Visualization"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                            />

                            {/* Corner Accents */}
                            <div className="absolute top-8 sm:top-12 left-8 sm:left-12 w-10 sm:w-16 h-1 bg-primary/20" />
                            <div className="absolute top-8 sm:top-12 left-8 sm:left-12 w-1 h-10 sm:h-16 bg-primary/20" />
                            <div className="absolute bottom-8 sm:bottom-12 right-8 sm:bottom-12 w-10 sm:w-16 h-1 bg-accent/20" />
                            <div className="absolute bottom-8 sm:bottom-12 right-8 sm:bottom-12 w-1 h-10 sm:h-16 bg-accent/20" />
                        </motion.div>

                        {/* Overlaid Floating Metrics */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 sm:bottom-[-2%] sm:right-[-2%] p-5 sm:p-8 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] sm:rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] z-40 ring-1 ring-white/10"
                        >
                            <div className="flex flex-col gap-1 sm:gap-2">
                                <span className="text-[8px] sm:text-[10px] font-black text-primary uppercase tracking-[0.3em]">System Reliability</span>
                                <span className="text-2xl sm:text-4xl font-black tabular-nums tracking-tighter text-foreground italic">99.99%</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <style jsx global>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          background-size: 200% auto;
          animation: gradient-flow 5s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
        </section>
    );
}
