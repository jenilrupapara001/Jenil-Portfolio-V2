"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
    SiNodedotjs, SiExpress, SiMongodb, SiPostman, SiFigma,
    SiJavascript, SiHtml5, SiCss3, SiGit, SiGithub, SiVercel,
    SiAmazonwebservices, SiApachekafka, SiRedis, SiDocker, SiPrisma,
    SiFirebase, SiSocketdotio, SiPython, SiGooglecloud, SiFastapi,
    SiFlask, SiPostgresql, SiSqlite, SiMysql, SiGraphql, SiApollographql
} from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend Engineering",
        description: "Architecting high-conversion, pixel-perfect user experiences.",
        skills: [
            { name: "React.js", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Redux", icon: SiRedux, color: "#764ABC" },
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        ],
    },
    {
        title: "Backend & Systems",
        description: "Engineering scalable, event-driven autonomous backends.",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Express", icon: SiExpress, color: "#FFFFFF" },
            { name: "FastAPI", icon: SiFastapi, color: "#009688" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "Kafka", icon: SiApachekafka, color: "#FFFFFF" },
            { name: "Redis", icon: SiRedis, color: "#FF4438" },
        ],
    },
    {
        title: "Architecture & Tools",
        description: "Managing mission-critical deployment and cloud workflows.",
        skills: [
            { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
            { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
            { name: "Github", icon: SiGithub, color: "#FFFFFF" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
            { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
        ],
    },
];

export default function Skills() {
    return (
        <Section id="skills" title="" className="relative !py-12 md:!py-28">
            <div className="grid grid-cols-1 gap-8 md:gap-12 relative z-10">
                {skillCategories.map((category, catIndex) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: catIndex * 0.1 }}
                        className="p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl group/card relative overflow-hidden"
                    >
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000" />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start relative z-10">
                            <div className="lg:col-span-4 space-y-4 md:space-y-6">
                                <div className="space-y-2 md:space-y-4">
                                    <span className="text-primary font-black uppercase tracking-[0.5em] text-[8px] md:text-[10px]">Domain 0{catIndex + 1}</span>
                                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none group-hover/card:text-primary transition-colors duration-500">
                                        {category.title.split(' ')[0]} <br className="hidden sm:block" />
                                        <span className="text-foreground/40 italic">{category.title.split(' ').slice(1).join(' ')}</span>
                                    </h3>
                                </div>
                                <p className="text-foreground/40 font-medium text-base md:text-lg max-w-xs">{category.description}</p>
                                <div className="h-[1px] w-12 bg-primary/40" />
                            </div>

                            <div className="lg:col-span-8">
                                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-4 md:gap-8">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.05 * skillIndex }}
                                            className="group/skill flex flex-col gap-3 md:gap-4"
                                        >
                                            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover/skill:border-primary/40 group-hover/skill:bg-primary/5 transition-all duration-500">
                                                <div
                                                    className="absolute inset-0 blur-xl opacity-0 group-hover/skill:opacity-20 transition-opacity duration-500 rounded-full"
                                                    style={{ backgroundColor: skill.color }}
                                                />
                                                <skill.icon
                                                    className="w-6 h-6 md:w-8 md:h-8 relative z-10 transition-all duration-700 group-hover/skill:scale-110 filter grayscale group-hover/skill:grayscale-0"
                                                    style={{ color: skill.color }}
                                                />
                                            </div>
                                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-foreground/20 group-hover/skill:text-primary transition-colors">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Immersive Stack Summary */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-20 md:mt-32 p-8 md:p-24 rounded-[3rem] md:rounded-[5rem] bg-black border border-white/5 relative overflow-hidden text-center"
            >
                <div className="absolute inset-0 bg-primary/5 blur-[150px] opacity-40 rounded-full" />
                <div className="relative z-10 space-y-8 md:space-y-12">
                    <div className="space-y-2 md:space-y-4">
                        <span className="text-primary font-black uppercase tracking-[0.5em] text-[8px] md:text-[10px]">Production Grade Stack</span>
                        <h4 className="text-3xl md:text-7xl font-black uppercase tracking-tighter italic leading-tight">Engineered For <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 animate-gradient-x">Performance Hubs.</span></h4>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20">
                        {[
                            { icon: SiReact, color: "#61DAFB", name: "React" },
                            { icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
                            { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
                            { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
                            { icon: SiApachekafka, color: "#FFFFFF", name: "Kafka" },
                            { icon: SiAmazonwebservices, color: "#FF9900", name: "AWS" }
                        ].map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <tech.icon
                                    className="w-10 h-10 md:w-16 md:h-16 transition-all duration-700 hover:scale-125 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] grayscale hover:grayscale-0"
                                    style={{ color: tech.color }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
