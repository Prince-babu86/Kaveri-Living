import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../context/DataContext";

export default function NavbarDark() {
  let { user } = useData();

  const linkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-indigo-400 underline underline-offset-4 font-semibold"
        : "text-gray-300 hover:text-indigo-400 hover:underline underline-offset-4"
    }`;

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-950 border-b border-gray-800 px-6 py-3 flex justify-between items-center shadow-lg">
      {/* Left: Logo */}
      <div className="text-sm font-bold text-indigo-400 tracking-wide">
        <NavLink to="/" className="hover:text-indigo-300 transition">
          Kaveri Living Hostel
        </NavLink>
      </div>

      {/* Center: Menu */}
      <div className="hidden md:flex space-x-6 text-xs font-medium">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/laundry" className={linkClass}>
          Laundry
        </NavLink>
        <NavLink to="/tiffin" className={linkClass}>
          Tiffin
        </NavLink>
        <NavLink to="/user-dashboard" className={linkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/query" className={linkClass}>
          Query
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
        <NavLink to="/complaint" className={linkClass}>
          Complaint
        </NavLink>
      </div>

      {/* Right: User / Auth */}
      <div className="flex items-center space-x-4">
        {user ? (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-semibold uppercase shadow-md">
              {user?.name.charAt(0)}
            </div>
            <span className="text-xs font-medium text-gray-300 capitalize">
              {user?.name}
            </span>
          </div>
        ) : (
          <div className="flex space-x-3 text-xs font-medium">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-1 border border-indigo-500 rounded-lg text-white bg-indigo-600"
                  : "px-3 py-1 border border-indigo-500 rounded-lg text-indigo-400 hover:bg-indigo-500 hover:text-white transition"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-1 bg-indigo-600 text-white rounded-lg"
                  : "px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
              }
            >
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
