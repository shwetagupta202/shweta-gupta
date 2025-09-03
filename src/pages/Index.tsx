import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ThoughtLeadershipSection from "@/components/ThoughtLeadershipSection";
import CommunitySection from "@/components/CommunitySection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ThoughtLeadershipSection />
      <CommunitySection />
      <SuccessStoriesSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
