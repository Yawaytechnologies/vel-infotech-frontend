import React, { useState } from "react";
import { FaLaptop, FaChalkboardTeacher } from "react-icons/fa";

export default function AboutSection() {
  const [mode, setMode] = useState("classroom");

  return (
 <section
      className="relative py-16 px-4 md:px-8 lg:px-0 bg-white overflow-hidden"
      style={{
        background: `
          radial-gradient(circle, #e0e7ef 2.5px, transparent 2.5px),
          radial-gradient(circle, #e0e7ef 2.5px, transparent 2.5px)
        `,
        backgroundSize: "40px 40px",
        backgroundPosition: "0 0, 20px 20px",
      }}
    >     
       <div
  className="pointer-events-none absolute top-0 left-0 w-full h-16 z-10"
  style={{
    background: "linear-gradient(to bottom, #f4f7fd 60%, #fff0 100%)",
  }}
/>
     <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row gap-12 items-stretch z-10">
        {/* LEFT: Clean Content (No Card) */}
        <div className="flex-1 flex flex-col justify-center pl-0 md:pl-2 lg:pl-8">
          <h2 className="text-[2.2rem] md:text-[1.8rem] font-black text-[#171717] mb-3 text-center  leading-tight">
            Vel InfoTech <span className="text-[#171717]">— India’s No.1 IT Training Institute</span>
          </h2>
          <p className="text-gray-700 text-xl mb-7 leading-relaxed">
            <span className="font-semibold text-[#005BAC]">Elevate your career with curated training,</span> built by 650+ industry experts for real-world success. Join thousands of professionals accelerating their future.
          </p>
          <div className="bg-white border border-[#a7f3d0]/30 shadow-lg rounded-2xl p-6 mb-5">
            <h3 className="text-lg font-bold text-[#005BAC] mb-2 tracking-wide">About Vel InfoTech</h3>
            <ul className="text-gray-800 text-base space-y-2 mb-3 list-disc list-inside">
              <li>
                <span className="font-bold">Industry Leader:</span> Recognized by LinkedIn as India’s most influential IT education brand.
              </li>
              <li>
                <span className="font-bold">Expert-Led:</span> 650+ world-class trainers & real project mentorship.
              </li>
              <li>
                <span className="font-bold">Tailored Pathways:</span> Flexible for students, graduates, and working pros.
              </li>
              <li>
                <span className="font-bold">Proven Outcomes:</span> 10,000+ students placed with top IT MNCs.
              </li>
            </ul>
            <div className="text-gray-600 text-sm mt-2">
              <span className="font-semibold">Benefits:</span>
              &nbsp;Faster onboarding, productivity gains, cost-effective upskilling, and global recognition.
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <button className="px-6 py-3 bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white font-bold rounded-2xl shadow hover:shadow-xl hover:from-[#0891b2] hover:to-[#16bca7] transition-all duration-200 text-lg tracking-wide">
              View All Courses
            </button>
            
          </div>
        </div>
        {/* RIGHT: Enquiry Glass Card */}
        <div className="flex-1 w-full max-w-lg mx-auto md:mx-0 flex flex-col justify-center px-0 md:px-4">
          <div className="relative backdrop-blur-[6px] bg-white/70 border border-white/60 shadow-2xl rounded-3xl p-8 transition-all hover:scale-[1.015] hover:shadow-2xl duration-300">
            <h3 className="text-2xl font-bold mb-5 text-center bg-gradient-to-r from-[#005BAC] to-[#003c6a] bg-clip-text text-transparent tracking-tight">
              Get a Free Training Quote
            </h3>
            {/* Mode Toggle */}
            <div className="flex justify-center mb-7 gap-2">
              <button
                onClick={() => setMode("classroom")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-full text-xs sm:text-base lg:text-lg font-base shadow
                  ${mode === "classroom"
                    ? "bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white shadow-lg"
                    : "bg-white/60 text-black border border-[#a7f3d0]/40"} transition-all duration-200`}
              >
                <FaChalkboardTeacher className="text-xl" /> Class Room
              </button>
              <button
                onClick={() => setMode("online")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-full  text-xs sm:text-base lg:text-lg font-base shadow
                  ${mode === "online"
                    ? "bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white shadow-lg"
                    : "bg-white/60 text-black border border-[#a7f3d0]/40"
                  } transition-all duration-200`}
              >
                <FaLaptop className="text-xl" /> Online
              </button>
            </div>
            {/* Enquiry Form */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl bg-background px-5 py-3 border border-[#003c6a]/60 text-base font-medium focus:ring-2 focus:ring-[#003c6a] outline-none shadow"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="rounded-xl bg-background px-5 py-3 border border-[#003c6a]/60 text-base font-medium focus:ring-2 focus:ring-[#003c6a] outline-none shadow"
              />
              <div className="flex gap-3">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="rounded-xl bg-background px-5 py-3 border border-[#003c6a]/60 text-base font-medium w-1/2 focus:ring-2 focus:ring-[#003c6a] outline-none shadow"
                />
                <select
                  className="rounded-xl bg-background px-5 py-3 border border-[#003c6a]/60 text-base font-medium w-1/2 focus:ring-2 focus:ring-[#003c6a] outline-none shadow"
                  defaultValue=""
                >
                  <option value="" disabled>
                    How & Where
                  </option>
                  <option>Morning Batch</option>
                  <option>Evening Batch</option>
                  <option>Weekend</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Type Course"
                className="rounded-xl bg-background px-5 py-3 border border-[#003c6a]/60 text-base font-medium focus:ring-2 focus:ring-[#003c6a] outline-none shadow"
              />
              <textarea
                placeholder="Your Message"
                className="rounded-xl bg-background px-5 py-3 border border-[#003c6a]/60 text-base font-medium focus:ring-2 focus:ring-[#003c6a] outline-none resize-none shadow"
                rows={2}
              />
              <button className="bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white font-extrabold py-3 rounded-xl hover:from-[#0891b2] hover:to-[#16bca7] transition shadow-lg mt-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
