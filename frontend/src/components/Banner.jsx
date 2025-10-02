import { motion } from "framer-motion";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900 px-6">
      <div className="text-center max-w-3xl">
        
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide"
        >
          Welcome to{" "}
          <span className="hover:text-indigo-400 transition duration-300">
            Kaveri Living Hostel
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
        >
          A premium place for comfort, care, and community.  
          Your stay, your style ✨
        </motion.p>

        {/* Hover Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="/about"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white font-medium shadow-lg hover:scale-105 hover:shadow-indigo-500/30 transition-all duration-300"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-xl border border-indigo-500 text-indigo-400 font-medium hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            Contact
          </a>
        </motion.div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 text-xs text-gray-500"
        >
          © 2025 Kaveri Living Hostel. All Rights Reserved.
        </motion.p>
      </div>
    </div>
  );
}
