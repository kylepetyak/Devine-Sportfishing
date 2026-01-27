import type { Metadata } from 'next'
import { ContactForm } from '@/components'
import { SITE_CONFIG } from '@/lib/constants'
import { Phone, Mail, MapPin, MessageCircle, Clock, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Book Your Fishing Charter',
  description: 'Book your Venice, Louisiana fishing charter with Devine Sportfishing. Call (504) 957-1104 or fill out our contact form.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Book Your Fishing Adventure
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to experience world-class fishing in Venice, Louisiana? Get in touch and
            let&apos;s plan your trip.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                Get in Touch
              </h2>

              {/* Phone */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-4">
                <div className="flex items-center mb-3">
                  <Phone className="h-6 w-6 text-accent mr-3" />
                  <h3 className="font-heading font-bold text-lg">Call Us</h3>
                </div>
                <a
                  href={SITE_CONFIG.phoneLink}
                  className="text-2xl font-bold text-primary hover:text-accent transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
                <p className="text-gray-500 text-sm mt-2">
                  Available 7 days a week
                </p>
              </div>

              {/* Text */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-4">
                <div className="flex items-center mb-3">
                  <MessageCircle className="h-6 w-6 text-accent mr-3" />
                  <h3 className="font-heading font-bold text-lg">Text Us</h3>
                </div>
                <a
                  href={`sms:+15049571104?body=Hi, I'm interested in booking a fishing charter.`}
                  className="text-lg text-primary hover:text-accent transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
                <p className="text-gray-500 text-sm mt-2">
                  Quick response time
                </p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-4">
                <div className="flex items-center mb-3">
                  <Mail className="h-6 w-6 text-accent mr-3" />
                  <h3 className="font-heading font-bold text-lg">Email</h3>
                </div>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-primary hover:text-accent transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              {/* Location */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="h-6 w-6 text-accent mr-3" />
                  <h3 className="font-heading font-bold text-lg">Location</h3>
                </div>
                <p className="text-gray-700">
                  Venice, Louisiana<br />
                  60 miles south of New Orleans
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Exact marina details provided upon booking
                </p>
              </div>

              {/* What to Expect */}
              <div className="mt-8 p-6 bg-primary text-white rounded-xl">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-accent mr-3" />
                  <h3 className="font-heading font-bold text-lg">What to Expect</h3>
                </div>
                <ul className="space-y-3 text-white/90 text-sm">
                  <li>We typically respond within a few hours</li>
                  <li>We&apos;ll confirm availability for your dates</li>
                  <li>Deposit required to secure booking</li>
                  <li>Full trip details sent after confirmation</li>
                </ul>
              </div>

              {/* Fishing License */}
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <h4 className="font-semibold text-amber-800 mb-2">
                  Louisiana Fishing License
                </h4>
                <p className="text-amber-700 text-sm mb-3">
                  All anglers 16+ need a valid Louisiana fishing license.
                </p>
                <a
                  href="https://www.wlf.louisiana.gov/page/recreational-fishing-licenses-and-permits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-amber-800 font-semibold hover:text-amber-900"
                >
                  Purchase License Online
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                How far in advance should I book?
              </h3>
              <p className="text-gray-600">
                We recommend booking at least 2-4 weeks in advance, especially during peak
                season (November-March for tuna). Last-minute availability sometimes exists,
                so always reach out!
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                What is your cancellation policy?
              </h3>
              <p className="text-gray-600">
                We understand plans change. Cancellations made 7+ days before your trip
                receive a full refund. Weather-related cancellations are always fully
                refunded or rescheduled.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                What if the weather is bad?
              </h3>
              <p className="text-gray-600">
                Your safety is our priority. If conditions are unsafe, we&apos;ll either
                reschedule your trip or provide a full refund. We monitor conditions closely
                and will communicate with you beforehand.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                Do you accept credit cards?
              </h3>
              <p className="text-gray-600">
                Yes, we accept all major credit cards, Venmo, and cash. A deposit is required
                to secure your booking.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                Where do I stay when visiting Venice?
              </h3>
              <p className="text-gray-600">
                There are several lodging options in and around Venice, from fishing lodges
                to hotels in nearby towns. We&apos;re happy to provide recommendations based
                on your preferences and budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
