import React from "react";

const ProductInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="font-serif text-4xl lg:text-5xl text-brand-green">
        Monstera Deliciosa
      </h1>

      <div className="flex items-center gap-4">
        <div className="flex items-center text-yellow-500">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        <a href="#" className="text-sm text-gray-600 hover:underline">
          (12 Reviews)
        </a>
      </div>

      <div className="flex items-baseline gap-2">
        <p className="text-3xl text-black font-bold">$36.00</p>
        <p className="text-xl text-gray-500 line-through">$45.00</p>
      </div>

      <p className="text-gray-700 leading-relaxed">
        The Monstera Deliciosa, often called the Swiss Cheese Plant, is a
        tropical icon known for its unique, fenestrated leaves. It's a
        relatively easy-to-care-for statement piece that brings a lush, jungle
        vibe to any room.
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
