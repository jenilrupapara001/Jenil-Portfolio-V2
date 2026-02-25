"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
    id: string;
    children: ReactNode;
    className?: string;
    title?: string;
}

export default function Section({ id, children, className = "", title }: SectionProps) {
    return (
        <section id={id} className={`py-20 md:py-28 ${className}`}>
            <div className="w-full px-6 md:px-12 lg:px-20">
                {title && (
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    >
                        {title}
                    </motion.h2>
                )}
                {children}
            </div>
        </section>
    );
}
