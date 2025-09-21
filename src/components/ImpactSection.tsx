import { Card, CardContent } from "@/components/ui/card";

const ImpactSection = () => {
  const impacts = [
    {
      number: "2.5M",
      suffix: "tons",
      title: "Food Waste Prevented",
      description: "Through accurate predictions, we've helped farmers reduce crop loss and optimize harvesting times.",
      color: "text-earth-gold"
    },
    {
      number: "150K",
      suffix: "farmers",
      title: "Lives Improved",
      description: "Small-scale farmers now have access to enterprise-level agricultural intelligence.",
      color: "text-primary"
    },
    {
      number: "45%",
      suffix: "reduction",
      title: "Resource Waste Reduced",
      description: "Smart predictions lead to optimized use of water, fertilizers, and other agricultural inputs.",
      color: "text-sky-blue"
    }
  ];

  const socialImpacts = [
    {
      icon: "👨‍🌾",
      title: "Empowering Small Farmers",
      description: "Democratizing access to advanced agricultural technology, helping small-scale farmers compete in global markets."
    },
    {
      icon: "🌱",
      title: "Environmental Sustainability",
      description: "Reducing chemical usage and promoting sustainable farming practices through data-driven insights."
    },
    {
      icon: "🏘️",
      title: "Rural Community Development",
      description: "Strengthening rural economies by increasing agricultural productivity and creating local tech jobs."
    },
    {
      icon: "🍽️",
      title: "Food Security Enhancement",
      description: "Contributing to global food security by optimizing crop yields and reducing agricultural uncertainty."
    }
  ];

  return (
    <section className="py-20 gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Impact on Society
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AgriPredict is more than just technology—it's a force for positive change in communities 
            around the world, creating lasting impact through innovation.
          </p>
        </div>
        
        {/* Impact Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {impacts.map((impact, index) => (
            <Card 
              key={index} 
              className="border-none shadow-soft hover:shadow-medium transition-smooth animate-scale-in text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className={`text-5xl font-bold ${impact.color} mb-2`}>
                  {impact.number}
                </div>
                <div className="text-lg text-muted-foreground mb-4">{impact.suffix}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {impact.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {impact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Social Impact Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {socialImpacts.map((impact, index) => (
            <Card 
              key={index} 
              className="border-none shadow-soft hover:shadow-medium transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl flex-shrink-0">{impact.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {impact.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground shadow-strong">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Agricultural Revolution
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Be part of the solution to global food security. Start using AgriPredict today 
              and contribute to a sustainable agricultural future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-earth-gold hover:bg-earth-gold/90 text-earth-brown font-semibold px-8 py-4 rounded-lg text-lg transition-smooth shadow-medium hover:shadow-strong">
                Get Started Now
              </button>
              <button className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 rounded-lg text-lg transition-smooth">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;