"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "./motion";

type Step = {
  num: string;
  title: string;
  desc: string;
};

export default function ProcessSteps() {
  const { t } = useLocale();
  const steps = (t("process.steps") as Step[]) || [];

  return (
    <section className="py-20 sm:py-28 bg-hsl-light text-hsl-main relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-accent block mb-2">
              {t("process.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-hsl-main leading-tight mb-4">
              {t("process.title") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xs sm:text-sm text-hsl-muted">
              {t("process.subtitle") as string}
            </p>
          </Reveal>
        </div>

        {/* Process Steps List */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white p-8 rounded-2xl border border-hsl-border-light shadow-sm relative h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-extrabold text-3xl text-accent tabular-nums">
                      {step.num}
                    </span>
                    <span className="text-[0.65rem] uppercase font-bold tracking-widest text-hsl-muted">
                      КРОК {step.num}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-hsl-main mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-hsl-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}
