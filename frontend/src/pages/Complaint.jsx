import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ComplaintPage() {
  const [formData, setFormData] = useState({
    name: "",
    roomNo: "",
    phone: "",
    complaint: "",
  });

  const [entries, setEntries] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, formData]);
    setFormData({ name: "", roomNo: "", phone: "", complaint: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 px-6 py-12 text-gray-300">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-4">
            Submit a Complaint
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Fill out the form below to submit your complaint.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <div className="flex flex-col space-y-2">
            <label className="text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-indigo-500 transition"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm text-gray-400">Room Number</label>
            <input
              type="text"
              name="roomNo"
              value={formData.roomNo}
              onChange={handleChange}
              placeholder="Your Room Number"
              required
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-indigo-500 transition"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm text-gray-400">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-indigo-500 transition"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm text-gray-400">Complaint</label>
            <textarea
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              placeholder="Type your complaint here..."
              required
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-indigo-500 transition resize-none"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-indigo-500/30 transition-all duration-300"
          >
            Submit Complaint
          </button>
        </motion.form>

        {/* Entries List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-indigo-400 mb-4">Submitted Complaints</h2>
          {entries.length === 0 ? (
            <p className="text-gray-400">No complaints submitted yet.</p>
          ) : (
            <div className="space-y-3">
              {entries.map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gray-800 rounded-xl shadow-md hover:shadow-indigo-500/40 transition cursor-pointer flex items-center space-x-3"
                >
                  <MessageCircle className="w-6 h-6 text-indigo-400" />
                  <div>
                    <p><span className="font-semibold text-indigo-400">Name:</span> {entry.name}</p>
                    <p><span className="font-semibold text-indigo-400">Room No:</span> {entry.roomNo}</p>
                    <p><span className="font-semibold text-indigo-400">Phone:</span> {entry.phone}</p>
                    <p><span className="font-semibold text-indigo-400">Complaint:</span> {entry.complaint}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
