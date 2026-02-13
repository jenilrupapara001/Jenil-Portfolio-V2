"use client";

import Section from "@/components/Section";
import ProjectsGrid from "@/components/ProjectsGrid";
import { motion } from "framer-motion";


export default function ProjectsPage() {
    return (
        <div className="pt-24 pb-32 space-y-24">
            {/* High-Impact Hero */}
            <Section id="projects-hero" title="">
                <div className="max-w-7xl mx-auto px-4 relative">
                    {/* Background Decorative Element */}
                    <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 relative z-10">
                        <div className="max-w-3xl space-y-10">
                            <div className="space-y-2">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-primary font-black uppercase tracking-[0.5em] text-[10px] block"
                                >
                                    Selected Works
                                </motion.span>
                                <h1 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter italic leading-[0.75] select-none">
                                    The <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary/80 animate-gradient-x italic">Solutions</span>
                                </h1>
                            </div>

                            <p className="text-xl md:text-3xl text-foreground/50 leading-tight font-medium max-w-xl">
                                Engineering systems that transform <span className="text-white italic">bottlenecks</span> into automated competitive advantages.
                            </p>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-4 relative">
                            <div className="flex flex-col items-start md:items-end">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 mb-1">Catalog Edition</span>
                                <span className="text-7xl md:text-8xl font-black italic tracking-tighter text-white/[0.03] leading-none">v1.0</span>
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest text-foreground/30 flex items-center gap-4">
                                <span>2024</span>
                                <div className="h-[1px] w-8 bg-white/10" />
                                <span>2026</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4">
                    <ProjectsGrid />
                </div>
            </Section>

            {/* Bottom CTA Section */}
            <Section id="projects-cta" title="">
                <div className="max-w-4xl mx-auto px-4 py-20 rounded-[4rem] bg-white/[0.01] border border-white/5 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-y-20" />
                    <h2 className="relative z-10 text-4xl font-black uppercase tracking-tighter italic mb-8">Have a complex bottleneck?</h2>
                    <p className="relative z-10 text-foreground/50 mb-12 max-w-xl mx-auto leading-relaxed">
                        I specialize in taking messy, manual workflows and turning them into streamlined, high-performance digital ecosystems.
                    </p>
                    <a
                        href="/contact"
                        className="relative z-10 inline-flex items-center gap-4 px-12 py-6 bg-primary text-white font-black uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_-10px_rgba(var(--primary-rgb),0.5)]"
                    >
                        Start a Project
                    </a>
                </div>
            </Section>
        </div>
    );
}
