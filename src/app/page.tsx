"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Zap, Globe2, Sparkles, Trophy } from "lucide-react";
import { projects } from "@/utils/projects";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="space-y-32 pb-32">
            <Hero />

            {/* Social Proof / Trust Section: High-Fidelity Validation */}
            <Section id="trust" title="" className="py-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/[0.01] border-y border-white/5" />
                <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-wrap justify-center md:justify-between items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 group"
                    >
                        <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Credentialed</p>
                            <p className="text-sm font-black italic">AWS Certified</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-4 group"
                    >
                        <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                            <Trophy className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Performance</p>
                            <p className="text-sm font-black italic">150% Efficiency Uplift</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-4 group"
                    >
                        <div className="p-4 rounded-2xl bg-secondary-foreground/10 border border-secondary-foreground/20 group-hover:bg-secondary-foreground/20 transition-colors">
                            <Globe2 className="w-6 h-6 text-secondary-foreground" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Global Reach</p>
                            <p className="text-sm font-black italic">Active Indian Standard Time</p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Impact Hub: Driving Measurable Results */}
            <Section id="about-hub" title="">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <motion.span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Technical Philosophy</motion.span>
                            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-[0.85]">
                                Engineering <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x italic">Operational Velocity.</span>
                            </h3>
                        </div>

                        <p className="text-xl md:text-2xl text-foreground/50 leading-relaxed font-medium">
                            I build scalable, autonomous ecosystems that transform complex business bottlenecks into high-performance engineering standards.
                        </p>

                        <div className="pt-6">
                            <Link
                                href="/about"
                                className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-primary"
                            >
                                Read Technical Identity
                                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </div>
                    </motion.div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full scale-110 opacity-50" />
                        <div className="relative p-12 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-12">
                            <div className="space-y-3">
                                <Zap className="w-8 h-8 text-primary" />
                                <p className="text-5xl font-black italic tracking-tighter">50%</p>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">Faster Load Metrics</p>
                            </div>
                            <div className="space-y-3">
                                <Sparkles className="w-8 h-8 text-accent" />
                                <p className="text-5xl font-black italic tracking-tighter">10H+</p>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">Saved Weekly via Automation</p>
                            </div>
                            <div className="sm:col-span-2 pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 italic">Standardized Impact</span>
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-white/10 backdrop-blur-md" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Featured Solutions: High-Fidelity Preview */}
            <Section id="projects-hub" title="" className="relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-12">
                        <div className="space-y-4">
                            <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Featured Deliverables</span>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">High-Impact <span className="text-primary italic">Case Studies.</span></h2>
                        </div>
                        <Link href="/projects" className="text-xs font-black uppercase tracking-[0.2em] hover:text-primary transition-colors pr-6 border-r border-white/10">
                            View Project Hub
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {projects.slice(0, 3).map((project, index) => (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-[30rem] rounded-[3.5rem] overflow-hidden bg-black border border-white/5"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                <div className="absolute inset-0 p-10 flex flex-col justify-end gap-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{project.category}</span>
                                        <h4 className="text-3xl font-black uppercase tracking-tighter italic">{project.title}</h4>
                                        <p className="text-xs font-bold text-white/40 uppercase tracking-widest leading-relaxed line-clamp-2">{project.impact}</p>
                                    </div>
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary transition-all active:scale-95"
                                    >
                                        Explore Results
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Final Call To Action: The Partnership Initiation */}
            <Section id="cta" className="px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto relative group"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-[150px] rounded-[5rem] group-hover:scale-110 transition-transform duration-1000" />

                    <div className="relative bg-black border border-white/10 rounded-[5rem] p-16 md:p-32 overflow-hidden text-center space-y-12">
                        <div className="space-y-6">
                            <motion.p className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Final Protocol</motion.p>
                            <h2 className="text-5xl md:text-[10rem] font-black uppercase tracking-tighter italic leading-[0.8] select-none">
                                Ready To <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x italic">Engineer Victory?</span>
                            </h2>
                            <p className="text-xl md:text-3xl text-foreground/40 font-medium max-w-2xl mx-auto leading-tight italic">
                                I review all technical inquiries <span className="text-white">personally</span>. Let's start the partnership phase today.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            <Link
                                href="/contact"
                                className="px-12 py-6 bg-primary text-white rounded-full font-black text-xs uppercase tracking-[0.4em] hover:shadow-[0_0_60px_-10px_rgba(var(--primary-rgb),0.8)] transition-all active:scale-95"
                            >
                                Initialize Connect
                            </Link>
                            <Link
                                href="/projects"
                                className="px-12 py-6 bg-white/5 border border-white/10 text-white rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-white/10 transition-all active:scale-95"
                            >
                                Review Portfolio
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}