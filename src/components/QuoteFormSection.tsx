import { useState } from "react";
import { Send, Phone, MapPin, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const brands = ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Oppo", "Vivo", "Realme", "Motorola", "Huawei", "Other"];
const faults = ["Screen Broken", "Display", "Battery", "Charging", "Speaker", "Back Glass", "Water Damage", "Software", "Diagnosis"];


// Helper Components
const Input = ({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) => (
  <div className="space-y-2">
    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
    <input
      type="text"
      placeholder={`Enter ${label}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all"
    />
  </div>
);

const Select = ({ value, onChange, options, label }: { value: string; onChange: (v: string) => void; options: string[]; label: string }) => (
  <div className="space-y-2">
    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none appearance-none cursor-pointer"
    >
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const Card = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex items-center gap-4 glass-card p-4 hover:border-primary/50 transition-colors group">
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
      <Icon className="w-5 h-5" />
    </div>
    <span className="text-sm font-medium">{text}</span>
  </div>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="glass-card p-4 text-center">
    <div className="text-2xl font-bold text-primary">{value}</div>
    <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
  </div>
);

const QuoteFormSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    brand: "",
    fault: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const isValid = form.name && form.phone && form.brand && form.fault;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setSubmitted(true);

    setTimeout(() => {
      setForm({ name: "", phone: "", brand: "", fault: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Book Your{" "}
            <span className="gradient-text">Repair Now</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Get a quote within minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 glass-card p-8 space-y-6 relative"
          >
            {/* SUCCESS OVERLAY */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-background/90 flex flex-col items-center justify-center rounded-xl z-20"
                >
                  <CheckCircle className="w-12 h-12 text-primary mb-3" />
                  <h3 className="text-lg font-semibold">Request Sent!</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll contact you shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* INPUTS */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Your Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Input label="Phone Number" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Select value={form.brand} onChange={(v) => setForm({ ...form, brand: v })} options={brands} label="Brand" />
              <Select value={form.fault} onChange={(v) => setForm({ ...form, fault: v })} options={faults} label="Issue" />
            </div>

            <textarea
              placeholder="Describe issue..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
            />

            <Button
              type="submit"
              size="lg"
              disabled={!isValid}
              className="w-full text-base"
            >
              Get Free Quote <Send className="ml-2 w-5 h-5" />
            </Button>
          </motion.form>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-2 space-y-6">
            <Card icon={Phone} text="888-482-7842" />
            <Card icon={Mail} text="info@fixhub.com" />
            <Card icon={MapPin} text="Hyderabad | Bengaluru | Mumbai" />

            <Stat value="50K+" label="Repairs Done" />
            <Stat value="30 Min" label="Avg Time" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;