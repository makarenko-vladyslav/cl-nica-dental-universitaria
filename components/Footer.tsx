"use client";

import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();

  const wordmark = String(t('footer.wordmark'));
  const aboutText = String(t('footer.aboutText'));
  const col1Title = String(t('footer.col1Title'));
  const col2Title = String(t('footer.col2Title'));
  const col3Title = String(t('footer.col3Title'));
  const rights = String(t('footer.rights'));
  const devCredit = String(t('footer.devCredit'));
  const academicBrandNote = String(t('footer.academicBrandNote'));

  const navPhone = String(t('nav.phone'));
  const navAddress = String(t('nav.address'));

  return (
    <footer className="bg-[var(--color-bg-dark)] text-white pt-20 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* 4 Columns Footer Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Academic Statement */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)] flex items-center justify-center text-white font-bold font-display text-xs">
                CDU
              </div>
              <span className="font-display font-bold text-lg text-white">
                Clínica Dental Universitaria
              </span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              {aboutText}
            </p>
            <p className="text-[11px] font-semibold text-[var(--color-accent)] uppercase tracking-wider">
              — {academicBrandNote}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-[var(--color-accent)]">
              {col1Title}
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">{String(t('nav.services'))}</a></li>
              <li><a href="#trust" className="hover:text-white transition-colors">{String(t('nav.trust'))}</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">{String(t('nav.calculator'))}</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">{String(t('nav.team'))}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{String(t('nav.faq'))}</a></li>
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-[var(--color-accent)]">
              {col2Title}
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>Імплантація + Корона 790€</li>
              <li>Invisalign Full 2 850€</li>
              <li>Кераміка брекети 1 290€</li>
              <li>Вініри E-max 290€</li>
              <li>3D КТ Діагностика 0€</li>
            </ul>
          </div>

          {/* Col 4: Contacts & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-[var(--color-accent)]">
              {col3Title}
            </h4>
            <p className="text-xs text-white/80 leading-relaxed">
              {navAddress}
            </p>
            <a href={`tel:${navPhone.replace(/\s+/g, '')}`} className="block text-sm font-display font-bold text-[var(--color-accent)] hover:underline">
              {navPhone}
            </a>
            <div className="text-[11px] text-white/50 space-y-1 font-mono pt-1">
              <p>Пн — Пт: 09:00 - 20:00</p>
              <p>Субота: 10:00 - 14:00</p>
            </div>
            
            {/* Social Text Links */}
            <div className="pt-2 flex items-center gap-3 text-[11px] text-white/60 font-semibold">
              <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Instagram</a>
              <span>·</span>
              <a href="#" className="hover:text-[var(--color-accent)] transition-colors">LinkedIn</a>
              <span>·</span>
              <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Google Maps</a>
            </div>
          </div>

        </div>

        {/* Giant Typographic Wordmark Banner (Bleeding visually) */}
        <div className="py-8 border-b border-white/10 text-center overflow-hidden">
          <span className="font-display font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter text-white/10 uppercase select-none block whitespace-nowrap">
            {wordmark}
          </span>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
          <div>
            {rights}
          </div>
          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors underline decoration-white/20"
            >
              {devCredit}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
