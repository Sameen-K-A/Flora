import type { JSX } from "react";
import { CiDeliveryTruck, CiMoneyCheck1, CiStar } from "react-icons/ci";
import { useRef, useEffect } from "react";
import gsap from "gsap";

interface IFeatures {
  icon: JSX.Element;
  title: string;
  desc: string;
};

const features: IFeatures[] = [
  {
    icon: <CiDeliveryTruck />,
    title: "Fast Shipping",
    desc: "Get your orders delivered within 3-4 business days.",
  },
  {
    icon: <CiMoneyCheck1 />,
    title: "Secure Payment",
    desc: "100% trusted and encrypted payment gateway.",
  },
  {
    icon: <CiDeliveryTruck className="scale-x-[-1]" />,
    title: "Easy Returns",
    desc: "Hassle-free returns within 7 days of delivery.",
  },
  {
    icon: <CiStar />,
    title: "Quality",
    desc: "Curated collections with premium quality assurance.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(animationRef.current?.children || [],
        {
          x: 30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom-=50",
            end: "bottom bottom",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full p-4">
      <div ref={animationRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg"
          >
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-center">{item.icon}</span>
            </div>
            <h3 className="font-semibold mb-2 text-lg text-background text-center">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}