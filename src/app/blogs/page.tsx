import { getBlogPosts, getAllCategories, getAllTags } from "@/lib/blog";
import BlogHero from "@/components/blog/BlogHero";
import BlogListing from "@/components/blog/BlogListing";
import Section from "@/components/Section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Blog | Jenil Rupapara",
    description: "Explore insights on full-stack development, MERN architecture, and system design.",
};

export default function BlogPage() {
    const posts = getBlogPosts();
    const categories = getAllCategories();
    const tags = getAllTags();

    return (
        <main className="min-h-screen">
            <BlogHero />
            <div id="blog-listing" className="w-full">
                <BlogListing
                    initialPosts={posts}
                    allCategories={categories}
                    allTags={tags}
                />
            </div>
        </main>
    );
}
