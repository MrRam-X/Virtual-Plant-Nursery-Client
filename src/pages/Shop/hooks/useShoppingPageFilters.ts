import { useState, useEffect } from 'react';

// A key-value object to track which accordions are open
type AccordionState = {
  [key: string]: boolean;
};

export const useShoppingPageUI = () => {
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<AccordionState>({});

  // Effect to prevent body scroll when the mobile filter panel is open
  useEffect(() => {
    document.body.style.overflow = isMobileFilterOpen ? 'hidden' : '';
  }, [isMobileFilterOpen]);

  // Handler to toggle the mobile filter panel
  const toggleMobileFilter = () => {
    setMobileFilterOpen(prev => !prev);
  };

  // Handler to toggle the sort dropdown
  const toggleSortDropdown = () => {
    setSortDropdownOpen(prev => !prev);
  };
  
  // Handler to close the sort dropdown (e.g., when an option is selected)
  const closeSortDropdown = () => {
      setSortDropdownOpen(false);
  };

  // Handler to toggle a specific accordion by its name
  const toggleAccordion = (name: string) => {
    setOpenAccordions(prev => ({
      ...prev,
      [name]: !prev[name], // Toggle the boolean value for the given name
    }));
  };

  return {
    isMobileFilterOpen,
    isSortDropdownOpen,
    openAccordions,
    toggleMobileFilter,
    toggleSortDropdown,
    closeSortDropdown,
    toggleAccordion,
  };
};