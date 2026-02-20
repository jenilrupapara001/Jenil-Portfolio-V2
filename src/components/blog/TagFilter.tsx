"use client";

interface TagFilterProps {
    tags: string[];
    onSelect: (tag: string) => void;
}

export default function TagFilter({ tags, onSelect }: TagFilterProps) {
    if (!tags || tags.length === 0) return null;

    return (
        <div className="py-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary/40" />
                Tags
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
                {tags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => onSelect(tag)}
                        className="text-[11px] font-bold text-foreground/40 hover:text-primary transition-colors py-1 flex items-center gap-1.5 group"
                    >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">#</span>
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}
