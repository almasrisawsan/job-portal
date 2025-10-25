import SectionTitle from "components/common/ui/SectionTitle";
import CategoryList from "./categoryList";

export default function PopularCategories() {
  return (
    <section className="bg-secondary-light flex flex-col justify-center">
      <SectionTitle title="PopularCategories" />
      <CategoryList />
    </section>
  );
}
