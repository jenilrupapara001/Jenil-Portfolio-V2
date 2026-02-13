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
        <Section id="about" title="The Technical Identity">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Narrative Left Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none italic">
                            Architecting <span className="text-primary italic">Autonomous</span> ecosystems.
                        </h3>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            I specialize in bridging the gap between <span className="text-white font-bold">complex business logic</span> and <span className="text-white font-bold">high-performance engineering</span>. My focus is not just on writing code, but on building systems that scale, endure, and empower.
                        </p>
                        <p className="text-foreground/70 leading-relaxed">
                            With deep expertise in the <span className="text-primary">MERN Stack</span> and <span className="text-accent">Event-Driven Architectures</span>, I've delivered solutions that handle thousands of real-time events, automate mission-critical workflows, and provide seamless user experiences.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            {[
                                { label: "Performance First", icon: Zap },
                                { label: "Security Centric", icon: ShieldCheck },
                                { label: "Scalable by Design", icon: Target }
                            ].map((pill) => (
                                <span key={pill.label} className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs font-bold uppercase tracking-widest">
                                    <pill.icon className="w-4 h-4 text-primary" />
                                    {pill.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Stats Right Column */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="relative group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl overflow-hidden hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                                <stat.icon className="w-32 h-32" />
                            </div>

                            <stat.icon className={`w-10 h-10 mb-6 ${stat.color}`} />
                            <h4 className="text-4xl md:text-5xl font-black tracking-tighter mb-2">
                                {stat.value}
                            </h4>
                            <p className="text-foreground/40 font-bold uppercase tracking-widest text-[10px]">
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
                        className="sm:col-span-2 p-8 rounded-[2.5rem] bg-gradient-to-r from-primary/10 via-white/[0.02] to-transparent border border-white/10 backdrop-blur-3xl flex items-center justify-between group overflow-hidden"
                    >
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">Based in</p>
                            <h4 className="text-2xl font-black italic uppercase tracking-tighter">Surat, Gujarat, IN</h4>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 animate-pulse" />
                            <Globe2 className="w-12 h-12 relative z-10 text-primary group-hover:rotate-12 transition-transform duration-700" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
