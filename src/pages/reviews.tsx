import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

/* ================= DATA ================= */

const reviews = [
  {
    name: "Ankush Sharma",
    rating: 5,
    text: "Doorstep service in 30 minutes. Professional and affordable.",
  },
  {
    name: "Priya Mehta",
    rating: 5,
    text: "iPhone repair at home with warranty. Highly recommended!",
  },
  {
    name: "Rahul Joshi",
    rating: 5,
    text: "Water damage fixed perfectly. Pickup was smooth.",
  },
  {
    name: "Neha Kapoor",
    rating: 5,
    text: "Battery replaced in just 20 minutes. Amazing service!",
  },
  {
    name: "Sanjay Singh",
    rating: 5,
    text: "MacBook repair done on time. Very professional.",
  },
];

/* ================= MAIN ================= */

const Reviews = () => {
  const [search, setSearch] = useState("");

  const filtered = reviews.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative py-24 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full left-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Customer{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Reviews
            </span>
          </h1>

          <p className="text-muted-foreground mt-3">
            Trusted by thousands of happy customers
          </p>
        </motion.div>

        {/* 🔍 SEARCH */}
        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-border bg-card/40 backdrop-blur-xl outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* ⭐ SUMMARY */}
        <div className="text-center mb-16">
          <div className="text-5xl font-bold text-primary">4.9★</div>
          <div className="text-muted-foreground text-sm">
            Based on 50,000+ reviews
          </div>
        </div>

        {/* 🧾 GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="relative group p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-xl overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10">

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  “{r.text}”
                </p>

                {/* User */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {r.name.split(" ").map((n) => n[0]).join("")}
                  </div>

                  <span className="text-sm font-medium">
                    {r.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🚀 CTA */}
        <div className="text-center mt-20">
          <p className="text-muted-foreground mb-4">
            Want to experience our service?
          </p>

          <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:scale-105 transition">
            Book a Repair
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;