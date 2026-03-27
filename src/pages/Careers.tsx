import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, MapPin, Clock } from "lucide-react";

/* ================= DATA ================= */

const jobs = [
  {
    id: 1,
    title: "Mobile Repair Technician",
    location: "Hyderabad",
    type: "Full-time",
    desc: "Repair smartphones, tablets & diagnose hardware/software issues.",
  },
  {
    id: 2,
    title: "Customer Support Executive",
    location: "Remote",
    type: "Full-time",
    desc: "Handle customer queries, bookings, and service coordination.",
  },
  {
    id: 3,
    title: "Pickup & Delivery Partner",
    location: "Bengaluru",
    type: "Part-time",
    desc: "Pickup and deliver devices safely to customers.",
  },
];

/* ================= MAIN ================= */

const Careers = () => {
  const [active, setActive] = useState<number | null>(null);

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
            Join Our{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Team
            </span>
          </h2>

          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Be part of a fast-growing repair service company transforming customer experience.
          </p>
        </motion.div>

        {/* JOB LIST */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-border rounded-2xl bg-card/40 backdrop-blur-xl p-6 cursor-pointer"
              onClick={() => setActive(active === job.id ? null : job.id)}
            >
              {/* HEADER */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <span className="text-sm text-primary">{job.type}</span>
              </div>

              {/* META */}
              <div className="flex gap-4 text-sm text-muted-foreground mt-2">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {job.type}
                </div>
              </div>

              {/* EXPAND */}
              {active === job.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 text-sm text-muted-foreground"
                >
                  <p>{job.desc}</p>

                  <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition">
                    Apply Now
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;