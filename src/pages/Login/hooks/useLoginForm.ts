import { useState } from "react";

type LoginFormData = {
  email: string;
  password: string;
};

const initialLoginFormState = {
  email: "",
  password: "",
};

const useLoginForm = () => {
  const [loginFormData, setLoginFormData] = useState<LoginFormData>(
    initialLoginFormState
  );

  // Function for updating form input fields change
  const loginFormInputFieldsHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  // Function for handling form submit
  const loginFormSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // --- Validation of form inputs and api call will be made here ---
    console.log("form submit");
  };

  return {
    loginFormData,
    loginFormInputFieldsHandler,
    loginFormSubmitHandler,
  };
};

export default useLoginForm;
