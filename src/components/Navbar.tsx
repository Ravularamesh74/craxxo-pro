import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/", section: "home" },
  { name: "Services", path: "/#services", section: "services" },
  { name: "How It Works", path: "/#how-it-works", section: "how-it-works" },
  { name: "Reviews", path: "/reviews", section: "reviews" },
  { name: "About", path: "/about", section: "about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (link: any) => {
    setOpen(false);
    if (link.path.startsWith("/#")) {
      const sectionId = link.path.replace("/#", "");
      if (pathname === "/") {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(link.path);
      }
    } else {
      navigate(link.path);
    }
  };

  // 🔥 Detect scroll (for blur + shrink)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🎯 Active section tracking
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navLinks
      .filter((l) => l.path.includes("#"))
      .map((link) => document.getElementById(link.path.replace("/#", "")));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const foundLink = navLinks.find(
              (l) => l.path.replace("/#", "") === entry.target.id
            );
            if (foundLink) setActive(foundLink.name);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, [pathname]);

  // Handle hash scroll on mount or path change
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [hash, pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 sm:h-20 px-4">
        
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition">
            <Phone className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">
            Fix<span className="text-primary">Hub</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className={`relative text-sm font-medium transition ${
                (pathname === link.path || (link.path === "/#services" && active === "Services") || (link.path === "/#how-it-works" && active === "How It Works"))
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.name}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                  (pathname === link.path || (link.path === "/#services" && active === "Services") || (link.path === "/#how-it-works" && active === "How It Works")) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919640059577"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:scale-105 transition"
          >
            <Phone className="w-4 h-4" /> 9640059577
          </a>

          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={() => handleNavClick({ path: "/#contact" })} size="sm">
              Book Now
            </Button>
          </motion.div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mx-4 mb-4 rounded-2xl border border-border bg-background/80 backdrop-blur-xl p-5 space-y-4 shadow-xl"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="block w-full text-left text-lg font-medium text-muted-foreground hover:text-primary"
              >
                {link.name}
              </motion.button>
            ))}

            <Button
              onClick={() => handleNavClick({ path: "/#contact" })}
              className="w-full mt-2"
            >
              Book Now
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;