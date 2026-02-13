"use client";

import { useState, useMemo } from "react";
import { BlogPost } from "@/lib/blog";
import BlogCard from "./BlogCard";
import BlogSearch from "./BlogSearch";
import CategoryFilter from "./CategoryFilter";
import TagFilter from "./TagFilter";
import { motion, AnimatePresence } from "framer-motion";
import { SearchX } from "lucide-react";

interface BlogListingProps {
    initialPosts: BlogPost[];
    allCategories: string[];
    allTags: string[];
}

export default function BlogListing({ initialPosts, allCategories, allTags }: BlogListingProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredPosts = useMemo(() => {
        return initialPosts.filter((post) => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
            const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;

            return matchesSearch && matchesCategory && matchesTag;
        });
    }, [initialPosts, searchQuery, selectedCategory, selectedTag]);

    return (
        <div className="w-full px-6 md:px-12 pb-24">
            {/* Filters Section */}
            <div className="flex flex-col lg:flex-row gap-12 mb-16">
                <div className="flex-1 space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                        <BlogSearch value={searchQuery} onChange={setSearchQuery} />
                        <CategoryFilter
                            categories={allCategories}
                            activeCategory={selectedCategory}
                            onSelect={setSelectedCategory}
                        />
                    </div>

                    {selectedTag && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            onClick={() => setSelectedTag(null)}
                            className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-bold border border-primary/20 hover:bg-primary/20 transition-all backdrop-blur-sm"
                        >
                            <span>#{selectedTag}</span>
                            <span className="text-[10px] ml-1 opacity-60">✕</span>
                        </motion.button>
                    )}

                    <AnimatePresence mode="wait">
                        {filteredPosts.length > 0 ? (
                            <motion.div
                                layout
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                            >
                                {filteredPosts.map((post, index) => (
                                    <BlogCard key={post.slug} post={post} index={index} />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="py-20 text-center flex flex-col items-center gap-4"
                            >
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                                    <SearchX className="w-8 h-8 text-foreground/40" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">No articles found</h3>
                                    <p className="text-foreground/50">Try identifying different keywords or filters.</p>
                                </div>
                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setSelectedCategory("All");
                                        setSelectedTag(null);
                                    }}
                                    className="text-primary text-sm font-bold hover:underline mt-2"
                                >
                                    Clear all filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Sidebar (Desktop) */}
                <div className="lg:w-80 flex-shrink-0 space-y-8">
                    <TagFilter tags={allTags} onSelect={setSelectedTag} />

                    {/* Newsletter Box (Placeholder) */}
                    <div className="p-6 bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 rounded-3xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 blur-2xl" />
                        <div className="relative z-10">
                            <h3 className="text-lg font-black uppercase tracking-tight text-white mb-2">Stay Updated</h3>
                            <p className="text-xs text-foreground/60 mb-4 leading-relaxed">
                                Get the latest engineering insights and tutorials directly to your inbox.
                            </p>
                            <input
                                placeholder="Enter your email"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-xs mb-3 focus:outline-none focus:border-primary/50 transition-all"
                            />
                            <button className="w-full py-3 bg-white text-black rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
