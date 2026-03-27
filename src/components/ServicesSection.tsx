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

/* ================= DATA ================= */

const devices = [
  { icon: Smartphone, name: "iPhone", desc: "Screen, battery, camera & more" },
  { icon: TabletSmartphone, name: "Android", desc: "All major brands supported" },
  { icon: Monitor, name: "iPad / Tablet", desc: "Screen & diagnostics" },
  { icon: Watch, name: "Smartwatch", desc: "All smart wearables" },
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

const TiltCard = ({ icon: Icon, name, desc, delay }: any) => {
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
      className="relative group p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-xl text-center overflow-hidden"
    >
      {/* 🌈 Animated border */}
      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient" />

      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl bg-primary/10 group-hover:shadow-lg group-hover:shadow-primary/30 transition">
          <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition" />
        </div>

        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </motion.div>
  );
};