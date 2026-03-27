import { Smartphone, TabletSmartphone, Watch, Monitor, Cpu, Droplets, Battery, Camera } from "lucide-react";

const devices = [
  { icon: Smartphone, name: "iPhone", desc: "Screen, battery, camera & more" },
  { icon: TabletSmartphone, name: "Android", desc: "Samsung, OnePlus, Xiaomi & all brands" },
  { icon: Monitor, name: "iPad / Tablet", desc: "Screen replacement & diagnostics" },
  { icon: Watch, name: "Smartwatch", desc: "Apple Watch & all smart wearables" },
];

const repairs = [
  { icon: Monitor, label: "Broken Screen & LCD" },
  { icon: Battery, label: "Battery Replacement" },
  { icon: Camera, label: "Camera & Buttons" },
  { icon: Droplets, label: "Water Damage" },
  { icon: Cpu, label: "Motherboard Repair" },
  { icon: Smartphone, label: "Software Issues" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />

    <div className="container mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">What We Fix</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
          Our <span className="gradient-text">Expert Solutions</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Our certified technicians serve you anytime, anywhere. Book an appointment now!
        </p>
      </div>

      {/* Device cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
        {devices.map(({ icon: Icon, name, desc }) => (
          <div key={name} className="group glass-card gradient-border p-6 sm:p-8 text-center hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:glow-orange transition-all">
              <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      {/* Repair types */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {repairs.map(({ icon: Icon, label }) => (
          <div key={label} className="glass-card p-4 flex flex-col items-center gap-2 text-center hover:border-primary/30 transition-colors">
            <Icon className="w-5 h-5 text-secondary" />
            <span className="text-xs sm:text-sm text-muted-foreground font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
