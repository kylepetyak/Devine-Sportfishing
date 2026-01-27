'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function ThankYouPage() {
  const [name, setName] = useState<string>('')

  useEffect(() => {
    // Try to get name from sessionStorage (set by form)
    const storedName = sessionStorage.getItem('customer_name')
    if (storedName) {
      setName(storedName)
    }

    // Fire Google Ads conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || 'AW-XXXXXXXXX/XXXXXX',
        value: 1.0,
        currency: 'USD',
      })
    }

    // Fire Meta Pixel Lead event (backup - also fired on form submit)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Charter Inquiry - Thank You Page',
        content_category: 'Fishing Charter',
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-ocean-deep to-ocean-mid flex items-center justify-center p-4">
      <motion.div
        className="max-w-lg w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Success Icon */}
        <motion.div
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        >
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-4">
          Request Received!
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Thanks{name ? `, ${name}` : ''}! We&apos;ll be in touch within 24 hours to discuss your fishing adventure.
        </p>

        {/* What happens next */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
          <h2 className="font-semibold text-ocean-deep mb-4">What happens next:</h2>
          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ocean-mid text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span className="text-gray-700">We&apos;ll call or text you to confirm details</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ocean-mid text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span className="text-gray-700">You&apos;ll receive trip info and booking link</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-ocean-mid text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span className="text-gray-700">Get ready for an unforgettable experience!</span>
            </li>
          </ol>
        </div>

        {/* In the meantime */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            In the meantime:
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://instagram.com/devinesportfishing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow on Instagram
            </a>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 bg-ocean-mid text-white px-4 py-2 rounded-lg hover:bg-ocean-dark transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              View Gallery
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="border-t pt-6">
          <p className="text-gray-600 mb-2">Questions? Give us a call:</p>
          <a
            href="tel:+15049571104"
            className="inline-flex items-center gap-2 text-ocean-mid hover:text-ocean-dark font-semibold text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            (504) 957-1104
          </a>
        </div>

        {/* Return home link */}
        <Link
          href="/"
          className="inline-block mt-6 text-gray-500 hover:text-ocean-mid transition-colors text-sm"
        >
          ← Return to homepage
        </Link>
      </motion.div>

      {/* Google Ads Conversion Tracking Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Google Ads conversion tracking
            // gtag('event', 'conversion', {
            //   'send_to': 'AW-XXXXXXXXX/XXXXXXXXXXXXXX',
            //   'value': 1.0,
            //   'currency': 'USD'
            // });
          `,
        }}
      />
    </main>
  )
}
