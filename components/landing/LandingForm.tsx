'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface UTMData {
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  utm_content: string | null
  utm_term: string | null
  gclid: string | null
  fbclid: string | null
}

interface FormData {
  name: string
  email: string
  phone: string
  tripType: string
  preferredDates: string
  guests: string
  message: string
}

export function LandingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    tripType: '',
    preferredDates: '',
    guests: '',
    message: '',
  })
  const [utmData, setUtmData] = useState<UTMData | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  // Capture UTM parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const utm: UTMData = {
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      utm_content: params.get('utm_content'),
      utm_term: params.get('utm_term'),
      gclid: params.get('gclid'),
      fbclid: params.get('fbclid'),
    }
    setUtmData(utm)
    sessionStorage.setItem('utm_data', JSON.stringify(utm))
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // POST to GHL webhook (placeholder URL - Kyle will replace)
      const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || 'GHL_WEBHOOK_URL_HERE'

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'landing_page',
          page_url: window.location.href,
          ...utmData,
        }),
      })

      // Fire Meta Pixel Lead event if available
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Charter Inquiry',
          content_category: formData.tripType || 'Fishing Charter',
        })
      }

      // Fire Google Ads conversion if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || 'AW-XXXXXXXXX/XXXXXX',
          value: 1.0,
          currency: 'USD',
        })
      }

      // Redirect to thank you page
      window.location.href = '/book/thank-you'
    } catch (error) {
      console.error('Form submission error:', error)
      // Still redirect - form data might have been captured
      window.location.href = '/book/thank-you'
    }
  }

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-2xl p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-ocean-deep mb-2">Request Trip Info</h3>
        <p className="text-gray-600 text-sm">We&apos;ll get back to you within 24 hours</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-ocean-mid focus:ring-2 focus:ring-ocean-mid/20 outline-none transition-all text-gray-800"
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-ocean-mid focus:ring-2 focus:ring-ocean-mid/20 outline-none transition-all text-gray-800"
          />
        </div>

        {/* Phone */}
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-ocean-mid focus:ring-2 focus:ring-ocean-mid/20 outline-none transition-all text-gray-800"
          />
        </div>

        {/* Trip Type */}
        <div>
          <select
            name="tripType"
            value={formData.tripType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-ocean-mid focus:ring-2 focus:ring-ocean-mid/20 outline-none transition-all text-gray-800 bg-white"
          >
            <option value="">Select Trip Type *</option>
            <option value="offshore">Offshore Charter ($2,500/day)</option>
            <option value="inshore">Inshore Charter ($900/day)</option>
            <option value="custom">Custom Trip</option>
            <option value="unsure">Not Sure - Need Advice</option>
          </select>
        </div>

        {/* Preferred Dates */}
        <div>
          <input
            type="text"
            name="preferredDates"
            value={formData.preferredDates}
            onChange={handleChange}
            placeholder="Preferred Date(s)"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-ocean-mid focus:ring-2 focus:ring-ocean-mid/20 outline-none transition-all text-gray-800"
          />
        </div>

        {/* Number of Guests */}
        <div>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-ocean-mid focus:ring-2 focus:ring-ocean-mid/20 outline-none transition-all text-gray-800 bg-white"
          >
            <option value="">Number of Guests</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6 Guests</option>
          </select>
        </div>

        {/* Optional Message - Expandable */}
        <div>
          <button
            type="button"
            onClick={() => setShowMessage(!showMessage)}
            className="text-sm text-ocean-mid hover:text-ocean-dark flex items-center gap-1"
          >
            <svg
              className={`w-4 h-4 transition-transform ${showMessage ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Add a message (optional)
          </button>
          {showMessage && (
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your trip..."
              rows={3}
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:border-ocean-mid focus:ring-2 focus:ring-ocean-mid/20 outline-none transition-all text-gray-800 resize-none"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-sunset-500 hover:bg-sunset-600 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </span>
          ) : (
            'REQUEST TRIP INFO'
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. No spam, ever.
        </p>
      </form>

      {/* Hidden UTM fields for tracking */}
      {utmData && (
        <div className="hidden">
          <input type="hidden" name="utm_source" value={utmData.utm_source || ''} />
          <input type="hidden" name="utm_medium" value={utmData.utm_medium || ''} />
          <input type="hidden" name="utm_campaign" value={utmData.utm_campaign || ''} />
          <input type="hidden" name="gclid" value={utmData.gclid || ''} />
          <input type="hidden" name="fbclid" value={utmData.fbclid || ''} />
        </div>
      )}
    </motion.div>
  )
}
