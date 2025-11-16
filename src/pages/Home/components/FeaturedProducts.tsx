import React from "react";
import type { Product } from "../../../types/Product";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export type FeaturedProductsProps = {
  featuredProducts: Product[];
};

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  featuredProducts,
}) => {
  if (featuredProducts.length === 0) {
    return (
      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-brand-green">
              Fresh Picks Coming Soon!
            </h2>
            <p className="text-lg mt-2">
              Our new featured plants are getting ready for their spotlight.
            </p>
          </div>
          <div className="flex items-center justify-center py-10">
            <div className="bg-white p-8 sm:p-12 rounded-lg shadow-sm border text-center max-w-lg w-full">
              <div className="w-20 h-20 bg-brand-off-white rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-leaf text-4xl text-brand-green opacity-50"></i>
              </div>
              <p className="text-gray-600 mt-2">
                In the meantime, feel free to browse our full collection.
              </p>
              <div className="mt-8">
                <Link
                  to="/shop"
                  className="inline-block bg-brand-green text-white font-bold py-3 px-8 text-lg hover:bg-brand-green-light rounded-md transition-colors"
                >
                  Explore All Plants
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-16 sm:pb-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-brand-green">
            Featured Products
          </h2>
          <p className="text-lg mt-2">Check out our most popular plants</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
