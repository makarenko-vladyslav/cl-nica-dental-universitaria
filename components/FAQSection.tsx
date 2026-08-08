"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function FAQSection() {
  const { t } = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqList = [
    {
      q: "¿Por qué los precios son hasta un 50% inferiores que en otras clínicas de Madrid?",
      a: "Nuestros precios son significativamente inferiores porque somos una clínica universitaria vinculada a los programas de posgrado de la Universidad de La Salle y EDE. Nuestra misión principal es la asistencia bucodental accesible de alta precisión, sin sobrecostes comerciales ni márgenes de franquicia privada."
    },
    {
      q: "¿Quién realiza los tratamientos? ¿Dentistas o alumnos?",
      a: "Serás atendido por un equipo compuesto por odontólogos titulados colegiados cursando másteres de especialización. Cada fase, diagnóstico y cirugía es supervisada y validada en tiempo real por profesores y catedráticos de departamento."
    },
    {
      q: "¿Qué garantía y calidad tienen los materiales utilizados?",
      a: "Empleamos exclusivamente implantes de titanio biomédico de marcas europeas con marcado CE, prótesis de zirconio y cerámica feldespática, y escáneres 3D de alta resolución. No recortamos en materiales."
    },
    {
      q: "¿Qué incluye la tarifa de 790€ para el implante?",
      a: "La tarifa de 790€ incluye el estudio radiológico 3D TAC inicial, la cirugía con el implante de titanio biocompatible y la corona estética definitiva. Es un presupuesto universitario cerrado."
    },
    {
      q: "¿Ofrecen opciones de financiación para tratamientos complejos?",
      a: "Sí, disponemos de planes de financiación adaptados hasta en 36 meses con opciones sin intereses para facilitar la continuidad asistencial de todos los pacientes."
    },
    {
      q: "¿Dónde se encuentra ubicada la clínica exactamente?",
      a: "Nos encontramos en la Calle de Alberto Aguilera, en el distrito de Moncloa-Aravaca, con fácil acceso desde las estaciones de Metro Argüelles, Moncloa y San Bernardo."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-[0.7rem] font-bold uppercase tracking-widest text-accent mb-2 block">
            {String(t("faq.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-primary mb-3">
            {String(t("faq.title"))}
          </h2>
          <p className="text-text-muted text-base">
            {String(t("faq.subtitle"))}
          </p>
        </div>

        {/* Accordion Container Full Width */}
        <div className="space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-primary/10 rounded-xl overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left font-serif-display font-bold text-base text-primary flex items-center justify-between bg-bg-light hover:bg-gray-100 transition"
                >
                  <span>{item.q}</span>
                  <span className="text-xl text-accent font-normal ml-4">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="p-6 bg-white text-text-muted text-xs leading-relaxed border-t border-primary/5">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
