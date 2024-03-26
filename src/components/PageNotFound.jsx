import React from "react";

function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          404 - Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <a href="/" className="text-blue-600 hover:underline">
          Go back to home page
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;
