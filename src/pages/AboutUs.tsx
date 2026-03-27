import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Shield, Clock, Users } from "lucide-react";
import aboutImg from "@/assets/about.png";

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

const team = [
  { name: "Ramesh", role: "Founder", img: "/team1.jpg" },
  { name: "Arjun", role: "Technician", img: "/team2.jpg" },
  { name: "Kiran", role: "Support", img: "/team3.jpg" },
];

/* ================= MAIN ================= */

const AboutUs = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

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
    <section className="relative py-28 overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] bg-primary/10 blur-[150px] rounded-full left-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10 space-y-24">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            We Fix Devices,{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              We Build Trust
            </span>
          </h2>
        </motion.div>

        {/* 🔥 3D IMAGE + TEXT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            style={{ rotateX, rotateY }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={aboutImg}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="space-y-6">
            <p className="text-muted-foreground">
              FixHub delivers fast, reliable repair services at your doorstep.
              From screens to motherboard repairs, we ensure quality and trust.
            </p>

            {/* 📊 COUNTERS */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, value, suffix, label }) => {
                const count = useCounter(value);

                return (
                  <div
                    key={label}
                    className="text-center p-4 rounded-xl bg-card/40 border border-border"
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

        {/* 👥 TEAM SECTION */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Meet Our Team
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                whileHover={{ scale: 1.05 }}
                className="group relative rounded-2xl overflow-hidden border border-border"
              >
                <img
                  src={member.img}
                  className="w-full h-64 object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center">
                  <h4 className="text-white font-semibold">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-300">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;