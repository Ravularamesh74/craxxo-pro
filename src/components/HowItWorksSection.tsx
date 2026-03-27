import { MapPin, Truck, Store, CheckCircle2 } from "lucide-react";
import doorstepImg from "@/assets/doorstep-service.jpg";
import pickupImg from "@/assets/pickup-delivery.jpg";
import walkinImg from "@/assets/walkin-store.jpg";

const options = [
  {
    icon: MapPin,
    title: "Doorstep Service",
    desc: "We come to your home, office or anywhere you are. Fixed right in front of you.",
    img: doorstepImg,
    steps: ["Book an appointment online", "Technician visits your location", "Device fixed in 30 minutes"],
    color: "primary" as const,
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    desc: "We pick up your device, repair it in our workshop, and deliver it back to you.",
    img: pickupImg,
    steps: ["Schedule a pickup", "Get diagnosis & quotation", "Receive repaired device"],
    color: "secondary" as const,
  },
  {
    icon: Store,
    title: "Walk-in Visit",
    desc: "Visit our state-of-the-art workshop. Watch your device being repaired live.",
    img: walkinImg,
    steps: ["Visit our office", "Consult with our advisor", "Walk out with a smile"],
    color: "primary" as const,
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding relative">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">How It Works</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
          3 Ways to Get <span className="gradient-text">Your Fix</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Choose the option that suits you best. All backed by our warranty.
        </p>
      </div>

      <div className="space-y-8">
        {options.map(({ icon: Icon, title, desc, img, steps, color }, idx) => (
          <div key={title} className={`glass-card gradient-border overflow-hidden grid md:grid-cols-2 gap-0 ${idx % 2 === 1 ? "md:direction-rtl" : ""}`}>
            <div className={`relative h-64 md:h-auto ${idx % 2 === 1 ? "md:order-2" : ""}`}>
              <img src={img} alt={title} loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:bg-gradient-to-r md:from-transparent md:to-card/40" />
            </div>
            <div className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${idx % 2 === 1 ? "md:order-1" : ""}`}>
              <div className={`w-12 h-12 rounded-xl bg-${color}/10 flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 text-${color}`} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground mb-6">{desc}</p>
              <div className="space-y-3">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-primary font-semibold">Step {i + 1}</span>
                      <p className="text-sm text-foreground">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
