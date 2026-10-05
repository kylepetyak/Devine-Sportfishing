import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { getAllPosts } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/trips`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/trips/offshore`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/trips/inshore`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/trips/custom`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/tuna-fishing-venice-la`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/houston-fishing-charter`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/dallas-fishing-charter`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/austin-fishing-charter`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/atlanta-fishing-charter`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/chicago-fishing-charter`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: 'yearly',
    priority: 0.5,
  }))

  // /book and its thank-you page are paid-ads landing pages and are noindex.
  return [...staticRoutes, ...blogRoutes]
}
