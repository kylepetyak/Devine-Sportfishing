import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm, PlaceholderImage } from '@/components'
import { SITE_CONFIG } from '@/lib/constants'
import { Phone, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Custom Fishing Charter - Venice, Louisiana',
  description: 'Design your perfect fishing experience with a custom charter in Venice, Louisiana. Multi-day trips, corporate events, and special requests.',
}

const customOptions = [
  'Multi-day fishing packages',
  'Corporate team-building events',
  'Bachelor party fishing trips',
  'Split offshore/inshore days',
  'Specific species targeting',
  'Photography and filming charters',
  'Tournament practice trips',
  'Extended overnight trips',
]

export default function CustomTripPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <PlaceholderImage
          category="trip"
          label="Custom Fishing Experience"
          aspectRatio="21:9"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Custom Fishing Charters
            </h1>
            <p className="text-xl text-white/90">Venice, Louisiana</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <div className="prose-custom">
                <p className="text-lg text-gray-600 mb-8">
                  Have something special in mind? We love creating custom fishing experiences
                  tailored to your group&apos;s specific needs. From multi-day adventures to
                  corporate events, we&apos;ll work with you to design the perfect trip.
                </p>

                <h2>Custom Options Include</h2>
                <ul className="mb-8">
                  {customOptions.map((option, index) => (
                    <li key={index} className="flex items-start mb-3">
                      <Check className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>

                <h2>How It Works</h2>
                <ol className="list-decimal pl-5 space-y-3 mb-8">
                  <li>
                    <strong>Tell us your vision</strong> - Fill out the form or give us a call
                    to discuss what you have in mind.
                  </li>
                  <li>
                    <strong>We&apos;ll create a proposal</strong> - Based on your requirements,
                    we&apos;ll put together a custom package with pricing.
                  </li>
                  <li>
                    <strong>Finalize details</strong> - We&apos;ll work together to fine-tune
                    the itinerary and confirm your dates.
                  </li>
                  <li>
                    <strong>Enjoy your adventure</strong> - Show up and let us handle the rest!
                  </li>
                </ol>

                <h2>Popular Custom Packages</h2>

                <h3>Multi-Day Tuna Expedition</h3>
                <p>
                  For serious tuna anglers, our multi-day packages maximize your time on the
                  water. Stay in Venice and fish 2-3 consecutive days for the best chance at
                  trophy yellowfin.
                </p>

                <h3>Corporate Fishing Events</h3>
                <p>
                  Nothing builds team camaraderie like a day on the water. We can accommodate
                  groups with multiple boats and create a memorable experience for your team
                  or clients.
                </p>

                <h3>The Ultimate Venice Experience</h3>
                <p>
                  Combine offshore and inshore fishing for the complete Venice experience.
                  Fish offshore in the morning, then hit the marsh for redfish in the afternoon.
                </p>
              </div>

              <div className="mt-8 p-6 bg-primary text-white rounded-xl">
                <h3 className="font-heading font-bold text-xl mb-3">
                  Prefer to talk directly?
                </h3>
                <p className="text-white/90 mb-4">
                  Call or text us to discuss your custom trip ideas.
                </p>
                <a
                  href={SITE_CONFIG.phoneLink}
                  className="inline-flex items-center text-xl font-bold text-accent hover:text-accent-300 transition-colors"
                >
                  <Phone className="h-6 w-6 mr-2" />
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 sticky top-24">
                <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                  Request a Custom Quote
                </h2>
                <p className="text-gray-600 mb-6">
                  Tell us about your ideal trip and we&apos;ll get back to you with a custom proposal.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
