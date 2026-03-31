import { ArrowRight, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
const heroImg = "/assets/hero-repair.jpg";

const stats = [
  { icon: Shield, label: "6 Month Warranty", value: "100%" },
  { icon: Clock, label: "Quick Turnaround", value: "30 min" },
  { icon: Star, label: "Customer Rating", value: "4.9★" },
];

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // 🎮 Mouse Parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - window.innerWidth / 2);
      y.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* 🌌 Background */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Phone repair"
          className="w-full h-full object-cover scale-110"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </motion.div>

      {/* 🔥 Floating Orbs */}
      <div className="absolute w-96 h-96 bg-primary/20 blur-[120px] rounded-full top-10 left-10 animate-pulse" />
      <div className="absolute w-80 h-80 bg-purple-500/20 blur-[120px] rounded-full bottom-10 right-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="text-sm text-muted-foreground">
              Doorstep Service Available
            </span>
          </div>

          {/* 🔥 Animated Gradient Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
            Smart Solutions for{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Smart Devices
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8">
            Expert repairs for iPhones, Android, iPads & Smartwatches.
            Fixed in 30 minutes with a 6-month warranty.
          </p>

          {/* 🎮 Magnetic Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-base px-8 shadow-xl shadow-primary/30"
              >
                Book a Repair <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="text-base px-8 border-border/50 hover:bg-card"
              >
                Explore Services
              </Button>
            </motion.div>
          </div>

          {/* 📊 Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {stats.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-card p-4 text-center"
              >
                <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="font-bold text-lg">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;