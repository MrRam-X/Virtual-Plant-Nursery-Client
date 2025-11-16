import { FEATURED_CATEGORIES } from "../../../appConstant";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 text-center">
            {FEATURED_CATEGORIES.map((category) => (
              <CategoryCard
                key={category.name}
                iconName={category.iconName}
                name={category.name}
                description={category.description}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
