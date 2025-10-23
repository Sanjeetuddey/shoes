import React from "react";
import BgImage from "../assets/login.jpg"; // Ensure the image is in the correct path

// Login Component
const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BgImage})` }} // Background image applied
    >
      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Background Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Login Box */}
      <div className="relative bg-gray-900 bg-opacity-90 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-gray-700 w-96 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Login</h2>

        <form className="space-y-5">
          {/* Username Input */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>Remember Me</span>
            </label>
            <a href="#" className="text-blue-400 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Go
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
