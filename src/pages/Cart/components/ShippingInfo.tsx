import React from "react";

const ShippingInfo: React.FC = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border">
      <h2 className="font-serif text-2xl text-brand-green mb-6">
        Shipping Information
      </h2>
      <div className="mb-6">
        <label
          htmlFor="saved-address"
          className="block text-sm font-medium mb-1"
        >
          Select a saved address
        </label>
        <select
          id="saved-address"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
        >
          <option value="new" selected>
            -- Enter a new address --
          </option>
          <option value="1">Home: 123 Green St, Flora City, USA</option>
          <option value="2">Work: 456 Business Ave, Metro City, USA</option>
        </select>
      </div>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">Full Name</label>
          <input type="text" className="w-full mt-1 p-2 border rounded-md" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">Shipping Address</label>
          <input type="text" className="w-full mt-1 p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium">City</label>
          <input type="text" className="w-full mt-1 p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium">State / Province</label>
          <input type="text" className="w-full mt-1 p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium">ZIP / Postal Code</label>
          <input type="text" className="w-full mt-1 p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium">Country</label>
          <input
            type="text"
            value="USA"
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default ShippingInfo;
