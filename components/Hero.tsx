"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-hsl-dark text-white">
      {/* Layer 1: Background Video + Dark Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/6630465/clinic-dental-doctor-health-care-6630465.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover scale-105 opacity-30 transition-opacity duration-1000"
        >
          <source src="https://videos.pexels.com/video-files/6630465/6630465-hd_1366_720_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-hsl-dark/90 via-hsl-dark/75 to-hsl-dark" />
      </div>

      {/* Layer 2: Giant Decorative Type Layer (Watermark) */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[14vw] font-black text-white/[0.025] whitespace-nowrap pointer-events-none select-none z-0"
      >
        LA SALLE MADRID
      </div>

      {/* Layer 3: Atmospheric Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow z-0" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Layer 4: Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text Block */}
          <div className="lg:col-span-8 flex flex-col items-start">
            
            {/* Layer 5: Kicker with REAL Meta */}
            <Reveal>
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-[0.7rem] font-bold tracking-widest text-accent uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span>{t("hero.kicker") as string}</span>
              </div>
            </Reveal>

            {/* Layer 6: Display Headline with Styling Accent */}
            <Reveal delay={0.1}>
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
                Академічна стоматологія з <span className="text-accent underline decoration-2 underline-offset-4">фіксованими</span> цінами до 50% нижче ринкових
              </h1>
            </Reveal>

            {/* Layer 7: Subtitle / Lede */}
            <Reveal delay={0.2}>
              <p className="text-sm sm:text-lg text-white/80 max-w-2xl font-normal leading-relaxed mb-8">
                {t("hero.subtitle") as string}
              </p>
            </Reveal>

            {/* Layer 8: CTA Pair */}
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <a
                  href="#contact"
                  className="bg-accent hover:bg-accent-hover text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-xl shadow-accent/25 transition-all transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
                >
                  <span>{t("hero.ctaPrimary") as string}</span>
                </a>
                <a
                  href="#calculator"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-xl border border-white/25 transition-all text-center backdrop-blur-sm"
                >
                  {t("hero.ctaSecondary") as string}
                </a>
              </div>
            </Reveal>

            {/* Layer 9: Flanking Mini-Copy Columns */}
            <Reveal delay={0.4} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10 w-full max-w-2xl text-xs text-white/70">
              <div className="border-l border-accent/60 pl-3">
                <span className="font-bold text-white block mb-0.5">Академічна база La Salle</span>
                <span>Нагляд магістерського комітету оральної хірургії</span>
              </div>
              <div className="border-l border-accent/60 pl-3">
                <span className="font-bold text-white block mb-0.5">Фіксований пакет 790€</span>
                <span>Імплант + цирконієва корона без прихованих платежів</span>
              </div>
            </Reveal>

          </div>

          {/* Right Column: Featured Offer Card + Rotating Text Seal */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-end gap-6">
            
            {/* Layer 10: Rotating Circular Text Seal */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="w-full h-full animate-spin-slow text-accent opacity-80" viewBox="0 0 100 100">
                <path id="sealPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="text-[9.5px] font-bold tracking-widest uppercase fill-current font-display">
                  <textPath href="#sealPath">
                    CLINICA DENTAL UNIVERSITARIA • LA SALLE MADRID •
                  </textPath>
                </text>
              </svg>
              <div className="absolute font-display font-extrabold text-xs text-white">
                MADRID
              </div>
            </div>

            {/* Price Card */}
            <Reveal delay={0.3} className="w-full">
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-accent/30 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[0.65rem] uppercase font-bold tracking-widest text-accent bg-accent/20 px-3 py-1 rounded-full">
                    ПАКЕТ РОКУ
                  </span>
                  <span className="text-[0.7rem] text-white/60 font-semibold uppercase tracking-wider">Moncloa-Aravaca</span>
                </div>

                <div className="mb-6">
                  <span className="text-[0.7rem] uppercase tracking-wider text-white/70 block mb-1">
                    Імплант + Цирконієва Корона
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-extrabold text-5xl text-white tabular-nums">790€</span>
                    <span className="text-lg text-white/50 line-through font-medium tabular-nums">1400€</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold mt-1 block">
                    Економія до 50% від ринкової ціни
                  </span>
                </div>

                <div className="space-y-3 text-xs text-white/90 mb-8 pb-6 border-b border-white/15">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Сертифікований дентальний імплант</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Міцна цирконієва корона та абутмент</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Анестезія та первинний КТ 3D-знімок</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Контроль професорів La Salle</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full block text-center bg-white text-hsl-dark font-extrabold text-xs uppercase tracking-widest py-3.5 rounded-xl hover:bg-accent hover:text-white transition-all"
                >
                  Забронювати ціну 790€
                </a>
              </div>
            </Reveal>

          </div>

        </div>
      </div>

      {/* Layer 11: 3-Item Meta Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="py-4 border-y border-white/10 flex flex-wrap items-center justify-between gap-y-2 text-[0.75rem] font-bold uppercase tracking-widest text-white/80 tabular-nums">
          <div>ПН – ПТ: 09:00 – 20:00</div>
          <div className="hidden sm:block text-white/30">|</div>
          <div>CALLE DE ALBERTO AGUILERA, 23 · MADRID</div>
          <div className="hidden sm:block text-white/30">|</div>
          <div className="text-amber-400">4.5 / 5.0 GOOGLE MAPS (159 ВІДГУКІВ)</div>
        </div>
      </div>

      {/* Layer 12: Scroll Cue */}
      <div className="relative z-10 hidden sm:flex flex-col items-center gap-2 mt-6 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/80 font-bold">SCROLL</span>
        <div className="w-0.5 h-5 bg-gradient-to-b from-white via-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
