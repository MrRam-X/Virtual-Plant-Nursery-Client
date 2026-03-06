import React from "react";
import type { Product } from "../../../types/Product";
import SimilarProductCard from "./SimilarProductCard";

type SimilarProductListProps = {
  similarProducts: Product[] | undefined;
};

const SimilarProductsList: React.FC<SimilarProductListProps> = ({
  similarProducts,
}) => {
  return (
    <div className="mt-24">
      <h2 className="font-serif text-4xl text-brand-green text-center mb-12">
        You Might Also Like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {similarProducts &&
          similarProducts.length > 0 &&
          similarProducts.map((similarProduct) => {
            return (
              <SimilarProductCard
                key={similarProduct._id}
                similarProduct={similarProduct}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SimilarProductsList;
