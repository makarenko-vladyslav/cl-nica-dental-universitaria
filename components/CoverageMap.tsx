"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function CoverageMap() {
  const { t } = useLocale();
  const districts = (t("coverage.districts") as string[]) || [];

  return (
    <section className="py-20 sm:py-28 bg-hsl-alt text-hsl-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-accent block mb-2">
                {t("coverage.kicker") as string}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-hsl-main leading-tight mb-4">
                {t("coverage.title") as string}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xs sm:text-sm text-hsl-muted mb-8">
                {t("coverage.subtitle") as string}
              </p>
            </Reveal>

            <div className="space-y-4 text-xs mb-8">
              <div className="p-4 bg-white rounded-xl border border-hsl-border-light">
                <span className="font-bold block text-hsl-main uppercase tracking-wider text-[0.65rem] text-accent mb-1">АДРЕСА:</span>
                <span className="text-hsl-main font-semibold">{t("coverage.address") as string}</span>
              </div>

              <div className="p-4 bg-white rounded-xl border border-hsl-border-light">
                <span className="font-bold block text-hsl-main uppercase tracking-wider text-[0.65rem] text-accent mb-1">ГРОМАДСЬКИЙ ТРАНСПОРТ:</span>
                <span className="text-hsl-main font-semibold">{t("coverage.metro") as string}</span>
              </div>

              <div className="p-4 bg-white rounded-xl border border-hsl-border-light">
                <span className="font-bold block text-hsl-main uppercase tracking-wider text-[0.65rem] text-accent mb-1">РЕЖИМ РОБОТИ:</span>
                <span className="text-hsl-main font-semibold">{t("coverage.hours") as string}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {districts.map((d, i) => (
                <span key={i} className="text-[0.65rem] font-bold uppercase tracking-wider bg-white px-3 py-1.5 rounded-full border border-hsl-border-light text-hsl-muted">
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Map Embed Side */}
          <div className="lg:col-span-7">
            <Reveal delay={0.3}>
              <div className="bg-white p-3 rounded-3xl border border-hsl-border-light shadow-xl overflow-hidden aspect-[4/3] relative">
                <iframe
                  title="Clínica Dental Universitaria Madrid Map"
                  src="https://www.google.com/maps?q=Calle+de+Alberto+Aguilera,+Madrid,+Spain&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "1.25rem" }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
