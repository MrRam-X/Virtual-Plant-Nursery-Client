import React from "react";
import type { Product } from "../../../types/Product";
import ProductCard from "./ProductCard";

type ProductsListProps = {
  products: Product[];
};

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
      {products.map((product) => {
        return <ProductCard key={product._id} product={product}/>;
      })}
    </div>
  );
};

export default ProductsList;
