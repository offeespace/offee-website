import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PartnerCarousel from "@/components/sections/PartnerCarousel";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <PartnerCarousel variant="teaser" />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
