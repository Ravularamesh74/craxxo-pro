import { useRef, useEffect } from "react";

import appleImg from "../assets/Apple.jpg";
import samsungImg from "../assets/Samsung.jpg";
import googleImg from "../assets/Google.jpg";
import vivoImg from "../assets/Vivo.jpg";
import onePlusImg from "../assets/onepluse.jpg";
import oppoImg from "../assets/oppo.jpg";
import realmeImg from "../assets/realme.jpg";
import xiaomiImg from "../assets/xiaomi.jpg";
import motorolaImg from "../assets/motorola.jpg";
import huaweiImg from "../assets/huawei.jpg";
import pocoImg from "../assets/poco.jpg";
import nothingImg from "../assets/nothing.jpg";

const brandImages: Record<string, string> = {
  Apple: appleImg,
  Samsung: samsungImg,
  Google: googleImg,
  OnePlus: onePlusImg,
  Xiaomi: xiaomiImg,
  Oppo: oppoImg,
  Vivo: vivoImg,
  Realme: realmeImg,
  Motorola: motorolaImg,
  Huawei: huaweiImg,
  Poco: pocoImg,
  Nothing: nothingImg,
};

const brands = Object.keys(brandImages);

const BrandsMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(0.5);
  const position = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const animate = () => {
      if (!isDragging.current) {
        position.current -= speedRef.current;
      }

      // Infinite loop
      if (Math.abs(position.current) >= el.scrollWidth / 2) {
        position.current = 0;
      }

      el.style.transform = `translate3d(${position.current}px, 0, 0)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  // Drag Support
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - startX.current;
    position.current += dx * 0.8;
    startX.current = e.clientX;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  return (
    <section className="relative py-16 overflow-hidden bg-background border-y border-border">

      {/* Gradient edges */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        className="cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={stopDrag}
        onMouseUp={stopDrag}
      >
        <div
          ref={trackRef}
          className="flex gap-20 w-max"
        >
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="group flex flex-col items-center transition-transform duration-500"
            >
              {/* Card */}
              <div className="
                relative w-20 h-20 sm:w-24 sm:h-24
                rounded-2xl overflow-hidden
                bg-secondary/30 border border-border/50
                transition-all duration-500
                group-hover:scale-125 group-hover:z-20
              ">
                <img
                  src={brandImages[brand]}
                  alt={brand}
                  className="
                    w-full h-full object-cover
                    opacity-60 grayscale brightness-90
                    transition-all duration-700
                    group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110
                  "
                />

                {/* Glow */}
                <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-[radial-gradient(circle,rgba(255,255,255,0.25),transparent)]
                  transition duration-500
                " />
              </div>

              {/* Label */}
              <span className="
                mt-3 text-xs uppercase tracking-[0.25em]
                text-muted-foreground opacity-50
                transition-all duration-500
                group-hover:opacity-100 group-hover:text-primary
              ">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Center focus effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.25))]" />
    </section>
  );
};

export default BrandsMarquee;