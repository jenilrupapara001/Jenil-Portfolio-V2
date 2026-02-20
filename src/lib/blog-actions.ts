"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { revalidatePath } from "next/cache";

const postsDirectory = path.join(process.cwd(), "content/blogs");

export type BlogFormData = {
    title: string;
    slug: string;
    date: string;
    category: string;
    tags: string[];
    excerpt: string;
    image: string;
    readTime: string;
    featured: boolean;
    content: string;
};

export async function saveBlogPost(data: BlogFormData, isNew: boolean = false) {
    if (!fs.existsSync(postsDirectory)) {
        fs.mkdirSync(postsDirectory, { recursive: true });
    }

    const { content, slug, ...frontmatter } = data;
    const filePath = path.join(postsDirectory, `${slug}.mdx`);

    // Check for slug collision on new posts
    if (isNew && fs.existsSync(filePath)) {
        throw new Error("A blog post with this slug already exists.");
    }

    const fileContent = matter.stringify(content, frontmatter);
    fs.writeFileSync(filePath, fileContent, "utf8");

    revalidatePath("/blogs");
    revalidatePath(`/blogs/${slug}`);
    revalidatePath("/admin/blogs");

    return { success: true, slug };
}

export async function deleteBlogPost(slug: string) {
    const filePath = path.join(postsDirectory, `${slug}.mdx`);

    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }

    revalidatePath("/blogs");
    revalidatePath("/admin/blogs");

    return { success: true };
}

export async function getBlogImages() {
    const imagesDirectory = path.join(process.cwd(), "public/blogs");
    if (!fs.existsSync(imagesDirectory)) return [];

    const files = fs.readdirSync(imagesDirectory);
    return files
        .filter(file => /\.(png|jpg|jpeg|webp|gif)$/i.test(file))
        .map(file => `/blogs/${file}`);
}
