"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { Users, Code2, Globe2, Award, Zap, ShieldCheck, Target } from "lucide-react";

const stats = [
    { label: "Production Apps", value: "10+", icon: AppWindowIcon, color: "text-primary" },
    { label: "Users Impacted", value: "10k+", icon: Users, color: "text-accent" },
    { label: "System Uptime", value: "99.9%", icon: Zap, color: "text-yellow-400" },
    { label: "Certifications", value: "5+", icon: Award, color: "text-green-400" },
];

function AppWindowIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M10 4v4" />
            <path d="M2 8h20" />
            <path d="M6 4v4" />
        </svg>
    )
}

export default function About() {
    return (
        <Section id="about" title="The Technical Identity" className="!py-16 md:!py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
                {/* Narrative Left Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 md:space-y-8"
                >
                    <div className="space-y-4 md:space-y-6">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none italic">
                            Architecting <span className="text-primary italic">Autonomous</span> ecosystems.
                        </h3>
                        <div className="h-1 w-16 md:w-20 bg-primary rounded-full" />
                    </div>

                    <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none space-y-4 md:space-y-6">
                        <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
                            I specialize in bridging the gap between <span className="text-white font-bold">complex business logic</span> and <span className="text-white font-bold">high-performance engineering</span>. My focus is not just on writing code, but on building systems that scale, endure, and empower.
                        </p>
                        <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                            With deep expertise in the <span className="text-primary">MERN Stack</span> and <span className="text-accent">Event-Driven Architectures</span>, I've delivered solutions that handle thousands of real-time events, automate mission-critical workflows, and provide seamless user experiences.
                        </p>
                        <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
                            {[
                                { label: "Performance First", icon: Zap },
                                { label: "Security Centric", icon: ShieldCheck },
                                { label: "Scalable by Design", icon: Target }
                            ].map((pill) => (
                                <span key={pill.label} className="flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                                    <pill.icon className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                                    {pill.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Stats Right Column */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 w-full">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="relative group p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl overflow-hidden hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                                <stat.icon className="w-24 h-24 md:w-32 md:h-32" />
                            </div>

                            <stat.icon className={`w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-6 ${stat.color}`} />
                            <h4 className="text-3xl md:text-5xl font-black tracking-tighter mb-2 italic">
                                {stat.value}
                            </h4>
                            <p className="text-foreground/40 font-bold uppercase tracking-widest text-[8px] md:text-[10px] leading-tight">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}

                    {/* Location Card (Wide) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="col-span-2 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-r from-primary/10 via-white/[0.02] to-transparent border border-white/10 backdrop-blur-3xl flex items-center justify-between group overflow-hidden"
                    >
                        <div className="flex-1">
                            <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-1 md:mb-2">Based in</p>
                            <h4 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter">Surat, Gujarat, IN</h4>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 animate-pulse" />
                            <Globe2 className="w-10 h-10 md:w-12 md:h-12 relative z-10 text-primary group-hover:rotate-12 transition-transform duration-700" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
