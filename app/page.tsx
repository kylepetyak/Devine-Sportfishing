import Link from 'next/link'
import {
  TripCard,
  PlaceholderImage,
  PLACEHOLDER_TESTIMONIALS,
} from '@/components'
import ParallaxHero from '@/components/ParallaxHero'
import AnimatedSection from '@/components/AnimatedSection'
import { StaggerContainer, StaggerItem } from '@/components/StaggerContainer'
import WaveDivider from '@/components/WaveDivider'
import AnimatedCounter from '@/components/AnimatedCounter'
import HorizontalSpeciesGallery from '@/components/HorizontalSpeciesGallery'
import TestimonialCarousel3D from '@/components/TestimonialCarousel3D'
import AnimatedHeadline from '@/components/AnimatedHeadline'
import { TRIPS, SPECIES, WHY_CHOOSE_US, SPONSORS, SITE_CONFIG } from '@/lib/constants'
import { MapPin, Heart, ShieldCheck, Star, ArrowRight, Phone } from 'lucide-react'

const iconMap = {
  'map-pin': MapPin,
  heart: Heart,
  'shield-check': ShieldCheck,
  star: Star,
}

// Add season info to species for the gallery
const offshoreSpeciesWithSeason = SPECIES.offshore.map((s) => ({
  ...s,
  peak: s.name === 'Yellowfin Tuna' ? 'Nov-Mar' : undefined,
  season: s.name !== 'Yellowfin Tuna' ? 'Year-round' : undefined,
}))

const inshoreSpeciesWithSeason = SPECIES.inshore.map((s) => ({
  ...s,
  season: 'Year-round',
}))

export default function HomePage() {
  return (
    <>
      {/* Parallax Hero Section */}
      <ParallaxHero />

      {/* Wave Divider */}
      <WaveDivider fill="#f8f9fa" />

      {/* About Preview Section */}
      <AnimatedSection className="py-20 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedHeadline
                as="h2"
                className="text-3xl md:text-4xl font-heading font-bold text-ocean-deep mb-6"
              >
                Meet Captain Blake & Captain Lakelynn
              </AnimatedHeadline>
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
      </AnimatedSection>

      {/* Wave Divider */}
      <WaveDivider fill="#0a1628" flip />

      {/* Trip Options Section */}
      <AnimatedSection className="py-20 bg-ocean-deep">
        <div className="container-custom">
          <div className="text-center mb-12">
            <AnimatedHeadline
              as="h2"
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
            >
              Choose Your Adventure
            </AnimatedHeadline>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From world-class offshore tuna fishing to peaceful marsh excursions,
              we have the perfect trip for every angler.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <TripCard
                name={TRIPS.offshore.name}
                slug={TRIPS.offshore.slug}
                price={TRIPS.offshore.priceDisplay}
                duration={TRIPS.offshore.duration}
                capacity={TRIPS.offshore.capacity}
                description={TRIPS.offshore.description}
                featured={true}
              />
            </StaggerItem>
            <StaggerItem>
              <TripCard
                name={TRIPS.inshore.name}
                slug={TRIPS.inshore.slug}
                price={TRIPS.inshore.priceDisplay}
                duration={TRIPS.inshore.duration}
                capacity={TRIPS.inshore.capacity}
                description={TRIPS.inshore.description}
              />
            </StaggerItem>
            <StaggerItem>
              <TripCard
                name={TRIPS.custom.name}
                slug={TRIPS.custom.slug}
                price={TRIPS.custom.priceDisplay}
                duration={TRIPS.custom.duration}
                capacity={TRIPS.custom.capacity}
                description={TRIPS.custom.description}
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="py-16 bg-ocean-dark">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StaggerItem>
              <div className="text-4xl md:text-5xl font-bold text-gold">
                <AnimatedCounter target={7} suffix="+" />
              </div>
              <div className="text-white/70 mt-2">Years Experience</div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-4xl md:text-5xl font-bold text-gold">
                <AnimatedCounter target={220} suffix=" lbs" />
              </div>
              <div className="text-white/70 mt-2">Biggest Tuna</div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-4xl md:text-5xl font-bold text-gold">
                <AnimatedCounter target={2} />
              </div>
              <div className="text-white/70 mt-2">Licensed Captains</div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-4xl md:text-5xl font-bold text-gold">
                <AnimatedCounter target={100} suffix="%" />
              </div>
              <div className="text-white/70 mt-2">Satisfaction</div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection className="py-20 bg-ocean-mid text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <AnimatedHeadline
              as="h2"
              className="text-3xl md:text-4xl font-heading font-bold mb-4"
            >
              Why Choose Devine Sportfishing?
            </AnimatedHeadline>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We&apos;re not just another charter service. Here&apos;s what sets us apart.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              return (
                <StaggerItem key={index}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-ocean-deep" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Wave Divider */}
      <WaveDivider fill="#0f2744" />

      {/* Testimonials Section - 3D Carousel */}
      <section className="py-20 bg-ocean-dark">
        <div className="container-custom">
          <div className="text-center mb-8">
            <AnimatedHeadline
              as="h2"
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
            >
              What Our Guests Say
            </AnimatedHeadline>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what anglers have to say about
              their Devine Sportfishing experience.
            </p>
          </div>

          <TestimonialCarousel3D
            testimonials={PLACEHOLDER_TESTIMONIALS}
            autoRotate={true}
            interval={5000}
          />
        </div>
      </section>

      {/* Wave Divider */}
      <WaveDivider fill="#ffffff" />

      {/* Species Section - Horizontal Scroll Gallery */}
      <section className="py-20 bg-white">
        <div className="container-custom mb-8">
          <div className="text-center">
            <AnimatedHeadline
              as="h2"
              className="text-3xl md:text-4xl font-heading font-bold text-ocean-deep mb-4"
            >
              What You&apos;ll Catch
            </AnimatedHeadline>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Venice, Louisiana offers some of the most diverse fishing in the world.
              Here&apos;s what&apos;s waiting for you.
            </p>
          </div>
        </div>

        {/* Offshore Species Gallery */}
        <HorizontalSpeciesGallery
          species={offshoreSpeciesWithSeason}
          title="Offshore Species"
        />

        {/* Inshore Species Gallery */}
        <HorizontalSpeciesGallery
          species={inshoreSpeciesWithSeason}
          title="Inshore Species"
        />
      </section>

      {/* Wave Divider */}
      <WaveDivider fill="#0a1628" flip />

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-ocean-deep via-ocean-dark to-ocean-mid text-white">
        <div className="container-custom text-center">
          <AnimatedHeadline
            as="h2"
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
          >
            Ready for the Fishing Adventure of a Lifetime?
          </AnimatedHeadline>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your charter today and experience world-class fishing in Venice, Louisiana.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gold hover:bg-gold-light text-ocean-deep font-bold rounded-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Book Your Trip
            </Link>
            <a
              href={SITE_CONFIG.phoneLink}
              className="flex items-center text-xl font-semibold text-white hover:text-gold transition-colors"
            >
              <Phone className="h-6 w-6 mr-2" />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Sponsors Section */}
      <AnimatedSection className="py-12 bg-ocean-dark">
        <div className="container-custom">
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
      </AnimatedSection>
    </>
  )
}
