import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from '../config/axios.config'

function AdminLoginDark() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      let res = await axios.post("/auth/login", formData, {
        withCredentials: true,
      });
      navigate("/");
      setMessage("✅ Login Successful!");
    } catch (error) {
      console.log(error.message);
      setMessage("❌ Login Failed: " + (error.response?.data?.message || "Error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-800 p-8">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="p-4 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl shadow-md">
            <ShieldCheck className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-2xl font-extrabold text-white mt-4">
            Kaveri Living Hostel
          </h1>
          <p className="text-sm text-gray-400">Admin Login</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
            className="w-full border-b border-gray-600 bg-transparent px-1 py-3 text-sm text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Password"
            className="w-full border-b border-gray-600 bg-transparent px-1 py-3 text-sm text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
          />

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a
              href="/forgot-password"
              className="text-xs text-purple-400 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Neon Gradient Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 
            hover:from-indigo-600 hover:via-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl shadow-lg 
            hover:shadow-purple-500/30 transition duration-300 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                {/* Unique Loader */}
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Logging in...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="text-sm text-center mt-4 text-gray-300">{message}</p>
        )}

        {/* Footer */}
        <p className="text-xs text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/user-register"
            className="text-purple-400 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AdminLoginDark;
