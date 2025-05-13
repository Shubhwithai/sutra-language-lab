
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import OverviewSection from "../components/OverviewSection";
import FocusAreasSection from "../components/FocusAreasSection";
import TimelineSection from "../components/TimelineSection";
import PrizesSection from "../components/PrizesSection";
import ResourcesSection from "../components/ResourcesSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <FocusAreasSection />
        <TimelineSection />
        <PrizesSection />
        <ResourcesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
