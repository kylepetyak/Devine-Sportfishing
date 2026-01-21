export const SITE_CONFIG = {
  name: 'Devine Sportfishing',
  tagline: 'Premier Fishing Charters in Venice, Louisiana',
  description: 'Experience world-class fishing charters in Venice, Louisiana - the Fishing Capital of the World. Book your offshore or inshore adventure with Captain Blake & Captain Lakelynn Devine.',
  url: 'https://devinesportfishing.com',
  phone: '(504) 957-1104',
  phoneLink: 'tel:+15049571104',
  email: 'info@devinesportfishing.com',
  location: 'Venice, Louisiana',
  address: {
    city: 'Venice',
    state: 'LA',
    region: 'Louisiana',
  },
  social: {
    instagram: 'https://www.instagram.com/devinesportfishing/',
    facebook: 'https://www.facebook.com/profile.php?id=61572185021191',
  },
  logo: 'https://cdn.prod.website-files.com/67891defbbf61e4b03972c08/67892008b58ff05dfc7d92e9_Devine%20Sportfishing%20logo-lg-trans.png',
}

export const TRIPS = {
  offshore: {
    name: 'Offshore Fishing Charter',
    slug: 'offshore',
    price: 2500,
    priceDisplay: '$2,500',
    duration: '10 hours dock-to-dock',
    capacity: 'Up to 6 passengers',
    boat: "Custom 38' Catamaran with quad 300hp Yamaha",
    description: 'Target yellowfin tuna, swordfish, marlin, and more in the deep waters of the Gulf of Mexico.',
    included: [
      'All bait, ice, and tackle',
      'Expert guidance from Captain Blake or Captain Lakelynn',
      'Fish cleaning and bagging',
    ],
    species: [
      'Yellowfin Tuna (our specialty - catches up to 220+ lbs)',
      'Swordfish',
      'Blue & White Marlin',
      'Wahoo',
      'Mahi-Mahi',
      'Amberjack',
      'Red Snapper',
    ],
    whatToBring: [
      'Sunscreen and sunglasses',
      'Food and drinks (coolers provided on boat)',
      'Louisiana fishing license (can purchase online)',
      'Camera for photos',
    ],
  },
  inshore: {
    name: 'Inshore Fishing Charter',
    slug: 'inshore',
    price: 900,
    priceDisplay: '$900',
    duration: '6 hours',
    capacity: 'Up to 3 passengers',
    boat: "22' Catamaran",
    description: 'Explore the marshes and bayous for redfish, speckled trout, and flounder.',
    included: [
      'Fuel, bait, ice, and tackle',
      'Expert local guidance',
    ],
    species: [
      'Redfish (including trophy Bull Reds)',
      'Speckled Trout',
      'Flounder',
      'Black Drum',
    ],
    perfectFor: [
      'Families with children',
      'First-time anglers',
      'Those wanting calmer waters',
    ],
  },
  custom: {
    name: 'Custom Fishing Charter',
    slug: 'custom',
    price: null,
    priceDisplay: 'Contact for pricing',
    duration: 'Varies',
    capacity: 'Contact for details',
    boat: 'Based on trip type',
    description: 'Design your perfect fishing experience with a customized charter tailored to your needs.',
  },
}

export const SPECIES = {
  offshore: [
    { name: 'Yellowfin Tuna', description: 'Our specialty - catches up to 220+ lbs' },
    { name: 'Swordfish', description: 'Deep-water giants' },
    { name: 'Blue Marlin', description: 'The ultimate gamefish' },
    { name: 'White Marlin', description: 'Acrobatic fighters' },
    { name: 'Wahoo', description: 'Speed demons of the Gulf' },
    { name: 'Mahi-Mahi', description: 'Beautiful and delicious' },
    { name: 'Amberjack', description: 'Powerful reef dwellers' },
    { name: 'Red Snapper', description: 'Gulf Coast favorites' },
  ],
  inshore: [
    { name: 'Redfish', description: 'Including trophy Bull Reds' },
    { name: 'Speckled Trout', description: 'Louisiana staple' },
    { name: 'Flounder', description: 'Flatfish fun' },
    { name: 'Black Drum', description: 'Strong fighters' },
  ],
}

export const SPONSORS = [
  { name: 'AFTCO', logo: '/images/sponsors/aftco.png' },
  { name: 'Shimano', logo: '/images/sponsors/shimano.png' },
  { name: 'Yamaha', logo: '/images/sponsors/yamaha.png' },
  { name: 'Costa Del Mar', logo: '/images/sponsors/costa.png' },
  { name: 'Owner Hooks', logo: '/images/sponsors/owner.png' },
  { name: 'Cortland Line', logo: '/images/sponsors/cortland.png' },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Local Expertise',
    description: 'Captain Blake is a lifelong Venice local with deep knowledge of these waters.',
    icon: 'map-pin',
  },
  {
    title: 'Family Owned & Operated',
    description: 'Husband and wife captain team providing personalized service.',
    icon: 'heart',
  },
  {
    title: 'USCG Licensed & Insured',
    description: 'Both captains are fully licensed and insured for your safety.',
    icon: 'shield-check',
  },
  {
    title: 'Personalized Experience',
    description: 'Every trip is tailored to your skill level and fishing goals.',
    icon: 'star',
  },
]

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Trips', href: '/trips', children: [
    { name: 'Offshore', href: '/trips/offshore' },
    { name: 'Inshore', href: '/trips/inshore' },
    { name: 'Custom', href: '/trips/custom' },
  ]},
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export const LOCATION_PAGES = [
  {
    slug: 'houston-fishing-charter',
    city: 'Houston',
    state: 'TX',
    airport: 'IAH/HOU',
    flightTime: '1 hour',
    driveTime: '~5 hours',
    title: 'Houston to Venice, Louisiana Fishing Charters',
    metaTitle: 'Houston Fishing Charter to Venice LA | Devine Sportfishing',
    metaDescription: 'Book a world-class fishing charter from Houston to Venice, Louisiana. Just a 1-hour flight or 5-hour drive to the Tuna Capital of the World.',
  },
  {
    slug: 'dallas-fishing-charter',
    city: 'Dallas',
    state: 'TX',
    airport: 'DFW',
    flightTime: '1.5 hours',
    driveTime: '~7 hours',
    title: 'Dallas to Venice, Louisiana Fishing Charters',
    metaTitle: 'Dallas Fishing Charter to Venice LA | Devine Sportfishing',
    metaDescription: 'Book a premier fishing charter from Dallas to Venice, Louisiana. World-class tuna fishing just 1.5 hours by air.',
  },
  {
    slug: 'atlanta-fishing-charter',
    city: 'Atlanta',
    state: 'GA',
    airport: 'ATL',
    flightTime: '1.5 hours',
    driveTime: '~7 hours',
    title: 'Atlanta to Venice, Louisiana Fishing Charters',
    metaTitle: 'Atlanta Fishing Charter to Venice LA | Devine Sportfishing',
    metaDescription: 'Experience world-class fishing from Atlanta to Venice, Louisiana. The Fishing Capital of the World is just 1.5 hours away.',
  },
  {
    slug: 'austin-fishing-charter',
    city: 'Austin',
    state: 'TX',
    airport: 'AUS',
    flightTime: '1.5 hours',
    driveTime: '~6 hours',
    title: 'Austin to Venice, Louisiana Fishing Charters',
    metaTitle: 'Austin Fishing Charter to Venice LA | Devine Sportfishing',
    metaDescription: 'Book your Austin to Venice, Louisiana fishing adventure. Trophy tuna and more await in the Gulf of Mexico.',
  },
  {
    slug: 'chicago-fishing-charter',
    city: 'Chicago',
    state: 'IL',
    airport: 'ORD',
    flightTime: '2.5 hours',
    driveTime: '~13 hours',
    title: 'Chicago to Venice, Louisiana Fishing Charters',
    metaTitle: 'Chicago Deep Sea Fishing Venice LA | Devine Sportfishing',
    metaDescription: 'Escape Chicago for world-class deep sea fishing in Venice, Louisiana. Just 2.5 hours to the Tuna Capital of the World.',
  },
  {
    slug: 'tuna-fishing-venice-la',
    city: null,
    state: null,
    airport: null,
    flightTime: null,
    driveTime: null,
    title: 'Tuna Fishing in Venice, Louisiana',
    metaTitle: 'Yellowfin Tuna Fishing Venice LA | Devine Sportfishing',
    metaDescription: 'Experience the best yellowfin tuna fishing in the world. Venice, Louisiana is the Tuna Capital - book your charter today.',
    isTunaPage: true,
  },
]
