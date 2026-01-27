'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function CaptainsBrief() {
  return (
    <section className="py-16 md:py-20 bg-ocean-deep text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Photo */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/captains.jpg"
                alt="Captain Blake and Captain Lakelynn Devine"
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80'
                }}
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm font-medium text-center">
                  Both USCG Licensed & Insured
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Meet Your Captains
              </h2>
              <p className="text-sunset-400 font-semibold text-xl mb-4">
                Captain Blake & Captain Lakelynn Devine
              </p>
              <p className="text-white/80 mb-4">
                Husband & Wife Team | Both USCG Licensed
              </p>
              <p className="text-white/90 leading-relaxed mb-6">
                Blake was born and raised in the Louisiana bayou and has been guiding in Venice
                for 7+ years. Together with Lakelynn, they bring unmatched local expertise and
                genuine passion to every trip. Their knowledge of these waters, combined with
                their commitment to your experience, makes every charter unforgettable.
              </p>

              {/* Quote */}
              <div className="border-l-4 border-sunset-500 pl-4">
                <p className="italic text-white/90 mb-2">
                  &quot;Nothing beats seeing that smile when someone lands their first tuna.&quot;
                </p>
                <p className="text-sunset-400 text-sm font-medium">— Capt. Blake</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
