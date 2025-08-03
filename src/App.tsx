import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import { AuthProvider } from "./context/AuthContext";
import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <GlobalContextProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              {/* --- Public Routes --- */}
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              {/* --- Private Routes --- */}
              <Route path="/account" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </GlobalContextProvider>
  );
};

export default App;
