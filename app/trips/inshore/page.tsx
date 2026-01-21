import type { Metadata } from 'next'
import Link from 'next/link'
import { PlaceholderImage, TouristTripSchema } from '@/components'
import { TRIPS, SITE_CONFIG } from '@/lib/constants'
import { Clock, Users, Ship, Check, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Inshore Fishing Charter - Venice, Louisiana',
  description: 'Book a 6-hour inshore fishing charter in Venice, LA. Target redfish, speckled trout, and flounder. $900/day for up to 3 passengers.',
}

const trip = TRIPS.inshore

export default function InshoreTripPage() {
  return (
    <>
      <TouristTripSchema
        tripName={trip.name}
        description={trip.description}
        price={trip.price}
        duration={trip.duration}
      />

      {/* Hero */}
      <section className="relative">
        <PlaceholderImage
          category="trip"
          label="Inshore Fishing"
          aspectRatio="21:9"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Inshore Fishing Charter
            </h1>
            <p className="text-xl text-white/90">Venice, Louisiana</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose-custom">
                <p className="text-lg text-gray-600 mb-8">
                  Explore the beautiful marshes and bayous of Louisiana&apos;s coast. Our inshore
                  trips offer non-stop action in calmer waters, perfect for anglers of all
                  experience levels including families with children.
                </p>

                <h2>Target Species</h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {trip.species.map((species, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{species}</span>
                    </div>
                  ))}
                </div>

                <h2>What&apos;s Included</h2>
                <ul className="mb-8">
                  {trip.included.map((item, index) => (
                    <li key={index} className="flex items-start mb-2">
                      <Check className="h-5 w-5 text-accent mt-1 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h2>Perfect For</h2>
                <ul className="mb-8">
                  {trip.perfectFor?.map((item, index) => (
                    <li key={index} className="flex items-start mb-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h2>About the Trip</h2>
                <p>
                  Louisiana&apos;s marsh is one of the most productive fisheries in the country.
                  The maze of bayous, canals, and grass flats provides ideal habitat for redfish,
                  speckled trout, and flounder. We&apos;ll sight-fish for tailing reds in shallow
                  water, cast to schooling trout, and put you on action all day.
                </p>
                <p>
                  Our inshore trips are a great introduction to Louisiana fishing. The calmer
                  protected waters are comfortable for all ages, and the constant bites keep
                  everyone engaged. You&apos;ll learn the techniques and spots that make this
                  fishery special.
                </p>

                <h2>The Boat</h2>
                <p>
                  Our 22&apos; Catamaran is designed for navigating the shallow marshes while
                  providing a stable, comfortable platform for fishing. The shallow draft lets
                  us access backwater areas where the big redfish hide.
                </p>
              </div>

              {/* Gallery */}
              <div className="mt-12">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                  Inshore Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <PlaceholderImage category="fish" label="Bull Redfish" aspectRatio="4:3" className="rounded-lg" />
                  <PlaceholderImage category="trip" label="Marsh Fishing" aspectRatio="4:3" className="rounded-lg" />
                  <PlaceholderImage category="fish" label="Speckled Trout" aspectRatio="4:3" className="rounded-lg" />
                  <PlaceholderImage category="boat" label="22' Catamaran" aspectRatio="4:3" className="rounded-lg" />
                  <PlaceholderImage category="fish" label="Flounder" aspectRatio="4:3" className="rounded-lg" />
                  <PlaceholderImage category="trip" label="Family Trip" aspectRatio="4:3" className="rounded-lg" />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-accent mb-2">{trip.priceDisplay}</div>
                  <p className="text-gray-600">per day</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-3 text-primary" />
                    <span>{trip.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="h-5 w-5 mr-3 text-primary" />
                    <span>{trip.capacity}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Ship className="h-5 w-5 mr-3 text-primary" />
                    <span>{trip.boat}</span>
                  </div>
                </div>

                <Link href="/contact" className="btn-primary w-full text-center mb-4">
                  Book This Trip
                </Link>

                <a
                  href={SITE_CONFIG.phoneLink}
                  className="flex items-center justify-center text-primary font-semibold hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {SITE_CONFIG.phone}
                </a>

                <div className="mt-6 pt-6 border-t text-sm text-gray-500">
                  <p className="mb-2"><strong>Peak Season:</strong> Year-round</p>
                  <p><strong>Best for Redfish:</strong> September - November</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
