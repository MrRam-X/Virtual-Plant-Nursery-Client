import { useState } from "react";
import useShoppingPageFilters from "./hooks/useShoppingPageFilters";
import heroBackgroundImage from "../../assets/images/planto-background.jpeg";
import ProductsList from "./components/ProductsList";
import useShoppingPageData from "./hooks/useShoppingPageData";
import ProductsPagination from "./components/ProductsPagination";

const Shop = () => {
  // --- UI Logic Hook ---
  const {
    isMobileFilterOpen,
    isSortDropdownOpen,
    openAccordions,
    toggleMobileFilter,
    toggleSortDropdown,
    closeSortDropdown,
    toggleAccordion,
  } = useShoppingPageFilters();

  const {
    products,
    paginationButtons,
    currentPage,
    hasPrev,
    hasNext,
    productNumbersInfoDisplayText,
    goToPrevPage,
    goToNextPage,
    goToPage,
  } = useShoppingPageData();

  const [selectedSort, setSelectedSort] = useState("Sort by: Latest");

  const handleSelectSort = (option: string) => {
    setSelectedSort(option);
    closeSortDropdown();
  };

  return (
    <main className="bg-brand-off-white">
      <section className="relative bg-brand-green h-[40vh] min-h-[300px]">
        <div className="absolute inset-0">
          <img
            src={heroBackgroundImage}
            alt="Nursery image background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl leading-tight">
            Your Green Sanctuary Awaits
          </h1>
          <p className="max-w-2xl mt-4 text-lg md:text-xl">
            Explore our curated collection of plants and essentials to bring
            nature home.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-12">
          {/* ===== LEFT SIDEBAR - FILTERS ===== */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 pl-4 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
                <button className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-brand-green">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <h2 className="font-serif text-3xl text-brand-green mb-6">
                Filters
              </h2>
              <div className="space-y-6">
                {/* Category Filter Accordion */}
                <div className="border-b border-gray-200 pb-6">
                  <button
                    onClick={() => toggleAccordion("category")}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="font-semibold text-lg text-brand-green">
                      Categories
                    </h3>
                    <i
                      className={`fas fa-plus transition-transform duration-300 ${
                        openAccordions["category"] ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  <div
                    className={`mt-4 space-y-3 ${
                      openAccordions["category"] ? "" : "hidden"
                    }`}
                  >
                    {/* Checkbox items */}
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded accent-brand-green"
                      />
                      <span className="ml-3">Indoor Plants</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded accent-brand-green"
                      />
                      <span className="ml-3">Outdoor Plants</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded accent-brand-green"
                      />
                      <span className="ml-3">Succulents</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded accent-brand-green"
                      />
                      <span className="ml-3">Gardening Tools</span>
                    </label>
                  </div>
                </div>
                {/* Price Range Filter Accordion */}
                <div className="border-b border-gray-200 pb-6">
                  <button
                    onClick={() => toggleAccordion("price")}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="font-semibold text-lg text-brand-green">
                      Price Range
                    </h3>
                    <i
                      className={`fas fa-plus transition-transform duration-300 ${
                        openAccordions["price"] ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  <div
                    className={`mt-4 ${
                      openAccordions["price"] ? "" : "hidden"
                    }`}
                  >
                    {/* Price inputs */}
                    <div className="flex items-center justify-between space-x-3">
                      <div className="w-1/2">
                        <label htmlFor="min-price" className="text-sm">
                          Min
                        </label>
                        <input
                          type="number"
                          id="min-price"
                          placeholder="$0"
                          className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
                        />
                      </div>
                      <div className="w-1/2">
                        <label htmlFor="max-price" className="text-sm">
                          Max
                        </label>
                        <input
                          type="number"
                          id="max-price"
                          placeholder="$500"
                          className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full py-3 px-4 rounded-md text-lg font-bold text-white bg-brand-green hover:bg-brand-green-light transition-all">
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>

          {/* ===== RIGHT SIDE DISPLAY - PRODUCTS ===== */}
          <div className="lg:col-span-3">
            {/* Top Bar: Mobile Filters & Sorting */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <p className="text-gray-600 w-full sm:w-auto">
                {productNumbersInfoDisplayText}
              </p>
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={toggleMobileFilter}
                  className="lg:hidden flex-1 sm:flex-initial py-2 px-4 border rounded-md flex items-center justify-center"
                >
                  <i className="fas fa-filter mr-2"></i>
                  <span>Filters</span>
                </button>
                {/* Custom Sort Dropdown */}
                <div className="flex-1 sm:flex-initial relative">
                  <button
                    onClick={toggleSortDropdown}
                    className="w-full border rounded-md p-2 flex items-center justify-between bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  >
                    <span className="text-gray-700">{selectedSort}</span>
                    <i
                      className={`fas fa-chevron-down text-xs text-gray-500 transition-transform duration-300 ${
                        isSortDropdownOpen ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  <div
                    className={`absolute right-0 mt-1 w-full bg-white border rounded-md shadow-lg z-20 ${
                      isSortDropdownOpen ? "" : "hidden"
                    }`}
                  >
                    <ul className="py-1">
                      <li
                        onClick={() => handleSelectSort("Sort by: Latest")}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-brand-off-white cursor-pointer"
                      >
                        Latest
                      </li>
                      <li
                        onClick={() =>
                          handleSelectSort("Sort by: Price (Low to High)")
                        }
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-brand-off-white cursor-pointer"
                      >
                        Price (Low to High)
                      </li>
                      <li
                        onClick={() =>
                          handleSelectSort("Sort by: Price (High to Low)")
                        }
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-brand-off-white cursor-pointer"
                      >
                        Price (High to Low)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <ProductsList products={products} />

            {/* Pagination */}
            <ProductsPagination
              hasPrev={hasPrev}
              hasNext={hasNext}
              currentPage={currentPage}
              paginationButtons={paginationButtons}
              goToPrevPage={goToPrevPage}
              goToNextPage={goToNextPage}
              goToPage={goToPage}
            />
          </div>
        </div>
      </div>

      {/* --- Mobile Filter Panel --- */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${
          isMobileFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={toggleMobileFilter}
          className="absolute inset-0 bg-black bg-opacity-50"
        ></div>
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-brand-off-white shadow-xl p-6 overflow-y-auto transition-transform duration-300 ${
            isMobileFilterOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-serif text-3xl text-brand-green">Filters</h2>
            <button
              onClick={toggleMobileFilter}
              className="text-gray-500 hover:text-brand-green"
            >
              <i className="fas fa-times fa-2x"></i>
            </button>
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-4 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
            <button className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-brand-green">
              <i className="fas fa-search"></i>
            </button>
          </div>
          {/* Cloned filter content for mobile */}
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <button
                onClick={() => toggleAccordion("mobile-category")}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="font-semibold text-lg text-brand-green">
                  Categories
                </h3>
                <i
                  className={`fas fa-plus transition-transform duration-300 ${
                    openAccordions["mobile-category"] ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              <div
                className={`mt-4 space-y-3 ${
                  openAccordions["mobile-category"] ? "" : "hidden"
                }`}
              >
                {/* Mobile checkbox items */}
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded accent-brand-green"
                  />
                  <span className="ml-3">Indoor Plants</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded accent-brand-green"
                  />
                  <span className="ml-3">Outdoor Plants</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded accent-brand-green"
                  />
                  <span className="ml-3">Succulents</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded accent-brand-green"
                  />
                  <span className="ml-3">Gardening Tools</span>
                </label>
              </div>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <button
                onClick={() => toggleAccordion("price")}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="font-semibold text-lg text-brand-green">
                  Price Range
                </h3>
                <i
                  className={`fas fa-plus transition-transform duration-300 ${
                    openAccordions["price"] ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              <div
                className={`mt-4 ${openAccordions["price"] ? "" : "hidden"}`}
              >
                {/* Price inputs */}
                <div className="flex items-center justify-between space-x-3">
                  <div className="w-1/2">
                    <label htmlFor="min-price" className="text-sm">
                      Min
                    </label>
                    <input
                      type="number"
                      id="min-price"
                      placeholder="$0"
                      className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="max-price" className="text-sm">
                      Max
                    </label>
                    <input
                      type="number"
                      id="max-price"
                      placeholder="$500"
                      className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full py-3 px-4 rounded-md text-lg font-bold text-white bg-brand-green hover:bg-brand-green-light transition-all">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
