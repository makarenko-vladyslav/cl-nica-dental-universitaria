"use client";
import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

type Review = {
  name: string;
  procedure: string;
  text: string;
  rating: number;
};

export default function ClientTestimonials() {
  const { t } = useLocale();
  const reviews = (t("testimonials.list") as Review[]) || [];
  const [activeIndex, setActiveIndex] = useState(0);

  const activeReview = reviews[activeIndex] || reviews[0];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-hsl-light text-hsl-main relative overflow-hidden">
      
      {/* Decorative Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-0 font-display text-[12vw] font-black text-hsl-main/[0.03] whitespace-nowrap pointer-events-none select-none z-0"
      >
        REVIEWS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-accent block mb-2">
              {t("testimonials.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-hsl-main leading-tight mb-4">
              {t("testimonials.title") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-hsl-border-light shadow-sm">
              <span className="font-display font-extrabold text-sm text-accent tabular-nums">
                {t("testimonials.googleRating") as string}
              </span>
              <span className="text-xs text-hsl-muted font-bold uppercase tracking-wider">
                Google Maps ({t("testimonials.googleReviewsCount") as string})
              </span>
            </div>
          </Reveal>
        </div>

        {/* Major Featured Quote Display */}
        {activeReview && (
          <Reveal delay={0.3} className="max-w-4xl mx-auto mb-12">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-hsl-border-light shadow-xl relative">
              <div className="font-display text-6xl text-accent/20 absolute top-4 left-6 select-none font-black">
                “
              </div>
              <div className="relative z-10 pt-4">
                <p className="font-display font-bold text-lg sm:text-2xl text-hsl-main leading-snug mb-8">
                  «{activeReview.text}»
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-hsl-border-light pt-6">
                  <div>
                    <h4 className="font-display font-extrabold text-base text-hsl-main">
                      {activeReview.name}
                    </h4>
                    <span className="text-xs font-semibold text-accent block mt-0.5">
                      {activeReview.procedure}
                    </span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-hsl-muted">
                    Оцінка 5.0 / 5.0
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* DOT Indicators (No prev/next arrows!) */}
        <div className="flex justify-center items-center gap-3">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-3 rounded-full transition-all ${
                activeIndex === idx ? "w-10 bg-accent" : "w-3 bg-hsl-border-light hover:bg-hsl-muted"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
