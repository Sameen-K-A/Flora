import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { mockCategories } from "@/constants/mockCategories";

export default function CategoryList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll<HTMLDivElement>(".category-card");

    const tl = gsap.from(cards, {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
    >
      {mockCategories.map((cat) => (
        <div
          key={cat.id}
          className="relative rounded-xl overflow-hidden h-36 group cursor-pointer category-card"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <div className="absolute bottom-4 px-4 z-10">
            <h3 className="sm:text-lg font-semibold text-white">{cat.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}