"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import pricingData from '@/lib/pricing.json';
import { Reveal } from '@/components/motion';

export default function Calculator() {
  const { t } = useLocale();

  const [selectedService, setSelectedService] = useState<string>('implant');
  const [quantity, setQuantity] = useState<number>(1);
  const [includeSedation, setIncludeSedation] = useState<boolean>(false);

  const kicker = String(t('calculator.kicker'));
  const title = String(t('calculator.title'));
  const subtitle = String(t('calculator.subtitle'));
  const serviceLabel = String(t('calculator.serviceLabel'));
  const quantityLabel = String(t('calculator.quantityLabel'));
  const addonsLabel = String(t('calculator.addonsLabel'));
  const totalEstimateLabel = String(t('calculator.totalEstimateLabel'));
  const disclaimer = String(t('calculator.disclaimer'));

  const currentServiceObj = pricingData.baseServices[selectedService as keyof typeof pricingData.baseServices] || pricingData.baseServices.implant;
  
  const baseCost = currentServiceObj.basePrice * quantity;
  const sedationCost = includeSedation ? pricingData.addons.sedation.price : 0;
  const totalCost = baseCost + sedationCost;

  return (
    <section id="calculator" className="py-20 sm:py-24 bg-[var(--color-accent-soft)]/50 text-[var(--color-text-main)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-display font-semibold uppercase tracking-widest text-[var(--color-accent)] block mb-3">
            {kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[var(--color-primary)] mb-4">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
            {subtitle}
          </p>
        </Reveal>

        {/* Interactive Card */}
        <Reveal delay={0.2} className="bg-[var(--color-surface-white)] p-6 sm:p-10 rounded-3xl border border-[var(--color-border-subtle)] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-display font-bold uppercase tracking-wider text-[var(--color-primary)] mb-3">
                  {serviceLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(pricingData.baseServices).map(([key, service]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedService(key)}
                      className={`p-4 rounded-xl text-left border text-xs font-medium transition-all ${
                        selectedService === key
                          ? 'border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-primary)] shadow-sm'
                          : 'border-[var(--color-border-subtle)] hover:border-slate-300 text-[var(--color-text-muted)]'
                      }`}
                    >
                      <div className="font-display font-bold text-sm text-[var(--color-primary)] mb-1">
                        {service.name}
                      </div>
                      <div className="text-[var(--color-accent)] font-bold">
                        від {service.basePrice}€
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Range Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-display font-bold uppercase tracking-wider text-[var(--color-primary)]">
                    {quantityLabel}
                  </label>
                  <span className="text-lg font-display font-extrabold text-[var(--color-accent)]">
                    {quantity}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-[var(--color-accent)] cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-[var(--color-text-muted)] mt-2 font-mono">
                  <span>1 елемент</span>
                  <span>3 елементи</span>
                  <span>6 елементів</span>
                </div>
              </div>

              {/* Included Addons Checklist */}
              <div>
                <label className="block text-xs font-display font-bold uppercase tracking-wider text-[var(--color-primary)] mb-3">
                  {addonsLabel}
                </label>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>3D КТ та інтраоральне сканування щелепи (0€ — у подарунок)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Консиліум з викладачем Universidad de La Salle (0€ — включено)</span>
                  </div>
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-[var(--color-border-subtle)] hover:bg-slate-50 cursor-pointer text-xs font-medium text-[var(--color-text-main)] transition-colors">
                    <input
                      type="checkbox"
                      checked={includeSedation}
                      onChange={(e) => setIncludeSedation(e.target.checked)}
                      className="accent-[var(--color-accent)] w-4 h-4 rounded"
                    />
                    <span>Додати релакс-протокол / комп'ютерну седацію (+120€)</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Summary Panel */}
            <div className="lg:col-span-5 bg-[var(--color-primary)] text-white p-8 rounded-2xl flex flex-col justify-between h-full min-h-[320px]">
              <div>
                <span className="text-[10px] font-display uppercase tracking-widest text-[var(--color-accent)] block mb-2">
                  ФІКСОВАНИЙ РОЗРАХУНОК
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  {currentServiceObj.name}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  {currentServiceObj.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/15">
                <span className="text-xs text-white/70 uppercase tracking-wider block mb-1">
                  {totalEstimateLabel}
                </span>
                <div className="text-4xl sm:text-5xl font-display font-extrabold text-[var(--color-accent)] mb-4">
                  {totalCost}€
                </div>
                <p className="text-[10px] text-white/60 leading-tight mb-6">
                  {disclaimer}
                </p>
                <a
                  href="#booking"
                  className="block w-full py-4 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-display font-bold text-xs text-center uppercase tracking-wider shadow-md transition-all"
                >
                  Зафіксувати цю ціну у клініці
                </a>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
