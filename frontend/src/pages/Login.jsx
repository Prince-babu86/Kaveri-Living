import { useState } from "react";
import { ShieldCheck } from "lucide-react"; // Admin shield icon

export default function AdminLoginDark() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted:", formData);
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
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-purple-500/30 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-purple-400 font-medium hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
