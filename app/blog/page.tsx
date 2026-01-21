import type { Metadata } from 'next'
import Link from 'next/link'
import { PlaceholderImage } from '@/components'
import { getAllPosts, getCategories } from '@/lib/mdx'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fishing Blog - Reports, Recipes & Tips',
  description: 'Read fishing reports, Louisiana recipes, and tips from Captain Blake Devine. Expert insights from Venice, Louisiana - the Fishing Capital of the World.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getCategories()

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Fishing Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Fishing reports, recipes, local tips, and stories from the waters of Venice, Louisiana.
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="py-8 bg-white border-b">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-gray-500 text-sm py-2">Categories:</span>
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Posts */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="card">
                  <PlaceholderImage
                    category="gallery"
                    label={post.title}
                    aspectRatio="16:9"
                  />
                  <div className="p-6">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-heading font-bold text-primary mt-2 mb-3">
                      <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                      <span className="mx-2">|</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Blog posts coming soon! Check back for fishing reports, recipes, and tips.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
