"use client";

import { Github, Linkedin, Mail, Twitter, ShieldCheck, Globe, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
    { name: "GitHub", href: "https://github.com/jenilrupapara001", icon: Github, color: "hover:text-white" },
    { name: "LinkedIn", href: "https://linkedin.com/in/jenilrupapara-fullstack-developer", icon: Linkedin, color: "hover:text-blue-400" },
    { name: "Email", href: "mailto:jenilrupapara340@gmail.com", icon: Mail, color: "hover:text-primary" },
];

export default function Footer() {
    return (
        <footer className="relative bg-black border-t border-white/5 pt-20 pb-10 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start mb-20">
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-8 text-center md:text-left">
                        <Link href="/" className="flex items-center justify-center md:justify-start gap-4 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-pulse" />
                                <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                            <span className="text-3xl font-black uppercase tracking-tighter italic leading-none">
                                Jenil<span className="text-primary tracking-[-0.1em]">.</span>
                            </span>
                        </Link>
                        <p className="text-foreground/40 font-medium text-lg leading-relaxed max-w-sm mx-auto md:mx-0">
                            Engineering <span className="text-white italic">resilient ecosystems</span> and high-performance engineering for the next generation of digital infrastructure.
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border border-black bg-white/[0.05] backdrop-blur-md flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-foreground/20 ml-2">System Uptime: 99.99%</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-4 grid grid-cols-2 gap-8 text-center md:text-left">
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Capabilities</h4>
                            <ul className="space-y-4">
                                {["About Hub", "Technical Skills", "Architecture"].map((item) => (
                                    <li key={item}>
                                        <Link href={`/${item.split(' ')[0].toLowerCase()}`} className="text-foreground/40 hover:text-white transition-colors text-sm font-black uppercase tracking-widest leading-none">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Showroom</h4>
                            <ul className="space-y-4">
                                {["Projects", "Experience", "Contact"].map((item) => (
                                    <li key={item}>
                                        <Link href={`/${item.toLowerCase()}`} className="text-foreground/40 hover:text-white transition-colors text-sm font-black uppercase tracking-widest leading-none">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Socials & Connect */}
                    <div className="md:col-span-3 space-y-8 text-center md:text-left">
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Sync Logic</h4>
                            <div className="flex justify-center md:justify-start gap-4">
                                {socialLinks.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center transition-all duration-500 hover:border-primary/40 hover:bg-primary/5 ${item.color} group`}
                                    >
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4 justify-center md:justify-start group cursor-default">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[8px] font-black uppercase tracking-widest text-foreground/40">Network Status</span>
                                <span className="text-xs font-black italic">Active IST</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20 select-none">
                        &copy; {new Date().getFullYear()} JENIL RUPAPARA • FULL-STACK ARCHITECT
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-3 h-3 text-green-500/50" />
                            <span className="text-[8px] font-black uppercase tracking-widest text-foreground/20">Secure Production Environment</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="w-3 h-3 text-blue-500/50" />
                            <span className="text-[8px] font-black uppercase tracking-widest text-foreground/20">v2.0.4-LATEST</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
