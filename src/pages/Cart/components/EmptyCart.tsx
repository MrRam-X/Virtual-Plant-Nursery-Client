import React from "react";
import { Link } from "react-router-dom";
import { APP_ROUTE_NAMES } from "../../../appConstant";

const EmptyCart: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 sm:p-16 rounded-lg shadow-sm border text-center">
      <i className="fas fa-shopping-cart text-8xl text-gray-200 mb-8"></i>

      <h2 className="font-serif text-3xl text-brand-green mt-4">
        Your Cart is Currently Empty
      </h2>

      <p className="text-gray-600 mt-3 max-w-md mx-auto">
        Looks like you haven't found your perfect green companion yet. Browse
        our collections to find a new plant for your home.
      </p>

      <div className="mt-8">
        <Link
          to={APP_ROUTE_NAMES.SHOP}
          className="inline-flex items-center gap-3 bg-brand-green text-white font-bold py-3 px-8 text-lg hover:bg-brand-green-light rounded-md transition-colors"
        >
          <i className="fas fa-leaf"></i>
          <span>Start Shopping</span>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
