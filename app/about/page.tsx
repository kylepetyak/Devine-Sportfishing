import type { Metadata } from 'next'
import Link from 'next/link'
import { PlaceholderImage } from '@/components'
import { SITE_CONFIG } from '@/lib/constants'
import { Phone, Shield, Heart, Fish, TreePine, Ship } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Captain Blake & Captain Lakelynn Devine',
  description: 'Meet Captain Blake and Captain Lakelynn Devine - a husband-wife fishing guide team with 7+ years experience in Venice, Louisiana.',
}

const values = [
  {
    icon: Heart,
    title: 'Personalized Experience',
    description: 'Every trip is tailored to your skill level, preferences, and fishing goals. We treat every guest like family.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Both captains are USCG licensed and insured. Your safety is our top priority on every trip.',
  },
  {
    icon: TreePine,
    title: 'Sustainable Fishing',
    description: 'We practice and promote conservation. Self-imposed limits and proper handling ensure healthy fisheries for generations.',
  },
  {
    icon: Fish,
    title: 'Honesty & Transparency',
    description: 'We give you straight talk about conditions, expectations, and what you can expect. No surprises.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <PlaceholderImage
          category="captain"
          label="Captain Blake & Captain Lakelynn"
          aspectRatio="21:9"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Meet Captain Blake & Captain Lakelynn Devine
            </h1>
            <p className="text-xl text-white/90">Family-owned. Locally raised. Passionate about fishing.</p>
          </div>
        </div>
      </section>

      {/* Blake's Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Captain Blake Devine
              </h2>
              <div className="prose-custom">
                <p>
                  Captain Blake Devine was born and raised in the bayous and marshland of South
                  Louisiana. Fishing has been in his blood for as long as his family can track
                  back. He has memories fishing with his great-great grandfather, and is fortunate
                  to still share these experiences with his dad and grandfather today.
                </p>
                <p>
                  Blake has been guiding in Venice for seven years and lives in Venice full-time.
                  His intimate knowledge of these waters - from the deepwater canyon where giant
                  tuna roam to the backwater marshes where redfish tail - gives his clients an
                  undeniable advantage.
                </p>
                <p>
                  His favorite moment is seeing someone catch their first fish of a species, or
                  land a personal best - whether it&apos;s Tuna, Swordfish, Snapper, or Redfish.
                  Nothing beats that smile when the plan comes together and they get the trophy
                  they&apos;re after.
                </p>
                <blockquote className="border-l-4 border-accent pl-4 italic text-gray-600 my-6">
                  &ldquo;I&apos;ve been blessed to grow up in the greatest fishery in the world.
                  Now I get to share it with people from all over. That never gets old.&rdquo;
                </blockquote>
              </div>
            </div>
            <div>
              <PlaceholderImage
                category="captain"
                label="Captain Blake Devine"
                aspectRatio="3:4"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lakelynn's Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <PlaceholderImage
                category="captain"
                label="Captain Lakelynn Devine"
                aspectRatio="3:4"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Captain Lakelynn Devine
              </h2>
              <div className="prose-custom">
                <p>
                  Captain Lakelynn brings a unique perspective to Devine Sportfishing. Also USCG
                  licensed, she&apos;s not just Blake&apos;s partner in life - she&apos;s an
                  accomplished captain in her own right.
                </p>
                <p>
                  Together, Blake and Lakelynn make Devine Sportfishing a true family operation.
                  Their combined expertise and shared passion for fishing creates an experience
                  that&apos;s both professional and personal.
                </p>
                <p>
                  When she&apos;s not on the water, Lakelynn handles much of the behind-the-scenes
                  work that keeps Devine Sportfishing running smoothly. She ensures every guest
                  feels welcomed and well taken care of from first inquiry to final goodbye.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Values
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              What we stand for and the principles that guide every trip.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                  <p className="text-white/80 text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Boats */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Boats
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Purpose-built vessels for the best fishing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Offshore Boat */}
            <div className="card">
              <PlaceholderImage
                category="boat"
                label="38' Custom Catamaran"
                aspectRatio="16:9"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Ship className="h-6 w-6 text-accent mr-2" />
                  <h3 className="text-2xl font-heading font-bold text-primary">
                    38&apos; Custom Catamaran
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our offshore machine. Built for comfort and performance in the Gulf of Mexico.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Quad 300hp Yamaha outboards
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Stable catamaran hull design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Spacious fishing deck
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Full electronics suite
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Up to 6 passengers
                  </li>
                </ul>
              </div>
            </div>

            {/* Inshore Boat */}
            <div className="card">
              <PlaceholderImage
                category="boat"
                label="22' Catamaran"
                aspectRatio="16:9"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Ship className="h-6 w-6 text-accent mr-2" />
                  <h3 className="text-2xl font-heading font-bold text-primary">
                    22&apos; Catamaran
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Perfect for navigating the marshes and backwaters of coastal Louisiana.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Shallow draft for marsh access
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Stable platform for casting
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Quiet poling capability
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Comfortable seating
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Up to 3 passengers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Fish with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We&apos;d love to have you aboard. Book your trip today or give us a call to learn more.
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
