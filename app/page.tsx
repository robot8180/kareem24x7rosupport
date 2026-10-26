import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Calendar,
  Zap,
  ShieldCheck,
  Users,
  Settings,
  Droplets,
  Layers,
  FileText,
  Star,
  Clock,
  Award,
  Wrench,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Sparkles,
} from 'lucide-react';
import {
  BUSINESS_DETAILS,
  HOMEPAGE_FAQS,
  HOMEPAGE_TESTIMONIALS,
  BANGALORE_LOCALITIES,
  SERVICES_LIST,
} from '@/src/data/content';
import { LeadForm } from '@/src/components/LeadForm';
import { FAQAccordion } from '@/src/components/FAQAccordion';
import { ReviewCarousel } from '@/src/components/ReviewCarousel';
import { BrandsWeService } from '@/src/components/BrandsWeService';

export const metadata: Metadata = {
  title: `${BUSINESS_DETAILS.name} | Doorstep RO Water Purifier Repair & Service Bangalore | Call ${BUSINESS_DETAILS.formattedPhone}`,
  description:
    'Fast 60–90 min doorstep RO water purifier repair, genuine filter replacement, AMC & installation service in Bangalore. Expert technicians for Kent, Aquaguard, Pureit, AO Smith & LG.',
  alternates: {
    canonical: 'https://www.roservice24x7.in',
  },
  openGraph: {
    title: `${BUSINESS_DETAILS.name} | Doorstep RO Water Purifier Repair & Service Bangalore`,
    description: 'Fast 60–90 min doorstep RO water purifier repair, filter replacement & AMC in Bangalore.',
    url: 'https://www.roservice24x7.in',
    type: 'website',
  },
};

export default function HomePage() {
  const quickServices = [
    {
      id: 'repair',
      title: 'RO Repair',
      subtitle: 'Quick diagnosis & repair',
      icon: Settings,
      link: '#lead-form',
    },
    {
      id: 'service',
      title: 'RO Service',
      subtitle: 'Complete cleaning & care',
      icon: Droplets,
      link: '#lead-form',
    },
    {
      id: 'filter',
      title: 'Filter Replacement',
      subtitle: 'Genuine filters',
      icon: Layers,
      link: '#lead-form',
    },
    {
      id: 'amc',
      title: 'AMC Plans',
      subtitle: 'Hassle-free yearly care',
      icon: FileText,
      link: '#lead-form',
    },
  ];

  const commonProblems = [
    'Low water flow or slow filtration rate',
    'Bad smell or unpleasant bitter taste in purified water',
    'Continuous water leakage from internal pipes or connectors',
    'Purifier beeping continuously or red filter alert blinking',
    'Machine not turning on or power adapter tripping',
    'Waste water running non-stop without auto-cutoff',
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_DETAILS.name,
    legalName: BUSINESS_DETAILS.fullName,
    description: 'Doorstep RO Water Purifier Repair, Maintenance & Filter Replacement in Bangalore',
    url: 'https://www.roservice24x7.in',
    telephone: `+91${BUSINESS_DETAILS.phone.replace(/^0/, '')}`,
    email: BUSINESS_DETAILS.email,
    priceRange: '₹299 - ₹4500',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.9716',
      longitude: '77.5946',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '21:00',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        
        {/* ========================================================
            HERO TEXT (ABOVE THE IMAGE - ALIGNED TO LEFT)
            ======================================================== */}
        <section className="w-full bg-white pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Doorstep RO Water Purifier Repair &amp; Service in Bangalore
            </h1>
          </div>
        </section>

        {/* ========================================================
            HERO IMAGE (CLEAN - NO OVERLAY / NO FILTER, ROUNDED CORNERS)
            ======================================================== */}
        <section className="w-full bg-white pb-6 sm:pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full relative h-[240px] sm:h-[340px] md:h-[400px] lg:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-slate-200/80">
              <img
                src="https://res.cloudinary.com/dieq3fjuv/image/upload/v1785990425/IMG_20260806_095543_woel3l.jpg"
                alt="Doorstep RO Water Purifier Repair & Service in Bangalore"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* ========================================================
            RIGHT AFTER IT: LEAD FORM SECTION
            ======================================================== */}
        <section className="py-8 sm:py-12 bg-slate-50 border-b border-slate-200/80">
          <div id="lead-form" className="max-w-xl mx-auto px-4 sm:px-6 w-full">
            <LeadForm sourcePage="Homepage Hero Form" />
          </div>
        </section>


        {/* ========================================================
            BRANDS WE SERVICE SECTION (MATCHING REFERENCE DESIGN)
            ======================================================== */}
        <BrandsWeService />


        {/* ========================================================
            4 QUICK SERVICE CATEGORY CARDS (EXACT FROM REFERENCE)
            ======================================================== */}
        <section className="py-6 sm:py-8 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {quickServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <a
                    key={service.id}
                    href={service.link}
                    className="group bg-white hover:bg-sky-50/40 rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all flex flex-col items-start"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#e0f0fe] text-[#0070e0] group-hover:bg-[#0070e0] group-hover:text-white flex items-center justify-center mb-3 transition-colors shadow-2xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-[#0070e0] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-medium leading-snug">
                      {service.subtitle}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>


        {/* ========================================================
            FULL SERVICES GRID
            ======================================================== */}
        <section id="services-section" className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Comprehensive Water Purifier Services
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                From emergency breakdown fixes to scheduled membrane changes, our certified technicians do it all.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES_LIST.map((service) => (
                <div
                  key={service.id}
                  className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-sky-300 hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-[#0070e0] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#lead-form"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0070e0] hover:text-[#005ec4] group/link"
                  >
                    <span>Book {service.title}</span>
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================
            COMMON PROBLEMS WE FIX SECTION
            ======================================================== */}
        <section className="py-14 sm:py-18 bg-[#f5f9fc] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  Common RO Problems We Solve Every Day
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Experiencing any of these issues? Don&apos;t compromise on clean drinking water. Our doorstep technicians carry diagnostic gauges and genuine parts to resolve issues on the spot.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${BUSINESS_DETAILS.phone}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0070e0] hover:bg-[#005ec4] text-white font-bold text-sm shadow-md transition-all active:scale-95"
                  >
                    <Phone className="w-4 h-4 fill-white" />
                    <span>Call for Immediate Diagnosis</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {commonProblems.map((prob, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      !
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {prob}
                      </p>
                      <span className="text-[11px] text-emerald-600 font-semibold inline-flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3 h-3" /> Fixed in 45–60 mins
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================
            REVIEWS & TESTIMONIALS
            ======================================================== */}
        <section className="py-16 sm:py-20 bg-[#f8fbfe] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Trusted by 25,000+ Bangalore Families
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Real feedback from homeowners across Whitefield, Indiranagar, HSR Layout, Koramangala, and beyond.
              </p>
            </div>

            <ReviewCarousel testimonials={HOMEPAGE_TESTIMONIALS} />
          </div>
        </section>


        {/* ========================================================
            FAQ ACCORDION SECTION
            ======================================================== */}
        <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Everything you need to know about our doorstep RO water purifier repair, filter renewal, and warranties.
              </p>
            </div>

            <FAQAccordion faqs={HOMEPAGE_FAQS} title="" subtitle="" />
          </div>
        </section>


        {/* ========================================================
            MSME CERTIFICATE & TRUST CARD
            ======================================================== */}
        <section className="py-12 bg-[#0c54a0] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Government of India Certified Enterprise
                </span>
                <h3 className="text-2xl font-black text-white">
                  Ministry of MSME Registered Water Purifier Center
                </h3>
                <p className="text-sm text-blue-100 max-w-2xl">
                  {BUSINESS_DETAILS.name} is officially registered under the Udyam portal with registration number:
                  <span className="font-mono font-bold text-amber-300 ml-1.5">{BUSINESS_DETAILS.udyamNumber}</span>
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  className="px-6 py-3 rounded-full bg-white text-[#0070e0] hover:bg-blue-50 font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  Call Now: {BUSINESS_DETAILS.formattedPhone}
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
