import React from "react";
import type {
  CartActionType,
  CartItem,
} from "../../../context/UserActionContext";
import type { Product } from "../../../types/Product";
import { generatePriceTextWithCurrency } from "../../../utils/commonUtil";

type CartItemProps = {
  cartItem: CartItem;
  updateCart: (item: Product, action: CartActionType) => void;
};

const CartItemCard: React.FC<CartItemProps> = ({ cartItem, updateCart }) => {
  return (
    <div className="flex items-start gap-4 border-b pb-6">
      <img
        src={cartItem.imageUrl[0] || ""}
        alt={`${cartItem.name}` || "defaultItem.jpg"}
        className="w-24 h-24 object-cover rounded-md flex-shrink-0"
      />
      <div className="flex-grow space-y-2">
        <h3 className="font-semibold text-lg text-brand-green">
          {cartItem.name}
        </h3>
        <p className="text-sm text-gray-500">{cartItem.category}</p>
        <div className="flex items-center border rounded-md w-min mt-2">
          <button
            onClick={() => updateCart(cartItem as Product, "REDUCE")}
            className="px-3 py-1 text-lg hover:bg-gray-200"
          >
            -
          </button>
          <input
            type="text"
            value={cartItem.quantity}
            readOnly
            className="w-10 text-center font-semibold"
          />
          <button
            onClick={() => updateCart(cartItem as Product, "ADD")}
            className="px-3 py-1 text-lg hover:bg-gray-200"
          >
            +
          </button>
        </div>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="font-bold text-lg text-brand-green">
          {generatePriceTextWithCurrency(
            cartItem.currency,
            cartItem.discountedPrice * cartItem.quantity,
          )}
        </p>
        <button
          onClick={() => updateCart(cartItem as Product, "REMOVE")}
          className="text-sm text-red-500 hover:underline mt-1"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
