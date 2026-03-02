import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Trophy, Globe2, Activity, Layers, Terminal, Cpu } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hire MERN Stack Developer in US | Jenil Rupapara",
    description: "Don't ship slow software. Hire a top-tier MERN Stack engineer experienced in US startup environments. Cut development time by 50%. Available for hire.",
    alternates: {
        canonical: "https://jenilrupapara.vercel.app/hire-mern-stack-developer-us"
    }
};

export default function HireMernStackUS() {
    return (
        <div className="space-y-32 pb-32">
            <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-12 text-center md:text-left">
                <div className="w-full px-6 md:px-12 lg:px-20 z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
                    <div className="flex-1 space-y-8 lg:pr-12">
                        <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[8px] sm:text-xs font-black backdrop-blur-md whitespace-nowrap">
                            <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="tracking-widest sm:tracking-wide">US STARTUP SPECIALIST</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] font-black leading-[0.95] tracking-tighter">
                            HIRE THE <br />
                            <span className="text-transparent bg-clip-text bg-[image:linear-gradient(45deg,#4F46E5,#0EA5E9,#A855F7,#4F46E5)] bg-[size:300%_auto] animate-gradient-flow italic">MERN STACK</span> <br />
                            EXPERT FOR YOUR SAAAS.
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl font-medium leading-relaxed">
                            Stop burning runway on inefficient code. I have helped startups from San Francisco to New York launch faster, scale effortlessly, and reduce server costs. High-overlap hours. Silicon Valley quality.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
                            <Link href="/contact" className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:shadow-[0_0_30px_-5px_rgba(var(--primary-rgb),0.5)] transition-all">
                                Get A Free Tech Audit
                            </Link>
                            <Link href="/projects" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all">
                                View US Case Studies
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Section id="benefits" title="">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-4 hover:border-primary/20 transition-all">
                        <Activity className="w-8 h-8 text-primary" />
                        <h3 className="text-xl font-black uppercase italic text-white">Full EST/PST Overlap</h3>
                        <p className="text-foreground/50 text-sm leading-relaxed">Daily syncs and real-time collaboration during your core business hours for zero communication friction.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-4 hover:border-accent/20 transition-all">
                        <Cpu className="w-8 h-8 text-accent" />
                        <h3 className="text-xl font-black uppercase italic text-white">Next.js & React Mastery</h3>
                        <p className="text-foreground/50 text-sm leading-relaxed">From edge computing to server-side rendering, I implement modern React patterns to perfectly optimize your Core Web Vitals.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-4 hover:border-secondary-foreground/20 transition-all">
                        <Terminal className="w-8 h-8 text-secondary-foreground" />
                        <h3 className="text-xl font-black uppercase italic text-white">Scalable MongoDB</h3>
                        <p className="text-foreground/50 text-sm leading-relaxed">I design robust, multi-tenant database schemas using MongoDB and Prisma ORM built for rapid enterprise scaling.</p>
                    </div>
                </div>
            </Section>

            <Section id="hire-cta" className="text-center py-24">
                <div className="max-w-3xl mx-auto space-y-8 bg-black p-12 md:p-20 rounded-[4rem] border border-white/10">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Let's Talk <span className="text-primary italic">Architecture.</span></h2>
                    <p className="text-lg text-foreground/50">Schedule a 20-minute strategy call. If we're not a good fit, I'll recommend someone who is.</p>
                    <div className="flex justify-center mt-8">
                        <Link href="/contact" className="px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-primary hover:text-white transition-all">
                            Check My Availability
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
