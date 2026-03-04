import React from "react";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import type { Product } from "../../../types/Product";

export type ProductDetailsProps = {
  productDetails: Product | undefined
}

const ProductDetails: React.FC<ProductDetailsProps> = ({productDetails}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Left Column: Image Gallery */}
      <ImageGallery name={productDetails?.name || ''} imageUrl={productDetails?.imageUrl || []}/>

      {/* Right Column: Product Info */}
      <ProductInfo productDetails={productDetails}/>
    </div>
  );
};

export default ProductDetails;