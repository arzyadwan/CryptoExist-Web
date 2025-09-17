import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection"; 
import LatestArticles from "@/components/LatestArticles";
import StatisticsSection from "@/components/StatisticsSection";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <LatestArticles />
      <StatisticsSection />
      <NewsletterSignup />
    </>
  );
}