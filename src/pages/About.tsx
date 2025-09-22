import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "Ms.Faith kiplagat",
      role: "Data Scientist",
      description: "A A graduate data scientist with a strong foundation in statistical analysis, machine learning, and data-driven problem solving",
      icon: "👩‍💻"
    },
    {
      name: "Brian Kipchumba",
      role: "Software Engineer",
      description: "A graduate software engineer with a solid foundation in programming, software development, and system design. Skilled in modern languages and frameworks, with experience building reliable, efficient, and scalable applications.",
      icon: "🧠"
    }
   
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              About AgriPredict
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
              We're on a mission to revolutionize agriculture through artificial intelligence, 
              empowering farmers worldwide and contributing to global food security.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-none shadow-soft animate-scale-in">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🎯</div>
                  <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To democratize access to advanced agricultural intelligence, helping farmers of all sizes 
                    make data-driven decisions that increase yields, reduce waste, and promote sustainable 
                    farming practices worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🔮</div>
                  <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    A world where every farmer has access to predictive insights that enable sustainable 
                    agriculture, food security, and environmental stewardship for future generations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our diverse team combines deep agricultural expertise with cutting-edge technology 
                to deliver solutions that make a real difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card 
                  key={index} 
                  className="border-none shadow-soft hover:shadow-medium transition-smooth animate-fade-in text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{member.icon}</div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {member.name}
                    </h3>
                    <div className="text-earth-gold font-medium mb-3">
                      {member.role}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Our Journey in Numbers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center animate-slide-up">
                <div className="text-4xl font-bold text-primary mb-2">2019</div>
                <div className="text-muted-foreground">Founded</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl font-bold text-earth-gold mb-2">50+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold text-sky-blue mb-2">25</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl font-bold text-primary mb-2">$5M</div>
                <div className="text-muted-foreground">Funding Raised</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;