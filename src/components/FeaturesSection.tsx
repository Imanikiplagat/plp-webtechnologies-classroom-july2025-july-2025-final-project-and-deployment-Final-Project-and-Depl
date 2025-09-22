import { Card, CardContent } from "@/components/ui/card";
import appFeaturesImage from "@/assets/app.jpeg";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Predictions",
      description: "Advanced machine learning algorithms analyze weather patterns, soil conditions, and historical data to provide accurate crop yield forecasts."
    },
    {
      icon: "🌡️",
      title: "Weather Integration",
      description: "Real-time weather monitoring and climate pattern analysis to optimize planting schedules and resource allocation."
    },
    {
      icon: "📊",
      title: "Data Analytics Dashboard",
      description: "Comprehensive insights and visualizations that help farmers make informed decisions about their crops and investments."
    },
    {
      icon: "📱",
      title: "Mobile App",
      description: "Access predictions and insights on-the-go with our user-friendly mobile application available for iOS and Android."
    },
    {
      icon: "🌍",
      title: "Global Coverage",
      description: "Support for crops and regions worldwide, with localized data and region-specific agricultural insights."
    },
    {
      icon: "⚡",
      title: "Real-time Updates",
      description: "Instant notifications about changing conditions and updated predictions to help you stay ahead of the curve."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Powerful Features for Smart Farming
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AgriPredict combines cutting-edge technology with agricultural expertise to deliver 
            the most accurate crop yield predictions in the industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-scale-in">
            <img 
              src={appFeaturesImage} 
              alt="AgriPredict app dashboard showing data analytics" 
              className="w-full h-auto rounded-2xl shadow-medium"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-primary mb-8">
              Everything You Need in One Platform
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span className="text-lg">Crop yield predictions with 95% accuracy</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span className="text-lg">Weather-based planting recommendations</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span className="text-lg">Market price forecasting and trends</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span className="text-lg">Resource optimization insights</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-none shadow-soft hover:shadow-medium transition-smooth animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 transition-bounce group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;