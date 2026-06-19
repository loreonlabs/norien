import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Divider from "@/components/Divider";
import WorldSection from "@/components/WorldSection";
import KingdomsSection from "@/components/KingdomsSection";
import TradeSection from "@/components/TradeSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Divider />
      <WorldSection />
      <Divider />
      <KingdomsSection />
      <Divider />
      <TradeSection />
      <Divider />
      <CTASection />
      <Footer />
      <ScrollAnimations />
    </>
  );
}
