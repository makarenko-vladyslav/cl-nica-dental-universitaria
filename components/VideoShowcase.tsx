"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function VideoShowcase() {
  const { t } = useLocale();

  return (
    <section className="py-20 sm:py-28 bg-hsl-dark text-white relative overflow-hidden">
      
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-accent block mb-2">
              {t("videoShowcase.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              {t("videoShowcase.title") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xs sm:text-sm text-white/70">
              {t("videoShowcase.subtitle") as string}
            </p>
          </Reveal>
        </div>

        {/* Video Player Box */}
        <Reveal delay={0.3}>
          <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black max-w-4xl mx-auto aspect-video">
            <video
              controls
              playsInline
              poster={t("videoShowcase.posterUrl") as string}
              className="w-full h-full object-cover"
            >
              <source src={t("videoShowcase.videoUrl") as string} type="video/mp4" />
            </video>
          </div>
        </Reveal>

        <Reveal delay={0.4} className="mt-8 text-center">
          <span className="text-xs text-white/60 uppercase font-semibold tracking-widest">
            Moncloa-Aravaca · Universidad de La Salle Clinical Center
          </span>
        </Reveal>

      </div>
    </section>
  );
}
