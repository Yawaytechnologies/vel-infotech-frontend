// AutoPopupQuoteForm.jsx
import React, { useEffect, useRef, useState } from "react";
import { FaLaptop, FaChalkboardTeacher } from "react-icons/fa";

export default function AutoPopupQuoteForm({
  status,
  error,
  mode,
  setMode,
  form,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}) {
  const [open, setOpen] = useState(false);
  const firstFieldRef = useRef(null);

  // open after 1s
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(t);
  }, []);

  // focus first input when opened
  useEffect(() => {
    if (open) firstFieldRef.current?.focus();
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      aria-modal="true"
      role="dialog"
      aria-labelledby="quote-title"
    >
      {/* Backdrop */}
      <button
        aria-label="Close quote form"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal card */}
      <div
        className="relative w-[92%] sm:w-[85%] md:w-[680px] max-w-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="animate-in fade-in zoom-in-95 duration-200">
          <div className="w-full max-w-lg mx-auto">
            <div className="bg-white p-8 rounded-[30px] shadow-2xl border border-gray-100">
              <h3 id="quote-title" className="text-2xl font-bold text-center text-[#003c6a] mb-5">
                Get a Free Training Quote
              </h3>

              {/* Toggle Buttons */}
              <div className="flex justify-center gap-3 mb-6">
                <button
                  onClick={() => setMode("class_room")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm ${
                    mode === "class_room"
                      ? "bg-[#003c6a] text-white"
                      : "bg-white text-[#003c6a] border border-[#003c6a]"
                  }`}
                >
                  <FaChalkboardTeacher className="text-base" /> Class Room
                </button>
                <button
                  onClick={() => setMode("online")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm ${
                    mode === "online"
                      ? "bg-[#003c6a] text-white"
                      : "bg-white text-[#003c6a] border border-[#003c6a]"
                  }`}
                >
                  <FaLaptop className="text-base" /> Online
                </button>
              </div>

              {/* Form (your exact form, with the first field ref) */}
              <form id="enquiry-form" onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-2">
                {/* Name */}
                <div>
                  <input
                    ref={firstFieldRef}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors?.name}
                    className={[
                      "w-full rounded-xl px-4 py-2.5 bg-[#edf2f7] border text-sm focus:ring-2 outline-none text-gray-900 placeholder:text-gray-500",
                      touched?.name && errors?.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-[#b6c3d1] focus:border-[#003c6a] focus:ring-[#003c6a]",
                    ].join(" ")}
                  />
                  <div className="h-3 mt-0.5">
                    {touched?.name && errors?.name && (
                      <p className="text-red-600 text-xs">{errors.name}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors?.email}
                    className={[
                      "w-full rounded-xl px-4 py-2.5 bg-[#edf2f7] border text-sm focus:ring-2 outline-none text-gray-900 placeholder:text-gray-500",
                      touched?.email && errors?.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-[#b6c3d1] focus:border-[#003c6a] focus:ring-[#003c6a]",
                    ].join(" ")}
                  />
                  <div className="h-3 mt-0.5">
                    {touched?.email && errors?.email && (
                      <p className="text-red-600 text-xs">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    inputMode="numeric"
                    pattern="\d*"
                    placeholder="Mobile Number"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors?.phone}
                    className={[
                      "w-full rounded-xl px-4 py-2.5 bg-[#edf2f7] border text-sm focus:ring-2 outline-none text-gray-900 placeholder:text-gray-500",
                      touched?.phone && errors?.phone
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-[#b6c3d1] focus:border-[#003c6a] focus:ring-[#003c6a]",
                    ].join(" ")}
                  />
                  <div className="h-3 mt-0.5">
                    {touched?.phone && errors?.phone && (
                      <p className="text-red-600 text-xs">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Course */}
                <div>
                  <select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors?.course}
                    className={[
                      "w-full rounded-xl px-4 py-2.5 bg-[#edf2f7] border text-sm focus:ring-2 outline-none text-gray-900",
                      touched?.course && errors?.course
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-[#b6c3d1] focus:border-[#003c6a] focus:ring-[#003c6a]",
                    ].join(" ")}
                  >
                    <option value="">Select Course</option>
                    {[
                      "Java","Python","Full Stack Development","PL/SQL","SQL","Data Science","Business Analytics","Data Science & AI",
                      "Big Data Developer","Software Testing","Selenium Testing","ETL Testing","AWS Training","DevOps","Hardware Networking",
                      "Cyber Security","SAP","Salesforce","ServiceNow","RPA (Robotic Process Automation)","Production Support",
                      "Digital Marketing","Soft Skill Training","Scrum Master","Business Analyst","Product Management",
                    ].map((course) => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                  <div className="h-3 mt-0.5">
                    {touched?.course && errors?.course && (
                      <p className="text-red-600 text-xs">{errors.course}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows={2}
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors?.message}
                    className={[
                      "w-full rounded-xl px-4 py-2.5 bg-[#edf2f7] border text-sm resize-none focus:ring-2 outline-none text-gray-900 placeholder:text-gray-500",
                      touched?.message && errors?.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-[#b6c3d1] focus:border-[#003c6a] focus:ring-[#003c6a]",
                    ].join(" ")}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-0.5">
                    <span>First letter auto-caps</span>
                    <span>{form.message.length}/300</span>
                  </div>
                  <div className="h-3 mt-0.5">
                    {touched?.message && errors?.message && (
                      <p className="text-red-600 text-xs">{errors.message}</p>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full mt-1.5 py-2.5 rounded-xl bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white font-semibold text-sm hover:from-[#0891b2] hover:to-[#16bca7] transition ${
                    status === "loading" ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {status === "loading" ? "Submitting..." : "Submit"}
                </button>

                {/* Server error */}
                {error && (
                  <p className="text-red-600 text-xs mt-1">Submission failed: {String(error)}</p>
                )}
              </form>

              {/* Close button (top-right) */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-4 text-slate-500 hover:text-slate-800"
                aria-label="Close"
                title="Close"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
