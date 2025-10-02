import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Branding */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-indigo-400">Kaveri Living Hostel</h2>
          <p className="text-sm text-gray-400">
            Comfort, Care & Community. Your stay, your style.
          </p>
          <div className="flex space-x-4 mt-2">
            <Link to="#" className="hover:text-indigo-400 transition">
              <Facebook className="w-5 h-5"/>
            </Link>
            <Link to="#" className="hover:text-indigo-400 transition">
              <Instagram className="w-5 h-5"/>
            </Link>
            <Link to="#" className="hover:text-indigo-400 transition">
              <Linkedin className="w-5 h-5"/>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-sm font-semibold text-gray-200 uppercase">Quick Links</h3>
          <Link to="/" className="hover:text-indigo-400 transition text-sm">Home</Link>
          <Link to="/laundry" className="hover:text-indigo-400 transition text-sm">Laundry</Link>
          <Link to="/tiffin" className="hover:text-indigo-400 transition text-sm">Tiffin</Link>
          <Link to="/dashboard" className="hover:text-indigo-400 transition text-sm">Dashboard</Link>
          <Link to="/contact" className="hover:text-indigo-400 transition text-sm">Contact</Link>
          <Link to="/complaint" className="hover:text-indigo-400 transition text-sm">Complaint</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-sm font-semibold text-gray-200 uppercase">Contact</h3>
          <p className="text-sm">📍 123 Kaveri Street, City Name</p>
          <p className="text-sm">📞 +91 9876543210</p>
          <p className="text-sm">✉️ info@kaverihostel.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        © 2025 Kaveri Living Hostel. All rights reserved.
      </div>
    </footer>
  );
}
