"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Link from "next/link";
import { ArrowRight, Trophy, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Terminal } from "@/components/Terminal";
import { TechStack } from "@/components/TechStack";
import { SocialProof } from "@/components/SocialProof";
import { GitHubActivity } from "@/components/GitHubActivity";
import ProjectsGrid from "@/components/ProjectsGrid";
import LatestBlogs from "@/components/LatestBlogs";
import { BlogPost } from "@/lib/blog";

interface HomeClientProps {
    posts: BlogPost[];
}

export default function HomeClient({ posts }: HomeClientProps) {
    return (
        <div className="space-y-32 pb-32">
            <Hero />

            {/* Verification Layer: Results That Speak */}
            <Section id="results" title="" className="py-24">
                <div className="text-center mb-16">
                    <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Verified Production Metrics</span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mt-4">Results That <span className="text-primary">Speak.</span></h2>
                </div>
                <SocialProof />
            </Section>

            {/* Technical DNA Summary */}
            <Section id="tech-dna" title="" className="bg-white/[0.01] border-y border-white/5 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Technical DNA</span>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">High-Velocity <span className="text-primary">Engineering.</span></h2>
                        </div>
                        <p className="text-lg md:text-xl text-foreground/50 font-medium">
                            I architect horizontally scalable MERN systems designed for peak performance and extreme developer velocity.
                        </p>
                        <ul className="space-y-4">
                            {["Next.js Core Excellence", "Microservices & Distributed Logic", "Enterprise Cloud Security"].map((item) => (
                                <li key={item} className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-white/80">
                                    <Zap className="w-4 h-4 text-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="/about" className="inline-flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs hover:underline">
                            Deep Dive Into My Stack <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="relative opacity-40 hover:opacity-100 transition-opacity duration-700 blur-sm hover:blur-none grayscale hover:grayscale-0">
                        <TechStack />
                    </div>
                </div>
            </Section>

            {/* Developer Sandbox: Live Build Feed & Terminal */}
            <Section id="sandbox" title="" className="py-32 overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 blur-[200px] rounded-full pointer-events-none" />
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Radical Transparency</span>
                            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-[0.85]">
                                See Me <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x italic">Build In Real-Time.</span>
                            </h3>
                        </div>
                        <p className="text-xl md:text-2xl text-foreground/50 leading-relaxed font-medium">
                            Architecting in public. Explore my live build feed or interact with the CLI to see the engineering under the hood.
                        </p>
                        <Terminal />
                    </div>
                    <GitHubActivity />
                </div>
            </Section>

            {/* Engineering Insights: The Blog Section */}
            <Section id="insights" title="" className="py-32 border-y border-white/5 bg-white/[0.01]">
                <div className="text-center mb-24">
                    <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Technical Authority</span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mt-4"><span className="text-white">Engineering</span> Insights.</h2>
                    <p className="text-xl text-foreground/50 font-medium mt-6 max-w-2xl mx-auto">
                        Deep dives into scalable architecture, performance optimization, and modern full-stack engineering.
                    </p>
                </div>
                <LatestBlogs posts={posts} />
            </Section>

            {/* Selected Works: The Interactive Grid */}
            <Section id="work" title="" className="py-32">
                 <div className="text-center mb-24">
                    <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Selected Works</span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mt-4 italic"><span className="text-white">Proof of</span> Velocity.</h2>
                </div>
                <ProjectsGrid limit={3} />
                <div className="mt-20 text-center">
                    <Link href="/projects" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all inline-flex items-center gap-4">
                        Explore All Projects <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </Section>

            {/* Impact Section */}
            <Section id="impact" title="" className="bg-white/[0.01] border-y border-white/5 py-24">
                <div className="w-full space-y-20">
                    <div className="text-center space-y-4">
                        <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Production Impact</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Verified <span className="text-white italic">Velocity.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Jenil stabilized our React/Node codebase and cut downtime by 100%. Unrivaled technical ownership.",
                                metric: "$8K/mo Saved",
                                author: "CTO, UK PropTech",
                                icon: Trophy
                            },
                            {
                                quote: "API response dropped from 2.3s to 0.4s. The most effective technical architect we've hired.",
                                metric: "82% Faster API",
                                author: "Founder, US FinTech",
                                icon: Zap
                            },
                            {
                                quote: "Major MongoDB performance issues solved in days. Our enterprise launch was only possible because of Jenil.",
                                metric: "Enterprise Ready",
                                author: "Founder, EU SaaS",
                                icon: ShieldCheck
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group flex flex-col justify-between">
                                <div className="space-y-6">
                                    <item.icon className="w-8 h-8 text-primary/40 group-hover:text-primary transition-colors" />
                                    <p className="text-foreground/70 leading-relaxed font-bold italic">"{item.quote}"</p>
                                </div>
                                <div className="pt-8 flex items-center justify-between border-t border-white/5 mt-8">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">{item.author}</span>
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg">{item.metric}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Final Call To Action */}
            <Section id="cta" className="px-4 pb-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full relative group"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-[150px] rounded-[5rem] group-hover:scale-110 transition-transform duration-1000" />

                    <div className="relative bg-black border border-white/10 rounded-[5rem] p-16 md:p-32 overflow-hidden text-center space-y-12">
                        <div className="space-y-6">
                            <motion.p className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Next Steps</motion.p>
                            <h2 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter italic leading-[0.8] select-none">
                                Ready to scale <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x italic">Without breaking?</span>
                            </h2>
                            <p className="text-xl md:text-3xl text-foreground/40 font-medium max-w-2xl mx-auto leading-tight italic">
                                Let's build something that works.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            <Link
                                href="/contact"
                                className="px-12 py-6 bg-primary text-white rounded-full font-black text-xs uppercase tracking-[0.4em] hover:shadow-[0_0_60px_-10px_rgba(var(--primary-rgb),0.8)] transition-all active:scale-95"
                            >
                                Book a 20-Min Strategy Call
                            </Link>
                            <Link
                                href="/projects"
                                className="px-12 py-6 bg-white/5 border border-white/10 text-white rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-white/10 transition-all active:scale-95"
                            >
                                See How I Saved $40K
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}
