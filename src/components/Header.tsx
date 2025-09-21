import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="text-2xl font-bold text-primary">AgriPredict</span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-foreground hover:text-primary transition-smooth font-medium">
              Features
            </Link>
            <Link to="/sdg-impact" className="text-foreground hover:text-primary transition-smooth font-medium">
              SDG Impact
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-smooth font-medium">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Try AgriPredict
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;