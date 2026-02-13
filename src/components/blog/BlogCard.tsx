"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, Tag } from "lucide-react";
import { BlogPost } from "@/lib/blog";

export default function BlogCard({ post, index }: { post: BlogPost; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col h-full"
        >
            <Link href={`/blogs/${post.slug}`} className="block h-full">
                <div className="relative h-full bg-white/[0.03] border border-white/[0.08] rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 group-hover:bg-white/[0.06] backdrop-blur-sm shadow-lg group-hover:shadow-primary/10">

                    {/* Image Container */}
                    <div className="h-48 w-full relative overflow-hidden border-b border-white/5">
                        {post.image ? (
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10" />
                        )}

                        <div className="absolute inset-0 bg-primary/20 blur-[50px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

                        <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-primary backdrop-blur-md">
                                {post.category}
                            </span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-xs text-foreground/40 font-mono mb-4">
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-3 h-3" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-3 h-3" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                            {post.title}
                        </h3>

                        <p className="text-sm text-foreground/60 leading-relaxed mb-6 line-clamp-3 flex-grow">
                            {post.excerpt}
                        </p>

                        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                            <div className="flex items-center gap-2">
                                {post.tags.slice(0, 2).map(tag => (
                                    <span key={tag} className="text-[10px] uppercase tracking-wider text-foreground/40 font-mono">
                                        #{tag}
                                    </span>
                                ))}
                                {post.tags.length > 2 && (
                                    <span className="text-[10px] text-foreground/40 font-mono">+{post.tags.length - 2}</span>
                                )}
                            </div>
                            <div className="flex items-center gap-1 text-xs font-black uppercase tracking-widest text-white group-hover:translate-x-1 transition-transform">
                                Read Post
                                <ArrowUpRight className="w-3 h-3 text-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
