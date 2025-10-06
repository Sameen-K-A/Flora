import { useEffect, useRef } from "react";
import type { IProduct } from "@/types/general";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { gsap } from "gsap";
import RatingStars from "../others/RatingStars";
import { useNavigate } from "react-router-dom";
import { productDetailsRoute } from "@/router/router";

interface ProductsTableProps {
  products: IProduct[];
}

export default function ProductsTable({ products }: ProductsTableProps) {
  const tableRef = useRef<HTMLTableSectionElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!tableRef.current) return;

    const rows = tableRef.current.querySelectorAll(".table-row");
    gsap.fromTo(
      rows,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power3.out",
      }
    );
  }, [products]);

  return (
    <div className="rounded-md border overflow-hidden">
      <div className="w-full overflow-x-auto">
        <Table className="min-w-xl">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px] text-center px-4">Sl</TableHead>
              <TableHead className="px-4">Product</TableHead>
              <TableHead className="text-center px-4 w-[20%]">Price</TableHead>
              <TableHead className="text-center px-4 w-[20%]">Rating</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody ref={tableRef}>
            {products.map((p, index) => (
              <TableRow
                key={p.id}
                onClick={() => navigate(productDetailsRoute(p.id))}
                className="table-row hover:bg-muted/40 transition-all duration-200 cursor-pointer"
              >
                <TableCell className="text-center font-medium">{index + 1}</TableCell>

                <TableCell>
                  <div className="flex items-center space-x-3">
                    <img
                      src={p.images?.[0]}
                      alt={p.name}
                      className="w-12 h-12 object-cover rounded-md border"
                    />
                    <span className="font-medium">{p.name}</span>
                  </div>
                </TableCell>

                <TableCell className="text-center">
                  <div className="flex flex-col items-center">
                    <div className="font-semibold">
                      ₹{((p.originalPrice * (100 - p.offerPercentage)) / 100).toFixed(2)}
                    </div>
                    {p.offerPercentage > 0 && (
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-muted-foreground line-through">
                          ₹{p.originalPrice.toFixed(2)}
                        </div>
                        <div className="text-xs font-medium text-destructive">
                          -{p.offerPercentage}%
                        </div>
                      </div>
                    )}
                  </div>
                </TableCell>

                <TableCell className="text-center">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center gap-0.5">
                      <RatingStars rating={p.rating} />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {p.rating}/5&nbsp;based&nbsp;on&nbsp;{p.ratingCount}&nbsp;reviews
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};