import { getPostBySlug } from "@/lib/blog";
import BlogForm from "@/components/admin/BlogForm";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Refining Logic | Blog Management",
    description: "Refine and update existing technical articles.",
};

export default function EditBlogPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    // Map BlogPost to BlogFormData
    const formData = {
        title: post.title,
        slug: post.slug,
        date: post.rawDate,
        category: post.category,
        tags: post.tags,
        excerpt: post.excerpt,
        image: post.image,
        readTime: post.readTime,
        featured: post.featured,
        content: post.content
    };

    return (
        <main className="min-h-screen pt-24">
            <Navbar />
            <BlogForm initialData={formData} isNew={false} />
        </main>
    );
}
