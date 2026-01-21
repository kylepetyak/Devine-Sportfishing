import Link from 'next/link'
import { PlaceholderImage, TripCard, TestimonialCard, PLACEHOLDER_TESTIMONIALS } from '@/components'
import { TRIPS, SITE_CONFIG } from '@/lib/constants'
import { Plane, Car, MapPin, Fish, Clock, Phone, Check } from 'lucide-react'

interface LocationPageProps {
  city: string
  state?: string
  airport?: string
  flightTime?: string
  driveTime?: string
  title: string
  isTunaPage?: boolean
}

export default function LocationLandingPage({
  city,
  state,
  airport,
  flightTime,
  driveTime,
  title,
  isTunaPage = false,
}: LocationPageProps) {
  const whyVenice = [
    'Tuna Capital of the World',
    'Year-round fishing opportunities',
    'Just 60 miles south of New Orleans',
    'World-class offshore and inshore fishing',
    'Trophy yellowfin tuna up to 200+ lbs',
    'Family-owned charter with local expertise',
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {isTunaPage
              ? 'Experience the best yellowfin tuna fishing in the world'
              : `World-Class Sportfishing Just a ${flightTime ? 'Flight' : 'Drive'} Away`}
          </p>
          <a
            href={SITE_CONFIG.phoneLink}
            className="inline-flex items-center text-2xl md:text-3xl font-bold text-accent hover:text-accent-300 transition-colors"
          >
            <Phone className="h-8 w-8 mr-3" />
            {SITE_CONFIG.phone}
          </a>
        </div>
      </section>

      {/* Travel Info (only for city pages) */}
      {!isTunaPage && (
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {flightTime && (
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">Fly to New Orleans</h3>
                  <p className="text-gray-600">
                    {flightTime} flight from {airport} to MSY
                  </p>
                </div>
              )}
              {driveTime && (
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">
                    {flightTime ? 'Or Drive' : 'Drive Time'}
                  </h3>
                  <p className="text-gray-600">
                    {driveTime} drive from {city}
                  </p>
                </div>
              )}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Venice, Louisiana</h3>
                <p className="text-gray-600">
                  60 miles south of New Orleans
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Venice Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                {isTunaPage
                  ? 'Why Venice is the Tuna Capital'
                  : 'Why Venice, Louisiana?'}
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                {isTunaPage
                  ? `Venice, Louisiana sits at the mouth of the Mississippi River, where nutrient-rich waters create one of the most productive fisheries in the world. The combination of deep-water access, oil platform structures, and abundant bait makes this the premier destination for trophy yellowfin tuna.`
                  : `${city} anglers have discovered what locals have known for generations - Venice, Louisiana offers some of the best fishing in the world. Located at the mouth of the Mississippi River, Venice is surrounded by incredibly productive waters teeming with life.`}
              </p>
              <ul className="space-y-3">
                {whyVenice.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <PlaceholderImage
                category="trip"
                label={isTunaPage ? 'Trophy Yellowfin Tuna' : 'Venice Louisiana Fishing'}
                aspectRatio="4:3"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Species Section (for tuna page) */}
      {isTunaPage && (
        <section className="section bg-primary text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Yellowfin Tuna Fishing in Venice
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Fish className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">Trophy Size Fish</h3>
                <p className="text-white/80">
                  Yellowfin over 200 pounds are caught every season. Fish averaging 80-150 lbs are common.
                </p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">Peak Season</h3>
                <p className="text-white/80">
                  November through March is prime time for the biggest yellowfin. Year-round opportunities exist.
                </p>
              </div>
              <div className="text-center">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">Prime Location</h3>
                <p className="text-white/80">
                  Short runs to productive grounds. Oil platforms and blue water within easy reach.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trip Options */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              {isTunaPage ? 'Book Your Tuna Charter' : `${city} Fishing Charter Options`}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the perfect trip for your {city ? `${city} to Venice` : ''} fishing adventure.
            </p>
          </div>

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

      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              What Anglers Are Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLACEHOLDER_TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
                rating={testimonial.rating}
                tripType={testimonial.tripType}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            {isTunaPage
              ? 'Ready to Catch Your Trophy Tuna?'
              : `Ready for Your ${city} to Venice Fishing Trip?`}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your charter today and experience world-class fishing in Venice, Louisiana.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Book Your Trip
            </Link>
            <a
              href={SITE_CONFIG.phoneLink}
              className="flex items-center text-xl font-semibold text-white hover:text-accent transition-colors"
            >
              <Phone className="h-6 w-6 mr-2" />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
