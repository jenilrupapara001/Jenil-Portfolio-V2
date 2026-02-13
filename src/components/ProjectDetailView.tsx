"use client";

import { use } from "react";
import { Project } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetailView({ project }: { project: Project }) {
    return (
        <div className="pt-8 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/projects"
                    className="inline-flex items-center text-primary hover:underline mb-8 group"
                >
                    <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

                    <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-border bg-secondary/20">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold mb-4 flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm">01</span>
                                    The Problem
                                </h2>
                                <p className="text-foreground/80 leading-relaxed text-lg italic">
                                    "{project.problem}"
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4 flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center mr-3 text-sm">02</span>
                                    My Solution
                                </h2>
                                <p className="text-foreground/80 leading-relaxed text-lg">
                                    {project.solution}
                                </p>
                            </section>

                            <section>
                                <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10">
                                    <h2 className="text-2xl font-bold mb-4 text-primary">Measurable Impact</h2>
                                    <p className="text-xl font-medium text-foreground">
                                        {project.impact}
                                    </p>
                                </div>
                            </section>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-secondary rounded-lg text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    className="flex items-center justify-center w-full py-3 bg-foreground text-background rounded-xl font-bold hover:opacity-90 transition-opacity"
                                >
                                    <Github className="w-5 h-5 mr-2" /> View Code
                                </Link>
                                <Link
                                    href={project.demo}
                                    target="_blank"
                                    className="flex items-center justify-center w-full py-3 border border-border rounded-xl font-bold hover:bg-secondary transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
