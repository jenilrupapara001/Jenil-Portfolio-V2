"use client";

interface TagFilterProps {
    tags: string[];
    onSelect: (tag: string) => void;
}

export default function TagFilter({ tags, onSelect }: TagFilterProps) {
    return (
        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
            <h3 className="text-sm font-black uppercase tracking-widest text-white mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => onSelect(tag)}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-[10px] font-mono uppercase tracking-wider text-foreground/50 hover:text-primary hover:border-primary/30 transition-all"
                    >
                        #{tag}
                    </button>
                ))}
            </div>
        </div>
    );
}
