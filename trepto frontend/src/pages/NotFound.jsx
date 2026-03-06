import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      
      <div className="text-center max-w-xl">

        {/* 404 Number */}
        <h1 className="text-[120px] font-heading font-bold text-primary-500 leading-none">
          404
        </h1>

        {/* Title */}
        <h2 className="text-h2 text-text-primary mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-medium text-text-secondary mt-3">
          The page you are looking for doesn't exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 rounded-md bg-primary-500 text-white text-medium hover:bg-primary-600 transition"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;