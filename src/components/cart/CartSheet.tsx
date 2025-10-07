import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { IoMdCart } from "react-icons/io"

export function CartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IoMdCart size={18} className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">

        </div>
        <SheetFooter>
          <Button type="submit" className="w-full">Continue to Checkout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}