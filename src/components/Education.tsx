"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { Award, GraduationCap, ShieldCheck, Cpu, Cloud, Database, ExternalLink } from "lucide-react";
import { SiMastercard, SiAmazonwebservices, SiWalmart, SiVerizon, SiHackerrank } from "react-icons/si";

const DeloitteIcon = (props: any) => <img src="https://cdn.brandfetch.io/idIu-Ji9Le/w/320/h/320/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" alt="Deloitte" className={`${props.className} rounded-full bg-black object-contain`} />;
const SkyscannerIcon = (props: any) => <img src="https://cdn.brandfetch.io/id3CVTZRBi/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1772097415164" alt="Skyscanner" className={`${props.className} rounded-full bg-white object-contain`} />;
const DatacomIcon = (props: any) => <img src="https://cdn.brandfetch.io/idLi03Oj_s/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1695336646053" alt="Datacom" className={`${props.className} rounded-full bg-white object-contain`} />;

const certifications = [
    {
        title: "Mastercard - Cybersecurity Job Simulation",
        issuer: "Forage",
        date: "Mar 2025",
        id: "TohFrq2F6bmyMT4yX",
        category: "Cybersecurity",
        icon: SiMastercard,
        color: "text-[#EB001B]",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_E55mC8QbQHxSjNAFm_1742982988727_completion_certificate.pdf",
    },
    {
        title: "Deloitte Australia - Cyber Job Simulation",
        issuer: "Forage",
        date: "Feb 2026",
        id: "uGNNnbFpzqxR97nwv",
        category: "Cybersecurity",
        icon: DeloitteIcon,
        color: "text-white",
        link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_692e6d954ef1303b1dfd1815_1770959406216_completion_certificate.pdf",
    },
    {
        title: "Deloitte Australia - Technology Job Simulation",
        issuer: "Forage",
        date: "Dec 2025",
        id: "dHNvRbXufgf7QGx7T",
        category: "Software Engineering",
        icon: DeloitteIcon,
        color: "text-white",
        link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_692e6d954ef1303b1dfd1815_1765603410551_completion_certificate.pdf",
    },
    {
        title: "AWS APAC - Solutions Architecture Simulation",
        issuer: "Forage",
        date: "Mar 2025",
        id: "EBDFvpsuXaQJXLfoJ",
        category: "Cloud",
        icon: SiAmazonwebservices,
        color: "text-[#FF9900]",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_E55mC8QbQHxSjNAFm_1742271306762_completion_certificate.pdf",
    },
    {
        title: "Walmart USA - Advanced Software Engineering",
        issuer: "Forage",
        date: "Dec 2025",
        id: "DQwdtYbTafs7r8MoG",
        category: "Software Engineering",
        skills: ["Data Structures", "Database Design"],
        icon: SiWalmart,
        color: "text-[#0071CE]",
        link: "https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_692e6d954ef1303b1dfd1815_1764667491275_completion_certificate.pdf",
    },
    {
        title: "Skyscanner - Front-End Software Engineering",
        issuer: "Forage",
        date: "Dec 2025",
        id: "E6FiHzZRhWimFqKFy",
        category: "Software Engineering",
        icon: SkyscannerIcon,
        color: "text-white",
        link: "https://www.theforage.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_692e6d954ef1303b1dfd1815_1764654279578_completion_certificate.pdf",
    },
    {
        title: "Verizon - Cloud Platform Job Simulation",
        issuer: "Forage",
        date: "Mar 2025",
        id: "36aRTDxvKTjop4AE6",
        category: "Cloud",
        skills: ["Cloud Architecture"],
        icon: SiVerizon,
        color: "text-[#CD040B]",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/uu47f3odrfruEWjKw/aNJGnRtgfiK5fQqcR_uu47f3odrfruEWjKw_E55mC8QbQHxSjNAFm_1742332940071_completion_certificate.pdf",
    },
    {
        title: "Software Engineer",
        issuer: "HackerRank",
        date: "Mar 2025",
        category: "Software Engineering",
        skills: ["SQL"],
        icon: SiHackerrank,
        color: "text-[#00EA64]",
        link: "https://www.hackerrank.com/certificates/70e4a5ba9034",
    },
    {
        title: "Datacom - Software Development Job Simulation",
        issuer: "Forage",
        date: "Mar 2025",
        id: "4H3fHdJCJwtSZyuvf",
        category: "Software Engineering",
        icon: DatacomIcon,
        color: "text-white",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/gCW7Xki5Y3vNpBmnn/L3NcyCoAjLno9d3T9_gCW7Xki5Y3vNpBmnn_E55mC8QbQHxSjNAFm_1742993089883_completion_certificate.pdf",
    }
];

export default function Education() {
    return (
        <div className="space-y-16 md:space-y-32">
            {/* Certifications Showroom */}
            <Section id="certifications" title="" className="!py-12 md:!py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
                        <div className="space-y-3 md:space-y-4">
                            <div className="flex items-center gap-3 md:gap-4">
                                <Award className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic">Professional Licenses</h2>
                            </div>
                            <p className="text-xs md:text-base text-foreground/40 font-medium max-w-lg">
                                Industry-validated certifications and simulations verifying production-level engineering capability across Cyber, Cloud, and Software Engineering.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.title + cert.issuer}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative"
                            >
                                <div className="h-full p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden flex flex-col">

                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-6 md:mb-8">
                                        <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/[0.03] ${cert.color}`}>
                                            <cert.icon className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-foreground/20 italic">
                                            {cert.date}
                                        </span>
                                    </div>

                                    {/* Body */}
                                    <div className="space-y-2 md:space-y-3 flex-grow">
                                        <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors">
                                            {cert.title}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs md:text-sm font-bold text-white/50">{cert.issuer}</span>
                                            <div className="w-1 h-1 rounded-full bg-white/10" />
                                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-primary/60">{cert.category}</span>
                                        </div>
                                    </div>

                                    {/* Skills Section */}
                                    {cert.skills && (
                                        <div className="mt-4 md:mt-6 flex flex-wrap gap-1.5 md:gap-2">
                                            {cert.skills.map(skill => (
                                                <span key={skill} className="text-[7px] md:text-[8px] font-black uppercase tracking-widest px-1.5 md:px-2 py-0.5 md:py-1 bg-white/[0.03] rounded-md text-foreground/40">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Footer */}
                                    <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.3em] text-foreground/20">Credential ID</p>
                                            <p className="text-[9px] md:text-[10px] font-mono font-bold text-foreground/40">{cert.id || "Verified"}</p>
                                        </div>
                                        {cert.link ? (
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                                <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                                            </a>
                                        ) : (
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                                <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Academic Foundation */}
            <Section id="academic" title="" className="!py-12 md:!py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
                        <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic">Academic Foundation</h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-br from-primary/10 via-white/[0.02] to-transparent border border-white/10 backdrop-blur-3xl relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 blur-[80px] md:blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-10 md:gap-12">
                            <div className="space-y-4 md:space-y-6">
                                <div className="space-y-2">
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-primary/60">Bachelor of Technology</span>
                                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-tight group-hover:text-primary transition-colors">Computer Science <br className="hidden sm:block" /> & Engineering</h3>
                                </div>
                                <div className="flex flex-wrap gap-4 md:gap-6 pt-2">
                                    <div className="space-y-1">
                                        <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-foreground/40 text-left">Tenure</p>
                                        <p className="text-lg md:text-xl font-bold italic">2021 - 2025</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-foreground/40 text-left">Academic Rank</p>
                                        <p className="text-lg md:text-xl font-bold italic text-white/90">GPA: 8.5 / 10.0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:text-right flex flex-col justify-between items-start md:items-end">
                                <div className="p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-black/40 border border-white/5 backdrop-blur-md w-full md:w-auto">
                                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 mb-2 md:mb-3">Core Focus</p>
                                    <ul className="text-[10px] md:text-xs font-bold space-y-2 text-foreground/60 uppercase tracking-widest leading-none">
                                        <li>• Distributed Systems</li>
                                        <li>• Cloud Computing</li>
                                        <li>• DSA & Algorithms</li>
                                    </ul>
                                </div>
                                <div className="mt-6 md:mt-8 text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                                    <div className="w-8 md:w-12 h-[1px] bg-primary/20" />
                                    Active Engineering Mode
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
}
