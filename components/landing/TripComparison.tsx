'use client'

import { motion } from 'framer-motion'

const trips = [
  {
    title: 'Offshore Charter',
    price: '$2,500',
    priceNote: '/day',
    features: [
      '10-hour trip (dock to dock)',
      'Up to 6 passengers',
      '38\' Custom Catamaran',
      'All bait, ice & tackle',
      'Professional fish cleaning',
      'Expert guidance',
    ],
    targets: 'Yellowfin Tuna, Swordfish, Marlin, Wahoo',
    popular: true,
  },
  {
    title: 'Inshore Charter',
    price: '$900',
    priceNote: '/day',
    features: [
      '6-hour guided trip',
      'Up to 3 passengers',
      '22\' Bay Catamaran',
      'All bait, ice & tackle',
      'Professional fish cleaning',
      'Expert guidance',
    ],
    targets: 'Redfish, Speckled Trout, Flounder',
    popular: false,
  },
]

export function TripComparison() {
  const scrollToForm = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you&apos;re chasing trophy yellowfin tuna offshore or stalking redfish in the marshes,
            we have the perfect trip for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trips.map((trip, index) => (
            <motion.div
              key={trip.title}
              className={`relative rounded-2xl overflow-hidden ${
                trip.popular
                  ? 'bg-gradient-to-br from-ocean-deep to-ocean-mid text-white shadow-2xl'
                  : 'bg-gray-50 text-gray-800 shadow-lg'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {trip.popular && (
                <div className="absolute top-4 right-4 bg-sunset-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="p-6 md:p-8">
                <h3 className={`text-2xl font-bold mb-2 ${trip.popular ? 'text-white' : 'text-ocean-deep'}`}>
                  {trip.title}
                </h3>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{trip.price}</span>
                  <span className={trip.popular ? 'text-white/80' : 'text-gray-600'}>{trip.priceNote}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {trip.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        trip.popular ? 'bg-white/20' : 'bg-ocean-mid/20'
                      }`}>
                        <svg className={`w-3 h-3 ${trip.popular ? 'text-white' : 'text-ocean-mid'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className={trip.popular ? 'text-white/90' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={`p-4 rounded-lg mb-6 ${trip.popular ? 'bg-white/10' : 'bg-white'}`}>
                  <span className={`text-sm font-semibold ${trip.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    Target Species:
                  </span>
                  <p className={`font-medium ${trip.popular ? 'text-white' : 'text-ocean-deep'}`}>
                    {trip.targets}
                  </p>
                </div>

                <button
                  onClick={scrollToForm}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    trip.popular
                      ? 'bg-sunset-500 hover:bg-sunset-600 text-white'
                      : 'bg-ocean-mid hover:bg-ocean-dark text-white'
                  }`}
                >
                  Request Info
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Trip Note */}
        <motion.p
          className="text-center mt-8 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Looking for something different?{' '}
          <button onClick={scrollToForm} className="text-ocean-mid hover:text-ocean-dark font-semibold underline">
            Contact us about custom trips
          </button>
        </motion.p>
      </div>
    </section>
  )
}
