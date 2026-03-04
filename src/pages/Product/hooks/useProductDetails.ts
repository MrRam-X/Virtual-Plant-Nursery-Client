import { useQuery, useQueryClient } from "@tanstack/react-query";
import { productService } from "../../../services/productService";
import type { Product } from "../../../types/Product";
import type { PaginatedResponse } from "../../../types/api";

export const useProductDetails = (productId: string) => {
  const queryClient = useQueryClient();

  return useQuery<Product>({
    queryKey: ["productDetail", productId],
    enabled: !!productId,
    queryFn: () => productService.getProductDetails(productId),
    initialData: () => {
      // Get all product queries from cache
      const allProductsQueries = queryClient.getQueriesData<PaginatedResponse<Product>>({
        queryKey: ["products"],
      });

      // Flatten and search
      for (const [, response] of allProductsQueries) {
        const foundProduct = response?.data?.find(
          (product: Product) => product._id === productId,
        );
        if (foundProduct) return foundProduct;
      }

      return undefined;
    },
    placeholderData: (previousData) => previousData,
  });
};
