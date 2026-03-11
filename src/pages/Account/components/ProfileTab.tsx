import React from "react";

const ProfileTab: React.FC = () => {
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
              value="Alex Doe"
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              value="alex.doe@example.com"
              className="w-full mt-1 p-2 border rounded-md bg-gray-100"
              readOnly
            />
          </div>
        </form>
      </div>
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border">
        <h2 className="font-serif text-2xl text-brand-green mb-6">
          Saved Addresses
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Address Card */}
          <div className="border rounded-md p-4 space-y-2">
            <p className="font-semibold">Home</p>
            <p className="text-sm text-gray-600">
              123 Green St, Flora City, USA, 12345
            </p>
            <div className="space-x-4 pt-2">
              <button className="text-sm font-semibold hover:underline">
                Edit
              </button>
              <button className="text-sm font-semibold text-red-500 hover:underline">
                Delete
              </button>
            </div>
          </div>
          <button className="border-2 border-dashed rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-brand-green min-h-[100px]">
            <i className="fas fa-plus mr-2"></i>Add New Address
          </button>
        </div>
      </div>
      <div className="text-right">
        <button className="py-2 px-6 mr-5 rounded-md font-semibold text-white bg-brand-green hover:bg-brand-green-light">
          Clear
        </button>
        <button
          type="submit"
          className="py-2 px-6 rounded-md font-semibold text-white bg-brand-green hover:bg-brand-green-light"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileTab;
