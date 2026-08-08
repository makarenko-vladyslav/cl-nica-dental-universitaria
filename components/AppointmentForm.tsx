"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function AppointmentForm() {
  const { t } = useLocale();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="reservar" className="py-24 bg-primary text-white relative overflow-hidden">
      
      {/* Decorative Radial Background Glow (Non-Neutral Ground) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Layer 1, 2, 3: Kicker, Invitation Heading, Lede */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[0.7rem] font-bold uppercase tracking-widest text-accent-light block">
              {String(t("bookingForm.kicker"))}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold leading-tight">
              {String(t("bookingForm.title"))}
            </h2>
            <p className="text-white/85 text-base leading-relaxed">
              {String(t("bookingForm.subtitle"))}
            </p>

            {/* Structured Hours Mini Table */}
            <div className="space-y-2 pt-4 border-t border-white/10 text-xs font-semibold text-white/90">
              <div className="text-accent-light font-bold uppercase tracking-wider mb-2">Horarios Asistenciales:</div>
              <div className="flex justify-between">
                <span>Lunes a Viernes:</span>
                <span className="tabular-nums">09:00 - 20:00h</span>
              </div>
              <div className="flex justify-between">
                <span>Sábados:</span>
                <span>Cita Previa</span>
              </div>
            </div>

            {/* Address & Map Line */}
            <div className="pt-2 text-xs text-white/75 leading-relaxed">
              <span className="font-bold text-white block">Ubicación:</span>
              Calle de Alberto Aguilera, Madrid — Metro Argüelles / Moncloa
            </div>

            {/* Layer 4: Direct Phone Link */}
            <div className="pt-2">
              <a href="tel:+34919898700" className="text-xs font-bold uppercase tracking-wider text-accent-light underline underline-offset-4">
                O llama directamente al +34 919 898 700 →
              </a>
            </div>
          </div>

          {/* Solid White Form Card */}
          <div className="lg:col-span-7 bg-white text-text-main p-8 sm:p-10 rounded-xl shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[0.65rem] font-bold text-primary uppercase tracking-wider mb-1.5">
                      {String(t("bookingForm.fieldName"))}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Ana García"
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.65rem] font-bold text-primary uppercase tracking-wider mb-1.5">
                      {String(t("bookingForm.fieldPhone"))}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+34 600 000 000"
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[0.65rem] font-bold text-primary uppercase tracking-wider mb-1.5">
                      {String(t("bookingForm.fieldEmail"))}
                    </label>
                    <input
                      type="email"
                      placeholder="correo@ejemplo.com"
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.65rem] font-bold text-primary uppercase tracking-wider mb-1.5">
                      {String(t("bookingForm.fieldService"))}
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-xs bg-white"
                    >
                      <option value="">Selecciona un tratamiento...</option>
                      <option value="implante">Implante + Corona (790€)</option>
                      <option value="invisalign">Ortodoncia Invisalign® Full (2.850€)</option>
                      <option value="ortodoncia">Ortodoncia Brackets (1.290€)</option>
                      <option value="estetica">Carillas Estéticas / Blanqueamiento</option>
                      <option value="revision">Valoración / Odontología General</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[0.65rem] font-bold text-primary uppercase tracking-wider mb-1.5">
                    {String(t("bookingForm.fieldDate"))}
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[0.65rem] font-bold text-primary uppercase tracking-wider mb-1.5">
                    {String(t("bookingForm.fieldComments"))}
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe brevemente tus dudas o necesidades asistenciales..."
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent hover:bg-accent-glow text-white font-bold text-xs uppercase tracking-widest py-4 rounded shadow transition hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {loading ? String(t("bookingForm.submitting")) : String(t("bookingForm.submitBtn"))}
                </button>

                {/* Layer 7: Trust Micro-line */}
                <p className="text-[0.65rem] text-text-muted text-center pt-2">
                  100% Confidencialidad Médica RGPD · Estudio 3D TAC Incluido · Sin compromiso financiero
                </p>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-serif-display font-bold text-primary">
                  {String(t("bookingForm.successTitle"))}
                </h3>
                <p className="text-text-muted text-xs max-w-md mx-auto leading-relaxed">
                  {String(t("bookingForm.successDesc"))}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-accent underline"
                >
                  Solicitar otra cita
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
