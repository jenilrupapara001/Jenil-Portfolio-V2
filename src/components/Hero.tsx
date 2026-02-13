"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, Clock, Layers } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const TechIcon = ({ icon: Icon, label, color, initialX, initialY, delay }: any) => (
    <motion.div
        initial={{ x: initialX, y: initialY, opacity: 0 }}
        animate={{
            y: [initialY, initialY - 15, initialY],
            opacity: 1
        }}
        transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
            opacity: { duration: 1, delay }
        }}
        className="absolute p-4 bg-background/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex items-center gap-3 z-30 group hover:scale-110 transition-transform cursor-pointer pointer-events-auto"
        style={{ left: initialX, top: initialY }}
    >
        <div className={`w-10 h-10 rounded-lg bg-${color}-500/10 flex items-center justify-center text-${color}-500 shadow-inner group-hover:bg-${color}-500/20 transition-colors`}>
            <Icon className="w-6 h-6" />
        </div>
        <span className="font-bold text-sm bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">{label}</span>
    </motion.div>
);

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
        >
            <Link
                href={href}
                className={`inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl transition-all shadow-xl active:scale-95 ${variant === "primary"
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
        <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden selection:bg-primary/30">
            <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between gap-12 h-screen pt-20">

                {/* Tech Orbs Layer - Absolute Positioning restricted to container */}
                {/* <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
                    <TechIcon icon={Layers} label="MERN Expert" color="blue" initialX="5%" initialY="20%" delay={0.2} />
                    <TechIcon icon={Zap} label="Speed Optimized" color="yellow" initialX="2%" initialY="70%" delay={0.5} />
                    <TechIcon icon={Clock} label="Workflow Automation" color="green" initialX="85%" initialY="15%" delay={0.8} />
                </div> */}

                {/* Text Content */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-12 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-primary-foreground text-sm font-bold mb-10 backdrop-blur-md"
                    >
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-wide">AVAILABLE FOR HIGH-STAKES PROJECTS</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl lg:text-9xl font-black mb-10 leading-[0.9] tracking-tighter"
                    >
                        I BUILD <br />
                        <span className="text-transparent bg-clip-text bg-[image:linear-gradient(45deg,#4F46E5,#0EA5E9,#A855F7,#4F46E5)] bg-[size:300%_auto] animate-gradient-flow italic">SCALABLE</span> <br />
                        EXPERIENCES.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-foreground/60 mb-14 max-w-2xl leading-relaxed font-light"
                    >
                        Expert in crafting <span className="text-foreground font-medium underline underline-offset-8 decoration-primary/30">high-performance web ecosystems</span> using the MERN stack. I transform technical debt into <span className="text-primary font-medium italic">operational leverage</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-8 items-center"
                    >
                        <MagneticButton href="/contact" variant="primary">
                            Work With Me <ArrowRight className="ml-4 w-6 h-6" />
                        </MagneticButton>
                        <MagneticButton href="/projects" variant="secondary">
                            The Portfolio
                        </MagneticButton>
                    </motion.div>
                </div>

                {/* Right Visual Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="flex-1 hidden md:flex justify-end relative items-center"
                >
                    <div className="relative group perspective-1000">
                        {/* Dynamic Glow */}
                        <div className="absolute inset-0 bg-primary/20 rounded-[5rem] blur-[100px] group-hover:bg-primary/40 transition-all duration-700 animate-pulse" />

                        {/* Character/Avatar Card */}
                        <motion.div
                            whileHover={{ rotateY: 15, rotateX: -5 }}
                            className="relative w-80 h-[450px] lg:w-[450px] lg:h-[550px] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[5rem] border border-white/10 shadow-3xl flex items-center justify-center p-4 z-20"
                        >
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none rounded-[5rem]" />
                            <div className="text-[12rem] lg:text-[15rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent select-none drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]">
                                JR
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-12 left-12 w-16 h-1 bg-primary/40" />
                            <div className="absolute top-12 left-12 w-1 h-16 bg-primary/40" />
                            <div className="absolute bottom-12 right-12 w-16 h-1 bg-accent/40" />
                            <div className="absolute bottom-12 right-12 w-1 h-16 bg-accent/40" />
                        </motion.div>

                        {/* Overlaid Floating Metrics */}
                        <motion.div
                            animate={{ y: [0, -25, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-[-10%] right-[-10%] p-8 bg-background/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] z-40 ring-1 ring-white/10"
                        >
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Efficiency Boost</span>
                                <span className="text-5xl font-black tabular-nums tracking-tighter text-foreground">+50%</span>
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
