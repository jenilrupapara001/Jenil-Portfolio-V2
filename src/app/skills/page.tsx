"use client";

import Skills from "@/components/Skills";
import Section from "@/components/Section";
import { Zap, Target, Search, ArrowDown, Cpu, Network, Binary } from "lucide-react";
import { motion } from "framer-motion";

export default function SkillsPage() {
    return (
        <div className="space-y-0 pb-32">
            {/* Ultra-High-Fidelity Skills Hero (Immersive) */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
                {/* Background Architecture Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-primary/5 blur-[200px] rounded-full animate-pulse" />
                    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />
                </div>

                <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-8 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-4"
                            >
                                <div className="h-[1px] w-12 bg-primary" />
                                <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Technical Capability Hub</span>
                            </motion.div>

                            <div className="space-y-6">
                                <h1 className="text-7xl md:text-[13rem] font-black uppercase tracking-tighter italic leading-[0.7] select-none">
                                    Technical <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x italic">Arsenal.</span>
                                </h1>
                                <p className="text-xl md:text-3xl text-foreground/40 leading-tight font-medium max-w-2xl">
                                    Engineering <span className="text-white italic">resilient ecosystems</span> where extreme scalability and fault-tolerance are default architectural standards.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-6 pt-4">
                                {[
                                    { icon: Cpu, label: "Core Compute" },
                                    { icon: Network, label: "Event Systems" },
                                    { icon: Binary, label: "Data Integrity" }
                                ].map((badge, i) => (
                                    <motion.div
                                        key={badge.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3"
                                    >
                                        <badge.icon className="w-4 h-4 text-primary" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/60">{badge.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-4 relative group">
                            {/* Perspective Tech Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="relative p-12 rounded-[4rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative z-10 space-y-8">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <p className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">SLA Status</p>
                                            <p className="text-2xl font-black italic">Active</p>
                                        </div>
                                        <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                                            <Zap className="w-6 h-6 animate-pulse" />
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            { label: "Performance", value: "99th Pct", icon: Zap, color: "text-blue-400" },
                                            { label: "Type Safety", value: "Strict", icon: Target, color: "text-purple-400" },
                                            { label: "Precision", value: "High-Fi", icon: Search, color: "text-green-400" }
                                        ].map((stat) => (
                                            <div key={stat.label} className="flex items-center justify-between border-b border-white/5 pb-4">
                                                <div className="flex items-center gap-3">
                                                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">{stat.label}</span>
                                                </div>
                                                <span className="text-sm font-black italic">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-foreground/20"
                >
                    <span className="text-[8px] font-black uppercase tracking-[0.4em]">Initialize Deep Dive</span>
                    <ArrowDown className="w-4 h-4 text-primary" />
                </motion.div>
            </section>

            {/* Main Skills Grid (Pre-Redesigned) */}
            <div className="relative pt-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <Skills />
            </div>

            {/* Future Stance Section */}
            <Section id="evolution" title="">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto px-4"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                        <div className="space-y-8 relative z-10">
                            <div className="space-y-4">
                                <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">The Technical Horizon</span>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Continuous <span className="text-primary italic">Transformation.</span></h2>
                            </div>
                            <p className="text-lg md:text-xl text-foreground/40 font-medium leading-relaxed">
                                The landscape of software engineering is fluid. I am currently deep-diving into <span className="text-white italic">AI-driven code generation</span> and <span className="text-primary">Cloud-Native Security</span> to stay at the absolute frontier of what is possible.
                            </p>
                        </div>

                        <div className="relative group p-10 bg-black/40 rounded-[3rem] border border-white/5 backdrop-blur-xl">
                            <blockquote className="text-2xl md:text-3xl italic text-white/90 font-black tracking-tighter leading-tight relative z-10">
                                "The best way to predict the future is to <span className="text-primary">engineer it.</span> Every tool acquired is a building block for the next evolution."
                            </blockquote>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xs font-black uppercase italic">JR</div>
                                <div>
                                    <p className="text-sm font-black uppercase">Jenil Rupapara</p>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">System Architect</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}
