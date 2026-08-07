"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";

export default function BottomNav() {
  const { t } = useLocale();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-hsl-dark/95 backdrop-blur-md border-t border-white/15 px-4 py-3 flex items-center justify-between lg:hidden text-white shadow-2xl">
      <a
        href="tel:+34919898700"
        className="text-xs font-bold bg-white/10 px-4 py-2.5 rounded-xl border border-white/20 tabular-nums"
      >
        +34 919 898 700
      </a>

      <a
        href="#contact"
        className="bg-accent hover:bg-accent-hover text-white text-[0.65rem] font-extrabold uppercase tracking-widest px-5 py-2.5 rounded-xl shadow-lg"
      >
        {t("nav.bookCta") as string}
      </a>
    </div>
  );
}
