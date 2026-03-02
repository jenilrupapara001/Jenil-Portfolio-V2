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
            <div className="w-full px-6 md:px-12 lg:px-20 z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">

                {/* Text Content */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-12 md:pt-0 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-[11px] font-black mb-6 sm:mb-10 backdrop-blur-md whitespace-nowrap group hover:bg-primary/20 transition-colors"
                    >
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        <span className="tracking-widest uppercase">3 client slots open for Q2 2026 →</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem] font-black mb-6 sm:mb-8 leading-[0.95] sm:leading-[0.9] tracking-tighter w-full uppercase"
                    >
                        Your SaaS Is <br />
                        Slower And More <br />
                        Fragile Than <br />
                        It Should Be. <br />
                        <span className="text-transparent bg-clip-text bg-[image:linear-gradient(45deg,#4F46E5,#0EA5E9,#A855F7,#4F46E5)] bg-[size:300%_auto] animate-gradient-flow italic">I Fix That.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg sm:text-xl md:text-2xl text-foreground/70 mb-10 sm:mb-12 max-w-3xl leading-relaxed font-medium px-4 sm:px-0"
                    >
                        I'm Jenil   a Senior MERN Stack & Next.js engineer who's helped US and UK startups cut load times, eliminate backend bottlenecks, and ship features 2x faster. Based in India, working your timezone, AWS certified, and available now.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-auto"
                    >
                        <MagneticButton href="/contact" variant="primary">
                            Book a Free 20-Min Call <ArrowRight className="ml-3 sm:ml-4 w-5 h-5 sm:w-6 sm:h-6" />
                        </MagneticButton>
                        <MagneticButton href="/projects" variant="secondary">
                            See Real Results
                        </MagneticButton>
                    </motion.div>
                </div>

                {/* Right Visual Element: Professional Headshot */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="flex-1 w-full max-w-[500px] flex justify-center lg:justify-end relative items-center mt-12 lg:mt-0"
                >
                    <div className="relative w-full aspect-[4/5] md:h-[600px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500 z-10 mix-blend-overlay" />

                        {/* Placeholder for Jenil's Headshot */}
                        <div className="w-full h-full bg-[#111] flex flex-col items-center justify-center border border-white/5">
                            <Zap className="w-12 h-12 text-primary/40 mb-4" />
                            <span className="text-white/40 font-mono text-xs uppercase tracking-widest text-center px-8">
                                [Insert Professional Headshot Here] <br /><br />
                                /public/profile.jpg
                            </span>
                        </div>
                        {/* Actual Image Tag to uncomment when ready:
                        <img 
                            src="/profile.jpg" 
                            alt="Jenil Rupapara - Senior MERN Stack Developer"
                            className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 absolute inset-0"
                        />
                        */}

                        {/* Floating Trust Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl z-20 flex items-center gap-4 hover:border-blue-500/50 transition-colors cursor-pointer"
                        >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm sm:text-base tracking-tight">AWS Certified Professional</p>
                                <p className="text-foreground/50 text-[10px] sm:text-xs font-mono uppercase tracking-widest mt-1">Verified Solutions Architect</p>
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
