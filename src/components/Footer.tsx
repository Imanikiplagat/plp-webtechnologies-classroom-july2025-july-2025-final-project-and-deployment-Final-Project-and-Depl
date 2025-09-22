import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold">AgriPredict</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              Empowering farmers worldwide with AI-driven crop yield predictions, 
              contributing to global food security and sustainable agriculture.
            </p>

            {/* Social Media Icons */}
            <div className="mt-6 flex space-x-4">
              {/* Twitter */}
              <a 
                href="https://twitter.com/@kiplagat2307" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-primary-foreground text-lg" />
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com/"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-primary-foreground text-lg" />
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/254782089708" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-primary-foreground text-lg" />
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/Robi_fay" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-primary-foreground text-lg" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Features</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Pricing</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Contact</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Documentation</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">API Reference</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Support</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">SDG Impact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 AgriPredict. All rights reserved. Contributing to UN SDG 2: Zero Hunger. PLP Academy
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">Terms of Service</a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
