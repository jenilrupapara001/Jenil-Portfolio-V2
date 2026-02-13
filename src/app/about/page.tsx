"use client";

import About from "@/components/About";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import {
    Cpu, Layers, Zap, Eye, Rocket, Shield,
    BarChart3, Binary, Workflow, TrendingUp,
    SearchCode, Database, Server, Smartphone, Layout
} from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-24 pb-32 space-y-32">
            {/* Hero Quote Section */}
            <Section id="about-hero" title="">
                <div className="max-w-5xl mx-auto text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-12">
                            The Architect of <br />
                            <span className="text-primary">Efficiency</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed font-medium">
                            I don't just build websites. I engineer systems that solve business bottlenecks and accelerate growth through intelligent automation.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
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
                                className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-primary/20 transition-all duration-500"
                            >
                                <item.icon className={`w-12 h-12 mb-8 ${item.color}`} />
                                <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-4">{item.title}</h3>
                                <p className="text-foreground/50 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Main Narrative Component */}
            <div className="bg-white/[0.01] border-y border-white/5 py-32">
                <About />
            </div>

            {/* Architecture Visualization Section */}
            <Section id="architecture" title="System Architecture Visualization">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="mb-20 text-center max-w-2xl mx-auto">
                        <p className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4">The Synergy</p>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">How I Build Solutions</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                                className="p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 group hover:from-primary/10 transition-all duration-700"
                            >
                                <layer.icon className="w-10 h-10 mb-6 text-primary group-hover:scale-110 transition-transform duration-500" />
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">{layer.name}</h3>
                                <p className="text-xs text-foreground/40 leading-relaxed uppercase font-black tracking-widest">{layer.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 flex flex-col justify-center items-center text-center space-y-6"
                        >
                            <Workflow className="w-16 h-16 text-accent animate-spin-slow" />
                            <h3 className="text-3xl font-black uppercase tracking-tighter italic">Seamless Workflows</h3>
                            <p className="text-foreground/50 max-w-sm">I automate every repetitive task, turning manual bottlenecks into automated growth levers.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[3rem] bg-primary/[0.05] border border-primary/20 flex flex-col justify-center items-center text-center space-y-6"
                        >
                            <BarChart3 className="w-16 h-16 text-primary" />
                            <h3 className="text-3xl font-black uppercase tracking-tighter italic">Metric-Driven Success</h3>
                            <p className="text-foreground/50 max-w-sm">My solutions aren't just beautiful—they are verified by business growth metrics and ROI.</p>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Beyond the Terminal Section */}
            <Section id="beyond" title="">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-4 lg:pr-12">
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none mb-8">
                                Beyond the <br />
                                <span className="text-primary italic">Terminal</span>
                            </h2>
                            <p className="text-foreground/50 leading-relaxed font-medium">
                                When I'm not architecting systems, I'm analyzing market trends and exploring the intersection of finance and technology. I believe a well-rounded perspective is what makes a developer a true problem solver.
                            </p>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { title: "FinTech Enthusiast", icon: Binary, color: "text-[#FFD700]" },
                                { title: "Market Analyst", icon: TrendingUp, color: "text-[#00FFA3]" },
                                { title: "Strategic Thinker", icon: SearchCode, color: "text-primary" }
                            ].map((hobby, i) => (
                                <motion.div
                                    key={hobby.title}
                                    whileHover={{ y: -10 }}
                                    className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl flex flex-col items-center justify-center text-center gap-6 group hover:border-white/20 transition-all duration-500"
                                >
                                    <div className="p-6 rounded-full bg-white/[0.03] group-hover:bg-white/[0.08] transition-colors duration-500">
                                        <hobby.icon className={`w-10 h-10 ${hobby.color}`} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 group-hover:text-foreground/80 transition-colors duration-500 italic">
                                        {hobby.title}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}

function Target(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    )
}
