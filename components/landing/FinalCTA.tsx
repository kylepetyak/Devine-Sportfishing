'use client'

import { motion } from 'framer-motion'

export function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-ocean-mid to-ocean-deep text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Book Your Fishing Adventure?
          </h2>

          <p className="text-xl text-white/80 mb-8">
            Join hundreds of happy anglers who have experienced world-class fishing with Captain Blake & Lakelynn.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto bg-sunset-500 hover:bg-sunset-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
            >
              REQUEST TRIP INFO
            </button>

            <span className="text-white/60">or</span>

            <a
              href="tel:+15049571104"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              (504) 957-1104
            </a>
          </div>

          <p className="mt-6 text-white/60 text-sm">
            Prefer to talk? Call or text us anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
