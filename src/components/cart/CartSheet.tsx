import { IoMdCart } from "react-icons/io";
import { Sheet, SheetContent, SheetHeader, SheetFooter, SheetClose, SheetTrigger } from "@/components/ui/sheet";
import { ChevronLeft, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockProducts } from "@/constants/mockProducts";
import { productDetailsRoute } from "@/router/router";
import { useNavigate } from "react-router-dom";
import React from "react";

export function CartSheet() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleProductClick = (productId: string) => {
    navigate(productDetailsRoute(productId));
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <IoMdCart size={20} className="cursor-pointer" />
      </SheetTrigger>

      <SheetContent side="right" className="p-0 w-screen max-w-full sm:max-w-md border-l" showClose={false}>

        <SheetHeader className="flex items-center flex-row px-4 pt-4 gap-4 pb-2">
          <SheetClose asChild>
            <button
              className="p-2 rounded-md border bg-background hover:bg-muted transition-colors"
              aria-label="Back"
            >
              <ChevronLeft size={18} />
            </button>
          </SheetClose>
          <h3 className="text-lg font-semibold">Cart</h3>
        </SheetHeader>

        <div className="px-4 pb-4 flex flex-col h-full gap-2 overflow-y-auto custom-scrollbar">
          {mockProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-start justify-between gap-4 border rounded-lg p-3 hover:bg-muted/40 cursor-pointer transition-colors"
              onClick={() => handleProductClick(product.id)}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-16 h-16 rounded-md object-cover flex-shrink-0"
              />

              <div className="flex flex-col flex-1 min-w-0">
                <h4 className="font-medium text-base line-clamp-1">{product.name}</h4>
                <p className="text-sm text-muted-foreground line-clamp-1">{product.description}</p>
                <p className="mt-1 text-sm font-semibold">
                  ₹{(product.originalPrice * (1 - product.offerPercentage / 100)).toFixed(2)}
                </p>
              </div>

              <div className="flex flex-col items-end justify-between gap-2">

                <button
                  className="p-2 cursor-pointer rounded-md hover:bg-destructive/10 text-destructive transition-colors"
                  aria-label="Remove"
                >
                  <Trash2 size={16} />
                </button>

                <div className="flex items-center gap-2">
                  <button className="p-1 cursor-pointer rounded-md border hover:bg-muted transition-colors">
                    <Minus size={14} />
                  </button>
                  <span className="text-sm font-medium">1</span>
                  <button className="p-1 cursor-pointer rounded-md border hover:bg-muted transition-colors">
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SheetFooter className="px-4 pb-4">
          <Button type="submit" className="w-full">
            Continue to Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}