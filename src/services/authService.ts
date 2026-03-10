import axios from "axios";
import { API_URL, API_ROUTE_NAMES } from "../appConstant";
import type { UserLoginPayload } from "../types/api";
import type { User } from "../context/AuthContext";

const apiClient = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

const { LOGIN } = API_ROUTE_NAMES;

/**
 * Function for signing in the user
 * @param payload - An object of user creds as payload. Example: { email: 'test@email.com', password: 'test123' }
 * @returns A promise that resolves to an object of User data type.
 */
const userLoginWithEmailAndPassword = async (
  payload: UserLoginPayload,
): Promise<User> => {
  try {
    const response = await apiClient.post<User>(
      `/${LOGIN}`, payload
    );
    return response.data;
  } catch (error) {
    console.error("Error loggin in:", error);
    throw new Error("Failed to log in.");
  }
};

export const authService = {
  userLoginWithEmailAndPassword,
};
