import { useState } from "react";
import { UserPlus } from "lucide-react"; // nice icon
import { Link, useNavigate } from "react-router-dom";
import axios from '../config/axios.config'

export default function UserRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    room: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "/auth/user-register",
        formData,
        { withCredentials: true }
      );
      setMessage("✅ User Registered Successfully!");
      navigate("/")
    } catch (err) {
      console.error(err);
      setMessage("❌ Registration failed: " + (err.response?.data?.message || "Error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-800 p-8">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="p-4 bg-gradient-to-tr from-green-500 to-teal-600 rounded-2xl shadow-md">
            <UserPlus className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-2xl font-extrabold text-white mt-4">
            Kaveri Living Hostel
          </h1>
          <p className="text-sm text-gray-400">User Registration</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { placeholder: "Full Name", name: "name", type: "text" },
            { placeholder: "Email Address", name: "email", type: "email" },
            { placeholder: "Phone Number", name: "phone", type: "tel" },
            { placeholder: "Room No", name: "room", type: "text" },
            { placeholder: "Password", name: "password", type: "password" },
            { placeholder: "Confirm Password", name: "confirmPassword", type: "password" },
          ].map((field, index) => (
            <div key={index}>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
                placeholder={field.placeholder}
                className="w-full border-b border-gray-600 bg-transparent px-1 py-3 text-sm text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition"
              />
            </div>
          ))}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center bg-gradient-to-r from-green-500 via-teal-600 to-emerald-600 
            hover:from-green-600 hover:via-teal-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg 
            hover:shadow-green-500/30 transition duration-300 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                {/* Unique Loader */}
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Registering...</span>
              </div>
            ) : (
              "Register"
            )}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="text-sm text-center mt-4 text-gray-300">{message}</p>
        )}

        {/* Footer */}
        <p className="text-xs text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
