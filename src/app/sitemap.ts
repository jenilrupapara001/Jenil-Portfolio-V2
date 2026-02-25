import { MetadataRoute } from 'next'
import { projects } from '@/utils/projects'
import { getBlogPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://jenilrupapara.vercel.app'
    const posts = getBlogPosts()

    const baseRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/experience`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/skills`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
    ]

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly',
        priority: 0.7,
    }))

    return [...baseRoutes, ...projectRoutes, ...blogRoutes]
}
