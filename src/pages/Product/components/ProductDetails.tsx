import React from "react";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";

const ProductDetails: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Left Column: Image Gallery */}
      <ImageGallery />

      {/* Right Column: Product Info */}
      <ProductInfo />
    </div>
  );
};

export default ProductDetails;