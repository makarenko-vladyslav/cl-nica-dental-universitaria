import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clínica Dental Universitaria | Стоматологічна клініка у Мадриді",
  description: "Академічна стоматологічна клініка у Мадриді (Moncloa-Aravaca). Нагляд професорів Universidad de La Salle та EDE. Імплантація + корона за 790€. Без прихованих платежів.",
  keywords: ["стоматологія Мадрид", "імплантація зубів Мадрид", "Invisalign Madrid", "Clínica Dental Universitaria", "стоматолог Монклоа"],
  icons: { icon: '/icon.svg' },
  openGraph: {
    title: "Clínica Dental Universitaria — Академічна стоматологія у Мадриді",
    description: "Прозорі ціни до 50% нижчі за ринкові. Комплексна імплантація, Invisalign та 3D-діагностика під контролем викладачів університету.",
    type: "website",
    locale: "uk_UA",
    siteName: "Clínica Dental Universitaria",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Unbounded:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[var(--color-bg-light)] text-[var(--color-text-main)] antialiased selection:bg-[var(--color-accent)] selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}
