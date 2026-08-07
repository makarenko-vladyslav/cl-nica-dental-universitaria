"use client";
import React, { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? "hidden" : "";
  };

  const navLinks = [
    { href: "#services", label: t("nav.services") as string },
    { href: "#academic", label: t("nav.academic") as string },
    { href: "#calculator", label: t("nav.calculator") as string },
    { href: "#team", label: t("nav.team") as string },
    { href: "#reviews", label: t("nav.reviews") as string },
    { href: "#faq", label: t("nav.faq") as string },
    { href: "#contact", label: t("nav.contact") as string },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-hsl-dark/95 backdrop-blur-md py-3 shadow-lg border-b border-hsl-border-dark"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Typographic Wordmark Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white font-display font-black text-xl transition-transform group-hover:scale-105 shadow-sm">
              U
            </div>
            <div>
              <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white block leading-tight">
                CLÍNICA DENTAL
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-accent font-semibold block">
                UNIVERSITARIA · MADRID
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.7rem] font-bold uppercase tracking-widest text-white/80 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/20">
              <button
                onClick={() => setLocale("uk")}
                className={`px-2.5 py-1 rounded-full text-[0.65rem] font-bold tracking-wider transition-all ${
                  locale === "uk" ? "bg-accent text-white shadow-sm" : "text-white/70 hover:text-white"
                }`}
              >
                UA
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2.5 py-1 rounded-full text-[0.65rem] font-bold tracking-wider transition-all ${
                  locale === "en" ? "bg-accent text-white shadow-sm" : "text-white/70 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Phone Button */}
            <a
              href="tel:+34919898700"
              className="text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-full border border-white/20 transition-all flex items-center gap-2 tabular-nums"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              +34 919 898 700
            </a>

            {/* CTA */}
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-hover text-white text-[0.7rem] font-extrabold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all shadow-md shadow-accent/20 hover:scale-105"
            >
              {t("nav.bookCta") as string}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+34919898700"
              className="text-[0.7rem] font-extrabold text-white bg-accent px-3 py-1.5 rounded-full tracking-wider tabular-nums"
            >
              +34 919 898 700
            </a>
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="p-2 text-white hover:text-accent focus:outline-none"
            >
              <span className="font-display font-bold text-lg">{menuOpen ? "CLOSE" : "MENU"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-hsl-dark flex flex-col justify-between p-6 pt-24 lg:hidden text-white overflow-y-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-accent font-bold">МЕНЮ НАВІГАЦІЇ</span>
              <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/20">
                <button
                  onClick={() => setLocale("uk")}
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    locale === "uk" ? "bg-accent text-white" : "text-white/60"
                  }`}
                >
                  UA
                </button>
                <button
                  onClick={() => setLocale("en")}
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    locale === "en" ? "bg-accent text-white" : "text-white/60"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="font-display text-2xl font-bold hover:text-accent transition-colors tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
            <a
              href="tel:+34919898700"
              className="text-base font-bold text-center bg-white/10 py-3 rounded-xl border border-white/20 tabular-nums"
            >
              +34 919 898 700
            </a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="bg-accent text-white text-center font-bold text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg"
            >
              {t("nav.bookCta") as string}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
