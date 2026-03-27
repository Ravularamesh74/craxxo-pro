import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    console.error("404 Error:", location.pathname);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">

      {/* 🌌 PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 🎮 SPOTLIGHT FOLLOW */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-primary/20 blur-[120px] pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />

      {/* 🎥 MAIN CONTENT */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 text-center px-4"
      >
        {/* 🔥 GLITCH 404 */}
        <h1 className="text-7xl md:text-9xl font-bold mb-6 relative glitch">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Lost in Space 🚀
        </h2>

        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* 🎮 BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-xl border border-border bg-card hover:bg-muted flex items-center gap-2 justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center gap-2 justify-center"
          >
            <Home className="w-4 h-4" />
            Go Home
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default NotFound;