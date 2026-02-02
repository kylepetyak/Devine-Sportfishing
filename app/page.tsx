import Link from 'next/link'
import Image from 'next/image'
import { TRIPS, SPECIES, WHY_CHOOSE_US, SPONSORS, SITE_CONFIG } from '@/lib/constants'
import { MapPin, Heart, ShieldCheck, Star, ArrowRight, Phone, Anchor, Users, Clock, ChevronRight } from 'lucide-react'
import VideoHero from '@/components/VideoHero'

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
    image: '/images/testimonials/mike-r.jpg',
  },
  {
    name: 'Sarah M.',
    location: 'Dallas, TX',
    text: "My husband and I took our kids on the inshore trip. Lakelynn was amazing with the kids - they caught their first redfish!",
    rating: 5,
    image: '/images/testimonials/sarah-m.jpg',
  },
  {
    name: 'James T.',
    location: 'Atlanta, GA',
    text: "Professional, knowledgeable, and genuinely passionate about fishing. These two are the real deal.",
    rating: 5,
    image: '/images/testimonials/james-t.jpg',
  },
]

const GALLERY_IMAGES = [
  { src: '/images/gallery/catch-01.jpg', alt: 'Trophy yellowfin tuna catch' },
  { src: '/images/gallery/catch-02.jpg', alt: 'Happy customers with redfish' },
  { src: '/images/gallery/catch-03.jpg', alt: 'Marlin fishing action' },
  { src: '/images/gallery/catch-04.jpg', alt: 'Family fishing trip' },
  { src: '/images/gallery/catch-05.jpg', alt: 'Sunset on the water' },
  { src: '/images/gallery/catch-06.jpg', alt: 'Big catch celebration' },
]

export default function HomePage() {
  return (
    <>
      {/* Video Hero Section */}
      <VideoHero
        videoSrc="/images/hero/hero-video.mp4"
        posterSrc="/images/hero/hero-fallback.jpg"
        mobileFallbackSrc="/images/hero/hero-fallback.jpg"
        headline="World-Class Fishing Charters"
        subheadline="Venice, Louisiana"
      />

      {/* Quick Stats Bar */}
      <section className="bg-ocean-deep py-6 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">7+</div>
              <div className="text-sm text-white/70">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">220 lbs</div>
              <div className="text-sm text-white/70">Biggest Tuna</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">500+</div>
              <div className="text-sm text-white/70">Happy Anglers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">5.0★</div>
              <div className="text-sm text-white/70">Google Rating</div>
            </div>
          </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Offshore Trip Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/trips/offshore-fishing.jpg"
                  alt="Offshore fishing charter"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-gold text-ocean-deep px-3 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-gold text-2xl font-bold">{TRIPS.offshore.priceDisplay}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-ocean-deep mb-2">
                  {TRIPS.offshore.name}
                </h3>
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
                  className="flex items-center justify-center gap-2 w-full bg-ocean-mid hover:bg-ocean-dark text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Inshore Trip Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/trips/inshore-fishing.jpg"
                  alt="Inshore fishing charter"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-gold text-2xl font-bold">{TRIPS.inshore.priceDisplay}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-ocean-deep mb-2">
                  {TRIPS.inshore.name}
                </h3>
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
                  className="flex items-center justify-center gap-2 w-full bg-ocean-mid hover:bg-ocean-dark text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Custom Trip Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/trips/custom-trip.jpg"
                  alt="Custom fishing trip"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-gold text-2xl font-bold">{TRIPS.custom.priceDisplay}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-ocean-deep mb-2">
                  {TRIPS.custom.name}
                </h3>
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
                  className="flex items-center justify-center gap-2 w-full bg-ocean-mid hover:bg-ocean-dark text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Image Break */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/gallery/boat-action.jpg"
          alt="Fishing action on the water"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="text-2xl md:text-3xl font-heading mb-4">
              &ldquo;The Fishing Capital of the World&rdquo;
            </p>
            <p className="text-lg text-white/80">Venice, Louisiana</p>
          </div>
        </div>
      </section>

      {/* Meet Your Captains Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/captains/blake-devine.jpg"
                      alt="Captain Blake Devine"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/captains/lakelynn-devine.jpg"
                      alt="Captain Lakelynn Devine"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gold text-ocean-deep px-6 py-3 rounded-full font-bold shadow-lg">
                USCG Licensed Captains
              </div>
            </div>

            {/* Content */}
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

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-ocean-mid">7+</div>
                  <div className="text-sm text-gray-600">Years in Venice</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-ocean-mid">2</div>
                  <div className="text-sm text-gray-600">Licensed Captains</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-ocean-mid">Local</div>
                  <div className="text-sm text-gray-600">Born & Raised</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-ocean-mid">Family</div>
                  <div className="text-sm text-gray-600">Owned & Operated</div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center text-ocean-mid font-semibold text-lg hover:text-gold transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Strip */}
      <section className="py-12 bg-ocean-deep">
        <div className="container mx-auto px-4 mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
              Recent Catches
            </h2>
            <Link
              href="/gallery"
              className="text-gold hover:text-gold-light font-semibold flex items-center gap-1"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-72 h-72 rounded-xl overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            </div>
          ))}
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
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/species/offshore-species.jpg"
                  alt="Offshore species"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-heading font-bold text-white flex items-center gap-2">
                  <Anchor className="w-6 h-6" />
                  Offshore Species
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {SPECIES.offshore.map((species, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3">
                      <div className="font-semibold text-ocean-deep">{species.name}</div>
                      <div className="text-sm text-gray-500">{species.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inshore Species */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/species/inshore-species.jpg"
                  alt="Inshore species"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-light to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-heading font-bold text-white flex items-center gap-2">
                  <Anchor className="w-6 h-6" />
                  Inshore Species
                </h3>
              </div>
              <div className="p-6">
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-ocean-deep text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex text-gold">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="text-2xl">{star}</span>
                ))}
              </div>
              <span className="text-white/70">5.0 on Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 text-lg italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews Link */}
          <div className="text-center mt-10">
            <a
              href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Read All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <Image
          src="/images/gallery/sunset-boat.jpg"
          alt="Sunset fishing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ocean-deep/80" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ready for the Fishing Adventure of a Lifetime?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Book your charter today and experience world-class fishing in Venice, Louisiana.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 bg-gold hover:bg-gold-light text-ocean-deep font-bold text-lg rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              Book Your Charter
            </Link>
            <a
              href={SITE_CONFIG.phoneLink}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg rounded-lg transition-colors border border-white/20"
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
              <div key={index} className="relative w-24 h-12">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain opacity-50 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
