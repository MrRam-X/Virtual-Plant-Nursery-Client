import { useState, useEffect } from "react";

// A key-value object to track which accordions are open
type AccordionState = {
  [key: string]: boolean;
};

const useShoppingPageFilters = (
  setFilters: React.Dispatch<React.SetStateAction<Record<string, string | string[]>>>
) => {
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<AccordionState>({});
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceInput, setPriceInput] = useState({ min: "", max: "" });
  // Effect to prevent body scroll when the mobile filter panel is open
  useEffect(() => {
    document.body.style.overflow = isMobileFilterOpen ? "hidden" : "";
  }, [isMobileFilterOpen]);

  // Handler to toggle the mobile filter panel
  const toggleMobileFilter = () => {
    setMobileFilterOpen((prev) => !prev);
  };

  // Handler to toggle the sort dropdown
  const toggleSortDropdown = () => {
    setSortDropdownOpen((prev) => !prev);
  };

  // Handler to close the sort dropdown (e.g., when an option is selected)
  const closeSortDropdown = () => {
    setSortDropdownOpen(false);
  };

  // Handler to toggle a specific accordion by its name
  const toggleAccordion = (name: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [name]: !prev[name], // Toggle the boolean value for the given name
    }));
  };

  // Handler for multiselect category checkboxes
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setSelectedCategories(
      (prev) =>
        checked
          ? [...prev, value] // add
          : prev.filter((item) => item !== value), // remove
    );
  };

  // Handler for price input fields
  const handlePriceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setPriceInput((prev) => ({ ...prev, [name]: value }));
  };

  // Handler for applying the filters
  const applyFilterButtonHandler = () => {
    setFilters((prev) => ({
      ...prev,
      category: [...selectedCategories],
      ...priceInput,
    }));
  };

  return {
    isMobileFilterOpen,
    isSortDropdownOpen,
    openAccordions,
    selectedCategories,
    priceInput,
    toggleMobileFilter,
    toggleSortDropdown,
    closeSortDropdown,
    toggleAccordion,
    handleCategoryChange,
    handlePriceInputChange,
    applyFilterButtonHandler,
  };
};

export default useShoppingPageFilters;
