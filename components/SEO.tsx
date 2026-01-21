import { SITE_CONFIG } from '@/lib/constants'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  canonical,
  ogImage,
  noIndex,
}: SEOProps) {
  const fullTitle = title.includes(SITE_CONFIG.name)
    ? title
    : `${title} | ${SITE_CONFIG.name}`

  return {
    title: fullTitle,
    description,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: canonical || SITE_CONFIG.url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage || `${SITE_CONFIG.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage || `${SITE_CONFIG.url}/og-image.jpg`],
    },
  }
}

// LocalBusiness Schema
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.2756,
      longitude: -89.3528,
    },
    priceRange: '$900-$2500',
    image: SITE_CONFIG.logo,
    sameAs: [SITE_CONFIG.social.instagram, SITE_CONFIG.social.facebook],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '05:00',
      closes: '20:00',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// TouristTrip Schema for trip pages
export function TouristTripSchema({
  tripName,
  description,
  price,
  duration,
}: {
  tripName: string
  description: string
  price: number
  duration: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tripName,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
    },
    touristType: 'Fishing enthusiasts',
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    itinerary: {
      '@type': 'ItemList',
      description: `${duration} fishing charter in Venice, Louisiana`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Article Schema for blog posts
export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  image,
  url,
}: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author: string
  image?: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE_CONFIG.logo,
      },
    },
    image: image || `${SITE_CONFIG.url}/og-image.jpg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// FAQ Schema
export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
