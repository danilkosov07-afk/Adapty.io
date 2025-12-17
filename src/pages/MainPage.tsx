import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import SegmentsSection from "../components/SegmentsSection";
import SdkSection from "../components/SdkSection";
import PaywallSection from "../components/PaywallSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CasesSection from "../components/CasesSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="page">
      <HeroSection />
      <StatsSection />
      <SegmentsSection />
      <SdkSection />
      <PaywallSection />
      <TestimonialsSection />
      <CasesSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default MainPage;


