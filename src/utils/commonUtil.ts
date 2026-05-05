import type { User, UserAddress } from "../context/AuthContext";

export const generatePriceTextWithCurrency = (
  currency: string,
  price: number,
) => {
  return `${currency} ${price}.00`;
};

export const getUpdatedUserWithAddress = (
  user: User | null,
  newAddress: UserAddress[],
) => {
  return user && newAddress.length >= 0
    ? {
        ...user,
        address: [...newAddress],
      }
    : JSON.parse(localStorage.getItem("user") as string);
};

export const updateNewUserToLocalStorage = (updatedUser: User) => {
    localStorage.removeItem("user")
    localStorage.setItem("user", JSON.stringify(updatedUser))
}