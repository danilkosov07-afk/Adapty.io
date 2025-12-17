import { Suspense, lazy } from "react";
import HeroSection from "../components/HeroSection";
import SegmentsSection from "../components/SegmentsSection";

const StatsSection = lazy(() => import("../components/StatsSection"));
const SdkSection = lazy(() => import("../components/SdkSection"));
const PaywallSection = lazy(() => import("../components/PaywallSection"));
const FeatureAnalyticsSection = lazy(
  () => import("../components/FeatureAnalyticsSection")
);
const FeatureBuilderSection = lazy(
  () => import("../components/FeatureBuilderSection")
);
const FeatureFunnelSection = lazy(
  () => import("../components/FeatureFunnelSection")
);
const FeatureIntegrationsSection = lazy(
  () => import("../components/FeatureIntegrationsSection")
);
const FeatureRefundSection = lazy(
  () => import("../components/FeatureRefundSection")
);
const TestimonialsSection = lazy(
  () => import("../components/TestimonialsSection")
);
const CasesSection = lazy(() => import("../components/CasesSection"));
const CtaSection = lazy(() => import("../components/CtaSection"));
const Footer = lazy(() => import("../components/Footer"));

const MainPage = () => {
  return (
    <div className="page">
      <HeroSection />
      <SegmentsSection />
      <Suspense fallback={null}>
        <StatsSection />
        <SdkSection />
        <PaywallSection />
        <FeatureRefundSection />
        <FeatureAnalyticsSection />
        <FeatureBuilderSection />
        <FeatureFunnelSection />
        <FeatureIntegrationsSection />
        <TestimonialsSection />
        <CasesSection />
        <CtaSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default MainPage;


