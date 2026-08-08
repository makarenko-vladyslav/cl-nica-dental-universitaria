"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";
import { Reveal } from "@/components/motion";

export default function Calculator() {
  const { t } = useLocale();

  const [selectedServiceId, setSelectedServiceId] = useState(pricingData.services[0].id);
  const [quantity, setQuantity] = useState(1);
  const [financingMonths, setFinancingMonths] = useState(12);

  const currentService = pricingData.services.find((s) => s.id === selectedServiceId) || pricingData.services[0];

  const totalBase = currentService.basePrice * quantity;
  const totalMarket = currentService.marketPrice * quantity;
  const totalSavings = totalMarket - totalBase;

  const monthlyCost = Math.round(totalBase / financingMonths);

  return (
    <section id="calculadora" className="py-24 bg-bg-light border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-[0.7rem] font-bold uppercase tracking-widest text-accent mb-2 block">
            {String(t("calculator.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-primary mb-3">
            {String(t("calculator.title"))}
          </h2>
          <p className="text-text-muted text-base">
            {String(t("calculator.subtitle"))}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-bg-card p-8 rounded-xl shadow-sm border border-primary/10 space-y-8">
            
            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-3">
                {String(t("calculator.serviceLabel"))}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pricingData.services.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => {
                      setSelectedServiceId(srv.id);
                      setQuantity(1);
                    }}
                    className={`p-4 rounded text-left border transition ${
                      selectedServiceId === srv.id
                        ? "border-accent bg-accent/10 text-primary font-bold shadow-sm"
                        : "border-gray-200 hover:border-gray-300 text-text-main"
                    }`}
                  >
                    <div className="text-xs font-bold">{srv.name}</div>
                    <div className="text-xs text-accent font-bold mt-1 tabular-nums">
                      {srv.basePrice}€ / {srv.unit}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-primary">
                  {String(t("calculator.quantityLabel"))}
                </label>
                <span className="text-lg font-serif-display font-bold text-accent tabular-nums">
                  {quantity} {quantity === 1 ? currentService.unit : `${currentService.unit}s`}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                className="w-full accent-accent cursor-pointer"
              />
              <div className="flex justify-between text-[0.7rem] text-text-muted font-semibold mt-1">
                <span>1</span>
                <span>4</span>
                <span>8</span>
              </div>
            </div>

            {/* Financing selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                {String(t("calculator.financingLabel"))}
              </label>
              <div className="flex gap-3">
                {pricingData.financingOptions.map((opt) => (
                  <button
                    key={opt.months}
                    onClick={() => setFinancingMonths(opt.months)}
                    className={`flex-1 py-3 rounded border text-xs font-bold uppercase tracking-wider transition ${
                      financingMonths === opt.months
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-text-main border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {opt.months} Meses {opt.interestRate === 0 && "(0% Int)"}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Estimate Display Card (5 Cols) */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-primary text-white rounded-xl p-8 shadow-xl border border-accent/30 relative">
                
                <div className="text-[0.65rem] uppercase tracking-widest font-bold text-accent-light mb-2">
                  {String(t("calculator.estimatedTitle"))}
                </div>

                <div className="text-5xl font-serif-display font-bold text-accent-light mb-2 tabular-nums">
                  {totalBase}€
                </div>

                <div className="text-xs text-white/70 mb-6 flex items-center gap-2">
                  <span>En clínicas comerciales:</span>
                  <span className="line-through text-white/50 tabular-nums">{totalMarket}€</span>
                  <span className="text-emerald-400 font-bold tabular-nums">Ahorro: {totalSavings}€</span>
                </div>

                {/* Financing Box */}
                <div className="bg-white/10 rounded p-4 mb-6 backdrop-blur-sm border border-white/10">
                  <div className="text-[0.7rem] uppercase tracking-wider text-white/80 mb-1">Cuota mensual estimada ({financingMonths} meses):</div>
                  <div className="text-3xl font-serif-display font-bold text-white tabular-nums">
                    {monthlyCost}€ <span className="text-xs font-normal text-white/70">/ mes</span>
                  </div>
                </div>

                <p className="text-xs text-white/80 leading-relaxed mb-8">
                  {String(t("calculator.includesText"))}
                </p>

                <a
                  href="#reservar"
                  className="block w-full text-center bg-accent hover:bg-accent-glow text-white font-bold text-xs uppercase tracking-widest py-4 rounded shadow transition"
                >
                  {String(t("calculator.bookCalcCta"))}
                </a>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
