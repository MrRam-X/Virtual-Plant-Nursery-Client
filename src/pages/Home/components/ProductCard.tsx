import React from "react";
import type { Product } from "../../../types/Product";
import { Link } from "react-router-dom";

export type ProductProps = {
  key: string;
  product: Product;
};

const ProductCard: React.FC<ProductProps> = ({ product, key }) => {
  return (
    <div className="bg-white shadow-lg group" key={key}>
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 bg-brand-accent text-white text-xs font-bold px-2 py-1 m-3 rounded-md z-10">
          {product.discount}
        </div>
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
      <div className="p-4 text-center space-y-3">
        <div className="flex justify-between items-center text-xs text-gray-500">
          <p>{product.category}</p>
          <div className="flex items-center gap-1">
            <i className="fas fa-star text-yellow-500"></i>
            <span className="font-semibold">{product.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-medium text-brand-green">{product.name}</h3>

        <div className="flex justify-center items-baseline gap-2">
          <p className="text-lg text-brand-accent font-bold">{`${product.currency} ${product.discountedPrice}.00`}</p>
          <p className="text-sm text-gray-500 line-through">{`${product.currency} ${product.price}.00`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
