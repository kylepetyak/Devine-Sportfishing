'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE_CONFIG, NAVIGATION } from '@/lib/constants'
import { clsx } from 'clsx'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-ocean-deep/95 backdrop-blur-md py-2 shadow-lg'
          : 'bg-transparent py-4'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={SITE_CONFIG.logo}
              alt={SITE_CONFIG.name}
              width={180}
              height={60}
              className={clsx(
                'w-auto transition-all duration-300',
                scrolled ? 'h-10' : 'h-14'
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAVIGATION.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={clsx(
                    'px-4 py-2 font-medium transition-colors inline-flex items-center relative group',
                    scrolled
                      ? 'text-white/80 hover:text-white'
                      : 'text-white/90 hover:text-white',
                    item.children && 'pr-2'
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                  <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
                {item.children && openDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 bg-ocean-deep/95 backdrop-blur-md shadow-lg rounded-lg py-2 min-w-[160px] border border-white/10"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={SITE_CONFIG.phoneLink}
              className={clsx(
                'flex items-center font-semibold transition-colors',
                scrolled
                  ? 'text-white/80 hover:text-white'
                  : 'text-white/90 hover:text-white'
              )}
            >
              <Phone className="h-5 w-5 mr-2" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-gold hover:bg-gold-light text-ocean-deep font-bold rounded-lg transition-all hover:scale-105"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-white/10 mt-4">
                {NAVIGATION.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-white/80 hover:text-white font-medium hover:bg-white/10 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4 bg-white/5">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-white/60 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4 px-4 space-y-3">
                  <a
                    href={SITE_CONFIG.phoneLink}
                    className="flex items-center justify-center text-white font-semibold py-2"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    {SITE_CONFIG.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-5 py-3 bg-gold text-ocean-deep font-bold rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
