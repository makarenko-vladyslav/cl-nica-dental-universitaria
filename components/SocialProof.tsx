"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function SocialProof() {
  const { t } = useLocale();

  const kicker = String(t('socialProof.kicker'));
  const headline = String(t('socialProof.headline'));
  const items = (t('socialProof.items') as string[]) || [];

  return (
    <section className="py-12 bg-[var(--color-primary)] text-white border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-8">
          <span className="text-[10px] font-display font-semibold uppercase tracking-widest text-[var(--color-accent)] block mb-2">
            {kicker}
          </span>
          <h2 className="text-lg sm:text-xl font-display font-bold text-white">
            {headline}
          </h2>
        </Reveal>

        {/* Infinite Ticker Marquee Strip */}
        <div className="relative w-full overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {items.concat(items).map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 mx-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/90"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
