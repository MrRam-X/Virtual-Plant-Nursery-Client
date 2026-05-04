import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";

type ActiveModal = "Save" | "Clear" | "Delete";
export type ActiveAddress = "Add" | "Edit"

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
  const { user } = useAuth();
  const [activeModal, setActiveModal] = useState("" as ActiveModal);
  const [userName, setUserName] = useState(user?.name || "");
  const [userAddress, setUserAddress] = useState({...initialUserAddressState});
  const [activeAddressModal, setActiveAddressModal] = useState("" as ActiveAddress)
  const [deleteAddressId, setDeleteAddressId] = useState("")
  const saveChangesButtonHandler = () => {};
  const clearChangesButtonHandler = () => {};
  const editAddressButtonHandler = (_id: string) => {
    setActiveAddressModal("Edit")
    setUserAddress({
      ...(user?.address.find((obj) => obj._id === _id) || // Find particular address object from user address list
        initialUserAddressState),
    });
  };
  const deleteButtonHandler = () => {
    // Api Call and remove address item from list
    console.log(`Delete Api Called for id: ${deleteAddressId}`)
    setActiveModal("" as ActiveModal)
  };
  const cancelButtonHandler = () => {
    setUserAddress({...initialUserAddressState})
  };

  const cancelDeleteButtonHandler = () => {
    setActiveModal("" as ActiveModal)
    setDeleteAddressId("")
  }

  const addressModalCloseHandler = () => {
    setActiveAddressModal("" as ActiveAddress)
  }
  const saveAddressChangesButtonHandler = () => {};
  const clearAddressChangesButtonHandler = () => {};
  const addNewAddressButtonHandler = () => {
    setUserAddress({...initialUserAddressState})
    setActiveAddressModal("Add")
  };

  const deleteAddressButtonHandler = (_id: string) => {
    setActiveModal("Delete")
    setDeleteAddressId(_id)
  }

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
