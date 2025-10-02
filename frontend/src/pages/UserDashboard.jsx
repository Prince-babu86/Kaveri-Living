import { motion } from "framer-motion";
import { Mail, Phone, Home, Edit2, Trash2, Coffee, } from "lucide-react";

export default function UserProfile() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    roomNo: "101",
  };

  // Sample latest service data (replace with API data)
  const latestTiffin = {
    college: "ABC College",
    phone: "+91 9876543210",
    addedAt: "10:30 AM",
  };

  const latestLaundry = {
    clothes: 5,
    addedAt: "09:00 AM",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center justify-center px-6 py-12 text-gray-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gray-800 p-8 rounded-3xl shadow-2xl w-full max-w-lg space-y-8"
      >
        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-indigo-500 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-2xl font-semibold text-white mt-4">{user.name}</h2>
          <p className="text-gray-400">Room No: {user.roomNo}</p>
        </div>

        {/* User Info */}
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-gray-900 p-3 rounded-xl shadow hover:shadow-indigo-500/30 transition">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-indigo-400" />
              <span className="font-semibold text-indigo-400">Email</span>
            </div>
            <span>{user.email}</span>
          </div>

          <div className="flex items-center justify-between bg-gray-900 p-3 rounded-xl shadow hover:shadow-indigo-500/30 transition">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-indigo-400" />
              <span className="font-semibold text-indigo-400">Phone</span>
            </div>
            <span>{user.phone}</span>
          </div>

          <div className="flex items-center justify-between bg-gray-900 p-3 rounded-xl shadow hover:shadow-indigo-500/30 transition">
            <div className="flex items-center space-x-2">
              <Home className="w-5 h-5 text-indigo-400" />
              <span className="font-semibold text-indigo-400">Room No</span>
            </div>
            <span>{user.roomNo}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow hover:shadow-indigo-500/30 transition">
            <Edit2 className="w-5 h-5" />
            <span>Edit Profile</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-xl shadow hover:shadow-red-500/30 transition">
            <Trash2 className="w-5 h-5" />
            <span>Delete Account</span>
          </button>
        </div>

        {/* Latest Service Entries */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-indigo-400">Today's Services</h3>

          <div className="flex items-center bg-gray-900 p-4 rounded-xl shadow hover:shadow-indigo-500/30 transition">
            <Coffee className="w-6 h-6 text-indigo-400 mr-3" />
            <div>
              <p><span className="font-semibold text-indigo-400">Tiffin:</span> {latestTiffin.college} ({latestTiffin.phone})</p>
              <p className="text-gray-400 text-sm">Added at: {latestTiffin.addedAt}</p>
            </div>
          </div>

          <div className="flex items-center bg-gray-900 p-4 rounded-xl shadow hover:shadow-indigo-500/30 transition">
            {/* <TShirt className="w-6 h-6 text-indigo-400 mr-3" /> */}
            <div>
              <p><span className="font-semibold text-indigo-400">Laundry:</span> {latestLaundry.clothes} Clothes</p>
              <p className="text-gray-400 text-sm">Added at: {latestLaundry.addedAt}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
