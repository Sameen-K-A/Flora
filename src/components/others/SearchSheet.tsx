import { FiSearch } from "react-icons/fi";
import { Sheet, SheetContent, SheetHeader, SheetClose, SheetTrigger } from '@/components/ui/sheet';
import { ChevronLeft } from 'lucide-react';
import * as React from 'react';
import { Input } from "../ui/input";
import Lottie from "lottie-react";
import fileScanning from "@/assets/lotties/fileScanning.json";

export function SearchSheet() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="p-2 rounded-md hover:bg-muted transition-colors">
          <FiSearch size={20} className="cursor-pointer" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="p-0 w-screen max-w-full sm:max-w-md border-l"
        showClose={false}
      >
        <SheetHeader className="flex items-center flex-row px-4 pt-4 gap-4 pb-2">
          <SheetClose asChild>
            <button
              className="p-2 rounded-md border bg-background hover:bg-muted transition-colors"
              aria-label="Back"
            >
              <ChevronLeft size={18} />
            </button>
          </SheetClose>
          <h3 className="text-lg font-semibold">Search</h3>
        </SheetHeader>

        <div className="px-4 pb-4 flex flex-col h-full gap-2 overflow-y-auto">
          <div className="relative">
            <FiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <Input
              placeholder="Search..."
              className="w-full pl-10 rounded-md"
              autoFocus
            />
          </div>

          <div className="flex flex-col items-center justify-center my-auto">
            <div className="w-full max-w-xs">
              <Lottie animationData={fileScanning} loop={true} />
            </div>

            <h1 className="text-xl font-bold mt-6">No Products Found</h1>
            <p className="text-muted-foreground text-xs mt-2 text-center">
              We couldn&apos;t find any products. Please check back later or explore other categories.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}