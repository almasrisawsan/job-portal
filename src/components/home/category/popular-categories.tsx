import SectionTitle from "../../ui/section-title";
import CategoryList from "./category-list";
import { useFetch } from "src/hooks/useFetch";
import LoadingSection from "../../common/loading-section";
import ErrorSection from "../../common/error-section";
import NotFoundSection from "../../common/not-found-section";
import { useCategoryStore } from "src/store/categoryStore";

export default function PopularCategories() {
  const { categories, loading, error } = useCategoryStore();
  const hasCategories = categories.length > 0;

  return (
    <section className="flex flex-col justify-center gap-5 bg-secondary-light px-4 sm:px-8 py-16">
      <SectionTitle title="Popular Categories" />

      {loading ? (
        <LoadingSection />
      ) : error ? (
        <ErrorSection error={error} />
      ) : !hasCategories ? (
        <NotFoundSection text="categories" />
      ) : (
        <CategoryList categories={categories} />
      )}
    </section>
  );
}
