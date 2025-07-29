import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { FaLaptop, FaChalkboardTeacher } from "react-icons/fa";

export default function CallAndFormSection() {
  const [mode, setMode] = useState("classroom");

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
        {/* LEFT: Call To Action */}
        <div className="flex-1 w-full bg-gradient-to-r from-[#7f00ff] to-[#e100ff] text-white rounded-3xl px-8 py-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Still have queries? Contact Us
          </h2>
          <p className="text-lg md:text-xl font-medium mb-6">
            Request a callback. An expert from our office will call you in the next 24 working hours.
            <br className="hidden md:block" />
            You can also reach out to us at{" "}
            <a href="mailto:velinfo@gmail.com" className="underline hover:text-gray-200">
              velinfo@gmail.com
            </a>{" "}
            or <span className="font-semibold">7667663035</span>
          </p>
          <a
            href="tel:7667663035"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            <FiPhone className="mr-2" /> Call Us
          </a>
        </div>

        {/* RIGHT: Enquiry Form */}
        <div className="flex-1 w-full max-w-lg mx-auto lg:mx-0">
          <div className="relative backdrop-blur-[6px] bg-white/70 border border-white/60 shadow-2xl rounded-3xl p-8 transition-all hover:scale-[1.015] hover:shadow-2xl duration-300">
            <h3 className="text-2xl font-bold mb-5 text-center bg-gradient-to-r from-[#005BAC] to-[#003c6a] bg-clip-text text-transparent tracking-tight">
              Get a Free Training Quote
            </h3>

            {/* Mode Toggle */}
            <div className="flex justify-center mb-7 gap-2">
              <button
                onClick={() => setMode("classroom")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-full text-lg font-semibold shadow transition-all duration-200
                ${mode === "classroom"
                  ? "bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white shadow-lg"
                  : "bg-white/60 text-black border border-[#a7f3d0]/40"}
              `}
              >
                <FaChalkboardTeacher className="text-xl" /> Class Room
              </button>
              <button
                onClick={() => setMode("online")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-full text-lg font-semibold shadow transition-all duration-200
                ${mode === "online"
                  ? "bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white shadow-lg"
                  : "bg-white/60 text-black border border-[#a7f3d0]/40"}
              `}
              >
                <FaLaptop className="text-xl" /> Online
              </button>
            </div>

            {/* Enquiry Form */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl bg-white/80 px-5 py-3 border border-[#a7f3d0]/60 text-base font-medium focus:ring-2 focus:ring-[#16bca7] outline-none shadow"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="rounded-xl bg-white/80 px-5 py-3 border border-[#a7f3d0]/60 text-base font-medium focus:ring-2 focus:ring-[#16bca7] outline-none shadow"
              />
              <div className="flex gap-3">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="rounded-xl bg-white/80 px-5 py-3 border border-[#a7f3d0]/60 text-base font-medium w-1/2 focus:ring-2 focus:ring-[#16bca7] outline-none shadow"
                />
                <select
                  className="rounded-xl bg-white/80 px-5 py-3 border border-[#a7f3d0]/60 text-base font-medium w-1/2 focus:ring-2 focus:ring-[#16bca7] outline-none shadow"
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
                className="rounded-xl bg-white/80 px-5 py-3 border border-[#a7f3d0]/60 text-base font-medium focus:ring-2 focus:ring-[#16bca7] outline-none shadow"
              />
              <textarea
                placeholder="Your Message"
                className="rounded-xl bg-white/80 px-5 py-3 border border-[#a7f3d0]/60 text-base font-medium focus:ring-2 focus:ring-[#16bca7] outline-none resize-none shadow"
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
