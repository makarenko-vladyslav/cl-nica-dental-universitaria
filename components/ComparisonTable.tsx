"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

interface RowItem {
  param: string;
  us: string;
  others: string;
}

export default function ComparisonTable() {
  const { t } = useLocale();

  const kicker = String(t('comparison.kicker'));
  const title = String(t('comparison.title'));
  const col1 = String(t('comparison.col1'));
  const col2 = String(t('comparison.col2'));
  const col3 = String(t('comparison.col3'));
  const rows = (t('comparison.rows') as RowItem[]) || [];

  return (
    <section className="py-20 sm:py-24 bg-[var(--color-bg-light)] text-[var(--color-text-main)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-display font-semibold uppercase tracking-widest text-[var(--color-accent)] block mb-3">
            {kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[var(--color-primary)]">
            {title}
          </h2>
        </Reveal>

        {/* Responsive Table */}
        <Reveal delay={0.2} className="overflow-x-auto rounded-2xl border border-[var(--color-border-subtle)] shadow-sm bg-[var(--color-surface-white)]">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[var(--color-primary)] text-white text-xs font-display uppercase tracking-wider">
                <th className="p-4 sm:p-5 w-1/3 border-b border-white/10">{col1}</th>
                <th className="p-4 sm:p-5 w-1/3 bg-[var(--color-accent)] text-white border-b border-white/10">{col2}</th>
                <th className="p-4 sm:p-5 w-1/3 border-b border-white/10">{col3}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-subtle)] text-xs sm:text-sm">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[var(--color-primary)]">
                    {row.param}
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-[var(--color-accent)] bg-[var(--color-accent-soft)]/30">
                    {row.us}
                  </td>
                  <td className="p-4 sm:p-5 text-[var(--color-text-muted)]">
                    {row.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
