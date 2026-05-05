import axios from "axios";
import { API_URL, API_ROUTE_NAMES } from "../../appConstant";
import type { UserAddressResponse } from "../../types/api";

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

const token = localStorage.getItem("token")

const apiClient = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
});

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


export const profileService = {
    addNewUserAddress,
    deleteUserAddress,
}

