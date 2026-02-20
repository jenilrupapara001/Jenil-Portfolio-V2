"use client";

import { motion } from "framer-motion";

interface CategoryFilterProps {
    categories: string[];
    activeCategory: string;
    onSelect: (category: string) => void;
}

export default function CategoryFilter({ categories, activeCategory, onSelect }: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap gap-2 md:gap-3">
            <button
                onClick={() => onSelect("All")}
                className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${activeCategory === "All"
                    ? "bg-primary text-white border-primary shadow-[0_10px_20px_-5px_rgba(var(--primary-rgb),0.3)]"
                    : "bg-white/[0.03] text-foreground/40 border-white/5 hover:border-white/10 hover:text-white"
                    }`}
            >
                All Articles
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelect(category)}
                    className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${activeCategory === category
                        ? "bg-primary text-white border-primary shadow-[0_10px_20px_-5px_rgba(var(--primary-rgb),0.3)]"
                        : "bg-white/[0.03] text-foreground/40 border-white/5 hover:border-white/10 hover:text-white"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
