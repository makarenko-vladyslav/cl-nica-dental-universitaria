"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

interface Review {
  author: string;
  text: string;
  rating: number;
  treatment: string;
}

export default function Testimonials() {
  const { t } = useLocale();
  const quotes = (t("reviews.quotes") as Review[]) || [];
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="opiniones" className="py-24 bg-bg-light border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layer 1 & 2: Kicker & Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-[0.7rem] font-bold uppercase tracking-widest text-accent mb-2 block">
            {String(t("reviews.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-primary mb-3">
            {String(t("reviews.title"))}
          </h2>
          <p className="text-text-muted text-base">
            {String(t("reviews.subtitle"))}
          </p>
        </div>

        {/* Layer 3 & 4: Oversized Display Pull Quote + Descriptor Attribution */}
        <Reveal className="bg-bg-card p-10 rounded-xl border border-primary/10 shadow-sm mb-10 relative">
          <div className="text-6xl font-serif-display font-bold text-accent/20 absolute top-4 left-6 pointer-events-none">
            “
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded">
                {quotes[activeIdx]?.treatment}
              </span>
              <span className="text-xs font-bold text-primary">
                Valoración: {quotes[activeIdx]?.rating}.0 / 5.0
              </span>
            </div>

            <p className="text-lg sm:text-xl font-serif-display italic text-primary leading-relaxed mb-6">
              "{quotes[activeIdx]?.text}"
            </p>

            <div className="pt-4 border-t border-primary/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
              <div>
                <span className="font-bold text-primary text-sm block">
                  {quotes[activeIdx]?.author}
                </span>
                <span className="text-text-muted text-[0.7rem] uppercase tracking-wider">
                  Paciente Verificado en Moncloa-Aravaca
                </span>
              </div>
              <span className="text-text-muted font-semibold">Fuente: Reseñas Verificadas de Google Maps</span>
            </div>
          </div>
        </Reveal>

        {/* Layer 6: DOT Indicators Slider Navigation (NO Prev/Next Arrow Buttons!) */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`transition-all rounded-full ${
                activeIdx === idx
                  ? "w-8 h-2 bg-accent"
                  : "w-2 h-2 bg-primary/20 hover:bg-primary/40"
              }`}
              aria-label={`Ver testimonio ${idx + 1}`}
            />
          ))}
        </div>

        {/* Layer 5: Rating Source Text Banner */}
        <Reveal delay={0.2} className="text-center">
          <div className="inline-block bg-white px-8 py-3 rounded border border-primary/10 text-xs font-bold text-primary shadow-sm">
            4.5 / 5.0 · Google Maps · 159+ reseñas verificadas de pacientes
          </div>
        </Reveal>

      </div>
    </section>
  );
}
