import React from "react";
import type { Product } from "../../../types/Product";
import { generatePriceTextWithCurrency } from "../../../utils/commonUtil";
import { Link } from "react-router-dom";
import { APP_ROUTE_NAMES } from "../../../appConstant";

type SimilarProductCardProps = {
  similarProduct: Product;
};

const SimilarProductCard: React.FC<SimilarProductCardProps> = ({
  similarProduct,
}) => {
  const {
    _id,
    name,
    imageUrl,
    category,
    rating,
    price,
    discount,
    discountedPrice,
    currency,
  } = similarProduct;

  return (
    <div className="bg-white group rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
      <Link
        to={`${APP_ROUTE_NAMES.PRODUCT}/${_id || ""}`}
        className="block relative h-72 sm:h-80"
      >
        <div className="absolute top-0 left-0 bg-brand-accent text-white text-xs font-bold px-2 py-1 m-3 rounded-md">
          {discount || ''}
        </div>
        <img
          src={imageUrl[0] || ""}
          alt={`An image of ${name || ""}`}
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center text-xs">
          <p className="text-gray-500">{category || ""}</p>
          <div className="flex items-center gap-1">
            <i className="fas fa-star text-yellow-500"></i>
            <span className="font-semibold">{rating || ""}</span>
          </div>
        </div>
        <div className="flex justify-between items-start gap-2">
          <Link
            to={`${APP_ROUTE_NAMES.PRODUCT}/${_id || ""}`}
            className="block font-medium text-brand-green hover:underline"
          >
            {name || ""}
          </Link>
          <button className="text-xl text-red-500">
            <i className="fas fa-heart"></i>
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-baseline gap-2">
            <p className="text-lg text-black font-bold">
              {generatePriceTextWithCurrency(currency, discountedPrice)}
            </p>
            <p className="text-sm text-gray-500 line-through">
              {generatePriceTextWithCurrency(currency, price)}
            </p>
          </div>
          <button className="text-2xl text-brand-green">
            <i className="fas fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
