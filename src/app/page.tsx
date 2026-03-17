import { getBlogPosts } from "@/lib/blog";
import HomeClient from "@/components/HomeClient";

export const metadata = {
    title: "Senior MERN Stack & Next.js Developer | Jenil Rupapara",
    description: "Architecting horizontally scalable MERN systems designed for peak performance and extreme developer velocity.",
};

export default function Home() {
    const posts = getBlogPosts();
    
    return <HomeClient posts={posts} />;
}