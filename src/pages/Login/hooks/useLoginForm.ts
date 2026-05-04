import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useGlobalContext } from "../../../context/GlobalContext";
import { authService } from "../../../services/authService";

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
    initialLoginFormState,
  );
  const { login } = useAuth();
  const { showSpinner, hideSpinner, addToast } = useGlobalContext();
  const navigate = useNavigate();

  // Function for updating form input fields change
  const loginFormInputFieldsHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;

    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  // Function for handling form submit
  const loginFormSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const { email, password } = loginFormData;
    if (!email || !password) {
      addToast("Please enter proper credentials", "error");
      return;
    }

    try {
      showSpinner();
      const userData = await authService.userLoginWithEmailAndPassword({
        email,
        password,
      });
      login(userData);
      navigate("/");
    } catch (err) {
      console.log(err)
      addToast("Login unsuccessful", "error");
      console.log(err);
    } finally {
      hideSpinner();
    }

    // --- Validation of form inputs and api call will be made here ---
    console.log("form submit", loginFormData);
  };

  return {
    loginFormData,
    loginFormInputFieldsHandler,
    loginFormSubmitHandler,
  };
};

export default useLoginForm;
