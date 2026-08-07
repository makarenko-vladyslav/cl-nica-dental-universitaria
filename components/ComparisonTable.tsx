"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

type FeatureRow = {
  name: string;
  us: string;
  competitors: string;
  advantage: boolean;
};

export default function ComparisonTable() {
  const { t } = useLocale();
  const features = (t("comparison.features") as FeatureRow[]) || [];

  return (
    <section className="py-20 sm:py-28 bg-hsl-alt text-hsl-main relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-accent block mb-2">
              {t("comparison.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-hsl-main leading-tight mb-4">
              {t("comparison.title") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xs sm:text-sm text-hsl-muted">
              {t("comparison.subtitle") as string}
            </p>
          </Reveal>
        </div>

        {/* Comparison Table */}
        <Reveal delay={0.3}>
          <div className="bg-white rounded-3xl border border-hsl-border-light shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-hsl-dark text-white font-display text-[0.7rem] uppercase tracking-widest">
                    <th className="py-5 px-6">Критерій порівняння</th>
                    <th className="py-5 px-6 bg-accent text-white font-extrabold text-xs tracking-widest">
                      Clínica Dental Universitaria
                    </th>
                    <th className="py-5 px-6 opacity-70">Мережеві клініки Мадрида</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hsl-border-light text-xs">
                  {features.map((row, idx) => (
                    <tr key={idx} className="hover:bg-hsl-alt/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-hsl-main">{row.name}</td>
                      <td className="py-4 px-6 font-bold text-accent bg-accent/5">
                        <span className="inline-block">{row.us}</span>
                      </td>
                      <td className="py-4 px-6 text-hsl-muted">{row.competitors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
