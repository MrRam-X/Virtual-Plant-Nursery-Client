import React from "react";

const SimilarProductsList: React.FC = () => {
  return (
    <div className="mt-24">
      <h2 className="font-serif text-4xl text-brand-green text-center mb-12">
        You Might Also Like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Related Product 1 */}
        <div className="bg-white group rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
          <a href="#" className="block relative h-72 sm:h-80">
            <div className="absolute top-0 left-0 bg-brand-accent text-white text-xs font-bold px-2 py-1 m-3 rounded-md">
              -15%
            </div>
            <img
              src="https://images.pexels.com/photos/7245625/pexels-photo-7245625.jpeg"
              alt="Fiddle Leaf Fig"
              className="w-full h-full object-cover"
            />
          </a>
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <p className="text-gray-500">Indoor Plant</p>
              <div className="flex items-center gap-1">
                <i className="fas fa-star text-yellow-500"></i>
                <span className="font-semibold">4.7</span>
              </div>
            </div>
            <div className="flex justify-between items-start gap-2">
              <a
                href="#"
                className="block font-medium text-brand-green hover:underline"
              >
                Fiddle Leaf Fig
              </a>
              <button className="text-xl text-red-500">
                <i className="fas fa-heart"></i>
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-baseline gap-2">
                <p className="text-lg text-black font-bold">$63.75</p>
                <p className="text-sm text-gray-500 line-through">$75.00</p>
              </div>
              <button className="text-2xl text-brand-green">
                <i className="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Related Product 2 */}
        <div className="bg-white group rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
          <a href="#" className="block relative h-72 sm:h-80">
            <img
              src="https://images.pexels.com/photos/1383044/pexels-photo-1383044.jpeg"
              alt="Snake Plant"
              className="w-full h-full object-cover"
            />
          </a>
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <p className="text-gray-500">Succulent</p>
              <div className="flex items-center gap-1">
                <i className="fas fa-star text-yellow-500"></i>
                <span className="font-semibold">4.9</span>
              </div>
            </div>
            <div className="flex justify-between items-start gap-2">
              <a
                href="#"
                className="block font-medium text-brand-green hover:underline"
              >
                Snake Plant
              </a>
              <button className="text-xl text-red-500">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-baseline gap-2">
                <p className="text-lg text-black font-bold">$26.25</p>
                <p className="text-sm text-gray-500 line-through">$35.00</p>
              </div>
              <button className="text-2xl text-brand-green">
                <i className="fas fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Related Product 3 */}
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
      </div>
    </div>
  );
};

export default SimilarProductsList;
