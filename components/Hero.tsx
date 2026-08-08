"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-bg-dark text-white">
      {/* Layer 1: Background Video Stack with Clinical Scrim */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/6630465/clinic-dental-doctor-health-care-6630465.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover opacity-35 scale-105"
        >
          <source src="https://videos.pexels.com/video-files/6630465/6630465-hd_1366_720_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/75 to-bg-dark/50" />
      </div>

      {/* Layer 2: Giant Decorative Background Watermark Word (Zero Height Contribution) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none aria-hidden z-0">
        <span className="font-serif-display font-bold text-[15vw] leading-none text-white/[0.03] uppercase whitespace-nowrap tracking-tighter">
          UNIVERSIDAD
        </span>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        
        {/* Layer 3: Top Meta Bar Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 text-xs text-white/80 font-medium">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent-glow animate-pulse" />
            <span className="uppercase tracking-widest font-semibold text-accent-light">
              {String(t("hero.kicker"))}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[0.7rem] uppercase tracking-wider text-white/70">
            <span>Atención: L-V 09:00 - 20:00h</span>
            <span className="text-white/30">·</span>
            <span>Calle Alberto Aguilera · Moncloa</span>
            <span className="text-white/30">·</span>
            <span className="text-accent-light font-bold">Reseñas: 4.5/5★ (159 Google)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Column (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start relative">
            
            {/* Layer 4: Floating Text-Only Seal Badge */}
            <div className="hidden sm:flex absolute -top-6 -right-4 w-24 h-24 rounded-full border border-accent/40 items-center justify-center p-2 text-center pointer-events-none">
              <span className="text-[0.55rem] font-bold uppercase tracking-widest text-accent-light leading-tight animate-spin-slow">
                · CLÍNICA UNIVERSITARIA MADRID · CÁTEDRA LA SALLE ·
              </span>
            </div>

            {/* Layer 5: Display Poster H1 */}
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-bold leading-[1.08] text-white mb-6">
                {String(t("hero.h1First"))}{" "}
                <span className="italic font-normal text-accent-light block mt-2">
                  {String(t("hero.h1Italic"))}
                </span>
              </h1>
            </Reveal>

            {/* Layer 6: Lede Paragraph */}
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-white/85 font-body leading-relaxed max-w-2xl mb-8">
                {String(t("hero.subtitle"))}
              </p>
            </Reveal>

            {/* Layer 7: CTA Pair (Solid Button + Quiet Text Link) */}
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto">
                <a
                  href="#reservar"
                  className="bg-accent hover:bg-accent-glow text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded shadow-xl transition-all duration-200 text-center hover:-translate-y-0.5"
                >
                  {String(t("hero.ctaPrimary"))}
                </a>
                <a
                  href="#tratamientos"
                  className="text-white/90 hover:text-accent-light font-semibold text-xs uppercase tracking-wider py-3 transition text-center underline underline-offset-8 decoration-accent/50"
                >
                  {String(t("hero.ctaSecondary"))} →
                </a>
              </div>
            </Reveal>

            {/* Layer 8: Two Flanking Mini-Copy Columns */}
            <Reveal delay={0.4} className="mt-10 pt-6 border-t border-white/15 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-white/75 leading-relaxed">
                <div>
                  <span className="text-accent-light font-bold block mb-1 uppercase tracking-wider">Supervisión Catedrática</span>
                  Cada diagnóstico y cirugía es validado activamente por profesores titulares de posgrado.
                </div>
                <div>
                  <span className="text-accent-light font-bold block mb-1 uppercase tracking-wider">Ahorro Real Docente</span>
                  Precios universitarios hasta un 50% inferiores por ausencia de margen comercial privado.
                </div>
              </div>
            </Reveal>

          </div>

          {/* Layer 9: Offer Highlight Floating Card (5 Cols) */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative rounded-xl bg-bg-card text-text-main p-8 shadow-2xl border-2 border-accent/40">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-primary/10">
                  <span className="text-[0.65rem] uppercase tracking-widest font-bold text-accent px-3 py-1 bg-accent/10 rounded">
                    Campaña Docente 2026
                  </span>
                  <span className="text-xs text-text-muted font-bold tabular-nums">Moncloa-Aravaca</span>
                </div>

                <h3 className="text-2xl font-serif-display font-bold text-primary mb-2">
                  {String(t("hero.badgeTitle"))}
                </h3>

                <div className="flex items-baseline gap-3 my-4">
                  <span className="text-5xl font-serif-display font-bold text-accent tabular-nums">
                    790€
                  </span>
                  <span className="text-lg text-text-muted line-through tabular-nums">1.200€</span>
                  <span className="text-[0.7rem] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    -34% Tarifa
                  </span>
                </div>

                <p className="text-xs text-text-muted mb-6 leading-relaxed">
                  {String(t("hero.badgeSubtitle"))}
                </p>

                <div className="space-y-2.5 text-xs text-text-main font-semibold mb-8 border-t border-primary/10 pt-4">
                  <div className="flex items-center justify-between">
                    <span>Titanio Biomédico UE:</span>
                    <span className="text-accent">Incluido</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Corona Estética Porcelana:</span>
                    <span className="text-accent">Incluido</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Estudio Radiológico 3D TAC:</span>
                    <span className="text-accent">0€ Extra</span>
                  </div>
                </div>

                <a
                  href="#reservar"
                  className="block w-full text-center bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded shadow transition"
                >
                  Solicitar Cita con este Precio
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* Layer 10: Scroll Cue in Normal Flow (Bottom Center, Tiny Font + Short Fading Line) */}
      <div className="relative z-10 py-2 flex flex-col items-center gap-1.5 text-center pointer-events-none">
        <span className="text-[0.55rem] uppercase tracking-widest font-bold text-white/70">SCROLL</span>
        <div className="w-0.5 h-5 bg-gradient-to-b from-accent to-transparent rounded-full animate-pulse" />
      </div>
    </section>
  );
}
