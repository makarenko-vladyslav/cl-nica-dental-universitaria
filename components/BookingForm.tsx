"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function BookingForm() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);

  const kicker = String(t('booking.kicker'));
  const title = String(t('booking.title'));
  const subtitle = String(t('booking.subtitle'));

  const nameLabel = String(t('booking.nameLabel'));
  const namePlaceholder = String(t('booking.namePlaceholder'));
  const phoneLabel = String(t('booking.phoneLabel'));
  const phonePlaceholder = String(t('booking.phonePlaceholder'));
  const serviceLabel = String(t('booking.serviceLabel'));
  const dateLabel = String(t('booking.dateLabel'));
  const commentLabel = String(t('booking.commentLabel'));
  const submitButton = String(t('booking.submitButton'));
  const successMessage = String(t('booking.successMessage'));
  const guaranteeText = String(t('booking.guaranteeText'));
  const directPhoneLabel = String(t('booking.directPhoneLabel'));

  const navPhone = String(t('nav.phone'));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 sm:py-24 bg-[var(--color-primary)] text-white relative overflow-hidden">
      
      {/* Background Watermark Type Layer */}
      <div 
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="text-[16vw] font-display font-black text-white/[0.02] uppercase tracking-tighter whitespace-nowrap">
          RESERVA
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Form Container Card */}
        <Reveal className="bg-[var(--color-bg-dark)] rounded-3xl border border-white/10 p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-display font-semibold uppercase tracking-widest text-[var(--color-accent)] block mb-3">
              {kicker}
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold mb-4 text-white">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)] text-center animate-fadeIn">
              <div className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-accent)] mb-3">
                ЗАЯВКА ПРИЙНЯТА
              </div>
              <p className="text-sm text-white/90 leading-relaxed max-w-md mx-auto">
                {successMessage}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-white/80 mb-2">
                    {nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={namePlaceholder}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 text-xs sm:text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-white/80 mb-2">
                    {phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={phonePlaceholder}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 text-xs sm:text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-white/80 mb-2">
                    {serviceLabel}
                  </label>
                  <select className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-white/15 text-white text-xs sm:text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors">
                    <option value="implant">Комплексна імплантація + Корона (790€)</option>
                    <option value="invisalign">Елайнери Invisalign Full (2 850€)</option>
                    <option value="brackets">Керамічні брекети (1 290€)</option>
                    <option value="veneers">Вініри E-max (290€)</option>
                    <option value="consult">Первинний огляд + 3D КТ (0€)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-white/80 mb-2">
                    {dateLabel}
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs sm:text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-display font-bold uppercase tracking-wider text-white/80 mb-2">
                  {commentLabel}
                </label>
                <textarea
                  rows={3}
                  placeholder="Опишіть симптоми чи зручні часові інтервали..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 text-xs sm:text-sm focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-display font-bold text-sm uppercase tracking-wider shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                {submitButton}
              </button>

              {/* Direct Telephone Link & Micro-Table */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/50">{directPhoneLabel}</span>
                  <a href={`tel:${navPhone.replace(/\s+/g, '')}`} className="font-display font-bold text-[var(--color-accent)] hover:underline text-sm">
                    {navPhone}
                  </a>
                </div>
                <div className="text-right text-[11px] font-mono">
                  <span>Пн-Пт: 09:00 - 20:00</span>
                  <span className="block text-white/50">Субота: 10:00 - 14:00</span>
                </div>
              </div>

              <p className="text-[10px] text-center text-white/40 pt-2">
                {guaranteeText}
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
