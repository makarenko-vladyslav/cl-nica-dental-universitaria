"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function Hero() {
  const { t } = useLocale();

  const kicker = String(t('hero.kicker'));
  const title = String(t('hero.title'));
  const titleAccentWord = String(t('hero.titleAccentWord'));
  const subtitle = String(t('hero.subtitle'));
  const ctaPrimary = String(t('hero.ctaPrimary'));
  const ctaSecondary = String(t('hero.ctaSecondary'));
  const badgeTrust = String(t('hero.badgeTrust'));
  const mediaUrl = String(t('hero.mediaUrl'));
  const posterUrl = String(t('hero.posterUrl'));

  const stat1Value = String(t('hero.stat1Value'));
  const stat1Label = String(t('hero.stat1Label'));
  const stat2Value = String(t('hero.stat2Value'));
  const stat2Label = String(t('hero.stat2Label'));
  const stat3Value = String(t('hero.stat3Value'));
  const stat3Label = String(t('hero.stat3Label'));

  const metaStripHours = String(t('hero.metaStripHours'));
  const metaStripAddress = String(t('hero.metaStripAddress'));
  const metaStripRating = String(t('hero.metaStripRating'));

  const flankLeftTitle = String(t('hero.flankLeftTitle'));
  const flankLeftText = String(t('hero.flankLeftText'));
  const flankRightTitle = String(t('hero.flankRightTitle'));
  const flankRightText = String(t('hero.flankRightText'));

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[var(--color-bg-dark)] text-white">
      {/* 1. Background Layer 1: Looping Video Clip with Dark Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterUrl}
          className="w-full h-full object-cover opacity-30 scale-105"
        >
          <source src={mediaUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark)] via-[var(--color-bg-dark)]/80 to-black/70" />
      </div>

      {/* 2. Background Layer 2: Giant Watermark Word (Zero height, pointer-events-none) */}
      <div 
        className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="text-[18vw] font-display font-black text-white/[0.03] uppercase tracking-tighter whitespace-nowrap">
          LA SALLE
        </span>
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Copy Column (Left 8 cols) */}
          <div className="lg:col-span-8">
            
            {/* Kicker with REAL Meta */}
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/40 text-[var(--color-accent)] text-[11px] font-semibold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <span>{kicker}</span>
              </div>
            </Reveal>

            {/* Multi-line Display Headline with Accent Word */}
            <Reveal delay={0.2}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] text-white mb-6">
                Стоматологія{" "}
                <span className="text-[var(--color-accent)] italic underline decoration-[var(--color-accent)]/40 underline-offset-8">
                  {titleAccentWord}
                </span>{" "}
                рівня у Мадриді за фіксованою ціною
              </h1>
            </Reveal>

            {/* Subtitle Lede */}
            <Reveal delay={0.3}>
              <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed mb-8 max-w-2xl">
                {subtitle}
              </p>
            </Reveal>

            {/* CTA Pair (Solid Button + Quiet Text Link) */}
            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-8">
                <a
                  href="#booking"
                  className="px-8 py-4 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-display font-bold text-xs uppercase tracking-wider text-center shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  {ctaPrimary}
                </a>
                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center gap-2 text-xs font-display font-bold text-white/90 hover:text-[var(--color-accent)] uppercase tracking-wider transition-colors py-2"
                >
                  <span>{ctaSecondary}</span>
                </a>
              </div>
            </Reveal>

            {/* 3-Item Meta Strip with Hairline Separators */}
            <Reveal delay={0.5}>
              <div className="inline-flex flex-wrap items-center gap-3 px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs text-white/80 backdrop-blur-sm">
                <span className="font-semibold text-white">{metaStripHours}</span>
                <span className="text-white/30">|</span>
                <span>{metaStripAddress}</span>
                <span className="text-white/30">|</span>
                <span className="text-[var(--color-accent)] font-bold">{metaStripRating}</span>
              </div>
            </Reveal>
          </div>

          {/* Right Column (4 cols): Rotating Text Seal & Flanking Mini-Copy */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-end justify-between space-y-8">
            
            {/* Text-Only Circular Seal Badge (No Glyphs) */}
            <div className="relative w-36 h-36 flex items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md p-2">
              <svg className="w-full h-full animate-rotate-slow" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="none"
                />
                <text className="text-[9.5px] font-display uppercase tracking-widest fill-[var(--color-accent)] font-bold">
                  <textPath href="#circlePath">
                    CLÍNICA DENTAL UNIVERSITARIA · MADRID ·
                  </textPath>
                </text>
              </svg>
              <div className="absolute font-display font-extrabold text-white text-xs tracking-wider text-center">
                790€
              </div>
            </div>

            {/* Flanking Mini-Copy Columns */}
            <div className="space-y-4 max-w-xs text-right border-r-2 border-[var(--color-accent)] pr-4">
              <div>
                <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider">{flankLeftTitle}</h4>
                <p className="text-[11px] text-white/60 leading-snug mt-1">{flankLeftText}</p>
              </div>
              <div className="pt-3 border-t border-white/10">
                <h4 className="text-xs font-display font-bold text-[var(--color-accent)] uppercase tracking-wider">{flankRightTitle}</h4>
                <p className="text-[11px] text-white/60 leading-snug mt-1">{flankRightText}</p>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Academic Stats Row */}
        <Reveal delay={0.6} className="mt-12 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-[var(--color-accent)] font-mono tabular-nums">{stat1Value}</div>
            <div className="text-xs text-white/70 mt-1">{stat1Label}</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-[var(--color-accent)] font-mono tabular-nums">{stat2Value}</div>
            <div className="text-xs text-white/70 mt-1">{stat2Label}</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-[var(--color-accent)] font-mono tabular-nums">{stat3Value}</div>
            <div className="text-xs text-white/70 mt-1">{stat3Label}</div>
          </div>
        </Reveal>
      </div>

      {/* Classic Scroll Cue Indicator */}
      <div className="relative z-10 text-center text-white/40 text-[9px] font-display tracking-widest uppercase flex flex-col items-center gap-1.5 mt-4">
        <span>SCROLL</span>
        <div className="w-px h-5 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
