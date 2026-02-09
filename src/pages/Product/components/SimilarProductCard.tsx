import React from "react";

const SimilarProductCard: React.FC = () => {
  return (
    <div className="bg-white group rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
      <a href="#" className="block relative h-72 sm:h-80">
        <img
          src="https://images.pexels.com/photos/824572/pexels-photo-824572.jpeg"
          alt="ZZ Plant"
          className="w-full h-full object-cover"
        />
      </a>
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center text-xs">
          <p className="text-gray-500">Indoor Plant</p>
          <div className="flex items-center gap-1">
            <i className="fas fa-star text-yellow-500"></i>
            <span className="font-semibold">4.8</span>
          </div>
        </div>
        <div className="flex justify-between items-start gap-2">
          <a
            href="#"
            className="block font-medium text-brand-green hover:underline"
          >
            ZZ Plant
          </a>
          <button className="text-xl text-red-500">
            <i className="fas fa-heart"></i>
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-baseline gap-2">
            <p className="text-lg text-black font-bold">$28.00</p>
            <p className="text-sm text-gray-500 line-through">$40.00</p>
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
