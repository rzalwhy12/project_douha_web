import AnnouncementBar from "./components/AnnouncementBar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import GuideSection from "./components/GuideSection";
import CTAStrong from "./components/CTAStrong";
import SuccessSection from "./components/SuccessSection";
import FailureSection from "./components/FailureSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";
import StickyHeader from "./components/StickyHeader";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <StickyHeader />
      <AnnouncementBar />
      <HeroSection />
      <ProblemSection />
      <GuideSection />
      <CTAStrong />
      <SuccessSection />
      <FailureSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
