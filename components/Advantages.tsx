"use client";

import { useLocale } from "@/lib/i18n";
import { Stagger, StaggerItem } from "@/components/motion";

interface AdvItem {
  num: string;
  title: string;
  desc: string;
}

export default function Advantages() {
  const { t } = useLocale();
  const items = (t("advantages.items") as AdvItem[]) || [];

  return (
    <section className="py-24 bg-bg-light relative border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-[0.7rem] font-bold uppercase tracking-widest text-accent mb-2 block">
            {String(t("advantages.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-primary">
            {String(t("advantages.title"))}
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((adv) => (
            <StaggerItem key={adv.num}>
              <div className="bg-bg-card p-8 rounded-xl shadow-sm border border-primary/10 h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl font-serif-display font-bold text-accent mb-4 tabular-nums">
                    {adv.num}
                  </div>
                  <h3 className="text-base font-serif-display font-bold text-primary mb-3">
                    {adv.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}
