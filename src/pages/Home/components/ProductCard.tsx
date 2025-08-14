import React from "react";
import type { Product } from "../../../types/Product";
import { Link } from "react-router-dom";

export type ProductProps = {
  key: string;
  product: Product;
};

// Upload images to 
const ProductCard: React.FC<ProductProps> = ({ product, key }) => {

  return (
    <div className="bg-white shadow-lg group" key={key}>
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl[0] || ""}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          alt={`${product.name || "defaultProduct"}.jpg`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Link
            to={`/product/${product._id}`}
            className="bg-white text-brand-green py-2 px-4 font-semibold"
          >
            View Product
          </Link>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-medium">{product.name}</h3>
        <p className="text-lg text-brand-accent font-bold mt-1">
          {`${product.currency} ${product.discountedPrice}`}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
