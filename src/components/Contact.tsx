"use client";

import { useState } from "react";
import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Linkedin, Github, Mail, Globe2, Sparkles, CheckCircle2, Copy, ArrowUpRight } from "lucide-react";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to send message");

            setSuccess(true);
            (e.target as HTMLFormElement).reset();
        } catch (err) {
            setError("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    const socialLinks = [
        { label: "LinkedIn", href: "https://linkedin.com/in/jenilrupapara-fullstack-developer", icon: Linkedin, color: "text-[#0077B5]" },
        { label: "GitHub", href: "https://github.com/jenilrupapara001", icon: Github, color: "text-white" },
        { label: "Email", href: "mailto:jenilrupapara340@gmail.com", icon: Mail, color: "text-primary" },
    ];

    return (
        <Section id="contact" title="" className="relative overflow-hidden !py-12 md:!py-24">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Unified Card Container */}
                <div className="rounded-[2.5rem] md:rounded-[3.5rem] bg-black/40 border border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

                    {/* Left Panel: Info & Socials */}
                    <div className="relative lg:w-5/12 p-8 md:p-14 flex flex-col justify-between bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-white/5">
                        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-[80px] pointer-events-none" />

                        <div className="relative space-y-8 md:space-y-12">
                            <div className="space-y-6">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-primary"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    Direct Access
                                </motion.span>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-[0.9]">
                                    Let's Talk <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Business.</span>
                                </h2>
                                <p className="text-foreground/60 text-sm md:text-base leading-relaxed font-medium max-w-sm">
                                    Ready to build something extraordinary? I'm currently available for freelance projects and technical consulting.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">Connect Platforms</p>
                                <div className="flex flex-col gap-3">
                                    {socialLinks.map((link, i) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="p-2.5 rounded-xl bg-black/20 text-foreground/80 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                                    <link.icon className="w-4 h-4" />
                                                </div>
                                                <span className="text-sm font-bold tracking-wide">{link.label}</span>
                                            </div>
                                            <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative mt-12 pt-8 border-t border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                    <Globe2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-1">Current Status</p>
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                                        <p className="text-xs font-bold text-white tracking-wide">Accepting New Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Form */}
                    <div className="relative lg:w-7/12 p-8 md:p-14 bg-black/20">
                        <AnimatePresence mode="wait">
                            {!success ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-8 h-full flex flex-col justify-center"
                                >
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2 text-white/90">
                                            <Sparkles className="w-5 h-5 text-primary" />
                                            Start a Project
                                        </h3>
                                        <p className="text-foreground/40 text-xs font-medium tracking-wide">Tell me about your vision and what you need.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2 group/input">
                                            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/40 group-focus-within/input:text-primary transition-colors pl-1">Full Name</label>
                                            <input
                                                name="name"
                                                required
                                                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 outline-none focus:border-primary/50 focus:bg-primary/[0.02] transition-all text-sm font-bold placeholder:text-foreground/10"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2 group/input">
                                            <label className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/40 group-focus-within/input:text-primary transition-colors pl-1">Email Address</label>
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 outline-none focus:border-primary/50 focus:bg-primary/[0.02] transition-all text-sm font-bold placeholder:text-foreground/10"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 group/input">
                                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/40 group-focus-within/input:text-primary transition-colors pl-1">Project Details</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={6}
                                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 outline-none focus:border-primary/50 focus:bg-primary/[0.02] transition-all text-sm font-bold placeholder:text-foreground/10 resize-none leading-relaxed"
                                            placeholder="I need help with building a high-performance web application..."
                                        />
                                    </div>

                                    {error && <p className="text-red-400 text-[10px] font-black uppercase tracking-widest text-center bg-red-500/10 py-2 rounded-lg">{error}</p>}

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full group relative py-4 bg-primary hover:bg-primary/90 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-xl overflow-hidden transition-all shadow-[0_0_30px_-10px_rgba(var(--primary-rgb),0.5)] hover:shadow-[0_0_50px_-10px_rgba(var(--primary-rgb),0.7)] active:scale-95 disabled:opacity-70 disabled:active:scale-100"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-3">
                                                {loading ? (
                                                    <>
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                    </>
                                                )}
                                            </span>
                                        </button>
                                    </div>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center space-y-8 py-10"
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-full scale-110 animate-pulse" />
                                        <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center shadow-2xl">
                                            <CheckCircle2 className="w-10 h-10 text-white" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-3xl font-black uppercase tracking-tight text-white">Message Sent!</h3>
                                        <p className="text-foreground/60 font-medium text-sm leading-relaxed max-w-xs mx-auto">
                                            Thanks for reaching out. I'll get back to you within 24 hours.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSuccess(false)}
                                        className="px-8 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-[10px] font-black uppercase tracking-[0.2em] transition-all"
                                    >
                                        Send Another
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </Section>
    );
}
