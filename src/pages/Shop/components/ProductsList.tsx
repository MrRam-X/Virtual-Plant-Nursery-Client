import React from "react";
import type { Product } from "../../../types/Product";
import ProductCard from "./ProductCard";

type ProductsListProps = {
  products: Product[];
};

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <div className="md:px-8 lg:px-0">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-x-6 sm:gap-y-10">
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductsList;
