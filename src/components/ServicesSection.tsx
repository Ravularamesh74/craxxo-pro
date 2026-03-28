import {
  Smartphone,
  TabletSmartphone,
  Watch,
  Monitor,
  Cpu,
  Droplets,
  Battery,
  Camera,
} from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

import iphoneImg from "../assets/Apple.jpg";
import androidImg from "../assets/Samsung.jpg";
import tabletImg from "../assets/repair.png";
import watchImg from "../assets/repair2.jpg";

/* ================= DATA ================= */

const devices = [
  { icon: Smartphone, name: "iPhone", desc: "Screen, battery, camera & more", img: iphoneImg },
  { icon: TabletSmartphone, name: "Android", desc: "All major brands supported", img: androidImg },
  { icon: Monitor, name: "iPad / Tablet", desc: "Screen & diagnostics", img: tabletImg },
  { icon: Watch, name: "Smartwatch", desc: "All smart wearables", img: watchImg },
];

const repairs = [
  { icon: Monitor, label: "Broken Screen" },
  { icon: Battery, label: "Battery Replacement" },
  { icon: Camera, label: "Camera & Buttons" },
  { icon: Droplets, label: "Water Damage" },
  { icon: Cpu, label: "Motherboard Repair" },
  { icon: Smartphone, label: "Software Issues" },
];

/* ================= MAIN SECTION ================= */

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full top-0 left-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            What We Fix
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Expert Solutions
            </span>
          </h2>

          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Certified technicians ready anytime, anywhere.
          </p>
        </motion.div>

        {/* 🔥 DEVICE CARDS (TiltCard used here) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {devices.map((device, i) => (
            <TiltCard key={device.name} {...device} delay={i} />
          ))}
        </div>

        {/* ⚡ REPAIR GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {repairs.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="relative group p-5 rounded-xl border border-border bg-card/40 backdrop-blur-xl text-center cursor-pointer"
            >
              {/* Glow hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition" />

              <Icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition" />
              <span className="text-sm font-medium">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

/* ================= TILT CARD ================= */

const TiltCard = ({ icon: Icon, name, desc, delay, img }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 🔥 Smooth realistic tilt (not too strong)
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative group p-6 rounded-2xl border border-border overflow-hidden h-[240px] flex flex-col justify-end text-left cursor-pointer"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={img} alt={name} className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* 🌈 Animated border */}
      <div 
        className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to right, hsl(var(--primary)), #a855f7, #ec4899) border-box",
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div className="relative z-10 pointer-events-none">
        <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-xl bg-primary/20 backdrop-blur-md group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
        </div>

        <h3 className="font-bold text-xl mb-1 text-white">{name}</h3>
        <p className="text-xs text-gray-300">{desc}</p>
      </div>
    </motion.div>
  );
};