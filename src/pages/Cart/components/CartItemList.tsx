import React from "react";
import type {
  CartActionType,
  CartItem,
} from "../../../context/UserActionContext";
import type { Product } from "../../../types/Product";
import CartItemCard from "./CartItemCard";

type CartItemListProps = {
  cartItemCount: number;
  cartItems: CartItem[];
  updateCart: (item: Product, action: CartActionType) => void;
};

const CartItemList: React.FC<CartItemListProps> = ({
  cartItems,
  cartItemCount,
  updateCart,
}) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border">
      <h2 className="font-serif text-2xl text-brand-green mb-6">
        Your Items ({cartItemCount})
      </h2>
      <div className="space-y-6">
        {/* REDESIGNED Cart Item 1 */}
        {cartItems.map((item) => {
          return (
            <CartItemCard
              key={item._id}
              cartItem={item}
              updateCart={updateCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartItemList;
