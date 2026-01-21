import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { SITE_CONFIG, NAVIGATION } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src={SITE_CONFIG.logo}
                alt={SITE_CONFIG.name}
                width={180}
                height={60}
                className="h-14 w-auto mb-4 brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premier fishing charters in Venice, Louisiana - the Fishing Capital of the World.
              Family-owned and operated by Captain Blake & Captain Lakelynn Devine.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trips */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Trips</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/trips/offshore"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Offshore Fishing - $2,500/day
                </Link>
              </li>
              <li>
                <Link
                  href="/trips/inshore"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Inshore Fishing - $900/day
                </Link>
              </li>
              <li>
                <Link
                  href="/trips/custom"
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  Custom Charters
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE_CONFIG.phoneLink}
                  className="flex items-center text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Venice, Louisiana
                  <br />
                  60 miles south of New Orleans
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              USCG Licensed & Insured | Venice, Louisiana
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
