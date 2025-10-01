// SplitWelcomePage.jsx
import React from "react";
import { motion } from "framer-motion";

const rooms = [
  {
    title: "Luxury Room",
    description:
      "Spacious and modern with premium amenities for ultimate comfort.",
    image: "https://i.pinimg.com/1200x/78/a6/c0/78a6c05d5b6fa95e257f914203d84aa3.jpg",
  },
  {
    title: "Cozy Room",
    description:
      "Perfect for students, with a warm and welcoming environment.",
    image: "https://i.pinimg.com/1200x/1c/4b/40/1c4b40993064b61190e6c0ab26202f78.jpg",
  },
  {
    title: "Suite Room",
    description:
      "Top-tier room with elegant interiors and exclusive features.",
    image: "https://i.pinimg.com/736x/58/5d/1c/585d1c8ab394653420e3756c630a9760.jpg",
  },
];

const SplitWelcomePage = () => {
  return (
    <div className="w-full bg-gray-50">
      {rooms.map((room, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center md:justify-between px-6 py-16 max-w-6xl mx-auto ${
              isEven ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="md:w-1/2 flex flex-col items-start md:pr-12"
            >
              <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                {room.title}
              </h2>
              <p className="text-gray-700 mb-6">{room.description}</p>
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg"
              >
                Book Now
              </motion.button>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="md:w-1/2 mt-8 md:mt-0"
            >
              <div className="overflow-hidden rounded-2xl shadow-2xl cursor-pointer group">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default SplitWelcomePage;
