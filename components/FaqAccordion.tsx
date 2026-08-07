"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

type FaqItem = {
  q: string;
  a: string;
};

export default function FaqAccordion() {
  const { t } = useLocale();
  const items = (t("faq.items") as FaqItem[]) || [];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-hsl-light text-hsl-main relative overflow-hidden">
      
      {/* Decorative Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-0 font-display text-[12vw] font-black text-hsl-main/[0.03] whitespace-nowrap pointer-events-none select-none z-0"
      >
        QUESTIONS & ANSWERS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-accent block mb-2">
              {t("faq.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-hsl-main leading-tight mb-4">
              {t("faq.title") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xs sm:text-sm text-hsl-muted">
              {t("faq.subtitle") as string}
            </p>
          </Reveal>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <details className="group bg-white rounded-2xl border border-hsl-border-light p-6 [&_summary::-webkit-details-marker]:none transition-all shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-sm text-hsl-main group-open:text-accent">
                  <span>{item.q}</span>
                  <span className="text-accent font-bold transition-transform group-open:rotate-180 ml-4 shrink-0">
                    ↓
                  </span>
                </summary>
                <p className="mt-4 text-xs text-hsl-muted leading-relaxed border-t border-hsl-border-light pt-4">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
