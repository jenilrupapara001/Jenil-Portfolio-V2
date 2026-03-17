import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blog'
import { allSkills } from '@/utils/skills'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jenilrupapara.vercel.app'

  const staticPages = [
    '',
    '/about',
    '/projects',
    '/skills',
    '/blogs',
    '/experience',
    '/education',
    '/contact',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/blogs' ? 'weekly' : 'monthly' as any,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const blogPosts = getBlogPosts()
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as any,
    priority: 0.6,
  }))

  const skillEntries: MetadataRoute.Sitemap = allSkills.map((skill) => ({
    url: `${baseUrl}/skills/${skill.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as any,
    priority: 0.7,
  }))

  return [...sitemapEntries, ...blogEntries, ...skillEntries]
}
