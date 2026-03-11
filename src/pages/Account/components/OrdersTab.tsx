import React from "react";

const OrdersTab: React.FC = () => {
  return (
    <div id="orders-panel" className="space-y-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border">
        <h2 className="font-serif text-2xl text-brand-green mb-6">
          Order History
        </h2>
        {/* Order Card */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b py-4">
          <div>
            <span className="font-semibold">Order #12345</span>
            <p className="text-sm text-gray-500">Placed on July 25, 2025</p>
          </div>
          <div>
            <span className="font-semibold">$60.00</span>
            <p className="text-sm text-gray-500">3 items</p>
          </div>
          <div>
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
              Delivered
            </span>
          </div>
          <button className="text-sm font-semibold hover:underline">
            View Details
          </button>
        </div>
        {/* Order Card */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b py-4">
          <div>
            <span className="font-semibold">Order #12300</span>
            <p className="text-sm text-gray-500">Placed on June 10, 2025</p>
          </div>
          <div>
            <span className="font-semibold">$22.00</span>
            <p className="text-sm text-gray-500">1 item</p>
          </div>
          <div>
            <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded-full">
              Shipped
            </span>
          </div>
          <button className="text-sm font-semibold hover:underline">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersTab;
