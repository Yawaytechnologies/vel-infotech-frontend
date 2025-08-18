import React, { useState } from "react";
import { FaLaptop, FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AboutSection() {
  const [mode, setMode] = useState("classroom");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    batch: "",
    course: "",
    message: "",
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // helpers
  const capFirst = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
  const lettersSpaces = (s) => s.replace(/[^A-Za-z ]+/g, "").replace(/\s{2,}/g, " ");

  const setField = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      const err = validateField(field, value);
      if (err) next[field] = err;
      else delete next[field];
      return next;
    });
  };

  // validations
  const validateField = (field, value) => {
    const val = (value ?? "").trim();
    switch (field) {
      case "name":
        if (!val) return "Name is required.";
        if (!/^[A-Za-z ]+$/.test(val)) return "Only letters and spaces are allowed.";
        if (val.length < 2) return "Enter at least 2 characters.";
        return null;
      case "email": {
        if (!val) return "Email is required.";
        // Adjusted regex for email validation with domain check
        const formatOK = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val);
        if (!formatOK) return "Email must include letters and number or without number  allowed symbols before @";
        return null;
      }
      case "phone":
        if (!val) return "Mobile number is required.";
        if (!/^\d{10}$/.test(val)) return "Enter a valid 10-digit mobile number.";
        return null;
      case "batch":
        if (!val) return "Please select a batch.";
        return null;
      case "course":
        if (!val) return "Course name is required.";
        if (!/^[A-Za-z ]+$/.test(val)) return "Only letters and spaces are allowed.";
        if (val.length < 2) return "Enter at least 2 characters.";
        return null;
      case "message":
        if (val.length > 300) return "Message must be 300 characters or less.";
        return null;
      default:
        return null;
    }
  };

  const validateAll = () => {
    const fields = ["name", "email", "phone", "batch", "course", "message"];
    const next = {};
    fields.forEach((f) => {
      const err = validateField(f, form[f]);
      if (err) next[f] = err;
    });
    setErrors(next);
    return next;
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    if (name === "name") setField("name", capFirst(value));
    if (name === "course") setField("course", capFirst(value));
    if (name === "message") setField("message", capFirst(value));
  };

  // inputs
  const handleName = (e) => setField("name", capFirst(lettersSpaces(e.target.value)));
  const handleEmail = (e) => setField("email", e.target.value);
  const handlePhone = (e) => setField("phone", e.target.value.replace(/\D+/g, "").slice(0, 10));
  const handleCourse = (e) => setField("course", capFirst(lettersSpaces(e.target.value)));
  const handleMessage = (e) => {
    const v = e.target.value;
    setField("message", v.length ? v[0].toUpperCase() + v.slice(1) : v);
  };

  // toast helpers
  const tBase = {
    position: "top-center",
    autoClose: 2200,
    hideProgressBar: true,
    closeButton: false,
    newestOnTop: true,
    draggable: false,
    pauseOnHover: true,
    pauseOnFocusLoss: false,
    theme: "colored",
    transition: Slide,
    style: {
      borderRadius: "10px",
      padding: "8px 12px",
      minWidth: "260px", // smaller width
      maxWidth: "320px",
      lineHeight: 1.25,
      fontSize: "14px",
      fontWeight: 600,
      boxShadow: "0 8px 20px rgba(0,0,0,.18)",
      color: "#fff",
    },
  };

  const notifySuccess = (msg) =>
    toast(msg, { ...tBase, style: { ...tBase.style, background: "#34d399" /* light green */, color: "#fff" } });

  const notifyError = (msg) =>
    toast(msg, { ...tBase, style: { ...tBase.style, background: "#ef4444" /* red */, color: "#fff" } });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, batch: true, course: true, message: true });

    const errs = validateAll();
    if (Object.keys(errs).length) {
      const firstErr = errs.name || errs.email || errs.phone || errs.batch || errs.course || errs.message;
      notifyError(firstErr || "Please fix the highlighted fields.");
      return;
    }

    try {
      setSubmitting(true);
      // TODO: post to your API here
      // await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, mode }) });
      notifySuccess("Thanks! Your enquiry has been recorded.");
      setForm({ name: "", email: "", phone: "", batch: "", course: "", message: "" });
      setErrors({});
      setTouched({});
    } catch {
      notifyError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // compact controls
  const control =
    "h-10 rounded-xl bg-background px-3 border text-[13px] font-medium focus:ring-2 focus:ring-[#003c6a] outline-none shadow w-full";
  const ok = "border-[#003c6a]/60";
  const err = "border-red-500 focus:ring-red-500";
  const helper = (hasErr) => `h-3 text-[10px] mt-1 ${hasErr ? "text-red-600" : "text-transparent"}`;

  return (
    <>
      {/* Toasts pinned to top of viewport */}
      <ToastContainer newestOnTop position="top-center" autoClose={2200} closeOnClick={false} pauseOnHover={true} />

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
          style={{ background: "linear-gradient(to bottom, #f4f7fd 60%, #fff0 100%)" }}
        />
        <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row gap-12 items-stretch z-10">
          {/* LEFT kept same */}
          <div className="flex-1 flex flex-col justify-center pl-0 md:pl-2 lg:pl-8">
            <h2 className="text-[2.2rem] md:text-[1.8rem] font-black text-[#171717] mb-3 text-center leading-tight">
              Vel InfoTech <span className="text-[#171717]">— India’s No.1 IT Training Institute</span>
            </h2>
            <p className="text-gray-700 text-xl mb-7 leading-relaxed">
              <span className="font-semibold text-[#005BAC]">Elevate your career with curated training,</span> built by
              650+ industry experts for real-world success. Join thousands of professionals accelerating their future.
            </p>
            <div className="bg-white border border-[#a7f3d0]/30 shadow-lg rounded-2xl p-6 mb-5">
              <h3 className="text-lg font-bold text-[#005BAC] mb-2 tracking-wide">About Vel InfoTech</h3>
              <ul className="text-gray-800 text-base space-y-2 mb-3 list-disc list-inside">
                <li>
                  <span className="font-bold">Industry Leader:</span> Recognized by LinkedIn as India’s most influential
                  IT education brand.
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
                <span className="font-semibold">Benefits:</span> Faster onboarding, productivity gains, cost-effective
                upskilling, and global recognition.
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <Link
                to="/all-courses"
                className="px-6 py-3 bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white font-bold rounded-2xl shadow hover:shadow-xl hover:from-[#0891b2] hover:to-[#16bca7] transition-all duration-200 text-lg tracking-wide"
              >
                View All Courses
              </Link>
            </div>
          </div>

          {/* RIGHT: Enquiry Card */}
          <div className="flex-1 w-full max-w-lg mx-auto md:mx-0 flex flex-col justify-center px-0 md:px-4">
            <div className="relative backdrop-blur-[6px] bg-white/70 border border-white/60 shadow-2xl rounded-3xl p-8 transition-all hover:scale-[1.015] hover:shadow-2xl duration-300">
              <h3 className="text-2xl font-bold mb-5 text-center bg-gradient-to-r from-[#005BAC] to-[#003c6a] bg-clip-text text-transparent tracking-tight">
                Get a Free Training Quote
              </h3>

              {/* Mode Toggle */}
              <div className="flex justify-center mb-6 gap-2">
                <button
                  type="button"
                  onClick={() => setMode("classroom")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full text-sm font-medium shadow
                    ${mode === "classroom"
                      ? "bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white shadow-lg"
                      : "bg-white/60 text-black border border-[#a7f3d0]/40"} transition-all duration-200`}
                  aria-pressed={mode === "classroom"}
                >
                  <FaChalkboardTeacher className="text-base" /> Class Room
                </button>
                <button
                  type="button"
                  onClick={() => setMode("online")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full text-sm font-medium shadow
                    ${mode === "online"
                      ? "bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white shadow-lg"
                      : "bg-white/60 text-black border border-[#a7f3d0]/40"} transition-all duration-200`}
                  aria-pressed={mode === "online"}
                >
                  <FaLaptop className="text-base" /> Online
                </button>
              </div>

              {/* Form (compact) */}
              <form className="flex flex-col gap-2" noValidate onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleName}
                    onBlur={onBlur}
                    aria-invalid={!!errors.name}
                    aria-describedby="err-name"
                    className={`${control} ${touched.name && errors.name ? err : ok}`}
                  />
                  <div id="err-name" className={helper(touched.name && errors.name)}>
                    {touched.name && errors.name ? errors.name : "placeholder"}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleEmail}
                    onBlur={onBlur}
                    aria-invalid={!!errors.email}
                    aria-describedby="err-email"
                    className={`${control} ${touched.email && errors.email ? err : ok}`}
                    autoComplete="email"
                  />
                  <div id="err-email" className={helper(touched.email && errors.email)}>
                    {touched.email && errors.email ? errors.email : "placeholder"}
                  </div>
                </div>

                {/* Phone + Batch */}
                <div className="grid grid-cols-2 gap-2 items-start">
                  <div>
                    <input
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      pattern="\d*"
                      placeholder="Mobile Number"
                      value={form.phone}
                      onChange={handlePhone}
                      onBlur={onBlur}
                      aria-invalid={!!errors.phone}
                      aria-describedby="err-phone"
                      className={`${control} ${touched.phone && errors.phone ? err : ok}`}
                    />
                    <div id="err-phone" className={helper(touched.phone && errors.phone)}>
                      {touched.phone && errors.phone ? errors.phone : "placeholder"}
                    </div>
                  </div>

                  <div>
                    <select
                      name="batch"
                      value={form.batch}
                      onChange={(e) => setField("batch", e.target.value)}
                      onBlur={onBlur}
                      aria-invalid={!!errors.batch}
                      aria-describedby="err-batch"
                      className={`${control} cursor-pointer pr-7 ${
                        touched.batch && errors.batch ? err : ok
                      }`}
                    >
                      <option value="" disabled>
                        How & Where
                      </option>
                      <option>Morning Batch</option>
                      <option>Evening Batch</option>
                      <option>Weekend</option>
                    </select>
                    <div id="err-batch" className={helper(touched.batch && errors.batch)}>
                      {touched.batch && errors.batch ? errors.batch : "placeholder"}
                    </div>
                  </div>
                </div>

                {/* Course */}
                <div>
                  <input
                    name="course"
                    type="text"
                    placeholder="Type Course"
                    value={form.course}
                    onChange={handleCourse}
                    onBlur={onBlur}
                    aria-invalid={!!errors.course}
                    aria-describedby="err-course"
                    className={`${control} ${touched.course && errors.course ? err : ok}`}
                  />
                  <div id="err-course" className={helper(touched.course && errors.course)}>
                    {touched.course && errors.course ? errors.course : "placeholder"}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={3}
                    value={form.message}
                    onChange={handleMessage}
                    onBlur={onBlur}
                    aria-invalid={!!errors.message}
                    aria-describedby="err-message"
                    className={`rounded-xl bg-background px-3 py-2 min-h-[72px] border text-[13px] font-medium focus:ring-2 focus:ring-[#003c6a] outline-none shadow w-full ${
                      touched.message && errors.message ? err : ok
                    }`}
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>Optional</span>
                    <span>{form.message.length}/300</span>
                  </div>
                  <div id="err-message" className={helper(touched.message && errors.message)}>
                    {touched.message && errors.message ? errors.message : "placeholder"}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-gradient-to-r from-[#005BAC] to-[#003c6a] disabled:opacity-70 disabled:cursor-not-allowed text-white font-extrabold py-2.5 rounded-xl hover:from-[#0891b2] hover:to-[#16bca7] transition shadow-lg mt-1"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>

                <input type="hidden" name="mode" value={mode} />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
