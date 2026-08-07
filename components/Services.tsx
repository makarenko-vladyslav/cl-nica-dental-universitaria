"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

interface ServiceItem {
  id: string;
  title: string;
  price: string;
  oldPrice: string;
  category: string;
  description: string;
  imageUrl: string;
  features: string[];
  isSignature?: boolean;
  badgeTag?: string;
}

export default function Services() {
  const { t } = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>('Усі');

  const kicker = String(t('services.kicker'));
  const title = String(t('services.title'));
  const subtitle = String(t('services.subtitle'));
  const footnote = String(t('services.footnote'));
  const secondaryCta = String(t('services.secondaryCta'));
  const items = (t('services.items') as ServiceItem[]) || [];

  const categories = ['Усі', 'Хірургія', 'Ортодонтія', 'Естетика', 'Протезування', 'Терапія'];

  const filteredItems = activeCategory === 'Усі' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section id="services" className="py-20 sm:py-24 bg-[var(--color-bg-light)] text-[var(--color-text-main)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-display font-semibold uppercase tracking-widest text-[var(--color-accent)] block mb-3">
            {kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight mb-4 text-[var(--color-primary)]">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            {subtitle}
          </p>
        </Reveal>

        {/* Category Tabs Filter */}
        <Reveal delay={0.2} className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-display font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[var(--color-accent)] text-white shadow-md'
                  : 'bg-white text-[var(--color-text-muted)] border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Services Grid with Highlighted Signature Card */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((service) => {
            const isSignature = service.isSignature;

            return (
              <StaggerItem key={service.id} className="h-full">
                <div 
                  className={`rounded-2xl overflow-hidden border transition-all flex flex-col h-full group ${
                    isSignature
                      ? 'bg-[var(--color-primary)] text-white border-[var(--color-accent)] shadow-xl ring-2 ring-[var(--color-accent)]/30'
                      : 'bg-[var(--color-surface-white)] text-[var(--color-text-main)] border-[var(--color-border-subtle)] shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Photo Container */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider">
                      {service.category}
                    </div>
                    {service.badgeTag && (
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[var(--color-accent)] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                        {service.badgeTag}
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-white font-display font-extrabold text-sm border border-white/20">
                      <span className="font-mono tabular-nums text-[var(--color-accent)]">{service.price}</span>
                      {service.oldPrice && (
                        <span className="line-through text-white/50 text-xs ml-2 font-normal font-mono">
                          {service.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Name & Tabular Price Leader Row */}
                      <div className="flex items-baseline justify-between gap-2 mb-2">
                        <h3 className={`text-base font-display font-bold ${isSignature ? 'text-white' : 'text-[var(--color-primary)]'} group-hover:text-[var(--color-accent)] transition-colors`}>
                          {service.title}
                        </h3>
                      </div>
                      <p className={`text-xs ${isSignature ? 'text-white/80' : 'text-[var(--color-text-muted)]'} leading-relaxed mb-6`}>
                        {service.description}
                      </p>
                    </div>

                    <div>
                      {/* Included Features List with Leader Line Dots */}
                      <div className={`space-y-2 mb-6 pt-4 border-t ${isSignature ? 'border-white/15' : 'border-[var(--color-border-subtle)]'}`}>
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center justify-between text-xs font-medium">
                            <span className={isSignature ? 'text-white/90' : 'text-[var(--color-text-main)]'}>{feat}</span>
                            <span className={`flex-grow mx-2 border-b border-dotted ${isSignature ? 'border-white/20' : 'border-slate-300'}`} />
                            <span className="text-[var(--color-accent)] font-bold text-[10px]">ВКЛЮЧЕНО</span>
                          </div>
                        ))}
                      </div>

                      <a
                        href="#booking"
                        className={`block w-full py-3 rounded-xl font-display font-bold text-xs text-center uppercase tracking-wider transition-all ${
                          isSignature
                            ? 'bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white shadow-md'
                            : 'bg-[var(--color-accent-soft)] hover:bg-[var(--color-accent)] hover:text-white text-[var(--color-accent)]'
                        }`}
                      >
                        Записатися за {service.price}
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Footnote Line & Secondary CTA */}
        <Reveal className="pt-6 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
          <p className="italic max-w-2xl">{footnote}</p>
          <a href="#booking" className="font-display font-bold text-[var(--color-accent)] hover:underline whitespace-nowrap">
            {secondaryCta}
          </a>
        </Reveal>

      </div>
    </section>
  );
}
