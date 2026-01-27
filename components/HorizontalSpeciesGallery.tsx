'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PlaceholderImage } from '@/components'

interface Species {
  name: string
  description: string
  season?: string
  peak?: string
}

interface HorizontalSpeciesGalleryProps {
  species: Species[]
  title: string
}

export default function HorizontalSpeciesGallery({
  species,
  title,
}: HorizontalSpeciesGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Move the gallery horizontally as user scrolls vertically
  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-45%'])

  return (
    <div ref={containerRef} className="py-16 overflow-hidden">
      <div className="container-custom mb-8">
        <h3 className="text-2xl font-heading font-bold text-ocean-deep text-center md:text-left">
          {title}
        </h3>
      </div>

      <motion.div style={{ x }} className="flex gap-6 px-8 md:px-16">
        {species.map((fish, index) => (
          <SpeciesCard key={index} species={fish} index={index} />
        ))}
        {/* Duplicate for seamless feel */}
        {species.slice(0, 3).map((fish, index) => (
          <SpeciesCard
            key={`dup-${index}`}
            species={fish}
            index={species.length + index}
          />
        ))}
      </motion.div>
    </div>
  )
}

function SpeciesCard({ species, index }: { species: Species; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex-shrink-0 w-64 md:w-80 group"
    >
      <div className="relative overflow-hidden rounded-xl">
        {/* Fish Image */}
        <div className="relative">
          <PlaceholderImage
            category="fish"
            label={species.name}
            aspectRatio="4:3"
            className="transition-transform duration-500 group-hover:scale-105"
          />

          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-transparent to-transparent" />

          {/* Season badge */}
          {(species.season || species.peak) && (
            <div className="absolute top-3 right-3 bg-gold/90 backdrop-blur-sm text-ocean-deep text-xs font-bold px-3 py-1 rounded-full">
              {species.peak ? `Peak: ${species.peak}` : species.season}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h4 className="text-xl font-heading font-bold text-white mb-1">
            {species.name}
          </h4>
          <p className="text-white/70 text-sm">{species.description}</p>
        </div>
      </div>
    </motion.div>
  )
}
