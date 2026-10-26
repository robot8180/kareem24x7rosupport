'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X, Shield, Phone, ChevronRight } from 'lucide-react';
import { BRAND_PAGES_DATA, BUSINESS_DETAILS } from '../data/content';

export function BrandsWeService() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // The real brand pages and their authentic logos from BRAND_PAGES_DATA
  const featuredBrands = [
    {
      key: 'aquaguard-service',
      data: BRAND_PAGES_DATA['aquaguard-service'],
    },
    {
      key: 'kent-service',
      data: BRAND_PAGES_DATA['kent-service'],
    },
    {
      key: 'pureit-service',
      data: BRAND_PAGES_DATA['pureit-service'],
    },
    {
      key: 'aosmith-service',
      data: BRAND_PAGES_DATA['aosmith-service'],
    },
    {
      key: 'lg-service',
      data: BRAND_PAGES_DATA['lg-service'],
    },
    {
      key: 'bluestar-service',
      data: BRAND_PAGES_DATA['bluestar-service'],
    },
    {
      key: 'livpure-service',
      data: BRAND_PAGES_DATA['livpure-service'],
    },
    {
      key: 'havells-service',
      data: BRAND_PAGES_DATA['havells-service'],
    },
  ];

  // Duplicated for a seamless infinite auto-sliding loop
  const slidingTrack = [...featuredBrands, ...featuredBrands];

  const allServicedBrands = [
    {
      name: 'Kent RO Systems',
      slug: '/kent-service',
      logoUrl: BRAND_PAGES_DATA['kent-service']?.logoUrl,
      desc: 'Grand Plus, Prime, Supreme, Pearl & Under-Sink',
    },
    {
      name: 'Eureka Forbes Aquaguard',
      slug: '/aquaguard-service',
      logoUrl: BRAND_PAGES_DATA['aquaguard-service']?.logoUrl,
      desc: 'Active Copper, Enhance, Geneus, Ritz & Blaze',
    },
    {
      name: 'Pureit (Hindustan Unilever)',
      slug: '/pureit-service',
      logoUrl: BRAND_PAGES_DATA['pureit-service']?.logoUrl,
      desc: 'Marvella, Ultima, Copper RO+UV & GKK Kits',
    },
    {
      name: 'AO Smith Water Purifiers',
      slug: '/aosmith-service',
      logoUrl: BRAND_PAGES_DATA['aosmith-service']?.logoUrl,
      desc: 'Z8, Z9 Hot RO, X8, ProPlanet & MIN-TECH SCM',
    },
    {
      name: 'LG PuriCare',
      slug: '/lg-service',
      logoUrl: BRAND_PAGES_DATA['lg-service']?.logoUrl,
      desc: 'Stainless Steel Tank RO & Digital Sterilization',
    },
    {
      name: 'Blue Star Water Purifiers',
      slug: '/bluestar-service',
      logoUrl: BRAND_PAGES_DATA['bluestar-service']?.logoUrl,
      desc: 'Stella Hot & Cold, Aristo, Majesto & Eleanor',
    },
    {
      name: 'Livpure Smart RO',
      slug: '/livpure-service',
      logoUrl: BRAND_PAGES_DATA['livpure-service']?.logoUrl,
      desc: 'Bolt, Glo, Zinger, Platino & Mineralizers',
    },
    {
      name: 'Havells Water Purifiers',
      slug: '/havells-service',
      logoUrl: BRAND_PAGES_DATA['havells-service']?.logoUrl,
      desc: 'Max, Digiplus, Gracia, Delite & Revitalizer',
    },
  ];

  return (
    <section className="py-6 sm:py-8 bg-[#f5f9fc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row: "Brands We Service" (left) and "View All ->" (right) */}
        <div className="flex items-center justify-between mb-3.5 sm:mb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#0f172a] tracking-tight">
            Brands We Service
          </h2>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#0070e0] hover:text-[#005ec4] transition-colors group cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Auto-Sliding Brand Cards Track */}
        <div
          className="relative overflow-hidden -mx-4 sm:mx-0 py-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Subtle Left & Right Edge Fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#f5f9fc] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#f5f9fc] to-transparent z-10" />

          <div
            className="animate-brand-slide flex items-center gap-3 sm:gap-4 px-4 sm:px-0"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {slidingTrack.map(({ key, data }, index) => {
              if (!data) return null;

              return (
                <Link
                  key={`${key}-${index}`}
                  href={data.slug}
                  title={`Book doorstep ${data.name} RO repair & service in Bangalore`}
                  className="group shrink-0 w-[148px] sm:w-[185px] md:w-[205px] bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all p-2.5 sm:p-3.5 h-16 sm:h-18 flex items-center justify-center cursor-pointer"
                >
                  {data.logoUrl ? (
                    <img
                      src={data.logoUrl}
                      alt={`${data.name} Logo`}
                      className="max-h-9 sm:max-h-11 w-auto max-w-full object-contain transition-transform group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  ) : (
                    <span className="font-extrabold text-sm sm:text-base text-slate-800">
                      {data.name}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

      </div>

      {/* "View All" Modal Drawer */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-5 sm:p-7">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  All Water Purifier Brands Serviced in Bangalore
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Doorstep technicians available across all Bangalore zones for these major purifier brands.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {allServicedBrands.map((b, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-200/90 bg-slate-50/60 hover:bg-sky-50/40 hover:border-sky-300 transition-all flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {b.logoUrl && (
                      <div className="w-12 h-10 bg-white rounded-lg border border-slate-200/80 p-1 flex items-center justify-center shrink-0">
                        <img
                          src={b.logoUrl}
                          alt={b.name}
                          className="max-h-8 max-w-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm text-slate-900 truncate">{b.name}</h4>
                      <p className="text-xs text-slate-500 truncate">{b.desc}</p>
                    </div>
                  </div>

                  <Link
                    href={b.slug}
                    onClick={() => setModalOpen(false)}
                    className="shrink-0 text-xs font-bold text-[#0070e0] hover:text-[#005ec4] inline-flex items-center gap-1 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs hover:shadow-xs"
                  >
                    View
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 -mx-5 -mb-5 sm:-mx-7 sm:-mb-7 p-4 sm:p-5 rounded-b-2xl">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Original spare parts &amp; 30-day warranty across all brands.</span>
              </div>
              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#0070e0] text-white font-bold text-xs shadow-sm hover:bg-[#005ec4] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>Call {BUSINESS_DETAILS.formattedPhone}</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
