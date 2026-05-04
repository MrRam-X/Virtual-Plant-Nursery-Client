import { lazy, type ComponentType } from "react";

export type RouteType = "guest" | "private" | "common";
export interface AppRoute {
  path: string;
  Component: ComponentType;
  routeType: RouteType;
}

// Lazy imports (only load when needed)
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Product = lazy(() => import("./pages/Product"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Account = lazy(() => import("./pages/Account"));
const Cart = lazy(() => import("./pages/Cart"));

const BASE_URL = import.meta.env.VITE_API_URL;
const GOOGLE_MAPS_EMBEDDED_URL = import.meta.env
  .VITE_API_GOOGLE_MAPS_EMBEDDED_URL;

const API_URL = `${BASE_URL}/api/v1`;

const API_ROUTE_NAMES = {
  FEATURED: "featured",
  PRODUCTS: "products",
  SIMILAR: "similar",
  LOGIN: "auth/login",
};

const API_ROUTE_PARAM_NAMES = {
  CATEGORY: "category",
};

const APP_ROUTE_NAMES = {
  HOME: "/",
  SHOP: "/shop",
  PRODUCT: "/product",
  ABOUT: "/about",
  CONTACT: "/contact",
  LOGIN: "/login",
  ACCOUNT: "/account",
  CART: "/cart",
};

const APP_ROUTES: AppRoute[] = [
  { path: "/", Component: Home, routeType: "common" },
  { path: "/shop", Component: Shop, routeType: "common" },
  { path: "/product/:id", Component: Product, routeType: "common" },
  { path: "/about", Component: About, routeType: "common" },
  { path: "/contact", Component: Contact, routeType: "common" },
  { path: "/login", Component: Login, routeType: "guest" },

  // --- Private Routes ---
  { path: "/account", Component: Account, routeType: "private" },
  { path: "/cart", Component: Cart, routeType: "private" },
];

const FEATURED_CATEGORIES = [
  {
    name: "Indoor Plants",
    description:
      "Brighten up your living space with our lush, green companions.",
    iconName: "fas fa-leaf",
  },
  {
    name: "Outdoor Plants",
    description:
      "Enhance your garden or balcony with our vibrant outdoor selections.",
    iconName: "fas fa-sun",
  },
  {
    name: "Flowering Plants",
    description:
      "Add a splash of color to your home with our beautiful blooms.",
    iconName: "fas fa-fan",
  },
  {
    name: "Cacti Plants",
    description: "Discover our collection of unique and low-maintenance cacti.",
    iconName: "fas fa-seedling",
  },
  {
    name: "Gardening Tools",
    description:
      "Essential tools to help you nurture and care for your garden.",
    iconName: "fas fa-trowel",
  },
];

const MAX_PAGINATION_BUTTONS = 3;
const MAX_SIMILAR_PRODUCTS_TO_DISPLAY = 4;

const PRODUCT_CATEGORY_LIST = [
  "Indoor Plants",
  "Outdoor Plants",
  "Succulents",
  "Gardening Tools",
];

const ACCOUNT_TABS = [
  {
    id: "profile",
    icon: "fas fa-user-circle",
    label: "Profile & Address",
    mobileLabel: "Profile",
  },
  {
    id: "orders",
    icon: "fas fa-box",
    label: "Your Orders",
    mobileLabel: "Orders",
  },
  {
    id: "plants",
    icon: "fas fa-seedling",
    label: "Your Plants",
    mobileLabel: "Plants",
  },
  {
    id: "wishlist",
    icon: "fas fa-heart",
    label: "Wishlist",
    mobileLabel: "Wishlist",
  },
];

const MODAL_CONFIRMATION_TEXT_CONTENT = {
  Clear: "Are you sure you want to clear your changes?",
  Save: "Are you sure you want to save these changes?",
  Delete: "Are you sure you want to delete this address?",
};

const MODAL_BUTTONS_CLASSNAME = {
  Clear: "bg-gray-100 hover:bg-gray-200",
  Save: "text-white bg-brand-green hover:bg-brand-green-light",
  Delete: "text-white bg-red-500 hover:bg-red-600",
};

const MODAL_PRIMARY_BUTTON_TEXT_CONTENT = {
  Clear: "Clear",
  Save: "Save",
  Delete: "Delete"
}

const DEFAULT_USER_AVATAR = "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"

export {
  API_URL,
  API_ROUTE_NAMES,
  API_ROUTE_PARAM_NAMES,
  GOOGLE_MAPS_EMBEDDED_URL,
  FEATURED_CATEGORIES,
  APP_ROUTE_NAMES,
  APP_ROUTES,
  MAX_PAGINATION_BUTTONS,
  MAX_SIMILAR_PRODUCTS_TO_DISPLAY,
  PRODUCT_CATEGORY_LIST,
  ACCOUNT_TABS,
  MODAL_CONFIRMATION_TEXT_CONTENT,
  MODAL_BUTTONS_CLASSNAME,
  MODAL_PRIMARY_BUTTON_TEXT_CONTENT,
  DEFAULT_USER_AVATAR
};
