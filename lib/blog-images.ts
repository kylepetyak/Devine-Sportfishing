// Featured images for blog posts. A post's frontmatter `featuredImage` wins;
// otherwise the slug is looked up here; otherwise the default is used.
const BLOG_IMAGES: Record<string, string> = {
  'blackened-redfish-recipe': '/images/species/inshore-species.jpg',
  'first-offshore-charter-guide': '/images/gallery/boat-action.jpg',
  'things-to-do-venice-louisiana': '/images/gallery/sunset-boat.jpg',
  'winter-tuna-fishing-guide': '/images/gallery/catch-01.jpg',
}

const DEFAULT_BLOG_IMAGE = '/images/gallery/hero-bg.jpg'

export function blogImageFor(slug: string, featuredImage?: string): string {
  return featuredImage || BLOG_IMAGES[slug] || DEFAULT_BLOG_IMAGE
}
