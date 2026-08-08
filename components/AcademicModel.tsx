"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function AcademicModel() {
  const { t } = useLocale();

  return (
    <section id="modelo-academico" className="py-24 bg-bg-light relative overflow-hidden">
      
      {/* Decorative Watermark Background Word */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none aria-hidden z-0">
        <span className="font-serif-display font-bold text-[18vw] leading-none text-primary/[0.02] uppercase whitespace-nowrap">
          CÁTEDRA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layer 1 & 2: Kicker + Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-[0.7rem] font-bold uppercase tracking-widest text-accent mb-2 block">
            {String(t("academicModel.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-primary leading-tight">
            {String(t("academicModel.title"))}
          </h2>
        </div>

        {/* Layer 3: Oversized Pull Quote Statement Line */}
        <Reveal delay={0.1} className="mb-12 p-8 rounded-xl bg-primary text-white shadow-xl relative overflow-hidden">
          <div className="font-serif-display text-xl sm:text-2xl italic leading-relaxed text-accent-light max-w-4xl">
            “La medicina bucodental no debe responder a dinámicas de especulación financiera, sino a un rigor científico y asistencial de acceso social.”
          </div>
          <div className="mt-4 text-xs font-bold uppercase tracking-widest text-white/70">
            — Declaración de Principios de la Clínica Universitaria
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text & Body Copy (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-text-main font-body text-base leading-relaxed">
            <Reveal delay={0.2}>
              <p className="font-bold text-primary text-lg leading-snug">
                {String(t("academicModel.lead"))}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p>{String(t("academicModel.p1"))}</p>
            </Reveal>

            <Reveal delay={0.4}>
              <p>{String(t("academicModel.p2"))}</p>
            </Reveal>

            {/* Layer 7: Doctor Caption with Rule */}
            <Reveal delay={0.5} className="pt-4 border-t border-primary/10">
              <div className="text-xs font-bold text-primary uppercase tracking-wider">
                Dr. Juan Carlos Vara — Director Cátedra de Cirugía Bucal
              </div>
              <p className="text-xs text-text-muted mt-1">
                Supervisión médica directa en Calle de Alberto Aguilera · Moncloa-Aravaca
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <a
                href="#cuadro-medico"
                className="inline-block text-xs font-bold uppercase tracking-widest text-accent hover:text-primary transition underline underline-offset-4"
              >
                Conocer el Cuadro Médico Docente →
              </a>
            </Reveal>
          </div>

          {/* Layer 8 & 9: Typographic Badge Cluster + Stat Row Panel (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Typographic Composition replacing stock image */}
            <Reveal delay={0.3}>
              <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white bg-primary text-white p-8 flex flex-col justify-between aspect-[4/3]">
                <div className="absolute top-0 right-0 p-8 text-accent-light/10 font-serif-display font-bold text-8xl leading-none select-none">
                  3D
                </div>
                <div>
                  <span className="text-[0.68rem] font-bold uppercase tracking-widest text-accent-light block mb-2">
                    EXCELENCIA CLÍNICA Y DOCENTE
                  </span>
                  <h3 className="font-serif-display text-2xl font-bold text-white">
                    Gabinete Quirúrgico Universitario
                  </h3>
                </div>
                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-accent-light">
                  <span>MONCLOA · MADRID</span>
                  <span>EST. 2018</span>
                </div>
              </div>
            </Reveal>

            {/* Layer 6: Stat Row with 4 Real Numerals */}
            <Reveal delay={0.4}>
              <div className="bg-primary text-white rounded-xl p-6 shadow-xl grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-serif-display font-bold text-accent-light tabular-nums">50%</div>
                  <div className="text-[0.68rem] text-white/80 font-medium uppercase tracking-wider mt-1">Ahorro Medio Madrid</div>
                </div>
                <div>
                  <div className="text-3xl font-serif-display font-bold text-accent-light tabular-nums">100%</div>
                  <div className="text-[0.68rem] text-white/80 font-medium uppercase tracking-wider mt-1">Supervisión Cátedra</div>
                </div>
                <div>
                  <div className="text-3xl font-serif-display font-bold text-accent-light tabular-nums">159+</div>
                  <div className="text-[0.68rem] text-white/80 font-medium uppercase tracking-wider mt-1">Reseñas (4.5★)</div>
                </div>
                <div>
                  <div className="text-3xl font-serif-display font-bold text-accent-light tabular-nums">2018</div>
                  <div className="text-[0.68rem] text-white/80 font-medium uppercase tracking-wider mt-1">Año de Apertura</div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
