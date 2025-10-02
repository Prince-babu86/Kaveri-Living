import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 px-6 py-12 text-gray-300">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            We are here to help! Reach out to us anytime through the contact methods below or send us a message directly.
          </p>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Left: Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:shadow-indigo-500/40 transition cursor-pointer">
              <Phone className="w-6 h-6 text-indigo-400" />
              <span className="text-gray-300">+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:shadow-indigo-500/40 transition cursor-pointer">
              <Mail className="w-6 h-6 text-indigo-400" />
              <span className="text-gray-300">info@kaverihostel.com</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:shadow-indigo-500/40 transition cursor-pointer">
              <MapPin className="w-6 h-6 text-indigo-400" />
              <span className="text-gray-300">123 Kaveri Street, City Name</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:shadow-indigo-500/40 transition cursor-pointer">
              <MessageCircle className="w-6 h-6 text-indigo-400" />
              <span className="text-gray-300">WhatsApp: +91 9876543210</span>
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-400">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-indigo-500 transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-indigo-500/30 transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
