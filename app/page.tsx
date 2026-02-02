import Link from 'next/link'
import { TRIPS, SPECIES, WHY_CHOOSE_US, SPONSORS, SITE_CONFIG } from '@/lib/constants'
import { MapPin, Heart, ShieldCheck, Star, ArrowRight, Phone, Anchor, Users, Clock } from 'lucide-react'

const iconMap = {
  'map-pin': MapPin,
  heart: Heart,
  'shield-check': ShieldCheck,
  star: Star,
}

const TESTIMONIALS = [
  {
    name: 'Mike R.',
    location: 'Houston, TX',
    text: "Best fishing trip of my life. Captain Blake put us on yellowfin tuna all day. Already booked our return trip!",
    rating: 5,
  },
  {
    name: 'Sarah M.',
    location: 'Dallas, TX',
    text: "My husband and I took our kids on the inshore trip. Lakelynn was amazing with the kids - they caught their first redfish!",
    rating: 5,
  },
  {
    name: 'James T.',
    location: 'Atlanta, GA',
    text: "Professional, knowledgeable, and genuinely passionate about fishing. These two are the real deal.",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-ocean-deep">
        {/* Background with gradient fallback */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep via-ocean-dark to-ocean-deep" />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            World-Class Fishing Charters in{' '}
            <span className="text-gold">Venice, Louisiana</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join Captain Blake & Captain Lakelynn for unforgettable offshore tuna fishing
            and inshore marsh adventures in &quot;The Fishing Capital of the World.&quot;
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-ocean-deep font-bold text-lg rounded-lg transition-colors"
            >
              Book Your Trip
            </Link>
            <a
              href={SITE_CONFIG.phoneLink}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5" />
              {SITE_CONFIG.phone}
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-gold">7+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-gold">220 lbs</div>
              <div className="text-sm text-white/80">Biggest Tuna</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-gold">2</div>
              <div className="text-sm text-white/80">Licensed Captains</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-gold">5.0</div>
              <div className="text-sm text-white/80">Google Rating</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Trip Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ocean-deep mb-4">
              Choose Your Adventure
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From world-class offshore tuna fishing to peaceful marsh excursions,
              we have the perfect trip for every angler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offshore Trip */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-ocean-mid">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Anchor className="w-16 h-16 text-white/30" />
                </div>
                <div className="absolute top-4 right-4 bg-gold text-ocean-deep px-3 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-ocean-deep mb-2">
                  {TRIPS.offshore.name}
                </h3>
                <p className="text-gold text-xl font-bold mb-4">{TRIPS.offshore.priceDisplay}</p>
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {TRIPS.offshore.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Up to {TRIPS.offshore.capacity}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{TRIPS.offshore.description}</p>
                <Link
                  href={`/trips/${TRIPS.offshore.slug}`}
                  className="block w-full text-center bg-ocean-mid hover:bg-ocean-dark text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Inshore Trip */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-ocean-light">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Anchor className="w-16 h-16 text-white/30" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-ocean-deep mb-2">
                  {TRIPS.inshore.name}
                </h3>
                <p className="text-gold text-xl font-bold mb-4">{TRIPS.inshore.priceDisplay}</p>
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {TRIPS.inshore.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Up to {TRIPS.inshore.capacity}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{TRIPS.inshore.description}</p>
                <Link
                  href={`/trips/${TRIPS.inshore.slug}`}
                  className="block w-full text-center bg-ocean-mid hover:bg-ocean-dark text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Custom Trip */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gray-400">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Anchor className="w-16 h-16 text-white/30" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-ocean-deep mb-2">
                  {TRIPS.custom.name}
                </h3>
                <p className="text-gold text-xl font-bold mb-4">{TRIPS.custom.priceDisplay}</p>
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {TRIPS.custom.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Up to {TRIPS.custom.capacity}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{TRIPS.custom.description}</p>
                <Link
                  href={`/trips/${TRIPS.custom.slug}`}
                  className="block w-full text-center bg-ocean-mid hover:bg-ocean-dark text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ocean-deep mb-6">
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
                className="inline-flex items-center text-ocean-mid font-semibold text-lg hover:text-gold transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 rounded-lg aspect-[3/4] flex items-center justify-center text-gray-400">
                Captain Blake
              </div>
              <div className="bg-gray-200 rounded-lg aspect-[3/4] flex items-center justify-center text-gray-400 mt-8">
                Captain Lakelynn
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-ocean-mid text-white">
        <div className="container mx-auto px-4">
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
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-ocean-deep" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What You'll Catch Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ocean-deep mb-4">
              What You&apos;ll Catch
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Venice, Louisiana offers some of the most diverse fishing in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Offshore Species */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-heading font-bold text-ocean-deep mb-4 flex items-center gap-2">
                <Anchor className="w-5 h-5 text-ocean-mid" />
                Offshore Species
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {SPECIES.offshore.map((species, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <div className="font-semibold text-ocean-deep">{species.name}</div>
                    <div className="text-sm text-gray-500">{species.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inshore Species */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-heading font-bold text-ocean-deep mb-4 flex items-center gap-2">
                <Anchor className="w-5 h-5 text-ocean-light" />
                Inshore Species
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {SPECIES.inshore.map((species, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <div className="font-semibold text-ocean-deep">{species.name}</div>
                    <div className="text-sm text-gray-500">{species.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-ocean-deep text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Our Guests Say
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what anglers have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-white/90 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews Link */}
          <div className="text-center mt-8">
            <a
              href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Read all reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ocean-deep mb-6">
            Ready for the Fishing Adventure of a Lifetime?
          </h2>
          <p className="text-xl text-ocean-deep/80 mb-8 max-w-2xl mx-auto">
            Book your charter today and experience world-class fishing in Venice, Louisiana.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-ocean-deep hover:bg-ocean-dark text-white font-bold text-lg rounded-lg transition-colors"
            >
              Book Your Trip
            </Link>
            <a
              href={SITE_CONFIG.phoneLink}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-ocean-deep font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5" />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-12 bg-ocean-dark">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-white/40 text-sm font-medium uppercase tracking-wider mb-8">
            Proudly Sponsored By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {SPONSORS.map((sponsor, index) => (
              <div
                key={index}
                className="w-24 h-12 bg-white/10 rounded flex items-center justify-center text-white/50 text-xs font-medium"
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
