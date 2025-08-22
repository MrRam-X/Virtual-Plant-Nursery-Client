import { useEffect, useState, useCallback } from "react";
import type { Product } from "../../../types/Product";
import { useGlobalContext } from "../../../context/GlobalContext";
import { productService } from "../../../services/productService";
import type { PaginatedResponse } from "../../../types/api";
import { MAX_PAGINATION_BUTTONS } from "../../../appConstant";

const useShoppingPageData = () => {
  const [apiResponse, setApiResponse] = useState<Record<number, Product[]>>({});

  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [hasPrev, setHasPrev] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(9);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  const { addToast, showSpinner, hideSpinner } = useGlobalContext();

  const fetchProducts = useCallback(
    async (page: number) => {
      showSpinner();
      try {
        const res: PaginatedResponse<Product> =
          await productService.getAllProducts({ page });

        setApiResponse((prev) => ({
          ...prev,
          [page]: res.data,
        }));
        setProducts(res.data);
        setCurrentPage(res.page);
        setTotalPages(res.totalPages);
        setHasPrev(res.hasPrev);
        setHasNext(res.hasNext);
        setLimit(res.limit);
        setTotalProducts(res.total);
      } catch (err) {
        addToast("Could not fetch products.", "error");
        console.error(err);
      } finally {
        hideSpinner();
      }
    },
    [addToast, showSpinner, hideSpinner]
  );

  const startIndex = (currentPage - 1) * limit + 1;
  const endIndex = Math.min(currentPage * limit, totalProducts);

  const productNumbersInfoDisplayText = `Showing ${startIndex} - ${endIndex} of ${totalProducts}`;

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      fetchProducts(page);
    }
  };

  const goToNextPage = () => {
    if (hasNext) goToPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (hasPrev) goToPage(currentPage - 1);
  };

  const paginationButtons = (() => {
    if (totalPages <= MAX_PAGINATION_BUTTONS) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 2) {
      return [1, 2, 3];
    }
    if (currentPage >= totalPages - 1) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }
    return [currentPage - 1, currentPage, currentPage + 1];
  })();

  useEffect(() => {
    fetchProducts(currentPage);
  }, []); // initial load

  return {
    apiResponse,
    products,
    currentPage,
    totalPages,
    totalProducts,
    limit,
    hasPrev,
    hasNext,
    paginationButtons,
    productNumbersInfoDisplayText,
    goToPrevPage,
    goToNextPage,
    goToPage,
  };
};

export default useShoppingPageData;
