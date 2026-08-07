"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

export default function AcademicTrust() {
  const { t } = useLocale();

  const kicker = String(t('trust.kicker'));
  const title = String(t('trust.title'));
  const subtitle = String(t('trust.subtitle'));

  const pullQuote = String(t('trust.pullQuote'));
  const stat1 = String(t('trust.stat1'));
  const stat1Label = String(t('trust.stat1Label'));
  const stat2 = String(t('trust.stat2'));
  const stat2Label = String(t('trust.stat2Label'));
  const stat3 = String(t('trust.stat3'));
  const stat3Label = String(t('trust.stat3Label'));
  const stat4 = String(t('trust.stat4'));
  const stat4Label = String(t('trust.stat4Label'));

  const namedDoctor = String(t('trust.namedDoctor'));
  const namedRole = String(t('trust.namedRole'));
  const photoCaption = String(t('trust.photoCaption'));
  const secondaryLink = String(t('trust.secondaryLink'));

  const p1Title = String(t('trust.point1Title'));
  const p1Desc = String(t('trust.point1Desc'));
  const p2Title = String(t('trust.point2Title'));
  const p2Desc = String(t('trust.point2Desc'));
  const p3Title = String(t('trust.point3Title'));
  const p3Desc = String(t('trust.point3Desc'));

  return (
    <section id="trust" className="py-20 sm:py-24 bg-[var(--color-primary)] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading Header */}
        <Reveal className="max-w-3xl mb-12">
          <span className="text-xs font-display font-semibold uppercase tracking-widest text-[var(--color-accent)] block mb-3">
            {kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight mb-4 text-white">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            {subtitle}
          </p>
        </Reveal>

        {/* Oversized Statement Line / Pull-Quote */}
        <Reveal delay={0.2} className="p-6 sm:p-8 rounded-2xl bg-white/5 border-l-4 border-[var(--color-accent)] border-y border-r border-white/10 mb-16">
          <blockquote className="text-base sm:text-xl font-display font-medium text-white italic leading-relaxed">
            «{pullQuote}»
          </blockquote>
          <div className="mt-4 flex items-center justify-between text-xs text-white/70 pt-3 border-t border-white/10">
            <span className="font-bold text-[var(--color-accent)]">{namedDoctor}</span>
            <span>{namedRole}</span>
          </div>
        </Reveal>

        {/* 4 Stat Numerals Row */}
        <Reveal delay={0.3} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-12 border-b border-white/10">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-3xl font-display font-extrabold text-[var(--color-accent)] font-mono tabular-nums">{stat1}</div>
            <div className="text-xs text-white/70 mt-1">{stat1Label}</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-3xl font-display font-extrabold text-[var(--color-accent)] font-mono tabular-nums">{stat2}</div>
            <div className="text-xs text-white/70 mt-1">{stat2Label}</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-3xl font-display font-extrabold text-[var(--color-accent)] font-mono tabular-nums">{stat3}</div>
            <div className="text-xs text-white/70 mt-1">{stat3Label}</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-3xl font-display font-extrabold text-[var(--color-accent)] font-mono tabular-nums">{stat4}</div>
            <div className="text-xs text-white/70 mt-1">{stat4Label}</div>
          </div>
        </Reveal>

        {/* 3 Pillars Grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <StaggerItem>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--color-accent)] transition-all h-full flex flex-col justify-between">
              <div>
                <div className="text-3xl font-display font-bold text-[var(--color-accent)] mb-4 font-mono">01</div>
                <h3 className="text-lg font-display font-bold text-white mb-3">
                  {p1Title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {p1Desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                Universidad de La Salle & EDE
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--color-accent)] transition-all h-full flex flex-col justify-between">
              <div>
                <div className="text-3xl font-display font-bold text-[var(--color-accent)] mb-4 font-mono">02</div>
                <h3 className="text-lg font-display font-bold text-white mb-3">
                  {p2Title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {p2Desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                Сертифікований Цирконій & Титан
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--color-accent)] transition-all h-full flex flex-col justify-between">
              <div>
                <div className="text-3xl font-display font-bold text-[var(--color-accent)] mb-4 font-mono">03</div>
                <h3 className="text-lg font-display font-bold text-white mb-3">
                  {p3Title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {p3Desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-[10px] uppercase tracking-widest text-[var(--color-accent)] font-semibold">
                Гарантія відсутності прихованих чеків
              </div>
            </div>
          </StaggerItem>
        </Stagger>

        {/* Photo Caption-with-Rule & Secondary Link */}
        <Reveal className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-white/60">
          <p className="italic">— {photoCaption}</p>
          <a href="#team" className="font-display font-bold text-[var(--color-accent)] hover:underline">
            {secondaryLink}
          </a>
        </Reveal>

      </div>
    </section>
  );
}
