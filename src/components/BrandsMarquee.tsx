import { useRef, useEffect } from "react";

const brands = [
  "Apple", "Samsung", "Google", "OnePlus", "Xiaomi",
  "Oppo", "Vivo", "Realme", "Motorola", "Huawei",
  "Poco", "Nothing"
];

const BrandsMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const width = marqueeRef.current.scrollWidth;
    marqueeRef.current.style.setProperty(
      "--marquee-duration",
      `${width / 80}s`
    );
  }, []);

  return (
    <section className="relative py-14 border-y border-border overflow-hidden bg-background">
      
      {/* Gradient Fade Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap will-change-transform animate-marquee gap-12"
      >
        {[...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center justify-center mx-8 sm:mx-12">
            <img
              src={`/logos/${brand.toLowerCase()}.svg`}
              alt={brand}
              className="
                h-10 sm:h-12
                opacity-40
                hover:opacity-100 hover:scale-110
                transition-all duration-500
              "
            />
          </div>
        ))}
      </div>

      {/* Glow Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.2))]" />
    </section>
  );
};

export default BrandsMarquee;