'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';
import { BRAND_THEME_MAP, getBrandTheme } from '@/src/utils/brandTheme';

interface CallWidgetsProps {
  customPhone?: string;
  customWhatsApp?: string;
}

export const CallWidgets: React.FC<CallWidgetsProps> = ({
  customPhone,
  customWhatsApp,
}) => {
  const pathname = usePathname() || '/';
  const theme = getBrandTheme(pathname);
  const phone = customPhone || BUSINESS_DETAILS.phone;
  const formattedPhone = customPhone || BUSINESS_DETAILS.formattedPhone;
  const telLink = `tel:${phone}`;
  const whatsappNumber = customWhatsApp || BUSINESS_DETAILS.whatsappNumber || '918095855473';

  // Customize pre-filled greeting message based on current page
  const brandConfig = BRAND_THEME_MAP[pathname];
  const brandName = brandConfig?.name;
  const whatsappText = brandName
    ? `Hello 24x7 RO Support, I would like to book ${brandName} RO water purifier service/repair in Bangalore.`
    : `Hello 24x7 RO Support, I would like to book doorstep RO water purifier repair/service in Bangalore.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <>
      {/* Floating Action Buttons on Bottom Right */}
      <div 
        id="floating-action-widgets" 
        className="fixed bottom-16 sm:bottom-18 right-3 sm:right-5 z-40 select-none flex flex-col items-end gap-2.5 animate-fadeIn"
      >
        {/* Floating "Contact on WhatsApp" Widget - Positioned Just Above Call Icon */}
        <div id="floating-whatsapp-widget">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
            className="group flex items-center bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white pl-2 pr-3 sm:pr-3.5 py-1.5 rounded-full shadow-xl border-2 border-white transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-[0_8px_20px_rgba(37,211,102,0.4)]"
          >
            {/* Circular WhatsApp Icon Button with Green Online Pulse Indicator */}
            <div className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xs mr-2 shrink-0 group-hover:scale-110 transition-transform duration-300">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-[#25D366]"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
              </svg>
              {/* Live Online Ping Indicator */}
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white"></span>
              </span>
            </div>

            {/* Text Labels Stack */}
            <div className="flex flex-col items-start justify-center pr-1">
              <span className="text-[9px] font-black tracking-wider uppercase text-white/95 leading-tight">
                Contact On
              </span>
              <span className="font-black text-xs sm:text-[13px] text-white leading-tight tracking-tight">
                WhatsApp
              </span>
            </div>
          </a>
        </div>

        {/* Floating "Click To Call" Widget */}
        <div id="floating-call-widget">
          <a
            href={telLink}
            aria-label={`Click to call ${phone}`}
            style={{ backgroundColor: theme.primary }}
            className="group flex items-center text-white pl-2 pr-3 py-1.5 rounded-full shadow-xl border-2 border-white transition-all duration-300 transform hover:scale-105 active:scale-95 hover:brightness-95"
          >
            {/* Circular Phone Icon Button */}
            <div
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xs mr-2 shrink-0 group-hover:rotate-12 transition-transform duration-300"
              style={{ color: theme.primary }}
            >
              <Phone className="w-4 h-4" style={{ fill: theme.primary, color: theme.primary }} />
            </div>

            {/* Text Labels Stack */}
            <div className="flex flex-col items-start justify-center pr-1">
              <span className="text-[9px] font-black tracking-wider uppercase text-white/90 leading-tight">
                Click To Call
              </span>
              <span className="font-black font-mono text-xs sm:text-[13px] text-white leading-tight tracking-tight">
                {formattedPhone}
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Full-width Sticky Bottom Call Bar (Matches Reference Image Exactly) */}
      <div
        id="sticky-call-footer"
        style={{ backgroundColor: theme.primary }}
        className="fixed bottom-0 left-0 right-0 z-40 text-white py-3 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] transition-colors border-t border-white/20"
      >
        <a
          href={telLink}
          className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center text-white focus:outline-none hover:opacity-95"
        >
          <Phone className="w-5 h-5 fill-white text-white shrink-0 animate-bounce" />
          <span className="text-base sm:text-lg font-black tracking-wide">
            Call Now : <span className="font-mono tracking-wider ml-1 font-bold">{formattedPhone}</span>
          </span>
        </a>
      </div>
    </>
  );
};
