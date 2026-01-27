import { Metadata } from 'next'
import {
  LandingHeader,
  LandingHero,
  Testimonials,
  TripComparison,
  CaptainsBrief,
  PhotoStrip,
  FAQ,
  FinalCTA,
  LandingFooter,
} from '@/components/landing'

export const metadata: Metadata = {
  title: 'Book Your Charter | Devine Sportfishing - Venice, LA',
  description:
    'Book your Venice, Louisiana fishing charter with Captain Blake & Lakelynn Devine. Offshore tuna fishing & inshore redfish trips. Request info today!',
  robots: 'noindex, nofollow', // Don't index landing pages
  openGraph: {
    title: 'Book Your Charter | Devine Sportfishing',
    description:
      'Book your Venice, Louisiana fishing charter. Offshore tuna fishing & inshore redfish trips with USCG licensed captains.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Devine Sportfishing',
  },
}

export default function BookingLandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <LandingHeader />

      <LandingHero />

      <Testimonials />

      <TripComparison />

      <CaptainsBrief />

      <PhotoStrip />

      <FAQ />

      <FinalCTA />

      <LandingFooter />

      {/* Meta Pixel Base Code - Replace YOUR_PIXEL_ID */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            // fbq('init', 'YOUR_PIXEL_ID');
            // fbq('track', 'PageView');
          `,
        }}
      />
    </main>
  )
}
