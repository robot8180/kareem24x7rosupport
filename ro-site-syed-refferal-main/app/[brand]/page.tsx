import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
  ArrowRight,
} from 'lucide-react';
import { BRAND_PAGES_DATA, BUSINESS_DETAILS, BANGALORE_LOCALITIES, HOMEPAGE_TESTIMONIALS } from '@/src/data/content';
import { LeadForm } from '@/src/components/LeadForm';
import { FAQAccordion } from '@/src/components/FAQAccordion';
import { ReviewCarousel } from '@/src/components/ReviewCarousel';
import { getBrandTheme } from '@/src/utils/brandTheme';
import { PageRoute } from '@/src/types';

interface PageProps {
  params: Promise<{ brand: string }>;
}

export async function generateStaticParams() {
  return Object.keys(BRAND_PAGES_DATA).map((brandKey) => ({
    brand: brandKey,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { brand: brandKey } = await params;
  const brand = BRAND_PAGES_DATA[brandKey];
  if (!brand) return {};

  const subdomain = brand.id;
  const canonicalUrl = subdomain
    ? `https://${subdomain}.roservice24x7.in`
    : `https://www.roservice24x7.in/${brandKey}`;

  return {
    title: `${brand.name} RO Service Bangalore | ${BUSINESS_DETAILS.name} Doorstep Repair`,
    description: brand.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${brand.name} RO Service Bangalore | ${BUSINESS_DETAILS.name}`,
      description: brand.metaDescription,
      url: canonicalUrl,
      type: 'website',
      images: brand.heroImage ? [{ url: brand.heroImage }] : [],
    },
  };
}

export default async function BrandPage({ params }: PageProps) {
  const { brand: brandKey } = await params;
  const brand = BRAND_PAGES_DATA[brandKey];

  if (!brand) {
    notFound();
  }

  const theme = getBrandTheme(brand.slug);

  const quickServices = [
    {
      id: 'repair',
      title: `${brand.name} Repair`,
      subtitle: 'Quick diagnosis & repair',
      icon: Settings,
      link: '#lead-form',
    },
    {
      id: 'service',
      title: `${brand.name} Service`,
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

  const brandServices = [
    {
      title: `${brand.name} RO Water Purifier Repair & Service`,
      description: 'Complete troubleshooting and repair for power, leakage, and thermostat issues.',
    },
    {
      title: `${brand.name} Filter & Membrane Change`,
      description: `Original sediment, carbon, and RO membrane replacement for all ${brand.name} purifiers.`,
    },
    {
      title: `${brand.name} Installation & Relocation`,
      description: `Professional wall-mount setup, uninstallation, and plumbing connection across Bangalore.`,
    },
    {
      title: `${brand.name} Annual Maintenance Contract (AMC)`,
      description: `Comprehensive AMC coverage including periodic checkups, cartridge renewals, and zero labor fees.`,
    },
    {
      title: 'Water TDS & Quality Testing',
      description: `Complete on-site testing of input and output TDS levels to verify pure, balanced water.`,
    },
    {
      title: 'Tank Sterilization & Sanitization',
      description: `Food-grade hygienic cleaning and descaling of internal storage tanks.`,
    },
  ];

  const whyChoosePoints = [
    {
      title: `Specialized ${brand.name} Technicians`,
      description: `Our team is thoroughly trained on all old and new ${brand.name} RO models and circuits.`,
    },
    {
      title: '60–90 Minute Doorstep Response',
      description: 'Rapid technician arrival at your home or apartment anywhere across Bangalore.',
    },
    {
      title: '100% Genuine Compatible Spares',
      description: `Factory-sealed membranes, booster pumps, solenoid valves, and filter candles.`,
    },
    {
      title: 'Transparent Fixed Pricing',
      description: 'Clear inspection rates with no hidden fees or surprise charges.',
    },
    {
      title: '30-Day Labor Warranty',
      description: 'Complete peace of mind with our dedicated after-service support guarantee.',
    },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${brand.name} Water Purifier Repair & Service Bangalore`,
      serviceType: 'Water Purifier Repair, Maintenance & Filter Replacement',
      provider: {
        '@type': 'LocalBusiness',
        name: BUSINESS_DETAILS.name,
        telephone: `+91${BUSINESS_DETAILS.phone.replace(/^0/, '')}`,
      },
      areaServed: {
        '@type': 'City',
        name: 'Bangalore',
      },
      description: brand.metaDescription,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        
        {/* ========================================================
            BRAND HERO TEXT (ABOVE THE IMAGE - ALIGNED TO LEFT)
            ======================================================== */}
        <section className="w-full bg-white pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Doorstep <span style={{ color: theme.primary }}>{brand.name}</span> RO Water Purifier Repair &amp; Service in Bangalore
            </h1>
          </div>
        </section>

        {/* ========================================================
            BRAND HERO IMAGE (CLEAN - NO OVERLAY / NO FILTER, ROUNDED CORNERS)
            ======================================================== */}
        <section className="w-full bg-white pb-6 sm:pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full relative h-[240px] sm:h-[340px] md:h-[400px] lg:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-slate-200/80">
              <img
                src={brand.heroImage || 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1785990425/IMG_20260806_095543_woel3l.jpg'}
                alt={`Doorstep ${brand.name} RO Water Purifier Repair & Service in Bangalore`}
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
            <LeadForm
              preselectedBrand={brand.name}
              hideBrandSelector={true}
              sourcePage={`${brand.name} Hero Form`}
              buttonColor={theme.primary}
            />
          </div>
        </section>


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
                    className="group bg-white hover:bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col items-start"
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center mb-3 transition-colors shadow-2xs"
                      style={{ backgroundColor: theme.lightBg, color: theme.primary }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base transition-colors leading-tight">
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
            BRAND OVERVIEW & HIGHLIGHTS
            ======================================================== */}
        <section className="py-12 sm:py-16 bg-[#f8fbfe]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: About Brand Service Card */}
              <div className="lg:col-span-6 space-y-5">
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        About Our {brand.name} Service
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                        {brand.tagline}
                      </p>
                    </div>
                    {brand.logoUrl && (
                      <div className="bg-slate-50 p-2 rounded-xl border border-slate-200">
                        <img
                          src={brand.logoUrl}
                          alt={`${brand.name} Logo`}
                          className="h-7 w-auto object-contain max-w-[100px]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {brand.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Doorstep Arrival:</span>
                    <span className="font-bold" style={{ color: theme.primary }}>60–90 Minutes in Bangalore</span>
                  </div>
                </div>

                {/* Trust Badges Strip */}
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 flex items-center gap-2.5">
                    <Award className="w-5 h-5 text-amber-500 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Govt MSME Certified</p>
                      <p className="text-[11px] text-slate-500 font-mono">{BUSINESS_DETAILS.udyamNumber}</p>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 flex items-center gap-2.5">
                    <Clock className="w-5 h-5 shrink-0" style={{ color: theme.primary }} />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Doorstep Arrival</p>
                      <p className="text-[11px] text-slate-500">60–90 Mins Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Brand Visual Card & Banner */}
              <div className="lg:col-span-6 space-y-5">
                <div
                  className="relative rounded-3xl overflow-hidden p-1 shadow-xl"
                  style={{ background: `linear-gradient(to bottom right, ${theme.primary}, ${theme.hover}, #1e293b)` }}
                >
                  <div className="relative rounded-[22px] overflow-hidden bg-slate-900 min-h-[260px] sm:min-h-[320px] flex flex-col justify-end p-6">
                    <img
                      src={brand.showcaseImage || brand.heroImage}
                      alt={`${brand.name} Water Purifier Service Bangalore`}
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient scrim for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Banner Highlight Card: Better Water for a Healthier Tomorrow */}
                <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 shadow-2xs">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-12 h-12 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm"
                      style={{ backgroundColor: theme.primary }}
                    >
                      <Droplets className="w-6 h-6 fill-white" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                        Better Water for a Healthier Tomorrow
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-snug">
                        Book your {brand.name} RO service today and ensure safe drinking water for your family.
                      </p>
                    </div>
                  </div>

                  <a
                    href="#lead-form"
                    style={{ color: theme.primary }}
                    className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs transition-colors group cursor-pointer"
                    aria-label="Book RO service"
                  >
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================
            COMMON PROBLEMS FOR THIS BRAND
            ======================================================== */}
        <section className="py-14 sm:py-18 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  Common {brand.name} Issues We Resolve
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Notice unusual beeping, low water flow, or red alert lights on your {brand.name}? Our mobile service vans carry exact replacement filters and electronic parts.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${BUSINESS_DETAILS.phone}`}
                    style={{ backgroundColor: theme.primary }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white font-bold text-sm shadow-md transition-all active:scale-95 hover:brightness-95 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 fill-white" />
                    <span>Call Technician Now</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {brand.commonProblems.map((problem, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/70 p-4 rounded-xl border border-slate-200/80 shadow-2xs flex items-start gap-3 hover:bg-white transition-all"
                  >
                    <div className="w-7 h-7 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      !
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {problem}
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
            SERVICES OFFERED FOR THIS BRAND
            ======================================================== */}
        <section className="py-16 sm:py-20 bg-[#f8fbfe] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Complete {brand.name} Services in Bangalore
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                All maintenance, repair, and AMC solutions carried out with 100% genuine compatible spares.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: theme.lightBg, color: theme.primary }}
                    >
                      <Wrench className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <a
                    href="#lead-form"
                    style={{ color: theme.primary }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline"
                  >
                    <span>Book Service</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================
            WHY CHOOSE US FOR THIS BRAND
            ======================================================== */}
        <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Why Choose {BUSINESS_DETAILS.name} for {brand.name}?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Over a decade of dedicated water purification experience serving Bangalore homes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoosePoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80 hover:bg-white transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 font-black text-sm">
                    ✓
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================
            CUSTOMER REVIEWS & TESTIMONIALS SECTION
            ======================================================== */}
        <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Verified Customer Feedback in Bangalore
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Real reviews from Bangalore residents who booked doorstep RO repairs, membrane changes, and filter service.
              </p>
            </div>

            <ReviewCarousel
              testimonials={[
                ...HOMEPAGE_TESTIMONIALS.filter((t) => t.brandServiced.toLowerCase().includes(brand.name.toLowerCase())),
                ...HOMEPAGE_TESTIMONIALS.filter((t) => !t.brandServiced.toLowerCase().includes(brand.name.toLowerCase())),
              ]}
            />
          </div>
        </section>


        {/* ========================================================
            BRAND FAQ ACCORDION SECTION
            ======================================================== */}
        <section className="py-16 sm:py-20 bg-[#f8fbfe] border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {brand.name} Service FAQs
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Frequently asked questions regarding {brand.name} repair visits, warranties, and filter replacements.
              </p>
            </div>

            <FAQAccordion faqs={brand.brandFaqs} title="" subtitle="" />
          </div>
        </section>


        {/* ========================================================
            MSME CERTIFICATE & TRUST CARD
            ======================================================== */}
        <section
          className="py-12 text-white"
          style={{ backgroundColor: theme.bannerBg }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Government of India Certified Enterprise
                </span>
                <h3 className="text-2xl font-black text-white">
                  Ministry of MSME Registered Water Purifier Center
                </h3>
                <p className="text-sm text-white/90 max-w-2xl">
                  {BUSINESS_DETAILS.name} is officially registered under the Udyam portal with registration number:
                  <span className="font-mono font-bold text-amber-300 ml-1.5">{BUSINESS_DETAILS.udyamNumber}</span>
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  style={{ color: theme.primary }}
                  className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 font-bold text-sm shadow-md transition-all active:scale-95"
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
