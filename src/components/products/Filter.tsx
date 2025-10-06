import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { LayoutGrid, Table2, SlidersHorizontal, ArrowUpDown, CalendarDays, ArrowDownWideNarrow, ArrowUpWideNarrow } from "lucide-react"

export default function ProductFilter() {
  const [viewMode, setViewMode] = useState<"table" | "grid">("table")

  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full w-fit justify-start"
            aria-label="Sort"
          >
            <ArrowUpDown className="mr-2 h-4 w-4" />
            Sort
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="center" className="w-[220px]">
          <DropdownMenuLabel>Sort by</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuRadioGroup value="date-desc">
            <DropdownMenuRadioItem value="date-desc">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                <span>Newest</span>
              </div>
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem value="date-asc">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                <span>Oldest</span>
              </div>
            </DropdownMenuRadioItem>

            <DropdownMenuSeparator />

            <DropdownMenuRadioItem value="amount-desc">
              <div className="flex items-center gap-2">
                <ArrowDownWideNarrow className="h-4 w-4 text-muted-foreground" />
                <span>Price: High to Low</span>
              </div>
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem value="amount-asc">
              <div className="flex items-center gap-2">
                <ArrowUpWideNarrow className="h-4 w-4 text-muted-foreground" />
                <span>Price: Low to High</span>
              </div>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="outline"
        size="sm"
        className="rounded-full"
        aria-label="Filter"
      >
        <SlidersHorizontal className="mr-2 h-4 w-4" />
        Filter
      </Button>

      <div
        role="group"
        aria-label="View mode"
        className="inline-flex items-center rounded-full border bg-muted/40"
      >
        <Button
          size="sm"
          variant={viewMode === "grid" ? "secondary" : "ghost"}
          className="rounded-full px-3 py-1.5"
          onClick={() => setViewMode("grid")}
        >
          <LayoutGrid className="h-4 w-4" />
        </Button>

        <Button
          size="sm"
          variant={viewMode === "table" ? "secondary" : "ghost"}
          className="rounded-full px-3 py-1.5"
          onClick={() => setViewMode("table")}
        >
          <Table2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}