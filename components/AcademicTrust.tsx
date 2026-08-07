"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "./motion";

export default function AcademicTrust() {
  const { t } = useLocale();
  const items = (t("trustBanner.items") as Array<{ num: string; title: string; desc: string }>) || [];

  return (
    <section id="academic" className="py-20 sm:py-28 bg-hsl-light text-hsl-main relative overflow-hidden">
      
      {/* Decorative Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-0 font-display text-[12vw] font-black text-hsl-main/[0.03] whitespace-nowrap pointer-events-none select-none z-0"
      >
        ACADEMIC CARE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <Reveal>
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-accent block mb-2">
                {t("trustBanner.kicker") as string}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-hsl-main leading-tight">
                {t("trustBanner.title") as string}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <p className="text-xs sm:text-sm text-hsl-muted leading-relaxed border-l-2 border-accent pl-4">
                {t("trustBanner.description") as string}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Pull-Quote Statement */}
        <Reveal delay={0.2} className="mb-16">
          <div className="bg-hsl-alt p-8 sm:p-10 rounded-2xl border border-hsl-border-light text-center max-w-4xl mx-auto">
            <p className="font-display font-bold text-lg sm:text-2xl text-hsl-main leading-snug italic">
              «Ми поєднали академічні стандарти кафедри із доступністю для кожного пацієнта»
            </p>
            <div className="mt-4 text-xs font-bold uppercase tracking-widest text-accent">
              Dr. Juan Carlos Vara — засновник EDE Posgrados
            </div>
          </div>
        </Reveal>

        {/* Stat Cards Grid (4 items) */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {items.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white p-8 rounded-2xl border border-hsl-border-light shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between group">
                <div>
                  <div className="font-display font-extrabold text-4xl sm:text-5xl text-accent mb-4 group-hover:scale-105 transition-transform origin-left tabular-nums">
                    {item.num}
                  </div>
                  <h3 className="font-display font-bold text-base text-hsl-main mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-hsl-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-hsl-border-light text-[0.65rem] font-bold uppercase tracking-widest text-accent">
                  Стандарт університету
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* 2-Photo Cluster + Affiliation Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Overlapping Photo Cluster */}
          <div className="lg:col-span-6 relative">
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden border border-hsl-border-light shadow-lg aspect-[4/3]">
                <img
                  src="https://clinicadentaluniversitaria.com/wp-content/uploads/2025/07/odontologia-general-en-madrid-768x454.jpg"
                  alt="3D Dental Laboratory Madrid"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold uppercase tracking-wider">
                  Клінічна база 3D-моделювання · Moncloa
                </div>
              </div>
            </Reveal>

            {/* Overlapped Sub-Photo */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-1/2 rounded-2xl overflow-hidden border-4 border-white shadow-2xl aspect-[4/3]">
              <img
                src="https://clinicadentaluniversitaria.com/wp-content/uploads/2025/10/Implante-790-768x453.jpg"
                alt="Implant procedure"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Academic Affiliation Card */}
          <div className="lg:col-span-6">
            <Reveal delay={0.2}>
              <div className="bg-hsl-dark text-white p-8 sm:p-10 rounded-3xl border border-hsl-border-dark shadow-2xl">
                <div className="text-[0.65rem] uppercase font-bold tracking-[0.25em] text-accent mb-4">
                  ОФІЦІЙНИЙ ПАРТНЕР
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-4">
                  Universidad de La Salle & EDE Posgrados
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-8">
                  Клініка діє як науково-практична база Мадрида. Усі процедури схвалюються кафедральним комітетом оральної хірургії та ортодонтії.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="#contact"
                    className="bg-accent hover:bg-accent-hover text-white font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all text-center"
                  >
                    Записатися до професора
                  </a>
                  <a
                    href="#team"
                    className="text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider text-center py-2"
                  >
                    Переглянути склад фахівців
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
