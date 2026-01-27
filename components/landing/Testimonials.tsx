'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const testimonials = [
  {
    quote: "Best fishing trip of my life. Captain Blake put us on yellowfin tuna all day. Already booked our return trip!",
    author: "Mike R.",
    location: "Houston, TX",
    rating: 5,
  },
  {
    quote: "My husband and I took our kids on the inshore trip. Lakelynn was amazing with the kids - they caught their first redfish!",
    author: "Sarah M.",
    location: "Dallas, TX",
    rating: 5,
  },
  {
    quote: "Professional, knowledgeable, and genuinely passionate about fishing. These two are the real deal.",
    author: "James T.",
    location: "Atlanta, GA",
    rating: 5,
  },
  {
    quote: "Caught my personal best yellowfin at 180 lbs! Blake knew exactly where to find them. Worth every penny.",
    author: "David K.",
    location: "Chicago, IL",
    rating: 5,
  },
  {
    quote: "First time deep sea fishing and they made it unforgettable. Can't wait to come back for tuna season!",
    author: "Jennifer L.",
    location: "Austin, TX",
    rating: 5,
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-4">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-yellow-400 text-xl">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <span className="text-gray-600">5.0 Average Rating</span>
          </div>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex text-yellow-400 mb-4">
                {Array(testimonial.rating).fill('★').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
              <div className="text-sm">
                <span className="font-semibold text-ocean-deep">{testimonial.author}</span>
                <span className="text-gray-500"> — {testimonial.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg mb-4"
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="flex text-yellow-400 mb-4">
              {Array(testimonials[activeIndex].rating).fill('★').map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">&quot;{testimonials[activeIndex].quote}&quot;</p>
            <div className="text-sm">
              <span className="font-semibold text-ocean-deep">{testimonials[activeIndex].author}</span>
              <span className="text-gray-500"> — {testimonials[activeIndex].location}</span>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-ocean-mid w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Swipe hint */}
          <p className="text-center text-sm text-gray-500 mt-4">Tap dots to see more reviews</p>
        </div>

        {/* Google Review Link */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ocean-mid hover:text-ocean-dark transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Read all reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}
