import { Link } from "react-router-dom";
import type { Product } from "../../../types/Product";
import { APP_ROUTE_NAMES } from "../../../appConstant";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`${APP_ROUTE_NAMES.PRODUCT}/${product._id}`}
      className="group block"
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-gray-100 mb-3 sm:mb-4">
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-brand-accent text-white text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full uppercase tracking-wider z-10">
          {product.discount}
        </div>

        <img
          src={product.imageUrl[0] || ""}
          alt={`${product.name || "defaultProduct"}.jpg`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="space-y-1 px-1">
        <div className="flex justify-between items-center">
          <p className="uppercase tracking-widest text-[9px] sm:text-[10px] font-bold text-gray-400">
            {product.category}
          </p>
          <div className="flex items-center gap-1 text-gray-500">
            <i className="fas fa-star text-yellow-400 text-[9px] sm:text-[10px]"></i>
            <span className="text-[10px] sm:text-xs font-medium">
              {product.rating}
            </span>
          </div>
        </div>

        <h3 className="font-sans text-base sm:text-lg font-medium text-brand-green group-hover:text-brand-accent transition-colors duration-300 leading-tight pt-1">
          {product.name}
        </h3>

        <div className="flex items-baseline gap-2 pt-0.5">
          <p className="text-base sm:text-lg text-brand-green font-bold">{`${product.currency} ${product.discountedPrice}.00`}</p>
          <p className="text-xs sm:text-sm text-gray-400 line-through">{`${product.currency} ${product.price}.00`}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
