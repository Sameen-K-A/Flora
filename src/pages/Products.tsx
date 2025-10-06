import PageHeader from "@/components/others/PageHeader";
import ProductFilter from "@/components/products/Filter";

export default function Products() {
  return (
    <div className="space-y-6">
      <PageHeader title="Products" />
      <ProductFilter />
    </div>
  );
};