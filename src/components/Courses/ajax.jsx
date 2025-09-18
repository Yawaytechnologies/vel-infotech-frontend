  import React, { useState, useRef } from "react";
  import { FaLaptop, FaChalkboardTeacher } from "react-icons/fa";
  // eslint-disable-next-line no-unused-vars
  import { motion } from "framer-motion";
  import Syllabus from "../coursecomponent/SyllabusLocked";
  import { SYLLABI } from "../coursecomponent/Syllabi";
  import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { submitEnquiry } from "../../redux/enquirySlice"; // adjust path



     export default function AjaxPage() {
      const syllabusRef = useRef(null);
const formRef = useRef(null);
const [unlocked, setUnlocked] = useState(false);
const handleRequestUnlock = () => setUnlocked(true);

    const [mode, setMode] = useState("class_room");
    const course = SYLLABI.ajax;
    const dispatch = useDispatch();
    const { status, error } = useSelector((s) => s.enquiry || {});
  /* ===========================
     FORM STATE + VALIDATION
     =========================== */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    batch: "",
    course: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Toast defaults (colored theme so our bg shows)
  const toastOpts = {
    position: "top-center",
    transition: Slide,
    autoClose: 2200,
    hideProgressBar: true,
    closeButton: false,
    icon: false,
    pauseOnHover: true,
    draggable: false,
    theme: "colored",
  };

  const capFirst = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
  const onlyLettersSpaces = (s) =>
    s.replace(/[^A-Za-z ]+/g, "").replace(/\s{2,}/g, " ");
  const digits10 = (s) => s.replace(/\D+/g, "").slice(0, 10);

  const validateField = (name, value) => {
    const v = (value ?? "").trim();
    switch (name) {
      case "name":
        if (!v) return "Name is required.";
        if (!/^[A-Za-z ]+$/.test(v)) return "Use letters and spaces only.";
        if (v.length < 2) return "Enter at least 2 characters.";
        return null;
      case "email":
        if (!v) return "Email is required.";
        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(v))
          return "Enter a valid email with domain (e.g., example@gmail.com).";
        return null;
      case "phone":
        if (!v) return "Mobile number is required.";
        if (!/^\d{10}$/.test(v)) return "Enter a valid 10-digit mobile number.";
        return null;
      case "batch":
        if (!v) return "Please select a batch.";
        return null;
      case "course":
        if (!v) return "Course name is required.";
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

  const setField = (name, value) => {
    let v = value;
    if (name === "name") v = capFirst(onlyLettersSpaces(value));
    if (name === "course") v = capFirst(onlyLettersSpaces(value));
    if (name === "phone") v = digits10(value);
    if (name === "message") {
      v = value.length ? value[0].toUpperCase() + value.slice(1) : value;
      v = v.slice(0, 300);
    }
    setForm((prev) => ({ ...prev, [name]: v }));

    const msg = validateField(name, v);
    setErrors((prev) => {
      const n = { ...prev };
      if (msg) n[name] = msg;
      else delete n[name];
      return n;
    });
  };

  const handleChange = (e) => setField(e.target.name, e.target.value);

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const msg = validateField(name, form[name]);
    setErrors((prev) => ({
      ...prev,
      ...(msg ? { [name]: msg } : { [name]: undefined }),
    }));
  };

 async function handleSubmit(e) {
    e.preventDefault();

    // touch all
    setTouched({
      name: true,
      email: true,
      phone: true,

      course: true,
      message: true,
    });

    // validate all
    const fields = ["name", "email", "phone", "course", "message"];
    const next = {};
    fields.forEach((f) => {
      const er = validateField(f, form[f]);
      if (er) next[f] = er;
    });
    setErrors(next);

    if (Object.keys(next).length) {
      const first = fields.find((f) => next[f]);
      const el = document.querySelector(`[name="${first}"]`);
      if (el) el.focus();
      toast.error(next[first] || "Please fix the highlighted errors.", {
        ...toastOpts,
        style: { background: "#ef4444", color: "#fff" },
        className: "rounded-xl shadow-md text-[15px] px-4 py-3",
      });
      return;
    }

    // Map to API payload (your backend expects: mode, name, email, mobile, course, message)
    const payload = {
      mode: (mode || "class_room").toUpperCase(), // "ONLINE" | "Offline"
      name: form.name.trim(),
      email: form.email.trim(),
      mobile: form.phone.trim(), // API key is 'mobile'
      course: form.course.trim(),
      message: form.message.trim(),
      // batch is kept for UI; not sent since your sample payload doesn't include it
    };

    try {
      await dispatch(submitEnquiry(payload)).unwrap();

      toast.success("Thanks! Your enquiry has been recorded.", {
        ...toastOpts,
        style: { background: "#16a34a", color: "#fff" },
        className: "rounded-xl shadow-md text-[15px] px-4 py-3",
      });

      setForm({
        name: "",
        email: "",
        phone: "",

        course: "",
        message: "",
      });
      setErrors({});
      setTouched({});
    } catch (err) {
      console.error(err);
      const msg = typeof err === "string" ? err : "Submission failed.";
      toast.error(msg, {
        ...toastOpts,
        style: { background: "#ef4444", color: "#fff" },
        className: "rounded-xl shadow-md text-[15px] px-4 py-3",
      });
    }
    }

    return (
      <section className="w-full pt-32 bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white px-4 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT: Content */}
          <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
  Join Our 100% Job Guaranteed <br />
  <span className="text-yellow-400">
   AJAX Training Course
  </span>
</h2>

<ul className="space-y-3 mt-6 text-lg">
  <li>
    ✅ Join the <strong>Best AJAX Training Institute</strong> to master asynchronous web development and dynamic web applications.
  </li>
  <li>
    ✅ Learn <strong>AJAX Fundamentals, XML/JSON, XMLHttpRequest, Fetch API, jQuery AJAX, Error Handling, RESTful API Integration, Promises & Callbacks, and Best Practices</strong>.
  </li>
  <li>
    ✅ Work on <strong>real-world AJAX projects</strong> including dynamic form submissions, live search, content updates, and API integration.
  </li>
  <li>
    ✅ Choose <strong>flexible learning modes</strong> – Weekday / Weekend / Fast-track.
  </li>
  <li>
    ✅ Earn an industry-recognized <strong>AJAX Developer Certification</strong>.
  </li>
  <li>
    ✅ Career support: Resume building, mock interviews & job placement assistance.
  </li>
</ul>


            <button
              className="group relative bg-neutral-800 h-auto min-h-[64px] w-full sm:w-80 border border-white text-left p-4 text-gray-50 text-base font-bold rounded-lg overflow-hidden
                  mt-8
                  before:absolute before:w-12 before:h-12 before:content-[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg
                  after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg
                  hover:decoration-2 hover:text-rose-300
                  duration-500 hover:duration-500 before:duration-500 after:duration-500
                  group-hover:before:duration-500 group-hover:after:duration-500
                  hover:border-rose-300 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:after:-right-8"
                  type="button"
            onClick={() => {
              const formSection = document.getElementById("enquiry-form");
              if (formSection)
                formSection.scrollIntoView({ behavior: "smooth" });
            }}            
            >
              <div>
                <span className="text-lg font-extrabold text-violet-400 block">
                  Freshers Salary:
                </span>
                ₹3 LPA to ₹8 LPA <br />
                <span className="text-sm text-gray-300">
                  | Duration: 3 Months
                </span>
              </div>
            </button>
          </div>

          {/* RIGHT: Call to Action */}
          <div className="flex-1 bg-white text-black p-6 rounded-xl shadow-lg max-w-md">
            <h3 className="text-2xl font-bold mb-4">WANT IT JOB?</h3>
            <p className="mb-4 text-lg">
  Become an expert in AJAX in 2 Months
</p>

            

            <button
              type="button"
              onClick={() => {
                const formSection = document.getElementById("enquiry-form");
                if (formSection) {
                  formSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="relative mt-6 px-6 py-3 overflow-hidden rounded-full border-2 border-black bg-black text-white font-semibold text-base shadow-xl flex items-center justify-center gap-2 group transition-all duration-300 w-fit"
            >
              {/* Expanding background on hover */}
              <span className
              ="absolute inset-0 z-0 before:absolute before:w-full before:aspect-square before:-left-full before:-top-1/2 before:bg-emerald-500 before:rounded-full before:transition-all before:duration-700 before:ease-in-out group-hover:before:left-0 group-hover:before:scale-150 before:-z-10"></span>

              {/* Text */}
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Enquire Now
              </span>

              {/* Icon */}
              <span className="relative z-10">
                <svg
                  className="w-8 h-8 p-2 rounded-full border border-white text-white transform rotate-45 transition-all duration-300 ease-linear group-hover:rotate-90 group-hover:bg-white group-hover:text-emerald-500 group-hover:border-white"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Info Bar */}
        <div className="w-full mt-12 bg-[#1e88e5] py-5 rounded-md shadow-md">
          <h4 className="text-center text-white font-bold text-xl md:text-2xl">
            We Offer Both Online and Classroom Training in Chennai & Bangalore.
          </h4>
        </div>

        
      
        {/* Course Partners Section */}
        <section className="py-16 bg-[#002855]">
          <div className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-10">
              <h3 className="text-xl font-semibold uppercase tracking-wide text-white">
                <span className="text-purple-400">●</span> Our Course Partners{" "}
                <span className="text-purple-400">●</span>
              </h3>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                {
                  name: "HubSpot",
                  logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg",
                  link: "https://www.hubspot.com/",
                },
                {
                  name: "GitLab",
                  logo: "https://cdn.worldvectorlogo.com/logos/gitlab.svg",
                  link: "https://about.gitlab.com/",
                },
                {
                  name: "Monday.com",
                  logo: "https://cdn.worldvectorlogo.com/logos/monday-1.svg",
                  link: "https://monday.com/",
                },
                {
                  name: "Google Cloud",
                  logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg",
                  link: "https://cloud.google.com/",
                },
                {
                  name: "AWS",
                  logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
                  link: "https://aws.amazon.com/",
                },
                {
                  name: "Salesforce",
                  logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
                  link: "https://www.salesforce.com/",
                },
                {
                  name: "IBM",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
                  link: "https://www.ibm.com/",
                },
                {
                  name: "Slack",
                  logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
                  link: "https://slack.com/",
                },
              ].map((partner, index) => (
                <motion.a
                  key={index}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="bg-white rounded-xl p-4 flex items-center justify-center shadow-md"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 object-contain"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </section>




        {/* JAVA overview */}
        <section className="px-0 py-16 bg-">
          <div className="max-w-[100%] mx-auto px-4 md:px-10">
            <div className="bg-[#f7f9fb] rounded-3xl shadow-md p-6 md:p-10">
              {/* Heading */}
             <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-5">
  Overview of AJAX Training Course
</h2>
<div className="w-28 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>

{/* Description */}
<p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed text-center md:text-left">
  Our AJAX Training equips you with the skills and hands-on expertise required to create
  dynamic, asynchronous web applications and seamless user experiences. This course covers
  AJAX Fundamentals, XMLHttpRequest, Fetch API, JSON & XML handling, jQuery AJAX, RESTful
  API integration, error handling, Promises, Callbacks, and best practices. You’ll also work
  on real-world projects, implement asynchronous interactions, and receive interview
  preparation support to kick-start your career in web development.
</p>

{/* What You’ll Learn */}
<h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">
  What You’ll Learn From AJAX Training
</h3>
<ul className="space-y-4 text-gray-800 text-base md:text-lg">
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Build a strong foundation in AJAX concepts, asynchronous programming, and dynamic web development.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Learn to make API requests, handle responses, and integrate data dynamically into web pages.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Gain expertise in using XMLHttpRequest, Fetch API, Promises, Callbacks, and jQuery AJAX.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Work on real-world AJAX projects including live search, dynamic forms, and content updates.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Prepare for real-world scenarios with asynchronous data fetching, error handling, and performance optimization.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Get career support with resume building, mock interviews, and placement assistance.
  </li>
</ul>






            </div>
          </div>
        </section>
        <div ref={syllabusRef} id="syllabus" className="scroll-mt-[110px]">
          <Syllabus
            title={course.title}
            accent={course.accent}
            meta={course.meta}
            preview={course.preview}
            sections={course.sections} // ← REQUIRED
            useExternalForm
            isUnlocked={unlocked}
            onRequestUnlock={handleRequestUnlock}
            cardMinH={400} // tweak to visually match your right cards
            stickyOffset={110}
          />
        </div>

        {/* ENQUIRY FORM - BELOW, moved right and fixed placeholders */}
        <section ref={formRef} className="w-full px-6 py-20 bg-[#f6f9ff]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10">
            {/* LEFT: Info Boxes */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-gray-900">
                <h4 className="text-xl font-bold mb-2">
                  Comprehensive Curriculum
                </h4>
           <p className="text-black/90">
  Master AJAX with structured modules covering AJAX Fundamentals, 
  Asynchronous JavaScript, XMLHttpRequest, Fetch API, Promises & Callbacks, 
  JSON & XML handling, jQuery AJAX, RESTful API integration, Error Handling, 
  Dynamic Content Loading, Partial Page Updates, Performance Optimization, 
  Cross-Browser & Compatibility Considerations, Best Practices for Modern Web Development, 
  Real-world Project Implementation, and more.
</p>














              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-gray-900">
                <h4 className="text-xl font-bold mb-2">
                  Career-Oriented Training
                </h4>
                <p className="text-black/90">
                  Learn from working professionals. Includes mock interviews,
                  resume prep, and job assistance.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-gray-900">
                <h4 className="text-xl font-bold mb-2">100% Job Guarantee</h4>
                <p className="text-black/90">
                  We assure placement support post training with strong partner
                  network and hiring drives.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-gray-900">
                <h4 className="text-xl font-bold mb-2">Hands-On Projects</h4>
                <p className="text-black/90">
                  Gain real-world experience with capstone projects and
                  industry-based assignments in every module.
                </p>
              </div>
            </div>

            {/* RIGHT: Enquiry Form */}
            <div className="w-full max-w-lg">
                        <div className="bg-white p-8 rounded-[30px] shadow-2xl border border-gray-100">
                          <h3 className="text-2xl font-bold text-center text-[#003c6a] mb-5">
                            Get a Free Training Quote
                          </h3>
            
                          {/* Mode Toggle */}
                          <div className="flex justify-center gap-3 mb-6">
                            <button
                              onClick={() => setMode("class_room")}
                              type="button"
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
                              type="button"
                              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm ${
                                mode === "online"
                                  ? "bg-[#003c6a] text-white"
                                  : "bg-white text-[#003c6a] border border-[#003c6a]"
                              }`}
                            >
                              <FaLaptop className="text-base" /> Online
                            </button>
                          </div>
            
                          <form
                            id="enquiry-form"
                            onSubmit={handleSubmit}
                            noValidate
                            className="grid grid-cols-1 gap-2"
                          >
                            {/* Name */}
                            <div>
                              <input
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
            
                            {/* Phone + Batch */}
            
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
            
                            {/* Course (dropdown select) */}
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
                                  "Java",
                                  "Python",
                                  "Full Stack Development",
                                  "PL/SQL",
                                  "SQL",
                                  "Data Science",
                                  "Business Analytics",
                                  "Data Science & AI",
                                  "Big Data Developer",
                                  "Software Testing",
                                  "Selenium Testing",
                                  "ETL Testing",
                                  "AWS Training",
                                  "DevOps",
                                  "Hardware Networking",
                                  "Cyber Security",
                                  "SAP",
                                  "Salesforce",
                                  "ServiceNow",
                                  "RPA (Robotic Process Automation)",
                                  "Production Support",
                                  "Digital Marketing",
                                  "Soft Skill Training",
                                  "Scrum Master",
                                  "Business Analyst",
                                  "Product Management",
                                ].map((course) => (
                                  <option key={course} value={course}>
                                    {course}
                                  </option>
                                ))}
                              </select>
            
                              <div className="h-3 mt-0.5">
                                {touched?.course && errors?.course && (
                                  <p className="text-red-600 text-xs">{errors.course}</p>
                                )}
                              </div>
                            </div>
            
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
            
                            {/* Optional server error */}
                            {error && (
                              <p className="text-red-600 text-xs mt-1">
                                Submission failed: {String(error)}
                              </p>
                            )}
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Toast container */}
                        <ToastContainer
                          newestOnTop
                          limit={2}
                          className="!z-[9999]"
                          toastClassName={() => "rounded-xl shadow-md"}
                          bodyClassName={() => "text-[15px] font-medium"}
                          theme="colored"
                        />
      </section>
    );
  }


  