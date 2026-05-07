import React from "react";
import type { Product } from "../../../types/Product";
import { generatePriceTextWithCurrency } from "../../../utils/commonUtil";
import useAccordions from "../../../hooks/useAccordions";
import type {
  CartItem,
  CartActionType,
} from "../../../context/UserActionContext";

export type ProductInfoProps = {
  productDetails: Product | undefined;
  cartItems: CartItem[];
  updateCart: (item: Product, action: CartActionType) => void;
};

const ProductInfo: React.FC<ProductInfoProps> = ({
  productDetails,
  cartItems,
  updateCart,
}) => {
  const actualPrice = generatePriceTextWithCurrency(
    productDetails?.currency || "",
    productDetails?.price || 0,
  );
  const discountedPrice = generatePriceTextWithCurrency(
    productDetails?.currency || "",
    productDetails?.discountedPrice || 0,
  );

  const { openAccordions, toggleAccordion } = useAccordions();

  const inCartItem =
    productDetails && cartItems.find((item) => item._id === productDetails._id);

  const itemQuantity = inCartItem?.quantity || 0;

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
        {inCartItem ? (
          <div className="flex items-center border rounded-md w-min mt-2 bg-brand-off-white">
            <button
              onClick={() => updateCart(productDetails as Product, "REDUCE")}
              className="px-3 py-1 text-lg hover:bg-gray-200"
            >
              -
            </button>
            <input
              type="text"
              value={itemQuantity}
              readOnly
              className="w-10 text-center font-semibold"
            />
            <button
              onClick={() => updateCart(productDetails as Product, "ADD")}
              className="px-3 py-1 text-lg hover:bg-gray-200"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => updateCart(productDetails as Product, "ADD")}
            className="w-full py-3 px-4 rounded-md text-lg font-bold text-white bg-brand-green hover:bg-brand-green-light transition-all flex-1"
          >
            Add to Cart
          </button>
        )}

        <button className="py-3 px-4 border rounded-md text-xl text-red-500 hover:bg-red-50 transition-all">
          <i className="far fa-heart"></i>
        </button>
      </div>

      {/* Accordion for Details */}
      <div className="space-y-4 pt-4">
        {/* Care Guide Accordion */}
        <div className="border-t">
          <button
            onClick={() => toggleAccordion("careGuide")}
            data-accordion-button
            className="w-full flex justify-between items-center py-4 text-left"
          >
            <h3 className="font-semibold text-lg text-brand-green">
              Care Guide
            </h3>
            <i
              className={`fas ${openAccordions["careGuide"] ? "fa-minus" : "fa-plus"} transition-transform duration-300 ${openAccordions["careGuide"] ? "rotate-180" : ""}`}
            ></i>
          </button>
          <div
            className={`pb-4 space-y-2 text-gray-600 ${openAccordions["careGuide"] ? "" : "hidden"}`}
            data-accordion-panel
          >
            {Object.entries(productDetails?.careGuide || {}).map(
              ([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong> {value}
                </p>
              ),
            )}
          </div>
        </div>
        {/* Shipping Accordion */}
        <div className="border-t">
          <button
            onClick={() => toggleAccordion("shippingReturns")}
            data-accordion-button
            className="w-full flex justify-between items-center py-4 text-left"
          >
            <h3 className="font-semibold text-lg text-brand-green">
              Shipping & Returns
            </h3>
            <i
              className={`fas ${openAccordions["shippingReturns"] ? "fa-minus" : "fa-plus"} transition-transform duration-300 ${openAccordions["shippingReturns"] ? "rotate-180" : ""}`}
            ></i>
          </button>
          <div
            className={`pb-4 space-y-2 text-gray-600 ${openAccordions["shippingReturns"] ? "" : "hidden"}`}
            data-accordion-panel
          >
            <p>{productDetails?.shippingDetails || ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
