"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, ShieldCheck, Database, Layout, Sparkles } from "lucide-react";

const categories = [
    { id: "all", label: "All Works", icon: Layout },
    { id: "backend", label: "Microservices", icon: Database },
    { id: "saas", label: "Enterprise SaaS", icon: ShieldCheck },
];

export default function ProjectsGrid() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = useMemo(() => {
        if (activeCategory === "all") return projects;

        const categoryMap: Record<string, string[]> = {
            backend: ["commercex-microservices"],
            saas: ["ajio-return-tracking", "grownext-in", "bavadiya-realty", "metalex-saas"],
        };

        return projects.filter(p => categoryMap[activeCategory]?.includes(p.slug));
    }, [activeCategory]);

    return (
        <div className="space-y-12 md:space-y-24">
            {/* Premium Category Filter */}
            <div className="flex flex-wrap justify-center items-center gap-4 px-4">
                <div className="p-1.5 md:p-2 bg-white/[0.02] border border-white/10 rounded-2xl md:rounded-[2rem] flex flex-wrap justify-center gap-1.5 md:gap-2 backdrop-blur-xl">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`group flex items-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-[1.5rem] text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 relative overflow-hidden ${activeCategory === cat.id
                                ? "text-white"
                                : "text-foreground/40 hover:text-foreground/80"
                                }`}
                        >
                            {activeCategory === cat.id && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className="absolute inset-0 bg-primary shadow-[0_0_40px_-5px_rgba(var(--primary-rgb),0.5)]"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <cat.icon className={`w-3 h-3 md:w-4 md:h-4 relative z-10 ${activeCategory === cat.id ? "animate-pulse" : "opacity-40 group-hover:opacity-100 transition-opacity"}`} />
                            <span className="relative z-10">{cat.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* High-End Masonry-Style Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            layout
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                            className="group relative"
                        >
                            <Link href={`/projects/${project.slug}`} className="block h-full group">
                                <div className="h-full rounded-[2.5rem] md:rounded-[3.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-[100px] overflow-hidden hover:border-primary/40 transition-all duration-700 flex flex-col hover:shadow-[0_0_120px_-30px_rgba(var(--primary-rgb),0.4)]">

                                    {/* Image Container */}
                                    <div className="relative h-[18rem] md:h-[22rem] overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out grayscale-[0.3] group-hover:grayscale-0"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />

                                        {/* Floating Badge */}
                                        <div className="absolute top-6 md:top-8 left-6 md:left-8 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
                                            <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                                            <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white/80">
                                                {project.tags[0]}
                                            </span>
                                        </div>

                                        {/* Corner Arrow (Hidden on very small mobile) */}
                                        <div className="absolute top-6 md:top-8 right-6 md:right-8 w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 rotate-45 group-hover:rotate-0 transition-all duration-500 shadow-2xl">
                                            <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
                                        </div>

                                        {/* Bottom Labels */}
                                        <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex flex-col gap-3 md:gap-4 transform group-hover:-translate-y-2 transition-transform duration-700">
                                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-[0.85] md:leading-none">
                                                {project.title.split(' ')[0]} <br />
                                                <span className="text-primary">{project.title.split(' ').slice(1).join(' ')}</span>
                                            </h3>
                                            <p className="text-white/40 text-[10px] md:text-sm font-medium leading-relaxed line-clamp-2 max-w-sm">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Footer Info */}
                                    <div className="p-6 md:p-8 flex flex-col gap-4 flex-grow">
                                        <div className="flex flex-col gap-2 border-b border-white/5 pb-6">
                                            <p className="text-[8px] font-black uppercase tracking-[0.3em] text-primary/60">Impact</p>
                                            <p className="text-xs font-bold text-foreground/70 italic leading-tight line-clamp-1">{project.impact}</p>
                                        </div>

                                        <div className="flex items-center justify-between group/btn pt-2">
                                            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-foreground/30 group-hover:text-primary transition-colors">
                                                Case Study
                                            </span>
                                            <ArrowUpRight className="w-3 h-3 text-foreground/20 group-hover:text-primary transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
