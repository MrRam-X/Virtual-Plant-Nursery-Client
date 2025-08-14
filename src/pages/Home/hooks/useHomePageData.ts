import { useEffect, useState } from "react";
import type { Product } from "../../../types/Product";
import { productService } from "../../../services/productService";
import { useGlobalContext } from "../../../context/GlobalContext";

const useHomePageData = () => {
  const { showSpinner, hideSpinner } = useGlobalContext();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      showSpinner();
      try {
        const data = await productService.getFeaturedProducts();
        setFeaturedProducts(data);
      } catch (err) {
        console.log("Failed to load products.", err);
      } finally {
        hideSpinner();
      }
    };

    fetchFeaturedProducts();
  }, []);

  return {
    featuredProducts
  }
};

export default useHomePageData;
