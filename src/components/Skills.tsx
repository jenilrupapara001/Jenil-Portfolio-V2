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
        title: "Infrastructure & Tools",
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
        <Section id="skills" title="Technical Arsenal" className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {skillCategories.map((category, catIndex) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                    >
                        <div className="h-full p-8 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl hover:border-primary/40 transition-all duration-500 group/card">
                            <h3 className="text-xl font-bold mb-10 text-foreground/40 uppercase tracking-[0.2em] italic group-hover/card:text-primary transition-colors duration-500">
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: (catIndex * 8 + skillIndex) * 0.03 }}
                                        className="group/skill flex flex-col items-center gap-3"
                                    >
                                        <div className="relative">
                                            <div
                                                className="absolute inset-0 blur-lg opacity-0 group-hover/skill:opacity-30 transition-opacity duration-500 rounded-full"
                                                style={{ backgroundColor: skill.color }}
                                            />
                                            <skill.icon
                                                className="w-10 h-10 relative z-10 transition-all duration-500 group-hover/skill:scale-125 group-hover/skill:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] filter grayscale group-hover/skill:grayscale-0"
                                                style={{ color: skill.color }}
                                            />
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-tighter text-foreground/20 group-hover/skill:text-foreground/60 transition-colors duration-300 whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Immersive Core Tech Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="mt-32 relative py-20 px-4 rounded-[4rem] bg-white/[0.01] border border-white/5 overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-50" />
                <h4 className="relative z-10 text-xs font-black uppercase tracking-[0.5em] text-center text-foreground/30 mb-16">
                    Production Grade Stack
                </h4>

                <div className="relative z-10 flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
                    {[
                        { icon: SiReact, color: "#61DAFB", name: "React" },
                        { icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
                        { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
                        { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
                        { icon: SiApachekafka, color: "#FFFFFF", name: "Kafka" },
                        { icon: SiAmazonwebservices, color: "#FF9900", name: "AWS" },
                        { icon: SiDocker, color: "#2496ED", name: "Docker" }
                    ].map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 2, -2, 0]
                            }}
                            transition={{
                                duration: 4 + i,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="flex flex-col items-center gap-4"
                        >
                            <tech.icon
                                className="w-14 h-14 md:w-20 md:h-20 transition-all duration-700 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                style={{ color: tech.color }}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
