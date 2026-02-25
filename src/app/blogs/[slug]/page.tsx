import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getPostBySlug, getBlogPosts } from "@/lib/blog";
import BlogHeader from "@/components/blog/BlogHeader";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import "@/styles/mdx.css";

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: any) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Jenil Rupapara`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: ["Jenil Rupapara"],
        },
    };
}

const codeTheme = {
    theme: "github-dark",
    keepBackground: true,
};

export default async function BlogPostPage({ params }: any) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) notFound();

    return (
        <main className="min-h-screen bg-background text-foreground">
            <BlogHeader />

            <article className="pt-32 pb-28">
                {/* Article Container */}
                <div className="w-full px-6">

                    {/* Category */}
                    <div className="mb-6">
                        <span className="text-xs font-mono uppercase tracking-widest text-primary">
                            {post.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-8">
                        {post.title}
                    </h1>

                    {/* Meta Row */}
                    <div className="flex flex-wrap gap-6 items-center text-xs font-mono uppercase tracking-wider text-muted-foreground border-b border-white/10 pb-6 mb-12">

                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            {post.date}
                        </div>

                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            {post.readTime}
                        </div>

                        <div>Written by Jenil Rupapara</div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert lg:prose-lg max-w-none
            prose-headings:font-bold
            prose-headings:tracking-tight
            prose-p:leading-8
            prose-p:text-foreground/80
            prose-code:bg-white/5
            prose-code:px-1.5
            prose-code:py-0.5
            prose-pre:border
            prose-pre:border-white/10
            prose-pre:rounded-xl
            prose-img:rounded-xl
            prose-img:border
            prose-img:border-white/10
          ">
                        <MDXRemote
                            source={post.content}
                            options={{
                                parseFrontmatter: true,
                                mdxOptions: {
                                    rehypePlugins: [
                                        [rehypePrettyCode, codeTheme],
                                        rehypeSlug,
                                        [rehypeAutolinkHeadings, { behavior: "wrap" }],
                                    ],
                                },
                            }}
                        />
                    </div>

                    {/* Tags */}
                    <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap gap-3">
                        {post.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="px-4 py-1.5 rounded-lg border border-white/10 text-xs font-mono uppercase tracking-wider text-muted-foreground"
                            >
                                <Tag className="inline w-3 h-3 mr-1" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Back */}
                    <div className="mt-20 text-center">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Knowledge Hub
                        </Link>
                    </div>

                </div>
            </article>
        </main>
    );
}
