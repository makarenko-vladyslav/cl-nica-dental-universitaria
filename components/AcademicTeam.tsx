"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "./motion";

type Member = {
  name: string;
  role: string;
  spec: string;
};

export default function AcademicTeam() {
  const { t } = useLocale();
  const members = (t("team.members") as Member[]) || [];

  return (
    <section id="team" className="py-20 sm:py-28 bg-hsl-alt text-hsl-main relative overflow-hidden">
      
      {/* Decorative Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-0 font-display text-[12vw] font-black text-hsl-main/[0.025] whitespace-nowrap pointer-events-none select-none z-0"
      >
        FACULTY & DOCTORS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-accent block mb-2">
              {t("team.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-hsl-main leading-tight mb-4">
              {t("team.title") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xs sm:text-sm text-hsl-muted max-w-xl mx-auto">
              {t("team.subtitle") as string}
            </p>
          </Reveal>
        </div>

        {/* Team Grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((doctor, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white p-8 rounded-2xl border border-hsl-border-light shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-hsl-dark text-white font-display font-extrabold text-xl flex items-center justify-center mb-6 border border-hsl-border-dark group-hover:bg-accent transition-colors">
                    {doctor.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </div>
                  <h3 className="font-display font-bold text-base text-hsl-main mb-1">
                    {doctor.name}
                  </h3>
                  <span className="text-xs font-semibold text-accent block mb-3">
                    {doctor.role}
                  </span>
                  <p className="text-xs text-hsl-muted leading-relaxed">
                    {doctor.spec}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-hsl-border-light text-[0.65rem] uppercase font-bold text-hsl-muted tracking-widest">
                  Universidad de La Salle Partner
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}
