"use client";

import { use } from "react";
import { Project } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ChevronLeft, Sparkles, Target, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetailView({ project }: { project: Project }) {
    return (
        <div className="pt-8 md:pt-12 pb-16 md:pb-24">
            <div className="max-w-5xl mx-auto px-6">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-primary hover:text-white mb-8 md:mb-12 group transition-colors text-xs font-black uppercase tracking-widest"
                >
                    <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                    Back to Cluster
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12 md:space-y-20"
                >
                    <div className="space-y-4 md:space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-primary/60">Project Specification v1.0</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">{project.title}</h1>
                    </div>

                    <div className="relative aspect-video rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/10 bg-white/[0.02] shadow-3xl">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                            priority
                            sizes="(max-width: 1280px) 100vw, 1280px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
                        <div className="lg:col-span-8 space-y-12 md:space-y-20">
                            <section className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-[10px] font-black italic text-primary">01</div>
                                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic">The Bottleneck</h2>
                                </div>
                                <p className="text-foreground/60 leading-relaxed text-lg md:text-2xl font-medium italic border-l-2 border-primary/20 pl-6 md:pl-8">
                                    "{project.problem}"
                                </p>
                            </section>

                            <section className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-[10px] font-black italic text-accent">02</div>
                                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic">The Architecture</h2>
                                </div>
                                <p className="text-foreground/40 leading-relaxed text-base md:text-lg font-medium">
                                    {project.solution}
                                </p>
                            </section>

                            <section>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-8 md:p-12 bg-primary/5 rounded-[2.5rem] md:rounded-[3.5rem] border border-primary/20 relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                                    <div className="relative z-10 space-y-4 md:space-y-6">
                                        <div className="flex items-center gap-4">
                                            <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary animate-pulse" />
                                            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter italic">Engineered Impact</h2>
                                        </div>
                                        <p className="text-2xl md:text-5xl font-black text-foreground italic tracking-tighter leading-tight">
                                            {project.impact}
                                        </p>
                                    </div>
                                </motion.div>
                            </section>
                        </div>

                        <div className="lg:col-span-4 space-y-10 md:space-y-12 lg:sticky lg:top-32">
                            <div className="p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl space-y-8">
                                <div>
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 md:px-4 py-2 bg-white/[0.03] border border-white/5 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest text-foreground/60 transition-colors hover:text-white hover:border-white/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-[1px] w-full bg-white/5" />

                                <div className="flex flex-col gap-4">
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center justify-center w-full py-4 md:py-5 bg-white text-black rounded-2xl md:rounded-[1.5rem] font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-primary hover:text-white transition-all duration-500 shadow-xl group/btn"
                                    >
                                        <Github className="w-4 h-4 md:w-5 md:h-5 mr-3 group-hover/btn:rotate-12 transition-transform" /> View Protocol
                                    </Link>
                                    <Link
                                        href={project.demo}
                                        target="_blank"
                                        className="flex items-center justify-center w-full py-4 md:py-5 bg-background border border-white/10 rounded-2xl md:rounded-[1.5rem] font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white/5 hover:border-white/30 transition-all duration-500 group/btn"
                                    >
                                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /> Live Runtime
                                    </Link>
                                </div>

                                <div className="flex items-center gap-3 pt-2">
                                    <ShieldCheck className="w-3 h-3 text-green-500/40" />
                                    <span className="text-[8px] font-black uppercase tracking-widest text-foreground/20 italic">Verified Production Deployment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
