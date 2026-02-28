import { useQuery } from "@tanstack/react-query";
import { productService } from "../../../services/productService";
import type { PaginatedResponse } from "../../../types/api";
import type { Product } from "../../../types/Product";

export const useProducts = ({
  page,
  filters,
}: {
  page: number;
  filters: Record<string, string[] | string>;
}) => {
  return useQuery<PaginatedResponse<Product>>({
    queryKey: [
      'products',
      page,
      JSON.stringify(filters),
    ],
    queryFn: () =>
      productService.getAllProducts({ page, ...filters }),

    placeholderData: (previousData) => previousData,
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    retry: false,
  });
};