"use client";

import About from "@/components/About";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import { GridPattern } from "@/components/GridPattern";
import { TechStack } from "@/components/TechStack";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import {
    Cpu, Layers, Zap, Eye, Rocket, Shield,
    BarChart3, Binary, Workflow, TrendingUp,
    SearchCode, Database, Server, Smartphone, Layout, Target,
    Activity, Search, Star, CheckCircle2
} from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-20 md:pt-24 pb-20 md:pb-32 space-y-20 md:space-y-32">
            {/* Hero Quote Section */}
            <Section id="about-hero" title="" className="!py-16 md:!py-28 relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <GridPattern />
                </div>
                
                <div className="w-full text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter italic leading-[0.9] sm:leading-none mb-8 md:mb-12">
                            The Architect of <br />
                            <span className="text-primary">Efficiency</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed font-medium">
                            I am an independent remote contractor providing specialized architectural solutions to eliminate business bottlenecks through intelligent automation. I am an AWS Certified Professional available for hire globally.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24">
                        {[
                            { title: "Mission", desc: "To eliminate technical debt by building robust, future-proof architectures.", icon: Target, color: "text-primary" },
                            { title: "Vision", desc: "Creating a world where software acts as a multiplier for human potential.", icon: Eye, color: "text-accent" },
                            { title: "Philosophy", desc: "Clarity, performance, and measurable impact in every line of code.", icon: Zap, color: "text-yellow-400" }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                                className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-primary/20 transition-all duration-500"
                            >
                                <item.icon className={`w-10 h-10 md:w-12 md:h-12 mb-6 md:mb-8 ${item.color}`} />
                                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter italic mb-4">{item.title}</h3>
                                <p className="text-foreground/50 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Main Narrative Component */}
            <div className="bg-white/[0.01] border-y border-white/5 py-20 md:py-32">
                <About />
            </div>

            {/* Technical DNA Deep Dive */}
            <Section id="tech-dna" title="" className="py-32 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
                <div className="text-center mb-20 relative z-10">
                    <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Technical DNA</span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mt-4">High-Velocity <br /> <span className="text-primary">Engineering Stack.</span></h2>
                </div>
                <div className="relative z-10">
                    <TechStack />
                </div>
            </Section>

            {/* Career Trajectory: Full History */}
            <Section id="career" title="" className="bg-white/[0.01] border-y border-white/5 py-32">
                <div className="text-center mb-16">
                    <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">The Evolution</span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mt-4">Full Career <span className="text-primary italic">Trajectory.</span></h2>
                </div>
                <ExperienceTimeline />
            </Section>

            {/* Architecture Visualization Section */}
            <Section id="architecture" title="" className="!py-16 md:!py-28">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mb-12 md:mb-20 text-center max-w-2xl mx-auto">
                        <p className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-xs mb-4">The Synergy</p>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-tight">MERN Stack Developer India Remote</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { name: "Frontend", icon: Layout, desc: "Immersive Next.js interfaces with premium aesthetics." },
                            { name: "Backend", icon: Server, desc: "Event-driven microservices for high throughput." },
                            { name: "Database", icon: Database, desc: "Optimized schemas for data integrity & speed." },
                            { name: "Optimization", icon: Binary, desc: "Caching & heavy-duty routine automation." }
                        ].map((layer, i) => (
                            <motion.div
                                key={layer.name}
                                initial={{ opacity: 0, rotateY: 30 }}
                                whileInView={{ opacity: 1, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 group hover:from-primary/10 transition-all duration-700"
                            >
                                <layer.icon className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-6 text-primary group-hover:scale-110 transition-transform duration-500" />
                                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 uppercase tracking-tighter">{layer.name}</h3>
                                <p className="text-[10px] text-foreground/40 leading-relaxed uppercase font-black tracking-widest">{layer.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-white/[0.03] border border-white/10 flex flex-col justify-center items-center text-center space-y-4 md:space-y-6"
                        >
                            <Workflow className="w-12 h-12 md:w-16 md:h-16 text-accent animate-spin-slow" />
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic leading-tight">Seamless Workflows</h3>
                            <p className="text-foreground/50 text-sm md:text-base max-w-sm">I automate every repetitive task, turning manual bottlenecks into automated growth levers.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-primary/[0.05] border border-primary/20 flex flex-col justify-center items-center text-center space-y-4 md:space-y-6"
                        >
                            <BarChart3 className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic leading-tight">Metric-Driven Success</h3>
                            <p className="text-foreground/50 text-sm md:text-base max-w-sm">Every deployed solution is verified by business growth metrics and ROI.</p>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Beyond the Terminal Section */}
            <Section id="beyond" title="" className="!py-16 md:!py-28">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-12 xl:col-span-4 xl:pr-12 space-y-6 md:space-y-8">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
                                Beyond the <br />
                                <span className="text-primary italic">Terminal</span>
                            </h2>
                            <p className="text-base md:text-lg text-foreground/50 leading-relaxed font-medium">
                                When I'm not architecting systems, I analyze market trends and explore the intersection of finance and technology, believing a well-rounded perspective is what makes a developer a true problem solver.
                            </p>
                        </div>

                        <div className="lg:col-span-12 xl:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { title: "FinTech Enthusiast", icon: Binary, color: "text-[#FFD700]" },
                                { title: "Market Analyst", icon: TrendingUp, color: "text-[#00FFA3]" },
                                { title: "Strategic Thinker", icon: SearchCode, color: "text-primary" }
                            ].map((hobby, i) => (
                                <motion.div
                                    key={hobby.title}
                                    whileHover={{ y: -10 }}
                                    className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl flex flex-col items-center justify-center text-center gap-4 md:gap-6 group hover:border-white/20 transition-all duration-500"
                                >
                                    <div className="p-4 md:p-6 rounded-full bg-white/[0.03] group-hover:bg-white/[0.08] transition-colors duration-500">
                                        <hobby.icon className={`w-8 h-8 md:w-10 md:h-10 ${hobby.color}`} />
                                    </div>
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 group-hover:text-foreground/80 transition-colors duration-500 italic">
                                        {hobby.title}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Why Partner With Me (Moved from Home) */}
            <Section id="why-hire" title="" className="bg-white/[0.01] border-y border-white/5 py-32">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">The Engineering <br /><span className="text-primary italic">Philosophy.</span></h2>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <Activity className="w-6 h-6 text-primary shrink-0" />
                                <div>
                                    <p className="font-black uppercase italic text-sm">Resilience by Design.</p>
                                    <p className="text-foreground/40 text-[13px] leading-relaxed mt-1">I've debugged 3am outages, traced memory leaks across microservices, and rebuilt databases without downtime. That experience lives in every architecture decision I make.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Search className="w-6 h-6 text-accent shrink-0" />
                                <div>
                                    <p className="font-black uppercase italic text-sm">Global Collaboration, Zero Friction.</p>
                                    <p className="text-foreground/40 text-[13px] leading-relaxed mt-1">I work IST and overlap with US East Coast mornings and UK afternoons. Async updates every evening. Sync calls whenever needed.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Cpu className="w-6 h-6 text-secondary-foreground shrink-0" />
                                <div>
                                    <p className="font-black uppercase italic text-sm">Radical Ownership.</p>
                                    <p className="text-foreground/40 text-[13px] leading-relaxed mt-1">Most contractors build what you spec. I tell you when your spec is wrong—then build something better. Your success is the metric.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
                        <div className="relative p-12 bg-white/[0.02] border border-white/10 rounded-[4rem] backdrop-blur-3xl">
                            <div className="space-y-6">
                                <p className="text-xs font-black uppercase tracking-widest text-primary">Core Expertise Domains</p>
                                <div className="flex flex-wrap gap-3">
                                    {["E-commerce", "FinTech", "PropTech", "SaaS", "AI/ML", "Manufacturing", "Logistics"].map(industry => (
                                        <span key={industry} className="px-5 py-3 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest italic">{industry}</span>
                                    ))}
                                </div>
                                <div className="pt-6 border-t border-white/5">
                                    <p className="text-foreground/40 text-xs italic">Specialized in US/UK/EU remote architecture contracts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* The Process (Moved from Home) */}
            <Section id="how-it-works" title="" className="py-32">
                <div className="w-full">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Methodology</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">From Discovery <br /><span className="text-primary italic">To Deployment.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "We review your codebase, identify bottlenecks, and map out architectural alignment with business goals." },
                            { step: "02", title: "Strategy", desc: "You get a fixed-scope, fixed-timeline plan. Zero ambiguity on delivery or technical milestones." },
                            { step: "03", title: "Execution", desc: "I work in your timezone. Daily async updates and weekly demos ensure constant visibility." },
                            { step: "04", title: "Handoff", desc: "Zero-downtime deployment. 30-day post-launch monitoring ensures absolute stability." }
                        ].map((s, i) => (
                            <div key={i} className="relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group hover:border-primary/20 transition-all">
                                <span className="text-6xl font-black text-white/5 absolute -top-4 -right-2 group-hover:text-primary/10 transition-colors italic">{s.step}</span>
                                <div className="space-y-4 relative z-10">
                                    <h3 className="text-xl font-black uppercase italic mt-4">{s.title}</h3>
                                    <p className="text-sm font-medium text-foreground/40 leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
