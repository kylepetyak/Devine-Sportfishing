import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PlaceholderImage, ArticleSchema } from '@/components'
import { getPostBySlug, getAllPostSlugs } from '@/lib/mdx'
import { SITE_CONFIG } from '@/lib/constants'
import { Calendar, User, ArrowLeft, Phone } from 'lucide-react'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        datePublished={post.date}
        author={post.author}
        url={`${SITE_CONFIG.url}/blog/${post.slug}`}
      />

      {/* Hero */}
      <section className="relative">
        <PlaceholderImage
          category="gallery"
          label={post.title}
          aspectRatio="21:9"
        />
        <div className="absolute inset-0 bg-black/50" />
      </section>

      {/* Article */}
      <article className="section bg-white">
        <div className="container-custom max-w-3xl">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-8">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-500">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
              <span className="mx-3">|</span>
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose-custom">
            {/* MDX content would be rendered here - for now showing raw markdown */}
            <div dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }} />
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-primary text-white rounded-xl">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ready to Experience Venice Fishing?
            </h3>
            <p className="text-white/90 mb-6">
              Book your charter with Devine Sportfishing and create memories that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Book Your Trip
              </Link>
              <a
                href={SITE_CONFIG.phoneLink}
                className="flex items-center justify-center text-white font-semibold hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

// Simple markdown to HTML converter for basic formatting
function formatMarkdown(content: string): string {
  // Split content into paragraphs
  const paragraphs = content.split(/\n\n+/)

  return paragraphs
    .map((para) => {
      // Handle headings
      if (para.startsWith('### ')) {
        return `<h3>${para.slice(4)}</h3>`
      }
      if (para.startsWith('## ')) {
        return `<h2>${para.slice(3)}</h2>`
      }
      if (para.startsWith('# ')) {
        return `<h1>${para.slice(2)}</h1>`
      }

      // Handle lists
      if (para.match(/^- /m)) {
        const items = para
          .split('\n')
          .filter((line) => line.startsWith('- '))
          .map((line) => `<li>${line.slice(2)}</li>`)
          .join('')
        return `<ul>${items}</ul>`
      }

      // Handle numbered lists
      if (para.match(/^\d+\. /m)) {
        const items = para
          .split('\n')
          .filter((line) => line.match(/^\d+\. /))
          .map((line) => `<li>${line.replace(/^\d+\. /, '')}</li>`)
          .join('')
        return `<ol>${items}</ol>`
      }

      // Regular paragraph with inline formatting
      let formatted = para
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br />')

      return `<p>${formatted}</p>`
    })
    .join('\n')
}
