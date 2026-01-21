import Link from 'next/link'
import {
  Hero,
  TripCard,
  TestimonialCard,
  PlaceholderImage,
  PLACEHOLDER_TESTIMONIALS,
} from '@/components'
import { TRIPS, SPECIES, WHY_CHOOSE_US, SPONSORS, SITE_CONFIG } from '@/lib/constants'
import { MapPin, Heart, ShieldCheck, Star, ArrowRight, Phone } from 'lucide-react'

const iconMap = {
  'map-pin': MapPin,
  'heart': Heart,
  'shield-check': ShieldCheck,
  'star': Star,
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Devine Sportfishing"
        subtitle="Premier Fishing Charters in Venice, Louisiana - The Fishing Capital of the World"
        showCTA={true}
        showPhone={true}
        size="full"
      />

      {/* About Preview Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Meet Captain Blake & Captain Lakelynn
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We&apos;re Blake and Lakelynn Devine - a husband-and-wife captain team born and raised
                in the bayous of South Louisiana. With 7+ years of guiding experience in Venice and
                a lifetime of fishing these waters, we bring unmatched local expertise to every trip.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Whether you&apos;re chasing yellowfin tuna offshore or stalking redfish in the marsh,
                we&apos;ll put you on fish and create memories that last a lifetime.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-primary font-semibold text-lg hover:text-accent transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <PlaceholderImage
                category="captain"
                label="Captain Blake Devine"
                aspectRatio="3:4"
                className="rounded-lg"
              />
              <PlaceholderImage
                category="captain"
                label="Captain Lakelynn Devine"
                aspectRatio="3:4"
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trip Options Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Choose Your Adventure
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From world-class offshore tuna fishing to peaceful marsh excursions,
              we have the perfect trip for every angler.
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

      {/* Why Choose Us Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose Devine Sportfishing?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We&apos;re not just another charter service. Here&apos;s what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              What Our Guests Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what anglers have to say about
              their Devine Sportfishing experience.
            </p>
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

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Google Reviews integration coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Species/What You'll Catch Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              What You&apos;ll Catch
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Venice, Louisiana offers some of the most diverse fishing in the world.
              Here&apos;s what&apos;s waiting for you.
            </p>
          </div>

          {/* Offshore Species */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
              Offshore Species
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SPECIES.offshore.map((species, index) => (
                <div key={index} className="group">
                  <PlaceholderImage
                    category="fish"
                    label={species.name}
                    aspectRatio="4:3"
                    className="rounded-lg mb-2"
                  />
                  <h4 className="font-semibold text-gray-900">{species.name}</h4>
                  <p className="text-sm text-gray-500">{species.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Inshore Species */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
              Inshore Species
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SPECIES.inshore.map((species, index) => (
                <div key={index} className="group">
                  <PlaceholderImage
                    category="fish"
                    label={species.name}
                    aspectRatio="4:3"
                    className="rounded-lg mb-2"
                  />
                  <h4 className="font-semibold text-gray-900">{species.name}</h4>
                  <p className="text-sm text-gray-500">{species.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready for the Fishing Adventure of a Lifetime?
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

      {/* Sponsors Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h3 className="text-center text-gray-400 text-sm font-medium uppercase tracking-wider mb-8">
            Proudly Sponsored By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {SPONSORS.map((sponsor, index) => (
              <div
                key={index}
                className="w-24 h-12 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs font-medium"
              >
                {sponsor.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
