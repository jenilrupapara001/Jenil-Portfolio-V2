"use client";

import { useState, useEffect } from "react";
import { BlogFormData, saveBlogPost, getBlogImages } from "@/lib/blog-actions";
import { ArrowLeft, Save, Eye, Layout, Type, Image as ImageIcon, Tags, Calendar, Clock, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface BlogFormProps {
    initialData?: BlogFormData;
    isNew?: boolean;
}

export default function BlogForm({ initialData, isNew = false }: BlogFormProps) {
    const router = useRouter();
    const [formData, setFormData] = useState<BlogFormData>(initialData || {
        title: "",
        slug: "",
        date: new Date().toISOString().split('T')[0],
        category: "Architecture",
        tags: [],
        excerpt: "",
        image: "",
        readTime: "5 min read",
        featured: false,
        content: ""
    });

    const [images, setImages] = useState<string[]>([]);
    const [isSaving, setIsSaving] = useState(false);
    const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");

    useEffect(() => {
        getBlogImages().then(setImages);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            const result = await saveBlogPost(formData, isNew);
            if (result.success) {
                router.push("/admin/blogs");
                router.refresh();
            }
        } catch (error) {
            alert(error instanceof Error ? error.message : "Failed to save post");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-6">
                    <Link
                        href="/admin/blogs"
                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-4xl font-black uppercase tracking-tighter text-white">
                            {isNew ? "New Archive" : "Refining Logic"}
                        </h1>
                        <p className="text-foreground/40 text-sm font-medium uppercase tracking-widest">
                            {isNew ? "Initialize a new technical post." : `Editing: ${formData.slug}`}
                        </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
                        <button
                            type="button"
                            onClick={() => setActiveTab("edit")}
                            className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === "edit" ? "bg-white/10 text-white" : "text-foreground/40 hover:text-white"}`}
                        >
                            Draft
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab("preview")}
                            className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === "preview" ? "bg-white/10 text-white" : "text-foreground/40 hover:text-white"}`}
                        >
                            Preview
                        </button>
                    </div>
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="flex items-center gap-2 bg-primary text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.1em] hover:scale-105 transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] disabled:opacity-50"
                    >
                        <Save className="w-4 h-4" />
                        {isSaving ? "Syncing..." : "Commit Changes"}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Editor */}
                <div className="lg:col-span-2 space-y-8">
                    {activeTab === "edit" ? (
                        <div className="space-y-6">
                            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 mb-4">
                                    <Type className="w-3 h-3" />
                                    Main Content (Markdown)
                                </label>
                                <textarea
                                    required
                                    rows={25}
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    className="w-full bg-transparent border-none text-white font-mono text-sm focus:ring-0 placeholder:text-white/5 resize-none leading-relaxed"
                                    placeholder="# Start your technical deep dive here..."
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-md prose prose-invert max-w-none">
                            <h1>{formData.title}</h1>
                            <p className="lead">{formData.excerpt}</p>
                            <hr className="border-white/5" />
                            {/* Simple Markdown Render - In a real app we'd use a lib here */}
                            <div className="font-sans whitespace-pre-wrap text-foreground/70">
                                {formData.content}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar Controls */}
                <div className="space-y-6">
                    {/* Metadata Card */}
                    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-md space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Metadata</h3>

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-foreground/30 mb-2">Title</label>
                            <input
                                type="text"
                                required
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-primary transition-all outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-foreground/30 mb-2">Slug</label>
                            <input
                                type="text"
                                required
                                disabled={!isNew}
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-primary transition-all outline-none disabled:opacity-50"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-foreground/30 mb-2">Date</label>
                                <input
                                    type="date"
                                    required
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-primary transition-all outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-foreground/30 mb-2">Read Time</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.readTime}
                                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-primary transition-all outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-foreground/30 mb-2">Category</label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-primary transition-all outline-none appearance-none"
                            >
                                {["Architecture", "Backend", "DevOps", "Performance", "SaaS", "Security", "Hiring"].map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-foreground/30 mb-2">Tags (Space separated)</label>
                            <input
                                type="text"
                                value={formData.tags.join(" ")}
                                onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(" ").filter(t => t !== "") })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-primary transition-all outline-none"
                                placeholder="nodejs mern microservices"
                            />
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Featured Post</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, featured: !formData.featured })}
                                className={`w-12 h-6 rounded-full p-1 transition-all ${formData.featured ? "bg-primary" : "bg-white/10"}`}
                            >
                                <div className={`w-4 h-4 rounded-full bg-black transition-all ${formData.featured ? "translate-x-6" : "translate-x-0"}`} />
                            </button>
                        </div>
                    </div>

                    {/* Image Card */}
                    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-md space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Visual Identity</h3>

                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                            {formData.image ? (
                                <Image src={formData.image} alt="Preview" fill className="object-cover" />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-foreground/20 italic text-xs">No image selected</div>
                            )}
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-foreground/30 mb-2">Select Visual</label>
                            <select
                                required
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-primary transition-all outline-none"
                            >
                                <option value="">Select an image...</option>
                                {images.map(img => (
                                    <option key={img} value={img}>{img.split('/').pop()}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Excerpt Card */}
                    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-foreground/30 mb-4">Post Summary</label>
                        <textarea
                            required
                            rows={4}
                            value={formData.excerpt}
                            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-sm text-white focus:border-primary transition-all outline-none resize-none leading-relaxed"
                            placeholder="A brief high-level overview of the article..."
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}
