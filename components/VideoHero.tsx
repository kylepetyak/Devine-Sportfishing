'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Play } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

interface VideoHeroProps {
  videoSrc?: string
  mobileFallbackSrc?: string
  posterSrc?: string
  headline?: string
  subheadline?: string
}

export default function VideoHero({
  videoSrc = '/images/hero/hero-video.mp4',
  mobileFallbackSrc = '/images/hero/hero-fallback.jpg',
  posterSrc = '/images/hero/hero-fallback.jpg',
  headline = 'World-Class Fishing Charters',
  subheadline = 'Venice, Louisiana',
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Attempt to play video
    if (videoRef.current && !isMobile) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked, that's fine - we have fallback
      })
    }
  }, [isMobile])

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Base (always visible as base layer) */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep via-ocean-dark to-ocean-deep" />

        {/* Image Fallback (loads before video) */}
        <Image
          src={mobileFallbackSrc}
          alt="Fishing in Venice Louisiana"
          fill
          className={`object-cover transition-opacity duration-1000 ${
            videoLoaded && !isMobile ? 'opacity-0' : 'opacity-100'
          }`}
          priority
          sizes="100vw"
        />

        {/* Video Background (desktop only) */}
        {!isMobile && (
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            poster={posterSrc}
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ocean-deep to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium">Now Booking 2025 Season</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 leading-tight">
          {headline}
        </h1>

        {/* Subheadline with accent */}
        <p className="text-3xl md:text-4xl lg:text-5xl font-heading text-gold mb-6">
          {subheadline}
        </p>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join Captain Blake & Captain Lakelynn for unforgettable
          offshore tuna fishing and inshore marsh adventures.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-ocean-deep font-bold text-lg rounded-lg transition-all hover:scale-105 shadow-lg"
          >
            Book Your Charter
          </Link>
          <a
            href={SITE_CONFIG.phoneLink}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-lg transition-all border border-white/20"
          >
            <Phone className="h-5 w-5" />
            {SITE_CONFIG.phone}
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>5.0 Google Rating</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30" />
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>USCG Licensed & Insured</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30" />
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Husband & Wife Team</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
