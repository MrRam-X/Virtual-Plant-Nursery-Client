import React from "react";
import { useUserActionContext } from "../../context/UserActionContext";
import OrderSummary from "./components/OrderSummary";
import ShippingInfo from "./components/ShippingInfo";
import CartItemList from "./components/CartItemList";
import EmptyCart from "./components/EmptyCart";

const Cart: React.FC = () => {
  const { cartItems, cartItemCount, updateCart } = useUserActionContext();
  return (
    <main className="bg-brand-off-white py-8 sm:py-12 px-4 flex-grow">
      {cartItemCount > 0 ? (
        <>
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl text-brand-green">
              Shopping Cart
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Review your items and proceed to checkout.
            </p>
          </div>
          <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
            {/* Left Column: Cart Items & Shipping Form */}
            <div className="lg:col-span-2 space-y-8">
              <CartItemList
                cartItems={cartItems}
                cartItemCount={cartItemCount}
                updateCart={updateCart}
              />

              {/* Shipping Information */}
              <ShippingInfo />
            </div>

            {/* Right Column: Order Summary Total */}
            <OrderSummary />
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </main>
  );
};

export default Cart;
