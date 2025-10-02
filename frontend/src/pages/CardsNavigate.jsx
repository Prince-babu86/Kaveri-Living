import React from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../context/DataContext";
import {
  Coffee,
  Mail,
  UserCheck,
  LayoutDashboard,
  MessageSquare,
  ShoppingBag,
  BookOpen,
  Dumbbell,
  Calendar,
  Bell,
  UserPlus,
  Edit
} from "lucide-react";

const DashboardCardsFull = () => {
  const { user } = useData();

  // Full services list
  const cards = [
    { title: "Laundry", icon: <ShoppingBag size={30} />, to: "/laundry" },
    { title: "Contact", icon: <Mail size={30} />, to: "/contact" },
    { title: "Tiffin", icon: <Coffee size={30} />, to: "/tiffin" },
    { title: "Complaint", icon: <UserCheck size={30} />, to: "/complaint" },
    { title: "Dashboard", icon: <LayoutDashboard size={30} />, to: "/dashboard" },
    { title: "Query", icon: <MessageSquare size={30} />, to: "/query" },
    { title: "Library", icon: <BookOpen size={30} />, to: "/library" },
    { title: "Gym", icon: <Dumbbell size={30} />, to: "/gym" },
    { title: "Events", icon: <Calendar size={30} />, to: "/events" },
    { title: "Notices", icon: <Bell size={30} />, to: "/notices" },
    { title: "Visitors", icon: <UserPlus size={30} />, to: "/visitors" },
    { title: "Feedback", icon: <Edit size={30} />, to: "/feedback" },
  ];

  return (
    <div className="min-h-[60vh] bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center"> Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cards.map((card) => (
          <NavLink
            to={card.to}
            key={card.title}
            className="bg-gray-900 hover:from-blue-700 hover:to-blue-600
                       transition-all duration-300 rounded-2xl p-8 flex flex-col items-center justify-center
                       shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-2"
          >
            <div className="mb-4">{card.icon}</div>
            <span className="text-xl font-semibold text-center">{card.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DashboardCardsFull;
