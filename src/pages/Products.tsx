import { useState } from "react";
import PageHeader from "@/components/others/PageHeader";
import AllProducts from "@/components/products/AllProducts";
import ProductFilter from "@/components/products/Filter";
import ProductsTable from "@/components/products/ProductsTable";
import { mockProducts } from "@/constants/mockProducts";

export default function Products() {
  const [viewMode, setViewMode] = useState<"table" | "grid">("grid");

  return (
    <div className="space-y-6 p-4">
      <PageHeader title="Products" />
      <ProductFilter viewMode={viewMode} onViewModeChange={setViewMode} />
      {viewMode === "table"
        ? <ProductsTable products={mockProducts} />
        : <AllProducts products={mockProducts} />
      }
    </div>
  );
};