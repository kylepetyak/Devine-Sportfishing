'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function ParallaxHero() {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Each layer moves at different speed
  const y0 = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const y4 = useTransform(scrollYProgress, [0, 1], ['0%', '45%'])
  const y5 = useTransform(scrollYProgress, [0, 1], ['0%', '55%'])
  const y6 = useTransform(scrollYProgress, [0, 1], ['0%', '70%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Mobile: simplified static hero
  if (isMobile) {
    return (
      <section className="relative min-h-screen bg-gradient-to-b from-ocean-deep via-ocean-dark to-sunset flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4 drop-shadow-2xl"
          >
            Devine Sportfishing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/90 mb-8 max-w-xl mx-auto drop-shadow-lg"
          >
            Premier Fishing Charters in Venice, Louisiana - The Fishing Capital of the World
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4"
          >
            <Link
              href="/trips"
              className="px-8 py-4 bg-gold hover:bg-gold-light text-ocean-deep font-bold rounded-lg transition-all"
            >
              View Trip Options
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-sm border border-white/30 transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
          <motion.a
            href={SITE_CONFIG.phoneLink}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 inline-flex items-center text-white/90 hover:text-white text-lg transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            {SITE_CONFIG.phone}
          </motion.a>
        </div>
      </section>
    )
  }

  // Desktop: full parallax
  return (
    <section ref={ref} className="relative h-[120vh] overflow-hidden">
      {/* Layer 0: Sky Gradient */}
      <motion.div
        style={{ y: y0 }}
        className="absolute inset-0 bg-gradient-to-b from-ocean-deep via-ocean-dark via-60% to-sunset"
      />

      {/* Layer 1: Clouds */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        <div className="absolute top-[15%] left-[10%] w-32 h-8 bg-white/10 rounded-full blur-xl" />
        <div className="absolute top-[20%] right-[20%] w-48 h-10 bg-white/5 rounded-full blur-xl" />
        <div className="absolute top-[12%] left-[40%] w-64 h-12 bg-white/5 rounded-full blur-2xl" />
      </motion.div>

      {/* Layer 2: Sun/Glow */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="absolute top-[45%] w-40 h-40 bg-gold rounded-full blur-3xl opacity-50" />
        <div className="absolute top-[47%] w-20 h-20 bg-[#fff4e0] rounded-full blur-xl opacity-70" />
      </motion.div>

      {/* Layer 3: Oil Rigs Silhouette */}
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[40%] left-0 right-0 flex justify-around px-20"
      >
        <svg className="w-8 h-24 text-ocean-deep/80" viewBox="0 0 32 96" fill="currentColor">
          <rect x="14" y="0" width="4" height="96" />
          <rect x="0" y="60" width="32" height="4" />
          <polygon points="16,20 8,60 24,60" />
        </svg>
        <svg className="w-6 h-16 text-ocean-deep/60" viewBox="0 0 32 96" fill="currentColor">
          <rect x="14" y="0" width="4" height="96" />
          <rect x="0" y="60" width="32" height="4" />
          <polygon points="16,20 8,60 24,60" />
        </svg>
        <svg className="w-10 h-28 text-ocean-deep/70 hidden lg:block" viewBox="0 0 32 96" fill="currentColor">
          <rect x="14" y="0" width="4" height="96" />
          <rect x="0" y="60" width="32" height="4" />
          <polygon points="16,20 8,60 24,60" />
        </svg>
      </motion.div>

      {/* Layer 4: Far Water */}
      <motion.div
        style={{ y: y4 }}
        className="absolute bottom-[30%] left-0 right-0 h-24 bg-gradient-to-b from-ocean-mid to-ocean-light"
      />

      {/* Layer 5: Mid Water with Wave */}
      <motion.div style={{ y: y5 }} className="absolute bottom-[20%] left-0 right-0">
        <svg className="w-full h-32" viewBox="0 0 1440 128" preserveAspectRatio="none">
          <path
            fill="#1a4971"
            d="M0,64 C360,128 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,128 L0,128 Z"
          />
        </svg>
      </motion.div>

      {/* Layer 6: Boat Silhouette */}
      <motion.div
        style={{ y: y6 }}
        className="absolute bottom-[25%] left-1/2 -translate-x-1/2"
      >
        <div className="w-48 h-24 relative">
          <div className="absolute bottom-0 w-full h-8 bg-ocean-deep rounded-b-lg" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-2 h-16 bg-ocean-deep" />
          <div className="absolute bottom-10 left-1/2 w-16 h-12 bg-ocean-deep/80 -skew-x-12" />
        </div>
      </motion.div>

      {/* Foreground Water */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-48" viewBox="0 0 1440 192" preserveAspectRatio="none">
          <path
            fill="#0f2744"
            d="M0,96 C240,160 480,64 720,96 C960,128 1200,64 1440,96 L1440,192 L0,192 Z"
          />
        </svg>
      </div>

      {/* Content Overlay */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-heading font-bold text-white mb-4 drop-shadow-2xl"
        >
          Devine Sportfishing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl drop-shadow-lg"
        >
          Premier Fishing Charters in Venice, Louisiana - The Fishing Capital of the World
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/trips"
            className="px-8 py-4 bg-gold hover:bg-gold-light text-ocean-deep font-bold rounded-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            View Trip Options
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-sm border border-white/30 transition-all hover:scale-105"
          >
            Contact Us
          </Link>
        </motion.div>

        <motion.a
          href={SITE_CONFIG.phoneLink}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex items-center text-white/80 hover:text-white text-lg transition-colors"
        >
          <Phone className="h-5 w-5 mr-2" />
          {SITE_CONFIG.phone}
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
