"use client";
import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function PriceCalculator() {
  const { t } = useLocale();

  const [teethCount, setTeethCount] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>("implant");

  const options = [
    { id: "implant", name: "Імплантація (Імплант + Корона)", price: 790, market: 1400 },
    { id: "brackets", name: "Ортодонтія (Брекети)", price: 1290, market: 2200 },
    { id: "invisalign", name: "Елайнери Invisalign", price: 2850, market: 4200 },
    { id: "veneers", name: "Керамічні вініри", price: 390, market: 650 }
  ];

  const currentOption = options.find((o) => o.id === selectedService) || options[0];

  const isCourseType = selectedService === "invisalign" || selectedService === "brackets";
  const multiplier = isCourseType ? 1 : teethCount;

  const ourTotal = currentOption.price * multiplier;
  const marketTotal = currentOption.market * multiplier;
  const totalSavings = marketTotal - ourTotal;

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-hsl-light text-hsl-main relative overflow-hidden">
      
      {/* Decorative Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-0 font-display text-[12vw] font-black text-hsl-main/[0.03] whitespace-nowrap pointer-events-none select-none z-0"
      >
        CALCULATOR
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-accent block mb-2">
              {t("calculator.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-hsl-main leading-tight mb-4">
              {t("calculator.title") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xs sm:text-sm text-hsl-muted">
              {t("calculator.subtitle") as string}
            </p>
          </Reveal>
        </div>

        {/* Interactive Calculator Card */}
        <Reveal delay={0.3}>
          <div className="bg-white rounded-3xl border border-hsl-border-light shadow-xl p-6 sm:p-12 max-w-4xl mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Controls Column */}
              <div className="space-y-8">
                
                {/* Service Selection */}
                <div>
                  <label className="block text-[0.65rem] font-extrabold uppercase tracking-widest text-hsl-muted mb-3">
                    {t("calculator.serviceTypeLabel") as string}
                  </label>
                  <div className="space-y-2">
                    {options.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedService(opt.id)}
                        className={`w-full text-left p-3.5 rounded-xl text-xs font-bold transition-all border flex items-center justify-between ${
                          selectedService === opt.id
                            ? "bg-accent/10 border-accent text-hsl-main shadow-sm"
                            : "bg-hsl-alt border-transparent text-hsl-muted hover:border-hsl-border-light"
                        }`}
                      >
                        <span>{opt.name}</span>
                        <span className="text-accent font-extrabold tabular-nums">{opt.price}€</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Range Slider for Teeth Count */}
                {!isCourseType && (
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-[0.65rem] font-extrabold uppercase tracking-widest text-hsl-muted">
                        Кількість зубів / імплантів:
                      </label>
                      <span className="font-display font-extrabold text-xl text-accent tabular-nums">
                        {teethCount}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="14"
                      value={teethCount}
                      onChange={(e) => setTeethCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-hsl-alt rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-[0.65rem] text-hsl-muted mt-2 font-bold tabular-nums">
                      <span>1 зуб</span>
                      <span>7 зубів</span>
                      <span>14 зубів (щелепа)</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Price Calculation Summary */}
              <div className="bg-hsl-dark text-white p-8 rounded-2xl flex flex-col justify-between border border-hsl-border-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-accent font-extrabold block mb-4">
                    ПІДСУМОК РОЗРАХУНКУ
                  </span>

                  <div className="mb-6">
                    <span className="text-xs text-white/70 block mb-1">Фіксована ціна клініки:</span>
                    <div className="font-display font-extrabold text-4xl sm:text-5xl text-white tabular-nums">
                      {ourTotal} €
                    </div>
                  </div>

                  <div className="mb-6 pb-6 border-b border-white/10 space-y-2 text-xs">
                    <div className="flex justify-between text-white/60">
                      <span>Ринкова ціна Мадрида:</span>
                      <span className="line-through tabular-nums">{marketTotal} €</span>
                    </div>
                    <div className="flex justify-between text-emerald-400 font-bold">
                      <span>Чиста економія:</span>
                      <span className="tabular-nums">-{totalSavings} €</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[0.68rem] text-white/70 mb-6 leading-relaxed">
                    {t("calculator.guaranteeNote") as string}
                  </p>
                  <a
                    href="#contact"
                    className="w-full block text-center bg-accent hover:bg-accent-hover text-white font-extrabold text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg transition-all"
                  >
                    Зафіксувати ціну {ourTotal}€
                  </a>
                </div>

              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
