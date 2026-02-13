"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { Zap, Globe2 } from "lucide-react";

const experience = [
    {
        role: "Software Developer",
        company: "Brandcentral",
        period: "May 2025 - Present",
        location: "Surat, IN",
        impact: "Cut manual reporting by 10+ hrs/week",
        description: "Sole developer responsible for full-stack architecture. Automated product listings across Alibaba & Amazon APIs. Implemented secure JWT auth and improved cross-device usability, driving a 30% boost in engagement.",
        skills: ["React.js", "Tailwind CSS", "Vercel", "Supabase", "APIs"],
        color: "from-primary/20",
    },
    {
        role: "Web Developer",
        company: "PavitraSoft",
        period: "Jan 2024 - Apr 2025",
        location: "Vapi, IN",
        impact: "40% boost in backend efficiency",
        description: "Led front-end for 10+ apps and integrated 15+ REST APIs. Automated deployments via GitHub Actions (95% success rate). Optimized performance reducing load times by 50% using lazy loading and code splitting.",
        skills: ["React.js", "Jest", "Cypress", "GitHub Actions", "Sentry"],
        color: "from-accent/20",
    },
    {
        role: "Web Developer Intern",
        company: "Symbiosis Systems",
        period: "Jul 2023 - Jan 2024",
        location: "Vapi, IN",
        impact: "35% faster page speeds",
        description: "Optimized 20+ responsive pages and integrated 10+ RESTful APIs. Collaborated with UI/UX teams to achieve 25% higher user engagement. Applied SEO best practices reducing load times by 40%.",
        skills: ["HTML5", "CSS3", "JavaScript", "REST APIs", "SEO"],
        color: "from-secondary/20",
    },
    {
        role: "Web Developer Trainee",
        company: "Adrata Technologies Pvt. Ltd.",
        period: "Jan 2023 - Jul 2023",
        location: "Ahmedabad, IN",
        impact: "30% reduced page load time",
        description: "Supported maintenance of 20+ responsive pages. Helped integrate 10+ RESTful APIs and participated in rigorous bug fixing and regression testing, significantly reducing system downtime.",
        skills: ["Frontend", "APIs", "Bug Fixing", "Testing"],
        color: "from-primary/10",
    },
];

export default function Experience() {
    return (
        <Section id="experience" title="The Career Track" className="relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative">
                {/* Connecting Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-white/10 to-transparent hidden md:block" />

                <div className="space-y-32">
                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`relative flex flex-col items-start ${index % 2 === 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"
                                }`}
                        >
                            {/* Timeline Point */}
                            <div className="absolute left-[31px] md:left-1/2 top-0 transform -translate-x-1/2 z-10">
                                <motion.div
                                    whileInView={{ scale: [0, 1.2, 1] }}
                                    className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)] border-4 border-black"
                                />
                            </div>

                            {/* Experience Card */}
                            <div className={`w-full md:w-[45%] mt-12 md:mt-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                                }`}>
                                <div className={`relative group p-10 rounded-[3rem] bg-gradient-to-br transition-all duration-700 hover:scale-[1.02] border border-white/5 backdrop-blur-3xl overflow-hidden ${job.color} to-transparent`}>

                                    {/* Period Badge */}
                                    <div className={`mb-6 flex ${index % 2 === 0 ? "md:justify-end" : "justify-start"} items-center gap-3`}>
                                        <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-[10px] font-black uppercase tracking-widest text-primary italic">
                                            {job.period}
                                        </span>
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-foreground/40 uppercase tracking-[0.2em]">
                                            <Globe2 className="w-3 h-3" />
                                            {job.location}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-none group-hover:text-primary transition-colors">
                                            {job.role}
                                        </h3>
                                        <h4 className="text-xl font-bold text-white/60 lowercase italic">
                                            @{job.company}
                                        </h4>
                                        <p className="text-foreground/40 text-sm leading-relaxed font-medium">
                                            {job.description}
                                        </p>
                                    </div>

                                    {/* Impact Strip */}
                                    <div className="mt-8 p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-4 group-hover:bg-primary/10 transition-colors">
                                        <div className="p-3 rounded-xl bg-primary/20">
                                            <Zap className="w-5 h-5 text-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">Core Result</p>
                                            <p className="text-sm font-black italic text-foreground/80">{job.impact}</p>
                                        </div>
                                    </div>

                                    {/* Skills Row */}
                                    <div className={`mt-8 flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                                        {job.skills.map(skill => (
                                            <span
                                                key={skill}
                                                className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/[0.03] border border-white/5 rounded-lg text-foreground/30 group-hover:text-foreground/60 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
