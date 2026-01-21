import type { Metadata } from 'next'
import LocationLandingPage from '@/components/LocationLandingPage'

export const metadata: Metadata = {
  title: 'Yellowfin Tuna Fishing Venice LA',
  description: 'Experience the best yellowfin tuna fishing in the world. Venice, Louisiana is the Tuna Capital - book your charter today.',
  keywords: ['tuna fishing Venice Louisiana', 'yellowfin tuna charter', 'Venice LA tuna fishing', 'tuna fishing Gulf of Mexico'],
}

export default function TunaFishingVeniceLa() {
  return (
    <LocationLandingPage
      city="Venice"
      title="Tuna Fishing in Venice, Louisiana"
      isTunaPage={true}
    />
  )
}
