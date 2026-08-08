"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#modelo-academico", label: String(t("nav.academicModel")) },
    { href: "#tratamientos", label: String(t("nav.services")) },
    { href: "#calculadora", label: String(t("nav.calculator")) },
    { href: "#casos", label: String(t("nav.cases")) },
    { href: "#cuadro-medico", label: String(t("nav.faculty")) },
    { href: "#opiniones", label: String(t("nav.reviews")) },
    { href: "#faq", label: String(t("nav.faq")) },
    { href: "#ubicacion", label: String(t("nav.contact")) },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-card/95 backdrop-blur-md shadow-lg py-3 border-b border-primary/10 text-text-main"
            : "bg-gradient-to-b from-bg-dark/90 via-bg-dark/50 to-transparent py-5 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Typographic Wordmark Logo Only - NO Icon Glyphs */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="flex flex-col">
              <span className={`font-serif-display font-bold text-xl leading-tight tracking-tight ${scrolled ? "text-primary" : "text-white"}`}>
                Clínica Dental
              </span>
              <span className={`text-[0.62rem] uppercase tracking-widest font-bold ${scrolled ? "text-accent" : "text-accent-light"}`}>
                Universitaria · Madrid Moncloa
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 hover:text-accent ${
                  scrolled ? "text-text-main/90" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 text-[0.7rem] font-bold tracking-wider rounded-full p-1 border border-current/20">
              <button
                onClick={() => setLocale("es")}
                className={`px-2 py-0.5 rounded-full transition ${
                  locale === "es" ? "bg-accent text-white" : "opacity-70 hover:opacity-100"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2 py-0.5 rounded-full transition ${
                  locale === "en" ? "bg-accent text-white" : "opacity-70 hover:opacity-100"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="tel:+34919898700"
              className={`text-xs font-bold tabular-nums tracking-wider ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              +34 919 898 700
            </a>

            <a
              href="#reservar"
              className="bg-accent hover:bg-accent/90 text-white font-bold text-[0.7rem] uppercase tracking-widest px-5 py-2.5 rounded shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              {String(t("nav.bookCta"))}
            </a>
          </div>

          {/* Mobile Menu Toggle - Plain CSS Lines */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:+34919898700"
              className={`px-3 py-1.5 rounded text-xs font-bold tabular-nums border ${
                scrolled ? "bg-accent/10 border-accent/30 text-accent" : "bg-white/10 border-white/20 text-white"
              }`}
            >
              TEL
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded flex flex-col justify-center items-center gap-1.5 w-9 h-9 ${
                scrolled ? "text-primary" : "text-white"
              }`}
              aria-label="Abrir menú"
            >
              <span className={`w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-current transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-dark text-white flex flex-col justify-between p-6 pt-24 lg:hidden">
          <nav className="flex flex-col gap-4 font-serif-display text-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent transition border-b border-white/10 pb-2.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-wider">
              <span className="opacity-70">Idioma / Language:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setLocale("es")}
                  className={`px-3 py-1 rounded ${locale === "es" ? "bg-accent text-white" : "bg-white/10"}`}
                >
                  Español
                </button>
                <button
                  onClick={() => setLocale("en")}
                  className={`px-3 py-1 rounded ${locale === "en" ? "bg-accent text-white" : "bg-white/10"}`}
                >
                  English
                </button>
              </div>
            </div>

            <a
              href="#reservar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-accent text-white text-center py-3.5 rounded font-bold text-xs uppercase tracking-widest"
            >
              {String(t("nav.bookCta"))}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
