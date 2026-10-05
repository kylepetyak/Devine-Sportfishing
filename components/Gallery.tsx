'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from '@/lib/gallery-images'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const items =
    activeCategory === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((item) => item.category === activeCategory)

  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    [items.length]
  )
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length]
  )

  // Keyboard navigation + scroll lock while the lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [lightboxIndex, close, prev, next])

  const current = lightboxIndex !== null ? items[lightboxIndex] : null

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {GALLERY_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category)
              setLightboxIndex(null)
            }}
            className={clsx(
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              activeCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {items.map((item, index) => (
          <button
            key={item.src}
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`Open photo: ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute bottom-2 left-2 right-2 text-left text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
              {item.alt}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-2 md:left-6 z-10 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <figure
            className="relative w-[92vw] h-[78vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="92vw"
              priority
              className="object-contain"
            />
            <figcaption className="absolute -bottom-10 left-0 right-0 text-center text-white/90 text-sm px-4">
              {current.alt}
              <span className="text-white/50 ml-3">
                {lightboxIndex + 1} / {items.length}
              </span>
            </figcaption>
          </figure>

          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-2 md:right-6 z-10 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </div>
  )
}
