import axios from "axios";
import type { Product } from "../types/Product";
import { API_URL, API_ROUTE_NAMES } from "../appConstant";
import type { PaginatedResponse, QueryParams } from "../types/api";
import { objectToQueryString } from "../utils/apiUtil";

const apiClient = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

const { FEATURED, PRODUCTS, SIMILAR } = API_ROUTE_NAMES;

/**
 * Fetches a list of all products.
 * Can handle multiple query parameters for filtering, sorting, and pagination.
 * @param params - An object of query parameters. Example: { category: 'Indoor', sortBy: 'price', page: 1 }
 * @returns A promise that resolves to an array of Product objects.
 */
const getAllProducts = async (
  params: QueryParams,
): Promise<PaginatedResponse<Product>> => {
  const paramStr = objectToQueryString(params);
  try {
    const response = await apiClient.get<PaginatedResponse<Product>>(
      `/${PRODUCTS}${paramStr ? "".concat("?", paramStr) : ""}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw new Error("Failed to fetch products.");
  }
};

/**
 * Fetches a list of featured products.
 * @param id - A string type id of a product
 * @returns A promise that resolves to an Product object.
 */
const getProductDetails = async (id: string): Promise<Product> => {
  try {
    const response = await apiClient.get<Product>(`/${PRODUCTS}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw new Error("Failed to fetch product details.");
  }
};

/**
 * Fetches a list of featured products.
 * @returns A promise that resolves to an array of Product objects.
 */
const getFeaturedProducts = async (): Promise<Product[]> => {
  try {
    const response = await apiClient.get<Product[]>(`/${PRODUCTS}/${FEATURED}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    throw new Error("Failed to fetch featured products.");
  }
};

/**
 * Fetches a list of products similar to a given criteria (e.g., category).
 * Can handle multiple query parameters for more specific similarity matching.
 * @param params - An object of query parameters. Example: { category: 'Indoor Plant' }
 * @returns A promise that resolves to an array of Product objects.
 */
const getSimilarProducts = async (params: QueryParams): Promise<Product[]> => {
  if (!params || Object.keys(params).length === 0) {
    throw new Error("Similar products query requires at least one parameter.");
  }

  const paramStr = objectToQueryString(params);

  try {
    const response = await apiClient.get<Product[]>(
      `/${PRODUCTS}/${SIMILAR}${paramStr ? "".concat("?", paramStr) : ""}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching similar products:", error);
    throw new Error("Failed to fetch similar products.");
  }
};

export const productService = {
  getAllProducts,
  getProductDetails,
  getFeaturedProducts,
  getSimilarProducts,
};
