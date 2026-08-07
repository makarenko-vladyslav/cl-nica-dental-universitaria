import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import AcademicTrust from "@/components/AcademicTrust";
import Calculator from "@/components/Calculator";
import BeforeAfter from "@/components/BeforeAfter";
import VideoShowcase from "@/components/VideoShowcase";
import ComparisonTable from "@/components/ComparisonTable";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        {/* Interstitial 1: Labeled Hairline Separator */}
        <div className="py-3 bg-[var(--color-primary)] border-y border-white/10 text-center">
          <span className="text-[10px] font-display font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            АКАДЕМІЧНИЙ СТАНДАРТ МЕДИЦИНИ 2026
          </span>
        </div>

        <SocialProof />
        <Services />

        {/* Interstitial 2: Text Marquee Ticker */}
        <div className="py-3 bg-[var(--color-accent)] text-white overflow-hidden whitespace-nowrap">
          <div className="inline-flex animate-marquee text-xs font-display font-extrabold tracking-widest uppercase gap-8">
            <span>3D КТ ДІАГНОСТИКА 0€</span>
            <span>·</span>
            <span>ЦИРКОНІЄВІ КОРОНКИ 790€</span>
            <span>·</span>
            <span>INVISALIGN FULL 2 850€</span>
            <span>·</span>
            <span>БЕЗ ПРИХОВАНИХ КОШТОРИСІВ</span>
            <span>·</span>
            <span>MONCLOA-ARAVACA MADRID</span>
            <span>·</span>
            <span>3D КТ ДІАГНОСТИКА 0€</span>
            <span>·</span>
            <span>ЦИРКОНІЄВІ КОРОНКИ 790€</span>
            <span>·</span>
            <span>INVISALIGN FULL 2 850€</span>
            <span>·</span>
            <span>БЕЗ ПРИХОВАНИХ КОШТОРИСІВ</span>
            <span>·</span>
          </div>
        </div>

        <AcademicTrust />
        <Calculator />

        {/* Interstitial 3: Standalone Statement Band */}
        <div className="py-12 bg-[var(--color-primary)] text-white text-center border-y border-white/10 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-xl font-display font-medium leading-relaxed italic text-white/90">
              «Здоров'я зубів — це не предмет розкоші, а базова якість життя. Університетська модель забезпечує найвищий академічний рівень за доступною вартістю.»
            </p>
          </div>
        </div>

        <BeforeAfter />
        <VideoShowcase />
        <ComparisonTable />
        <Testimonials />
        <Team />

        {/* Interstitial 4: Press / Academic Rating Strip */}
        <div className="py-4 bg-white border-y border-[var(--color-border-subtle)] text-center">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-8 text-xs font-display font-bold text-[var(--color-primary)] uppercase tracking-wider">
            <span>GOOGLE MAPS 4.5 / 5.0 (159 ВІДГУКІВ)</span>
            <span className="text-[var(--color-accent)]">·</span>
            <span>ПАРТНЕР UNIVERSIDAD DE LA SALLE</span>
            <span className="text-[var(--color-accent)]">·</span>
            <span>EDE POSGRADOS ODONTOLÓGICOS</span>
          </div>
        </div>

        <FAQ />
        <BookingForm />
        <LocationMap />
      </main>
      <Footer />
    </>
  );
}
