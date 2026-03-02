"use client";

import { useState } from "react";
import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Linkedin, Github, Mail, Globe2, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";

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
        { label: "Email", href: "mailto:jenilrupapara340@gmail.com", icon: Mail, color: "text-primary" },
        { label: "WhatsApp", href: "https://wa.me/918799257934", icon: Globe2, color: "text-green-400" },
    ];

    return (
        <Section id="contact" title="" className="relative overflow-visible !py-24 md:!py-32">

            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-20 animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left Panel: Typography & Context - Spans 7 cols */}
                    <div className="lg:col-span-7 flex flex-col gap-16 md:gap-24">
                        <div className="space-y-8 relative">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3"
                            >
                                <span className="w-12 h-[1px] bg-primary/60" />
                                <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase">Direct Access</span>
                            </motion.div>

                            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter leading-[0.9] text-white">
                                Let's Figure <br />
                                Out If We're <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white opacity-80">A Good Fit.</span>
                            </h2>

                            <p className="text-lg md:text-xl text-foreground/50 font-medium max-w-xl border-l-2 border-primary/20 pl-6 leading-relaxed">
                                I only take on projects where I know I can deliver at least a 3x ROI. Tell me about your biggest technical challenge right now.
                            </p>
                        </div>

                        {/* HUD-style Social Links */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-10">
                            {socialLinks.map((link, i) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-4 bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-between items-start">
                                            <link.icon className={`w-5 h-5 ${link.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                                            <ArrowUpRight className="w-3 h-3 text-white/20 group-hover:text-primary transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest mb-1">Link 0{i + 1}</p>
                                            <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">{link.label}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Panel: Floating Form - Spans 5 cols */}
                    <div className="lg:col-span-5 relative">
                        {/* Decorative HUD Elements */}
                        <div className="absolute -top-10 -right-10 w-20 h-20 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl hidden lg:block" />
                        <div className="absolute -bottom-10 -left-10 w-20 h-20 border-b-2 border-l-2 border-primary/20 rounded-bl-3xl hidden lg:block" />

                        <div className="relative p-8 md:p-10 bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
                            <AnimatePresence mode="wait">
                                {!success ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
                                            <div>
                                                <h3 className="text-lg font-mono text-primary tracking-widest uppercase mb-1">Project Details</h3>
                                                <p className="text-xs text-foreground/40">Tell me about your bottleneck.</p>
                                            </div>
                                            <Sparkles className="w-5 h-5 text-primary/50" />
                                        </div>

                                        <div className="space-y-6">
                                            <div className="space-y-2 group">
                                                <label className="text-[10px] font-mono text-foreground/50 uppercase tracking-wider group-focus-within:text-white transition-colors">Identification</label>
                                                <input
                                                    name="name"
                                                    required
                                                    className="w-full bg-white/[0.03] border-b border-white/10 px-0 py-2 outline-none focus:border-primary focus:bg-transparent transition-all text-sm font-medium placeholder:text-foreground/10 font-mono"
                                                    placeholder="ENTER FULL NAME"
                                                />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="text-[10px] font-mono text-foreground/50 uppercase tracking-wider group-focus-within:text-white transition-colors">Return Frequency</label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    required
                                                    className="w-full bg-white/[0.03] border-b border-white/10 px-0 py-2 outline-none focus:border-primary focus:bg-transparent transition-all text-sm font-medium placeholder:text-foreground/10 font-mono"
                                                    placeholder="ENTER EMAIL ADDRESS"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2 group">
                                                    <label className="text-[10px] font-mono text-foreground/50 uppercase tracking-wider group-focus-within:text-white transition-colors">Service Interest</label>
                                                    <select
                                                        name="service"
                                                        required
                                                        className="w-full bg-white/[0.03] border-b border-white/10 px-0 py-2 outline-none focus:border-primary focus:bg-transparent transition-all text-sm font-medium text-foreground/80 font-mono option:bg-black"
                                                    >
                                                        <option value="" className="bg-black text-foreground/50">SELECT TYPE</option>
                                                        <option value="web-dev" className="bg-black">Web Development</option>
                                                        <option value="app-dev" className="bg-black">App Development</option>
                                                        <option value="consulting" className="bg-black">Tech Consulting</option>
                                                        <option value="other" className="bg-black">Other</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-2 group">
                                                    <label className="text-[10px] font-mono text-foreground/50 uppercase tracking-wider group-focus-within:text-white transition-colors">Budget Range</label>
                                                    <select
                                                        name="budget"
                                                        required
                                                        className="w-full bg-white/[0.03] border-b border-white/10 px-0 py-2 outline-none focus:border-primary focus:bg-transparent transition-all text-sm font-medium text-foreground/80 font-mono"
                                                    >
                                                        <option value="" className="bg-black text-foreground/50">SELECT RANGE</option>
                                                        <option value="<1k" className="bg-black">&lt; $1k</option>
                                                        <option value="1k-5k" className="bg-black">$1k - $5k</option>
                                                        <option value="5k-10k" className="bg-black">$5k - $10k</option>
                                                        <option value="10k+" className="bg-black">$10k+</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="space-y-2 group">
                                                <label className="text-[10px] font-mono text-foreground/50 uppercase tracking-wider group-focus-within:text-white transition-colors">What's your biggest technical challenge right now?</label>
                                                <textarea
                                                    name="message"
                                                    required
                                                    rows={3}
                                                    className="w-full bg-white/[0.03] border-b border-white/10 px-0 py-2 outline-none focus:border-primary focus:bg-transparent transition-all text-sm font-medium placeholder:text-foreground/10 font-mono resize-none leading-relaxed"
                                                    placeholder="DESCRIBE YOUR BOTTLENECK..."
                                                />
                                            </div>
                                        </div>

                                        {error && <p className="text-red-400 text-xs font-mono border-l-2 border-red-500 pl-3 py-1">{error}</p>}

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full group relative mt-8 py-4 bg-white text-black hover:bg-primary transition-colors duration-500"
                                        >
                                            <div className="relative z-10 flex items-center justify-between px-6">
                                                <span className="text-xs font-black uppercase tracking-[0.3em]">
                                                    {loading ? "SENDING..." : "SEND MESSAGE"}
                                                </span>
                                                {loading ? (
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                ) : (
                                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                )}
                                            </div>
                                            <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="h-[450px] flex flex-col items-center justify-center text-center space-y-8"
                                    >
                                        <div className="w-20 h-20 border-2 border-primary flex items-center justify-center relative">
                                            <div className="absolute inset-0 bg-primary/20 animate-ping" />
                                            <CheckCircle2 className="w-8 h-8 text-primary" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-black uppercase tracking-tight text-white">Message Sent</h3>
                                            <p className="text-foreground/60 font-mono text-xs">I'll get back to you within 24 hours.</p>
                                        </div>
                                        <button
                                            onClick={() => setSuccess(false)}
                                            className="text-primary text-[10px] font-black uppercase tracking-[0.3em] hover:text-white transition-colors border-b border-primary/40 hover:border-white pb-1"
                                        >
                                            SEND ANOTHER MESSAGE
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

                {/* Calendly Embed Section */}
                <div className="mt-32 w-full max-w-4xl mx-auto align-center flex border-t border-white/5 pt-20 flex-col">
                    <div className="text-center mb-10 space-y-4">
                        <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">Instant Booking</span>
                        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Schedule A <span className="text-primary italic">Strategy Call.</span></h3>
                        <p className="text-foreground/50 text-sm">Select a time below for your free 20-minute technical review.</p>
                    </div>
                    <div className="h-[700px] w-full bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden">
                        <iframe
                            src="https://calendly.com/jenilrupapara48/30min"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            className="bg-transparent"
                        ></iframe>
                    </div>
                </div>

            </div>
        </Section>
    );
}
