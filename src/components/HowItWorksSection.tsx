import { MapPin, Truck, Store, CheckCircle2 } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

import doorstepImg from "@/assets/doorstep-service.jpg";
import pickupImg from "@/assets/pickup-delivery.jpg";
import walkinImg from "@/assets/walkin-store.jpg";

const options = [
  {
    icon: MapPin,
    title: "Doorstep Service",
    desc: "We come to your location and fix instantly.",
    img: doorstepImg,
    steps: ["Book appointment", "Technician visits", "Fix in 30 min"],
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    desc: "We pick, repair and deliver safely.",
    img: pickupImg,
    steps: ["Schedule pickup", "Diagnosis", "Delivery"],
  },
  {
    icon: Store,
    title: "Walk-in Visit",
    desc: "Visit workshop and watch live repair.",
    img: walkinImg,
    steps: ["Visit store", "Consult expert", "Done"],
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden">

      {/* 🌌 Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full animate-pulse top-0 left-0" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[140px] rounded-full animate-pulse bottom-0 right-0" />
      </div>

      <div className="container mx-auto px-4 relative z-10 space-y-24">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold">
            Next-Level{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Experience
            </span>
          </h2>
        </div>

        {/* CARDS */}
        {options.map((item, idx) => (
          <TiltCard key={idx} {...item} reverse={idx % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;

const TiltCard = ({ icon: Icon, title, desc, img, steps, reverse }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX - window.innerWidth / 2);
      y.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      style={{ rotateX, rotateY }}
      className={`relative grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border bg-card/40 backdrop-blur-xl`}
    >
      {/* 🌈 Animated Border */}
      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient" />

      {/* IMAGE */}
      <div className={`relative overflow-hidden ${reverse ? "md:order-2" : ""}`}>
        <motion.img
          src={img}
          alt={title}
          className="w-full h-full object-cover scale-110"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* CONTENT */}
      <div className={`p-10 ${reverse ? "md:order-1" : ""}`}>
        <Icon className="w-8 h-8 text-primary mb-4" />
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{desc}</p>

        <StepAnimator steps={steps} />
      </div>
    </motion.div>
  );
};

const StepAnimator = ({ steps }: any) => {
  return (
    <div className="space-y-4">
      {steps.map((step: string, i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.3, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.3 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-primary" />
          </div>
          <span>{step}</span>
        </motion.div>
      ))}
    </div>
  );
};