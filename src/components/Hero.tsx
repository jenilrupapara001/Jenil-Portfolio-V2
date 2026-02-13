"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, Clock, Layers, Cpu, Terminal, Globe, Search, Activity, Box } from "lucide-react";
import { useRef, useState, useEffect, useMemo } from "react";

const LiveSystemConsole = ({ isMobile = false }: { isMobile?: boolean }) => {
    const [lines, setLines] = useState<string[]>([]);
    const logs = useMemo(() => [
        "INITIALIZING CORE SYSTEMS...",
        "CONNECTING TO EDGE NETWORKS...",
        "STAGING MICROSERVICES...",
        "DEPLOYING KAFKA CLUSTER...",
        "REH-DEE-ESS CACHE WARMING...",
        "SYSTEM SLA: 99.99%...",
        "OPTIMIZING RENDERING ENGINE...",
        "READY FOR PRODUCTION."
    ], []);

    useEffect(() => {
        let currentLine = 0;
        const interval = setInterval(() => {
            setLines(prev => [...prev.slice(isMobile ? -2 : -4), logs[currentLine]]);
            currentLine = (currentLine + 1) % logs.length;
        }, 1500);
        return () => clearInterval(interval);
    }, [logs, isMobile]);

    return (
        <div className={`w-full h-full flex flex-col ${isMobile ? 'p-6' : 'p-8'} font-mono text-[10px] md:text-sm selection:bg-primary/30 relative`}>
            {/* Console Header */}
            <div className={`flex items-center justify-between ${isMobile ? 'mb-4' : 'mb-8'} border-b border-white/5 pb-4`}>
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                    </div>
                    <span className="text-foreground/20 font-black uppercase tracking-[0.2em] ml-2 text-[8px] md:text-[10px]">System Console v2.0</span>
                </div>
                <div className="flex items-center gap-2 text-primary animate-pulse">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="font-black uppercase tracking-widest text-[8px]">Live</span>
                </div>
            </div>

            {/* Simulated Data Visualization */}
            <div className="flex-grow flex flex-col justify-center gap-4 md:gap-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                        <div className="flex items-center justify-between">
                            <Cpu className="w-3 h-3 text-primary" />
                            <span className="text-[8px] font-black uppercase text-foreground/20">Load</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: ["20%", "60%", "40%", "80%", "30%"] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
                            />
                        </div>
                    </div>
                    <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                        <div className="flex items-center justify-between">
                            <Activity className="w-3 h-3 text-accent" />
                            <span className="text-[8px] font-black uppercase text-foreground/20">Uptime</span>
                        </div>
                        <p className="text-xs md:text-sm font-black italic">99.8%</p>
                    </div>
                </div>

                <div className="space-y-2 md:space-y-3 pl-2">
                    <AnimatePresence mode="popLayout">
                        {lines.map((line, i) => (
                            <motion.div
                                key={`${line}-${i}`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex items-center gap-3"
                            >
                                <span className="text-primary font-black">&gt;</span>
                                <span className="text-foreground/60 uppercase tracking-widest font-black leading-none text-[8px] md:text-[10px] break-all">{line}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom Metrics */}
            {!isMobile && (
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Box className="w-4 h-4 text-foreground/20" />
                        <div className="flex flex-col">
                            <span className="text-[8px] font-black uppercase tracking-widest text-foreground/20">Active Node</span>
                            <span className="text-[10px] font-black italic">Mumbai-S1</span>
                        </div>
                    </div>
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-6 h-6 rounded-full border border-black bg-white/5 backdrop-blur-md flex items-center justify-center">
                                <div className="w-1 h-1 rounded-full bg-primary/40" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

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

                {/* Right Visual Element: Interactive System Console */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="flex-1 w-full max-w-[550px] flex justify-center lg:justify-end relative items-center lg:mt-0"
                >
                    <div className="relative group perspective-1000 w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
                        {/* Dynamic Glow */}
                        <div className="absolute inset-0 bg-primary/20 rounded-[3rem] sm:rounded-[5rem] blur-[80px] sm:blur-[120px] group-hover:bg-primary/40 transition-all duration-700 animate-pulse" />

                        {/* Interactive Console Card */}
                        <motion.div
                            whileHover={{ rotateY: 10, rotateX: -5 }}
                            className="relative w-full h-full bg-gradient-to-br from-[#0c0c0c] to-[#020202] rounded-[3rem] sm:rounded-[5rem] border border-white/10 shadow-3xl flex flex-col z-20 overflow-hidden"
                        >
                            <LiveSystemConsole isMobile={typeof window !== 'undefined' && window.innerWidth < 1024} />

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
                                <span className="text-[8px] sm:text-[10px] font-black text-primary uppercase tracking-[0.3em]">SLA Status</span>
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
