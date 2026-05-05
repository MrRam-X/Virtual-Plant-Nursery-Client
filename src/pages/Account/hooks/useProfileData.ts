import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useGlobalContext } from "../../../context/GlobalContext";
import { profileService } from "../../../services/account/profileService";
import {
  getUpdatedUserWithAddress,
  updateNewUserToLocalStorage,
} from "../../../utils/commonUtil";

type ActiveModal = "Save" | "Clear" | "Delete";
export type ActiveAddress = "Add" | "Edit";

const initialUserAddressState = {
  _id: "",
  label: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  district: "",
  state: "",
  country: "",
  zipCode: "",
};

const useProfileData = () => {
  const { addToast, showSpinner, hideSpinner } = useGlobalContext();
  const { user, updateUserData } = useAuth();
  const [activeModal, setActiveModal] = useState("" as ActiveModal);
  const [userName, setUserName] = useState(user?.name || "");
  const [userAddress, setUserAddress] = useState({
    ...initialUserAddressState,
  });
  const [activeAddressModal, setActiveAddressModal] = useState(
    "" as ActiveAddress,
  );
  const [deleteAddressId, setDeleteAddressId] = useState("");
  const saveChangesButtonHandler = () => {};
  const clearChangesButtonHandler = () => {};
  const editAddressButtonHandler = (_id: string) => {
    setActiveAddressModal("Edit");
    setUserAddress({
      ...(user?.address.find((obj) => obj._id === _id) || // Find particular address object from user address list
        initialUserAddressState),
    });
  };
  const deleteButtonHandler = () => {
    // Api Call and remove address item from list
    console.log(`Delete Api Called for id: ${deleteAddressId}`);
    setActiveModal("" as ActiveModal);
  };
  const cancelButtonHandler = () => {
    setUserAddress({ ...initialUserAddressState });
  };

  const cancelDeleteButtonHandler = () => {
    setActiveModal("" as ActiveModal);
    setDeleteAddressId("");
  };

  const addressModalCloseHandler = () => {
    setActiveAddressModal("" as ActiveAddress);
  };
  const saveAddressChangesButtonHandler = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    const isValid = Object.entries(userAddress).every(([key, value]) => {
      if (key === "_id") return true; // skip _id
      return typeof value === "string" && value.trim() !== "";
    });
    if (!isValid) {
      addToast("Please fill the required fields", "error");
      return;
    }

    try {
      showSpinner();
      const { _id: _unused, ...payload } = userAddress;
      const response = await profileService.addNewUserAddress(payload);
      if (response.message) {
        addToast(response.message, "success");
        const updatedUser = getUpdatedUserWithAddress(user, response.addresses);
        updateUserData(updatedUser);
        updateNewUserToLocalStorage(updatedUser);
        setActiveAddressModal("" as ActiveAddress);
      }
    } catch (err) {
      console.log(err);
      addToast("Failed to add new address", "error");
    } finally {
      hideSpinner();
    }
  };

  const clearAddressChangesButtonHandler = () => {};
  const addNewAddressButtonHandler = () => {
    setUserAddress({ ...initialUserAddressState });
    setActiveAddressModal("Add");
  };

  const deleteAddressButtonHandler = (_id: string) => {
    setActiveModal("Delete");
    setDeleteAddressId(_id);
  };

  const onModalOpen = (modalName: ActiveModal) => {
    setActiveModal(modalName);
  };

  const onUserNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onUserAddressChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;

    setUserAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onModalClose = () => setActiveModal("" as ActiveModal);
  return {
    user,
    activeModal,
    userName,
    userAddress,
    activeAddressModal,
    saveChangesButtonHandler,
    clearChangesButtonHandler,
    editAddressButtonHandler,
    deleteButtonHandler,
    cancelButtonHandler,
    saveAddressChangesButtonHandler,
    clearAddressChangesButtonHandler,
    addNewAddressButtonHandler,
    onModalOpen,
    onModalClose,
    onUserNameChangeHandler,
    onUserAddressChangeHandler,
    addressModalCloseHandler,
    deleteAddressButtonHandler,
    cancelDeleteButtonHandler,
  };
};

export default useProfileData;
