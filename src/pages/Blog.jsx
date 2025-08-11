import React from "react";

export default function BlogBanner() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#005BAC] to-[#003c6a] py-24 px-4 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* LEFT: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Explore the Latest in Tech & Training
          </h1>
          <p className="text-lg text-white/90 mb-6">
            Insights, tips, and stories from Vel InfoTech — covering trending courses, student success, job market updates, and more.
          </p>
          <button className="bg-white text-[#005BAC] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
            Read Our Blogs →
          </button>
        </div>

        {/* RIGHT: Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
  src="blog.svg"
  alt="Blogging Illustration"
  className="w-[90%] max-w-md h-auto"
/>

        </div>
      </div>

      {/* Decorative Background Dots */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
