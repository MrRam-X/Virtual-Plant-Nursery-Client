import { useEffect, useRef } from "react";
import { useProductDetails } from "./useProductDetails";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../../context/GlobalContext";
import { useSimilarProducts } from "./useSimilarProducts";

const useProductDetailsPageData = () => {
  const { id } = useParams();
  const { addToast, showSpinner, hideSpinner } = useGlobalContext();

  const { data, isLoading, isFetching, isError, error } = useProductDetails(
    id || "",
  );

  const {
    data: similarProducts,
    isLoading: similarProductsLoading,
    isFetching: similarProductsFetching,
    isError: isSimilarProductsError,
    error: similarProductsError,
  } = useSimilarProducts(data?.category, id || "");

  useEffect(() => {
    if (
      isLoading ||
      isFetching ||
      similarProductsLoading ||
      similarProductsFetching
    ) {
      showSpinner();
    } else {
      hideSpinner();
    }
  }, [
    isLoading,
    isFetching,
    similarProductsLoading,
    similarProductsFetching,
    showSpinner,
    hideSpinner,
  ]);

  const hasShownErrorRef = useRef(false);

  useEffect(() => {
    if (isError && similarProductsError && !hasShownErrorRef.current) {
      addToast("Could not fetch product details.", "error");
      console.log(error);
      hasShownErrorRef.current = true;
    }
  }, [isError, isSimilarProductsError, addToast, error, similarProductsError]);

  return {
    productDetails: data,
    similarProducts,
  };
};

export default useProductDetailsPageData;
