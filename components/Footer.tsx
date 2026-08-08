"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-bg-dark text-white pt-20 pb-12 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layer 1: Giant Full-Width Brand Wordmark Bleeding off Edge */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <div className="font-serif-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white/95 uppercase">
            Clínica Dental Universitaria
          </div>
          <p className="text-accent-light text-xs mt-3 max-w-2xl font-body leading-relaxed opacity-90">
            {String(t("footer.brandDesc"))}
          </p>
        </div>

        {/* 4 Columns Nav & Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-xs">
          
          {/* Nav Column */}
          <div>
            <h4 className="font-serif-display font-bold text-white text-sm mb-4">
              {String(t("footer.col1Title"))}
            </h4>
            <ul className="space-y-2.5 text-white/70">
              <li><a href="#tratamientos" className="hover:text-accent transition">Implante + Corona Cerámica (790€)</a></li>
              <li><a href="#tratamientos" className="hover:text-accent transition">Ortodoncia Invisalign® Full (2.850€)</a></li>
              <li><a href="#tratamientos" className="hover:text-accent transition">Ortodoncia Brackets (1.290€)</a></li>
              <li><a href="#tratamientos" className="hover:text-accent transition">Estética y Carillas de Porcelana</a></li>
              <li><a href="#tratamientos" className="hover:text-accent transition">Endodoncia bajo Microscopio</a></li>
            </ul>
          </div>

          {/* Academic Guarantees */}
          <div>
            <h4 className="font-serif-display font-bold text-white text-sm mb-4">
              {String(t("footer.col2Title"))}
            </h4>
            <ul className="space-y-2.5 text-white/70">
              <li>Supervisión Catedrática la Salle</li>
              <li>Materiales de Titanio Biocompatible UE</li>
              <li>Garantía Académica Escrita</li>
              <li>Diagnóstico Radiológico 3D TAC</li>
            </ul>
          </div>

          {/* Contact Column (Separate lines) */}
          <div>
            <h4 className="font-serif-display font-bold text-white text-sm mb-4">
              {String(t("footer.col3Title"))}
            </h4>
            <div className="space-y-2 text-white/70">
              <p>Calle de Alberto Aguilera, Madrid</p>
              <p>Moncloa - Aravaca - Chamberí</p>
              <p className="text-accent font-bold tabular-nums">+34 919 898 700</p>
              <p>info@clinicadentaluniversitaria.com</p>
            </div>
          </div>

          {/* Hours & Social Text Links Row */}
          <div>
            <h4 className="font-serif-display font-bold text-white text-sm mb-4">
              Horario & Redes
            </h4>
            <p className="text-white/70 leading-relaxed mb-4">
              Lunes a Viernes: 09:00 - 20:00h<br />Sábados: Cita Previa
            </p>
            
            {/* Layer 5: Social Text Links Only */}
            <div className="flex flex-wrap gap-3 text-[0.65rem] font-bold uppercase tracking-wider text-accent-light pt-2">
              <a href="#" className="hover:underline">Instagram</a>
              <span>·</span>
              <a href="#" className="hover:underline">LinkedIn</a>
              <span>·</span>
              <a href="#" className="hover:underline">Google Maps</a>
              <span>·</span>
              <a href="#" className="hover:underline">Reseñas</a>
            </div>
          </div>

        </div>

        {/* Legal Row, Credit Meta Line, Hairline Dividers */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-[0.7rem] text-white/60 gap-4">
          <div>
            {String(t("footer.rights"))}
          </div>
          <div className="text-right">
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition underline"
            >
              Desarrollado por Студія Тест — Odontología con rigor docente
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
