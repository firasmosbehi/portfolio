import { MetadataRoute } from 'next'
import { getAllPosts } from '../lib/blog'
import { SITE_URL } from '../lib/seo'

const baseUrl = SITE_URL

// No lastModified on static pages: a build timestamp on every URL teaches crawlers to ignore lastmod.
const pages: { path: string; priority: number; changeFrequency: 'monthly' | 'weekly' | 'yearly' }[] = [
  { path: '', priority: 1, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/experience', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/projects', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/skills', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/education', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/certifications', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/now', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  return [
    ...pages.map((p) => ({ url: `${baseUrl}${p.path}`, changeFrequency: p.changeFrequency, priority: p.priority })),
    { url: `${baseUrl}/blog`, lastModified: posts[0]?.date, changeFrequency: 'weekly', priority: 0.8 },
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ]
}
