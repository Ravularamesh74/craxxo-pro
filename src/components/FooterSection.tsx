import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const sections = [
    {
      title: "Services",
      items: [
        { name: "iPhone Repair", path: "/#services" },
        { name: "Android Repair", path: "/#services" },
        { name: "iPad Repair", path: "/#services" },
        { name: "Smartwatch Repair", path: "/#services" }
      ]
    },
    {
      title: "Company",
      items: [
        { name: "About Us", path: "/about" },
        { name: "Reviews", path: "/reviews" },
        { name: "Careers", path: "/careers" },
        { name: "Blog", path: "/blog" }
      ]
    }
  ];

  const bottomLinks = [
    { name: "Privacy", path: "/privacy" },
    { name: "Terms", path: "/terms" },
    { name: "Warranty", path: "/warranty" }
  ];

  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      
      {/* 🔥 Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        
        {/* GRID */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          
          {/* BRAND */}
          <div className="group">
            <Link to="/" className="flex items-center gap-3 mb-6 w-fit">
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-xl shadow-primary/30 group-hover:scale-110 transition">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Fix<span className="text-primary">Hub</span>
              </span>
            </Link>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Smart Solutions for Smart Devices. Premium doorstep repair with speed, trust & precision.
            </p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 hover:text-foreground transition">
                <Phone className="w-4 h-4" /> +91 9640059577
              </div>
              <div className="flex items-center gap-2 hover:text-foreground transition">
                <Mail className="w-4 h-4" /> support@fixhub.com
              </div>
              <div className="flex items-center gap-2 hover:text-foreground transition">
                <MapPin className="w-4 h-4" /> Hyderabad, India
              </div>
            </div>
          </div>

          {/* LINKS */}
          {sections.map((section, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-5">{section.title}</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="relative group cursor-pointer w-fit block"
                    >
                      {item.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* NEWSLETTER */}
          <div>
            <h4 className="font-semibold mb-5">Stay Updated</h4>

            <p className="text-sm text-muted-foreground mb-5">
              Get exclusive offers & updates.
            </p>

            <div className="relative group">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-3 rounded-xl bg-card border border-border outline-none focus:border-primary transition"
              />

              {/* glow border */}
              <div className="absolute inset-0 rounded-xl border border-primary opacity-0 group-focus-within:opacity-100 blur-sm transition" />
            </div>

            {/* Magnetic Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/30"
            >
              Subscribe
            </motion.button>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-card border border-border cursor-pointer hover:bg-primary hover:text-white transition"
                >
                  <Icon className="w-4 h-4" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between border-t border-border pt-6 text-sm text-muted-foreground gap-4"
        >
          <p>© {new Date().getFullYear()} FixHub. All rights reserved.</p>

          <div className="flex gap-6">
            {bottomLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-foreground transition cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;