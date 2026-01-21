import type { Metadata } from 'next'
import { TripCard } from '@/components'
import { TRIPS, SITE_CONFIG } from '@/lib/constants'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fishing Charter Trips',
  description: 'Choose from offshore, inshore, or custom fishing charters in Venice, Louisiana. World-class fishing for tuna, redfish, and more.',
}

export default function TripsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Fishing Charters
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            From trophy tuna offshore to redfish in the marsh - choose the perfect trip for your adventure.
          </p>
        </div>
      </section>

      {/* Trip Cards */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TripCard
              name={TRIPS.offshore.name}
              slug={TRIPS.offshore.slug}
              price={TRIPS.offshore.priceDisplay}
              duration={TRIPS.offshore.duration}
              capacity={TRIPS.offshore.capacity}
              description={TRIPS.offshore.description}
              featured={true}
            />
            <TripCard
              name={TRIPS.inshore.name}
              slug={TRIPS.inshore.slug}
              price={TRIPS.inshore.priceDisplay}
              duration={TRIPS.inshore.duration}
              capacity={TRIPS.inshore.capacity}
              description={TRIPS.inshore.description}
            />
            <TripCard
              name={TRIPS.custom.name}
              slug={TRIPS.custom.slug}
              price={TRIPS.custom.priceDisplay}
              duration={TRIPS.custom.duration}
              capacity={TRIPS.custom.capacity}
              description={TRIPS.custom.description}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Not Sure Which Trip Is Right for You?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
            Give us a call and we&apos;ll help you plan the perfect fishing adventure based on your goals and experience.
          </p>
          <a
            href={SITE_CONFIG.phoneLink}
            className="inline-flex items-center text-2xl font-bold text-accent hover:text-accent-300 transition-colors"
          >
            <Phone className="h-7 w-7 mr-3" />
            {SITE_CONFIG.phone}
          </a>
        </div>
      </section>
    </>
  )
}
