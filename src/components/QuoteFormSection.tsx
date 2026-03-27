import { useState } from "react";
import { Send, Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const brands = ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Oppo", "Vivo", "Realme", "Motorola", "Huawei", "Other"];
const faults = ["Screen Broken", "Display/Touch", "Battery", "Charging Issue", "Speaker/Mic", "Back Glass", "Water Damage", "Software Problem", "Diagnosis"];

const QuoteFormSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", brand: "", fault: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Request Submitted!", description: "We'll contact you within 15 minutes." });
    setForm({ name: "", phone: "", brand: "", fault: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Get A Quote</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Book Your <span className="gradient-text">Repair Now</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fill in the details and get a free quote within minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="lg:col-span-3 glass-card gradient-border p-6 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" required placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input type="tel" required placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <select required value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="">Select Brand</option>
                {brands.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
              <select required value={form.fault} onChange={(e) => setForm({ ...form, fault: e.target.value })} className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="">Select Issue</option>
                {faults.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
            <textarea placeholder="Describe your issue (optional)" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={3} className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
            <Button type="submit" size="lg" className="w-full glow-orange text-base">
              Get Free Quote <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>

          <div className="lg:col-span-2 space-y-5">
            <div className="glass-card gradient-border p-6 space-y-4">
              <h3 className="font-display font-semibold text-foreground text-lg">Contact Us</h3>
              <a href="tel:+918884827842" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" /> <span className="text-sm">888-482-7842</span>
              </a>
              <a href="mailto:info@fixhub.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary" /> <span className="text-sm">info@fixhub.com</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Bengaluru | Hyderabad | Mumbai</span>
              </div>
            </div>

            <div className="glass-card gradient-border p-6 text-center">
              <div className="font-display text-3xl font-bold gradient-text mb-1">50,000+</div>
              <p className="text-sm text-muted-foreground">Devices Repaired Successfully</p>
            </div>
            <div className="glass-card gradient-border p-6 text-center">
              <div className="font-display text-3xl font-bold gradient-text mb-1">30 Min</div>
              <p className="text-sm text-muted-foreground">Average Repair Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
