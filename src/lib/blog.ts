import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { format } from "date-fns";

const postsDirectory = path.join(process.cwd(), "content/blogs");

export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    category: string;
    tags: string[];
    excerpt: string;
    image: string;
    readTime: string;
    featured: boolean;
    content: string;
};

export function getBlogPosts(): BlogPost[] {
    if (!fs.existsSync(postsDirectory)) return [];

    const fileNames = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'));
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        if (!fs.statSync(fullPath).isFile()) return null;

        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            content,
            ...(data as any),
            date: data.date ? format(new Date(data.date), "MMMM dd, yyyy") : "",
        };
    }).filter(Boolean) as BlogPost[];

    return allPostsData.sort((a, b) => {
        return new Date(a.date) < new Date(b.date) ? 1 : -1;
    });
}

export function getFeaturedPost(): BlogPost | undefined {
    const posts = getBlogPosts();
    return posts.find((post) => post.featured) || posts[0];
}

export function getPostBySlug(slug: string): (BlogPost & { rawDate: string }) | undefined {
    const posts = getBlogPosts();
    const post = posts.find((p) => p.slug === slug);
    if (!post) return undefined;

    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
        ...post,
        rawDate: data.date ? new Date(data.date).toISOString().split('T')[0] : ""
    };
}

export function getAllTags(): string[] {
    const posts = getBlogPosts();
    const tagCounts: Record<string, number> = {};
    posts.forEach((post) => {
        post.tags?.forEach((tag) => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
    });
    return Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a]);
}

export function getAllCategories(): string[] {
    const posts = getBlogPosts();
    const categories = new Set<string>();
    posts.forEach((post) => {
        if (post.category) categories.add(post.category);
    });
    return Array.from(categories);
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit: number = 3): BlogPost[] {
    const posts = getBlogPosts();
    return posts
        .filter((post) => post.slug !== currentSlug)
        .map((post) => ({
            post,
            score: post.tags?.filter((tag) => tags.includes(tag)).length || 0,
        }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map((item) => item.post);
}
