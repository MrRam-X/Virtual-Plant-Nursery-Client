import { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const useContactForm = () => {
  const [contactFormData, setContactFormData] = useState<ContactFormData>(
    initialContactFormState
  );

  // Function for updating form input fields
  const contactFormInputFieldsHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setContactFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function for handling form submit
  const contactFormSubmitHandler = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // --- Validation of form inputs and api call will be made here ---
    console.log("form submit");
  };

  return {
    contactFormData,
    contactFormInputFieldsHandler,
    contactFormSubmitHandler,
  };
};

export default useContactForm;
