"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Bell, CheckCircle } from "lucide-react";

export default function PrivacyPolicyPage() {
    const lastUpdated = "March 06, 2026";

    return (
        <div className="pt-20 md:pt-24 pb-20 md:pb-32">
            <Section id="privacy-hero" title="" className="!py-16 md:!py-28">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none mb-6">
                            Privacy <br />
                            <span className="text-primary italic">Policy</span>
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
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic m-0">Introduction</h2>
                            </div>
                            <p className="text-foreground/70 leading-relaxed text-lg">
                                Your privacy is of paramount importance to me. This Privacy Policy outlines how I handle any information that may be collected when you visit my portfolio website. I am committed to protecting your personal data and ensuring transparency in all my digital interactions.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Information Collection",
                                    icon: Eye,
                                    desc: "I do not collect personally identifiable information unless you voluntarily provide it through the contact form. Standard server logs and analytics may capture non-identifying data like browser type and visit duration."
                                },
                                {
                                    title: "Data Usage",
                                    icon: FileText,
                                    desc: "Any information you provide is used solely to respond to your inquiries or provide the services you've requested. I do not sell, trade, or otherwise transfer your data to outside parties."
                                },
                                {
                                    title: "Cookies",
                                    icon: Lock,
                                    desc: "This site may use essential cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though some site features may be affected."
                                },
                                {
                                    title: "Security",
                                    icon: CheckCircle,
                                    desc: "I implement industry-standard security measures to maintain the safety of your information. Your data is stored on secure servers and access is restricted to authorized personnel only."
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
                                <Bell className="w-6 h-6 text-primary" />
                                <h2 className="text-2xl font-black uppercase tracking-tighter italic m-0">Changes to Policy</h2>
                            </div>
                            <p className="text-foreground/70 leading-relaxed italic">
                                I reserve the right to update this policy at any time. Any changes will be posted on this page with an updated revision date. I encourage you to periodically review this policy to stay informed about how I am protecting your information.
                            </p>
                        </motion.div>

                        <div className="text-center pt-8">
                            <p className="text-foreground/40 text-sm">
                                If you have any questions regarding this privacy policy, you may contact me via the contact page.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
