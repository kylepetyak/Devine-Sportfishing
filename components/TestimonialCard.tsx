import { Star, Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  location?: string
  rating?: number
  tripType?: string
}

export default function TestimonialCard({
  quote,
  author,
  location,
  rating = 5,
  tripType,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 relative">
      <Quote className="absolute top-6 right-6 h-10 w-10 text-accent/20" />

      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-accent fill-accent' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 mb-6 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
          {author.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="font-semibold text-gray-900">{author}</p>
          {location && <p className="text-sm text-gray-500">{location}</p>}
          {tripType && (
            <p className="text-xs text-accent font-medium mt-1">{tripType}</p>
          )}
        </div>
      </div>
    </div>
  )
}

// Placeholder testimonials for initial build
export const PLACEHOLDER_TESTIMONIALS = [
  {
    quote: "Captain Blake put us on yellowfin tuna all day! Best fishing trip I've ever been on. The whole family had an amazing time and we'll definitely be back.",
    author: "Mike Johnson",
    location: "Houston, TX",
    rating: 5,
    tripType: "Offshore Charter",
  },
  {
    quote: "As first-time charter guests, Blake and Lakelynn made us feel right at home. Caught our limit of redfish and learned so much about Louisiana fishing.",
    author: "Sarah & Tom Williams",
    location: "Dallas, TX",
    rating: 5,
    tripType: "Inshore Charter",
  },
  {
    quote: "We've fished all over the Gulf and Devine Sportfishing is top-notch. Professional, knowledgeable, and the catches speak for themselves. 10/10!",
    author: "Robert Chen",
    location: "Atlanta, GA",
    rating: 5,
    tripType: "Offshore Charter",
  },
]
