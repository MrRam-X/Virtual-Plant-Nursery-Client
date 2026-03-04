import { useEffect, useRef } from "react";
import { useProductDetails } from "./useProductDetails";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../../context/GlobalContext";

const useProductDetailsPageData = () => {
  const { id } = useParams();
  const { addToast, showSpinner, hideSpinner } = useGlobalContext();

  const { data, isLoading, isFetching, isError, error } = useProductDetails(
    id || "",
  );

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
      addToast("Could not fetch product details.", "error");
      console.log(error);
      hasShownErrorRef.current = true;
    }
  }, [isError, addToast, error]);

  return {
    productDetails: data,
  };
};

export default useProductDetailsPageData;
