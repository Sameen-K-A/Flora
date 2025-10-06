import { useEffect, useRef } from "react";
import { mockProducts } from "@/constants/mockProducts";
import ProductCard from "./ProductCard";
import NoProducts from "./NoProducts";
import gsap from "gsap";

export default function AllProductsMain() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mockProducts.length && containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".product-card");

      const tween = gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "sine",
          delay: 0.2,
        }
      );

      return () => { tween.kill() };
    }
  }, []);

  return (
    <>
      {!mockProducts.length ? (
        <div className="min-h-[60dvh] flex justify-center items-center">
          <NoProducts
            showButton={false}
            title="No Products Found"
            message="We couldn&apos;t find any products. Please check back later or explore other categories."
          />
        </div>
      ) : (
        <div
          ref={containerRef}
          className="grid gap-2 md:gap-5 grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(240px,1fr))]"
        >
          {mockProducts.map((product) => (
            <div key={product.id} className="product-card">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}