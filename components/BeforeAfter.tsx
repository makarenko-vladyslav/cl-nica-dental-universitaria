"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

interface CaseItem {
  title: string;
  detail: string;
  imageUrl: string;
}

export default function BeforeAfter() {
  const { t } = useLocale();

  const kicker = String(t('beforeAfter.kicker'));
  const title = String(t('beforeAfter.title'));
  const subtitle = String(t('beforeAfter.subtitle'));
  const cases = (t('beforeAfter.cases') as CaseItem[]) || [];

  return (
    <section className="py-20 sm:py-24 bg-[var(--color-bg-light)] text-[var(--color-text-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-display font-semibold uppercase tracking-widest text-[var(--color-accent)] block mb-3">
            {kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[var(--color-primary)] mb-4">
            {title}
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            {subtitle}
          </p>
        </Reveal>

        {/* Clinical Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.15}>
              <div className="bg-[var(--color-surface-white)] rounded-2xl overflow-hidden border border-[var(--color-border-subtle)] shadow-sm">
                <div className="relative h-64 sm:h-80 bg-slate-100 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider">
                    Клінічний кейс #{idx + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-display font-bold text-[var(--color-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
