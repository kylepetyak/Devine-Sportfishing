'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { GalleryPlaceholder } from './PlaceholderImage'
import { clsx } from 'clsx'

interface GalleryItem {
  id: string
  category: string
  label: string
  caption?: string
}

const GALLERY_CATEGORIES = [
  'All',
  'Offshore Trips',
  'Inshore Trips',
  'Tuna',
  'Redfish',
  'The Boats',
  'Meet the Captains',
]

// Placeholder gallery items
const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', category: 'Tuna', label: 'Yellowfin Tuna', caption: '200lb Yellowfin caught December 2024' },
  { id: '2', category: 'Tuna', label: 'Trophy Tuna', caption: 'Client with trophy catch' },
  { id: '3', category: 'Offshore Trips', label: 'Offshore Action', caption: 'Fighting a big one!' },
  { id: '4', category: 'Redfish', label: 'Bull Red', caption: 'Trophy Bull Redfish' },
  { id: '5', category: 'Inshore Trips', label: 'Inshore Catch', caption: 'Limit of Speckled Trout' },
  { id: '6', category: 'The Boats', label: '38\' Catamaran', caption: 'Our offshore machine' },
  { id: '7', category: 'The Boats', label: '22\' Catamaran', caption: 'Perfect for inshore' },
  { id: '8', category: 'Meet the Captains', label: 'Captain Blake', caption: 'Ready for action' },
  { id: '9', category: 'Meet the Captains', label: 'Captain Lakelynn', caption: 'At the helm' },
  { id: '10', category: 'Offshore Trips', label: 'Marlin Release', caption: 'Blue Marlin release' },
  { id: '11', category: 'Tuna', label: 'Tuna Haul', caption: 'Great day on the water' },
  { id: '12', category: 'Redfish', label: 'Redfish Slam', caption: 'Beautiful slot redfish' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1))
  }

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {GALLERY_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group cursor-pointer overflow-hidden rounded-lg"
          >
            <GalleryPlaceholder
              label={item.label}
              category={item.category}
              caption={item.caption}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <div className="max-w-4xl max-h-[80vh] px-16">
            <GalleryPlaceholder
              label={filteredItems[currentIndex].label}
              category={filteredItems[currentIndex].category}
              caption={filteredItems[currentIndex].caption}
              className="rounded-lg"
            />
            {filteredItems[currentIndex].caption && (
              <p className="text-white text-center mt-4">
                {filteredItems[currentIndex].caption}
              </p>
            )}
          </div>

          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          <div className="absolute bottom-4 text-white text-sm">
            {currentIndex + 1} / {filteredItems.length}
          </div>
        </div>
      )}
    </div>
  )
}
