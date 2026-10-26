'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Mail, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_DETAILS, BANGALORE_LOCALITIES } from '@/src/data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a2540] text-blue-100 pt-14 pb-24 md:pb-16 border-t border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0284c7] via-[#0070e0] to-[#0052b3] p-0.5 shadow-md flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-[#0060c8] rounded-[10px] flex items-center justify-center border border-white/20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5 text-white"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="rgba(255,255,255,0.2)" />
                    <path d="M12 11l-3 3h6l-3-3z" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight leading-tight">
                  {BUSINESS_DETAILS.name}
                </span>
                <span className="text-[10px] font-bold text-sky-300 tracking-wider uppercase">
                  Doorstep RO Water Purifier Repair
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Bangalore&apos;s trusted multi-brand water purifier repair, filter replacement, installation, and AMC service center. Quick 60–90 minute doorstep technician visits.
            </p>

            <div className="flex items-center gap-2 text-xs text-sky-200 font-semibold pt-1">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>{BUSINESS_DETAILS.workingHours}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>30-Day Labor Warranty On All Repairs</span>
            </div>
          </div>

          {/* Column 2: Legal & Policy Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Legal &amp; Policies
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400">›</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400">›</span> Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400">›</span> Cancellation &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400">›</span> Disclaimer &amp; Brand Notice
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-sky-400">›</span> Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Bangalore Support &amp; Service
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-tight">
                  {BUSINESS_DETAILS.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a 
                  href={`tel:${BUSINESS_DETAILS.phone}`} 
                  className="text-white font-bold hover:underline"
                >
                  {BUSINESS_DETAILS.formattedPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a 
                  href={`mailto:${BUSINESS_DETAILS.email}`} 
                  className="hover:text-white break-all transition-colors"
                >
                  {BUSINESS_DETAILS.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Localities Tags */}
        <div className="pt-6 border-t border-white/10 mb-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Service Localities in Bangalore:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {BANGALORE_LOCALITIES.map((loc, idx) => (
              <span 
                key={idx}
                className="text-[11px] bg-white/5 hover:bg-white/10 text-slate-300 px-2 py-0.5 rounded transition-colors"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Disclaimer & MSME Registration */}
        <div className="pt-6 border-t border-white/10 text-center space-y-2.5">
          <p className="text-[11px] text-slate-400 max-w-4xl mx-auto leading-relaxed">
            {BUSINESS_DETAILS.disclaimer}
          </p>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-slate-300">
            <span>Registered MSME Enterprise:</span>
            <span className="text-amber-300 font-mono font-bold">{BUSINESS_DETAILS.udyamNumber}</span>
            <span>• Bangalore, Karnataka</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
