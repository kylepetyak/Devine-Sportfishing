import Link from 'next/link'
import { Users, Clock, ArrowRight } from 'lucide-react'
import PlaceholderImage from './PlaceholderImage'

interface TripCardProps {
  name: string
  slug: string
  price: string
  duration: string
  capacity: string
  description: string
  featured?: boolean
}

export default function TripCard({
  name,
  slug,
  price,
  duration,
  capacity,
  description,
  featured = false,
}: TripCardProps) {
  return (
    <div
      className={`card ${featured ? 'ring-2 ring-accent' : ''}`}
    >
      {featured && (
        <div className="bg-accent text-white text-center py-2 text-sm font-semibold">
          Most Popular
        </div>
      )}

      <PlaceholderImage
        category="trip"
        label={name}
        aspectRatio="16:9"
      />

      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-primary mb-2">{name}</h3>

        <div className="text-3xl font-bold text-accent mb-4">{price}</div>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </span>
          <span className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {capacity}
          </span>
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        <Link
          href={`/trips/${slug}`}
          className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
