import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SDGSection from "@/components/SDGSection";
import FeaturesSection from "@/components/FeaturesSection";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SDGSection />
      <ImpactSection />
      <Footer />
    </div>
  );
};

export default Index;
