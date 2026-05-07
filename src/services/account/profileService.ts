import { API_ROUTE_NAMES } from "../../appConstant";
import type { UserAddressResponse } from "../../types/api";
import type { UserAddress } from "../../context/AuthContext";
import { apiClient } from "../apiAuthClient";

type UserAddressPayload = {
    label: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    district: string;
}

const { ACCOUNT_ADDRESS } = API_ROUTE_NAMES

/**
 * Adds new address for user
 * @param payload - An object of user address as payload.
 * @returns A promise that resolves to an array of User Address objects.
 */
const addNewUserAddress = async (
  payload: UserAddressPayload,
): Promise<UserAddressResponse> => {

  try {
    const response = await apiClient.post<UserAddressResponse>(
      `/${ACCOUNT_ADDRESS}`, payload
    );
    return response.data;
  } catch (error) {
    console.error("Error adding new address:", error);
    throw new Error("Failed to add new address");
  }
};

/**
 * Deletes the user address based on id
 * @param _id - Id of the address to be deleted as params
 * @returns A promise that resolves to an array of User Address objects.
 */
const deleteUserAddress = async (
  id: string,
): Promise<UserAddressResponse> => {

  try {
    const response = await apiClient.delete<UserAddressResponse>(
      `/${ACCOUNT_ADDRESS}/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting address:", error);
    throw new Error(`Failed to delete address with id: ${id}`);
  }
};

/**
 * Updated the user address based on id and payload
 * @param payload - An object of the user address info to be updated as payload.
 * @returns A promise that resolves to an array of User Address objects.
 */
const updateUserAddress = async (
  payload: UserAddress
): Promise<UserAddressResponse> => {

  try {
    const response = await apiClient.patch<UserAddressResponse>(
      `/${ACCOUNT_ADDRESS}/${payload._id}`, payload
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user address:", error);
    throw new Error(`Failed to update address with id: ${payload._id}`);
  }
};


export const profileService = {
    addNewUserAddress,
    deleteUserAddress,
    updateUserAddress,
}

