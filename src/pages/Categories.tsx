import CategoryList from "@/components/categories/CategoriesList";
import PageHeader from "@/components/others/PageHeader";

export default function Categories() {
  return (
    <div className="space-y-6">
      <PageHeader title="Categories" />
      <h3>Explore by Categories</h3>
      <CategoryList />
    </div>
  );
};