"use client";

import Education from "@/components/Education";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, ShieldCheck, Cpu, Code2, BrainCircuit } from "lucide-react";

export default function EducationPage() {
    return (
        <div className="pt-24 pb-32 space-y-24">
            {/* Education Hero */}
            <Section id="edu-hero" title="">
                <div className="max-w-7xl mx-auto px-4 relative">
                    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] bg-primary/10 blur-[200px] rounded-full pointer-events-none" />

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 border-b border-white/10 pb-20 relative z-10">
                        <div className="max-w-4xl space-y-10">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-primary font-black uppercase tracking-[0.5em] text-[10px] block"
                            >
                                Academic Genesis
                            </motion.span>
                            <h1 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter italic leading-[0.8] select-none">
                                Knowledge <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x italic">Foundations.</span>
                            </h1>
                            <p className="text-xl md:text-3xl text-foreground/50 leading-tight font-medium max-w-2xl">
                                Synthesizing <span className="text-white italic">theoretical rigor</span> with industry-validated simulations to engineer systems of the future.
                            </p>
                        </div>

                        <div className="flex flex-col items-start lg:items-end gap-2">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/60">Global Validation</span>
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-black bg-white/[0.05] backdrop-blur-md flex items-center justify-center">
                                        <AwardIcon className="w-5 h-5 text-primary/60" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Content Sections */}
            <Education />

            {/* Knowledge Domains Refined */}
            <Section id="learning-path" title="">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-20 space-y-4">
                        <p className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Intellectual Stack</p>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Knowledge Domains</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                domain: "System Engineering",
                                desc: "Architecting high-availability systems with focused expertise in MERN and microservices.",
                                icon: Cpu,
                                color: "text-primary",
                                bg: "bg-primary/5",
                            },
                            {
                                domain: "Cloud Intelligence",
                                desc: "Leveraging AWS APAC best practices to build scalable, resilient cloud infrastructures.",
                                icon: BrainCircuit,
                                color: "text-accent",
                                bg: "bg-accent/5",
                            },
                            {
                                domain: "Cyber Resilience",
                                desc: "Integrating security-by-design principles validated through Deloitte & Mastercard simulations.",
                                icon: ShieldCheck,
                                color: "text-red-400",
                                bg: "bg-red-400/5",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.domain}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:border-primary/20 transition-all duration-700"
                            >
                                <div className={`w-16 h-16 rounded-[1.5rem] ${item.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                    <item.icon className={`w-8 h-8 ${item.color}`} />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-6 group-hover:text-primary transition-colors">
                                    {item.domain}
                                </h3>
                                <p className="text-foreground/40 text-sm leading-relaxed font-bold uppercase tracking-widest">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}

function AwardIcon(props: any) {
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
            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
            <circle cx="12" cy="8" r="6" />
        </svg>
    )
}
