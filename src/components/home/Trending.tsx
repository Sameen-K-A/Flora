import { mockProducts } from "@/constants/mockProducts";
import type { IProduct } from "@/types/general";
import ProductCard from "../products/ProductCard";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Trending() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          width: "0%",
        },
        {
          opacity: 1,
          width: "100%",
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom-=100",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(productsRef.current,
        {
          x: 200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top bottom-=100",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-20 pb-10 relative">
      <div ref={productsRef} className="flex gap-5 overflow-x-auto scrollbar-none px-4 relative z-10 mt-5 md:mt-15">
        {mockProducts.slice(0, 10).map((product: IProduct) => (
          <div key={product.id} className="flex-shrink-0 w-[13rem] md:w-[20rem]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <h1 ref={titleRef} className="mt-0 px-4 pb-5 text-7xl md:text-9xl font-extrabold text-black absolute top-10 left-0 w-full pointer-events-none overflow-hidden whitespace-nowrap">
        Trending
      </h1>
    </section>
  );
}