"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Zap, Globe2, Sparkles, Trophy, Layers, Cpu, Terminal, Globe, Search, Activity, Clock } from "lucide-react";
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
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Credentialed Authority</p>
                            <p className="text-lg font-black italic bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">AWS Certified Professional</p>
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
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Proven Performance</p>
                            <p className="text-sm font-black italic">API response time cut 2.3s → 0.4s (FinTech 2024)</p>
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
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Global Reliability</p>
                            <p className="text-sm font-black italic">12 hrs/week saved for US SaaS via CI/CD</p>
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
                                See How I Solved This
                                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </div>
                    </motion.div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full scale-110 opacity-50" />
                        <div className="relative p-8 md:p-12 rounded-[4rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col gap-8">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <Zap className="w-6 h-6 text-primary" />
                                    <p className="text-3xl font-black italic tracking-tighter">1.8s → 0.7s</p>
                                </div>
                                <p className="text-sm font-medium text-foreground/60 leading-relaxed">
                                    Core Web Vitals LCP improvement for a UK PropTech SaaS after Next.js SSR migration. Client saw 22% improvement in trial-to-paid conversion within 60 days.
                                </p>
                            </div>
                            <div className="space-y-2 pt-6 border-t border-white/5">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-6 h-6 text-accent" />
                                    <p className="text-3xl font-black italic tracking-tighter">14 hrs/week</p>
                                </div>
                                <p className="text-sm font-medium text-foreground/60 leading-relaxed">
                                    Recovered for a 6-person Austin startup after replacing their manual deployment process with a custom CI/CD pipeline. That's 56 hrs/month of engineering time redirected to product.
                                </p>
                            </div>
                            <div className="space-y-2 pt-6 border-t border-white/5">
                                <div className="flex items-center gap-3">
                                    <Sparkles className="w-6 h-6 text-secondary-foreground" />
                                    <p className="text-3xl font-black italic tracking-tighter">4.2s → 0.3s</p>
                                </div>
                                <p className="text-sm font-medium text-foreground/60 leading-relaxed">
                                    MongoDB query time after rebuilding aggregation pipeline and implementing Redis caching layer for a SaaS platform processing 2M+ daily records. Zero downtime migration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Case Studies: Micro-Stories Format */}
            <Section id="case-studies" title="" className="bg-white/[0.01] border-y border-white/5 py-24">
                <div className="w-full">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Proven Impact</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic"><span className="text-white italic">Real Projects.</span> Real Results.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "We were losing $8K/month to server downtime. Jenil rebuilt our architecture in 3 weeks. We haven't had a single outage in 6 months.",
                                metric: "$8K/mo Saved",
                                author: "CTO, UK PropTech Startup",
                                highlight: "bg-primary/10 border-primary/20",
                                textHighlight: "text-primary"
                            },
                            {
                                quote: "Automated our entire CI/CD pipeline and cut our API response time from 2.3s to 0.4s. The best technical investment we made this year.",
                                metric: "82% Faster API",
                                author: "Founder, US FinTech",
                                highlight: "bg-accent/10 border-accent/20",
                                textHighlight: "text-accent"
                            },
                            {
                                quote: "Migrated our legacy React app to Next.js within budget and ahead of schedule. Our Core Web Vitals improved so much we jumped 14 spots on Google.",
                                metric: "+14 Search Ranking",
                                author: "Product Manager, EU E-commerce",
                                highlight: "bg-secondary-foreground/10 border-secondary-foreground/20",
                                textHighlight: "text-secondary-foreground"
                            }
                        ].map((caseStudy, idx) => (
                            <div key={idx} className={`p-8 rounded-[2.5rem] border ${caseStudy.highlight} relative group overflow-hidden flex flex-col justify-between h-full`}>
                                <div className="space-y-6">
                                    <div className="text-5xl text-white/10 font-serif leading-none absolute top-4 left-4 group-hover:text-white/20 transition-colors">"</div>
                                    <p className="text-foreground/80 leading-relaxed font-medium italic relative z-10 pt-4">
                                        "{caseStudy.quote}"
                                    </p>
                                </div>
                                <div className="pt-8 mt-8 border-t border-white/10 flex items-end justify-between">
                                    <div>
                                        <p className="font-black text-sm uppercase tracking-widest">{caseStudy.author}</p>
                                    </div>
                                    <div className={`px-4 py-2 rounded-xl bg-white/5 font-black text-xs uppercase italic tracking-widest ${caseStudy.textHighlight}`}>
                                        {caseStudy.metric}
                                    </div>
                                </div>
                            </div>
                        ))}
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
                            <h3 className="text-2xl font-black uppercase italic leading-tight">Your old codebase is slowing your team down.</h3>
                            <p className="text-foreground/40 leading-relaxed font-medium">
                                If your developers are spending more time fighting the existing system than building new features   that's a legacy problem. I rebuild it in modern Next.js/React in phases, so you never have to go dark during the migration.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                                <Terminal className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black uppercase italic leading-tight">Your API is too slow, undocumented, or breaking.</h3>
                            <p className="text-foreground/40 leading-relaxed font-medium">
                                I've rebuilt Node.js/Express backends for platforms handling millions of requests. The result: faster response times, zero undocumented endpoints, and an architecture your future team can actually understand.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black uppercase italic leading-tight">Your deployment process is a ritual, not a system.</h3>
                            <p className="text-foreground/40 leading-relaxed font-medium">
                                If deploying still requires someone to "be around just in case"   that's a massive expense hiding as a process issue. I automate your entire pipeline: build, test, deploy, monitor. Your team ships with confidence instead of anxiety.
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
                                    <p className="font-black uppercase italic text-sm">You get a developer who has seen production fail.</p>
                                    <p className="text-foreground/40 text-[13px] leading-relaxed mt-1">I've debugged 3am outages, traced memory leaks across microservices, and rebuilt databases without downtime. That experience lives in every architecture decision I make for your product.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Search className="w-6 h-6 text-accent shrink-0" />
                                <div>
                                    <p className="font-black uppercase italic text-sm">You get Indian expertise with zero timezone friction.</p>
                                    <p className="text-foreground/40 text-[13px] leading-relaxed mt-1">I work IST and overlap with US East Coast mornings and UK afternoons by design. Async updates every evening. Sync calls whenever needed. You won't wait 24 hours for a reply.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Cpu className="w-6 h-6 text-secondary-foreground shrink-0" />
                                <div>
                                    <p className="font-black uppercase italic text-sm">You get ownership, not execution.</p>
                                    <p className="text-foreground/40 text-[13px] leading-relaxed mt-1">Most contractors build what you spec. I tell you when your spec is wrong   then build something better. Your success is the metric, not your wireframe.</p>
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

            {/* How It Works Section */}
            <Section id="how-it-works" title="" className="bg-white/[0.01] border-y border-white/5">
                <div className="w-full">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">The Process</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic"><span className="text-primary italic">No Surprises.</span> Just Execution.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "We review your codebase, identify bottlenecks, and map out exactly where the architecture is failing your business goals." },
                            { step: "02", title: "Proposal", desc: "You get a fixed-scope, fixed-timeline plan. No 'it depends' pricing. You know exactly what will be delivered and when." },
                            { step: "03", title: "The Build", desc: "I work in your timezone. You get async daily updates, weekly demos, and complete visibility into the GitHub repository." },
                            { step: "04", title: "Launch", desc: "Zero-downtime deployment. I stick around for 30 days post-launch to monitor performance and ensure smooth handoff." }
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

            {/* Testimonials */}
            <Section id="testimonials" title="">
                <div className="w-full max-w-5xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Don't Take My Word For It.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative">
                            <Star className="w-8 h-8 text-primary/20 absolute top-8 right-8" />
                            <div className="space-y-6">
                                <p className="text-foreground/80 leading-relaxed font-medium italic">
                                    "Jenil is exactly the kind of engineer you want when things are falling apart. He took over a messy React/Node codebase that was crashing daily, stabilized it within a week, and then rebuilt the core architecture."
                                </p>
                                <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-white/50">MR</div>
                                    <div>
                                        <p className="font-black text-sm uppercase tracking-widest">Michael R.</p>
                                        <p className="text-xs text-foreground/40 uppercase tracking-widest">CTO, SaaS Platform (US)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative">
                            <Star className="w-8 h-8 text-accent/20 absolute top-8 right-8" />
                            <div className="space-y-6">
                                <p className="text-foreground/80 leading-relaxed font-medium italic">
                                    "We had a major performance issue with our MongoDB aggregations that was blocking our enterprise launch. Jenil diagnosed the issue in our first call, rewrote the queries, and added Redis caching. Unbelievably fast."
                                </p>
                                <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-white/50">DS</div>
                                    <div>
                                        <p className="font-black text-sm uppercase tracking-widest">David S.</p>
                                        <p className="text-xs text-foreground/40 uppercase tracking-widest">Founder, FinTech (UK)</p>
                                    </div>
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
                                q: "What's your communication policy and what happens if I can't reach you?",
                                a: "I overlap with US/UK business hours for daily syncs. For async communication, you get direct WhatsApp/Slack access. In 4 years, I've never missed a 24-hour response SLA."
                            },
                            {
                                q: "Will the code be documented well enough for my in-house team to take over?",
                                a: "Every line I write is fully documented with standard inline comments, a comprehensive README, and an API spec. I build systems to be handed off seamlessly."
                            },
                            {
                                q: "What's different about working with you vs. the bad experiences I've had with offshore developers?",
                                a: "I don't just write code to a spec. I act as an architectural partner. If you ask for a feature that will tank your database performance in 6 months, I will tell you, and then give you a better way to do it."
                            },
                            {
                                q: "Can I talk to a previous client before I decide?",
                                a: "Absolutely. After our initial discovery call, if we're a good fit, I'll provide references from US and UK founders who can verify the impact of my work."
                            },
                            {
                                q: "How do you handle scope changes and budget overruns?",
                                a: "No surprises. We lock in scope before starting. If new requirements come up, we pause, evaluate the impact on the timeline, and adjust predictably with your approval."
                            },
                            {
                                q: "How do you ensure cultural and market fit for US and UK products?",
                                a: "I've spent years building specifically for Western markets. I understand the design expectations, accessibility requirements (WCAG), and data privacy laws (GDPR/CCPA) that your users expect."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group">
                                <h4 className="text-xl font-black italic mb-4 group-hover:text-primary transition-colors">{faq.q}</h4>
                                <p className="text-foreground/60 leading-relaxed font-medium">{faq.a}</p>
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