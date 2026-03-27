import { Star } from "lucide-react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useRef } from "react";

/* ================= DATA ================= */

const reviews = [
  { name: "Ankush Sharma", title: "Incredible", text: "Super fast doorstep repair." },
  { name: "Gopal Verma", title: "Brilliant", text: "Solved instantly." },
  { name: "Priya Mehta", title: "Reliable", text: "iPhone fixed perfectly." },
  { name: "Sanjay Singh", title: "Professional", text: "MacBook repair top quality." },
  { name: "Neha Kapoor", title: "Fast", text: "Battery replaced in minutes." },
  { name: "Rahul Joshi", title: "Best Service", text: "Water damage recovered." },
];

/* ================= CONFIG ================= */

const CARD_WIDTH = 320;
const GAP = 24;

/* ================= MAIN ================= */

const TestimonialsSection = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 🔥 SNAP LOGIC
  const handleDragEnd = () => {
    const current = x.get();

    const index = Math.round(-current / (CARD_WIDTH + GAP));
    const snapTo = -index * (CARD_WIDTH + GAP);

    animate(x, snapTo, {
      type: "spring",
      stiffness: 200,
      damping: 25,
    });
  };

  return (
    <section className="relative py-32 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-purple-500/10 blur-[180px] rounded-full left-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <h2 className="text-center text-4xl md:text-6xl font-bold mb-20">
          What Our{" "}
          <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Customers Say
          </span>
        </h2>

        {/* 🎮 DRAG CONTAINER */}
        <div className="overflow-hidden">
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={{ left: -((reviews.length - 1) * (CARD_WIDTH + GAP)), right: 0 }}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex gap-6 cursor-grab active:cursor-grabbing perspective-[1200px]"
          >
            {reviews.map((r, i) => (
              <Card key={i} index={i} x={x} {...r} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

/* ================= CARD ================= */

const Card = ({ name, title, text, index, x }: any) => {
  const center = index * -(CARD_WIDTH + GAP);

  // 🎮 SCALE + DEPTH
  const scale = useTransform(
    x,
    [center - 300, center, center + 300],
    [0.85, 1, 0.85]
  );

  const rotateY = useTransform(
    x,
    [center - 300, center, center + 300],
    [20, 0, -20]
  );

  const opacity = useTransform(
    x,
    [center - 300, center, center + 300],
    [0.4, 1, 0.4]
  );

  return (
    <motion.div
      style={{ scale, rotateY, opacity }}
      className="min-w-[320px] max-w-[320px] p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-xl"
    >
      {/* ⭐ Stars */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>

      <h4 className="font-semibold mb-2">{title}</h4>

      <p className="text-sm text-muted-foreground mb-4">
        “{text}”
      </p>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
          {name.split(" ").map((n: string) => n[0]).join("")}
        </div>
        <span className="text-sm font-medium">{name}</span>
      </div>
    </motion.div>
  );
};