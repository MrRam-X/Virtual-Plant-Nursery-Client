import React from "react";

type ProductsPaginationProps = {
  hasPrev: boolean;
  hasNext: boolean;
  currentPage: number;
  paginationButtons: number[];
  goToPrevPage: () => void;
  goToNextPage: () => void;
  goToPage: (page: number) => void;
};

const ProductsPagination: React.FC<ProductsPaginationProps> = ({
  hasPrev,
  hasNext,
  currentPage,
  paginationButtons,
  goToPrevPage,
  goToNextPage,
  goToPage,
}) => {
  return (
    <div className="flex justify-center mt-12">
      <nav className="flex items-center space-x-2">
        <button
          onClick={goToPrevPage}
          disabled={!hasPrev}
          className={`px-4 py-2 border rounded-md hover:bg-gray-200 transition-colors ${
            !hasPrev ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        {paginationButtons.map((button, idx) => {
          return (
            <button
              key={`${idx}-${button}`}
              onClick={() => goToPage(button)}
              disabled={currentPage === button}
              className={`px-4 py-2 border rounded-md ${
                currentPage === button
                  ? "bg-brand-green text-white cursor-not-allowed"
                  : "hover:bg-gray-200 transition-colors"
              }`}
            >
              {button}
            </button>
          );
        })}

        <button
          onClick={goToNextPage}
          disabled={!hasNext}
          className={`px-4 py-2 border rounded-md hover:bg-gray-200 transition-colors ${
            !hasNext ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </nav>
    </div>
  );
};

export default ProductsPagination;
