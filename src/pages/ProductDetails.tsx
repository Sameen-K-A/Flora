import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight, Tag } from 'lucide-react';
import { FaCartPlus, FaBagShopping } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { ROUTES } from '@/router/router';
import { mockProducts } from '@/constants/mockProducts';
import RatingStars from '../components/others/RatingStars';
import NoProducts from '../components/products/NoProducts';
import type { IProduct } from '@/types/general';
import { gsap } from 'gsap';

export default function ProductOverview() {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const productData: IProduct | undefined = mockProducts.find((product: IProduct) => product.id === productId);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "power3.out" } });

    // Breadcrumbs fade in
    tl.from(containerRef.current.querySelectorAll('.breadcrumb'), {
      opacity: 0,
      y: -10,
      stagger: 0.05
    });

    // Main image animation
    tl.from(containerRef.current.querySelector('.main-image'), {
      scale: 0.95,
      opacity: 0,
      duration: 0.25
    }, "-=0.25");

    // Thumbnails
    tl.fromTo(containerRef.current.querySelectorAll('.thumbnail'),
      { opacity: 0 },
      { opacity: 1, y: 0, stagger: 0.05 }
    );

    // Product info
    tl.from(containerRef.current.querySelectorAll('.product-info > *'), {
      opacity: 0,
      y: 20,
      stagger: 0.05
    }, "-=0.25");

    // Accordion
    tl.from(containerRef.current.querySelectorAll('.accordion-item'), {
      opacity: 0,
      y: 20,
      stagger: 0.05
    }, "-=0.4");

  }, [productData]);

  if (!productData) {
    return (
      <div className='min-h-[90dvh] flex justify-center items-center p-4'>
        <NoProducts
          showButton={true}
          title='Product Not Found'
          message="The product you are looking for does not exist or may have been removed."
          buttonLabel="Back to All Products"
          redirectTo={ROUTES.PRODUCTS}
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="space-y-6 p-4 pb-24 md:pb-4">
      <div className="flex items-center gap-2 cursor-default mb-4 mt-2 breadcrumb">
        <span
          className="text-muted-foreground cursor-pointer"
          onClick={() => navigate(ROUTES.PRODUCTS)}
        >
          Products
        </span>
        <span className="text-muted-foreground">
          <ChevronRight size={12} />
        </span>
        <span className="text-foreground font-medium">{productData.id}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="space-y-4 col-span-1 lg:col-span-2">
          <div className="overflow-hidden rounded-xl border main-image">
            <div className="relative aspect-square bg-background">
              <img
                src={productData.images[selectedImage]}
                alt={productData.name}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {productData.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "aspect-square border-2 rounded-lg overflow-hidden transition-all thumbnail",
                  selectedImage === index
                    ? "border-primary shadow-md"
                    : "border-border hover:border-muted-foreground"
                )}
              >
                <img
                  src={image}
                  alt={`${productData.name} view ${index + 1}`}
                  className="w-full h-full object-contain cursor-pointer"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4 col-span-1 lg:col-span-3 product-info">
          <Badge variant="green" className="flex items-center gap-1">
            <Tag className="h-3 w-3" />
            {productData.category}
          </Badge>
          <h1 className="text-4xl font-bold text-foreground">
            {productData.name}
          </h1>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-semibold text-green-600">
              ₹{(productData.originalPrice * (1 - productData.offerPercentage / 100)).toFixed(2)}
            </div>
            <div className="text-sm text-muted-foreground line-through">
              ₹{productData.originalPrice.toFixed(2)}
            </div>
            <div className="text-sm font-medium text-destructive">
              -{productData.offerPercentage}%
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <RatingStars rating={productData.rating} />
            </div>
            <span className="text-muted-foreground text-sm">
              ({productData.ratingCount} reviews)
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {productData.description}
          </p>
          <div className="space-y-2 pt-4 hidden md:block">
            <Button variant="outline" size="lg" className="w-full">
              <FaCartPlus />
              <span>Add to Cart</span>
            </Button>
            <Button size="lg" className="w-full">
              <FaBagShopping />
              <span>Buy Now</span>
            </Button>
          </div>
          <Accordion type="single" collapsible defaultValue="features" className="w-full space-y-2 pt-4">
            <AccordionItem value="features" className="accordion-item">
              <AccordionTrigger className="text-primary text-lg font-medium">
                Features
              </AccordionTrigger>
              <AccordionContent className="space-y-3">
                {productData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Mobile/Tablet Fixed Bottom Buttons */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t py-2 px-4 flex gap-2 bg-background/95 backdrop-blur-sm z-50">
        <Button variant="outline" className="flex-1">
          <FaCartPlus />
          <span>Add to Cart</span>
        </Button>
        <Button className="flex-1">
          <FaBagShopping />
          <span>Buy Now</span>
        </Button>
      </div>
    </div>
  );
}