const BASE_URL = import.meta.env.VITE_API_URL;
const GOOGLE_MAPS_EMBEDDED_URL = import.meta.env
  .VITE_API_GOOGLE_MAPS_EMBEDDED_URL;

const API_URL = `${BASE_URL}/api/v1`;

const API_ROUTE_NAMES = {
  FEATURED: "featured",
  PRODUCTS: "products",
  SIMILAR: "similar",
};

const API_ROUTE_PARAM_NAMES = {
  CATEGORY: "category",
};

export {
  API_URL,
  API_ROUTE_NAMES,
  API_ROUTE_PARAM_NAMES,
  GOOGLE_MAPS_EMBEDDED_URL,
};
