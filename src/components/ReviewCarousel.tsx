'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Pause, Play } from 'lucide-react';
import { Testimonial } from '@/src/types';

interface ReviewCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function ReviewCarousel({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 4000,
}: ReviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const totalSlides = testimonials?.length || 0;

  const nextSlide = useCallback(() => {
    if (totalSlides === 0) return;
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    if (totalSlides === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play timer with pause on hover/touch
  useEffect(() => {
    if (!autoPlay || isPaused || totalSlides <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, isPaused, nextSlide, totalSlides]);

  // Touch gesture handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      const isSwipeLeft = distance > 40;
      const isSwipeRight = distance < -40;

      if (isSwipeLeft) {
        nextSlide();
      } else if (isSwipeRight) {
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
    setTimeout(() => setIsPaused(false), 800);
  };

  if (!testimonials || totalSlides === 0) return null;

  // Helper to get initials
  const getInitials = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div
      className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto select-none px-2 sm:px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Card Viewport */}
      <div
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Subtle animated auto-play timer bar */}
        {autoPlay && !isPaused && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 z-20 overflow-hidden">
            <div
              key={currentIndex}
              className="h-full bg-gradient-to-r from-[#0070e0] to-sky-400"
              style={{
                animation: `slideProgress ${autoPlayInterval}ms linear forwards`,
              }}
            />
          </div>
        )}

        {/* Sliding Slides Track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((review, idx) => (
            <div
              key={review.id || idx}
              className="w-full shrink-0 p-4 sm:p-6 md:p-7 flex flex-col justify-between"
            >
              {/* Top Row: Stars + Rating + Verified Badge */}
              <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700 bg-amber-50 border border-amber-200/60 px-1.5 py-0.5 rounded">
                    5.0
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified Service</span>
                  </span>
                  {review.date && (
                    <span className="text-[10px] sm:text-[11px] text-slate-400 hidden sm:inline">
                      {review.date}
                    </span>
                  )}
                </div>
              </div>

              {/* Review Text Body - Comfortable and fully readable on mobile */}
              <div className="relative mb-3 sm:mb-5">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-left">
                  <span className="text-[#0070e0] font-serif text-base sm:text-lg font-bold mr-1">“</span>
                  {review.comment}
                  <span className="text-[#0070e0] font-serif text-base sm:text-lg font-bold ml-1">”</span>
                </p>
              </div>

              {/* Author & Brand Footnote */}
              <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-2.5 text-left min-w-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#0070e0] to-sky-400 text-white font-bold text-[10px] sm:text-xs flex items-center justify-center shrink-0 shadow-2xs">
                    {getInitials(review.name)}
                  </div>
                  <div className="truncate">
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900 truncate leading-tight">
                      {review.name}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 truncate mt-0.5">
                      {review.locality}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-right">
                  <span className="inline-block text-[9px] sm:text-[11px] font-bold text-[#0070e0] bg-sky-50 border border-sky-100 px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg">
                    {review.brandServiced}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sleek Compact Mobile & Desktop Navigation Controls */}
      <div className="mt-3 sm:mt-4 flex items-center justify-between gap-2 sm:gap-3 px-1">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          type="button"
          aria-label="Previous review"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#0070e0] hover:border-[#0070e0] shadow-2xs flex items-center justify-center transition-all active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Center: Pagination Dots + Slide Counter */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1 sm:gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                type="button"
                aria-label={`Go to review ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-4 sm:w-6 bg-[#0070e0]'
                    : 'w-1.5 sm:w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <span className="text-[10px] sm:text-xs font-semibold text-slate-500 font-mono bg-white px-2 py-0.5 rounded-md border border-slate-200/80">
            {currentIndex + 1}/{totalSlides}
          </span>
        </div>

        {/* Right side: Auto-play toggle + Next Button */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <button
            onClick={() => setIsPaused(!isPaused)}
            type="button"
            aria-label={isPaused ? 'Resume auto slide' : 'Pause auto slide'}
            className="w-7 h-7 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer text-xs"
            title={isPaused ? 'Resume auto slide' : 'Pause auto slide'}
          >
            {isPaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3" />}
          </button>

          <button
            onClick={nextSlide}
            type="button"
            aria-label="Next review"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#0070e0] hover:border-[#0070e0] shadow-2xs flex items-center justify-center transition-all active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
