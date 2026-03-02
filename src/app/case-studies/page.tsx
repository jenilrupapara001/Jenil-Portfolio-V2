"use client";

import Section from "@/components/Section";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck, Zap, Activity } from "lucide-react";
import { motion } from "framer-motion";

const caseStudies = [
    {
        client: "UK FinTech Platform",
        title: "Enterprise Deal Saved by 80% Faster API",
        icon: <Zap className="w-8 h-8 text-primary" />,
        situation: "A 12-person FinTech startup in London was spending 40% of every sprint fixing performance bugs. Their API response times were averaging 3.2s. They were losing enterprise prospects at the demo stage because the product felt slow and unreliable.",
        action: "I rebuilt their MongoDB aggregation layer, introduced Redis caching for high-frequency queries, migrated 3 critical endpoints from REST to GraphQL, and set up performance monitoring with Datadog alerts.",
        result: 'API response time dropped from 3.2s to 0.4s average. The CTO noted that in their next enterprise demo, the prospect commented unprompted: "Your platform is unusually fast." They closed a massive deal within 2 weeks of the performance upgrade.',
        tech: ["Node.js", "MongoDB", "Redis", "GraphQL", "AWS", "Datadog"],
        color: "primary"
    },
    {
        client: "US PropTech Dashboard",
        title: "SSR Migration Drives 22% Higher Conversions",
        icon: <Activity className="w-8 h-8 text-accent" />,
        situation: "A real estate startup's main dashboard was taking 1.8s to load (LCP) and ranking poorly on Google due to bad Core Web Vitals. Trial-to-paid conversion was suffering because users perceived the app as sluggish and heavy.",
        action: "Migrated their entire frontend architecture from a legacy React SPA to Next.js with Server-Side Rendering (SSR). I optimized assets, implemented lazy loading, and reduced the main JavaScript bundle size by over 40%.",
        result: "LCP dropped from 1.8s to 0.7s. The site jumped 14 positions on Google search results within a month, and most importantly, trial-to-paid conversion improved by 22% over the following 60 days.",
        tech: ["Next.js", "React", "TailwindCSS", "Vercel", "AWS S3"],
        color: "accent"
    },
    {
        client: "EU Logistics Automation",
        title: "14 Hours/Week Recovered via CI/CD",
        icon: <ShieldCheck className="w-8 h-8 text-secondary-foreground" />,
        situation: 'A 6-person startup was losing 14 hours every week to a manual, fragile deployment process. Developers were afraid to ship on Fridays because "someone needed to be around just in case things broke."',
        action: "Replaced their manual deployment sequence with a custom, fully automated CI/CD pipeline using GitHub Actions and AWS CodePipeline. Added comprehensive unit tests and automated rollback triggers to prevent bad code from reaching users.",
        result: "56 hours of engineering time redirected to product development every single month. The team now ships multiple times a day with zero anxiety and zero downtime.",
        tech: ["GitHub Actions", "AWS CodePipeline", "Docker", "Jest", "TypeScript"],
        color: "secondary-foreground"
    }
];

export default function CaseStudies() {
    return (
        <main className="min-h-screen pb-32 pt-32">
            <Section id="header" title="">
                <div className="w-full max-w-4xl space-y-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                    <div className="space-y-4">
                        <span className="text-white/40 font-black uppercase tracking-[0.5em] text-[10px]">Real Work</span>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
                            Results Over <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x italic">Talk.</span>
                        </h1>
                        <p className="text-xl text-foreground/60 font-medium max-w-2xl leading-relaxed">
                            How I help startups identify architectural flaws, eliminate technical debt, and build systems that actually scale with their user base.
                        </p>
                    </div>
                </div>
            </Section>

            <Section id="studies" title="">
                <div className="w-full space-y-32 mt-12">
                    {caseStudies.map((study, idx) => (
                        <div key={idx} className="relative group">
                            {/* Decorative Background Glow based on study color */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-${study.color}/10 blur-[120px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                                {/* Left Sidebar: Client & Tech Stack */}
                                <div className="lg:col-span-4 space-y-8 sticky top-32">
                                    <div className={`w-16 h-16 rounded-3xl bg-${study.color}/10 flex items-center justify-center border border-${study.color}/20`}>
                                        {study.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">Client</p>
                                        <h3 className="text-2xl font-black italic">{study.client}</h3>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4">Tech Stack</p>
                                        <div className="flex flex-wrap gap-2">
                                            {study.tech.map(t => (
                                                <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-black italic tracking-widest">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Content: The Story */}
                                <div className="lg:col-span-8 p-10 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl">
                                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-tight mb-12">
                                        {study.title}
                                    </h2>

                                    <div className="space-y-12">
                                        <div className="space-y-4">
                                            <h4 className={`text-sm font-black uppercase tracking-widest text-${study.color}`}>The Situation</h4>
                                            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-medium">
                                                {study.situation}
                                            </p>
                                        </div>

                                        <div className="space-y-4 relative">
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 rounded-full overflow-hidden">
                                                <div className={`w-full h-1/2 bg-${study.color} rounded-full`} />
                                            </div>
                                            <h4 className={`text-sm font-black uppercase tracking-widest text-${study.color} pl-6`}>What I Did</h4>
                                            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-medium pl-6">
                                                {study.action}
                                            </p>
                                        </div>

                                        <div className={`p-8 rounded-3xl bg-${study.color}/5 border border-${study.color}/20 space-y-4`}>
                                            <h4 className={`text-sm font-black uppercase tracking-widest text-${study.color}`}>The Result</h4>
                                            <p className="text-xl md:text-2xl text-white leading-relaxed font-bold italic">
                                                "{study.result}"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="cta" className="mt-32">
                <div className="w-full max-w-4xl mx-auto p-12 md:p-20 text-center rounded-[4rem] bg-primary/10 border border-primary/20 backdrop-blur-sm space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Want These Kind of <br />Results For Your Startup?</h2>
                    <p className="text-xl text-primary/80 font-medium">Let's talk about your current architecture.</p>
                    <div className="pt-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-black text-xs uppercase tracking-widest hover:shadow-[0_0_40px_-10px_rgba(var(--primary-rgb),0.8)] transition-all active:scale-95"
                        >
                            Book a Strategy Call <ExternalLink className="ml-3 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
