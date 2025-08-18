// src/pages/Internship.jsx
import React, { useState } from "react";
import internshipBg from "../assets/internship.jpg";
import background from "../assets/background.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import dotnetIcon from "../assets/dotnet.png";
import cyberIcon from "../assets/cyber.png";
import networkingIcon from "../assets/internet.png";
import javaIcon from "../assets/java.png";
import aiIcon from "../assets/ai.png";
import cloudIcon from "../assets/upload.png";
import pythonIcon from "../assets/python.png";
import dataScienceIcon from "../assets/datascience.png";
import hackingIcon from "../assets/crime.png";
import phpIcon from "../assets/php.png";
import mlIcon from "../assets/machine.png";
import analyticsIcon from "../assets/analytics.png";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Internship = () => {
  // ----- Form state -----
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // ----- Helpers -----
  const capFirst = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
  const onlyLettersSpaces = (s) =>
    s.replace(/[^A-Za-z ]+/g, "").replace(/\s{2,}/g, " ");
  const digits10 = (s) => s.replace(/\D+/g, "").slice(0, 10);

  const validateField = (name, value) => {
    const v = (value ?? "").trim();
    switch (name) {
      case "fullName":
        if (!v) return "Full name is required.";
        if (!/^[A-Za-z ]+$/.test(v)) return "Use letters and spaces only.";
        if (v.length < 2) return "Enter at least 2 characters.";
        return null;
      case "email":
        if (!v) return "Email is required.";
        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(v))
          return "Enter a valid email with domain (e.g., example@gmail.com).";
        return null;
      case "phone":
        if (!v) return "Phone number is required.";
        if (!/^\d{10}$/.test(v)) return "Enter a valid 10-digit number.";
        return null;
      case "course":
        if (!v) return "Course / Domain is required.";
        if (!/^[A-Za-z ]+$/.test(v)) return "Use letters and spaces only.";
        if (v.length < 2) return "Enter at least 2 characters.";
        return null;
      case "message":
        if (!v) return "Message is required.";
        if (v.length > 300) return "Max 300 characters.";
        return null;
      default:
        return null;
    }
  };

  const validateAll = (data) => {
    const next = {};
    ["fullName", "email", "phone", "course", "message"].forEach((k) => {
      const e = validateField(k, data[k]);
      if (e) next[k] = e;
    });
    setErrors(next);
    return next;
  };

  // ----- Toast setup -----
  const tBase = {
    position: "top-center",
    autoClose: 2200,
    hideProgressBar: true,
    closeButton: false,
    draggable: false,
    pauseOnHover: true,
    pauseOnFocusLoss: false,
    transition: Slide,
    theme: "colored",
    style: {
      borderRadius: "12px",
      padding: "10px 16px",
      minWidth: "280px",
      maxWidth: "360px",
      lineHeight: 1.25,
      fontSize: "14px",
      fontWeight: 600,
      color: "#fff",
      boxShadow: "0 10px 24px rgba(0,0,0,.18)",
    },
  };
  const toastSuccess = (m) =>
    toast(m, { ...tBase, style: { ...tBase.style, background: "#34d399" } });
  const toastError = (m) =>
    toast(m, { ...tBase, style: { ...tBase.style, background: "#ef4444" } });

  // ----- Handlers -----
  const handleChange = (e) => {
    const { name, value } = e.target;
    let v = value;

    if (name === "fullName") v = capFirst(onlyLettersSpaces(value));
    if (name === "course") v = capFirst(onlyLettersSpaces(value));
    if (name === "phone") v = digits10(value);
    if (name === "message") {
      v = value.length ? value[0].toUpperCase() + value.slice(1) : value;
      v = v.slice(0, 300);
    }

    setForm((f) => ({ ...f, [name]: v }));

    // live-validate
    const msg = validateField(name, v);
    setErrors((prev) => {
      const next = { ...prev };
      if (msg) next[name] = msg;
      else delete next[name];
      return next;
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const msg = validateField(name, form[name]);
    setErrors((prev) => ({ ...prev, ...(msg ? { [name]: msg } : { [name]: undefined }) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      course: true,
      message: true,
    });

    const errs = validateAll(form);
    if (Object.keys(errs).length) {
      const order = ["fullName", "email", "phone", "course", "message"];
      const first = order.find((k) => errs[k]);
      toastError(errs[first] || "Please fix the highlighted fields.");
      return;
    }

    // TODO: post to your API here
    toastSuccess("Thanks! Your application has been submitted.");
    setForm({ fullName: "", email: "", phone: "", course: "", message: "" });
    setErrors({});
    setTouched({});
  };

  const inputBase =
    "border border-gray-300 rounded px-4 py-2 w-full transition-colors";
  const ok = "focus:border-blue-500";
  const bad = "border-red-500 focus:border-red-500";
  const help = "mt-1 text-[12px] text-red-600";

  return (
    <div className="bg-background ">
      {/* Toasts */}
      <ToastContainer newestOnTop />

      {/* Hero Banner */}
      <div
        className="relative w-full mt-[54px] sm:mt-[100px] h-[250px] sm:h-[320px] md:h-[390px]
                     flex items-center justify-start px-3 sm:px-4 md:px-10 lg:px-10"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
      >
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-6xl font-bold leading-sung leading-relaxed sm:px-10 md:px-20">
          Internship
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto ">
        <div className="w-full bg-background py-8 px-2">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-4 sm:px-6">
            {/* Left Text Card */}
            <div className="bg-white p-4 sm:p-6 border border-blue-100 relative z-10">
              <h6 className="text-lg font-bold text-blue-900  mb-3 leading-relaxed">
                Best Online Training Institute in Chennai & Bangalore
              </h6>
              <p className="text-black-900 text-md mb-4 leading-relaxed">
                Feed this question to Google and it coughs up – ‘An “internship”
                is an opportunity offered by an employer to potential employees,
                called “interns”, to work at a firm for a fixed, limited period
                of time.’
              </p>
              <p className="text-black-900 text-md mb-4 leading-relaxed">
                Let’s make it simpler for you – it’s a job before the actual
                job, a peek into your career before it actually starts. You will
                go to the office (unless it’s remote), have real
                responsibilities, learn new skills, and possibly get paid.
                Sounds great, right?
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center">
              <img
                src={internshipBg}
                alt="Internship Illustration"
                className="w-full  h-70 sm:h-74    transition-transform duration-300"
              />
            </div>
          </div>

          {/* Internship Icons Grid */}
          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto ">
            {[
              { title: "Dotnet", image: dotnetIcon },
              { title: "Cyber Security", image: cyberIcon },
              { title: "Networking", image: networkingIcon },
              { title: "Java", image: javaIcon },
              { title: "Artificial Intelligence", image: aiIcon },
              { title: "Cloud Computing", image: cloudIcon },
              { title: "Python", image: pythonIcon },
              { title: "Data Science", image: dataScienceIcon },
              { title: "Ethical Hacking", image: hackingIcon },
              { title: "PHP", image: phpIcon },
              { title: "Machine Learning", image: mlIcon },
              { title: "Data Analytics", image: analyticsIcon },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-center items-center text-center min-h-[160px] w-full px-4 py-6 rounded-xl shadow-md cursor-pointer bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-18 w-18 object-contain mb-4"
                />
                <h4 className="font-bold text-md text-blue-900">
                  {item.title}
                </h4>
                <p className="text-sm text-black-900">Internship</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-6 mt-5">
          <div className="flex justify-center items-center">
            <img
              src={internshipBg}
              alt="Internship Illustration"
              className="w-full h-90  transition-transform duration-300"
            />
          </div>
          <div className="bg-white p-4  shadow text-gray-700 text-sm leading-relaxed">
            <h4 className="text-md font-bold text-blue-800 mb-2">
              Now, why you should do an internship?
            </h4>
            <p className="mb-1 text-md">
              Again, breaking it down into five main points:
            </p>
            <ol className="list-decimal pl-1 space-x-2 text-sm leading-relaxed">
              <li>
                <strong>Because of work ex-matters –</strong> 44 out of 100
                employers value relevant work experience more than any other
                qualifications while recruiting.
              </li>
              <li>
                <strong>
                  Because it allows you to apply classroom knowledge in
                  real-life situations –
                </strong>{" "}
                Internships give you a way to utilize your knowledge base and
                expand it.
              </li>
              <li>
                <strong>
                  Because many students don’t know what they want –
                </strong>{" "}
                Internships can be used as tools to discover what you’re good
                at.
              </li>
              <li>
                <strong>Because they help you build a network –</strong> The
                professional contacts you make during internships can help you
                land a full-time role.
              </li>
              <li>
                <strong>Because they might lead to a job –</strong> Many
                companies use internships to evaluate and recruit future
                employees.
              </li>
            </ol>
            <div className="mt-2">
              <a
                href="#apply"
                className="inline-block bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Internship Cards */}
      <h2 className="text-3xl font-bold text-center text-black mt-10 mb-10">
        Trending Internship in Chennai
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            title: "Data Science Internship",
            image: dataScienceIcon,
            gradient: "from-cyan-500 to-cyan-200",
          },
          {
            title: "Python Internship",
            image: pythonIcon,
            gradient: "from-cyan-500 to-cyan-200",
          },
          {
            title: "Artificial Intelligence Internship",
            image: aiIcon,
            gradient: "from-cyan-500 to-cyan-200",
          },
          {
            title: "Java Internship",
            image: javaIcon,
            gradient: "from-cyan-500 to-cyan-200",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -8 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all"
          >
            <div
              className={`p-4 bg-gradient-to-r ${item.gradient} text-white text-center`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-20 mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg leading-tight">
                {item.title.split(" ")[0]} <br /> Internship
              </h3>
            </div>
            <div className="p-4 text-center">
              <p className="font-medium text-gray-800">{item.title}</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Application Form */}
      <div id="apply">
        <div className="max-w-3xl mx-auto bg-white shadow rounded-lg px-3 py-4 pb-2 mt-10 mb-1">
          <h3 className="text-2xl font-bold mb-6 text-center text-blue-800">
            Internship Application Form
          </h3>

          <form className="space-y-4" noValidate onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.fullName}
                  className={`${inputBase} ${
                    touched.fullName && errors.fullName ? bad : ok
                  }`}
                />
                {touched.fullName && errors.fullName && (
                  <p className={help}>{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.email}
                  className={`${inputBase} ${
                    touched.email && errors.email ? bad : ok
                  }`}
                />
                {touched.email && errors.email && (
                  <p className={help}>{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Phone */}
              <div>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="\d*"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.phone}
                  className={`${inputBase} ${
                    touched.phone && errors.phone ? bad : ok
                  }`}
                />
                {touched.phone && errors.phone && (
                  <p className={help}>{errors.phone}</p>
                )}
              </div>

              {/* Course / Domain */}
              <div>
                <input
                  name="course"
                  type="text"
                  placeholder="Interested Course / Domain"
                  value={form.course}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.course}
                  className={`${inputBase} ${
                    touched.course && errors.course ? bad : ok
                  }`}
                />
                {touched.course && errors.course && (
                  <p className={help}>{errors.course}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.message}
                className={`${inputBase} ${
                  touched.message && errors.message ? bad : ok
                }`}
              ></textarea>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>First letter auto-caps</span>
                <span>{form.message.length}/300</span>
              </div>
              {touched.message && errors.message && (
                <p className={help}>{errors.message}</p>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>  
      </div>
    </div>
  );
};

export default Internship;
