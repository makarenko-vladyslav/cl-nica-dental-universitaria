"use client";

import { useLocale } from "@/lib/i18n";
import { Stagger, StaggerItem } from "@/components/motion";

interface Member {
  name: string;
  role: string;
  spec: string;
}

export default function FacultyTeam() {
  const { t } = useLocale();
  const members = (t("faculty.members") as Member[]) || [];

  return (
    <section id="cuadro-medico" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-[0.7rem] font-bold uppercase tracking-widest text-accent mb-2 block">
            {String(t("faculty.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-primary mb-3">
            {String(t("faculty.title"))}
          </h2>
          <p className="text-text-muted text-base">
            {String(t("faculty.subtitle"))}
          </p>
        </div>

        {/* Members Grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((doctor, idx) => {
            const initials = doctor.name
              .replace("Dr. ", "")
              .replace("Dra. ", "")
              .split(" ")
              .map((n) => n[0])
              .join("")
              .substring(0, 2);

            return (
              <StaggerItem key={idx}>
                <div className="bg-bg-light rounded-xl p-8 border border-primary/10 shadow-sm flex flex-col justify-between h-full hover:border-accent/30 transition">
                  <div>
                    {/* Academic Monogram Badge */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary text-accent-light font-serif-display text-lg font-bold flex items-center justify-center flex-shrink-0 shadow">
                        {initials}
                      </div>
                      <div>
                        <h3 className="text-base font-serif-display font-bold text-primary">
                          {doctor.name}
                        </h3>
                        <p className="text-[0.65rem] text-accent font-bold uppercase tracking-wider">
                          {doctor.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-text-muted text-xs leading-relaxed mb-6">
                      {doctor.spec}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-primary/10 text-[0.65rem] uppercase font-bold text-text-muted tracking-widest">
                    Universidad de La Salle · EDE Posgrados
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

      </div>
    </section>
  );
}
