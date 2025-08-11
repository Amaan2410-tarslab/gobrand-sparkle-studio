import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">GoBrand</h3>
            <p className="text-muted-foreground">
              The right spot for brands that want to do everything just right!
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/bat" className="block text-muted-foreground hover:text-primary transition-colors">BAT</a>
              <a href="/mat" className="block text-muted-foreground hover:text-primary transition-colors">MAT</a>
              <a href="/cat" className="block text-muted-foreground hover:text-primary transition-colors">CAT</a>
              <a href="/sat" className="block text-muted-foreground hover:text-primary transition-colors">SAT</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@gobrand.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 GoBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;