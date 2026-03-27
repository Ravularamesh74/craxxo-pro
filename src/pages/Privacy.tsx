import { useEffect, useState } from "react";

const sections = [
  {
    id: "info",
    title: "Information We Collect",
    content: `We collect personal information that you voluntarily provide when placing an order, signing up, or contacting us.

Personal Information: Name, address, phone number, email.
Transaction Data: Order history, billing details.

We do NOT collect or store sensitive financial data like credit card details, as we offer a "Payment After Delivery" option.`,
  },
  {
    id: "usage",
    title: "How We Use Your Information",
    content: `We use your information to:
- Process and deliver your orders
- Improve services and user experience
- Communicate updates and order status

We do NOT sell or share your data with third parties for marketing.
We also do NOT use third-party CRM or email tools.`,
  },
  {
    id: "security",
    title: "Data Security",
    content: `We use SSL encryption and secure systems to protect your data.
We take measures to prevent unauthorized access, data loss, or misuse.`,
  },
  {
    id: "rights",
    title: "Your Rights",
    content: `You have the right to:
- Access your data
- Update or correct information
- Request deletion
- Opt out of communications

Contact us through official support to exercise these rights.`,
  },
  {
    id: "payment",
    title: "Payment Security",
    content: `We provide "Payment After Delivery" to ensure safety.
We do not store or process online payment data, keeping your financial info secure.`,
  },
  {
    id: "updates",
    title: "Policy Updates",
    content: `We may update this policy from time to time.
All changes will be reflected on this page with the updated date.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `Registered Office:
Mheal – Shop No 14, Block F, Shimla Market Sector 12
Noida (Delhi NCR), Uttar Pradesh – 201301

You can contact us through our official website for any queries.`,
  },
];

const cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Gurgaon",
  "Faridabad",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
];

const Privacy = () => {
  const [active, setActive] = useState("info");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20">

      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* 📌 Sidebar */}
        <div className="hidden md:block sticky top-24 h-fit">
          <h3 className="font-semibold mb-4">Privacy Policy</h3>

          <ul className="space-y-3 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`block transition ${
                    active === s.id
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 📄 Content */}
        <div className="md:col-span-3 space-y-16">

          {/* Header */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: March 2026
            </p>
          </div>

          {/* Sections */}
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-xl font-semibold mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {s.content}
              </p>
            </div>
          ))}

          {/* 🌍 Cities */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Cities We Serve
            </h2>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="px-3 py-1 text-sm bg-muted rounded-full"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-sm text-muted-foreground border-t pt-6">
            © 2026 FixHub. All rights reserved. Your privacy is our priority.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;