import React, { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaCog } from "react-icons/fa";

const Navbar = () => {
  const [error, setError] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility
  const { logout } = useAuth();
  const navigate = useNavigate();

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to handle logout
  const handleLogout = async () => {
    setError(""); // Clear any previous errors
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error); // Log the error for debugging
      setError("Failed to log out. Please try again."); // Set specific error message
    }
    // Close mobile menu after logout
    closeMobileMenu();
  };

  return (
    <div className="min-h-screen bg-yellow-400">
      <nav
        className="bg-transparent fixed top-0 w-full z-50"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link
                to="/"
                className="text-white font-bold no-underline heading text-3xl"
              >
                kinnie.png
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu} // Toggle mobile menu visibility
                className="text-white hover:text-yellow-500 focus:outline-none"
              >
                <FaCog className="h-6 w-6 transition duration-300 transform hover:rotate-180" />
              </button>
            </div>
            <div className="hidden md:flex md:items-center md:ml-4">
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
                  type="button"
                  className="text-white hover:text-yellow-500 focus:outline-none"
                  id="options-menu"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <FaCog className="h-6 w-6 transition duration-300 transform hover:rotate-180" />
                </button>

                {/* Always show dropdown menu */}
                <div
                  className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
                    isDropdownOpen ? "" : "hidden"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <Link
                      to="/update-profile"
                      className="block no-underline px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Update Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black opacity-25 z-40 ${
          isMobileMenuOpen ? "" : "hidden"
        }`}
        onClick={closeMobileMenu}
      ></div>
      <div
        className={`md:hidden fixed inset-y-0 left-0 w-64 bg-white z-50 overflow-y-auto transform transition-all duration-300 ${
          isMobileMenuOpen ? "" : "-translate-x-full"
        }`}
      >
        {/* Mobile Menu Content */}
        <div className="p-4">
          <Link
            to="/update-profile"
            className="block no-underline py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={closeMobileMenu}
          >
            Update Profile
          </Link>
          <button
            onClick={handleLogout}
            className="block py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
