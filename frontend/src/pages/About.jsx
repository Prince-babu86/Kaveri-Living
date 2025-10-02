import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 px-6 py-12 text-gray-300">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-4">
            About Kaveri Living Hostel
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            A premium place designed for comfort, safety, and community living. 
            We focus on providing a nurturing environment for students and professionals alike.
          </p>
        </motion.div>

        {/* Mission / Vision Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-400">Our Mission</h2>
            <p className="text-gray-400">
              To provide a safe, comfortable, and inspiring living environment 
              where students and young professionals can thrive academically 
              and socially.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-400">Our Vision</h2>
            <p className="text-gray-400">
              To become the leading student and professional hostel in the city, 
              known for quality living, excellent facilities, and a supportive community.
            </p>
          </div>
        </motion.div>

        {/* Facilities / Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-indigo-400 text-center">Our Facilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Wi-Fi & Study Area", description: "High-speed internet and quiet study zones for productivity." },
              { title: "Tiffin / Meals", description: "Nutritious and hygienic meals served daily." },
              { title: "Laundry Service", description: "Convenient laundry facilities for hassle-free living." },
              { title: "24/7 Security", description: "Ensuring the safety of all residents." },
              { title: "Recreational Area", description: "Space to relax, socialize, and unwind." },
              { title: "Clean & Comfortable Rooms", description: "Well-maintained rooms with modern amenities." },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-indigo-500/40 transition cursor-pointer"
              >
                <h3 className="text-indigo-400 font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mt-12"
        >
          <h2 className="text-3xl font-bold text-indigo-400 mb-4">Join Our Community</h2>
          <p className="text-gray-400 mb-6">
            Experience premium living at Kaveri Hostel. Book your room or contact us for more details.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition font-medium"
            >
              Contact Us
            </a>
            <a
              href="/signup"
              className="px-6 py-3 border border-indigo-500 text-indigo-400 rounded-xl hover:bg-indigo-500 hover:text-white transition font-medium"
            >
              Sign Up
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
