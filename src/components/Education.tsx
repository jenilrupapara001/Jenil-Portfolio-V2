"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { Award, GraduationCap, ShieldCheck, Cpu, Cloud, Database, ExternalLink } from "lucide-react";

const certifications = [
    {
        title: "Cyber Job Simulation",
        issuer: "Deloitte Australia",
        date: "Feb 2026",
        id: "uGNNnbFpzqxR97nwv",
        category: "Cybersecurity",
        icon: ShieldCheck,
        color: "text-red-400",
    },
    {
        title: "Technology Job Simulation",
        issuer: "Deloitte Australia",
        date: "Dec 2025",
        id: "dHNvRbXufgf7QGx7T",
        category: "Software Engineering",
        icon: Cpu,
        color: "text-primary",
    },
    {
        title: "Solutions Architecture Simulation",
        issuer: "AWS APAC",
        date: "Mar 2025",
        id: "EBDFvpsuXaQJXLfoJ",
        category: "Cloud",
        icon: Cloud,
        color: "text-yellow-400",
    },
    {
        title: "Advanced Software Engineering",
        issuer: "Walmart USA",
        date: "Dec 2025",
        id: "DQwdtYbTafs7r8MoG",
        category: "Software Engineering",
        skills: ["Data Structures", "Database Design"],
        icon: Database,
        color: "text-blue-400",
    },
    {
        title: "Front-End Software Engineering",
        issuer: "Skyscanner",
        date: "Dec 2025",
        id: "E6FiHzZRhWimFqKFy",
        category: "Software Engineering",
        icon: Cpu,
        color: "text-primary",
    },
    {
        title: "Cloud Platform Job Simulation",
        issuer: "Verizon",
        date: "Mar 2025",
        id: "36aRTDxvKTjop4AE6",
        category: "Cloud",
        skills: ["Cloud Architecture"],
        icon: Cloud,
        color: "text-accent",
    },
    {
        title: "Software Engineer",
        issuer: "HackerRank",
        date: "Mar 2025",
        category: "Software Engineering",
        skills: ["SQL"],
        icon: Award,
        color: "text-green-400",
    },
];

export default function Education() {
    return (
        <div className="space-y-32">
            {/* Academic Foundation */}
            <Section id="academic" title="">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center gap-4 mb-12">
                        <GraduationCap className="w-10 h-10 text-primary" />
                        <h2 className="text-4xl font-black uppercase tracking-tighter italic">Academic Foundation</h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-10 md:p-16 rounded-[4rem] bg-gradient-to-br from-primary/10 via-white/[0.02] to-transparent border border-white/10 backdrop-blur-3xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/60">Bachelor of Technology</span>
                                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic group-hover:text-primary transition-colors">Computer Science <br /> & Engineering</h3>
                                </div>
                                <div className="flex flex-wrap gap-6 pt-4">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-foreground/40 text-left">Tenure</p>
                                        <p className="text-xl font-bold italic">2021 - 2025</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-foreground/40 text-left">Academic Rank</p>
                                        <p className="text-xl font-bold italic text-white/90">GPA: 8.5 / 10.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:text-right flex flex-col justify-between items-start md:items-end">
                                <div className="p-6 rounded-[2rem] bg-black/40 border border-white/5 backdrop-blur-md">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 mb-2">Core Focus</p>
                                    <ul className="text-xs font-bold space-y-2 text-foreground/60 uppercase tracking-widest">
                                        <li>• Distributed Systems</li>
                                        <li>• Cloud Computing</li>
                                        <li>• Data Structures & Algorithms</li>
                                    </ul>
                                </div>
                                <div className="mt-8 text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                                    <div className="w-12 h-[1px] bg-primary/20" />
                                    Active Engineering Mode
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Certifications Showroom */}
            <Section id="certifications" title="">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Award className="w-10 h-10 text-primary" />
                                <h2 className="text-4xl font-black uppercase tracking-tighter italic">Professional Licenses</h2>
                            </div>
                            <p className="text-foreground/40 font-medium max-w-lg">
                                Industry-validated certifications and simulations verifying production-level engineering capability across Cyber, Cloud, and Software Engineering.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.title + cert.issuer}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative"
                            >
                                <div className="h-full p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden flex flex-col">

                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-8">
                                        <div className={`p-4 rounded-2xl bg-white/[0.03] ${cert.color}`}>
                                            <cert.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-foreground/20 italic">
                                            {cert.date}
                                        </span>
                                    </div>

                                    {/* Body */}
                                    <div className="space-y-3 flex-grow">
                                        <h3 className="text-xl font-black uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors">
                                            {cert.title}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-bold text-white/50">{cert.issuer}</span>
                                            <div className="w-1 h-1 rounded-full bg-white/10" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">{cert.category}</span>
                                        </div>
                                    </div>

                                    {/* Skills Section */}
                                    {cert.skills && (
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {cert.skills.map(skill => (
                                                <span key={skill} className="text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-white/[0.03] rounded-md text-foreground/40">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Footer */}
                                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-[8px] font-black uppercase tracking-[0.3em] text-foreground/20">Credential ID</p>
                                            <p className="text-[10px] font-mono font-bold text-foreground/40">{cert.id || "Verified"}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                            <ExternalLink className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
