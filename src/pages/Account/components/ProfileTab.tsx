import React from "react";
import type { User } from "../../../context/AuthContext";

export type ProfileTabProps = {
  user: User | null;
  userName: string;
  onUserNameChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addNewAddressButtonHandler: () => void
  deleteAddressButtonHandler: (_id: string) => void
  editAddressButtonHandler: (_id: string) => void
};

const ProfileTab: React.FC<ProfileTabProps> = ({
  user,
  userName,
  onUserNameChangeHandler,
  addNewAddressButtonHandler,
  editAddressButtonHandler,
  deleteAddressButtonHandler,
}) => {
  return (
    <div id="profile-panel" className="space-y-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border">
        <h2 className="font-serif text-2xl text-brand-green mb-6">
          Personal Information
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              value={userName}
              onChange={onUserNameChangeHandler}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              value={user?.email || ""}
              className="w-full mt-1 p-2 border rounded-md bg-gray-100"
              readOnly
            />
          </div>
          <div className="flex justify-end gap-4 pt-2">
            <button
              type="button"
              data-modal-trigger="confirmation"
              data-action="clearForm"
              data-form-id="personal-info-form"
              data-message="Are you sure you want to clear your changes?"
              className="py-2 px-6 rounded-md font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200"
            >
              Clear
            </button>
            <button
              type="button"
              data-modal-trigger="confirmation"
              data-action="saveForm"
              data-form-id="personal-info-form"
              data-message="Are you sure you want to save these changes?"
              className="py-2 px-6 rounded-md font-semibold text-white bg-brand-green hover:bg-brand-green-light"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border">
        <h2 className="font-serif text-2xl text-brand-green mb-6">
          Saved Addresses
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Address Card */}
          {user?.address && user.address.length > 0
            ? user.address.map((userAddress) => {
                const {
                  _id,
                  label,
                  addressLine1,
                  addressLine2,
                  city,
                  district,
                  state,
                  country,
                  zipCode,
                } = userAddress;
                return (
                  <div className="border rounded-md p-4 space-y-2" key={_id}>
                    <p className="font-semibold">{label}</p>
                    <p className="text-sm text-gray-600">{addressLine1}</p>
                    <p className="text-sm text-gray-600">{addressLine2}</p>
                    <p className="text-sm text-gray-600">
                      {[city, district, state, country, zipCode].join(", ")}
                    </p>
                    <div className="space-x-4 pt-2">
                      <button className="text-sm font-semibold hover:underline" onClick={() => editAddressButtonHandler(_id)}>
                        Edit
                      </button>
                      <button className="text-sm font-semibold text-red-500 hover:underline" onClick={() => deleteAddressButtonHandler(_id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            : null}
          <button className="border-2 border-dashed rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-brand-green min-h-[100px]" onClick={addNewAddressButtonHandler}>
            <i className="fas fa-plus mr-2"></i>Add New Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
