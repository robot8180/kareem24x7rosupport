import { BrandInfo, FAQItem, ServiceItem, Testimonial } from '../types';

export const BUSINESS_DETAILS = {
  name: '24x7 RO Support',
  fullName: '24x7 RO Support - Water Purifier Repair & Maintenance',
  logoUrl: 'https://i.ibb.co/k6cRgnyt/IMG-20260805-WA0010.jpg',
  phone: '08095855473',
  formattedPhone: '080958 55473',
  whatsappNumber: '918095855473',
  address: 'Bangalore, Karnataka, India',
  city: 'Bangalore',
  state: 'Karnataka',
  pincodePlaceholder: '560001',
  workingHours: '8:00 AM - 9:00 PM (All 7 Days)',
  email: 'Rocarebangalorero@gmail.com',
  formSubmitEmail: 'Rocarebangalorero@gmail.com',
  udyamNumber: 'UDYAM-KR-03-0558507',
  disclaimer: 'Disclaimer: 24x7 RO Support is an independent multi-brand water purifier service center in Bangalore. We provide repair, maintenance, and genuine filter replacement services. Brand names and logos are used strictly for identification and compatibility purposes.',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'ro-repair',
    title: 'RO Water Purifier Repair & Service',
    description: 'Complete troubleshooting and repair for power, leakage, and thermostat issues.',
    iconName: 'Wrench',
    features: ['Precise on-site diagnosis', '100% genuine components', 'Same-day fault resolution', '30-day labor warranty'],
    popularTag: 'Most Requested',
    startingPrice: '₹299',
  },
  {
    id: 'ro-repair-adv',
    title: 'RO Water Purifier Repair',
    description: 'Fix purification problems, filter issues, low flow, and error indicators.',
    iconName: 'Activity',
    features: ['Filter & membrane check', 'Flow rate optimization', 'Error code diagnosis', 'Performance testing'],
  },
  {
    id: 'ro-installation',
    title: 'Installation & Uninstallation Support',
    description: 'Safe and professional installation or removal of RO appliances.',
    iconName: 'Download',
    features: ['Heavy-duty wall mounting', 'Water pressure balancing', 'Leak-proof plumbing', 'Operational demonstration'],
    startingPrice: '₹499',
  },
  {
    id: 'ro-amc',
    title: 'Annual Maintenance Contracts (AMC)',
    description: 'Affordable AMC plans for regular servicing and preventive maintenance.',
    iconName: 'ShieldCheck',
    features: ['Scheduled preventive visits', 'All routine filters covered', 'Zero labor charges', 'Priority technician response'],
    popularTag: 'Best Value Plan',
    startingPrice: '₹2,499 / Year',
  },
  {
    id: 'genuine-spares',
    title: 'Genuine Spare Parts Replacement',
    description: 'Only high-quality and compatible spare parts used for long-term reliability.',
    iconName: 'Filter',
    features: ['High-TDS rejection membranes', 'Authentic booster pumps', 'Durable connectors', 'Warranty support'],
  },
];

export const BRAND_PAGES_DATA: Record<string, BrandInfo> = {
  'kent-service': {
    id: 'kent',
    name: 'Kent',
    slug: '/kent-service',
    logoText: 'KENT',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787456695/IMG-20260822-WA0038_eea1tq.jpg',
    tagline: 'Pure & Mineral-Rich Water — Specialized Kent RO Repair & Maintenance',
    accentColor: 'from-blue-600 to-cyan-500',
    description: 'Keep your Kent water purifier operating at peak efficiency. Our seasoned technicians specialize in Kent Grand Plus, Pearl, Supreme, Prime, Wonder, and Under-Counter RO systems across Bangalore. We deliver prompt doorstep servicing, authentic filter replacements, and meticulous mineral calibration with same-day technician visits.',
    metaTitle: 'Kent RO Repair & Service Bangalore | Doorstep Filter Replacement',
    metaDescription: 'Expert doorstep Kent RO service across Bangalore. Same-day technician visits, genuine high-TDS rejection membranes, mineral filters & 30-day warranty.',
    commonProblems: [
      'Continuous beeping alert or UV failure indicator sound in Kent purifier',
      'Water leaking from bottom casing, inlet connectors, or auto-flush valve',
      'Low water flow speed or extremely slow storage tank filling',
      'Bitter, brackish, or uncharacteristic taste in purified drinking water',
      'SMPS power adapter burnt or machine failing to power on',
      'High TDS output due to exhausted RO membrane or clogged pre-carbon filter',
    ],
    brandFaqs: [
      {
        question: 'Are your technicians trained specifically on Kent RO systems?',
        answer: 'Yes, our senior technicians have extensive hands-on expertise with all Kent models including Kent Grand, Prime, Supreme, Pearl, Mineral RO, and Under-Sink commercial purifiers throughout Bangalore.',
      },
      {
        question: 'Do you provide authentic Kent replacement filters and RO membranes?',
        answer: 'We exclusively fit certified high-grade sediment filters, coconut shell carbon blocks, Philips UV lamps, and authentic high-rejection RO membranes built to handle Bangalore borewell water.',
      },
      {
        question: 'How fast can a technician arrive at my home in Bangalore?',
        answer: 'Our local technicians are positioned across Bangalore, reaching your doorstep within 60 to 90 minutes of booking confirmation.',
      },
      {
        question: 'What is the starting cost for Kent RO servicing?',
        answer: 'Our doorstep inspection and complete diagnostic check starts at just ₹299. If you proceed with recommended filter changes or repairs, this fee is adjusted against the final invoice.',
      },
      {
        question: 'Why is my Kent RO purifier making a continuous beeping sound?',
        answer: 'A constant beeping alert typically indicates a UV lamp failure or an electronic sensor alert. Our technician will inspect the UV ballast and lamp assembly to resolve the issue on the spot.',
      },
      {
        question: 'What does a Kent Annual Maintenance Contract (AMC) include?',
        answer: 'Our Kent AMC plan includes 3 scheduled preventive maintenance visits, complete replacement of sediment and carbon filters, membrane health testing, and unlimited free breakdown calls throughout the year.',
      },
      {
        question: 'How do I know when to replace my Kent RO membrane?',
        answer: 'Key indicators include a noticeable drop in flow rate, a rise in water TDS level, or a flat/unusual taste. We conduct electronic TDS tests before and after any filter replacement to verify membrane performance.',
      },
      {
        question: 'Do you offer a post-service warranty on Kent repairs?',
        answer: 'Yes, we provide an ironclad 30-day labor warranty on all repair work, along with manufacturer warranties on newly fitted booster pumps, SMPS units, and RO membranes.',
      },
      {
        question: 'Can you adjust the mineral and TDS level on my Kent RO?',
        answer: 'Yes, our technicians calibrate the built-in Kent TDS controller and mineralizer valve to achieve the ideal 50–120 PPM drinking water range recommended for health.',
      },
    ],
    popularSearches: [
      'Kent RO service Bangalore',
      'Kent water purifier repair',
      'Kent filter replacement cost',
      'Kent RO AMC plan Bangalore',
      'Kent RO technician near me'
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787239134/file_00000000cb9082119ada12e5c50c238d_yb23pj.png',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789495220/IMG-20260915-WA0026_nrvlvs.jpg',
  },

  'aquaguard-service': {
    id: 'aquaguard',
    name: 'Aquaguard',
    slug: '/aquaguard-service',
    logoText: 'Aquaguard',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787456695/IMG-20260822-WA0036_aymptj.jpg',
    tagline: 'Pure & Safe Hydration — Professional Aquaguard RO Repair & Care',
    accentColor: 'from-teal-600 to-emerald-500',
    description: 'Experience dedicated doorstep care for your Eureka Forbes Aquaguard purifier. We service Geneus, Enhance, Blaze, Ritz, Magna, Active Copper, and Biotron models across Bangalore. Enjoy rapid diagnostic turnaround, original replacement cartridges, and sanitized tank maintenance.',
    metaTitle: 'Aquaguard Service Bangalore | RO Repair & Copper Filter Change',
    metaDescription: 'Certified Aquaguard RO repair & service across Bangalore. Doorstep copper cartridge replacement, UV sterilizer repair, and affordable AMC plans.',
    commonProblems: [
      'Active Copper cartridge blocked or requiring scheduled renewal',
      'Blinking red or orange warning indicator with continuous buzzer chime',
      'Sudden drop in purified water output flow or tank not filling',
      'Water dripping from internal push-fit connectors or valve joints',
      'UV disinfection tube error or electronic sensor malfunction',
      'Metallic or bitter aftertaste in purified drinking water',
    ],
    brandFaqs: [
      {
        question: 'How quickly can I get an Aquaguard technician at my residence?',
        answer: 'Our mobile service network covers every major neighborhood in Bangalore. Once booked, a certified technician arrives at your doorstep within 60 to 90 minutes.',
      },
      {
        question: 'Do you replace authentic Aquaguard Active Copper and Biotron cartridges?',
        answer: 'Yes, we carry original Active Copper, Mineral Guard, Chemi-Block, and HD RO cartridges designed specifically for Eureka Forbes Aquaguard purifiers.',
      },
      {
        question: 'What is included during an Aquaguard full service visit?',
        answer: 'A comprehensive check includes input/output TDS measurement, pre-filter candle cleaning, high-pressure pump testing, UV tube inspection, electronic leak test, and sanitized storage tank cleaning.',
      },
      {
        question: 'Why is my Aquaguard blinking a red light and beeping?',
        answer: 'A flashing red light with an audible beep typically signals that the internal filter lifecycle has elapsed or that the UV sterilizer requires attention. Our technician can replace the needed cartridge and reset the sensor counter on-site.',
      },
      {
        question: 'Do you provide AMC plans for Aquaguard water purifiers in Bangalore?',
        answer: 'Yes, our Aquaguard Annual Maintenance Contracts provide comprehensive coverage with scheduled filter replacements, regular sanitization visits, and free emergency breakdown calls.',
      },
      {
        question: 'How often should Aquaguard Active Copper cartridges be replaced?',
        answer: 'We recommend replacing the Active Copper cartridge every 12 months or 6,000 liters to ensure consistent copper infusion and optimum water purity.',
      },
      {
        question: 'Are your service charges fixed and transparent?',
        answer: 'Yes. Our technician provides a clear, itemized quote after the physical inspection, with zero surprise fees or hidden add-ons.',
      },
      {
        question: 'Do you offer a warranty on Aquaguard replacement parts?',
        answer: 'All repair work includes our 30-day labor guarantee, plus full warranty coverage on replaced membranes, pumps, and electronics.',
      },
      {
        question: 'Can you handle Aquaguard models with hot & cold water dispensers?',
        answer: 'Yes, our technicians are trained to service Aquaguard Blaze and other dual-temperature systems, safely testing heating coils and cooling thermostats.',
      },
    ],
    popularSearches: [
      'Aquaguard service Bangalore',
      'Aquaguard Active Copper filter replacement',
      'Aquaguard RO repair cost',
      'Aquaguard AMC plan Bangalore',
      'Aquaguard technician near me'
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787239134/file_000000009e748211af646f5d6dda5fcb_wzukgr.png',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789492679/IMG-20260915-WA0034_rnq3ud.jpg',
  },

  'pureit-service': {
    id: 'pureit',
    name: 'Pureit',
    slug: '/pureit-service',
    logoText: 'Pureit',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787456695/IMG-20260822-WA0034_vmyqqk.jpg',
    tagline: 'Reliable Water Purity — Fast Pureit GKK Kit & RO Servicing',
    accentColor: 'from-sky-600 to-indigo-500',
    description: 'Keep your Pureit water purifier in perfect working order. We provide swift doorstep maintenance for Pureit Marvella, Ultima, Copper RO+UV, Mineral RO, and Classic models across Bangalore. From original Germkill Kit (GKK) renewals to motor repairs, our certified experts deliver same-day peace of mind.',
    metaTitle: 'Pureit Service Bangalore | Pureit GKK Replacement & Repair',
    metaDescription: 'Same-day doorstep Pureit water purifier repair & GKK filter replacement in Bangalore. Genuine parts, electronic reset, and 30-day labor warranty.',
    commonProblems: [
      'Pureit Germkill Kit (GKK) indicator turned red with automatic water lock activated',
      'No water output despite sufficient inlet water supply and power',
      'Continuous beep warning alert or error code on Ultima digital display',
      'Water leaking from internal connectors, solenoid valve, or GKK chamber',
      'Booster pump humming without delivering water pressure to membrane',
      'High TDS readings or unpleasant taste after prolonged filter operation',
    ],
    brandFaqs: [
      {
        question: 'Do you carry original Pureit Germkill Kits (GKK)?',
        answer: 'Yes, our technicians carry factory-sealed, genuine Pureit GKK kits for 1500L, 2000L, 3000L, and 6000L purifiers, ensuring authentic replacement on the spot.',
      },
      {
        question: 'My Pureit stopped dispensing water because the light is red. Can you fix it today?',
        answer: 'Yes! The red indicator is Pureits auto-shutoff safety mechanism. Our technician will visit within 60 to 90 minutes, replace the GKK kit, reset the digital indicator, and restore immediate water flow.',
      },
      {
        question: 'Can you upgrade my Pureit purifier to handle high Bangalore borewell TDS?',
        answer: 'Absolutely. We can install high-rejection 3000+ PPM RO membranes and auxiliary pre-filter housings to safeguard your Pureit system against heavy borewell sediment.',
      },
      {
        question: 'Does Pureit servicing include storage tank sanitization?',
        answer: 'Yes, every comprehensive service includes thorough sanitization and descaling of the internal storage reservoir to maintain optimal hygiene.',
      },
      {
        question: 'How long does a Pureit GKK replacement visit take?',
        answer: 'A standard GKK kit replacement and complete diagnostic inspection typically takes between 30 to 45 minutes right in your home.',
      },
      {
        question: 'What is the cost of Pureit RO servicing in Bangalore?',
        answer: 'Our doorstep inspection fee is ₹299 (adjusted upon service completion). Replacement GKK kits and parts are priced transparently at fair rates.',
      },
      {
        question: 'Do you provide AMC coverage for Pureit models?',
        answer: 'Yes, our Pureit AMC contracts cover all regular GKK kit replacements, preventive checkups, and unlimited breakdown repairs with zero labor charges.',
      },
      {
        question: 'Are your technicians certified for Pureit digital models?',
        answer: 'Our technicians possess specialized diagnostic tools to decode error alerts on digital displays for Pureit Ultima, Copper RO, and Marvella purifiers.',
      },
      {
        question: 'What warranty is provided on Pureit repair work?',
        answer: 'We provide a 30-day labor warranty on all repairs, ensuring you have total confidence in our workmanship.',
      },
    ],
    popularSearches: [
      'Pureit service Bangalore',
      'Pureit GKK replacement Bangalore',
      'Pureit RO repair near me',
      'Pureit Marvella filter change',
      'Pureit AMC plan Bangalore'
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787239134/file_0000000011a48211aeafadfc49fb86c5_ohr8va.png',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789495220/IMG-20260915-WA0027_bxqeyt.jpg',
  },

  'aosmith-service': {
    id: 'ao-smith',
    name: 'AO Smith',
    slug: '/aosmith-service',
    logoText: 'A. O. SMITH',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787456694/IMG-20260822-WA0039_l3llhm.jpg',
    tagline: 'Engineered Excellence — Premium AO Smith RO Repair & Filter Replacement',
    accentColor: 'from-blue-700 to-slate-700',
    description: 'Protect your investment with dedicated AO Smith water purifier servicing. We support AO Smith Z8, Z9, X8, ProPlanet, and Green Series RO purifiers across Bangalore. Benefit from authentic SCM membranes, MIN-TECH mineralizers, and expert maintenance for hot water dispensing systems.',
    metaTitle: 'AO Smith Water Purifier Service Bangalore | Fast RO Repair & SCM Filter',
    metaDescription: 'Specialized AO Smith RO repair & filter replacement across Bangalore. Doorstep service for Z8, Z9, X8 with genuine SCM membranes & MIN-TECH cartridges.',
    commonProblems: [
      'Touch panel unresponsive or water dispense button not triggering',
      'SCM membrane or MIN-TECH mineralizer cartridge change indicator glowing',
      'Hot water heating failure or thermostat indicator error in Z8/Z9 models',
      'Purifier continuously draining wastewater without shutting off automatically',
      'Internal water leakage around high-pressure fittings and solenoid valves',
      'Power light blinking intermittently or display unit failure',
    ],
    brandFaqs: [
      {
        question: 'Do you carry original AO Smith MIN-TECH and SCM replacement filters?',
        answer: 'Yes, we stock genuine AO Smith pre-filter cartridges, sediment filters, activated carbon blocks, patented SCM membranes, and MIN-TECH mineral cartridges.',
      },
      {
        question: 'Can you repair heating and hot water dispensing faults on AO Smith Z8/Z9 purifiers?',
        answer: 'Yes, our senior technicians are certified in repairing heating elements, thermal safety sensors, and PCB controllers on AO Smith hot water RO units.',
      },
      {
        question: 'How fast can an AO Smith technician visit my home in Bangalore?',
        answer: 'We dispatch a technician within 60 to 90 minutes of your booking confirmation across all Bangalore localities.',
      },
      {
        question: 'Why is my AO Smith purifier continuously beeping?',
        answer: 'Continuous beeping or illuminated icons indicate filter life expiration or internal pressure imbalance. Our technician will test each stage and reset the digital alert.',
      },
      {
        question: 'What is the visiting and diagnostic fee for AO Smith systems?',
        answer: 'Our diagnostic inspection is ₹299. All necessary replacement components are quoted clearly before installation.',
      },
      {
        question: 'How often should AO Smith MIN-TECH mineralizer cartridges be replaced?',
        answer: 'We recommend replacing the MIN-TECH cartridge every 12 months to ensure essential calcium and magnesium minerals are added back to your drinking water.',
      },
      {
        question: 'Do you offer an Annual Maintenance Contract (AMC) for AO Smith purifiers?',
        answer: 'Yes, our comprehensive AO Smith AMC includes regular preventive servicing, filter changes, membrane checks, and zero-cost breakdown support.',
      },
      {
        question: 'What warranty is offered on AO Smith repair and spare parts?',
        answer: 'Every service includes a 30-day labor warranty, alongside standard manufacturer warranties on replacement pumps and electronic boards.',
      },
      {
        question: 'Why is my AO Smith RO running wastewater non-stop?',
        answer: 'This is commonly caused by a faulty auto-shutoff valve or high-pressure switch. Our technician can replace the defective switch on the spot.',
      },
    ],
    popularSearches: [
      'AO Smith water purifier service Bangalore',
      'AO Smith RO repair near me',
      'AO Smith MIN-TECH filter replacement',
      'AO Smith Z8 hot water repair',
      'AO Smith AMC cost Bangalore'
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787239134/file_00000000fd3c8211b4b336a783a3474e_wzjdjr.png',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789495220/IMG-20260915-WA0025_hphlbs.jpg',
  },

  'lg-service': {
    id: 'lg',
    name: 'LG',
    slug: '/lg-service',
    logoText: 'LG',
    logoUrl: 'https://res.cloudinary.com/dieq3fjuv/image/upload/q_auto,f_auto/v1786032689/images_5_t36ctz.png',
    tagline: 'Hygienic Sterilization & Pure Care — Specialized LG Water Purifier Maintenance',
    accentColor: 'from-rose-600 to-red-600',
    description: 'Maintain peak hygienic safety with expert servicing for LG PuriCare, Stainless Steel Tank RO, and Dual Protection UV systems. Our certified technicians across Bangalore deliver thorough digital sterilization, genuine filter renewals, and precision leak resolution.',
    metaTitle: 'LG RO Repair Bangalore | LG PuriCare Water Purifier Service & Filter Change',
    metaDescription: 'Professional LG water purifier repair in Bangalore. Expert stainless steel tank descaling, genuine filter replacement, and prompt doorstep technician service.',
    commonProblems: [
      'LG Stainless Steel tank digital UV sterilizing indicator warning alert',
      'Filter change alert icon glowing red on the LG PuriCare front panel',
      'Slow water filtration speed into the dual protection storage tank',
      'Water leaking from bottom drainage port or internal pressure valve',
      'Booster pump making loud humming or excessive vibrating noise',
      'No water dispensing from tap or capacitive touch sensor',
    ],
    brandFaqs: [
      {
        question: 'Do you provide specialized cleaning for LG stainless steel water tanks?',
        answer: 'Yes! During servicing, we thoroughly descale, sanitize, and verify the internal dual protection stainless steel reservoir using food-grade sanitization procedures.',
      },
      {
        question: 'How fast can an LG RO technician reach my location?',
        answer: 'Our mobile technicians are stationed across Bangalore, reaching your address within 60 to 90 minutes of booking.',
      },
      {
        question: 'Do you carry genuine LG PuriCare replacement filters and membranes?',
        answer: 'Yes, we supply authentic LG-compatible sediment filters, activated pre-carbon blocks, post-carbon mineral cartridges, and certified high-rejection RO membranes.',
      },
      {
        question: 'What is the diagnostic inspection fee for LG water purifiers?',
        answer: 'Our doorstep inspection fee is ₹299. If you proceed with our recommended service or part replacement, this fee is adjusted on your invoice.',
      },
      {
        question: 'Why is the red filter indicator glowing on my LG PuriCare?',
        answer: 'The red indicator indicates that the internal filter capacity has reached its threshold. Our technician will perform the replacement and reset the internal diagnostic counter.',
      },
      {
        question: 'Do you provide AMC plans for LG water purifiers in Bangalore?',
        answer: 'Yes, our LG AMC plan provides complete yearly coverage with scheduled maintenance visits, filter replacements, and unlimited free breakdown repairs.',
      },
      {
        question: 'What is the post-service warranty on LG repair jobs?',
        answer: 'We provide a 30-day labor warranty on all repairs and standard replacement warranties on all newly installed spare parts.',
      },
      {
        question: 'Why is my LG RO purifier making loud pump noise?',
        answer: 'Unusual pump noise usually results from air entrapment, low inlet water pressure, or worn pump bearings. We diagnose and rectify pump issues quickly on-site.',
      },
      {
        question: 'Can you calibrate the TDS level on an LG RO system?',
        answer: 'Yes, our technicians adjust and balance the mineral output to ensure your drinking water is pure, crisp, and in the healthy TDS range.',
      },
    ],
    popularSearches: [
      'LG water purifier service Bangalore',
      'LG PuriCare filter replacement',
      'LG RO repair near me',
      'LG stainless steel tank cleaning',
      'LG RO AMC cost Bangalore'
    ],
    showcaseImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1787239134/file_0000000041048211bfb990996067ea39_yiuihn.png',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789495220/IMG-20260915-WA0028_dfajkz.jpg',
  },

  'bluestar-service': {
    id: 'bluestar',
    name: 'Blue Star',
    slug: '/bluestar-service',
    logoText: 'BLUE STAR',
    logoUrl: 'https://resources.bluestarindia.com/Blue_Star_Built_on_Trust_Normal_1_fbb4a9bbbc.png',
    tagline: 'Alkaline Mineral Health & Hot/Cold Purity — Expert Blue Star RO Service',
    accentColor: 'from-blue-700 to-indigo-600',
    description: 'Ensure pure, safe, and mineral-balanced drinking water with certified repair and servicing for Blue Star Stella, Aristo, Majesto, Eleanor, Imperia, and Edge series in Bangalore. Our skilled technicians specialize in dual-temperature hot & cold RO mechanisms, alkaline mineral balance, sediment/carbon filter changes, and rapid 60–90 minute doorstep dispatch.',
    metaTitle: 'Blue Star RO Service Bangalore | Doorstep Water Purifier Repair & Filter Change',
    metaDescription: 'Expert doorstep Blue Star RO water purifier repair across Bangalore. Certified service for Stella, Aristo & Majesto models. Genuine filter replacement, AMC & 30-day warranty.',
    commonProblems: [
      'Front panel indicator blinking or electronic UV failure alert in Blue Star purifier',
      'Water leaking from internal solenoid valve, auto-cutoff switch, or pipe connectors',
      'Slow water flow rate or long storage tank filling time for Stella/Aristo models',
      'Bitter, metallic, or unusual taste in purified alkaline drinking water',
      'Hot or cold water dispensing mechanism not functioning or temperature error',
      'Machine not switching on due to burnt internal SMPS power adaptor or PCB glitch',
    ],
    brandFaqs: [
      {
        question: 'Are your technicians trained on Blue Star hot and cold RO water purifiers?',
        answer: 'Yes, our certified technicians have specialized training on Blue Star Stella hot & cold, Aristo, Majesto, and Eleanor RO systems, including electronic temperature controls and dual compressors.',
      },
      {
        question: 'Do you supply genuine Blue Star replacement filters and RO membranes?',
        answer: 'We supply 100% genuine and compatible high-grade sediment cartridges, pre/post carbon blocks, mineral taste enhancers, and high-rejection RO membranes suited for Bangalore water.',
      },
      {
        question: 'How fast can a Blue Star RO technician arrive at my home in Bangalore?',
        answer: 'Our mobile service technicians are stationed across all major Bangalore localities and reach your doorstep within 60 to 90 minutes of booking confirmation.',
      },
      {
        question: 'What is the diagnostic inspection fee for Blue Star RO servicing?',
        answer: 'Our doorstep inspection and diagnosis starts at ₹299. If you proceed with our recommended service or filter replacement, this fee is adjusted against the final invoice.',
      },
      {
        question: 'Why is the red UV or filter alert indicator glowing on my Blue Star purifier?',
        answer: 'A red alert typically indicates an exhausted filter cartridge capacity, UV chamber lamp failure, or pressure sensor trip. Our technician will test and replace the component on-site.',
      },
      {
        question: 'Do you offer Annual Maintenance Contracts (AMC) for Blue Star water purifiers?',
        answer: 'Yes! Our Blue Star AMC packages include scheduled preventive maintenance visits, free filter and membrane renewals, and priority zero-labor emergency breakdown support all year.',
      },
      {
        question: 'What post-service warranty do you provide on Blue Star repair jobs?',
        answer: 'We provide an ironclad 30-day labor warranty on all repair services, plus manufacturer warranty coverage on newly fitted booster pumps, SMPS adapters, and RO membranes.',
      },
      {
        question: 'Can you test and calibrate the alkaline mineral output on my Blue Star purifier?',
        answer: 'Yes, our technicians carry digital TDS meters and pH testing kits to verify and calibrate the mineralizer cartridge to ensure an optimal 60–120 PPM and healthy alkaline balance.',
      },
      {
        question: 'Why is my Blue Star RO vibrating or making a humming sound?',
        answer: 'Loud humming usually indicates low inlet water pressure, booster pump airlock, or worn pump head bearings. Our technician will diagnose and quiet the system during the visit.',
      },
    ],
    popularSearches: [
      'Blue Star RO service Bangalore',
      'Blue Star water purifier repair near me',
      'Blue Star filter replacement cost',
      'Blue Star Stella repair Bangalore',
      'Blue Star RO AMC plan Bangalore',
    ],
    showcaseImage: '/images/bluestar-showcase.jpg',
    heroImage: '/images/bluestar-hero.jpg',
  },

  'livpure-service': {
    id: 'livpure',
    name: 'Livpure',
    slug: '/livpure-service',
    logoText: 'LIVPURE',
    logoUrl: 'https://livpure.com/cdn/shop/files/Livpure_LOGO_Purple_2048x2048_8465dc4a-1c7e-472e-ab6c-b78e8af8446f.webp?v=1737784047&width=500',
    tagline: 'Smart Living & Mineral-Rich Hydration — Dedicated Livpure RO Repair & Care',
    accentColor: 'from-purple-700 to-indigo-600',
    description: 'Reliable doorstep repair, filter replacement, and preventive maintenance for Livpure Bolt, Glo, Zinger, Platino, Pep Pro, and Envy RO water purifiers across Bangalore. Our certified technicians specialize in Livpure taste enhancers, mineral cartridge calibration, electronic motherboard diagnostics, and 60–90 minute doorstep service.',
    metaTitle: 'Livpure RO Repair & Service Bangalore | Doorstep Filter Replacement',
    metaDescription: 'Certified doorstep Livpure RO water purifier repair in Bangalore. Same-day service for Bolt, Glo, Zinger & Platino. Genuine filters, taste enhancers & 30-day warranty.',
    commonProblems: [
      'Livpure smart LED indicator flashing or continuous warning buzzer sound',
      'Mineralizer / taste enhancer cartridge exhausted causing flat or bitter water taste',
      'Extremely slow filtration rate or storage tank taking hours to fill',
      'Water leaking from bottom push-fit connectors, elbow joints, or booster pump',
      'TDS controller drift resulting in unusually high dissolved solids in purified water',
      'SMPS power supply adapter tripped or purifier not turning on',
    ],
    brandFaqs: [
      {
        question: 'Are your technicians qualified to service all Livpure RO models?',
        answer: 'Yes, our technicians have extensive experience servicing Livpure Glo, Bolt, Zinger, Platino, Touch Plus, Pep Pro, and Smart RO purifiers throughout Bangalore.',
      },
      {
        question: 'Do you provide genuine Livpure taste enhancers and filter kits?',
        answer: 'We exclusively fit high-grade certified sediment filters, activated carbon blocks, silver-impregnated taste enhancers, and high-rejection RO membranes.',
      },
      {
        question: 'How quickly can a Livpure service technician visit my home in Bangalore?',
        answer: 'Our certified mobile technicians are stationed across all Bangalore neighborhoods, reaching your home within 60 to 90 minutes of your booking confirmation.',
      },
      {
        question: 'What is the visiting inspection fee for Livpure RO purifiers?',
        answer: 'Our diagnostic inspection fee is just ₹299. If you approve our recommended repair or filter replacement, this fee is completely adjusted against your invoice.',
      },
      {
        question: 'Why is my Livpure RO making a beeping sound or flashing red?',
        answer: 'A blinking warning light or buzzer indicates an exhausted sediment/carbon cartridge, low water pressure, or UV lamp issue. Our technician diagnoses and resets the unit on-site.',
      },
      {
        question: 'Do you offer Livpure Annual Maintenance Contracts (AMC) in Bangalore?',
        answer: 'Yes, our Livpure AMC plans cover 3 scheduled maintenance visits, complete filter and membrane renewals, and unlimited free breakdown visits all year long.',
      },
      {
        question: 'What warranty is offered on Livpure repairs and replacement parts?',
        answer: 'All Livpure repair services come with our standard 30-day doorstep labor warranty and up to 1-year manufacturer warranty on replacement spare parts.',
      },
      {
        question: 'Can you check and adjust the water TDS on a Livpure purifier?',
        answer: 'Yes, our technician conducts digital input/output TDS tests and calibrates the mineral cartridge to achieve pure, healthy drinking water within the 50–120 PPM sweet spot.',
      },
      {
        question: 'Why is purified water tasting bitter from my Livpure machine?',
        answer: 'Bitter taste usually means the activated post-carbon cartridge or RO membrane has reached the end of its lifespan. Replacing the cartridge restores natural sweet taste.',
      },
    ],
    popularSearches: [
      'Livpure RO service Bangalore',
      'Livpure water purifier repair near me',
      'Livpure Glo filter replacement cost',
      'Livpure Zinger repair Bangalore',
      'Livpure RO AMC cost Bangalore',
    ],
    showcaseImage: '/images/livpure-showcase.jpg',
    heroImage: '/images/livpure-hero.jpg',
  },

  'havells-service': {
    id: 'havells',
    name: 'Havells',
    slug: '/havells-service',
    logoText: 'HAVELLS',
    logoUrl: 'https://havells.com/media/logo/stores/1/Havells_Logo.svg',
    tagline: '100% RO & UV Purification with Revitalizer Purity — Specialized Havells RO Care',
    accentColor: 'from-red-600 to-orange-600',
    description: 'Complete doorstep repair, filter change, and sanitization for Havells Max, Pro, Digiplus, Gracia, Delite, and Fab alkaline RO water purifiers across Bangalore. Our experienced technicians carry genuine Havells-compatible sediment, pre-carbon, RO membranes, and Revitalizer cartridges to restore 100% safe, mineral-balanced drinking water within 60–90 minutes.',
    metaTitle: 'Havells RO Service Bangalore | Doorstep Water Purifier Repair & Care',
    metaDescription: 'Specialized doorstep Havells RO repair and servicing in Bangalore. Genuine filter replacement for Havells Max, Digiplus, Delite & Gracia. 60–90 min visit & 30-day warranty.',
    commonProblems: [
      'Havells Digiplus smart touch display error or filter change alert glowing',
      'Revitalizer / mineral cartridge depletion causing flat or stale water taste',
      'Water leaking from internal brass valve, auto-flush assembly, or tank seal',
      'Booster pump vibrating loudly or failing to create necessary RO membrane pressure',
      'Slow water flow rate or purified storage tank taking abnormally long to fill',
      'Power supply failure with SMPS burnt out or machine not switching on',
    ],
    brandFaqs: [
      {
        question: 'Do you service all models of Havells RO water purifiers?',
        answer: 'Yes, our certified technicians are trained on all Havells water purifiers including Havells Max, Digiplus, Gracia, Delite, Pro, UTC (Under-the-Counter), and Fab models.',
      },
      {
        question: 'Do you carry genuine Havells Revitalizer and membrane cartridges?',
        answer: 'Yes, we supply authentic Havells-compatible multi-stage filter cartridges, high-rejection RO membranes, mineralizers, and patented Revitalizer cartridges.',
      },
      {
        question: 'How fast can a Havells technician reach my house in Bangalore?',
        answer: 'Our mobile technicians are distributed across Bangalore localities and can reach your residence within 60 to 90 minutes of booking confirmation.',
      },
      {
        question: 'What is the visiting and diagnostic inspection fee for Havells RO?',
        answer: 'Our doorstep inspection and diagnosis starts at just ₹299. If you proceed with our recommended repair or filter replacement, this fee is deducted from the bill.',
      },
      {
        question: 'Why is the filter replacement icon blinking on my Havells Digiplus?',
        answer: 'The blinking filter alert signifies that the internal cartridge cycle has completed its rated gallon capacity. Our technician will replace the filter and reset the counter.',
      },
      {
        question: 'Do you offer Annual Maintenance Contracts (AMC) for Havells water purifiers?',
        answer: 'Yes! Our Havells AMC package includes 3 scheduled preventive visits, periodic filter and membrane renewals, and unlimited free breakdown calls throughout the year.',
      },
      {
        question: 'What warranty is provided on Havells water purifier repairs?',
        answer: 'We provide a comprehensive 30-day doorstep labor warranty on all repairs, as well as standard manufacturer warranty on replacement pumps, SMPS, and membranes.',
      },
      {
        question: 'Can you check and adjust the output mineral TDS level on Havells purifiers?',
        answer: 'Yes, our technician conducts accurate digital TDS tests before and after service and adjusts the mineral valve to deliver the ideal 60–120 PPM drinking water quality.',
      },
      {
        question: 'Why is water leaking continuously into the drain pipe from my Havells machine?',
        answer: 'Continuous drain flow without cutoff usually points to a faulty auto-shutoff valve (SV) or low water pressure. Our technician replaces the valve on-site in under 45 minutes.',
      },
    ],
    popularSearches: [
      'Havells RO service Bangalore',
      'Havells water purifier repair near me',
      'Havells Max filter replacement cost',
      'Havells Digiplus repair Bangalore',
      'Havells RO AMC cost Bangalore',
    ],
    showcaseImage: '/images/havells-showcase.jpg',
    heroImage: '/images/havells-hero.jpg',
  },
};

export const BANGALORE_LOCALITIES = [
  'Whitefield',
  'Koramangala',
  'HSR Layout',
  'Indiranagar',
  'Electronic City',
  'Marathahalli',
  'Bellandur',
  'Jayanagar',
  'JP Nagar',
  'Hebbal',
  'Yelahanka',
  'Rajajinagar',
  'Banashankari',
  'Malleshwaram',
  'Sarjapur Road',
  'BTM Layout',
  'Kammanahalli',
  'KR Puram',
  'Varthur',
  'Mahadevapura',
  'Bannerghatta Road',
  'HBR Layout',
  'RT Nagar',
  'Basavanagudi',
  'Kalyan Nagar',
  'Brookefield',
  'Thanisandra',
  'Domlur',
  'New BEL Road',
  'CV Raman Nagar',
];

export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: 'How quickly can a service technician visit my home in Bangalore?',
    answer: 'We provide prompt 60 to 90 minute doorstep service across all Bangalore areas including Whitefield, Koramangala, HSR Layout, Indiranagar, Electronic City, Marathahalli, Bellandur, Hebbal, and Jayanagar. You can book online or call 080958 55473 for immediate dispatch.',
  },
  {
    question: 'Which water purifier brands do you repair and service in Bangalore?',
    answer: 'We service all leading domestic and commercial water purifier brands including Kent, Aquaguard (Eureka Forbes), Pureit, AO Smith, LG, Livpure, Blue Star, Havells, V-Guard, Zero B, and custom multi-stage RO+UV+UF systems.',
  },
  {
    question: 'What is the visiting and diagnostic inspection fee?',
    answer: 'Our initial doorstep inspection and diagnostic check fee is just ₹299. If you proceed with the recommended repair or filter replacement through us, this fee is adjusted against your final invoice.',
  },
  {
    question: 'How often should RO water purifier filters and membranes be replaced?',
    answer: 'Sediment and Activated Carbon pre-filters should generally be replaced every 6 to 12 months depending on raw water turbidity and daily usage. High-TDS RO Membranes typically last 18 to 24 months. We conduct digital TDS testing before and after service to verify performance.',
  },
  {
    question: 'What is included in an Annual Maintenance Contract (AMC)?',
    answer: 'Our comprehensive AMC plan includes 3 scheduled preventive maintenance visits per year, complete replacement of sediment and carbon filters, RO membrane health testing, zero labor charges on breakdown visits, and priority technician dispatch across Bangalore.',
  },
  {
    question: 'Do you use 100% genuine spare parts and high-rejection membranes?',
    answer: 'Yes! We strictly install certified high-density sediment cartridges, coconut-shell activated carbon blocks, high-TDS rejection RO membranes, heavy-duty booster pumps, and food-grade silicone tubing for long-lasting reliability.',
  },
  {
    question: 'Do you offer a warranty on repairs and replaced parts?',
    answer: 'Yes, we provide a 30-day labor warranty on our workmanship and up to 1-year manufacturer warranty on major replaced components including booster pumps, SMPS power adapters, and RO membranes.',
  },
  {
    question: 'What are the main warning signs that my RO purifier needs immediate repair?',
    answer: 'Key warning signs include continuous water leakage from the bottom or pipes, low or stopped water output, foul smell or bitter/metallic taste, loud pump buzzing/vibrations, and persistent beeping or red indicator error lights.',
  },
];

export const HOMEPAGE_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Arvind Narayanan',
    locality: 'HSR Layout, Sector 2',
    rating: 5,
    brandServiced: 'Kent Grand Plus RO',
    comment: 'Our borewell water in HSR had a strong metallic smell, and our Kent RO output had dwindled to a thin trickle. The technician arrived in just 45 minutes with a digital TDS meter. He identified choked carbon filters and an exhausted membrane, replaced both with sealed genuine spares right before us, and water TDS dropped from 680 to 48 PPM. Outstanding doorstep service!',
    date: 'Yesterday',
  },
  {
    id: 't2',
    name: 'Kavitha Nambiar',
    locality: 'Indiranagar, 12th Main',
    rating: 5,
    brandServiced: 'Aquaguard Enhance RO+UV',
    comment: 'Water was leaking continuously from the elbow connector beneath our purifier, flooding the kitchen counter. Called their Bangalore helpline on Saturday morning, and an experienced technician arrived in under an hour. Replaced the fractured valve and secured all tubing cleanly. No hidden fees and a proper 30-day labor warranty card provided.',
    date: '3 days ago',
  },
  {
    id: 't3',
    name: 'Rohit Shenoy',
    locality: 'Whitefield, Near Hope Farm',
    rating: 5,
    brandServiced: 'Pureit Copper+ Eco RO',
    comment: 'The Germkill Kit (GKK) change alarm started beeping insistently. Instead of waiting days for service, 24x7 RO Support dispatched a technician the very same afternoon. He unboxed an original sealed Pureit cartridge, reset the micro-controller sensor, and sanitized the storage tank thoroughly. Courteous, prompt, and highly knowledgeable.',
    date: '1 week ago',
  },
  {
    id: 't4',
    name: 'Deepa Venkatesh',
    locality: 'Koramangala, 5th Block',
    rating: 5,
    brandServiced: 'AO Smith Z9 Green RO',
    comment: 'Our hot and ambient water dispenser was dispensing water at a painfully slow rate. Technician Ramesh diagnosed a calcified pre-filter and power board connection issue. Resolved it in 40 minutes, tested temperature sensors, and provided a transparent itemized digital bill. Delighted with the speed and professionalism.',
    date: '1 week ago',
  },
  {
    id: 't5',
    name: 'Sandeep Kulkarni',
    locality: 'Electronic City, Phase 1',
    rating: 5,
    brandServiced: 'LG PuriCare WW180',
    comment: 'We were skeptical about finding genuine replacement cartridges for our LG stainless steel model. The technician brought the exact matching certified carbon block and post-carbon filter. He even performed a full tank descaling and UV sanitization. Water tastes completely fresh and sweet again.',
    date: '2 weeks ago',
  },
  {
    id: 't6',
    name: 'Archana Nair',
    locality: 'Bellandur, Outer Ring Road',
    rating: 5,
    brandServiced: 'Livpure Glo Pro RO',
    comment: 'Our purifier was vibrating intensely and making an annoying rattling buzz whenever the pump kicked in. The technician quickly diagnosed a worn booster pump bearing and swapped it on the spot with a brand-new 100 GPD motor. Now it runs silently without any vibration. Brilliant turnaround time!',
    date: '2 weeks ago',
  },
  {
    id: 't7',
    name: 'Shalini Murthy',
    locality: 'JP Nagar, 6th Phase',
    rating: 5,
    brandServiced: 'Aquaguard Active Copper',
    comment: 'Booked their full annual preventive maintenance service. The technician inspected every filtration stage, replaced the spun sediment cartridge, cleaned the active copper infuser, and checked pressure switches. Rare to see someone take such genuine care of an appliance. 10/10 recommended!',
    date: '3 weeks ago',
  },
  {
    id: 't8',
    name: 'Karthik R.',
    locality: 'Sarjapur Road, Kasavanahalli',
    rating: 5,
    brandServiced: 'Kent Supreme Extra RO',
    comment: 'Water started tasting noticeably bitter overnight. Technician tested the water chemistry and noted that total hardness had spiked in our apartment borewell supply. Installed a high-rejection RO membrane and calibrated the mineral controller to an optimal 85 PPM. Immediate taste improvement and peace of mind.',
    date: '3 weeks ago',
  },
  {
    id: 't9',
    name: 'Manjunath Gowda',
    locality: 'Marathahalli, Spice Garden',
    rating: 5,
    brandServiced: 'Blue Star Aristo RO',
    comment: 'Purifier went completely dead on Sunday evening—no LED indicators, no pump response. Feared the main board was fried, but the technician tested the voltages and discovered an isolated SMPS power adapter failure. Replaced it in 20 minutes for a very reasonable fee. Honest diagnosis where others might have overcharged.',
    date: '1 month ago',
  },
  {
    id: 't10',
    name: 'Rajeshwari Bhat',
    locality: 'Malleshwaram, 8th Cross',
    rating: 5,
    brandServiced: 'Eureka Forbes Aquasure',
    comment: 'Living in an independent home with aged Kaveri water pipelines, our sediment pre-filter fills with red mud every few months. 24x7 RO Support set us up on a convenient schedule. Prompt service, zero follow-up hassle, and technicians always wear clean shoe covers inside the house.',
    date: '1 month ago',
  },
  {
    id: 't11',
    name: 'Vivek Hegde',
    locality: 'Hebbal, Kempapura',
    rating: 5,
    brandServiced: 'Havells Digiplus Alkaline',
    comment: 'Needed our wall-mounted purifier relocated to our new flat. They carefully uninstalled the unit, re-mounted it with precision leveling, fitted brand-new food-grade pipes, and checked for internal pressure leaks. Flawless reinstallation without a single drop of leakage.',
    date: '1 month ago',
  },
  {
    id: 't12',
    name: 'Sunita Prasad',
    locality: 'Yelahanka New Town',
    rating: 5,
    brandServiced: 'AO Smith X8 Dual RO',
    comment: 'Super fast response. Booked online at 10:15 AM, received a dispatch call within 10 minutes, and the technician was at our door in Yelahanka by 11:30 AM. Replaced our expired mineralizer cartridge and flushed the system thoroughly. Clean, efficient, and very professional.',
    date: '2 months ago',
  },
  {
    id: 't13',
    name: 'Abhinav Deshmukh',
    locality: 'Bannerghatta Road, Arekere',
    rating: 5,
    brandServiced: 'Kent Prime Plus RO',
    comment: 'The UV lamp failure alarm kept beeping persistently. The technician replaced the Philips UV tube and electronic ballast with certified parts. Showed me the manufacturer hologram before installation and handed over the warranty card. Really appreciate this level of transparency.',
    date: '2 months ago',
  },
  {
    id: 't14',
    name: 'Chetan Rao',
    locality: 'Rajajinagar, 3rd Block',
    rating: 5,
    brandServiced: 'Pureit Marvella Eco RO',
    comment: 'Superb customer service! Technician reached on time despite heavy Bangalore traffic. Checked the TDS, changed the sediment bowl, and tightened internal high-pressure joints. The flow rate doubled instantly. Will definitely keep their number saved for all future maintenance.',
    date: '2 months ago',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Experienced & Verified Technicians',
    description: 'Skilled professionals trained to handle all RO models.',
    iconName: 'UserCheck',
  },
  {
    title: 'Same-Day Doorstep Service',
    description: 'Fast response and quick service at your location.',
    iconName: 'Zap',
  },
  {
    title: 'Affordable & Transparent Pricing',
    description: 'No hidden charges, clear cost estimates.',
    iconName: 'Tag',
  },
  {
    title: 'Support for All RO Models',
    description: 'Old and new water purifiers and RO systems covered.',
    iconName: 'Wrench',
  },
  {
    title: 'Customer Satisfaction Guaranteed',
    description: 'Quality service you can trust.',
    iconName: 'Award',
  },
];
