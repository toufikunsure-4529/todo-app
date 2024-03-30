import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-lg font-bold">TODO</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "text-orange-300" : "text-gray-200"
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/complete"
                  className={({ isActive }) =>
                    `text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "text-orange-300" : "text-gray-200"
                    }`
                  }
                >
                  Completed Todo
                </NavLink>
                <NavLink
                  to="/remening"
                  className={({ isActive }) =>
                    `text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "text-orange-300" : "text-gray-200"
                    }`
                  }
                >
                  Remaining Todo
                </NavLink>
                <NavLink
                  to="/trush"
                  className={({ isActive }) =>
                    `text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "text-orange-300" : "text-gray-200"
                    }`
                  }
                >
                  Trush Todo
                </NavLink>
              </div>
            </div>
            <div className="block md:hidden">
              <button
                onClick={toggleNavbar}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/complete"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Complete Todo
            </NavLink>
            <NavLink
              to="/remening"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Remaining Todo
            </NavLink>
            <NavLink
              to="/trush"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Trush Todo
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
