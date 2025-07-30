import React, { useState } from "react";
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  // Dummy admin credentials for example
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      setError("");
      onLogin?.({ username });
      // redirect to dashboard, etc.
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e9f0ff] via-[#e4f7ff] to-[#f7f9ff] flex items-center justify-center">
      <div className="w-full max-w-md bg-white/80 rounded-2xl shadow-2xl px-8 py-10 backdrop-blur-lg border border-[#e4ecff] relative">
        {/* Brand */}
        <div className="flex flex-col items-center mb-8">
          <span className="text-[#005BAC] text-3xl font-extrabold tracking-wide">Admin Panel</span>
          <span className="text-[15px] text-gray-400 mt-2 tracking-widest font-semibold uppercase">Sign In</span>
        </div>
        {/* Form */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit} autoComplete="off">
          {/* Username */}
          <div className="relative">
            <label className="block mb-1 text-sm font-bold text-gray-700">Username</label>
            <div className="flex items-center border border-gray-200 bg-white rounded-lg px-3 py-2 focus-within:border-[#005BAC] transition">
              <FiUser className="text-gray-400 mr-2 text-xl" />
              <input
                type="text"
                className="flex-1 outline-none bg-transparent text-gray-800 text-base font-medium placeholder-gray-400"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
            </div>
          </div>
          {/* Password */}
          <div className="relative">
            <label className="block mb-1 text-sm font-bold text-gray-700">Password</label>
            <div className="flex items-center border border-gray-200 bg-white rounded-lg px-3 py-2 focus-within:border-[#005BAC] transition">
              <FiLock className="text-gray-400 mr-2 text-xl" />
              <input
                type={showPass ? "text" : "password"}
                className="flex-1 outline-none bg-transparent text-gray-800 text-base font-medium placeholder-gray-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="ml-2 text-gray-400 hover:text-[#005BAC] outline-none"
                tabIndex={-1}
                onClick={() => setShowPass((p) => !p)}
                aria-label={showPass ? "Hide password" : "Show password"}
              >
                {showPass ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          {/* Error */}
          {error && (
            <div className="text-sm text-red-500 font-medium mt-[-16px] mb-2 text-center">
              {error}
            </div>
          )}
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#005BAC] to-[#2196f3] hover:from-[#2196f3] hover:to-[#005BAC] text-white font-bold py-2.5 rounded-lg text-lg shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#005BAC]/40 mt-2"
          >
            Sign In
          </button>
        </form>
        {/* Forgot Password */}
        <div className="mt-6 flex justify-center">
          <a href="#" className="text-[#005BAC] hover:underline text-sm font-medium">Forgot password?</a>
        </div>
        {/* Footer */}
        <div className="absolute left-0 bottom-2 w-full text-center text-xs text-gray-400 font-semibold tracking-wider opacity-80 select-none">
          © {new Date().getFullYear()} Vel Infotech Admin
        </div>
      </div>
    </div>
  );
}
