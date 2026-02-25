"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Zap, Globe2, Sparkles, Trophy, Layers, Cpu, Terminal, Globe, Search, Activity } from "lucide-react";
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
                <div className="w-full relative z-10 flex flex-wrap justify-center md:justify-between items-center gap-12">
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
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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

            {/* Deep Technical Philosophy & Positioning (Expansion) */}
            <Section id="technical-authority" title="">
                <div className="w-full space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">Beyond Full-Stack: <span className="text-primary italic">Systems Engineering.</span></h2>
                        <p className="text-lg md:text-xl text-foreground/60 leading-relaxed">
                            As a <span className="text-white font-bold">MERN Stack Developer</span> and <span className="text-white font-bold">Next.js Engineer</span>, I don't just build interfaces; I architect resilient digital ecosystems. My approach integrates
                            <span className="text-white font-bold"> Microservices architecture</span>, <span className="text-white font-bold">event-driven systems</span>, and <span className="text-white font-bold">Cloud-native solutions</span> to ensure that every line of code translates into business velocity.
                            Whether it's optimizing a <span className="text-white font-bold">MongoDB aggregation pipeline</span> for millions of records or implementing a
                            <span className="text-white font-bold">distributed caching layer with Redis</span>, my focus remains on performance, scalability, and maintainability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-4">
                            <h3 className="text-xl font-black uppercase italic text-primary">Scalable SaaS Architecture</h3>
                            <p className="text-sm text-foreground/40 leading-relaxed">
                                Specializing in multi-tenant SaaS platforms that require robust data isolation, role-based access control (RBAC), and high-availability infrastructure. I leverage <span className="text-white">Next.js Server Components</span> and <span className="text-white">Prisma ORM</span> to build type-safe, lightning-fast applications.
                            </p>
                        </div>
                        <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-4">
                            <h3 className="text-xl font-black uppercase italic text-accent">Enterprise Microservices</h3>
                            <p className="text-sm text-foreground/40 leading-relaxed">
                                Transitioning monoliths to distributed systems using <span className="text-white">Node.js</span> and <span className="text-white">Kafka</span>. My focus is on fault tolerance, eventual consistency, and creating seamless inter-service communication protocols that survive massive traffic spikes.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Services & Industry Expertise */}
            <Section id="services" title="" className="bg-white/[0.01] border-y border-white/5">
                <div className="w-full">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Strategic Capabilities</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Solutions for <span className="text-primary italic">Global Growth.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black uppercase italic">Full-Stack Modernization</h3>
                            <p className="text-foreground/40 leading-relaxed">
                                Transforming legacy codebases into modern, <span className="text-white italic">responsive web applications</span>. From React-based SPAs to Next.js SEO-optimized sites, I ensure your frontend is as powerful as your backend.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                                <Terminal className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black uppercase italic">Backend API Engineering</h3>
                            <p className="text-foreground/40 leading-relaxed">
                                Designing <span className="text-white italic">RESTful and GraphQL APIs</span> that are documented, secure, and scalable. Expertise in Node.js, Express, and NestJS for high-performance server-side logic.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black uppercase italic">Deployment & DevOps</h3>
                            <p className="text-foreground/40 leading-relaxed">
                                Orchestrating deployments on <span className="text-white italic">AWS, Vercel, and Docker</span>. Automated CI/CD pipelines, containerization, and monitoring to ensure your production environment stays bulletproof.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Why Hire Section: Market Specific Positioning */}
            <Section id="why-hire" title="">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">Why Partner With <br /><span className="text-primary italic">Jenil Rupapara?</span></h2>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <Activity className="w-6 h-6 text-primary shrink-0" />
                                <div>
                                    <p className="font-black uppercase italic text-sm">US & UK Startup Synergy</p>
                                    <p className="text-foreground/40 text-sm">Experienced in working with agile teams across North America and Europe, maintaining high standards of communication and clean, documented code.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Search className="w-6 h-6 text-accent shrink-0" />
                                <div>
                                    <p className="font-black uppercase italic text-sm">SEO & Performance First</p>
                                    <p className="text-foreground/40 text-sm">I don't just build features; I build for the web. Every project is optimized for Core Web Vitals, semantic HTML, and search engine visibility from day one.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Cpu className="w-6 h-6 text-secondary-foreground shrink-0" />
                                <div>
                                    <p className="font-black uppercase italic text-sm">Full-Cycle Ownership</p>
                                    <p className="text-foreground/40 text-sm">From initial architecture diagrams to final production deployment and post-launch scaling—I take full responsibility for the technical success of your project.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
                        <div className="relative p-12 bg-white/[0.02] border border-white/10 rounded-[4rem] backdrop-blur-3xl">
                            <div className="space-y-6">
                                <p className="text-xs font-black uppercase tracking-widest text-primary">Industries I Serve</p>
                                <div className="flex flex-wrap gap-3">
                                    {["E-commerce", "FinTech", "PropTech", "SaaS", "AI/ML", "Manufacturing", "Logistics"].map(industry => (
                                        <span key={industry} className="px-5 py-3 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest italic">{industry}</span>
                                    ))}
                                </div>
                                <div className="pt-6 border-t border-white/5">
                                    <p className="text-foreground/40 text-xs italic">Available for remote contracts in US/UK/EU timezones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Technical FAQ Section */}
            <Section id="faq" title="" className="pb-40">
                <div className="w-full space-y-16">
                    <div className="text-center space-y-4">
                        <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Knowledge Base</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Frequently Asked <span className="text-primary italic">Questions.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {[
                            {
                                q: "What is your primary technical focus?",
                                a: "I specialize in the MERN stack (MongoDB, Express, React, Node.js) with a heavy emphasis on Next.js and TypeScript for building high-performance, SEO-ready web applications. My focus is on building scalable, event-driven architectures."
                            },
                            {
                                q: "Do you work with international startups?",
                                a: "Yes, I have extensive experience working with startups in the US, UK, and EU. I am well-versed in remote collaboration tools, Agile methodologies, and maintaining professional coding standards like TDD and Clean Architecture."
                            },
                            {
                                q: "How do you ensure application scalability?",
                                a: "Scalability is handled at multiple levels: Database optimization (indexing, sharding), Backend efficiency (asynchronous processing with Kafka/BullMQ), and Frontend performance (SSR, edge caching). I architect systems that can handle horizontal scaling with ease."
                            },
                            {
                                q: "What is your approach to technical debt?",
                                a: "I believe in 'Clean Code' principles. I prioritize writing modular, documented, and tested code from the start. For existing systems, I implement incremental refactoring strategies to improve system health without disrupting production."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group">
                                <h4 className="text-xl font-black uppercase italic mb-4 group-hover:text-primary transition-colors">{faq.q}</h4>
                                <p className="text-foreground/40 leading-relaxed font-medium italic">{faq.a}</p>
                            </div>
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
                    className="w-full relative group"
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