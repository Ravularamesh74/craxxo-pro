const brands = ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Oppo", "Vivo", "Realme", "Motorola", "Huawei", "Poco", "Nothing"];

const BrandsMarquee = () => (
  <section className="py-12 border-y border-border overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...brands, ...brands].map((brand, i) => (
        <span key={i} className="mx-8 sm:mx-12 text-xl sm:text-2xl font-display font-bold text-muted-foreground/30 select-none">
          {brand}
        </span>
      ))}
    </div>
  </section>
);

export default BrandsMarquee;
