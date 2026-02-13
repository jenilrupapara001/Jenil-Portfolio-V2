"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "FBA Calculator",
        description: "A comprehensive tool for Amazon sellers to calculate fees and profit margins. Helps immense decision making for product sourcing.",
        tags: ["React.js", "Node.js", "Amazon SP-API", "Chart.js"],
        github: "https://github.com/jenilrupapara001",
        demo: "#",
        image: "/fba-mockup.png",
    },
    {
        title: "Payment Mail Sender",
        description: "Automated email notification system for payment confirmations. Integrated with payment gateway webhooks for real-time alerts.",
        tags: ["Node.js", "Express", "Nodemailer", "MongoDB"],
        github: "https://github.com/jenilrupapara001",
        demo: "#",
        image: "/payment-mockup.png",
    },
    {
        title: "ASIN Analytics Tool",
        description: "Analytics dashboard for tracking product performance on Amazon. Visualizes sales trends and inventory levels.",
        tags: ["Next.js", "Tailwind CSS", "Recharts", "AWS"],
        github: "https://github.com/jenilrupapara001",
        demo: "#",
        image: "/asin-mockup.png",
    },
];

export default function Projects() {
    return (
        <Section id="projects" title="Featured Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(79,70,229,0.1)] transition-all dark:bg-card/50"
                    >
                        <div className="relative h-48 overflow-hidden bg-secondary/50">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <p className="text-white font-medium">View Details</p>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-foreground/70 mb-4 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-md font-medium text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    className="flex items-center text-foreground/80 hover:text-primary transition-colors text-sm"
                                >
                                    <Github className="w-4 h-4 mr-2" /> Code
                                </Link>
                                <Link
                                    href={project.demo}
                                    target="_blank"
                                    className="flex items-center text-foreground/80 hover:text-primary transition-colors text-sm"
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
