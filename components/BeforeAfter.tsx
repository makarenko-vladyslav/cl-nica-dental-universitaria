"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function BeforeAfter() {
  const { t } = useLocale();

  return (
    <section id="casos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-[0.7rem] font-bold uppercase tracking-widest text-accent mb-2 block">
            {String(t("beforeAfter.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-primary mb-3">
            {String(t("beforeAfter.title"))}
          </h2>
          <p className="text-text-muted text-base">
            {String(t("beforeAfter.subtitle"))}
          </p>
        </div>

        {/* Large Evidence Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Case 1 */}
          <Reveal delay={0.1}>
            <div className="bg-bg-light rounded-xl overflow-hidden border border-primary/10 shadow-sm flex flex-col h-full">
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                <img
                  src="https://clinicadentaluniversitaria.com/wp-content/uploads/2025/10/Implante-790-768x453.jpg"
                  alt="Caso Clínico Implante y Corona"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[0.65rem] uppercase font-bold tracking-widest px-3 py-1 rounded">
                  Implante + Corona Zirconio
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-serif-display font-bold text-primary mb-2">
                    {String(t("beforeAfter.case1Title"))}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed mb-6">
                    {String(t("beforeAfter.case1Desc"))}
                  </p>
                </div>
                <div className="text-[0.7rem] text-accent font-bold uppercase tracking-wider pt-4 border-t border-primary/10">
                  Supervisado por Cátedra de Cirugía Bucal · Moncloa
                </div>
              </div>
            </div>
          </Reveal>

          {/* Case 2 */}
          <Reveal delay={0.2}>
            <div className="bg-bg-light rounded-xl overflow-hidden border border-primary/10 shadow-sm flex flex-col h-full">
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                <img
                  src="https://clinicadentaluniversitaria.com/wp-content/uploads/2025/09/INVISALIGN-FULL-768x454.jpg"
                  alt="Caso Clínico Invisalign"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-[0.65rem] uppercase font-bold tracking-widest px-3 py-1 rounded">
                  Ortodoncia Invisalign® Full
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-serif-display font-bold text-primary mb-2">
                    {String(t("beforeAfter.case2Title"))}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed mb-6">
                    {String(t("beforeAfter.case2Desc"))}
                  </p>
                </div>
                <div className="text-[0.7rem] text-accent font-bold uppercase tracking-wider pt-4 border-t border-primary/10">
                  Planificación Digital 3D Escáner iTero
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
