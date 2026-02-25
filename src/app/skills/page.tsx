"use client";

import Skills from "@/components/Skills";
import Section from "@/components/Section";
import { Zap, Target, Search, ArrowDown, Cpu, Network, Binary } from "lucide-react";
import { motion } from "framer-motion";

export default function SkillsPage() {
    return (
        <div className="space-y-0 pb-20 md:pb-32">
            {/* Ultra-High-Fidelity Skills Hero (Immersive) */}
            <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20">
                {/* Background Architecture Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] md:w-[60rem] h-[40rem] md:h-[60rem] bg-primary/5 blur-[120px] md:blur-[200px] rounded-full animate-pulse" />
                    <div className="absolute top-0 right-0 w-[30rem] md:w-[40rem] h-[30rem] md:h-[40rem] bg-blue-500/5 blur-[100px] md:blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />
                </div>

                <div className="w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
                        <div className="lg:col-span-12 xl:col-span-8 space-y-8 md:space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-4"
                            >
                                <div className="h-[1px] w-8 md:w-12 bg-primary" />
                                <span className="text-primary font-black uppercase tracking-[0.5em] text-[8px] md:text-[10px]">Technical Capability Hub</span>
                            </motion.div>

                            <div className="space-y-4 md:space-y-6">
                                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[13rem] font-black uppercase tracking-tighter italic leading-[0.85] md:leading-[0.7] select-none">
                                    Technical <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x italic">Arsenal.</span>
                                </h1>
                                <p className="text-lg md:text-3xl text-foreground/40 leading-tight font-medium max-w-2xl px-1 sm:px-0">
                                    Engineering <span className="text-white italic">resilient ecosystems</span> where extreme scalability and fault-tolerance are default architectural standards.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 md:gap-6 pt-2 md:pt-4">
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
                                        className="px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2 md:gap-3"
                                    >
                                        <badge.icon className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                                        <span className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-white/60">{badge.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* <div className="lg:col-span-12 xl:col-span-4 relative group hidden sm:block">
                            
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10 space-y-6 md:space-y-8">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <p className="text-primary font-black uppercase tracking-[0.2em] text-[8px] md:text-[10px]">SLA Status</p>
                                        <p className="text-xl md:text-2xl font-black italic">Active</p>
                                    </div>
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                                        <Zap className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
                                    </div>
                                </div>

                                <div className="space-y-4 md:space-y-6">
                                    {[
                                        { label: "Performance", value: "99th Pct", icon: Zap, color: "text-blue-400" },
                                        { label: "Type Safety", value: "Strict", icon: Target, color: "text-purple-400" },
                                        { label: "Precision", value: "High-Fi", icon: Search, color: "text-green-400" }
                                    ].map((stat) => (
                                        <div key={stat.label} className="flex items-center justify-between border-b border-white/5 pb-3 md:pb-4">
                                            <div className="flex items-center gap-3">
                                                <stat.icon className={`w-3 h-3 md:w-4 md:h-4 ${stat.color}`} />
                                                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-foreground/40">{stat.label}</span>
                                            </div>
                                            <span className="text-xs md:text-sm font-black italic">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div> */}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 text-foreground/20"
                >
                    <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.4em]">Initialize Deep Dive</span>
                    <ArrowDown className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                </motion.div>
            </section >

            {/* Main Skills Grid */}
            < div className="relative pt-12 md:pt-20" >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] md:w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <Skills />
            </div >

            {/* Future Stance Section */}
            < Section id="evolution" title="" className="!py-12 md:!py-28" >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center p-8 md:p-24 rounded-[3rem] md:rounded-[4rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                        <div className="space-y-6 md:space-y-8 relative z-10">
                            <div className="space-y-3 md:space-y-4">
                                <span className="text-primary font-black uppercase tracking-[0.5em] text-[8px] md:text-[10px]">The Technical Horizon</span>
                                <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter italic leading-tight">Continuous <br className="sm:hidden" /><span className="text-primary italic">Transformation.</span></h2>
                            </div>
                            <p className="text-base md:text-xl text-foreground/40 font-medium leading-relaxed">
                                The landscape of software engineering is fluid. I am currently deep-diving into <span className="text-white italic">AI-driven code generation</span> and <span className="text-primary">Cloud-Native Security</span> to stay at the frontier of what is possible.
                            </p>
                        </div>

                        <div className="relative group p-6 md:p-10 bg-black/40 rounded-[2rem] md:rounded-[3rem] border border-white/5 backdrop-blur-xl">
                            <blockquote className="text-lg md:text-3xl italic text-white/90 font-black tracking-tighter leading-tight relative z-10">
                                "The best way to predict the future is to <span className="text-primary">engineer it.</span> Every tool acquired is a building block for the next evolution."
                            </blockquote>
                            <div className="mt-6 md:mt-8 flex items-center gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center text-[10px] md:text-xs font-black uppercase italic">JR</div>
                                <div>
                                    <p className="text-xs md:text-sm font-black uppercase">Jenil Rupapara</p>
                                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">System Architect</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Section >
        </div >
    );
}
