import Header from "@/components/Header";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Features = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;