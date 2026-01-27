'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'What should I bring?',
    answer: 'Sunscreen, sunglasses, food/drinks for yourself, camera. We provide all fishing gear, bait, ice, and tackle. Dress in layers - it can get cool on the water in the morning.',
  },
  {
    question: 'Do I need a fishing license?',
    answer: 'Yes, Louisiana requires a fishing license for anyone 16 and older. You can easily purchase one online at the Louisiana Department of Wildlife and Fisheries website for approximately $20. We\'ll send you the direct link when you book.',
  },
  {
    question: "What's your cancellation policy?",
    answer: 'Weather cancellations are fully transferable for up to 1 year. We monitor conditions closely and will contact you in advance if we need to reschedule. We\'ll always work with you to find a new date that works.',
  },
  {
    question: 'How far in advance should I book?',
    answer: 'Peak season (November through March for tuna) typically books 2-3 months in advance. We recommend booking as early as possible, especially for weekends and holidays. Contact us even for last-minute availability - we sometimes have openings!',
  },
  {
    question: 'Where exactly is Venice, Louisiana?',
    answer: 'Venice is located about 60 miles south of New Orleans at the mouth of the Mississippi River. Fly into MSY (Louis Armstrong New Orleans International Airport), then it\'s approximately a 1.5 hour scenic drive south. We can recommend local lodging options.',
  },
  {
    question: 'Is experience required?',
    answer: 'No experience necessary! We welcome first-timers and seasoned anglers alike. Captain Blake and Lakelynn will teach you everything you need to know and help you every step of the way.',
  },
  {
    question: 'What happens if we catch fish?',
    answer: 'We professionally clean and bag all your fish at the end of the trip, ready for you to take home. Bring a cooler for transport, or we can recommend local processors if you prefer.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know before your trip
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-ocean-deep pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <svg className="w-5 h-5 text-ocean-mid" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 md:px-5 pb-4 md:pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional question prompt */}
        <motion.p
          className="text-center mt-8 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Have another question?{' '}
          <a href="tel:+15049571104" className="text-ocean-mid hover:text-ocean-dark font-semibold">
            Call or text us at (504) 957-1104
          </a>
        </motion.p>
      </div>
    </section>
  )
}
