import { TopBanner } from "./components/TopBanner";
import { Hero } from "./components/Hero";
import { LeadFormSection } from "./components/LeadFormSection";
import { ChallengesSection } from "./components/ChallengesSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { FlowModelSection } from "./components/FlowModelSection";
import { FlowModelDetail } from "./components/FlowModelDetail";
import { DiagnosisOfferSection } from "./components/DiagnosisOfferSection";
import { InstitutoMarquees } from "./components/InstitutoMarquees";
import { DiagnosisIntro } from "./components/DiagnosisIntro";
import { ConsultingSection } from "./components/ConsultingSection";
import { VideoCasesSection } from "./components/VideoCasesSection";
import { AlphaCaseSection } from "./components/AlphaCaseSection";
import { StatsSection } from "./components/StatsSection";
import { TeamSection } from "./components/TeamSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <TopBanner />
      <Hero />
      <LeadFormSection />
      <ChallengesSection />
      <BenefitsSection />
      <FlowModelSection />
      <FlowModelDetail />
      <DiagnosisOfferSection />
      <InstitutoMarquees />
      <DiagnosisIntro />
      <ConsultingSection />
      <VideoCasesSection />
      <AlphaCaseSection />
      <StatsSection />
      <TeamSection />
      <FaqSection />
      <Footer />
    </>
  );
}
