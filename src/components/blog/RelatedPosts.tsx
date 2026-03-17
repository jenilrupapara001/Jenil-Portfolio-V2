import Link from 'next/link'
import { getRelatedPosts, BlogPost } from '@/lib/blog'

export function RelatedPosts({ currentSlug, tags }: { currentSlug: string, tags: string[] }) {
  const related = getRelatedPosts(currentSlug, tags, 3)

  if (related.length === 0) return null

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-black italic uppercase tracking-tight mb-8">
        📚 Related <span className="text-primary">Articles</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((post: BlogPost) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group block bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(var(--primary-rgb),0.2)]"
          >
            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-primary mb-3">
              {post.category || 'Engineering'}
            </p>
            <h3 className="text-lg font-bold mb-3 italic group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-foreground/50 line-clamp-3 mb-4 font-medium">
              {post.excerpt}
            </p>
            <span className="text-[10px] font-black uppercase tracking-widest text-foreground/30 group-hover:text-primary transition-colors flex items-center gap-1">
              Read more <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
