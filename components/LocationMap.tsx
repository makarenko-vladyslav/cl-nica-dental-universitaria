"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function LocationMap() {
  const { t } = useLocale();

  const kicker = String(t('location.kicker'));
  const title = String(t('location.title'));

  const addressTitle = String(t('location.addressTitle'));
  const addressText = String(t('location.addressText'));
  const hoursTitle = String(t('location.hoursTitle'));
  const hoursText = String(t('location.hoursText'));
  const phoneTitle = String(t('location.phoneTitle'));
  const phoneText = String(t('location.phoneText'));
  const metroText = String(t('location.metroText'));

  return (
    <section className="py-20 sm:py-24 bg-[var(--color-bg-light)] text-[var(--color-text-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-display font-semibold uppercase tracking-widest text-[var(--color-accent)] block mb-3">
            {kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[var(--color-primary)]">
            {title}
          </h2>
        </Reveal>

        {/* Map & Address Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card */}
          <Reveal className="lg:col-span-5 bg-[var(--color-surface-white)] p-8 rounded-3xl border border-[var(--color-border-subtle)] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-[var(--color-accent)] block mb-1">
                  {addressTitle}
                </span>
                <p className="text-sm font-semibold text-[var(--color-primary)]">
                  {addressText}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  {metroText}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-[var(--color-accent)] block mb-1">
                  {hoursTitle}
                </span>
                <p className="text-xs text-[var(--color-text-main)] whitespace-pre-line leading-relaxed">
                  {hoursText}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-[var(--color-accent)] block mb-1">
                  {phoneTitle}
                </span>
                <a
                  href={`tel:${phoneText.replace(/\s+/g, '')}`}
                  className="text-lg font-display font-extrabold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {phoneText}
                </a>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Calle+de+Alberto+Aguilera,+Madrid"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3.5 rounded-xl bg-[var(--color-primary)] text-white font-display font-bold text-xs text-center uppercase tracking-wider hover:bg-[var(--color-primary-light)] transition-colors"
            >
              Відкрити на Google Maps ↗
            </a>
          </Reveal>

          {/* Embedded Google Maps Frame */}
          <Reveal delay={0.2} className="lg:col-span-7 rounded-3xl overflow-hidden border border-[var(--color-border-subtle)] shadow-sm min-h-[360px]">
            <iframe
              src="https://www.google.com/maps?q=Calle+de+Alberto+Aguilera,+Madrid&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clínica Dental Universitaria Madrid Location"
              className="w-full h-full min-h-[360px]"
            />
          </Reveal>

        </div>
      </div>
    </section>
  );
}
