import type { Metadata } from 'next'
import LocationLandingPage from '@/components/LocationLandingPage'

export const metadata: Metadata = {
  title: 'Houston Fishing Charter to Venice LA',
  description: 'Book a world-class fishing charter from Houston to Venice, Louisiana. Just a 1-hour flight or 5-hour drive to the Tuna Capital of the World.',
  keywords: ['Houston fishing charter', 'Houston to Venice LA fishing', 'Houston deep sea fishing', 'Houston tuna fishing'],
}

export default function HoustonFishingCharter() {
  return (
    <LocationLandingPage
      city="Houston"
      state="TX"
      airport="IAH/HOU"
      flightTime="1 hour"
      driveTime="~5 hours"
      title="Houston to Venice, Louisiana Fishing Charters"
    />
  )
}
