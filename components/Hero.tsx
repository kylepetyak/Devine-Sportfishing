import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

interface HeroProps {
  title: string
  subtitle?: string
  showCTA?: boolean
  showPhone?: boolean
  size?: 'full' | 'large' | 'medium'
  overlay?: boolean
}

export default function Hero({
  title,
  subtitle,
  showCTA = true,
  showPhone = true,
  size = 'full',
  overlay = true,
}: HeroProps) {
  const sizeClasses = {
    full: 'min-h-screen',
    large: 'min-h-[70vh]',
    medium: 'min-h-[50vh]',
  }

  return (
    <section
      className={`relative flex items-center justify-center bg-gradient-hero ${sizeClasses[size]}`}
    >
      {/* Background placeholder - will be replaced with video/image */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-800 to-secondary">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-pattern.svg')] opacity-10" />
      </div>

      {/* Overlay */}
      {overlay && <div className="absolute inset-0 bg-black/30" />}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {showPhone && (
          <a
            href={SITE_CONFIG.phoneLink}
            className="inline-flex items-center text-2xl md:text-3xl font-bold text-accent hover:text-accent-300 transition-colors mb-8"
          >
            <Phone className="h-8 w-8 mr-3" />
            {SITE_CONFIG.phone}
          </a>
        )}

        {showCTA && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/trips" className="btn-primary text-lg px-8 py-4">
              View Trip Options
            </Link>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      {size === 'full' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      )}
    </section>
  )
}
