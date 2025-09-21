import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* Quick Overview Section */}
      <section className="py-20 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Choose AgriPredict?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced AI technology meets agricultural expertise to deliver unprecedented accuracy in crop predictions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-soft hover:shadow-medium transition-smooth animate-scale-in">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  AI-Powered Predictions
                </h3>
                <p className="text-muted-foreground mb-4">
                  Advanced machine learning algorithms analyze weather, soil, and historical data for 95% accurate predictions.
                </p>
                <Link to="/features">
                  <Button variant="outline" className="mt-2">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-soft hover:shadow-medium transition-smooth animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Global Impact
                </h3>
                <p className="text-muted-foreground mb-4">
                  Supporting UN SDG 2: Zero Hunger by helping farmers worldwide increase yields and reduce waste.
                </p>
                <Link to="/sdg-impact">
                  <Button variant="outline" className="mt-2">
                    View Impact
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-soft hover:shadow-medium transition-smooth animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Expert Team
                </h3>
                <p className="text-muted-foreground mb-4">
                  Led by agricultural engineers and AI researchers with decades of combined experience.
                </p>
                <Link to="/about">
                  <Button variant="outline" className="mt-2">
                    Meet Team
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
