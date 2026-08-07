"use client";
import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function InteractiveBookingForm() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Імплантація (790€)");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-hsl-dark text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Invitation & Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Reveal>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-accent block mb-2">
                  {t("bookingForm.kicker") as string}
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                  Забронюйте час 3D-діагностики та консультації професора
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-8">
                  Первинний огляд, комп'ютерна томографія та складання плану лікування включені.
                </p>
              </Reveal>
            </div>

            {/* Structured Hours & Address Info */}
            <Reveal delay={0.3} className="space-y-4 border-t border-white/10 pt-6">
              <div className="text-xs text-white/80">
                <span className="font-bold text-white block uppercase tracking-wider text-[0.65rem] text-accent mb-1">ГРАФІК ПРИЙОМУ:</span>
                <p className="tabular-nums">Пн – Пт: 09:00 – 20:00 · Сб: за записом</p>
              </div>
              <div className="text-xs text-white/80">
                <span className="font-bold text-white block uppercase tracking-wider text-[0.65rem] text-accent mb-1">АДРЕСА КЛІНІКИ:</span>
                <p>Calle de Alberto Aguilera, Madrid · Moncloa-Aravaca</p>
              </div>
              <div className="text-xs text-white/80">
                <span className="font-bold text-white block uppercase tracking-wider text-[0.65rem] text-accent mb-1">ПРЯМИЙ ЗВ'ЯЗОК:</span>
                <a href="tel:+34919898700" className="text-accent hover:underline font-bold tabular-nums">+34 919 898 700</a>
              </div>
            </Reveal>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <Reveal delay={0.3}>
              <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500 text-white font-bold text-2xl flex items-center justify-center mx-auto mb-6">
                      OK
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-2">Заявку успішно прийнято!</h3>
                    <p className="text-xs text-white/80 max-w-md mx-auto">
                      {t("bookingForm.successMsg") as string}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[0.65rem] font-bold uppercase tracking-widest text-white/80 mb-2">
                        Прізвище та ім'я *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t("bookingForm.namePlaceholder") as string}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-accent"
                      />
                    </div>

                    <div>
                      <label className="block text-[0.65rem] font-bold uppercase tracking-widest text-white/80 mb-2">
                        Номер телефону *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t("bookingForm.phonePlaceholder") as string}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-accent tabular-nums"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[0.65rem] font-bold uppercase tracking-widest text-white/80 mb-2">
                          Послуга
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full bg-hsl-dark border border-white/20 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-accent"
                        >
                          <option value="Імплантація (790€)">Імплантація (790€)</option>
                          <option value="Invisalign (2850€)">Invisalign Full (2850€)</option>
                          <option value="Ортодонтія (1290€)">Металеві брекети (1290€)</option>
                          <option value="3D Консультація (0€)">Консультація та 3D Scan (0€)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[0.65rem] font-bold uppercase tracking-widest text-white/80 mb-2">
                          Бажана дата
                        </label>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-accent hover:bg-accent-hover text-white font-extrabold text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg transition-all"
                    >
                      {loading ? "Обробка..." : (t("bookingForm.submitBtn") as string)}
                    </button>

                    <p className="text-[0.65rem] text-center text-white/60">
                      {t("bookingForm.guaranteeText") as string}
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
