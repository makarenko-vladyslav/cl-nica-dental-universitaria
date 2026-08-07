"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-hsl-dark text-white pt-20 pb-12 border-t border-hsl-border-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant Full-Width Display Wordmark Bleeding Off Edge */}
        <div className="border-b border-white/10 pb-12 mb-12 overflow-hidden">
          <span className="font-display font-extrabold text-4xl sm:text-7xl lg:text-8xl text-white/10 block tracking-tighter leading-none select-none whitespace-nowrap">
            CLÍNICA DENTAL UNIVERSITARIA MADRID
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 text-xs">
          
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center text-white font-display font-extrabold text-base">
                U
              </div>
              <span className="font-display font-extrabold text-sm">Clínica Dental Universitaria</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-4">
              {t("footer.tagline") as string}
            </p>
            <p className="text-white/40 text-[0.65rem]">
              {t("footer.academicNote") as string}
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest mb-4">Навігація</h4>
            <ul className="space-y-2.5 text-white/70">
              <li><a href="#services" className="hover:text-accent transition-colors">Послуги та ціни</a></li>
              <li><a href="#academic" className="hover:text-accent transition-colors">Університетська модель</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">Калькулятор лікування</a></li>
              <li><a href="#team" className="hover:text-accent transition-colors">Академічний склад</a></li>
              <li><a href="#reviews" className="hover:text-accent transition-colors">Відгуки пацієнтів</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest mb-4">Контакти Мадрид</h4>
            <ul className="space-y-2.5 text-white/70 tabular-nums">
              <li>Calle de Alberto Aguilera, Madrid</li>
              <li>телефон: <a href="tel:+34919898700" className="hover:text-accent font-bold">+34 919 898 700</a></li>
              <li>email: info@clinicadentaluniversitaria.es</li>
              <li>Метро: Argüelles / San Bernardo</li>
              <li>Пн–Пт: 09:00 – 20:00</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest mb-4">Соціальні мережі</h4>
            <div className="flex flex-col gap-2 mb-6 text-white/70">
              <a href="#" className="hover:text-accent transition-colors font-bold">[ INSTAGRAM ]</a>
              <a href="#" className="hover:text-accent transition-colors font-bold">[ FACEBOOK ]</a>
              <a href="#" className="hover:text-accent transition-colors font-bold">[ LINKEDIN ]</a>
            </div>
            <a
              href="#contact"
              className="inline-block bg-accent hover:bg-accent-hover text-white font-extrabold text-[0.65rem] uppercase tracking-widest px-5 py-3 rounded-xl transition-all shadow"
            >
              Записатись онлайн
            </a>
          </div>

        </div>

        {/* Legal Row with Mandatory Developer Link */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>{t("footer.rights") as string}</div>
          <div>
            <span>Розроблено </span>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-bold"
            >
              Студія Тест
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
