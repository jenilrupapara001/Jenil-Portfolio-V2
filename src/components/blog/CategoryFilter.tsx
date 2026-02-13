"use client";

import { motion } from "framer-motion";

interface CategoryFilterProps {
    categories: string[];
    activeCategory: string;
    onSelect: (category: string) => void;
}

export default function CategoryFilter({ categories, activeCategory, onSelect }: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap gap-2">
            <button
                onClick={() => onSelect("All")}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all border ${activeCategory === "All"
                        ? "bg-primary text-white border-primary"
                        : "bg-white/[0.03] text-foreground/60 border-white/5 hover:border-white/20 hover:text-white"
                    }`}
            >
                All
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelect(category)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all border ${activeCategory === category
                            ? "bg-primary text-white border-primary"
                            : "bg-white/[0.03] text-foreground/60 border-white/5 hover:border-white/20 hover:text-white"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
