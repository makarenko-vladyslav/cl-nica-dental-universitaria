"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const { t } = useLocale();

  const kicker = String(t('faq.kicker'));
  const title = String(t('faq.title'));
  const items = (t('faq.items') as FAQItem[]) || [];

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[var(--color-accent-soft)]/30 text-[var(--color-text-main)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-display font-semibold uppercase tracking-widest text-[var(--color-accent)] block mb-3">
            {kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[var(--color-primary)]">
            {title}
          </h2>
        </Reveal>

        {/* Native Accordion Details List */}
        <div className="space-y-4">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <details className="group bg-[var(--color-surface-white)] rounded-2xl border border-[var(--color-border-subtle)] p-6 shadow-sm [&_summary::-webkit-details-marker]:none">
                <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-sm sm:text-base text-[var(--color-primary)] group-open:text-[var(--color-accent)] transition-colors">
                  <span>{item.q}</span>
                  <span className="ml-4 font-mono text-lg font-normal group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border-subtle)] pt-4">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
