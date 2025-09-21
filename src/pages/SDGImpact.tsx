import Header from "@/components/Header";
import SDGSection from "@/components/SDGSection";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";

const SDGImpact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <SDGSection />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  );
};

export default SDGImpact;