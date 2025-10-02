import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-9xl font-extrabold mb-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-8 text-center">
        Oops! The page you are looking for does not exist. <br /> 
        It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
