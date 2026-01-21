import type { Metadata } from 'next'
import Link from 'next/link'
import { PlaceholderImage, TouristTripSchema } from '@/components'
import { TRIPS, SITE_CONFIG } from '@/lib/constants'
import { Clock, Users, Ship, Check, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Offshore Fishing Charter - Venice, Louisiana',
  description: 'Book a 10-hour offshore fishing charter in Venice, LA. Target yellowfin tuna, swordfish, marlin, and more. $2,500/day for up to 6 passengers.',
}

const trip = TRIPS.offshore

export default function OffshoreTripPage() {
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
          label="Offshore Fishing Action"
          aspectRatio="21:9"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Offshore Fishing Charter
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
                  Experience the thrill of offshore fishing in the fertile waters of the Gulf of Mexico.
                  Venice, Louisiana sits at the mouth of the Mississippi River, where nutrient-rich waters
                  create a world-class fishery for trophy-sized game fish.
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

                <h2>What to Bring</h2>
                <ul className="mb-8">
                  {trip.whatToBring?.map((item, index) => (
                    <li key={index} className="flex items-start mb-2">
                      <ArrowRight className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h2>About the Trip</h2>
                <p>
                  Our offshore charters depart before sunrise from Venice Marina, heading south into
                  the deep blue waters of the Gulf. Depending on the season and conditions, we&apos;ll
                  target productive oil platforms, floating debris, or blue water drop-offs where
                  pelagic species congregate.
                </p>
                <p>
                  Captain Blake has spent years learning these waters and knows where the big fish
                  live. Whether you&apos;re an experienced angler or it&apos;s your first time offshore,
                  we&apos;ll put you in position to catch fish of a lifetime.
                </p>

                <h2>The Boat</h2>
                <p>
                  Our custom 38&apos; Catamaran is built for offshore fishing. Powered by quad 300hp
                  Yamaha outboards, she&apos;ll get you to the fishing grounds quickly and safely.
                  The stable catamaran hull design means a comfortable ride even in rougher
                  conditions, and plenty of deck space for fighting big fish.
                </p>
              </div>

              {/* Gallery */}
              <div className="mt-12">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                  Offshore Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <PlaceholderImage category="fish" label="Yellowfin Tuna" aspectRatio="4:3" className="rounded-lg" />
                  <PlaceholderImage category="trip" label="Offshore Action" aspectRatio="4:3" className="rounded-lg" />
                  <PlaceholderImage category="fish" label="Blue Marlin" aspectRatio="4:3" className="rounded-lg" />
                  <PlaceholderImage category="boat" label="38' Catamaran" aspectRatio="4:3" className="rounded-lg" />
                  <PlaceholderImage category="fish" label="Wahoo" aspectRatio="4:3" className="rounded-lg" />
                  <PlaceholderImage category="trip" label="Happy Anglers" aspectRatio="4:3" className="rounded-lg" />
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
                  <p><strong>Best for Tuna:</strong> November - March</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
