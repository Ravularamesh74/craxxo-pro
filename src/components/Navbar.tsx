import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = ["Home", "Services", "How It Works", "Reviews", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/\s/g, "-"));
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 border-x-0 rounded-none">
      <div className="container mx-auto flex items-center justify-between h-16 sm:h-20 px-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Phone className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">
            Fix<span className="text-primary">Hub</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button key={link} onClick={() => scrollTo(link)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {link}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+918884827842" className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" /> 888-482-7842
          </a>
          <Button onClick={() => scrollTo("Contact")} size="sm">Book Now</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-card border-t border-border mx-4 mb-4 rounded-2xl p-4 space-y-3">
          {navLinks.map((link) => (
            <button key={link} onClick={() => scrollTo(link)} className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors">
              {link}
            </button>
          ))}
          <Button onClick={() => scrollTo("Contact")} className="w-full mt-2">Book Now</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
