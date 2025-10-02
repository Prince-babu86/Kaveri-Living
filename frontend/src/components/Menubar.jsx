import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Utensils, WashingMachine } from "lucide-react";
import { useData } from "../context/DataContext";

const BottomNavBar = () => {
  const { user } = useData();
  const firstLetter = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <div className="menubar-mobile fixed bottom-0 left-0 w-full bg-gray-900 shadow-lg border-t border-gray-700 z-50">
      <div className="flex justify-around items-center h-16">

        {/* Home */}
        <NavLink
          exact
          to="/"
          className="flex flex-col items-center text-sm text-gray-400"
          activeClassName="text-blue-400"
        >
          <Home size={22} />
          <span>Home</span>
        </NavLink>

        {/* Tiffin */}
        <NavLink
          to="/tiffin"
          className="flex flex-col items-center text-sm text-gray-400"
          activeClassName="text-blue-400"
        >
          <Utensils size={22} />
          <span>Tiffin</span>
        </NavLink>

        {/* Laundry */}
        <NavLink
          to="/laundry"
          className="flex flex-col items-center text-sm text-gray-400"
          activeClassName="text-blue-400"
        >
          <WashingMachine size={22} />
          <span>Laundry</span>
        </NavLink>

        {/* Profile */}
        <NavLink
          to="/user-dashboard"
          className="flex flex-col items-center text-sm text-gray-400"
          activeClassName="text-blue-400"
        >
          <div
            className="w-7 h-7 flex items-center justify-center rounded-full font-bold bg-gray-700 text-gray-200"
          >
            {firstLetter}
          </div>
          <span>Profile</span>
        </NavLink>

      </div>
    </div>
  );
};

export default BottomNavBar;
