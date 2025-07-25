import React from "react";
import education from "../../assets/education.jpg"

// You can replace these imports with your local assets
const leftImg = "/founder.png"; // Replace with the correct path or use require
const laptopImg = "/laptop.png"; // Replace with your image path

export default function BannerSection() {
  return (
    <div className="w-full bg-white flex flex-col md:flex-row items-center justify-between py-6 px-2 md:px-10 lg:px-16 relative">
      {/* Left: Person Image */}
      <div className="md:w-1/4 w-full flex justify-center mb-6 md:mb-0">
        <img
          src={leftImg}
          alt="Founder"
          className="max-h-[330px] w-auto object-contain rounded-md shadow-lg"
        />
      </div>

      {/* Center: Stats */}
      <div className="md:w-2/4 w-full flex flex-col items-center text-center">
        <img
          src=""
          alt="yaway logo"
          className="w-48 h-auto mx-auto mb-3"
        />
        <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-1">
          Get Your <span className="text-[#faaf17]">Dream Job</span>
        </h2>

        {/* Stats */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-3 w-full">
          <div>
            <div className="text-[44px] font-extrabold text-pink-400">10000+</div>
            <div className="uppercase text-lg font-semibold">Students</div>
            <div className="text-base text-gray-500">We trained</div>
          </div>
          <span className="hidden md:block h-20 w-0.5 bg-gray-200"></span>
          <div>
            <div className="text-[44px] font-extrabold text-green-400">600+</div>
            <div className="uppercase text-lg font-semibold">Companies</div>
            <div className="text-base text-gray-500">Our trainees working in</div>
          </div>
          <span className="hidden md:block h-20 w-0.5 bg-gray-200"></span>
          <div>
            <div className="text-[44px] font-extrabold text-blue-500">30+</div>
            <div className="uppercase text-lg font-semibold">Countries</div>
            <div className="text-base text-gray-500">Students studying from</div>
          </div>
        </div>

        
      </div>

      {/* Right: Language Illustration */}
      <div className="md:w-1/4 w-full flex justify-center mt-6 md:mt-0">
        <img
          src={education}
          alt="Programming Languages"
          className="max-h-[280px] w-auto object-contain"
        />
      </div>
    </div>
  );
}