import { Phone } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border bg-card/30 py-12">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Phone className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">Fix<span className="text-primary">Hub</span></span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Smart Solutions for Smart Devices. India's most trusted doorstep phone repair service.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>iPhone Repair</li><li>Android Repair</li><li>iPad Repair</li><li>Smartwatch Repair</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>About Us</li><li>Reviews</li><li>Careers</li><li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>FAQ</li><li>Warranty Policy</li><li>Privacy Policy</li><li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} FixHub. All rights reserved.
      </div>
    </div>
  </footer>
);

export default FooterSection;
