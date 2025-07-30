import React, { useState } from "react";
import { FaLaptop, FaChalkboardTeacher } from "react-icons/fa";

export default function JavaCoursePage() {
  const [mode, setMode] = useState("classroom");

  return (
    <section className="w-full pt-32 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-4 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT: Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Join Our 100% Job Guaranteed <br />
            <span className="text-yellow-400">Java Full Stack Developer Course</span>
          </h2>

          <ul className="space-y-3 mt-6 text-lg">
            <li>✅ Join the <strong>Best Java Training Institute</strong> to master Core & Advanced Java.</li>
            <li>✅ Learn Java Full Stack – <strong>Spring Boot, Hibernate, React, Node.js</strong>.</li>
            <li>✅ Build real-world projects with hands-on <strong>coding experience</strong>.</li>
            <li>✅ Choose <strong>flexible learning modes</strong> – Weekday / Weekend / Fast-track.</li>
            <li>✅ Earn an industry-accepted <strong>Java Developer Certification</strong>.</li>
            <li>✅ Career support: Resume building, mock interviews & job referrals.</li>
          </ul>

          <div className="mt-8 text-lg bg-[#ffffff22] p-4 rounded-lg border border-white">
            <strong>Freshers Salary:</strong> ₹3 LPA to ₹8 LPA | Duration: 3 Months
          </div>
        </div>

        {/* RIGHT: Call to Action (No Brochure Button) */}
        <div className="flex-1 bg-white text-black p-6 rounded-xl shadow-lg max-w-md">
          <h3 className="text-2xl font-bold mb-4">WANT IT JOB?</h3>
          <p className="mb-4 text-lg">Become a Java Full Stack Developer in 3 Months</p>

          <button className="w-full mt-4 bg-gradient-to-r from-[#ff4f81] to-[#ff2760] text-white font-semibold py-3 rounded hover:opacity-90 transition">
            Enquire Now
          </button>
        </div>
      </div>

      {/* ENQUIRY FORM - BELOW */}
      <div className="flex-1 w-full max-w-lg mx-auto mt-20">
        <div className="relative backdrop-blur-[6px] bg-white/70 border border-white/60 shadow-2xl rounded-3xl p-8 transition-all hover:scale-[1.015] hover:shadow-2xl duration-300">
          <h3 className="text-2xl font-bold mb-5 text-center bg-gradient-to-r from-[#005BAC] to-[#003c6a] bg-clip-text text-transparent tracking-tight">
            Get a Free Training Quote
          </h3>

          {/* Mode Toggle */}
          <div className="flex justify-center mb-7 gap-2">
            <button
              onClick={() => setMode("classroom")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-full text-lg font-semibold shadow transition-all duration-200
                ${
                  mode === "classroom"
                    ? "bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white shadow-lg"
                    : "bg-white/60 text-black border border-[#a7f3d0]/40"
                }`}
            >
              <FaChalkboardTeacher className="text-xl" /> Class Room
            </button>
            <button
              onClick={() => setMode("online")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-full text-lg font-semibold shadow transition-all duration-200
                ${
                  mode === "online"
                    ? "bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white shadow-lg"
                    : "bg-white/60 text-black border border-[#a7f3d0]/40"
                }`}
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
    </section>
  );
}
