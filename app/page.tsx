import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AcademicTrust from "@/components/AcademicTrust";
import AcademicModel from "@/components/AcademicModel";
import InterstitialBand from "@/components/InterstitialBand";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import BeforeAfter from "@/components/BeforeAfter";
import Advantages from "@/components/Advantages";
import VideoShowcase from "@/components/VideoShowcase";
import FacultyTeam from "@/components/FacultyTeam";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AcademicTrust />
        <AcademicModel />
        <InterstitialBand />
        <Services />
        <Calculator />
        <BeforeAfter />
        <Advantages />
        <VideoShowcase />
        <FacultyTeam />
        <Testimonials />
        <FAQSection />
        <LocationSection />
        <AppointmentForm />
      </main>
      <Footer />
    </>
  );
}
