import Image from 'next/image'
import { Fish } from 'lucide-react'
import type { SpeciesItem } from '@/lib/constants'

interface SpeciesGridProps {
  species: SpeciesItem[]
  /** Responsive sizes hint for the tile photos. */
  sizes?: string
}

/**
 * Photo tiles for a trip's target species. Species without a photo render as
 * a text tile so the grid stays complete.
 */
export default function SpeciesGrid({
  species,
  sizes = '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
}: SpeciesGridProps) {
  return (
    <div className="not-prose grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
      {species.map((item) => (
        <div
          key={item.name}
          className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-ocean-dark to-ocean-mid shadow-md"
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes={sizes}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <Fish
              className="absolute inset-0 m-auto h-10 w-10 text-white/25"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <p className="text-white font-heading font-bold leading-tight">{item.name}</p>
            <p className="text-white/75 text-xs mt-0.5 leading-snug">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
