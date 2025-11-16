import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const Header: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  // Effect to prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-brand-green sticky top-0 z-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-white"
            >
              <i className="fas fa-bars fa-lg"></i>
            </button>
          </div>

          {/* Logo */}
          <div className="text-center lg:text-left">
            <Link to="/" className="font-serif text-3xl text-white">
              Planto.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center space-x-8 text-lg text-white">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-brand-accent font-semibold"
                      : "hover:text-brand-accent"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive
                      ? "text-brand-accent font-semibold"
                      : "hover:text-brand-accent"
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-brand-accent font-semibold"
                      : "hover:text-brand-accent"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-brand-accent font-semibold"
                      : "hover:text-brand-accent"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* === DYNAMIC ICONS vs LOGIN BUTTON === */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              // --- Show these icons if the user IS logged in ---
              <>
                <Link
                  to="/search"
                  className="text-white hover:text-brand-accent"
                >
                  <i className="fas fa-search fa-lg"></i>
                </Link>
                <Link
                  to="/cart"
                  className="text-white hover:text-brand-accent relative"
                >
                  <i className="fas fa-shopping-cart fa-lg"></i>
                  <span className="absolute -top-2 -right-2 bg-brand-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setProfileDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-1 text-white hover:text-brand-accent"
                  >
                    <i className="fas fa-user fa-lg"></i>
                    <i
                      className={`fas fa-chevron-down text-xs transition-transform duration-300 ${
                        isProfileDropdownOpen ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  {!isProfileDropdownOpen ? null : (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                      <ul className="py-1 text-gray-700">
                        <li>
                          <Link
                            to="/account"
                            className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            <i className="fas fa-user-circle w-4"></i> My
                            Account
                          </Link>
                        </li>
                        <li>
                          <button className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 w-full text-left">
                            <i className="fas fa-sign-out-alt w-4"></i> Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            ) : (
              // --- Show this button if the user IS NOT logged in ---
              <div>
                <Link
                  to="/login"
                  className="bg-brand-accent text-black font-bold py-2 px-6 hover:bg-white hover:text-black transition-colors"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {!isMobileMenuOpen ? null : (
        <div className="fixed inset-0 z-40 bg-brand-green bg-opacity-95 backdrop-blur-sm">
          <div className="container mx-auto p-4 h-full flex flex-col">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white"
              >
                <i className="fas fa-times fa-2x"></i>
              </button>
            </div>
            <nav className="flex-grow flex items-center justify-center">
              <ul className="flex flex-col items-center space-y-8 text-4xl font-serif text-white">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-brand-accent font-semibold"
                        : "hover:text-brand-accent"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                      isActive
                        ? "text-brand-accent font-semibold"
                        : "hover:text-brand-accent"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-brand-accent font-semibold"
                        : "hover:text-brand-accent"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-brand-accent font-semibold"
                        : "hover:text-brand-accent"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
