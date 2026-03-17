import { getBlogPosts } from '@/lib/blog'

export async function GET() {
  const posts = getBlogPosts()
  const baseUrl = 'https://jenilrupapara.vercel.app'

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Jenil Rupapara | Senior MERN Stack Developer Blog</title>
      <link>${baseUrl}/blogs</link>
      <description>Technical articles on MERN stack, microservices, system design, and performance optimization by Jenil Rupapara.</description>
      <language>en</language>
      <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
      ${posts.map((post) => `
        <item>
          <title>${post.title}</title>
          <link>${baseUrl}/blogs/${post.slug}</link>
          <description>${post.excerpt}</description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <guid isPermaLink="true">${baseUrl}/blogs/${post.slug}</guid>
          <category>${post.category}</category>
        </item>
      `).join('')}
    </channel>
  </rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}
