'use client'

import { Fish, Ship, Camera, User, Image as ImageIcon, Waves } from 'lucide-react'
import { clsx } from 'clsx'

interface PlaceholderImageProps {
  category: 'hero' | 'trip' | 'fish' | 'boat' | 'captain' | 'gallery'
  label: string
  aspectRatio?: '16:9' | '4:3' | '1:1' | '3:4' | '21:9'
  className?: string
}

const categoryConfig = {
  hero: {
    gradient: 'from-primary via-primary-800 to-secondary',
    icon: Waves,
    bgColor: 'bg-primary',
  },
  trip: {
    gradient: 'from-primary-700 to-primary-900',
    icon: Ship,
    bgColor: 'bg-primary-700',
  },
  fish: {
    gradient: 'from-secondary-600 to-secondary-800',
    icon: Fish,
    bgColor: 'bg-secondary',
  },
  boat: {
    gradient: 'from-primary-800 to-dark',
    icon: Ship,
    bgColor: 'bg-primary-800',
  },
  captain: {
    gradient: 'from-gray-500 to-gray-700',
    icon: User,
    bgColor: 'bg-gray-600',
  },
  gallery: {
    gradient: 'from-gray-600 to-gray-800',
    icon: Camera,
    bgColor: 'bg-gray-600',
  },
}

const aspectRatioClasses = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '1:1': 'aspect-square',
  '3:4': 'aspect-[3/4]',
  '21:9': 'aspect-[21/9]',
}

export default function PlaceholderImage({
  category,
  label,
  aspectRatio = '16:9',
  className,
}: PlaceholderImageProps) {
  const config = categoryConfig[category]
  const Icon = config.icon

  return (
    <div
      className={clsx(
        'relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br',
        config.gradient,
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      <Icon className="h-12 w-12 text-white/30 mb-3" strokeWidth={1.5} />
      <span className="text-white/70 text-sm font-medium text-center px-4">{label}</span>
      <span className="absolute bottom-3 right-3 bg-black/30 text-white/80 text-xs px-2 py-1 rounded">
        Image Coming Soon
      </span>
    </div>
  )
}

// Gallery-specific placeholder with category badge
export function GalleryPlaceholder({
  label,
  category: galleryCategory,
  caption,
  className,
}: {
  label: string
  category: string
  caption?: string
  className?: string
}) {
  return (
    <div
      className={clsx(
        'relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800 aspect-square',
        className
      )}
    >
      <Camera className="h-10 w-10 text-white/30 mb-2" strokeWidth={1.5} />
      <span className="text-white/70 text-xs font-medium text-center px-3">{label}</span>
      <div className="absolute top-3 left-3">
        <span className="bg-accent text-white text-xs px-2 py-1 rounded font-medium">
          {galleryCategory}
        </span>
      </div>
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 text-center">
          {caption}
        </div>
      )}
    </div>
  )
}
