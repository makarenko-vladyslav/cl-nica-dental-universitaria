"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function VideoShowcase() {
  const { t } = useLocale();

  const kicker = String(t('video.kicker'));
  const title = String(t('video.title'));
  const subtitle = String(t('video.subtitle'));
  const videoUrl = String(t('video.videoUrl'));
  const posterUrl = String(t('video.posterUrl'));

  return (
    <section className="py-20 sm:py-24 bg-[var(--color-bg-dark)] text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-display font-semibold uppercase tracking-widest text-[var(--color-accent)] block mb-3">
            {kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold mb-4 text-white">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            {subtitle}
          </p>
        </Reveal>

        {/* Video Player Frame */}
        <Reveal delay={0.2} className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
          <video
            controls
            playsInline
            poster={posterUrl}
            className="w-full h-[320px] sm:h-[500px] object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
            Ваш браузер не підтримує відтворення відео.
          </video>
        </Reveal>
      </div>
    </section>
  );
}
