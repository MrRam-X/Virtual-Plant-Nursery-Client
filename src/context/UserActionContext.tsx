import React, {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";
import type { Product } from "../types/Product";

export interface CartItem extends Product {
  quantity: number;
}

interface UserActionContextType {
  cartItems: CartItem[];
  cartItemCount: number;
  updateCart: (item: Product, action: CartActionType) => void;
}
export type CartActionType = "ADD" | "REMOVE" | "REDUCE";

type CartAction =
  | { type: "ADD"; payload: Product }
  | { type: "REMOVE"; payload: Product }
  | { type: "REDUCE"; payload: Product };

const UserActionContext = createContext<UserActionContextType | undefined>(
  undefined,
);

interface UserActionContextProviderProps {
  children: ReactNode;
}

export const UserActionContextProvider: React.FC<
  UserActionContextProviderProps
> = ({ children }) => {
  const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
    const item = action.payload;
    const existingIndex = state.findIndex(
      (cartItem) => cartItem._id === item._id,
    );

    switch (action.type) {
      case "ADD":
        if (existingIndex !== -1) {
          return state.map((cartItem, index) =>
            index === existingIndex
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          );
        }
        return [...state, { ...item, quantity: 1 }];

      case "REMOVE":
        return state.filter((cartItem) => cartItem._id !== item._id);

      case "REDUCE":
        if (existingIndex === -1) return state;
        else {
          const existingItem = state[existingIndex];
          if (existingItem.quantity === 1) {
            return state.filter((cartItem) => cartItem._id !== item._id);
          }

          return state.map((cartItem, index) =>
            index === existingIndex
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem,
          );
        }

      default:
        return state;
    }
  };

  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const updateCart = (item: Product, action: CartActionType) => {
    dispatch({ type: action, payload: item });
  };

  const cartItemCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const value = useMemo(
    () => ({
      cartItems,
      cartItemCount,
      updateCart,
    }),
    [cartItems, cartItemCount],
  );

  return (
    <UserActionContext.Provider value={value}>
      {children}
    </UserActionContext.Provider>
  );
};

export const useUserActionContext = (): UserActionContextType => {
  const context = useContext(UserActionContext);
  if (context === undefined) {
    throw new Error(
      "useUserActionContext must be used within a UserActionContextProvider",
    );
  }
  return context;
};


