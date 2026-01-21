import type { Metadata } from 'next'
import LocationLandingPage from '@/components/LocationLandingPage'

export const metadata: Metadata = {
  title: 'Dallas Fishing Charter to Venice LA',
  description: 'Book a premier fishing charter from Dallas to Venice, Louisiana. World-class tuna fishing just 1.5 hours by air.',
  keywords: ['Dallas fishing charter', 'Dallas to Venice LA fishing', 'Dallas deep sea fishing', 'Dallas offshore fishing'],
}

export default function DallasFishingCharter() {
  return (
    <LocationLandingPage
      city="Dallas"
      state="TX"
      airport="DFW"
      flightTime="1.5 hours"
      driveTime="~7 hours"
      title="Dallas to Venice, Louisiana Fishing Charters"
    />
  )
}
