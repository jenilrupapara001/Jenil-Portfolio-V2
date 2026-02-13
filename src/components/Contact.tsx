"use client";

import { useState } from "react";
import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Linkedin, Github, Mail, Globe2, Sparkles, CheckCircle2 } from "lucide-react";

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
        { label: "LinkedIn", href: "https://linkedin.com/in/jenilrupapara", icon: Linkedin, color: "text-[#0077B5]" },
        { label: "GitHub", href: "https://github.com/jenilrupapara001", icon: Github, color: "text-white" },
        { label: "Direct Mail", href: "mailto:jenilrupapara001@gmail.com", icon: Mail, color: "text-primary" },
    ];

    return (
        <Section id="contact" title="" className="relative overflow-hidden !py-12 md:!py-28">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">

                    {/* Perspective Side: The Communication Hub */}
                    <div className="space-y-10 md:space-y-12">
                        <div className="space-y-4 md:space-y-6">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-primary font-black uppercase tracking-[0.5em] text-[8px] md:text-[10px] block"
                            >
                                Direct Access
                            </motion.span>
                            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-tight">The Communication <span className="text-primary italic">Hub.</span></h2>
                            <p className="text-foreground/40 text-base md:text-xl leading-relaxed max-w-md font-medium">
                                Whether you're looking to automate a workflow, build a complex system, or discuss a career opportunity — I'm all ears.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 md:gap-6">
                            {socialLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl flex items-center gap-3 md:gap-4 group hover:border-primary/40 transition-all duration-500 shadow-xl"
                                >
                                    <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/[0.03] group-hover:bg-primary/20 transition-colors`}>
                                        <link.icon className={`w-5 h-5 md:w-6 md:h-6 ${link.color}`} />
                                    </div>
                                    <div>
                                        <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">{link.label}</p>
                                        <p className="text-xs md:text-sm font-black italic group-hover:text-primary transition-colors">Connect</p>
                                    </div>
                                </motion.a>
                            ))}
                            {/* Timezone Info */}
                            <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-transparent border border-white/5 backdrop-blur-3xl flex items-center gap-3 md:gap-4 shadow-xl">
                                <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-primary/20">
                                    <Globe2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">Current Status</p>
                                    <p className="text-xs md:text-sm font-black italic">Active (IST)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side: The Logic Input */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full translate-y-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <div className="relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-white/[0.02] border border-white/10 backdrop-blur-[100px] shadow-2xl overflow-hidden">
                            <AnimatePresence mode="wait">
                                {!success ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6 md:space-y-8"
                                    >
                                        <div className="space-y-3 md:space-y-4">
                                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter italic flex items-center gap-3">
                                                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                                New Inquiry
                                            </h3>
                                            <div className="h-[1px] w-10 md:w-12 bg-primary/40" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                            <div className="space-y-1.5 md:space-y-2 group/input">
                                                <label className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 group-focus-within/input:text-primary transition-colors">Full Name</label>
                                                <input
                                                    name="name"
                                                    required
                                                    className="w-full bg-white/[0.03] border border-white/5 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all text-sm font-bold placeholder:text-foreground/10"
                                                    placeholder="e.g. Samuel Altman"
                                                />
                                            </div>
                                            <div className="space-y-1.5 md:space-y-2 group/input">
                                                <label className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 group-focus-within/input:text-primary transition-colors">Email Channel</label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    required
                                                    className="w-full bg-white/[0.03] border border-white/5 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all text-sm font-bold placeholder:text-foreground/10"
                                                    placeholder="sam@openai.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5 md:space-y-2 group/input">
                                            <label className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 group-focus-within/input:text-primary transition-colors">Project Intent / Brief</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={5}
                                                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl md:rounded-3xl px-5 md:px-6 py-5 md:py-6 outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all text-sm font-bold placeholder:text-foreground/10 resize-none"
                                                placeholder="Describe the bottleneck we are going to solve..."
                                            />
                                        </div>

                                        {error && <p className="text-red-400 text-[10px] md:text-xs font-black uppercase tracking-widest text-center">{error}</p>}

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full group/btn relative py-4 md:py-6 bg-primary text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] rounded-xl md:rounded-[1.5rem] overflow-hidden transition-all hover:shadow-[0_0_50px_-5px_rgba(var(--primary-rgb),0.5)] active:scale-95 disabled:opacity-50"
                                        >
                                            <div className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                                                {loading ? (
                                                    <>
                                                        <Loader2 className="w-3.5 h-3.5 md:w-4 md:h-4 animate-spin" />
                                                        Deploying...
                                                    </>
                                                ) : (
                                                    <>
                                                        Initialize Transmission
                                                        <Send className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                    </>
                                                )}
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-64 md:h-96 flex flex-col items-center justify-center text-center space-y-6 md:space-y-8"
                                    >
                                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center relative">
                                            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150 animate-pulse" />
                                            <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-primary relative z-10" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic">Transmission Received.</h3>
                                            <p className="text-foreground/40 font-bold uppercase tracking-widest text-[8px] md:text-[10px]">I will respond through the secure channel shortly.</p>
                                        </div>
                                        <button
                                            onClick={() => setSuccess(false)}
                                            className="text-primary text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] hover:underline"
                                        >
                                            Send Another
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
}
