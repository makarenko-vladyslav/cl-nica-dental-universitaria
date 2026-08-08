"use client";

import { useLocale } from "@/lib/i18n";

export default function LocationSection() {
  const { t } = useLocale();

  return (
    <section id="ubicacion" className="py-24 bg-bg-light border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-[0.7rem] font-bold uppercase tracking-widest text-accent mb-2 block">
            {String(t("location.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-primary">
            {String(t("location.title"))}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Details Card (5 Cols) */}
          <div className="lg:col-span-5 bg-bg-card p-8 rounded-xl border border-primary/10 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-[0.65rem] uppercase font-bold tracking-widest text-accent mb-1">
                  Ubicación Principal
                </h3>
                <p className="font-serif-display text-xl font-bold text-primary">
                  {String(t("location.address"))}
                </p>
                <p className="text-xs text-text-muted mt-1">
                  {String(t("location.metro"))}
                </p>
              </div>

              {/* Structured Hours Mini Table */}
              <div>
                <h3 className="text-[0.65rem] uppercase font-bold tracking-widest text-accent mb-2">
                  Horario de Atención
                </h3>
                <div className="space-y-1.5 text-xs font-semibold text-text-main border-t border-primary/10 pt-2">
                  <div className="flex justify-between">
                    <span>Lunes a Viernes:</span>
                    <span className="text-primary tabular-nums">09:00 - 20:00h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="text-primary">Cita Previa</span>
                  </div>
                  <div className="flex justify-between text-text-muted">
                    <span>Domingos y Festivos:</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[0.65rem] uppercase font-bold tracking-widest text-accent mb-1">
                  Atención Telefónica
                </h3>
                <p className="text-base font-bold text-primary tabular-nums">
                  {String(t("location.phone"))}
                </p>
                <p className="text-xs text-text-muted">
                  {String(t("location.email"))}
                </p>
              </div>

              <div className="p-4 rounded bg-accent/10 text-xs font-semibold text-primary leading-relaxed">
                {String(t("location.coverage"))}
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Calle+de+Alberto+Aguilera+Madrid"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-widest py-3 rounded transition"
            >
              Abrir en Google Maps
            </a>
          </div>

          {/* Map Embed (7 Cols) */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-primary/10 shadow-sm min-h-[350px]">
            <iframe
              src="https://www.google.com/maps?q=Calle+de+Alberto+Aguilera+Madrid&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Clínica Dental Universitaria"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
