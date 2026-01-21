import type { Metadata } from 'next'
import LocationLandingPage from '@/components/LocationLandingPage'

export const metadata: Metadata = {
  title: 'Austin Fishing Charter to Venice LA',
  description: 'Book your Austin to Venice, Louisiana fishing adventure. Trophy tuna and more await in the Gulf of Mexico.',
  keywords: ['Austin fishing charter', 'Austin to Venice LA fishing', 'Austin deep sea fishing', 'Austin offshore fishing'],
}

export default function AustinFishingCharter() {
  return (
    <LocationLandingPage
      city="Austin"
      state="TX"
      airport="AUS"
      flightTime="1.5 hours"
      driveTime="~6 hours"
      title="Austin to Venice, Louisiana Fishing Charters"
    />
  )
}
