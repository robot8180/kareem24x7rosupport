'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Phone, Menu, X, ChevronDown, CheckCircle2, ShieldCheck, IndianRupee, Clock } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';
import { PageRoute } from '@/src/types';
import { getBrandTheme } from '@/src/utils/brandTheme';

interface HeaderProps {
  currentRoute?: PageRoute;
  lastBrandRoute?: PageRoute | null;
  onNavigate?: (route: PageRoute) => void;
  onOpenBookModal?: () => void;
}

const ANNOUNCEMENT_MESSAGES = [
  { text: '30-Day Labor Warranty on All RO Services', icon: CheckCircle2 },
  { text: 'Fastest 60–90 Min Doorstep Visit in Bangalore', icon: Clock },
  { text: 'Transparent Fixed Pricing — No Hidden Charges', icon: IndianRupee },
  { text: '100% Genuine Compatible Filter Cartridges & Spares', icon: ShieldCheck },
];

export const Header: React.FC<HeaderProps> = ({
  currentRoute: propCurrentRoute,
  onNavigate,
  onOpenBookModal,
}) => {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const currentRoute = (propCurrentRoute || pathname) as PageRoute;
  const brandTheme = getBrandTheme(pathname);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [policiesDropdownOpen, setPoliciesDropdownOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  // Update announcement bar message every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % ANNOUNCEMENT_MESSAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleNavClick = (route: PageRoute) => {
    if (onNavigate) {
      onNavigate(route);
    } else {
      router.push(route);
    }
    setMobileMenuOpen(false);
    setPoliciesDropdownOpen(false);
  };

  const handleScrollToForm = () => {
    if (currentRoute === '/') {
      const el = document.getElementById('lead-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (onOpenBookModal) {
        onOpenBookModal();
      }
    } else {
      if (onNavigate) {
        onNavigate('/');
      } else {
        router.push('/');
      }
      setTimeout(() => {
        const el = document.getElementById('lead-form');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
    }
    setMobileMenuOpen(false);
  };

  const CurrentIcon = ANNOUNCEMENT_MESSAGES[announcementIndex].icon;

  return (
    <header id="main-header" className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Notice Bar: Dynamically colored according to brand, shows only one rotating message */}
      <div
        style={{ backgroundColor: brandTheme.primary }}
        className="text-white text-xs sm:text-[13px] font-semibold py-2 px-4 shadow-2xs overflow-hidden transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div
            key={announcementIndex}
            className="inline-flex items-center justify-center gap-2 text-center tracking-wide animate-fadeIn"
          >
            <CurrentIcon className="w-4 h-4 text-white/80 shrink-0" />
            <span>{ANNOUNCEMENT_MESSAGES[announcementIndex].text}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-slate-100 shadow-2xs bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            
            {/* Logo & Brand Name (Matching Reference Design) */}
            <Link
              href="/"
              onClick={() => {
                setMobileMenuOpen(false);
                setPoliciesDropdownOpen(false);
              }}
              className="flex items-center gap-3 text-left focus:outline-none group py-1"
            >
              {/* Badge Icon */}
              <div
                style={{ backgroundColor: brandTheme.primary }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl p-0.5 shadow-md flex items-center justify-center shrink-0 transition-colors duration-300"
              >
                <div className="w-full h-full rounded-[10px] flex items-center justify-center border border-white/25">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 text-white drop-shadow-xs"
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

              {/* Title & Subtitle */}
              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors leading-tight">
                  {BUSINESS_DETAILS.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-wider uppercase">
                  DOORSTEP RO WATER PURIFIER REPAIR
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Brands We Service removed completely) */}
            <nav className="hidden lg:flex items-center gap-7">
              <Link
                href="/"
                className={`text-sm font-semibold transition-colors ${
                  currentRoute === '/' ? 'text-[#0070e0] font-bold' : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                Home
              </Link>

              {/* Policies Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setPoliciesDropdownOpen(!policiesDropdownOpen)}
                  onMouseEnter={() => setPoliciesDropdownOpen(true)}
                  className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors py-2 cursor-pointer"
                >
                  Policies &amp; Trust
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${policiesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {policiesDropdownOpen && (
                  <div
                    onMouseLeave={() => setPoliciesDropdownOpen(false)}
                    className="absolute top-full right-0 w-56 bg-white rounded-xl shadow-xl border border-slate-200/90 py-2 z-50 animate-fadeIn"
                  >
                    <div className="px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Company Policies
                    </div>
                    <Link
                      href="/privacy-policy"
                      onClick={() => setPoliciesDropdownOpen(false)}
                      className="w-full text-left px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950 block font-medium"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/terms-of-service"
                      onClick={() => setPoliciesDropdownOpen(false)}
                      className="w-full text-left px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950 block font-medium"
                    >
                      Terms and Conditions
                    </Link>
                    <Link
                      href="/refund-policy"
                      onClick={() => setPoliciesDropdownOpen(false)}
                      className="w-full text-left px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950 block font-medium"
                    >
                      Cancellation &amp; Refund
                    </Link>
                    <Link
                      href="/disclaimer"
                      onClick={() => setPoliciesDropdownOpen(false)}
                      className="w-full text-left px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950 block font-medium"
                    >
                      Disclaimer &amp; Brand Notice
                    </Link>
                    <Link
                      href="/cookie-policy"
                      onClick={() => setPoliciesDropdownOpen(false)}
                      className="w-full text-left px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-950 block font-medium"
                    >
                      Cookie Policy
                    </Link>
                  </div>
                )}
              </div>

              {/* Book Button */}
              <button
                onClick={handleScrollToForm}
                style={{ color: brandTheme.primary, backgroundColor: brandTheme.lightBg }}
                className="px-4 py-2 rounded-lg font-bold text-xs transition-colors hover:brightness-95 cursor-pointer"
              >
                Book Doorstep Visit
              </button>
            </nav>

            {/* Right Side: Circular Phone Button + Hamburger Menu (Mobile/Tablet only) */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Circular Phone Call Button with brand dynamic color */}
              <a
                href={`tel:${BUSINESS_DETAILS.phone}`}
                style={{ backgroundColor: brandTheme.primary }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full text-white flex items-center justify-center shadow-md active:scale-95 transition-all group hover:brightness-95"
                aria-label={`Call ${BUSINESS_DETAILS.name}`}
              >
                <Phone className="w-5 h-5 fill-white text-white group-hover:scale-110 transition-transform" />
              </a>

              {/* Hamburger Button - Strictly hidden on desktop (lg:hidden), fully functional on mobile/tablet */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-11 h-11 rounded-xl text-slate-800 hover:bg-slate-100 flex items-center justify-center focus:outline-none transition-colors active:scale-95 cursor-pointer touch-manipulation"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-[2.5] text-slate-900" />
                ) : (
                  <Menu className="w-6 h-6 stroke-[2.5] text-slate-900" />
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop Overlay & Slide-down Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-auto z-50">
          {/* Backdrop for click-outside dismissal */}
          <div
            className="fixed inset-0 top-[110px] bg-slate-950/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu Content */}
          <div className="relative bg-white border-b border-slate-200 px-4 pt-3 pb-8 shadow-2xl space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto animate-fadeIn">
            
            {/* Quick Call Action Bar inside Mobile Menu */}
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              style={{ backgroundColor: brandTheme.primary }}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white font-bold text-sm shadow-md active:scale-98 transition-all"
            >
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Helpline Directly</span>
              </div>
              <span className="font-mono text-xs bg-white/20 px-2.5 py-1 rounded-lg">
                {BUSINESS_DETAILS.formattedPhone}
              </span>
            </a>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`min-h-[44px] flex items-center px-3.5 py-2.5 text-sm font-bold rounded-xl transition-colors ${
                  currentRoute === '/'
                    ? 'bg-blue-50 text-[#0070e0]'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              <button
                onClick={handleScrollToForm}
                className="min-h-[44px] w-full text-left px-3.5 py-2.5 text-sm font-bold rounded-xl text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Book Doorstep Visit
              </button>

              {/* Legal & Trust Links */}
              <div className="pt-3">
                <div className="px-3.5 pb-1 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                  Policies &amp; Verification
                </div>
                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 px-3">
                  <Link
                    href="/privacy-policy"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[38px] flex items-center text-xs text-slate-600 hover:text-slate-950"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms-of-service"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[38px] flex items-center text-xs text-slate-600 hover:text-slate-950"
                  >
                    Terms &amp; Conditions
                  </Link>
                  <Link
                    href="/refund-policy"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[38px] flex items-center text-xs text-slate-600 hover:text-slate-950"
                  >
                    Cancellation &amp; Refund
                  </Link>
                  <Link
                    href="/disclaimer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[38px] flex items-center text-xs text-slate-600 hover:text-slate-950"
                  >
                    Brand Disclaimer
                  </Link>
                </div>
              </div>

              {/* Primary Book Doorstep Visit CTA */}
              <div className="pt-4">
                <button
                  onClick={handleScrollToForm}
                  style={{ backgroundColor: brandTheme.primary }}
                  className="w-full min-h-[46px] flex items-center justify-center px-4 py-3 rounded-xl text-white font-bold text-sm shadow-md active:scale-98 transition-all hover:brightness-95 cursor-pointer"
                >
                  Book Doorstep Visit
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </header>
  );
};
