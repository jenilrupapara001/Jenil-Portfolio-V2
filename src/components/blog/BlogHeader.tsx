import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogHeader() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    href="/blogs"
                    className="flex items-center gap-2 text-sm text-foreground/60 hover:text-white transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Knowledge Hub
                </Link>
                <div className="text-xs font-mono text-foreground/40 uppercase tracking-widest">
                    Jenil's Blog
                </div>
            </div>
        </div>
    );
}
