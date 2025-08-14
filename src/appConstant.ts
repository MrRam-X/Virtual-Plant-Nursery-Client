const baseURL = import.meta.env.VITE_API_URL;

const API_URL = `${baseURL}/api/v1`;

const API_ROUTE_NAMES = {
  FEATURED: "featured",
  PRODUCTS: "products",
  SIMILAR: "similar",
};

const API_ROUTE_PARAM_NAMES = {
  CATEGORY: "category",
};

export { API_URL, API_ROUTE_NAMES, API_ROUTE_PARAM_NAMES };
