import type { Metadata } from 'next'
import Link from 'next/link'
import { Gallery } from '@/components'
import { SITE_CONFIG } from '@/lib/constants'
import { Phone, Instagram } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Photo Gallery - Fishing Catches & Adventures',
  description: 'Browse photos from Devine Sportfishing charters in Venice, Louisiana. Tuna, redfish, marlin, and more - see what awaits on your trip.',
}

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            See what&apos;s waiting for you in Venice, Louisiana. Browse through catches,
            adventures, and memories from our trips.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <Gallery />

          {/* Note about placeholder */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Real photos coming soon! Follow us on Instagram for the latest catches.
            </p>
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
            >
              <Instagram className="h-5 w-5 mr-2" />
              @devinesportfishing
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Create Your Own Memories?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your trophy catch is waiting. Book your charter today!
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
