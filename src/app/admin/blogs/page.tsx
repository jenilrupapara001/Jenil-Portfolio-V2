import { getBlogPosts } from "@/lib/blog";
import AdminDashboard from "@/components/admin/AdminDashboard";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Admin | Blog Management",
    description: "Manage your portfolio blog posts with precision.",
};

export default function AdminPage() {
    const posts = getBlogPosts();

    return (
        <main className="min-h-screen pt-24">
            <Navbar />
            <AdminDashboard posts={posts} />
        </main>
    );
}
