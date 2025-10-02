import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HostelLoader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3000); // simulate load
    return () => clearTimeout(timer);
  }, []);

  if (loaded) return null; // hide loader after load

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-950 z-50">
      <div className="flex flex-col items-center space-y-6">
        <motion.div
          className="w-48 h-32 grid grid-cols-6 gap-1 bg-gray-800 rounded-lg p-1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Array.from({ length: 24 }).map((_, idx) => (
            <motion.div
              key={idx}
              className="w-full h-4 rounded bg-gray-700"
              animate={{
                backgroundColor: ["#374151", "#facc15", "#374151"], // dark → yellow → dark
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: (idx % 6) * 0.2 + Math.floor(idx / 6) * 0.2,
              }}
            />
          ))}
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white text-2xl font-bold tracking-wide"
        >
          Kaveri Living Hostel
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-sm"
        >
          Loading services for you...
        </motion.p>
      </div>
    </div>
  );
}
