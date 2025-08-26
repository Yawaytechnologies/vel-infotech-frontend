// src/pages/CourseSyllabus.jsx
import React, { useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SyllabusLocked from "@/components/SyllabusLocked";
import { SYLLABI } from "../coursecomponent/Syllabi";
import { FaChalkboardTeacher, FaLaptop } from "react-icons/fa";

export default function CourseSyllabus() {
  const { slug } = useParams();
  const course = SYLLABI[slug];

  const [mode, setMode] = useState("classroom");
  const [unlocked, setUnlocked] = useState(false);

  const syllabusRef = useRef(null);
  const formRef = useRef(null);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Course not found</h1>
        <p className="text-slate-600 mb-6">We couldn’t find a syllabus for “{slug}”.</p>
        <Link to="/" className="text-blue-600 underline">Back to home</Link>
      </div>
    );
  }

  const handleRequestUnlock = () => scrollTo(formRef);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      batch: fd.get("batch"),
      course: fd.get("course"),
      message: fd.get("message"),
      mode,
      slug,
    };

    try {
      // Optionally POST to your backend here
      // await fetch("/api/leads", { method:"POST", headers: { "Content-Type":"application/json" }, body: JSON.stringify(payload) });
    } finally {
      setUnlocked(true);          // unlock
      e.currentTarget.reset();
      scrollTo(syllabusRef);      // back to syllabus
    }
  };

  return (
    <>
      {/* Syllabus */}
      <div ref={syllabusRef}>
        <SyllabusLocked
          title={course.title}
          accent={course.accent}
          meta={course.meta}
          preview={course.preview}
          outline={course.outline}
          useExternalForm
          isUnlocked={unlocked}
          onRequestUnlock={handleRequestUnlock}
        />
      </div>

      {/* Enquiry Form (shared across all courses) */}
      <section ref={formRef} className="w-full px-6 py-20 bg-[#f6f9ff]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10">
          {/* LEFT: Info Boxes */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4">
            {[
              ["Comprehensive Curriculum", "Master the essentials with a structured, outcomes-focused outline."],
              ["Career-Oriented Training", "Learn from working pros. Includes mock interviews and resume prep."],
              ["Placement Support", "Hiring network and drives to support your career goals."],
              ["Hands-On Projects", "Real-world capstones and industry-inspired assignments."],
            ].map(([title, text]) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-lg text-gray-900">
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <p className="text-black/90">{text}</p>
              </div>
            ))}
          </div>

          {/* RIGHT: Form */}
          <div className="w-full max-w-lg">
            <div className="bg-white p-8 rounded-[30px] shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-center text-[#003c6a] mb-5">
                Get a Free Training Quote
              </h3>

              {/* Toggle Buttons */}
              <div className="flex justify-center gap-3 mb-6">
                <button
                  onClick={() => setMode("classroom")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm ${
                    mode === "classroom" ? "bg-[#003c6a] text-white" : "bg-white text-[#003c6a] border border-[#003c6a]"
                  }`}
                >
                  <FaChalkboardTeacher className="text-base" /> Class Room
                </button>
                <button
                  onClick={() => setMode("online")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm ${
                    mode === "online" ? "bg-[#003c6a] text-white" : "bg-white text-[#003c6a] border border-[#003c6a]"
                  }`}
                >
                  <FaLaptop className="text-base" /> Online
                </button>
              </div>

              {/* Form */}
              <form id="enquiry-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input name="name" type="text" placeholder="Your Name" className="rounded-xl px-5 py-3 bg-[#edf2f7] border border-[#b6c3d1] focus:border-[#003c6a] placeholder:text-gray-700 text-sm focus:ring-2 focus:ring-[#003c6a] outline-none" required />
                <input name="email" type="email" placeholder="Your Email" className="rounded-xl px-5 py-3 bg-[#edf2f7] border border-[#b6c3d1] focus:border-[#003c6a] placeholder:text-gray-700 text-sm focus:ring-2 focus:ring-[#003c6a] outline-none" required />
                <div className="flex flex-col sm:flex-row gap-3">
                  <input name="phone" type="tel" placeholder="Mobile Num" className="w-full sm:w-1/2 rounded-xl px-5 py-3 bg-[#edf2f7] border border-[#b6c3d1] focus:border-[#003c6a] placeholder:text-gray-700 text-sm focus:ring-2 focus:ring-[#003c6a] outline-none" required />
                  <select name="batch" defaultValue="" className="w-full sm:w-1/2 rounded-xl px-5 py-3 bg-[#edf2f7] border border-[#b6c3d1] focus:border-[#003c6a] text-sm text-gray-700 focus:ring-2 focus:ring-[#003c6a] outline-none" required>
                    <option value="" disabled>How & Where</option>
                    <option>Morning Batch</option>
                    <option>Evening Batch</option>
                    <option>Weekend</option>
                  </select>
                </div>
                <input name="course" type="text" placeholder="Type Course" defaultValue={course.title} className="rounded-xl px-5 py-3 bg-[#edf2f7] border border-[#b6c3d1] focus:border-[#003c6a] placeholder:text-gray-700 text-sm focus:ring-2 focus:ring-[#003c6a] outline-none" required />
                <textarea name="message" rows={2} placeholder="Your Message" className="rounded-xl px-5 py-3 bg-[#edf2f7] border border-[#b6c3d1] focus:border-[#003c6a] placeholder:text-gray-700 text-sm focus:ring-2 focus:ring-[#003c6a] outline-none resize-none" />
                <button type="submit" className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white font-semibold text-base hover:from-[#0891b2] hover:to-[#16bca7] transition">
                  Submit
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
