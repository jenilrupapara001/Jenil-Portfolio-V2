"use client";

import { Search } from "lucide-react";

interface BlogSearchProps {
    value: string;
    onChange: (value: string) => void;
}

export default function BlogSearch({ value, onChange }: BlogSearchProps) {
    return (
        <div className="relative group w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-foreground/40 group-focus-within:text-primary transition-colors" />
            </div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all"
            />
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
        </div>
    );
}
