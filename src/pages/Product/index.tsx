import ProductDetails from "./components/ProductDetails";
import SimilarProductsList from "./components/SimilarProductsList";
import useProductDetailsPageData from "./hooks/useProductDetailsPageData";

const Product: React.FC = () => {
  const { productDetails, similarProducts } = useProductDetailsPageData()

  return (
    <main className="bg-brand-off-white py-8 sm:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb Navigation */}
        <div className="text-sm mb-8">
          <a href="index.html" className="hover:text-brand-accent">
            Home
          </a>
          <span className="mx-2 text-gray-400">/</span>
          <a href="shoppingPage.html" className="hover:text-brand-accent">
            Shop
          </a>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">Monstera Deliciosa</span>
        </div>

        {/* Main Product Section */}
        <ProductDetails productDetails={productDetails}/>

        {/* Related Products Section */}
        <SimilarProductsList similarProducts={similarProducts}/>
      </div>
    </main>
  );
};

export default Product;
