const ProductCard = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 flex flex-col">
      <div className="flex-grow">
        <a
          href="product-detail.html"
          className="block relative h-72 sm:h-80 overflow-hidden group"
        >
          <div className="absolute top-0 left-0 bg-brand-accent text-white text-xs font-bold px-2 py-1 m-3 rounded-md z-10">
            -20%
          </div>
          <img
            src="https://images.pexels.com/photos/6297518/pexels-photo-6297518.jpeg"
            alt="Monstera Deliciosa"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
          <a
            href="product-detail.html"
            className="block font-medium text-brand-green hover:underline text-lg"
          >
            Monstera Deliciosa
          </a>
          <div className="flex items-baseline gap-2">
            <p className="text-lg text-black font-bold">$36.00</p>
            <p className="text-sm text-gray-500 line-through">$45.00</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 p-2 space-y-2">
        <button className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold bg-white text-red-500 border border-red-500 rounded-sm hover:bg-red-500 hover:text-white transition-colors duration-300">
          <i className="fas fa-heart"></i>
          <span>Wishlist</span>
        </button>

        <button className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold bg-brand-green text-white border border-transparent rounded-md hover:bg-white hover:text-brand-green hover:border-brand-green transition-colors duration-300">
          <i className="fas fa-shopping-cart"></i>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
