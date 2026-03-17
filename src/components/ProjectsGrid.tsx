"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, ShieldCheck, Database, Layout, Sparkles } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

const categories = [
    { id: "all", label: "All Works", icon: Layout },
    { id: "AI", label: "Artificial Intelligence", icon: BrainCircuit },
    { id: "Microservices", label: "Distributed Systems", icon: Database },
    { id: "SaaS", label: "Enterprise SaaS", icon: ShieldCheck },
];

export default function ProjectsGrid({ limit }: { limit?: number }) {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = useMemo(() => {
        let result = projects;
        if (!limit && activeCategory !== "all") {
            result = projects.filter(p => p.category === activeCategory);
        }
        return limit ? result.slice(0, limit) : result;
    }, [activeCategory, limit]);

    return (
        <div className="space-y-12 md:space-y-24">
            {/* Premium Category Filter - Only show if no limit is provided */}
            {!limit && (
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
            )}

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
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
