"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  rating: string;
}

export default function Testimonials() {
  const { t } = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);

  const kicker = String(t('testimonials.kicker'));
  const title = String(t('testimonials.title'));
  const subtitle = String(t('testimonials.subtitle'));
  const items = (t('testimonials.items') as TestimonialItem[]) || [];

  return (
    <section className="py-20 sm:py-24 bg-[var(--color-primary)] text-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-display font-semibold uppercase tracking-widest text-[var(--color-accent)] block mb-3">
            {kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold mb-4 text-white">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            {subtitle}
          </p>
        </Reveal>

        {/* Main Testimonial Card */}
        <Reveal delay={0.2} className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md overflow-hidden">
          
          {/* Background Oversized Quotation Mark */}
          <div 
            className="absolute -top-6 -left-2 text-white/5 font-display font-black text-9xl select-none pointer-events-none"
            aria-hidden="true"
          >
            «
          </div>

          <div className="relative z-10">
            {/* Rating Source Header */}
            <div className="flex items-center justify-between gap-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold font-mono text-base">
                  {items[currentIndex]?.rating || '4.5 / 5.0'}
                </span>
                <span className="text-xs text-white/60 uppercase tracking-wider font-semibold">
                  · Google Maps Verified Review
                </span>
              </div>
              <span className="text-xs text-white/40 font-mono">
                {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
              </span>
            </div>

            {/* Display Quote */}
            <blockquote className="text-lg sm:text-2xl font-display font-normal leading-relaxed text-white/95 mb-8 italic">
              «{items[currentIndex]?.quote}»
            </blockquote>

            {/* Attribution & Dots Counter */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-display font-bold text-base text-white">
                  {items[currentIndex]?.author}
                </div>
                <div className="text-xs text-[var(--color-accent)] mt-0.5 font-medium">
                  {items[currentIndex]?.role}
                </div>
              </div>

              {/* Dot Indicators without arrows */}
              <div className="flex items-center gap-2.5">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      currentIndex === idx
                        ? 'bg-[var(--color-accent)] w-8'
                        : 'bg-white/30 hover:bg-white/50 w-2.5'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
