import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Shield, Clock, Users } from "lucide-react";

// ✅ Use absolute path from public directory
const aboutImg = "/assets/about.png";
const repair = "/assets/repair.png";
const repair2 = "/assets/repair2.jpg";
const repair3 = "/assets/repair3.jpg";
/* ================= COUNTER HOOK ================= */

const useCounter = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = end / (duration / 16);

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [end]);

  return count;
};

/* ================= DATA ================= */

const stats = [
  { icon: Users, value: 50000, suffix: "+", label: "Happy Customers" },
  { icon: Clock, value: 30, suffix: " min", label: "Avg Repair Time" },
  { icon: Shield, value: 6, suffix: " mo", label: "Warranty" },
];

/* ================= MAIN ================= */

const AboutUs = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [6, -6]);
  const rotateY = useTransform(x, [-100, 100], [-6, 6]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX - window.innerWidth / 2);
      y.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative py-28 overflow-hidden bg-background">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] bg-primary/10 blur-[140px] rounded-full left-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10 space-y-24">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            We Fix Devices,{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              We Build Trust
            </span>
          </h2>
        </motion.div>

        {/* 🔥 IMAGE + TEXT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* 🖼️ IMAGE SECTION (TOP 0.1% UI) */}
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <img
              src={aboutImg}
              alt="About"
              className="
                w-full h-full object-cover
                transition-transform duration-700
                group-hover:scale-110
              "
            />

            {/* Glow */}
            <div className="
              absolute inset-0 opacity-0 group-hover:opacity-100
              bg-[radial-gradient(circle,rgba(255,255,255,0.15),transparent)]
              transition duration-500
            " />

            {/* Border Glow */}
            <div className="
              absolute inset-0 rounded-2xl
              border border-white/10
              group-hover:border-primary/40
              transition duration-500
            " />
          </motion.div>

          {/* 📝 TEXT */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              We provide fast, reliable mobile repair services at your doorstep.
              From screen replacements to motherboard repairs, our certified
              technicians ensure quality, transparency, and trust.
            </p>

            {/* 📊 COUNTERS */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, value, suffix, label }) => {
                const count = useCounter(value);

                return (
                  <div
                    key={label}
                    className="text-center p-4 rounded-xl bg-card/40 border border-border hover:border-primary/40 transition"
                  >
                    <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="font-bold text-lg">
                      {count}
                      {suffix}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 🔥 MULTI IMAGE GRID (PREMIUM LOOK) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[aboutImg, repair, repair2, repair3].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl object-cover h-40 w-full border border-border"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;