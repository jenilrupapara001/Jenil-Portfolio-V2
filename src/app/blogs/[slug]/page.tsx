import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getPostBySlug, getBlogPosts } from "@/lib/blog";
import BlogHeader from "@/components/blog/BlogHeader";
import { ArrowLeft, Calendar, Clock, Tag, ChevronRight } from "lucide-react";
import "@/styles/mdx.css";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import Image from "next/image";

function extractHeadings(content: string) {
    const headingLines = content.split('\n').filter(line => line.match(/^#{2,3}\s/));
    return headingLines.map(line => {
        const level = (line.match(/^#+/) || [''])[0].length;
        const text = line.replace(/^#+\s/, '').trim();
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        return { id, text, level };
    });
}

function ArticleJsonLd({ post }: { post: any }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: post.title,
        description: post.excerpt,
        author: {
            "@type": "Person",
            name: "Jenil Rupapara",
            url: "https://jenilrupapara.vercel.app",
        },
        datePublished: post.rawDate,
        dateModified: post.rawDate, // Fallback to rawDate if updatedDate is missing
        publisher: {
            "@type": "Person",
            name: "Jenil Rupapara",
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://jenilrupapara.vercel.app/blogs/${post.slug}`,
        },
        image: `https://jenilrupapara.vercel.app${post.image}`,
        keywords: post.tags.join(", "),
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

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
        alternates: {
            canonical: `https://jenilrupapara.vercel.app/blogs/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://jenilrupapara.vercel.app/blogs/${slug}`,
            type: "article",
            publishedTime: post.date,
            authors: ["Jenil Rupapara"],
            images: [{
                url: `https://jenilrupapara.vercel.app/api/og?title=${encodeURIComponent(post.title)}&subtitle=${post.readTime}`,
                width: 1200,
                height: 630,
                alt: post.title,
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
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

    const headings = extractHeadings(post.content);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <ArticleJsonLd post={post} />
            <BlogHeader />

            <article className="pt-32 pb-28">
                {/* Article Container */}
                <div className="max-w-4xl mx-auto px-6">

                    {/* Breadcrumbs */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-8 overflow-hidden whitespace-nowrap">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3 shrink-0" />
                        <Link href="/blogs" className="hover:text-primary transition-colors">Blog</Link>
                        <ChevronRight className="w-3 h-3 shrink-0" />
                        <span className="text-primary truncate">{post.title}</span>
                    </nav>

                    {/* Category */}
                    <div className="mb-4">
                        <span className="text-xs font-mono uppercase tracking-widest text-primary">
                            {post.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.9] mb-8 italic uppercase">
                        {post.title}
                    </h1>

                    {/* Meta Row */}
                    <div className="flex flex-wrap gap-6 items-center text-[10px] font-black uppercase tracking-widest text-muted-foreground border-b border-white/5 pb-8 mb-12">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            {post.date}
                        </div>

                        <div className="flex items-center gap-2 border-l border-white/10 pl-6">
                            <Clock className="w-4 h-4 text-primary" />
                            {post.readTime}
                        </div>

                        <div className="border-l border-white/10 pl-6 hidden sm:block">
                            By Jenil Rupapara
                        </div>
                    </div>

                    {/* Featured Image */}
                    {post.image && (
                        <div className="relative aspect-[16/9] mb-12 rounded-[2rem] overflow-hidden border border-white/5">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    )}

                    {/* Table of Contents */}
                    <TableOfContents headings={headings} />

                    {/* Content */}
                    <div className="prose prose-invert lg:prose-xl max-w-none
            prose-headings:font-black
            prose-headings:tracking-tighter
            prose-headings:uppercase
            prose-headings:italic
            prose-p:leading-relaxed
            prose-p:text-foreground/70
            prose-code:bg-white/5
            prose-code:px-1.5
            prose-code:py-0.5
            prose-code:rounded
            prose-code:text-primary
            prose-pre:border
            prose-pre:border-white/5
            prose-pre:rounded-2xl
            prose-pre:bg-black/50
            prose-img:rounded-[2rem]
            prose-img:border
            prose-img:border-white/5
            prose-a:text-primary
            prose-a:no-underline
            hover:prose-a:underline
            prose-strong:text-white
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

                    {/* Author Box */}
                    <AuthorBox />

                    {/* Related Posts */}
                    <RelatedPosts currentSlug={slug} tags={post.tags} />

                    {/* CTA Box */}
                    <div className="mt-20 p-10 md:p-16 rounded-[3rem] bg-primary relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)] opacity-50" />
                        <div className="relative z-10 text-center text-white">
                            <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-none mb-6">
                                Scalable Systems? <br />
                                Let's Build Them.
                            </h3>
                            <p className="text-white/80 font-medium mb-10 max-w-lg mx-auto leading-relaxed">
                                I help companies build high-performance MERN applications that scale to millions.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-12 py-5 bg-white text-primary rounded-full text-xs font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl"
                            >
                                Let's Talk 🚀
                            </Link>
                        </div>
                    </div>

                    {/* Back */}
                    <div className="mt-20 text-center">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 hover:text-primary transition-all group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Knowledge Hub
                        </Link>
                    </div>

                </div>
            </article>
        </main>
    );
}
