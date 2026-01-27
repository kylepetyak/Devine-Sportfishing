'use client'

import Link from 'next/link'

export function LandingFooter() {
  return (
    <footer className="bg-ocean-deep py-8 text-white/70">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Devine Sportfishing | Venice, Louisiana</p>

          <div className="flex items-center gap-4">
            <a href="tel:+15049571104" className="hover:text-white transition-colors">
              (504) 957-1104
            </a>
            <span className="text-white/30">|</span>
            <a
              href="https://instagram.com/devinesportfishing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              @devinesportfishing
            </a>
          </div>

          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
