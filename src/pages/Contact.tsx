import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Ready to transform your farming operations? We're here to help you get started 
              with AgriPredict and answer any questions you may have.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-none shadow-soft animate-scale-in">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    Send us a Message
                  </h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Farm Name</Label>
                      <Input id="company" placeholder="Green Valley Farms" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Interested in AgriPredict Demo" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your farming operation and how we can help..."
                        rows={5}
                      />
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in">
                <Card className="border-none shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          Email Us
                        </h3>
                        <p className="text-muted-foreground">
                          hello@agripredict.com<br />
                          support@agripredict.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-earth-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          Call Us
                        </h3>
                        <p className="text-muted-foreground">
                          +254 7123456789<br />
                          Mon-Fri: 9AM-6PM EAT
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-sky-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          Visit Us
                        </h3>
                        <p className="text-muted-foreground">
                          Moi Avenue<br />
                          AgriTech Hub, 2nd floor<br />
                          Kenya.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-soft bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Ready for a Demo?
                    </h3>
                    <p className="mb-4 opacity-90">
                      Schedule a personalized demo to see how AgriPredict can transform your farming operations.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    >
                      Schedule Demo
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="border-none shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    How accurate are AgriPredict's crop yield predictions?
                  </h3>
                  <p className="text-muted-foreground">
                    Our AI models achieve 95% accuracy on average, validated across diverse crops and regions. 
                    Accuracy may vary based on data quality and local conditions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    What crops does AgriPredict support?
                  </h3>
                  <p className="text-muted-foreground">
                    We support over 50 major crops including wheat, corn, soybeans, rice, vegetables, and fruits. 
                    New crop models are continuously added based on user demand.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Is AgriPredict suitable for small farms?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolutely! We offer flexible pricing plans designed for farms of all sizes, 
                    from small family operations to large commercial enterprises.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;