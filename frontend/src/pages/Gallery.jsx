import React from "react";

const heroImages = [
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipPc470HWjoGZ2vXFfIH8g2oU7m6Si37OQKfoiaW=s1360-w1360-h1020-rw",
    title: "Spacious Common Area",
    description: "Relax, socialize, and enjoy your time with friends in our common area.",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipNMiwBN9dkNzyfTvEUwReEEEv6Pglgdz0JC0Hnc=s1360-w1360-h1020-rw",
    title: "Modern Hostel Rooms",
    description: "Comfortable rooms with all modern facilities for a perfect stay.",
  },
];

const HeroImages = () => {
  return (
    <div className="bg-black p-6 min-h-[60vh] flex flex-col md:flex-row gap-6">
      {heroImages.map((item, index) => (
        <div
          key={index}
          className="relative group flex-1 overflow-hidden rounded-2xl cursor-pointer shadow-2xl"
        >
          {/* Image */}
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
            <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-300">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroImages;
