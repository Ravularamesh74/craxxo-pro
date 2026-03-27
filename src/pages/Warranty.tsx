import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= DATA ================= */

const sections = [
  {
    id: "coverage",
    title: "Warranty Coverage",
    content: `We provide:

• 6 Months Warranty on screen repairs
• 3 Months Warranty on other spare parts

This warranty covers:
- Display/LCD malfunction
- Touch issues
- Screen not functioning as intended`,
  },
  {
    id: "claim",
    title: "How to Claim Warranty",
    content: `To claim your warranty:

• Share a video showing the issue
• Provide order number / phone number / IMEI
• Contact support with invoice details

Our team will verify and process your request.`,
  },
  {
    id: "time",
    title: "Resolution Time",
    content: `Warranty claims are usually resolved within:

• 48 to 72 hours after request submission

You will receive updates via email or support channels.`,
  },
  {
    id: "conditions",
    title: "Warranty Conditions",
    content: `• Valid only for repaired device
• Not transferable to another user/device
• Device must be in working condition (except issue reported)

Failure to meet conditions may void warranty.`,
  },
  {
    id: "not-covered",
    title: "What is NOT Covered",
    content: `Warranty will NOT apply in:

• Physical or accidental damage
• Water damage after repair
• Misuse or mishandling
• Severe internal damage

Such cases void the warranty completely.`,
  },
  {
    id: "limits",
    title: "Warranty Limitations",
    content: `Warranty applies only to:

• Parts replaced during repair
• Service performed

If only parts were replaced → only parts covered  
If full service → labor + parts covered`,
  },
];

/* ================= MAIN ================= */

const Warranty = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative py-20">

      {/* 🌌 Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full left-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 max-w-3xl relative z-10">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Warranty Policy
          </h1>
          <p className="text-muted-foreground mt-2">
            Transparent & reliable protection for your device
          </p>
        </div>

        {/* 📄 ACCORDION */}
        <div className="space-y-4">
          {sections.map((s) => (
            <div
              key={s.id}
              className="border border-border rounded-xl bg-card/40 backdrop-blur-xl"
            >
              <button
                onClick={() =>
                  setActive(active === s.id ? null : s.id)
                }
                className="w-full text-left px-5 py-4 font-semibold flex justify-between items-center"
              >
                {s.title}
                <span className="text-primary">
                  {active === s.id ? "-" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {active === s.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-4 text-sm text-muted-foreground whitespace-pre-line"
                  >
                    {s.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="text-sm text-muted-foreground border-t mt-12 pt-6 text-center">
          © 2026 FixHub. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Warranty;