'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  location: string
  rating: number
  tripType: string
}

interface TestimonialCarousel3DProps {
  testimonials: Testimonial[]
  autoRotate?: boolean
  interval?: number
}

export default function TestimonialCarousel3D({
  testimonials,
  autoRotate = true,
  interval = 5000,
}: TestimonialCarousel3DProps) {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  // Auto-rotate
  useEffect(() => {
    if (!autoRotate || isPaused) return

    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [autoRotate, isPaused, interval, next])

  const getCardStyle = (index: number) => {
    const offset = index - active

    // Normalize offset for wrapping
    let normalizedOffset = offset
    if (offset > testimonials.length / 2) {
      normalizedOffset = offset - testimonials.length
    } else if (offset < -testimonials.length / 2) {
      normalizedOffset = offset + testimonials.length
    }

    const isActive = normalizedOffset === 0
    const absOffset = Math.abs(normalizedOffset)

    return {
      x: normalizedOffset * 320,
      scale: isActive ? 1 : 0.85 - absOffset * 0.05,
      rotateY: normalizedOffset * -15,
      z: isActive ? 100 : -absOffset * 100,
      opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.3,
      zIndex: 10 - absOffset,
    }
  }

  return (
    <div
      className="relative py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cards Container */}
      <div className="relative h-[400px] md:h-[350px] flex items-center justify-center perspective-1000">
        <AnimatePresence mode="popLayout">
          {testimonials.map((testimonial, index) => {
            const style = getCardStyle(index)

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  rotateY: style.rotateY,
                  z: style.z,
                  opacity: style.opacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
                style={{
                  zIndex: style.zIndex,
                  transformStyle: 'preserve-3d',
                }}
                className="absolute w-[300px] md:w-[400px]"
                onClick={() => setActive(index)}
              >
                <TestimonialCard
                  testimonial={testimonial}
                  isActive={index === active}
                />
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-20"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-20"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === active
                ? 'w-8 bg-gold'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function TestimonialCard({
  testimonial,
  isActive,
}: {
  testimonial: Testimonial
  isActive: boolean
}) {
  return (
    <div
      className={`bg-gradient-to-br from-ocean-dark to-ocean-mid p-6 md:p-8 rounded-2xl shadow-2xl border border-white/10 cursor-pointer transition-shadow duration-300 ${
        isActive ? 'shadow-gold/20' : ''
      }`}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.rating
                ? 'text-gold fill-gold'
                : 'text-white/20'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-white/90 text-lg mb-6 line-clamp-4">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-white">{testimonial.author}</p>
          <p className="text-white/60 text-sm">{testimonial.location}</p>
        </div>
        <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
          {testimonial.tripType}
        </span>
      </div>
    </div>
  )
}
