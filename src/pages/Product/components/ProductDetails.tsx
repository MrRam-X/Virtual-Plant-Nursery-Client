import React from "react";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import type { Product } from "../../../types/Product";
import type {
  CartItem,
  CartActionType,
} from "../../../context/UserActionContext";

export type ProductDetailsProps = {
  productDetails: Product | undefined;
  cartItems: CartItem[];
  updateCart: (item: Product, action: CartActionType) => void;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productDetails,
  cartItems,
  updateCart,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Left Column: Image Gallery */}
      <ImageGallery
        name={productDetails?.name || ""}
        imageUrl={productDetails?.imageUrl || []}
      />

      {/* Right Column: Product Info */}
      <ProductInfo
        productDetails={productDetails}
        cartItems={cartItems}
        updateCart={updateCart}
      />
    </div>
  );
};

export default ProductDetails;