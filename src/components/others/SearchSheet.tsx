import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { FiSearch } from "react-icons/fi"

export function SearchSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <FiSearch size={18} className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Search</SheetTitle>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">

        </div>
      </SheetContent>
    </Sheet>
  )
}