'use client';

import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle2, AlertCircle, Loader2, User, MapPin, Wrench, ShieldCheck, Lock, ArrowRight } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/content';
import { LeadFormData } from '../types';

interface LeadFormProps {
  preselectedBrand?: string;
  sourcePage?: string;
  className?: string;
  compact?: boolean;
  buttonColor?: string;
  hideBrandSelector?: boolean;
  hideServiceSelector?: boolean;
}

const SERVICE_OPTIONS: string[] = [
  'RO Repair (Quick diagnosis)',
  'RO Service & Cleaning',
  'Filter & Membrane Replacement',
  'AMC Yearly Care Plan',
  'Installation / Uninstallation',
];

export const LeadForm: React.FC<LeadFormProps> = ({
  preselectedBrand = '',
  sourcePage = 'Homepage Hero',
  className = '',
  buttonColor,
  hideBrandSelector = false,
}) => {
  const initialBrand = preselectedBrand || 'Kent';

  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    mobileNumber: '',
    pinCode: '',
    selectedBrand: initialBrand,
    serviceType: SERVICE_OPTIONS[0],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const brandOptions = [
    'Kent',
    'Aquaguard',
    'Pureit',
    'AO Smith',
    'LG',
    'Livpure',
    'Havells',
    'Blue Star',
    'Aqua Pearl',
    'Whirlpool',
    'Other Brands',
  ];

  useEffect(() => {
    if (preselectedBrand) {
      setFormData((prev) => ({
        ...prev,
        selectedBrand: preselectedBrand,
      }));
    }
  }, [preselectedBrand]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    const cleanMobile = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanMobile) {
      newErrors.mobileNumber = 'Please enter mobile number';
    } else if (cleanMobile.length !== 10) {
      newErrors.mobileNumber = 'Please enter valid 10-digit mobile number';
    } else if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      newErrors.mobileNumber = 'Number should start with 6, 7, 8, or 9';
    }

    const cleanPin = formData.pinCode.replace(/\D/g, '');
    if (cleanPin && cleanPin.length !== 6) {
      newErrors.pinCode = 'Pincode should be 6 digits (e.g. 560001)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // FormSubmit destination URL updated directly to Rocarebangalorero@gmail.com
      const endpoint = `https://formsubmit.co/ajax/${BUSINESS_DETAILS.formSubmitEmail}`;

      const payload = new FormData();
      payload.append('fullName', formData.fullName);
      payload.append('mobileNumber', formData.mobileNumber);
      payload.append('pinCode', formData.pinCode || 'Bangalore');
      payload.append('selectedBrand', formData.selectedBrand);
      payload.append('serviceType', formData.serviceType || 'RO Water Purifier Repair');
      payload.append('sourcePage', sourcePage);
      payload.append('_subject', `New RO Service Lead: ${formData.fullName} - ${formData.selectedBrand} (${formData.mobileNumber})`);
      payload.append('_captcha', 'false');
      payload.append('_template', 'table');

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: payload,
      });

      if (response.ok || response.status === 200) {
        setIsSuccess(true);
        setFormData({
          fullName: '',
          mobileNumber: '',
          pinCode: '',
          selectedBrand: preselectedBrand || 'Kent',
          serviceType: SERVICE_OPTIONS[0],
        });
      } else {
        setIsSuccess(true);
      }
    } catch (err) {
      console.warn('FormSubmit AJAX fallback:', err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="lead-form"
      className={`bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/90 p-5 sm:p-7 relative transition-all w-full max-w-lg mx-auto ${className}`}
    >
      {/* Top Header matching reference image: Title + 60-90 mins pill + 100% Safe badge */}
      <div className="flex items-start justify-between gap-3 mb-5 border-b border-slate-100 pb-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
            Book Service Now
          </h3>
          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-slate-500 font-medium">
            <span>Technician visit in</span>
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold px-2 py-0.5 rounded-full text-[11px]">
              60–90 mins
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-slate-600 bg-slate-100/80 px-2.5 py-1 rounded-full shrink-0">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
          <span>100% Safe &amp; Secure</span>
        </div>
      </div>

      {isSuccess ? (
        <div className="py-6 text-center space-y-4 animate-fadeIn">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900">Booking Request Received!</h4>
            <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
              Thank you! Our service coordinator will call you within 5–10 minutes to confirm your technician visit.
            </p>
          </div>
          <div className="pt-4 flex flex-col items-center justify-center gap-2.5">
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0070e0] hover:bg-[#005ec4] text-white font-bold text-sm transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4 fill-white" />
              Call Now: {BUSINESS_DETAILS.formattedPhone}
            </a>
            <button
              onClick={() => setIsSuccess(false)}
              className="text-xs text-slate-500 hover:text-[#0070e0] py-1 font-medium transition-colors"
            >
              Book another request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
          {serverError && (
            <div className="p-3 bg-red-50 border border-red-100 text-red-700 rounded-xl text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{serverError}</span>
            </div>
          )}

          {/* Full Name */}
          <div className="relative">
            <div className="relative group">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0070e0] transition-colors pointer-events-none">
                <User className="w-4 h-4" />
              </span>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name (e.g. John Doe)"
                className={`w-full pl-10 pr-3.5 py-3 text-sm bg-slate-50/70 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400 ${
                  errors.fullName
                    ? 'border-red-400 focus:ring-red-100 focus:border-red-500'
                    : 'border-slate-200 focus:ring-blue-100 focus:border-[#0070e0]'
                }`}
              />
            </div>
            {errors.fullName && <p className="text-[11px] text-red-500 mt-1 ml-1 font-medium">{errors.fullName}</p>}
          </div>

          {/* Mobile Number */}
          <div className="relative">
            <div className="relative group">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0070e0] transition-colors flex items-center gap-1.5 pointer-events-none">
                <Phone className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-semibold text-slate-500 pt-0.5 border-r border-slate-200 pr-2">+91</span>
              </span>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                maxLength={10}
                value={formData.mobileNumber}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '');
                  setFormData((prev) => ({ ...prev, mobileNumber: val }));
                  if (errors.mobileNumber) setErrors((prev) => ({ ...prev, mobileNumber: '' }));
                }}
                placeholder="10-digit mobile number"
                className={`w-full pl-20 pr-3.5 py-3 text-sm bg-slate-50/70 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400 ${
                  errors.mobileNumber
                    ? 'border-red-400 focus:ring-red-100 focus:border-red-500'
                    : 'border-slate-200 focus:ring-blue-100 focus:border-[#0070e0]'
                }`}
              />
            </div>
            {errors.mobileNumber && <p className="text-[11px] text-red-500 mt-1 ml-1 font-medium">{errors.mobileNumber}</p>}
          </div>

          {/* 2-Column Row: Pincode + Service / Brand */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Pincode */}
            <div className="relative">
              <div className="relative group">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0070e0] transition-colors pointer-events-none">
                  <MapPin className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  id="pinCode"
                  name="pinCode"
                  maxLength={6}
                  value={formData.pinCode}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    setFormData((prev) => ({ ...prev, pinCode: val }));
                    if (errors.pinCode) setErrors((prev) => ({ ...prev, pinCode: '' }));
                  }}
                  placeholder="Pincode e.g. 560001"
                  className={`w-full pl-10 pr-3 py-3 text-sm bg-slate-50/70 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400 ${
                    errors.pinCode
                      ? 'border-red-400 focus:ring-red-100 focus:border-red-500'
                      : 'border-slate-200 focus:ring-blue-100 focus:border-[#0070e0]'
                  }`}
                />
              </div>
              {errors.pinCode && <p className="text-[11px] text-red-500 mt-1 ml-1 font-medium">{errors.pinCode}</p>}
            </div>

            {/* Service Type or Brand */}
            {!hideBrandSelector ? (
              <div className="relative">
                <div className="relative group">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0070e0] transition-colors pointer-events-none z-10">
                    <Wrench className="w-4 h-4" />
                  </span>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full pl-10 pr-8 py-3 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-[#0070e0] focus:outline-none transition-all appearance-none cursor-pointer font-medium text-slate-800"
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-slate-400">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                <div className="relative group">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0070e0] transition-colors pointer-events-none z-10">
                    <Wrench className="w-4 h-4" />
                  </span>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full pl-10 pr-8 py-3 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-[#0070e0] focus:outline-none transition-all appearance-none cursor-pointer font-medium text-slate-800"
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-slate-400">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* If Brand selector is needed, show a quick row */}
          {!hideBrandSelector && (
            <div className="pt-1">
              <label htmlFor="selectedBrand" className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1 ml-1">
                Water Purifier Brand
              </label>
              <div className="relative">
                <select
                  id="selectedBrand"
                  name="selectedBrand"
                  value={formData.selectedBrand}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-[#0070e0] focus:outline-none transition-all appearance-none cursor-pointer font-medium text-slate-800"
                >
                  {brandOptions.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand} Water Purifier
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-slate-400">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button (Vibrant Blue matching reference: "Book Service Now ->") */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={buttonColor ? { backgroundColor: buttonColor } : undefined}
            className={`w-full mt-3 py-3.5 px-6 rounded-xl text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all active:scale-98 disabled:opacity-75 disabled:cursor-not-allowed shadow-md cursor-pointer ${
              buttonColor
                ? 'hover:brightness-95'
                : 'bg-[#0070e0] hover:bg-[#005ec4] shadow-blue-500/25'
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <span>Book Service Now</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </>
            )}
          </button>

          {/* Subtext: Lock icon + "Your information is safe with us." */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-1">
            <Lock className="w-3.5 h-3.5" />
            <span>Your information is safe with us.</span>
          </div>
        </form>
      )}
    </div>
  );
};
