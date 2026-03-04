import React from "react";
import type { Product } from "../../../types/Product";
import { generatePriceTextWithCurrency } from "../../../utils/commonUtil";

export type ProductInfoProps = {
  productDetails: Product | undefined;
};

const ProductInfo: React.FC<ProductInfoProps> = ({ productDetails }) => {
  const actualPrice = generatePriceTextWithCurrency(
    productDetails?.currency || "",
    productDetails?.price || 0,
  );
  const discountedPrice = generatePriceTextWithCurrency(
    productDetails?.currency || "",
    productDetails?.discountedPrice || 0,
  );

  return (
    <div className="space-y-6">
      <h1 className="font-serif text-4xl lg:text-5xl text-brand-green">
        {productDetails?.name || ""}
      </h1>

      <h3 className="text-xl lg:text-2xl">
        Scientific Name: {productDetails?.scientificName}
      </h3>

      <div className="flex items-center gap-4">
        <div className="flex items-center text-yellow-500">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        <a href="#" className="text-sm text-gray-600 hover:underline">
          ({productDetails?.reviews || 0} Reviews)
        </a>
      </div>

      <div className="flex items-baseline gap-2">
        <p className="text-3xl text-black font-bold">{discountedPrice}</p>
        <p className="text-xl text-gray-500 line-through">{actualPrice}</p>
      </div>

      <p className="text-gray-700 leading-relaxed">
        {productDetails?.description || ""}
      </p>

      <div className="flex items-center gap-4 pt-4">
        <div className="quantity-selector flex items-center border rounded-md">
          <button
            data-action="decrement"
            className="px-4 py-2 text-lg font-bold hover:bg-gray-200 rounded-l-md"
          >
            -
          </button>
          <input
            id="quantity-input"
            type="text"
            value="1"
            readOnly
            className="w-12 text-center border-l border-r font-semibold"
          />
          <button
            data-action="increment"
            className="px-4 py-2 text-lg font-bold hover:bg-gray-200 rounded-r-md"
          >
            +
          </button>
        </div>
        <button className="w-full py-3 px-4 rounded-md text-lg font-bold text-white bg-brand-green hover:bg-brand-green-light transition-all flex-1">
          Add to Cart
        </button>
        <button className="py-3 px-4 border rounded-md text-xl text-red-500 hover:bg-red-50 transition-all">
          <i className="far fa-heart"></i>
        </button>
      </div>

      {/* Accordion for Details */}
      <div className="space-y-4 pt-4">
        {/* Care Guide Accordion */}
        <div className="border-t">
          <button
            data-accordion-button
            className="w-full flex justify-between items-center py-4 text-left"
          >
            <h3 className="font-semibold text-lg text-brand-green">
              Care Guide
            </h3>
            <i className="fas fa-plus transition-transform duration-300"></i>
          </button>
          <div
            className="pb-4 space-y-2 text-gray-600 hidden"
            data-accordion-panel
          >
            <p>
              <strong>Light:</strong> Bright, indirect sunlight. Avoid direct
              sun.
            </p>
            <p>
              <strong>Water:</strong> Water every 1-2 weeks, allowing soil to
              dry out between waterings.
            </p>
            <p>
              <strong>Humidity:</strong> Prefers humid conditions. Mist
              regularly.
            </p>
          </div>
        </div>
        {/* Shipping Accordion */}
        <div className="border-t">
          <button
            data-accordion-button
            className="w-full flex justify-between items-center py-4 text-left"
          >
            <h3 className="font-semibold text-lg text-brand-green">
              Shipping & Returns
            </h3>
            <i className="fas fa-plus transition-transform duration-300"></i>
          </button>
          <div
            className="pb-4 space-y-2 text-gray-600 hidden"
            data-accordion-panel
          >
            <p>
              Ships within 3-5 business days. We offer a 14-day return policy on
              all plants if they arrive damaged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
