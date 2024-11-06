import React from "react";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500 p-4 sm:p-6">
      <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-2xl max-w-xs sm:max-w-md w-full">
        <h1 className="text-7xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 animate-bounce">
          404
        </h1>
        <h2 className="mt-2 sm:mt-4 text-2xl sm:text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base px-4 sm:px-0">
          We're sorry, but the page you are looking for doesn't exist. It may
          have been moved or deleted.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="Error Illustration"
          className="w-28 h-28 sm:w-40 sm:h-40 mx-auto mt-6 sm:mt-8 animate-pulse"
        />
        <button
          className="mt-6 sm:mt-8 btn btn-primary btn-wide flex items-center gap-2 transform hover:scale-105 transition-transform ease-in-out duration-200"
          onClick={() => (window.location.href = "/")}
        >
          <FaHome /> Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
