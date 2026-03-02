"use client";

import { useState } from "react";
import { BlogPost } from "@/lib/blog";
import { deleteBlogPost } from "@/lib/blog-actions";
import { Edit2, Trash2, Plus, ExternalLink, MessageSquare, Heart, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface AdminDashboardProps {
    posts: BlogPost[];
}

export default function AdminDashboard({ posts: initialPosts }: AdminDashboardProps) {
    const [posts, setPosts] = useState(initialPosts);
    const [isDeleting, setIsDeleting] = useState<string | null>(null);

    const handleDelete = async (slug: string) => {
        if (!confirm("Are you sure you want to delete this post? This action is permanent.")) return;

        setIsDeleting(slug);
        const result = await deleteBlogPost(slug);
        if (result.success) {
            setPosts(posts.filter(p => p.slug !== slug));
        }
        setIsDeleting(null);
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h1 className="text-4xl font-black uppercase tracking-tighter text-white mb-2">Content Control</h1>
                    <p className="text-foreground/40 text-sm font-medium uppercase tracking-widest">Manage your {posts.length} articles with precision.</p>
                </div>
                <Link
                    href="/admin/blogs/new"
                    className="flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-[0.1em] hover:scale-105 transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
                >
                    <Plus className="w-4 h-4" />
                    Archive New Post
                </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {[
                    { label: "Total Articles", value: posts.length, icon: MessageSquare },
                    { label: "Featured", value: posts.filter(p => p.featured).length, icon: Heart },
                    { label: "Drafts", value: 0, icon: Edit2 },
                    { label: "Total Views", value: "1.2k", icon: Eye },
                ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                        <div className="flex justify-between items-start mb-4">
                            <stat.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-2xl font-black text-white">{stat.value}</div>
                        <div className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest mt-1">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Post Table */}
            <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-md">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-white/5">
                            <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">Article</th>
                            <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">Category</th>
                            <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">Status</th>
                            <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">Date</th>
                            <th className="px-8 py-6 text-right text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <AnimatePresence>
                            {posts.map((post) => (
                                <motion.tr
                                    key={post.slug}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group"
                                >
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                                                <Image src={post.image} alt={post.title} fill className="object-cover" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-white group-hover:text-primary transition-colors line-clamp-1">{post.title}</div>
                                                <div className="text-[10px] text-foreground/40 font-medium">/{post.slug}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-foreground/50 uppercase tracking-widest whitespace-nowrap">
                                            {post.category}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5">
                                        {post.featured ? (
                                            <span className="flex items-center gap-1.5 text-primary text-[10px] font-black uppercase tracking-widest">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                                Featured
                                            </span>
                                        ) : (
                                            <span className="text-foreground/30 text-[10px] font-bold uppercase tracking-widest">Published</span>
                                        )}
                                    </td>
                                    <td className="px-8 py-5 text-[11px] text-foreground/40 font-mono">
                                        {post.date}
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Link
                                                href={`/blogs/${post.slug}`}
                                                target="_blank"
                                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/40 hover:text-white transition-all"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </Link>
                                            <Link
                                                href={`/admin/blogs/${post.slug}`}
                                                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(post.slug)}
                                                disabled={isDeleting === post.slug}
                                                className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-all disabled:opacity-50"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
