'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const photos = [
  { src: '/images/gallery/tuna-catch.jpg', alt: 'Group with a big yellowfin tuna' },
  { src: '/images/gallery/happy-customers.jpg', alt: 'Ladies having fun on the boat' },
  { src: '/images/gallery/boat.jpg', alt: 'Customers with their catch on the bow' },
  { src: '/images/gallery/sunset.jpg', alt: 'Big swordfish and crew at the dock' },
  { src: '/images/gallery/fish-cooler.jpg', alt: 'Red snapper and scamp grouper' },
  { src: '/images/gallery/captains-customers.jpg', alt: 'Captains Lakelynn and Blake with a big swordfish at the marina' },
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
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
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
