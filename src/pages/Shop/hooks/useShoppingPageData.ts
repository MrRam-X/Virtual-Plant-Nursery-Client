import { useState, useMemo, useEffect, useRef } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";
import { MAX_PAGINATION_BUTTONS } from "../../../appConstant";
import { useProducts } from "./useProducts";

const useShoppingPageData = () => {
  const { addToast, showSpinner, hideSpinner } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const [limit] = useState<number>(9);

  const { data, isLoading, isFetching, isError, error } = useProducts({
    page: currentPage,
    filters,
  });

  const products = data?.data ?? [];
  const totalPages = data?.totalPages ?? 1;
  const totalProducts = data?.total ?? 0;
  const hasPrev = data?.hasPrev ?? false;
  const hasNext = data?.hasNext ?? false;

  // Pagination Info Text
  const startIndex = (currentPage - 1) * limit + 1;
  const endIndex = Math.min(currentPage * limit, totalProducts);

  const productNumbersInfoDisplayText = `Showing ${startIndex} - ${endIndex} of ${totalProducts}`;

  // Navigation Handlers (no API call manually)
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToNextPage = () => {
    if (hasNext) setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (hasPrev) setCurrentPage((prev) => prev - 1);
  };

  const paginationButtons = useMemo(() => {
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
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (isLoading || isFetching) {
      showSpinner();
    } else {
      hideSpinner();
    }
  }, [isLoading, isFetching, showSpinner, hideSpinner]);

  const hasShownErrorRef = useRef(false);

  useEffect(() => {
    if (isError && !hasShownErrorRef.current) {
      addToast("Could not fetch products.", "error");
      console.log(error)
      hasShownErrorRef.current = true;
    }
  }, [isError, addToast, error]);

  return {
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
    setFilters,
    isLoading,
    isFetching,
    isError,
  };
};

export default useShoppingPageData;
