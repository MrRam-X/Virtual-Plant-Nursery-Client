import { useState } from "react";

// A key-value object to track which accordions are open
type AccordionState = {
  [key: string]: boolean;
};

const useAccordions = () => {
  const [openAccordions, setOpenAccordions] = useState<AccordionState>({});
  const toggleAccordion = (name: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [name]: !prev[name], // Toggle the boolean value for the given name
    }));
  };

  return {
    openAccordions,
    toggleAccordion
  }
};

export default useAccordions
