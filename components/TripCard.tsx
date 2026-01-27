'use client'

import { useState, MouseEvent } from 'react'
import Link from 'next/link'
import { Users, Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
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
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientY - rect.top - rect.height / 2) / 25
    const y = (e.clientX - rect.left - rect.width / 2) / -25
    setRotation({ x, y })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      className={`relative bg-gradient-to-br from-ocean-dark to-ocean-mid rounded-2xl overflow-hidden group ${
        featured ? 'ring-2 ring-gold' : ''
      }`}
    >
      {featured && (
        <div className="bg-gold text-ocean-deep text-center py-2 text-sm font-bold">
          Most Popular
        </div>
      )}

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div className="w-full h-full transition-transform duration-500 group-hover:scale-110">
          <PlaceholderImage category="trip" label={name} aspectRatio="16:9" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Price Badge */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          className="absolute top-4 right-4 bg-gold text-ocean-deep font-bold px-4 py-2 rounded-lg"
        >
          {price}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-heading font-bold text-white mb-2">
          {name}
        </h3>

        <div className="flex gap-4 text-sm text-white/60 mb-4">
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </span>
          <span className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {capacity}
          </span>
        </div>

        <p className="text-white/70 mb-6">{description}</p>

        <Link
          href={`/trips/${slug}`}
          className="inline-flex items-center gap-2 text-gold font-semibold group/link"
        >
          Learn More
          <motion.span animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        </Link>
      </div>

      {/* Shine Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(
            ${Math.atan2(rotation.y, rotation.x) * (180 / Math.PI) + 90}deg,
            transparent 40%,
            rgba(255,255,255,0.1) 50%,
            transparent 60%
          )`,
        }}
      />
    </motion.div>
  )
}
