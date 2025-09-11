import React, { useState, useRef } from "react";
import { FaLaptop, FaChalkboardTeacher } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Syllabus from "../coursecomponent/SyllabusLocked";
import { SYLLABI } from "../coursecomponent/Syllabi";
import { FiChevronDown } from "react-icons/fi";
import ha1 from "../../assets/handson1.jpg"
import ha2 from "../../assets/handson2.jpg"
import ha3 from "../../assets/handson3.webp"
import ha4 from "../../assets/handson4.webp"


export default function BigDataDeveloper() {
  // List of job roles (array of strings)
  const roles = [
    "Data Analyst",
    "Business Intelligence Analyst",
    "Data Scientist",
    "Data Engineer",
    "Quantitative Analyst",
    "Operations Analyst",
    "Marketing Analyst",
    "Financial Analyst",
    "Risk Analyst",
    "Product Analyst",
    "Customer Insights Analyst",
    "Supply Chain Analyst",
    "Fraud Analyst",
    "Machine Learning Engineer",
    "Big Data Analyst",
    "Data Visualization Specialist",
  ];
   const ladiesPG = [
    { name: "Rainbow", phone: "6369217603" },
    { name: "Green Home", phone: "9150607451" },
    { name: "Sai Balaji", phone: "8142583960" },
    { name: "Orange", phone: "9080195608" },
  ];

  const mensPG = [
    { name: "Blue Nest", phone: "9876543210" },
    { name: "Comfort Stay", phone: "9123456780" },
    { name: "City Homes", phone: "9988776655" },
    { name: "Elite PG", phone: "9090909090" },
  ];

  const projects = ["Project - 1", "Project - 2", "Project - 3"];

  const softwares = [
    { name: "Power BI Download Link", url: "#" },
    { name: "Tableau Download Link", url: "#" },
    { name: "SQL Download Link", url: "#" },
  ];

  const tabs = [
    "Practice Tasks",
    "Interview Questions",
    "Model Resume",
    "Software Links",
    "Projects",
    "Accommodation",
  ];
  const [activeTab, setActiveTab] = useState("Practice Tasks");
  const [openIndex, setOpenIndex] = useState(null);
   const resumes = [
    { name: "Model Resume 1 Download Link", url: "#" },
    { name: "Model Resume 2 Download Link", url: "#" },
    { name: "Model Resume 3 Download Link", url: "#" },
  ];

  const practiceTasks = [
    "Tableau Class Task",
    "Power BI Class Task",
    "SQL Class Task",
  ];
  const interviewQuestions = [
    "Power BI Interview Questions",
    "Tableau Interview Questions",
    "SQL Interview Questions",
  ];
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const audience = [
  "Non IT to IT", 
"From Any Degree to IT Job",
"Any passed out to IT Job", 
"Any Domain to IT Job" 

];
 const images = [
    ha1,
    ha2,
    ha3,
    ha4,
  ];
  const [mode, setMode] = useState("classroom");
  const course = SYLLABI.bigdatadeveloper;
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

  // Smooth scroll target
  const formRef = useRef(null);
  const scrollToForm = () => {
    const el = formRef.current || document.getElementById("enquiry-form");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 100; // account for fixed header
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Toast options
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

  // helpers
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
          return "Enter a valid email (e.g., name@gmail.com).";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      batch: true,
      course: true,
      message: true,
    });

    const fields = ["name", "email", "phone", "batch", "course", "message"];
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

    // success path – (wire API here if needed)
    console.log("Big Data Enquiry:", form);

    toast.success("Thanks! Your enquiry has been recorded.", {
      ...toastOpts,
      style: { background: "#16a34a", color: "#fff" },
      className: "rounded-xl shadow-md text-[15px] px-4 py-3",
    });

    setForm({
      name: "",
      email: "",
      phone: "",
      batch: "",
      course: "",
      message: "",
    });
    setErrors({});
    setTouched({});
  };

  // input classes
  const baseInput =
    "w-full rounded-xl px-4 py-2.5 bg-[#edf2f7] border text-sm focus:ring-2 outline-none text-gray-900 placeholder:text-gray-500";
  const ok = "border-[#b6c3d1] focus:border-[#003c6a] focus:ring-[#003c6a]";
  const bad = "border-red-500 focus:border-red-500 focus:ring-red-500";

  return (
    <section className="w-full pt-32 bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white px-4 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT: Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Join Our 100% Job Guaranteed <br />
            <span className="text-yellow-400">Big Data Developer Program</span>
          </h2>

          <ul className="space-y-3 mt-6 text-lg">
            <li>✅ Join the <strong>Top Big Data Institute</strong> to become a skilled Hadoop & Spark engineer.</li>
            <li>✅ Learn essential technologies – <strong>Hadoop, Spark, Hive, Pig, Sqoop, Kafka, Scala</strong>.</li>
            <li>✅ Build real-time data pipeline projects using <strong>distributed computing and big data tools</strong>.</li>
            <li>✅ Choose <strong>flexible learning tracks</strong> – Weekday / Weekend / Fast-track options.</li>
            <li>✅ Earn an industry-recognized <strong>Big Data Developer Certification</strong>.</li>
            <li>✅ Career support: Hands-on project experience, resume prep & job interview assistance.</li>
          </ul>

          <button
            type="button"
            onClick={scrollToForm}
            className="group relative bg-neutral-800 h-auto min-h-[64px] w-full sm:w-80 border border-white text-left p-4 text-gray-50 text-base font-bold rounded-lg overflow-hidden
              mt-8
              before:absolute before:w-12 before:h-12 before:content-[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg
              after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg
              hover:decoration-2 hover:text-rose-300
              duration-500 hover:duration-500 before:duration-500 after:duration-500
              group-hover:before:duration-500 group-hover:after:duration-500
              hover:border-rose-300 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:after:-right-8"
          >
            <div>
              <span className="text-lg font-extrabold text-violet-400 block">Freshers Salary:</span>
              ₹3 LPA to ₹8 LPA <br />
              <span className="text-sm text-gray-300">| Duration: 3 Months</span>
            </div>
          </button>
        </div>

        {/* RIGHT: Call to Action */}
        <div className="flex-1 bg-white text-black p-6 rounded-xl shadow-lg max-w-md">
          <h3 className="text-2xl font-bold mb-4">WANT IT JOB?</h3>
          <p className="mb-4 text-lg">Become a Big Data Developer in 3 Months</p>

          <button
            type="button"
            onClick={scrollToForm}
            className="relative mt-6 px-6 py-3 overflow-hidden rounded-full border-2 border-black bg-black text-white font-semibold text-base shadow-xl flex items-center justify-center gap-2 group transition-all duration-300 w-fit"
          >
            <span className="absolute inset-0 z-0 before:absolute before:w-full before:aspect-square before:-left-full before:-top-1/2 before:bg-emerald-500 before:rounded-full before:transition-all before:duration-700 before:ease-in-out group-hover:before:left-0 group-hover:before:scale-150 before:-z-10"></span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">Enquire Now</span>
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
          <div className="text-center mb-10">
            <h3 className="text-xl font-semibold uppercase tracking-wide text-white">
              <span className="text-purple-400">●</span> Our Course Partners <span className="text-purple-400">●</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg", link: "https://www.hubspot.com/" },
              { name: "GitLab", logo: "https://cdn.worldvectorlogo.com/logos/gitlab.svg", link: "https://about.gitlab.com/" },
              { name: "Monday.com", logo: "https://cdn.worldvectorlogo.com/logos/monday-1.svg", link: "https://monday.com/" },
              { name: "Google Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg", link: "https://cloud.google.com/" },
              { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg", link: "https://aws.amazon.com/" },
              { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg", link: "https://www.salesforce.com/" },
              { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", link: "https://www.ibm.com/" },
              { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg", link: "https://slack.com/" },
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
                <img src={partner.logo} alt={partner.name} className="h-12 object-contain" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* BIG DATA overview */}
      <section className="px-0 py-16">
        <div className="max-w-[100%] mx-auto px-4 md:px-10">
          <div className="bg-[#f7f9fb] rounded-3xl shadow-md p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-5">
              Overview of Big Data Developer Course
            </h2>
            <div className="w-28 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>

            <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed text-center md:text-left">
              Learn to process, analyze, and manage large-scale datasets using Hadoop, Spark, Hive, Kafka and more.
              Build scalable pipelines and real-time streaming applications with hands-on projects.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">
              What You’ll Learn From Big Data Developer Training
            </h3>
            <ul className="space-y-4 text-gray-800 text-base md:text-lg">
              <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">➤</span> HDFS, MapReduce fundamentals & cluster concepts.</li>
              <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">➤</span> Spark Core, SQL, Streaming with real-time pipelines.</li>
              <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">➤</span> Data warehousing with Hive; ETL with Pig/Sqoop.</li>
              <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">➤</span> Kafka for messaging & event-driven architectures.</li>
              <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">➤</span> NoSQL stores (HBase/MongoDB) for unstructured data.</li>
              <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">➤</span> Interview prep, resume polish & portfolio projects.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Big Data CTA + Cards */}
      <section className="w-full px-6 py-20 text-black bg-gradient-to-b from-[#005BAC] to-[#003c6a]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
            Become a Certified Big Data Developer
          </h2>
          <p className="text-lg md:text-xl text-white mb-6">
            Learn Hadoop, Spark, Hive, Kafka, and real-time data processing from industry professionals.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              type="button"
              onClick={scrollToForm}
              className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all"
            >
              Get Started →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Card 1 - Course Highlights */}
          <div className="bg-white rounded-3xl shadow-md p-6 text-left hover:shadow-xl hover:scale-[1.02] transition duration-300">
            <div className="mb-4">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Course Highlights" className="w-10 h-10 mb-4" />
              <h3 className="text-lg font-extrabold text-black mb-2">Course Highlights</h3>
              <ul className="list-disc list-inside space-y-1 text-base text-gray-700">
                <li>✓ Hadoop, Spark, Hive, Kafka</li>
                <li>✓ Real-time data pipeline projects</li>
                <li>✓ Resume building & interview prep</li>
                <li>✓ Training by big data experts</li>
              </ul>
            </div>
          </div>

          {/* Card 2 - Tools */}
          <div className="bg-white rounded-3xl shadow-md p-6 text-left hover:shadow-xl hover:scale-[1.02] transition duration-300">
            <div className="mb-4">
              <img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" alt="Tools" className="w-10 h-10 mb-4" />
              <h3 className="text-lg font-extrabold text-black mb-2">Tools You’ll Master</h3>
              <div className="flex flex-wrap gap-2">
                {["Hadoop", "Apache Spark", "Hive", "Kafka", "HBase", "Scala", "Python"].map((tool) => (
                  <span key={tool} className="bg-gray-100 px-3 py-1 rounded-full text-base font-medium">{tool}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3 - Topics Covered */}
          <div className="bg-white rounded-3xl shadow-md p-6 text-left hover:shadow-xl hover:scale-[1.02] transition duration-300">
            <div className="mb-4">
              <img src="https://cdn-icons-png.flaticon.com/512/906/906343.png" alt="Topics Covered" className="w-10 h-10 mb-4" />
              <h3 className="text-lg font-extrabold text-black mb-2">Topics Covered</h3>
              <div className="flex flex-wrap gap-2">
                {["Big Data Architecture", "Data Ingestion", "Data Processing", "Real-Time Analytics", "Data Lakes", "ETL Pipelines"].map((topic) => (
                  <span key={topic} className="bg-gray-100 px-3 py-1 rounded-full text-base font-medium">{topic}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4 - Key Skills */}
          <div className="bg-white rounded-3xl shadow-md p-6 text-left hover:shadow-xl hover:scale-[1.02] transition duration-300">
            <div className="mb-4">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135710.png" alt="Key Skills" className="w-10 h-10 mb-4" />
              <h3 className="text-lg font-extrabold text-black mb-2">Key Skills You’ll Gain</h3>
              <ul className="list-disc list-inside space-y-1 text-base text-gray-700">
                <li>Big data processing & architecture</li>
                <li>Real-time data streaming</li>
                <li>Scalable pipeline development</li>
                <li>Data integration & automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SYLLABUS */}
                  <Syllabus
                                title={course.title}
                                accent={course.accent}
                                meta={course.meta}
                                preview={course.preview}
                                sections={course.sections} // ← REQUIRED
                                useExternalForm
                                cardMinH={400} // tweak to visually match your right cards
                                stickyOffset={110}
                              />

      {/* ENQUIRY FORM */}
      <section className="w-full px-6 py-20 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10">
          {/* LEFT: Additional Info Boxes */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-gray-900">
              <h4 className="text-xl font-bold mb-2">Comprehensive Curriculum</h4>
              <p className="text-black/90">
                Master Big Data with modules covering Hadoop, Spark, Kafka, Hive, NoSQL and real-time streaming.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-gray-900">
              <h4 className="text-xl font-bold mb-2">Career-Oriented Training</h4>
              <p className="text-black/90">
                Learn from working professionals. Includes mock interviews, resume prep, and job assistance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-gray-900">
              <h4 className="text-xl font-bold mb-2">Strong Placement Support</h4>
              <p className="text-black/90">
                We support your placement journey with partner network and hiring drives.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-gray-900">
              <h4 className="text-xl font-bold mb-2">Hands-On Projects</h4>
              <p className="text-black/90">
                Build end-to-end batch & streaming pipelines and domain-based capstones.
              </p>
            </div>
          </div>

          {/* RIGHT: Validated Form */}
          <div className="w-full max-w-lg">
            <div className="bg-white p-8 rounded-[30px] shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-center text-[#003c6a] mb-5">
                Get a Free Training Quote
              </h3>

              {/* Toggle Buttons */}
              <div className="flex justify-center gap-3 mb-6">
                <button
                  onClick={() => setMode("classroom")}
                  type="button"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm ${
                    mode === "classroom"
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

              {/* Form Fields */}
              <form
                id="enquiry-form"
                ref={formRef}
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
                    className={[baseInput, touched?.name && errors?.name ? bad : ok].join(" ")}
                  />
                  <div className="h-3 mt-0.5">
                    {touched?.name && errors?.name && <p className="text-red-600 text-xs">{errors.name}</p>}
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
                    className={[baseInput, touched?.email && errors?.email ? bad : ok].join(" ")}
                  />
                  <div className="h-3 mt-0.5">
                    {touched?.email && errors?.email && <p className="text-red-600 text-xs">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone + Batch */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      inputMode="numeric"
                      pattern="\d*"
                      placeholder="Mobile Num"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors?.phone}
                      className={[baseInput, touched?.phone && errors?.phone ? bad : ok].join(" ")}
                    />
                    <div className="h-3 mt-0.5">
                      {touched?.phone && errors?.phone && <p className="text-red-600 text-xs">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <select
                      name="batch"
                      value={form.batch}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors?.batch}
                      className={[baseInput, touched?.batch && errors?.batch ? bad : ok, "placeholder:text-transparent"].join(" ")}
                    >
                      <option value="" disabled>
                        How & Where
                      </option>
                      <option>Morning Batch</option>
                      <option>Evening Batch</option>
                      <option>Weekend</option>
                    </select>
                    <div className="h-3 mt-0.5">
                      {touched?.batch && errors?.batch && <p className="text-red-600 text-xs">{errors.batch}</p>}
                    </div>
                  </div>
                </div>

                {/* Course */}
                <div>
                  <input
                    type="text"
                    name="course"
                    placeholder="Type Course"
                    value={form.course}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors?.course}
                    className={[baseInput, touched?.course && errors?.course ? bad : ok].join(" ")}
                  />
                  <div className="h-3 mt-0.5">
                    {touched?.course && errors?.course && <p className="text-red-600 text-xs">{errors.course}</p>}
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
                    className={[baseInput, "resize-none", touched?.message && errors?.message ? bad : ok].join(" ")}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-0.5">
                    <span>First letter auto-caps</span>
                    <span>{form.message.length}/300</span>
                  </div>
                  <div className="h-3 mt-0.5">
                    {touched?.message && errors?.message && <p className="text-red-600 text-xs">{errors.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-1.5 py-2.5 rounded-xl bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white font-semibold text-sm hover:from-[#0891b2] hover:to-[#16bca7] transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Who Should Take a Data Analytics Course:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {audience.map((item, idx) => (
          <div
            key={idx}
            className="bg-white text-black shadow-md rounded-xl p-4 flex items-center font-medium text-lg border-l-4"
            style={{
              borderImage: "linear-gradient(to bottom, #4f46e5, #ec4899) 1",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
     <section className="py-16 px-6 bg-white">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
        Hands-On Training
      </h2>

      {/* Description */}
      <p className="text-center max-w-5xl mx-auto text-gray-600 mb-12 leading-relaxed">
        Our <span className="font-bold text-gray-900">Data Analytics Course</span> includes
        extensive hands-on training to ensure you gain practical experience with real-world data in
        Chennai. You’ll work on live projects, case studies, and simulations that mirror industry
        challenges. This hands-on approach helps you apply theoretical knowledge to practical
        scenarios, making you job-ready from day one.
      </p>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-xl overflow-hidden border-l-4 border-solid"
            style={{
              borderImage: "linear-gradient(to bottom, #4f46e5, #ec4899) 1",
            }}
          >
            <img
              src={src}
              alt={`Training ${idx + 1}`}
              className="w-full h-56 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
   {/* Tab Section */}
<section className="pt-5 pb-10 px-6 bg-white">
  <div className="max-w-2xl mx-auto mt-2"> {/* reduced width */}
    {/* Tabs */}
    <div className="flex flex-wrap border-b border-gray-200 justify-center">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-sm font-medium transition ${
            activeTab === tab
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Tab Content */}
    <div className="mt-6">
      {/* Accordion-based Tabs */}
      {(activeTab === "Practice Tasks" ||
        activeTab === "Interview Questions" ||
        activeTab === "Projects") && (
        <div className="border border-gray-300 rounded-md">
          {(activeTab === "Practice Tasks"
            ? practiceTasks
            : activeTab === "Interview Questions"
            ? interviewQuestions
            : projects
          ).map((item, idx) => (
            <div
              key={idx}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex justify-between items-center text-left font-medium text-gray-800 p-3"
              >
                {item}
                <FiChevronDown
                  className={`transform transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="mt-1 text-gray-600 p-3 border-t border-gray-200">
                  Content for {item} goes here...
                </div>
              )}
            </div>
          ))}

          {/* CTA for Projects only */}
          {activeTab === "Projects" && (
            <div className="p-4 text-center">
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
              >
                For More Projects
              </a>
            </div>
          )}
        </div>
      )}

      {/* Resume + Software Links */}
      {(activeTab === "Model Resume" || activeTab === "Software Links") && (
        <div className="max-w-md mx-auto text-center py-8"> {/* narrower */}
          <h2 className="text-lg font-semibold text-green-900 mb-6">
            {activeTab === "Model Resume"
              ? "Model Resume Download Links"
              : "Software Download Links"}
          </h2>
          <div className="space-y-3">
            {(activeTab === "Model Resume" ? resumes : softwares).map(
              (item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  className="block bg-green-950 text-white py-2 rounded-md hover:bg-green-800 transition"
                  download
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* CTA only for Resume */}
          {activeTab === "Model Resume" && (
            <div className="mt-6">
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
              >
                For More Resume Models
              </a>
            </div>
          )}
        </div>
      )}

      {/* Accommodation Tab */}
      {activeTab === "Accommodation" && (
        <div className="max-w-lg mx-auto py-6 px-4 text-gray-800 border border-gray-300 rounded-md">
          <p className="font-bold text-red-600 mb-2">Disclaimer Note:</p>
          <p className="mb-6">
            The details mentioned here are for supportive purposes only. 
            There are no tie-ups or links with the corresponding PGs.
          </p>

          <h3 className="font-semibold text-lg mb-3">Ladies PG Accommodation</h3>
          <ul className="space-y-2 mb-6">
            {ladiesPG.map((pg, idx) => (
              <li key={idx}>
                <span className="font-medium">{pg.name}</span> :{" "}
                <a
                  href={`tel:${pg.phone}`}
                  className="text-blue-600 hover:underline"
                >
                  {pg.phone}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="font-semibold text-lg mb-3">Mens PG Accommodation</h3>
          <ul className="space-y-2">
            {mensPG.map((pg, idx) => (
              <li key={idx}>
                <span className="font-medium">{pg.name}</span> :{" "}
                <a
                  href={`tel:${pg.phone}`}
                  className="text-blue-600 hover:underline"
                >
                  {pg.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
</section>

<div className="max-w-6xl mx-auto py-10 px-6">
      {/* Section Header */}
      <h2 className="text-2xl font-bold text-center mb-10">
        Job Roles for Data Analytics
      </h2>

      {/* Grid Container */}
      {/* - Responsive grid
          - 1 column on mobile
          - 2 columns on small screens
          - 3 columns on medium screens
          - 4 columns on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Loop through each role and display in a styled card */}
        {roles.map((role, idx) => (
          <div
            key={idx} // unique key required for React list rendering
            className="flex items-center justify-center h-20 bg-white shadow-md rounded-xl font-semibold text-gray-800 border-l-4"
            style={{
              // Alternate left border color:
              // Blue for even index, Pink for odd index
              borderLeftColor: idx % 2 === 0 ? "#4F46E5" : "#EC4899",
            }}
          >
            {role}
          </div>
        ))}
      </div>
    </div>



      {/* Toasts */}
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
