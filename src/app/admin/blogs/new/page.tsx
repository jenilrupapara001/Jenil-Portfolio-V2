import BlogForm from "@/components/admin/BlogForm";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "New Article | Blog Management",
    description: "Archive a new technical post in your portfolio.",
};

export default function NewBlogPage() {
    return (
        <main className="min-h-screen pt-24">
            <Navbar />
            <BlogForm isNew={true} />
        </main>
    );
}
