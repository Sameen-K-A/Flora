import RatingStars from "../others/RatingStars";
import { Link } from "react-router-dom";
import { productDetailsRoute } from "@/router/router";
import type { IProduct } from "@/types/general";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = product.originalPrice * (1 - product.offerPercentage / 100);

  return (
    <Link to={productDetailsRoute(product.id)}>
      <div className="overflow-hidden rounded-md cursor-pointer">

        <div className="aspect-square overflow-hidden relative">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover rounded-md border"
          />
        </div>

        <div className="space-y-2 px-1">
          <h3 className="font-semibold text-sm md:text-lg line-clamp-1 leading-tight mt-5">
            {product.name}
          </h3>

          <div className="flex items-center gap-0.5">
            <RatingStars rating={product.rating} />
          </div>

          <div className="flex items-center gap-2">
            <div className="text-sm font-semibold">
              ₹{discountedPrice.toFixed(2)}
            </div>
            <div className="text-xs text-muted-foreground line-through">
              ₹{product.originalPrice.toFixed(2)}
            </div>
            <div className="text-xs font-medium text-destructive">
              -{product.offerPercentage}%
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};