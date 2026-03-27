import { motion } from "framer-motion";
import { useState } from "react";

/* ================= DATA ================= */

const categories = ["All", "Tips", "Repair", "Guides"];

const posts = [
  {
    title: "How to Fix a Broken Phone Screen",
    desc: "Step-by-step guide to repair cracked screens safely.",
    category: "Repair",
    img: "/blog1.jpg",
    date: "March 10, 2026",
  },
  {
    title: "5 Tips to Extend Battery Life",
    desc: "Make your phone battery last longer with these tips.",
    category: "Tips",
    img: "/blog2.jpg",
    date: "March 12, 2026",
  },
  {
    title: "Water Damage: What To Do First",
    desc: "Immediate steps to save your phone from water damage.",
    category: "Guides",
    img: "/blog3.jpg",
    date: "March 15, 2026",
  },
  {
    title: "Signs Your Phone Needs Repair",
    desc: "Common symptoms that indicate repair is needed.",
    category: "Repair",
    img: "/blog4.jpg",
    date: "March 18, 2026",
  },
];

/* ================= MAIN ================= */

const Blog = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? posts
      : posts.filter((p) => p.category === active);

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
          <h2 className="text-4xl md:text-5xl font-bold">
            Latest{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Insights
            </span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Tips, guides & repair knowledge
          </p>
        </motion.div>

        {/* 🎯 FILTER */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 📰 BLOG GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group rounded-2xl overflow-hidden border border-border bg-card/40 backdrop-blur-xl"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={post.img}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-3">
                <span className="text-xs text-primary font-semibold">
                  {post.category} • {post.date}
                </span>

                <h3 className="font-semibold text-lg group-hover:text-primary transition">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {post.desc}
                </p>

                <button className="text-sm text-primary font-medium">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;