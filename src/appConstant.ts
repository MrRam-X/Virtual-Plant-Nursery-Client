import { lazy, type ComponentType } from "react";

export interface AppRoute {
  path: string;
  Component: ComponentType;
}

// Lazy imports (only load when needed)
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Product = lazy(() => import("./pages/Product"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const Cart = lazy(() => import("./pages/Cart"));

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

const APP_ROUTE_NAMES = {
  HOME: '/',
  SHOP: '/shop',
  PRODUCT: '/product',
  ABOUT: '/about',
  CONTACT: '/contact',
  LOGIN: '/login',
  ACCOUNT: '/account',
  CART: '/cart',
}

const APP_ROUTES: AppRoute[] = [
  { path: "/", Component: Home },
  { path: "/shop", Component: Shop },
  { path: "/product/:id", Component: Product },
  { path: "/about", Component: About },
  { path: "/contact", Component: Contact },
  { path: "/login", Component: Login },

  // --- Private Routes ---
  { path: "/account", Component: Profile},
  { path: "/cart", Component: Cart},
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

export {
  API_URL,
  API_ROUTE_NAMES,
  API_ROUTE_PARAM_NAMES,
  GOOGLE_MAPS_EMBEDDED_URL,
  FEATURED_CATEGORIES,
  APP_ROUTE_NAMES,
  APP_ROUTES
};
