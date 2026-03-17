import { getBlogPosts, getAllCategories, getAllTags } from "@/lib/blog";
import BlogHero from "@/components/blog/BlogHero";
import BlogListing from "@/components/blog/BlogListing";
import Section from "@/components/Section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { GridPattern } from "@/components/GridPattern";

export const metadata = {
    title: "Blog | Jenil Rupapara",
    description: "Explore insights on full-stack development, MERN architecture, and system design.",
};

export default function BlogPage() {
    const posts = getBlogPosts();
    const categories = getAllCategories();
    const tags = getAllTags();

    return (
        <PageTransition>
            <main className="min-h-screen relative overflow-hidden">
                <GridPattern opacity={0.3} />
                <BlogHero />
                <div id="blog-listing" className="w-full relative z-10 pb-32">
                    <BlogListing
                        initialPosts={posts}
                        allCategories={categories}
                        allTags={tags}
                    />
                </div>
            </main>
        </PageTransition>
    );
}
