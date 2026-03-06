"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";
import { FileText, Scale, Gavel, AlertCircle, Ban, Handshake } from "lucide-react";

export default function TermsOfServicePage() {
    const lastUpdated = "March 06, 2026";

    return (
        <div className="pt-20 md:pt-24 pb-20 md:pb-32">
            <Section id="terms-hero" title="" className="!py-16 md:!py-28">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none mb-6">
                            Terms of <br />
                            <span className="text-primary italic">Service</span>
                        </h1>
                        <p className="text-foreground/50 text-sm font-bold uppercase tracking-widest">
                            Last Updated: {lastUpdated}
                        </p>
                    </motion.div>

                    <div className="space-y-12 md:space-y-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="prose prose-invert max-w-none"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                                    <Scale className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic m-0">Agreement to Terms</h2>
                            </div>
                            <p className="text-foreground/70 leading-relaxed text-lg">
                                By accessing this website, you are agreeing to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Use License",
                                    icon: FileText,
                                    desc: "Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title."
                                },
                                {
                                    title: "Disclaimer",
                                    icon: AlertCircle,
                                    desc: "The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability."
                                },
                                {
                                    title: "Limitations",
                                    icon: Ban,
                                    desc: "In no event shall I or my suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials."
                                },
                                {
                                    title: "Governing Law",
                                    icon: Gavel,
                                    desc: "These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-500"
                                >
                                    <item.icon className="w-8 h-8 text-primary mb-6" />
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter italic">{item.title}</h3>
                                    <p className="text-foreground/50 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[2.5rem] bg-primary/[0.03] border border-primary/10"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <Handshake className="w-6 h-6 text-primary" />
                                <h2 className="text-2xl font-black uppercase tracking-tighter italic m-0">Intellectual Property</h2>
                            </div>
                            <p className="text-foreground/70 leading-relaxed italic">
                                The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited without express written permission.
                            </p>
                        </motion.div>

                        <div className="text-center pt-8">
                            <p className="text-foreground/40 text-sm">
                                By continuing to use this site, you acknowledge that you have read and understood these Terms of Service.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
