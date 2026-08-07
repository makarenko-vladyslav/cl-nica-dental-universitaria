"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

interface TeamMember {
  name: string;
  role: string;
  desc: string;
}

export default function Team() {
  const { t } = useLocale();

  const kicker = String(t('team.kicker'));
  const title = String(t('team.title'));
  const subtitle = String(t('team.subtitle'));
  const members = (t('team.members') as TeamMember[]) || [];

  return (
    <section id="team" className="py-20 sm:py-24 bg-[var(--color-bg-light)] text-[var(--color-text-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-display font-semibold uppercase tracking-widest text-[var(--color-accent)] block mb-3">
            {kicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[var(--color-primary)] mb-4">
            {title}
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            {subtitle}
          </p>
        </Reveal>

        {/* Team Grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, idx) => {
            const initials = member.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2);

            return (
              <StaggerItem key={idx}>
                <div className="p-6 rounded-2xl bg-[var(--color-surface-white)] border border-[var(--color-border-subtle)] shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between">
                  <div>
                    {/* Monogram Circle */}
                    <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-[var(--color-accent)] font-display font-extrabold text-lg flex items-center justify-center mb-6 shadow-inner">
                      {initials}
                    </div>
                    <h3 className="text-base font-display font-bold text-[var(--color-primary)] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[var(--color-accent)] mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[var(--color-border-subtle)] text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                    Академічна акредитація
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
