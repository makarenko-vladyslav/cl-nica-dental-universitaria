"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";

export default function SocialProofTicker() {
  const { t } = useLocale();
  const tickerItems = (t("ticker") as string[]) || [];

  return (
    <div className="bg-accent text-white py-3.5 overflow-hidden border-y border-accent-hover/30 relative z-20">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-10">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-10 font-display text-xs sm:text-sm font-extrabold tracking-widest uppercase">
            <span>{item}</span>
            <span className="text-white/40 font-normal">—</span>
          </div>
        ))}
      </div>
    </div>
  );
}
