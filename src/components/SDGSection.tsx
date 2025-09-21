import { Card, CardContent } from "@/components/ui/card";
import sdgImage from "@/assets/sdg-zero-hunger.jpg";

const SDGSection = () => {
  return (
    <section className="py-20 gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Supporting UN SDG 2: Zero Hunger
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AgriPredict directly contributes to the United Nations Sustainable Development Goal 2, 
            working towards ending hunger and achieving food security worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img 
              src={sdgImage} 
              alt="SDG 2 Zero Hunger - Community sharing food" 
              className="w-full h-auto rounded-2xl shadow-medium"
            />
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <Card className="border-none shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌾</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Increase Agricultural Productivity
                    </h3>
                    <p className="text-muted-foreground">
                      Our AI predictions help farmers optimize their crop yields, contributing to doubled 
                      agricultural productivity as targeted by SDG 2.1.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-earth-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Sustainable Food Systems
                    </h3>
                    <p className="text-muted-foreground">
                      By predicting optimal planting and harvesting times, we help maintain ecosystems 
                      and strengthen capacity for adaptation to climate change.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Reduce Food Waste
                    </h3>
                    <p className="text-muted-foreground">
                      Accurate yield predictions help farmers plan better, reducing food waste and 
                      ensuring more efficient distribution of agricultural resources.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGSection;