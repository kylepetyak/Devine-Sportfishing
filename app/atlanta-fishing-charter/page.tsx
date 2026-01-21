import type { Metadata } from 'next'
import LocationLandingPage from '@/components/LocationLandingPage'

export const metadata: Metadata = {
  title: 'Atlanta Fishing Charter to Venice LA',
  description: 'Experience world-class fishing from Atlanta to Venice, Louisiana. The Fishing Capital of the World is just 1.5 hours away.',
  keywords: ['Atlanta fishing charter', 'Atlanta to Venice LA fishing', 'Atlanta deep sea fishing', 'Atlanta offshore fishing trip'],
}

export default function AtlantaFishingCharter() {
  return (
    <LocationLandingPage
      city="Atlanta"
      state="GA"
      airport="ATL"
      flightTime="1.5 hours"
      driveTime="~7 hours"
      title="Atlanta to Venice, Louisiana Fishing Charters"
    />
  )
}
