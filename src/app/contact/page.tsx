"use client";

import Contact from "@/components/Contact";
import Section from "@/components/Section";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="pt-24 md:pt-32 pb-24 md:pb-32 space-y-24">
            {/* High-Impact Contact Hero */}
            <Section id="contact-hero" title="" className="!py-12 md:!py-20">
                <div className="w-full relative">
                    <div className="absolute top-0 left-0 w-[30rem] md:w-[50rem] h-[30rem] md:h-[50rem] bg-primary/10 blur-[150px] md:blur-[250px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 md:gap-16 mb-20 md:mb-24 relative z-10">
                        <div className="max-w-4xl space-y-8">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-primary font-black uppercase tracking-[0.5em] text-[10px] md:text-xs block"
                            >
                                Secure Protocol
                            </motion.span>
                            <h1 className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-tighter italic leading-[0.8] select-none">
                                Build For <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x italic">Dominance.</span>
                            </h1>
                            <p className="text-xl md:text-3xl text-foreground/50 leading-tight font-medium max-w-2xl">
                                Let's transform your <span className="text-white italic">technical vision</span> into a market-leading reality.
                            </p>
                        </div>

                        <div className="flex flex-col items-start lg:items-end gap-6 h-full pb-4">
                            <div className="p-1.5 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
                                <div className="px-6 py-4 flex items-center gap-4 bg-black/40 rounded-xl relative overflow-hidden group">
                                    <div className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80 relative z-10">
                                        Personal Review Active
                                    </span>
                                    <div className="absolute inset-0 bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Main Contact Section */}
            <div className="relative">
                {/* Decorative background glow for the form area */}
                <div className="absolute inset-0 bg-white/[0.01] border-y border-white/5" />
                <Contact />
            </div>

            {/* Availability Detail */}
            <Section id="availability" title="" className="!py-20 md:!py-32">
                <div className="w-full text-center space-y-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20">Response SLA</p>
                    <p className="text-lg md:text-2xl text-foreground/40 font-bold uppercase tracking-widest max-w-xl mx-auto leading-relaxed">
                        I typically respond to technical and career inquiries within <span className="text-white italic">24 hours</span>.
                    </p>
                </div>
            </Section>
        </div>
    );
}
