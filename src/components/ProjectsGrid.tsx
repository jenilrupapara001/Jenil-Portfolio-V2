"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, ShieldCheck, Database, Layout, Sparkles } from "lucide-react";

const categories = [
    { id: "all", label: "All Works", icon: Layout },
    { id: "ai", label: "Artificial Intelligence", icon: BrainCircuit },
    { id: "backend", label: "Microservices", icon: Database },
    { id: "saas", label: "Enterprise SaaS", icon: ShieldCheck },
];

export default function ProjectsGrid() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = useMemo(() => {
        if (activeCategory === "all") return projects;

        const categoryMap: Record<string, string[]> = {
            ai: ["vyapaarsetu-ai"],
            backend: ["commercex-microservices"],
            saas: ["grownext-in", "bavadiya-realty", "metalex-saas"],
        };

        return projects.filter(p => categoryMap[activeCategory]?.includes(p.slug));
    }, [activeCategory]);

    return (
        <div className="space-y-24">
            {/* Premium Category Filter */}
            <div className="flex flex-wrap justify-center items-center gap-4 px-4">
                <div className="p-2 bg-white/[0.02] border border-white/10 rounded-[2rem] flex flex-wrap justify-center gap-2 backdrop-blur-xl">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`group flex items-center gap-3 px-8 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 relative overflow-hidden ${activeCategory === cat.id
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
                            <cat.icon className={`w-4 h-4 relative z-10 ${activeCategory === cat.id ? "animate-pulse" : "opacity-40 group-hover:opacity-100 transition-opacity"}`} />
                            <span className="relative z-10">{cat.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* High-End Masonry-Style Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
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
                            className={`group relative ${index % 3 === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
                        >
                            <Link href={`/projects/${project.slug}`} className="block h-full group">
                                <div className="h-full rounded-[3.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-[100px] overflow-hidden hover:border-primary/40 transition-all duration-700 flex flex-col hover:shadow-[0_0_120px_-30px_rgba(var(--primary-rgb),0.4)]">

                                    {/* Image Container with Parallax-ready feel */}
                                    <div className="relative h-[28rem] overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out grayscale-[0.3] group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />

                                        {/* Floating Badge */}
                                        <div className="absolute top-8 left-8 flex items-center gap-3 px-4 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
                                            <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                                            <span className="text-[9px] font-black uppercase tracking-widest text-white/80">
                                                {project.tags[0]}
                                            </span>
                                        </div>

                                        {/* Corner Arrow */}
                                        <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 rotate-45 group-hover:rotate-0 transition-all duration-500 shadow-2xl">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </div>

                                        {/* Bottom Labels */}
                                        <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-4 transform group-hover:-translate-y-2 transition-transform duration-700">
                                            <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
                                                {project.title.split(' ')[0]} <br />
                                                <span className="text-primary">{project.title.split(' ').slice(1).join(' ')}</span>
                                            </h3>
                                            <p className="text-white/40 text-sm font-medium leading-relaxed line-clamp-2 max-w-sm">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Footer Info */}
                                    <div className="p-10 flex flex-col gap-8 flex-grow">
                                        <div className="grid grid-cols-2 gap-8 border-b border-white/5 pb-8">
                                            <div className="space-y-1">
                                                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/60">Core Result</p>
                                                <p className="text-sm font-bold text-foreground/80 italic leading-tight">{project.impact}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-foreground/20">Technology</p>
                                                <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-widest text-foreground/60">
                                                    {project.tags.slice(1, 3).join(" • ")}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between group/btn">
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40 group-hover:text-primary transition-colors">
                                                Explore Architecture
                                            </span>
                                            <div className="w-12 h-[1px] bg-white/10 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
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
