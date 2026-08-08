"use client";

import { useLocale } from "@/lib/i18n";

export default function AcademicTrust() {
  const { t } = useLocale();

  const items = [
    String(t("trustTicker.item1")),
    String(t("trustTicker.item2")),
    String(t("trustTicker.item3")),
    String(t("trustTicker.item4")),
    String(t("trustTicker.item5")),
  ];

  return (
    <section className="bg-primary text-white py-4 border-y border-accent/30 overflow-hidden select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex items-center gap-12 px-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-white/90">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-12 px-6">
          {items.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-white/90">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
