import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Example user data (replace with actual auth user)
  const user = {
    name: "Kaveri Admin",
    image: null, // If no image, fallback to first letter
  };

  const menuItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Hostel Rooms", href: "/rooms" },
    { name: "Students", href: "/students" },
    { name: "Bookings", href: "/bookings" },
    { name: "Payments", href: "/payments" },
  ];

  return (
    <nav className="bg-gray-900/90 backdrop-blur-lg border-b border-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-lg">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <span className="text-white font-bold text-lg">Kaveri Hostel</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-purple-400 transition font-medium"
              >
                {item.name}
              </NavLink>
            ))}

            {/* Profile Section */}
            <div className="flex items-center space-x-3">
              {user.image ? (
                <img
                  src={user.image}
                  alt="User"
                  className="h-9 w-9 rounded-full border border-purple-500 shadow-md"
                />
              ) : (
                <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 text-white font-bold">
                  {user.name.charAt(0)}
                </div>
              )}
              <span className="text-gray-200 font-medium">
                {user.name.split(" ")[0]}
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-3 space-y-3">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-300 hover:text-purple-400 transition font-medium"
            >
              {item.name}
            </a>
          ))}

          {/* Profile for Mobile */}
          <div className="flex items-center space-x-3 pt-3 border-t border-gray-800">
            {user.image ? (
              <img
                src={user.image}
                alt="User"
                className="h-9 w-9 rounded-full border border-purple-500 shadow-md"
              />
            ) : (
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 text-white font-bold">
                {user.name.charAt(0)}
              </div>
            )}
            <span className="text-gray-200 font-medium">
              {user.name.split(" ")[0]}
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}
