"use client";
import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "./motion";

type ServiceItem = {
  id: string;
  category: string;
  title: string;
  price: string;
  oldPrice: string;
  desc: string;
  image: string;
  tag: string;
};

export default function ServicesCatalog() {
  const { t } = useLocale();
  const [activeCategory, setActiveCategory] = useState("Всі послуги");

  const categories = (t("services.categories") as string[]) || ["Всі послуги"];
  const items = (t("services.items") as ServiceItem[]) || [];

  const filteredItems = activeCategory === "Всі послуги" || activeCategory === "All Services"
    ? items
    : items.filter((item) => item.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="services" className="py-20 sm:py-28 bg-hsl-alt text-hsl-main relative overflow-hidden">
      
      {/* Decorative Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-0 font-display text-[12vw] font-black text-hsl-main/[0.025] whitespace-nowrap pointer-events-none select-none z-0"
      >
        SERVICES & RATES
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-accent block mb-2">
              {t("services.kicker") as string}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-hsl-main leading-tight mb-4">
              {t("services.title") as string}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xs sm:text-sm text-hsl-muted max-w-xl mx-auto">
              {t("services.subtitle") as string}
            </p>
          </Reveal>
        </div>

        {/* Category Filter Tabs */}
        <Reveal delay={0.3} className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white rounded-2xl border border-hsl-border-light shadow-sm">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-white shadow-md"
                    : "text-hsl-muted hover:text-hsl-main hover:bg-hsl-alt"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Highlighted Signature Row / Featured Card */}
        <Reveal delay={0.3} className="mb-12">
          <div className="bg-hsl-dark text-white rounded-3xl p-8 sm:p-10 border border-hsl-border-dark shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[0.65rem] uppercase font-bold tracking-[0.25em] text-accent bg-accent/20 px-3 py-1 rounded-full mb-4 inline-block">
                ФЛАГМАНСЬКИЙ ПАКЕТ
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
                Комплекс Імплант + Цирконієва Корона
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 max-w-2xl">
                Сертифікований імплант, абутмент, цирконієва корона, анестезія та первинне 3D КТ-сканування. Фіксується в договору без додаткових платежів.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-white/80">
                <span>Гарантія на імплант</span>
                <span>·</span>
                <span>Нагляд професора</span>
                <span>·</span>
                <span>3D Томографія включена</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-left lg:text-right">
                <span className="text-[0.65rem] uppercase text-white/50 block mb-1">Зафіксована вартість:</span>
                <span className="font-display font-extrabold text-4xl text-white tabular-nums">790€</span>
                <span className="text-xs text-white/50 line-through block font-medium tabular-nums">1400€</span>
              </div>
              <a
                href="#contact"
                className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-white font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all text-center shadow-lg"
              >
                Забронювати за 790€
              </a>
            </div>
          </div>
        </Reveal>

        {/* Services Grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((service) => (
            <StaggerItem key={service.id}>
              <div className="bg-white rounded-2xl border border-hsl-border-light overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1">
                
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden bg-hsl-dark">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('img-fallback');
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <span className="absolute top-4 left-4 bg-accent text-white text-[0.6rem] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow">
                    {service.tag}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 flex items-baseline justify-between text-white">
                    <span className="font-display font-extrabold text-2xl text-white tabular-nums">{service.price}</span>
                    <span className="text-xs text-white/60 line-through font-medium tabular-nums">{service.oldPrice}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[0.6rem] font-extrabold uppercase tracking-widest text-accent block mb-1">
                      {service.category}
                    </span>
                    <h3 className="font-display font-bold text-base text-hsl-main mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-hsl-muted leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="w-full text-center bg-hsl-alt hover:bg-accent hover:text-white text-hsl-main font-extrabold text-[0.65rem] uppercase tracking-widest py-3 rounded-xl transition-colors block"
                  >
                    Записатись за ціною {service.price}
                  </a>
                </div>

              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Footnote Line + Secondary CTA */}
        <Reveal delay={0.4} className="mt-12 text-center border-t border-hsl-border-light pt-8">
          <p className="text-xs text-hsl-muted mb-4">
            * Усі ціни вказані з урахуванням анестезії, витратних матеріалів та первинної КТ-діагностики. Жодних прихованих комісій.
          </p>
          <a
            href="#calculator"
            className="text-xs font-bold uppercase tracking-wider text-accent hover:underline"
          >
            Розрахувати точну вартість у калькуляторі
          </a>
        </Reveal>

      </div>
    </section>
  );
}
