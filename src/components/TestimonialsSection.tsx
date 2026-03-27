import { Star } from "lucide-react";

const reviews = [
  { name: "Ankush Sharma", title: "Incredible Solution", text: "Great experience! They provided doorstep service at my office within 30 minutes. Affordable and professional. Truly satisfied!" },
  { name: "Gopal Verma", title: "Efficient & Brilliant", text: "FixHub makes life easy. Resolved the issue with my phone right in front of me. Excellent service quality!" },
  { name: "Priya Mehta", title: "Reliable & Quality", text: "My iPhone screen was shattered and they replaced it at my doorstep. Genuine parts and 6-month warranty. Highly recommend!" },
  { name: "Sanjay Singh", title: "Professional Work", text: "Outstanding work on my MacBook — on time and within budget. The exceptional care was surprising. FixHub is my go-to forever." },
  { name: "Neha Kapoor", title: "Lightning Fast", text: "Battery replacement done in under 20 minutes at my home. The technician was polite and skilled. 5 stars!" },
  { name: "Rahul Joshi", title: "Best Repair Service", text: "Water damage on my Samsung — they recovered everything. Pick-up and delivery was so convenient. Amazing team!" },
];

const TestimonialsSection = () => (
  <section id="reviews" className="section-padding relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[200px]" />

    <div className="container mx-auto relative z-10">
      <div className="text-center mb-16">
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">Testimonials</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
          What Our <span className="gradient-text">Customers Say</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="glass-card gradient-border p-6 sm:p-8 hover:scale-[1.02] transition-transform duration-300">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <h4 className="font-display font-semibold text-foreground mb-2">{r.title}</h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-primary text-sm">
                {r.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <span className="font-medium text-foreground text-sm">{r.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
