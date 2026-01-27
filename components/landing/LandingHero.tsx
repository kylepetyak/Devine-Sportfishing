'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { LandingForm } from './LandingForm'

const benefits = [
  'USCG Licensed Husband & Wife Captain Team',
  '7+ Years Guiding in Venice Waters',
  'All Bait, Tackle & Fish Cleaning Included',
  'Custom 38\' Catamaran - Stable & Comfortable',
]

const trustBadges = [
  { label: 'USCG Licensed', icon: '🛡️' },
  { label: 'Fully Insured', icon: '✓' },
  { label: '5-Star Reviews', icon: '⭐' },
]

export function LandingHero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/hero-bg.jpg"
          alt="Venice Louisiana fishing"
          fill
          className="object-cover"
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/90 via-ocean-deep/70 to-ocean-deep/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Book Your Venice, Louisiana{' '}
              <span className="text-sunset-400">Fishing Adventure</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8">
              World-Class Offshore & Inshore Charters in &quot;Tuna Town&quot;
            </p>

            {/* Benefits */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  className="flex items-center gap-3 text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-sunset-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <span>{badge.icon}</span>
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Google Reviews Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-white">5.0</span>
                  <div className="flex text-yellow-400">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <span className="text-xs text-white/70">Google Reviews</span>
              </div>
            </motion.div>

            {/* Mobile CTA - Shows on mobile only */}
            <div className="lg:hidden mt-8">
              <a
                href="#booking-form"
                className="block w-full bg-sunset-500 hover:bg-sunset-600 text-white text-center font-bold py-4 px-6 rounded-lg transition-all shadow-lg"
              >
                REQUEST TRIP INFO
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <div id="booking-form" className="lg:pl-8">
            <LandingForm />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
