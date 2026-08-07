import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProofTicker from "@/components/SocialProofTicker";
import AcademicTrust from "@/components/AcademicTrust";
import ServicesCatalog from "@/components/ServicesCatalog";
import PriceCalculator from "@/components/PriceCalculator";
import ComparisonTable from "@/components/ComparisonTable";
import VideoShowcase from "@/components/VideoShowcase";
import ClientTestimonials from "@/components/ClientTestimonials";
import AcademicTeam from "@/components/AcademicTeam";
import ProcessSteps from "@/components/ProcessSteps";
import CoverageMap from "@/components/CoverageMap";
import FaqAccordion from "@/components/FaqAccordion";
import InteractiveBookingForm from "@/components/InteractiveBookingForm";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-hsl-light">
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProofTicker />
        <AcademicTrust />
        
        {/* Interstitial 1: Labeled Hairline */}
        <div className="py-6 bg-hsl-alt border-y border-hsl-border-light">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.25em] text-hsl-muted font-bold font-display">
            <span>КЛІНІЧНИЙ СТАНДАРТ MONCLOA</span>
            <span className="h-px bg-hsl-border-light flex-1 mx-8 hidden sm:block" />
            <span>EST. 2018</span>
          </div>
        </div>

        <ServicesCatalog />
        <PriceCalculator />
        
        {/* Interstitial 2: Oversized Standalone Statement Band */}
        <div className="py-12 bg-accent text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 text-center font-display font-extrabold text-lg sm:text-2xl tracking-tight">
            «Жодних прихованих комісій за анестезію чи контрольні знімки — повна прозорість у кожному договорі»
          </div>
        </div>

        <ComparisonTable />
        <VideoShowcase />
        <ClientTestimonials />
        
        {/* Interstitial 3: Giant Watermark Word Strip */}
        <div className="py-8 bg-hsl-dark overflow-hidden relative border-y border-white/10">
          <div className="font-display font-black text-4xl sm:text-7xl text-white/10 whitespace-nowrap text-center select-none tracking-tighter">
            UNIVERSIDAD DE LA SALLE • MADRID
          </div>
        </div>

        <AcademicTeam />
        <ProcessSteps />
        <CoverageMap />
        
        {/* Interstitial 4: Rating & Trust Strip */}
        <div className="py-6 bg-hsl-alt border-y border-hsl-border-light">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4 text-[0.7rem] font-display font-bold text-hsl-muted uppercase tracking-wider">
            <span>Рейтинг 4.5 / 5.0 на Google Maps</span>
            <span className="hidden sm:inline">·</span>
            <span>Більше 1500 задоволених пацієнтів</span>
            <span className="hidden sm:inline">·</span>
            <span>Район Moncloa-Aravaca Madrid</span>
          </div>
        </div>

        <FaqAccordion />
        <InteractiveBookingForm />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
