"use client";

import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navPhone = String(t('nav.phone'));
  const navAddress = String(t('nav.address'));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-surface-white)]/95 backdrop-blur-md shadow-sm py-3 border-b border-[var(--color-border-subtle)] text-[var(--color-text-main)]'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Typographic Wordmark & Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-[var(--color-accent)] flex items-center justify-center text-white font-bold font-display shadow-sm group-hover:scale-105 transition-transform">
            CDU
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm sm:text-base tracking-tight leading-tight">
              Clínica Dental
            </span>
            <span className="text-[10px] tracking-widest uppercase opacity-80 font-medium">
              Universitaria · Madrid
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold">
          <a href="#services" className="hover:text-[var(--color-accent)] transition-colors">
            {String(t('nav.services'))}
          </a>
          <a href="#trust" className="hover:text-[var(--color-accent)] transition-colors">
            {String(t('nav.trust'))}
          </a>
          <a href="#calculator" className="hover:text-[var(--color-accent)] transition-colors">
            {String(t('nav.calculator'))}
          </a>
          <a href="#team" className="hover:text-[var(--color-accent)] transition-colors">
            {String(t('nav.team'))}
          </a>
          <a href="#faq" className="hover:text-[var(--color-accent)] transition-colors">
            {String(t('nav.faq'))}
          </a>
        </nav>

        {/* Header Right Action & Phone */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href={`tel:${navPhone.replace(/\s+/g, '')}`}
            className="flex flex-col text-right font-display font-semibold text-xs tracking-wide hover:opacity-80 transition-opacity"
          >
            <span>{navPhone}</span>
            <span className="text-[10px] opacity-70 font-sans font-normal">{navAddress}</span>
          </a>
          <a
            href="#booking"
            className="px-5 py-2.5 rounded-full bg-[var(--color-accent)] text-white text-xs font-semibold tracking-wider uppercase shadow-md hover:bg-[var(--color-accent-hover)] transition-all transform hover:-translate-y-0.5"
          >
            {String(t('nav.contact'))}
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2 rounded-lg border border-current/20 focus:outline-none"
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Full-Screen Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[var(--color-bg-dark)] text-white z-40 p-6 flex flex-col justify-between lg:hidden animate-fadeIn">
          <nav className="flex flex-col gap-6 text-lg font-display font-semibold uppercase tracking-wider pt-8">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[var(--color-accent)]">
              {String(t('nav.services'))}
            </a>
            <a href="#trust" onClick={() => setMobileMenuOpen(false)} className="hover:text-[var(--color-accent)]">
              {String(t('nav.trust'))}
            </a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="hover:text-[var(--color-accent)]">
              {String(t('nav.calculator'))}
            </a>
            <a href="#team" onClick={() => setMobileMenuOpen(false)} className="hover:text-[var(--color-accent)]">
              {String(t('nav.team'))}
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-[var(--color-accent)]">
              {String(t('nav.faq'))}
            </a>
            <a href="#booking" onClick={() => setMobileMenuOpen(false)} className="hover:text-[var(--color-accent)]">
              {String(t('nav.contact'))}
            </a>
          </nav>

          <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
            <div>
              <p className="text-xs text-white/60 uppercase tracking-widest">{String(t('location.addressTitle'))}</p>
              <p className="text-sm font-medium">{navAddress}</p>
            </div>
            <div>
              <p className="text-xs text-white/60 uppercase tracking-widest">{String(t('location.phoneTitle'))}</p>
              <a href={`tel:${navPhone.replace(/\s+/g, '')}`} className="text-lg font-display font-bold text-[var(--color-accent)]">
                {navPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
