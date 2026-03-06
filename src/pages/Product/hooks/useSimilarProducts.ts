import { useQuery } from "@tanstack/react-query";
import type { Product } from "../../../types/Product";
import { productService } from "../../../services/productService";
import { MAX_SIMILAR_PRODUCTS_TO_DISPLAY } from "../../../appConstant";

export const useSimilarProducts = (category?: string, productId?: string) => {
  return useQuery<Product[]>({
    queryKey: ["similarProducts", category],
    enabled: !!category, // runs only when category exists
    queryFn: () => productService.getSimilarProducts({category}),
    select: (products) =>
      products.filter((product) => product._id !== productId) // remove current product
      .slice(0, MAX_SIMILAR_PRODUCTS_TO_DISPLAY), // limit to max allowed similar products to display in the UI
    staleTime: 1000 * 60 * 10,
  });
};