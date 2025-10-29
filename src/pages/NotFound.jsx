import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <main className="min-h-[90vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#0a2d55] to-[#051a30] text-white px-6">
      <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight text-white/90">
        404
      </h1>
      <p className="mt-4 text-lg text-white/80">
        We couldn’t find <span className="font-mono">{pathname}</span>
      </p>
      <p className="text-white/60">It may have been moved, renamed, or removed.</p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg border border-white/20 bg-white/10 px-5 py-3 hover:bg-white/20 transition"
        >
          ← Go Back
        </button>
        <Link
          to="/"
          className="rounded-lg bg-[#0ea5e9] px-5 py-3 font-semibold text-black hover:brightness-110 transition"
        >
          Go Home
        </Link>
        <Link
          to="/all-courses"
          className="rounded-lg border border-white/20 bg-white/10 px-5 py-3 hover:bg-white/20 transition"
        >
          Browse Courses
        </Link>
      </div>
    </main>
  );
}
