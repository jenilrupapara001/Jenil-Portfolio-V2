"use client";

import Experience from "@/components/Experience";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Zap, Briefcase, Cpu, Award } from "lucide-react";

export default function ExperiencePage() {
    return (
        <div className="pt-20 md:pt-24 pb-20 md:pb-32 space-y-16 md:space-y-24">
            {/* Career Hero */}
            <Section id="exp-hero" title="" className="!py-16 md:!py-28">
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="absolute top-0 right-0 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-accent/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 md:gap-12 mb-16 md:mb-20 border-b border-white/10 pb-16 md:pb-20 relative z-10">
                        <div className="max-w-3xl space-y-6 md:space-y-8">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-primary font-black uppercase tracking-[0.5em] text-[8px] md:text-[10px] block"
                            >
                                Career Trajectory
                            </motion.span>
                            <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-tighter italic leading-[0.9] md:leading-[0.8]">
                                Impact <br />
                                <span className="text-primary italic">Engineered.</span>
                            </h1>
                            <p className="text-lg md:text-3xl text-foreground/50 leading-tight font-medium">
                                I don't just fill roles; I build <span className="text-white">autonomous systems</span> that redefine operational efficiency.
                            </p>
                        </div>

                        <div className="flex flex-col items-start lg:items-end gap-1 md:gap-2">
                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-primary">Tenure Status</span>
                            <span className="text-2xl sm:text-4xl md:text-6xl font-black italic tracking-tighter text-foreground/20 italic">Level-01 - Present</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                        {[
                            { label: "Efficiency Uplift", value: "150%", icon: TrendingUp, color: "text-primary" },
                            { label: "Critical Failures", value: "0%", icon: ShieldCheck, color: "text-accent" },
                            { label: "Weekly Dev-Time Saved", value: "10hr+", icon: Zap, color: "text-yellow-400" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-primary/20 transition-all duration-500"
                            >
                                <stat.icon className={`w-8 h-8 md:w-12 md:h-12 mb-4 md:mb-6 ${stat.color} group-hover:scale-110 transition-transform`} />
                                <h3 className="text-3xl md:text-5xl font-black tracking-tighter italic mb-2">{stat.value}</h3>
                                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Main Timeline Section */}
            <div className="bg-white/[0.01] border-y border-white/5 py-12 md:py-20">
                <Experience />
            </div>

            {/* Delivery Framework Visualization */}
            <Section id="framework" title="" className="!py-16 md:!py-28">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mb-12 md:mb-20 text-center max-w-2xl mx-auto">
                        <p className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-xs mb-4">The Standard</p>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Delivery Framework</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative">
                        {/* Connecting Visual Line */}
                        <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-white/10 hidden md:block" />

                        {[
                            { phase: "01", name: "Audit", desc: "Technical debt identification.", icon: Cpu, color: "text-primary" },
                            { phase: "02", name: "Blueprint", desc: "High-velocity architecture.", icon: Briefcase, color: "text-accent" },
                            { phase: "03", name: "Execute", desc: "Production-grade coding.", icon: Zap, color: "text-yellow-400" },
                            { phase: "04", name: "Optimize", desc: "Post-deployment refinement.", icon: Award, color: "text-green-400" },
                        ].map((step, i) => (
                            <motion.div
                                key={step.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/[0.03] border border-white/10 group hover:border-primary/40 transition-all duration-700 relative z-10"
                            >
                                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20 mb-3 md:mb-4 block group-hover:text-primary transition-colors">Phase {step.phase}</span>
                                <step.icon className={`w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-6 ${step.color} group-hover:scale-110 transition-transform duration-500`} />
                                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter italic mb-3 md:mb-4">{step.name}</h3>
                                <p className="text-[10px] text-foreground/40 leading-relaxed font-bold uppercase tracking-widest">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
