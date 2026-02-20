"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { BlogPost } from "@/lib/blog";
import BlogCard from "./BlogCard";
import BlogSearch from "./BlogSearch";
import CategoryFilter from "./CategoryFilter";
import TagFilter from "./TagFilter";
import Pagination from "./Pagination";
import { motion, AnimatePresence } from "framer-motion";
import { SearchX, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogListingProps {
    initialPosts: BlogPost[];
    allCategories: string[];
    allTags: string[];
}

const POSTS_PER_PAGE = 9;
const SLIDE_DURATION = 5000; // 5 seconds

export default function BlogListing({ initialPosts, allCategories, allTags }: BlogListingProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedCategory, selectedTag]);

    const filteredPosts = useMemo(() => {
        return initialPosts.filter((post) => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
            const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;

            return matchesSearch && matchesCategory && matchesTag;
        });
    }, [initialPosts, searchQuery, selectedCategory, selectedTag]);

    const featuredPosts = useMemo(() => {
        return initialPosts.filter(p => p.featured).slice(0, 5); // Keep top 5 featured
    }, [initialPosts]);

    const paginatedPosts = useMemo(() => {
        const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
        return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
    }, [filteredPosts, currentPage]);

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

    const nextSlide = useCallback(() => {
        setActiveSlide((prev) => (prev + 1) % featuredPosts.length);
    }, [featuredPosts.length]);

    const prevSlide = useCallback(() => {
        setActiveSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
    }, [featuredPosts.length]);

    // Auto-sliding logic
    useEffect(() => {
        if (isHovered || featuredPosts.length <= 1) return;

        const interval = setInterval(nextSlide, SLIDE_DURATION);
        return () => clearInterval(interval);
    }, [isHovered, featuredPosts.length, nextSlide]);

    return (
        <div className="w-full px-6 md:px-12 pb-24">
            {/* Featured Slider - Only show on page 1 of 'All' with no filters */}
            {currentPage === 1 && selectedCategory === "All" && !selectedTag && !searchQuery && featuredPosts.length > 0 && (
                <div
                    className="mb-24 relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm min-h-[500px] flex items-stretch">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSlide}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, ease: "circOut" }}
                                className="absolute inset-0 flex flex-col lg:flex-row items-stretch"
                            >
                                <div className="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto">
                                    <Image
                                        src={featuredPosts[activeSlide].image}
                                        alt={featuredPosts[activeSlide].title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:hidden" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent hidden lg:block" />
                                </div>
                                <div className="flex-1 p-8 md:p-14 flex flex-col justify-center relative z-10 bg-gradient-to-l from-white/[0.02] to-transparent">
                                    <div className="flex items-center gap-3 mb-6">
                                        <motion.span
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5"
                                        >
                                            <Sparkles className="w-3 h-3" />
                                            Featured Spotlight
                                        </motion.span>
                                        <span className="text-foreground/30 text-[10px] font-bold uppercase tracking-widest">{featuredPosts[activeSlide].date}</span>
                                    </div>
                                    <Link href={`/blogs/${featuredPosts[activeSlide].slug}`}>
                                        <h2 className="text-3xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter text-white mb-6 leading-[1.1] hover:text-primary transition-colors cursor-pointer line-clamp-2">
                                            {featuredPosts[activeSlide].title}
                                        </h2>
                                    </Link>
                                    <p className="text-lg text-foreground/50 mb-10 line-clamp-3 leading-relaxed max-w-2xl">
                                        {featuredPosts[activeSlide].excerpt}
                                    </p>
                                    <Link
                                        href={`/blogs/${featuredPosts[activeSlide].slug}`}
                                        className="inline-flex items-center gap-3 text-primary text-[11px] font-black uppercase tracking-[0.2em] group/btn w-fit"
                                    >
                                        Dive into Architecture
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5" />
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Controls */}
                        {featuredPosts.length > 1 && (
                            <div className="absolute bottom-10 right-10 z-20 flex items-center gap-4">
                                <div className="flex gap-2 mr-6">
                                    {featuredPosts.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveSlide(idx)}
                                            className={`h-1 rounded-full transition-all duration-500 ${activeSlide === idx ? "w-8 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={prevSlide}
                                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all active:scale-95"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all active:scale-95"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Background Glow */}
                    <div className="absolute -inset-4 bg-primary/5 blur-[100px] rounded-full -z-10 opacity-30" />
                </div>
            )}

            {/* Filters Section */}
            <div className="flex flex-col lg:flex-row gap-12 mb-16">
                <div className="flex-1 space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-white/[0.02] border border-white/5 p-4 rounded-3xl backdrop-blur-md">
                        <BlogSearch value={searchQuery} onChange={setSearchQuery} />
                        <CategoryFilter
                            categories={allCategories}
                            activeCategory={selectedCategory}
                            onSelect={setSelectedCategory}
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        {paginatedPosts.length > 0 ? (
                            <div className="space-y-16">
                                <motion.div
                                    key={`${selectedCategory}-${selectedTag}-${searchQuery}-${currentPage}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                                >
                                    {paginatedPosts.map((post, index) => (
                                        <BlogCard key={post.slug} post={post} index={index} />
                                    ))}
                                </motion.div>

                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={(page) => {
                                        setCurrentPage(page);
                                        document.getElementById("blog-listing")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                />
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="py-20 text-center flex flex-col items-center gap-4"
                            >
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    <SearchX className="w-8 h-8 text-foreground/40" />
                                </div>
                                <div className="max-w-xs">
                                    <h3 className="text-xl font-black uppercase tracking-tighter text-white">No articles found</h3>
                                    <p className="text-foreground/50 text-sm mt-2">Try adjusting your keywords or filters to find what you're looking for.</p>
                                </div>
                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setSelectedCategory("All");
                                        setSelectedTag(null);
                                    }}
                                    className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-primary text-xs font-black uppercase tracking-widest transition-all mt-4"
                                >
                                    Clear all filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Sidebar (Desktop) */}
                <div className="lg:w-80 flex-shrink-0 space-y-12">
                    {selectedTag && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            onClick={() => setSelectedTag(null)}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.15em] border border-primary/20 hover:bg-primary/20 transition-all backdrop-blur-sm"
                        >
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            <span>#{selectedTag}</span>
                            <span className="opacity-60 ml-2">✕</span>
                        </motion.button>
                    )}

                    <TagFilter tags={allTags} onSelect={setSelectedTag} />

                    {/* Newsletter Box (Premium Minimal) */}
                    <div className="p-8 border-t border-white/5 relative group">
                        <div className="relative z-10">
                            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white underline decoration-primary/50 underline-offset-8 mb-8">The Dispatch</h3>
                            <p className="text-[11px] text-foreground/40 mb-8 leading-loose uppercase tracking-widest font-bold">
                                Get elite engineering insights, system design blueprints, and modern tech tutorials.
                            </p>
                            <div className="space-y-4">
                                <input
                                    placeholder="your@email.com"
                                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-sm focus:outline-none focus:border-primary transition-all font-medium placeholder:text-white/10"
                                />
                                <button className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.2em] group/join">
                                    Join the Hub <ArrowRight className="w-3 h-3 group-hover/join:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
