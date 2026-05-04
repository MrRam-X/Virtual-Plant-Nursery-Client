import React from "react";
import type { UserAddress } from "../../../../context/AuthContext";
import { MODAL_BUTTONS_CLASSNAME } from "../../../../appConstant";
import ModalButton from "../../../../components/modal/ModalButton";
import type { ActiveAddress } from "../../hooks/useProfileData";

type AddressModalFormProps = {
  closeModalHandler: () => void;
  cancelModalHandler: () => void;
  inputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addressState: UserAddress;
  activeAddressModal: ActiveAddress;
};

const AddressModalForm: React.FC<AddressModalFormProps> = ({
  closeModalHandler,
  cancelModalHandler,
  inputChangeHandler,
  addressState,
  activeAddressModal,
}) => {
  const {
    label,
    addressLine1,
    addressLine2,
    state,
    city,
    country,
    zipCode,
    district,
  } = addressState;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 max-w-lg w-full">
        <div className="flex justify-between items-center mb-6">
          <h3
            id="address-modal-title"
            className="font-serif text-2xl text-brand-green"
          >
            {activeAddressModal} Address
          </h3>
          <button
            onClick={closeModalHandler}
            className="text-gray-400 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>
        <form id="address-form" className="space-y-4">
          <div>
            <label className="block text-sm font-medium">
              Address Label (e.g., Home, Work)
            </label>
            <input
              name="label"
              value={label}
              onChange={inputChangeHandler}
              type="text"
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Address Line 1</label>
            <input
              name="addressLine1"
              value={addressLine1}
              onChange={inputChangeHandler}
              type="text"
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">
                Address Line 1
              </label>
              <input
                name="addressLine2"
                value={addressLine2}
                onChange={inputChangeHandler}
                type="text"
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                name="city"
                value={city}
                onChange={inputChangeHandler}
                type="text"
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">District</label>
              <input
                name="district"
                value={district}
                onChange={inputChangeHandler}
                type="text"
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>{" "}
            <div>
              <label className="block text-sm font-medium">State</label>
              <input
                name="state"
                value={state}
                onChange={inputChangeHandler}
                type="text"
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Country</label>
              <input
                name="country"
                value={country}
                onChange={inputChangeHandler}
                type="text"
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Pin Code</label>
              <input
                name="zipCode"
                value={zipCode}
                onChange={inputChangeHandler}
                type="text"
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
          </div>
          <div className="pt-6 flex justify-end gap-4">
            <ModalButton
              title="Cancel"
              buttonClickHandler={cancelModalHandler}
              className={MODAL_BUTTONS_CLASSNAME.Clear}
            />
            <button
              type="submit"
              className="py-2 px-5 rounded-md font-semibold text-white bg-brand-green hover:bg-brand-green-light"
            >
              Save Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressModalForm;
