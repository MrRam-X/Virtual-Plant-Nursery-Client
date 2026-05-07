import React from "react";

const OrderSummary: React.FC = () => {
  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-28 bg-white p-6 sm:p-8 rounded-lg shadow-sm border space-y-6">
        <h2 className="font-serif text-2xl text-brand-green text-center">
          Order Summary
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p className="font-semibold">$99.75</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p className="font-semibold">$5.00</p>
          </div>
          <div className="flex justify-between border-b pb-4">
            <p>Taxes</p>
            <p className="font-semibold">$8.48</p>
          </div>
          <div className="flex justify-between text-xl font-bold">
            <p>Total</p>
            <p>$113.23</p>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium">Discount Code</label>
          <div className="flex mt-1">
            <input
              type="text"
              placeholder="Enter code"
              className="w-full p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
            <button className="bg-gray-200 px-4 font-semibold rounded-r-md hover:bg-gray-300">
              Apply
            </button>
          </div>
        </div>
        <button className="w-full py-3 px-4 rounded-md text-lg font-bold text-white bg-brand-green hover:bg-brand-green-light transition-all">
          Place Order
        </button>
      </div>
    </aside>
  );
};

export default OrderSummary;
