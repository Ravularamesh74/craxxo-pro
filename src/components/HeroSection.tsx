import { ArrowRight, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-repair.jpg";

const stats = [
  { icon: Shield, label: "6 Month Warranty", value: "100%" },
  { icon: Clock, label: "Quick Turnaround", value: "30 min" },
  { icon: Star, label: "Customer Rating", value: "4.9★" },
];

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Phone repair expertise" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Doorstep Service Available Now</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Smart Solutions for{" "}
            <span className="gradient-text">Smart Devices</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Expert repairs for iPhones, Android, iPads & Smartwatches. We come to you — fixed in 30 minutes with a 6‑month warranty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" onClick={scrollToContact} className="text-base px-8 glow-orange">
              Book a Repair <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="text-base px-8 border-border/50 hover:bg-card">
              Explore Services
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-lg animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass-card p-3 sm:p-4 text-center gradient-border">
                <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="font-display font-bold text-foreground text-lg">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
