import {
  ChecklistRoom,
  CustomerType,
  FAQItem,
  RouteId,
  ServiceOption,
  ServiceProfile,
  Testimonial,
} from '../types';

export const COMPANY_INFO = {
  name: 'Graves Cleaning & Property Management',
  shortName: 'Graves Cleaning',
  tagline: 'Every Turnover. Every Detail. Every Time.',
  phoneDisplay: '(405) 697-0562',
  phoneHref: 'tel:+14056970562',
  email: 'hello@gravescleaning.com',
  emailHref: 'mailto:hello@gravescleaning.com',
  addressLine1: '3209 S Broadway, Suite 231',
  addressLine2: 'Edmond, OK 73013',
  fullAddress: '3209 S Broadway, Suite 231, Edmond, OK 73013',
  originalWebsite: 'https://www.gravescleaningokc.com/',
  agencyCredit: 'Independent website redesign concept by S.Mideros Agency.',
};

export const IMAGES = {
  heroLiving: '/images/hero-airbnb-living.webp',
  airbnbBedroom: '/images/service-airbnb-bedroom.webp',
  commercialOffice: '/images/service-commercial-office.webp',
  kitchenDeep: '/images/service-kitchen-deep.webp',
  bathroomTurnover: '/images/service-bathroom-turnover.webp',
};

export const PRIMARY_SERVICES: ServiceProfile[] = [
  {
    id: 'airbnb-turnover',
    slug: 'airbnb-turnover',
    number: '01',
    category: 'Airbnb & STR Turnover Cleaning',
    headline: 'Ready for the Next Guest.',
    shortTitle: 'Airbnb & STR Turnovers',
    summary:
      'Consistent between-stay cleaning, linen exchange coordination where offered, amenity restocking support where offered, and post-cleaning photo checklists built for remote and local hosts.',
    image: IMAGES.airbnbBedroom,
    imageAlt:
      'Freshly prepared boutique Airbnb master bedroom with crisp white cotton linens, folded emerald-slate throw, and warm brass bedside lighting',
    ctaLabel: 'Explore Airbnb Turnovers',
    quoteCustomerType: 'Airbnb / Short-Term Rental Host',
    quoteServiceOption: 'Airbnb Turnover Cleaning',
    highlights: [
      'Between-stay cleaning aligned with check-out and check-in windows',
      'Same-day and weekend availability, subject to confirmation',
      'Linen exchange coordination where offered',
      'Amenity restocking support where offered',
      'Post-cleaning photo checklist delivered after service',
    ],
    scopeGroups: [
      {
        title: 'Guest Sleeping Quarters & Living Areas',
        items: [
          'Strip and remake beds with fresh linens provided on-site or coordinated per arrangement',
          'Vacuum carpets, rugs, and hard surfaces; damp-mop sealed floors',
          'Dust nightstands, shelving, TV consoles, baseboards, and window sills',
          'Inspect closets, drawers, and under-bed areas for left-behind guest items',
        ],
      },
      {
        title: 'Kitchen, Bath & Hospitality Staging',
        items: [
          'Sanitize countertops, sinks, faucets, and high-touch cabinet pulls',
          'Clean exterior appliances, interior microwave, and confirm dishes are clean and stowed',
          'Disinfect showers, glass doors, toilets, vanities, and polish mirrors streak-free',
          'Arrange towels and restock host-supplied guest amenities where arranged',
        ],
      },
    ],
    importantNotes: [
      'Same-day and weekend turnovers are available subject to schedule confirmation for your property.',
      'Photo documentation helps remote and out-of-state hosts review room readiness after cleaning without relying on guesswork.',
    ],
  },
  {
    id: 'commercial-cleaning',
    slug: 'commercial-cleaning',
    number: '02',
    category: 'Commercial Cleaning',
    headline: 'A Professional Standard for Every Workday.',
    shortTitle: 'Commercial Cleaning',
    summary:
      'Recurring commercial and office cleaning with after-hours scheduling, supplies and equipment included, and clear photo documentation so workplaces stay presentable for staff and clients.',
    image: IMAGES.commercialOffice,
    imageAlt:
      'Clean contemporary commercial office and glass-walled conference room with polished floors and walnut desks prepared for the workday',
    ctaLabel: 'Explore Commercial Cleaning',
    quoteCustomerType: 'Commercial Business',
    quoteServiceOption: 'Commercial Cleaning',
    highlights: [
      'Tailored office and commercial facility cleaning schedules',
      'Recurring service plans built around operational calendars',
      'After-hours and weekend scheduling to minimize workplace disruption',
      'Cleaning supplies and equipment provided',
      'Photo documentation available for facility oversight',
    ],
    scopeGroups: [
      {
        title: 'Workspaces, Reception & Conference Rooms',
        items: [
          'Clean and sanitize shared conference tables, reception counters, and common touchpoints',
          'Dust desks, architectural glass partitions, sills, and office fixtures',
          'Empty trash and recycling receptacles and replace liners throughout work zones',
          'Vacuum carpeted aisles and mop hard-surface lobbies and hallways',
        ],
      },
      {
        title: 'Breakrooms & Commercial Restrooms',
        items: [
          'Sanitize breakroom sinks, counters, exterior appliances, and dining tables',
          'Clean and disinfect restroom fixtures, partitions, mirrors, and dispensers',
          'Restock paper and soap supplies provided at the facility as arranged',
          'Document completed areas after service for off-site managers',
        ],
      },
    ],
    importantNotes: [
      'Commercial cleaning supplies and standard equipment are included as part of Graves Cleaning commercial service.',
      'Certificate of Insurance (COI) documentation and Net-30 invoicing are available for eligible commercial and property management partners, subject to qualification.',
    ],
  },
  {
    id: 'deep-cleaning',
    slug: 'deep-cleaning',
    number: '03',
    category: 'Deep Cleaning',
    headline: 'The Details Regular Cleaning Can Miss.',
    shortTitle: 'Deep Cleaning',
    summary:
      'Thorough top-to-bottom detail work covering baseboards, interior appliances, window sills, and cabinet fronts—ideal for seasonal resets, onboarding new rentals, or preparing properties for inspection.',
    image: IMAGES.kitchenDeep,
    imageAlt:
      'Bright modern kitchen after deep cleaning showing spotless quartz waterfall island, stainless range, and clean wood cabinetry',
    ctaLabel: 'Explore Deep Cleaning',
    quoteCustomerType: 'Homeowner',
    quoteServiceOption: 'Deep Cleaning',
    highlights: [
      'Detailed attention to baseboards, trim, and door frames',
      'Interior appliance cleaning (oven, refrigerator, microwave) as scoped',
      'Window sills, tracks, and reachable vent covers',
      'Cabinet exteriors and detailed surface buildup removal',
      'Ideal baseline reset prior to recurring turnover service',
    ],
    scopeGroups: [
      {
        title: 'Architectural Trim & Living Surfaces',
        items: [
          'Hand-wipe baseboards, door panels, light switches, and outlet plates',
          'Clear cobwebs, dust ceiling fan blades, light fixtures, and upper ledges',
          'Detail window sills, blinds, and interior glass around high-traffic openings',
          'Deep vacuum upholstery edges, corners, and hard-to-reach floor perimeters',
        ],
      },
      {
        title: 'Kitchen & Bath Detail Work',
        items: [
          'Degrease range hoods, stove grates, backsplashes, and cabinet fronts',
          'Clean interior oven and refrigerator cavities when included in the quote scope',
          'Descale bathroom tile grout lines, shower glass, and chrome or brass fixtures',
          'Sanitize vanity drawers, cabinet interiors where empty, and floor corners',
        ],
      },
    ],
    importantNotes: [
      'Graves Cleaning also references post-construction cleaning on a custom inquiry basis; note project conditions in your quote request.',
      'Exact scope and pricing are confirmed based on property condition, size, and requested add-ons such as interior appliances.',
    ],
  },
  {
    id: 'move-out-cleaning',
    slug: 'move-out-cleaning',
    number: '04',
    category: 'Move-In / Move-Out Cleaning',
    headline: 'A Fresh Start for Every Property.',
    shortTitle: 'Move-In / Move-Out Cleaning',
    summary:
      'Comprehensive vacant-property preparation for transitions between tenants, landlords, property managers, and incoming occupants—with clear photographic verification once the property is ready.',
    image: IMAGES.bathroomTurnover,
    imageAlt:
      'Spotless residential bathroom with walk-in glass shower, marble vanity, and neatly staged towels ready for new occupants',
    ctaLabel: 'Explore Move-Out Cleaning',
    quoteCustomerType: 'Property Manager',
    quoteServiceOption: 'Move-In / Move-Out Cleaning',
    highlights: [
      'Designed for vacant rental properties and ownership transitions',
      'Supports landlords, property managers, and incoming residents',
      'Empty-cabinet, closet, and drawer interior wipe-downs',
      'Detailed kitchen, bathroom, and floor preparation',
      'Post-cleaning photo checklist available for remote landlords',
    ],
    scopeGroups: [
      {
        title: 'Empty-Home Cabinet, Closet & Trim Prep',
        items: [
          'Wipe inside empty kitchen cabinets, pantry shelves, and bathroom vanities',
          'Clean closet shelving, hanging rods, baseboards, and interior doors',
          'Remove dust and residue from window sills, ledges, and reachable vents',
          'Sweep, vacuum, and mop every room thoroughly once furnishings are cleared',
        ],
      },
      {
        title: 'Appliance & Fixture Readiness',
        items: [
          'Clean sinks, countertops, tubs, showers, and toilets for incoming occupants',
          'Detail interior and exterior of ovens and refrigerators when vacant and scoped',
          'Polish mirrors, glass doors, and hardware across all rooms',
          'Provide completion photos so property managers can confirm turn readiness',
        ],
      },
    ],
    importantNotes: [
      'Move-in and move-out cleanings are scoped for empty or nearly empty properties; utilities (water and electricity) must be active at service time.',
      'While thorough cleaning helps prepare a property for landlord or manager walkthroughs, deposit outcomes remain solely between tenant and landlord.',
    ],
  },
];

export const PHOTO_CHECKLIST_ROOMS: ChecklistRoom[] = [
  {
    id: 'living',
    roomName: 'Living & Entry',
    areaCode: 'AREA 01',
    image: IMAGES.heroLiving,
    imageAlt: 'Illustrative photo of a clean open-concept living room and dining space staged for incoming guests',
    summaryNote: 'Illustrative example: entry lock confirmed clear, throw pillows staged, floors vacuumed and damp-mopped.',
    items: [
      { label: 'Flooring & Rugs', detail: 'Hardwood damp-mopped; area rug vacuumed edge-to-edge' },
      { label: 'Glass & Windows', detail: 'Patio slider interior glass wiped clear of handprints' },
      { label: 'Staging & Touchpoints', detail: 'Remotes, switches, and door handles disinfected' },
    ],
  },
  {
    id: 'bedroom',
    roomName: 'Primary Bedroom',
    areaCode: 'AREA 02',
    image: IMAGES.airbnbBedroom,
    imageAlt: 'Illustrative photo of a freshly made short-term rental bed with crisp white linens',
    summaryNote: 'Illustrative example: fresh linens placed, nightstands cleared and dusted, under-bed checked for belongings.',
    items: [
      { label: 'Bed & Linen Reset', detail: 'Fresh sheets fitted smoothly; decorative throw folded cleanly' },
      { label: 'Closets & Drawers', detail: 'Checked empty; extra hangers aligned uniformly' },
      { label: 'Surfaces & Lamps', detail: 'Sconces, headboard, and wood surfaces dusted' },
    ],
  },
  {
    id: 'kitchen',
    roomName: 'Kitchen & Dining',
    areaCode: 'AREA 03',
    image: IMAGES.kitchenDeep,
    imageAlt: 'Illustrative photo of a clean kitchen island, sink, and stainless steel appliances',
    summaryNote: 'Illustrative example: fridge emptied and wiped, coffee station reset, sink and quartz island sanitized.',
    items: [
      { label: 'Appliance Check', detail: 'Microwave interior, range top, and refrigerator shelves wiped' },
      { label: 'Dishware Verification', detail: 'Dishwasher emptied; cookware inspected and stowed' },
      { label: 'Trash & Supplies', detail: 'Bin emptied, fresh liner placed, starter supplies checked' },
    ],
  },
  {
    id: 'bathroom',
    roomName: 'Primary Bath',
    areaCode: 'AREA 04',
    image: IMAGES.bathroomTurnover,
    imageAlt: 'Illustrative photo of a clean bathroom vanity with rolled white towels and spotless shower glass',
    summaryNote: 'Illustrative example: glass enclosure spot-free, vanity fixtures polished, plush towels arranged.',
    items: [
      { label: 'Shower & Glass', detail: 'Tile walls, drain, and frameless glass cleaned streak-free' },
      { label: 'Vanity & Mirror', detail: 'Brass faucet polished, basin disinfected, mirror wiped' },
      { label: 'Towels & Amenities', detail: 'Guest towel set staged; soap and paper stock verified' },
    ],
  },
];

export const RELIABILITY_COMMITMENTS = [
  {
    title: 'Dependable Scheduling ("We Show Up")',
    description:
      'Graves Cleaning emphasizes reliable scheduling: if a scheduled booking is ever missed or canceled last-minute without providing a replacement, that clean is provided at no charge.',
  },
  {
    title: 'Satisfaction Re-Clean Commitment',
    description:
      'If a property does not meet expectations after service, Graves Cleaning states it will return to re-clean the addressed areas at zero additional charge.',
  },
  {
    title: 'Post-Cleaning Photo Checklists',
    description:
      'Photo documentation is provided after cleaning so local and out-of-state owners can verify guest-ready or tenant-ready presentation without visiting in person.',
  },
  {
    title: 'Consistent Cleaning Standards & Supplies',
    description:
      'Structured room-by-room expectations and commercial cleaning supplies and equipment help offices, multi-unit portfolios, and short-term rentals maintain repeatable results.',
  },
  {
    title: 'Direct Local Communication',
    description:
      'Coordinate directly with an Edmond-based team serving the Oklahoma City metro for turnover windows, urgent notes, or property maintenance observations.',
  },
];

export const VERIFIED_TESTIMONIALS: Testimonial[] = [
  {
    id: 'marcus',
    quote:
      'After trying three other cleaning services in OKC, I finally found a team that shows up consistently and actually cleans what they say they will. The same crew every visit makes all the difference for our Airbnb.',
    author: 'Marcus T.',
    context: 'Airbnb Host · Edmond & Oklahoma City',
    sourceLabel: 'Published on gravescleaningokc.com',
  },
  {
    id: 'jacob',
    quote:
      'I live out of state and coordinating with Emily has been wonderful. All of my guests have left 5-star reviews. I literally never worry about the state of my property anymore.',
    author: 'J. Jacob M.',
    context: 'Remote Property Owner',
    sourceLabel: 'Published on gravescleaningokc.com',
  },
];

export const PUBLISHED_TRUST_FIGURES = [
  {
    figure: '47',
    unit: 'Five-Star Reviews',
    scope: 'Oklahoma City local client reviews reported on the company website',
  },
  {
    figure: '70+',
    unit: 'Five-Star Turno Reviews',
    scope: 'Short-term rental host reviews reported on the Turno marketplace',
  },
  {
    figure: '100+',
    unit: 'Hosts & Businesses Served',
    scope: 'Short-term rental operators and commercial clients reported by the company',
  },
];

export const SERVICE_AREAS_CITIES = [
  { name: 'Oklahoma City', note: 'Urban core, Plaza, Paseo, Bricktown, and metro neighborhoods' },
  { name: 'Edmond', note: 'Headquarters corridor, UCO area, Spring Creek, and north metro' },
  { name: 'Norman', note: 'Campus-adjacent rentals, residential corridors, and offices' },
  { name: 'Moore', note: 'South metro residential properties and commercial suites' },
  { name: 'Yukon', note: 'West metro single-family rentals and commercial storefronts' },
  { name: 'Mustang', note: 'Southwest metro rentals and residential transitions' },
  { name: 'Nichols Hills', note: 'Executive residences and boutique short-term rentals' },
  { name: 'Midwest City', note: 'East metro rentals, commercial offices, and move-out turns' },
  { name: 'Del City', note: 'Southeast OKC metro residential and commercial properties' },
  { name: 'Bethany', note: 'Northwest metro neighborhoods and local business facilities' },
  { name: 'Warr Acres', note: 'Northwest corridor offices and residential properties' },
  { name: 'Choctaw', note: 'Eastern metro acreage homes and short-term stays' },
  { name: 'Harrah', note: 'East metro residential turnovers and deep cleanings' },
  { name: 'Newcastle', note: 'Southern corridor properties and new-occupant turns' },
  { name: 'Tuttle', note: 'Southwest corridor properties, confirmed by address' },
  { name: 'Piedmont', note: 'Northwest metro residences and rental turnovers' },
  { name: 'El Reno', note: 'Canadian County properties, confirmed by address' },
];

export const CLEANING_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand Property Requirements',
    description:
      'Review property layout, bed count or square footage, turnover windows, linen preferences, and any access or parking instructions.',
  },
  {
    step: '02',
    title: 'Prepare the Cleaning Scope',
    description:
      'Confirm whether the visit requires standard Airbnb turnover staging, recurring commercial maintenance, deep detail work, or vacant move-out prep.',
  },
  {
    step: '03',
    title: 'Complete the Scheduled Service',
    description:
      'Arrive within the agreed window with appropriate supplies and equipment, executing room-by-room cleaning without shortcuts.',
  },
  {
    step: '04',
    title: 'Review Property Details',
    description:
      'Verify high-touch surfaces, staged linens or breakrooms, appliance fronts, and flag any visible maintenance or restocking notes.',
  },
  {
    step: '05',
    title: 'Deliver Photo Documentation',
    description:
      'Send post-cleaning checklist photos so hosts, property managers, and business owners can review readiness from anywhere.',
  },
];

export const ALL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Airbnb & STR',
    question: 'What is Airbnb turnover cleaning?',
    answer:
      'Airbnb and short-term rental turnover cleaning is a structured between-stay service that prepares a property for incoming guests. It covers sanitizing kitchens and bathrooms, vacuuming and mopping floors, changing linens where arranged, emptying trash, checking for left items, and staging the home to guest-ready standards.',
  },
  {
    id: 'faq-2',
    category: 'Airbnb & STR',
    question: 'How does the photo checklist work?',
    answer:
      'After a scheduled cleaning is completed, Graves Cleaning provides a room-by-room photo checklist documenting the finished spaces. This allows hosts, remote owners, and property managers to review cleanliness and staging without needing to visit the property in person.',
  },
  {
    id: 'faq-3',
    category: 'Airbnb & STR',
    question: 'Can remote owners request cleaning?',
    answer:
      'Yes. Remote and out-of-state short-term rental owners regularly coordinate cleanings with Graves Cleaning. Post-cleaning photo documentation and clear communication help remote operators verify each turnover across the Oklahoma City metro.',
  },
  {
    id: 'faq-4',
    category: 'Airbnb & STR',
    question: 'Are same-day turnovers available?',
    answer:
      'Same-day turnovers between guest check-out and check-in are offered subject to schedule availability and advance coordination. Share your typical turnover window and property location when requesting a quote so the team can confirm coverage.',
  },
  {
    id: 'faq-5',
    category: 'Airbnb & STR',
    question: 'Can cleaning be scheduled on weekends?',
    answer:
      'Yes. Weekend cleaning is available for short-term rental turnovers and eligible commercial schedules, subject to confirmation when setting up your service plan.',
  },
  {
    id: 'faq-6',
    category: 'Policies & Quotes',
    question: 'What is included in deep cleaning?',
    answer:
      'Deep cleaning focuses on areas beyond routine upkeep, including baseboards, window sills, cabinet exteriors, detailed kitchen and bathroom buildup, reachable vents, and optional interior appliance cleaning such as ovens and refrigerators when requested in your scope.',
  },
  {
    id: 'faq-7',
    category: 'Commercial',
    question: 'How do property manager partnerships work?',
    answer:
      'Property managers overseeing multiple short-term rentals, vacant units, or commercial spaces can coordinate recurring turnovers, standardized checklists, and per-property photo documentation through one partner. Eligible partners may inquire about consolidated Net-30 invoicing and Certificates of Insurance (COI), subject to qualification.',
  },
  {
    id: 'faq-8',
    category: 'Policies & Quotes',
    question: 'What affects cleaning prices?',
    answer:
      'Quotes depend on property size, bedroom and bathroom count or commercial square footage, service category (turnover, commercial, deep clean, or move-out), cleaning frequency, current condition, and optional add-ons like interior appliances or linen coordination.',
  },
  {
    id: 'faq-9',
    category: 'Commercial',
    question: 'Are supplies included?',
    answer:
      'Yes. Graves Cleaning brings standard cleaning supplies and equipment for commercial and property services. For Airbnb turnovers, guest consumables (such as paper goods, soaps, and coffee) are typically owner-supplied, with restocking support coordinated as arranged.',
  },
  {
    id: 'faq-10',
    category: 'Service Areas',
    question: 'Which cities are served?',
    answer:
      'Graves Cleaning serves Edmond and the greater Oklahoma City metropolitan area, including Oklahoma City, Norman, Moore, Yukon, Mustang, Nichols Hills, Midwest City, Del City, Bethany, Warr Acres, Choctaw, Harrah, Newcastle, Tuttle, Piedmont, and El Reno. Exact availability is confirmed per property address.',
  },
  {
    id: 'faq-11',
    category: 'Policies & Quotes',
    question: 'How can customers request a quote?',
    answer:
      'You can complete the guided quote request form on this website, call (405) 697-0562, or email hello@gravescleaning.com with your property location, service type, and general size. Graves Cleaning reviews each inquiry to confirm pricing and schedule availability.',
  },
];

export const CUSTOMER_SERVICE_MAP: Record<CustomerType, ServiceOption[]> = {
  'Airbnb / Short-Term Rental Host': [
    'Airbnb Turnover Cleaning',
    'Deep Cleaning',
    'Move-In / Move-Out Cleaning',
    'Other Cleaning Inquiry',
  ],
  'Property Manager': [
    'Property Management Partnership',
    'Airbnb Turnover Cleaning',
    'Move-In / Move-Out Cleaning',
    'Commercial Cleaning',
    'Deep Cleaning',
  ],
  'Commercial Business': [
    'Commercial Cleaning',
    'Deep Cleaning',
    'Other Cleaning Inquiry',
  ],
  Homeowner: [
    'Deep Cleaning',
    'Move-In / Move-Out Cleaning',
    'Recurring Home Cleaning — Confirm Availability',
    'Other Cleaning Inquiry',
  ],
  Other: [
    'Deep Cleaning',
    'Move-In / Move-Out Cleaning',
    'Commercial Cleaning',
    'Airbnb Turnover Cleaning',
    'Other Cleaning Inquiry',
  ],
};

export const ROUTE_TITLES: Record<RouteId, string> = {
  home: 'Home',
  'airbnb-turnover': 'Airbnb & STR Turnover Cleaning',
  'commercial-cleaning': 'Commercial Cleaning',
  'deep-cleaning': 'Deep Cleaning',
  'move-out-cleaning': 'Move-In / Move-Out Cleaning',
  'property-managers': 'Property Management Partners',
  'our-standards': 'Our Cleaning Standards',
  'photo-checklist': 'Photo Checklist Experience',
  'service-areas': 'Service Areas',
  reviews: 'Reviews & Client Trust',
  faqs: 'Frequently Asked Questions',
  quote: 'Request a Free Quote',
  contact: 'Contact Us',
  about: 'About Graves Cleaning',
  privacy: 'Privacy Policy & Concept Notice',
};
