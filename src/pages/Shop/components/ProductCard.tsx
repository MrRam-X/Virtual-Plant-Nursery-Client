import { Link } from "react-router-dom";
import type { Product } from "../../../types/Product";
import { APP_ROUTE_NAMES } from "../../../appConstant";

type ProductCardProps = {
  key: string;
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ key, product }) => {
  return (
    <div
      className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 flex flex-col"
      key={key}
    >
      <div className="flex-grow">
        <Link
          to={`${APP_ROUTE_NAMES.PRODUCT}/${product._id}`}
          className="block relative h-72 sm:h-80 overflow-hidden group"
        >
          <div className="absolute top-0 left-0 bg-brand-accent text-white text-xs font-bold px-2 py-1 m-3 rounded-md z-10">
            {product.discount}
          </div>
          <img
            src={product.imageUrl[0] || ""}
            alt={`${product.name || "defaultProduct"}.jpg`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>

        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center text-xs">
            <p className="text-gray-500">{product.category}</p>
            <div className="flex items-center gap-1">
              <i className="fas fa-star text-yellow-500"></i>
              <span className="font-semibold">{product.rating}</span>
            </div>
          </div>
          <Link
            to={`${APP_ROUTE_NAMES.PRODUCT}/${product._id}`}
            className="block font-medium text-brand-green hover:underline text-lg"
          >
            {product.name}
          </Link>
          <div className="flex items-baseline gap-2">
            <p className="text-lg text-black font-bold">{`${product.currency} ${product.discountedPrice}.00`}</p>
            <p className="text-sm text-gray-500 line-through">{`${product.currency} ${product.price}.00`}</p>
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
