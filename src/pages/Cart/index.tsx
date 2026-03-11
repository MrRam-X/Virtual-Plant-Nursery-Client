const Cart = () => {
  return (
    <main className="bg-brand-off-white py-8 sm:py-12 px-4 flex-grow">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl sm:text-5xl text-brand-green">
          Shopping Cart
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Review your items and proceed to checkout.
        </p>
      </div>

      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
        {/* Left Column: Cart Items & Forms */}
        <div className="lg:col-span-2 space-y-8">
          {/* Order Summary */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border">
            <h2 className="font-serif text-2xl text-brand-green mb-6">
              Your Items (3)
            </h2>
            <div className="space-y-6">
              {/* REDESIGNED Cart Item 1 */}
              <div className="flex items-start gap-4 border-b pb-6">
                <img
                  src="https://images.pexels.com/photos/6297518/pexels-photo-6297518.jpeg"
                  alt="Monstera Deliciosa"
                  className="w-24 h-24 object-cover rounded-md flex-shrink-0"
                />
                <div className="flex-grow space-y-2">
                  <h3 className="font-semibold text-lg text-brand-green">
                    Monstera Deliciosa
                  </h3>
                  <p className="text-sm text-gray-500">Indoor Plant</p>
                  <div className="flex items-center border rounded-md w-min mt-2">
                    <button className="px-3 py-1 text-lg hover:bg-gray-200">
                      -
                    </button>
                    <input
                      type="text"
                      value="1"
                      readOnly
                      className="w-10 text-center font-semibold"
                    />
                    <button className="px-3 py-1 text-lg hover:bg-gray-200">
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-lg text-brand-green">$36.00</p>
                  <button className="text-sm text-red-500 hover:underline mt-1">
                    Remove
                  </button>
                </div>
              </div>
              {/* REDESIGNED Cart Item 2 */}
              <div className="flex items-start gap-4 border-b pb-6">
                <img
                  src="https://images.pexels.com/photos/7245625/pexels-photo-7245625.jpeg"
                  alt="Fiddle Leaf Fig"
                  className="w-24 h-24 object-cover rounded-md flex-shrink-0"
                />
                <div className="flex-grow space-y-2">
                  <h3 className="font-semibold text-lg text-brand-green">
                    Fiddle Leaf Fig
                  </h3>
                  <p className="text-sm text-gray-500">Indoor Plant</p>
                  <div className="flex items-center border rounded-md w-min mt-2">
                    <button className="px-3 py-1 text-lg hover:bg-gray-200">
                      -
                    </button>
                    <input
                      type="text"
                      value="1"
                      readOnly
                      className="w-10 text-center font-semibold"
                    />
                    <button className="px-3 py-1 text-lg hover:bg-gray-200">
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-lg text-brand-green">$63.75</p>
                  <button className="text-sm text-red-500 hover:underline mt-1">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border">
            <h2 className="font-serif text-2xl text-brand-green mb-6">
              Shipping Information
            </h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">
                  Shipping Address
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  State / Province
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  ZIP / Postal Code
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-md"
                />
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
        </div>

        {/* Right Column: Totals Sidebar */}
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
      </div>
    </main>
  );
};

export default Cart;
