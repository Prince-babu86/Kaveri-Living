import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from '../config/axios.config'

function AdminRegisterDark() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res = await axios.post(
        "/auth/admin-register",
        formData,
        {
          withCredentials: true,
        }
      );
     navigate("/");
    } catch (error) {
      console.log(error);
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
          <p className="text-sm text-gray-400">Admin Registration</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { placeholder: "Full Name", name: "name", type: "text" },
            { placeholder: "Email Address", name: "email", type: "email" },
            { placeholder: "Phone Number", name: "phone", type: "tel" },
            { placeholder: "Password", name: "password", type: "password" },
            {
              placeholder: "Confirm Password",
              name: "confirmPassword",
              type: "password",
            },
          ].map((field, index) => (
            <div key={index}>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
                placeholder={field.placeholder}
                className="w-full border-b border-gray-600 bg-transparent px-1 py-3 text-sm text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
              />
            </div>
          ))}

          {/* Neon Gradient Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full font-semibold py-3 rounded-xl shadow-lg transition duration-300 ${
              loading
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-700 text-white"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-400 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AdminRegisterDark;
