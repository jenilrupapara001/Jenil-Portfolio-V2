"use client";

import { BlogPost } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Clock, Tag } from "lucide-react";

interface LatestBlogsProps {
    posts: BlogPost[];
}

export default function LatestBlogs({ posts }: LatestBlogsProps) {
    if (posts.length === 0) return null;

    const featuredPost = posts.find(p => p.featured) || posts[0];
    const otherPosts = posts.filter(p => p.slug !== featuredPost.slug).slice(0, 3);

    return (
        <div className="w-full space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Featured Pillar Post */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 group"
                >
                    <Link href={`/blogs/${featuredPost.slug}`} className="block relative aspect-[16/10] overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/5">
                        <Image
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                                    <Sparkles className="w-3 h-3" />
                                    Featured Analysis
                                </span>
                                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{featuredPost.date}</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none group-hover:text-primary transition-colors">
                                {featuredPost.title}
                            </h3>
                            <p className="text-white/60 text-lg line-clamp-2 max-w-2xl font-medium">
                                {featuredPost.excerpt}
                            </p>
                        </div>
                    </Link>
                </motion.div>

                {/* Other Premium Insights */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
                    {otherPosts.map((post, idx) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link href={`/blogs/${post.slug}`} className="group flex flex-col gap-4 p-6 rounded-3xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{post.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{post.readTime}</span>
                                </div>
                                <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors">
                                    {post.title}
                                </h4>
                                <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                                    Read Depth <ArrowRight className="w-3 h-3" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                    
                    <div className="pt-6">
                        <Link href="/blogs" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all inline-flex items-center gap-4 text-xs">
                            Access All 10 Engineering Blueprints <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
