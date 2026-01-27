'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const photos = [
  {
    src: '/images/gallery/tuna-catch.jpg',
    alt: 'Trophy yellowfin tuna catch',
    fallback: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
  },
  {
    src: '/images/gallery/happy-customers.jpg',
    alt: 'Happy customers on the boat',
    fallback: 'https://images.unsplash.com/photo-1516942738870-4d0b0e7f0be4?w=400&q=80',
  },
  {
    src: '/images/gallery/boat.jpg',
    alt: 'The 38-foot catamaran',
    fallback: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=400&q=80',
  },
  {
    src: '/images/gallery/sunset.jpg',
    alt: 'Sunset over Venice Louisiana',
    fallback: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    src: '/images/gallery/fish-cooler.jpg',
    alt: 'Cooler full of fish',
    fallback: 'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?w=400&q=80',
  },
  {
    src: '/images/gallery/captains-customers.jpg',
    alt: 'Captains with happy customers',
    fallback: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&q=80',
  },
]

export function PhotoStrip() {
  return (
    <section className="py-12 md:py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-ocean-deep text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Life on the Water
        </motion.h2>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        <motion.div
          className="flex gap-4 px-4 overflow-x-auto scrollbar-hide pb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-64 h-48 md:w-80 md:h-60 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = photo.fallback
                }}
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll hint for mobile */}
        <div className="md:hidden text-center mt-2">
          <p className="text-sm text-gray-500">Swipe to see more →</p>
        </div>
      </div>
    </section>
  )
}
