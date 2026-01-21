import type { Metadata } from 'next'
import LocationLandingPage from '@/components/LocationLandingPage'

export const metadata: Metadata = {
  title: 'Chicago Deep Sea Fishing Venice LA',
  description: 'Escape Chicago for world-class deep sea fishing in Venice, Louisiana. Just 2.5 hours to the Tuna Capital of the World.',
  keywords: ['Chicago fishing charter', 'Chicago deep sea fishing', 'Chicago to Venice LA fishing', 'Chicago offshore fishing'],
}

export default function ChicagoFishingCharter() {
  return (
    <LocationLandingPage
      city="Chicago"
      state="IL"
      airport="ORD"
      flightTime="2.5 hours"
      driveTime="~13 hours"
      title="Chicago to Venice, Louisiana Fishing Charters"
    />
  )
}
