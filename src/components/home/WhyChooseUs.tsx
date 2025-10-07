import type { JSX } from "react";
import { CiDeliveryTruck, CiMoneyCheck1, CiStar } from "react-icons/ci";

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
    title: "Quality Products",
    desc: "Curated collections with premium quality assurance.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="w-full p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {features.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 rounded-lg transition-transform hover:-translate-y-1"
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
  );
}