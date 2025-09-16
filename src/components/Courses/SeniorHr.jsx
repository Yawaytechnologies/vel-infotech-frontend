  import React, { useState, useRef } from "react";
  import { FaLaptop, FaChalkboardTeacher } from "react-icons/fa";
  // eslint-disable-next-line no-unused-vars
  import { motion } from "framer-motion";
  import Syllabus from "../coursecomponent/SyllabusLocked";
  import { SYLLABI } from "../coursecomponent/Syllabi";

  const HEADER_OFFSET = 110; // adjust to your sticky header height

  const scrollToWithOffset = (ref) => {
    const el = ref?.current;
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  export default function SeniorHRPage() {
    const [mode, setMode] = useState("classroom");
    const course = SYLLABI.seniorhr;
    const [unlocked, setUnlocked] = useState(false);

    const syllabusRef = useRef(null);
    const formRef = useRef(null);
    const COURSE_OPTIONS = [
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
      "Data Analyst",
      "Vmware Training",
      "Production Support",
      "Digital Marketing",
      "Soft Skill Training",
      "Scrum Master",
      "Business Analyst",
      "Product Management",
      "Snowflake",
      "Oracle SQL"
    ];

    // preselect current page's course if possible (matches words in course.title)
    const preselectedCourse = React.useMemo(() => {
      if (!course?.title) return "";
      const lower = course.title.toLowerCase();
      const match = COURSE_OPTIONS.find((opt) =>
        lower.includes(opt.toLowerCase())
      );
      return match || "";
    }, [course?.title]);

    const handleRequestUnlock = () => {
      scrollToWithOffset(formRef); // go to form
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      // ...payload...
      try {
        // await fetch(...)
      } finally {
        setUnlocked(true);
        e.currentTarget.reset();

        // wait for DOM to paint unlocked state, then scroll back up
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            scrollToWithOffset(syllabusRef);
          });
        });
      }
    };

    return (
      <section className="w-full pt-32 bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white px-4 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT: Content */}
          <div className="flex-1">
         <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
 Master<span className="text-yellow-400"> Senior HR Skills</span> 
  <br />with Hands-On Practical Training
</h2>

<ul className="space-y-3 mt-6 text-lg">
  <li>
    ✅ Join the <strong>Top HR Training Institute</strong> to enhance strategic HR expertise, 
    leadership in HR functions, and advanced workforce management skills.
  </li>
  <li>
    ✅ Learn <strong>Strategic HR Management, Talent Acquisition & Retention, Leadership & 
    Team Development, Performance & Competency Management, HR Analytics, Compensation & Benefits 
    Strategies, Conflict Resolution, Labor Law Compliance, Change Management, and Organizational 
    Development</strong>.
  </li>
  <li>
    ✅ Work on <strong>real-world HR projects</strong> including talent acquisition plans, 
    performance appraisal frameworks, HR policy optimization, and employee engagement strategies.
  </li>
  <li>
    ✅ Choose <strong>flexible learning modes</strong> – Weekday / Weekend / Fast-track.
  </li>
  <li>
    ✅ Earn an industry-recognized <strong>Senior HR Training Certification</strong>.
  </li>
  <li>
    ✅ Career support: Resume building, mock interviews & executive-level job placement assistance.
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
  Become an expert in Senior HR strategies and advanced workforce management in 2–3 Months
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
              <span classNameDa="absolute inset-0 z-0 before:absolute before:w-full before:aspect-square before:-left-full before:-top-1/2 before:bg-emerald-500 before:rounded-full before:transition-all before:duration-700 before:ease-in-out group-hover:before:left-0 group-hover:before:scale-150 before:-z-10"></span>

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
  Overview of Senior HR Training Course
</h2>
<div className="w-28 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>

{/* Description */}
<p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed text-center md:text-left">
  Our Senior HR Training equips you with advanced skills and strategic knowledge required to manage
  HR operations, develop workforce strategies, and lead recruitment, talent acquisition, and employee
  development initiatives effectively. This course covers strategic HR management, talent planning,
  performance and succession management, HR policies, compliance, and advanced communication skills.
  You’ll also work on real-world HR projects and receive career guidance to excel as a senior HR professional.
</p>

{/* What You’ll Learn */}
<h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">
  What You’ll Learn From Senior HR Training
</h3>
<ul className="space-y-4 text-gray-800 text-base md:text-lg">
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Understand strategic HR management, workforce planning, and organizational development.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Learn advanced recruitment strategies, talent acquisition, and onboarding at a senior level.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Gain expertise in employee engagement, performance management, and succession planning.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Work on practical HR projects like policy development, compliance audits, and HR analytics.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Learn best practices in leadership communication, HR documentation, and organizational compliance.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Receive career support including executive resume building, mock interviews, and senior-level placement assistance.
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
  Master Senior HR skills with structured modules covering 
  strategic HR management, advanced recruitment and talent acquisition, workforce planning, 
  leadership and employee development programs, performance management and succession planning, 
  HR policies and regulatory compliance, compensation and benefits strategy, advanced HR documentation, 
  executive communication and leadership skills, conflict management and resolution, HR analytics and reporting, 
  organizational development projects, and best practices for leading efficient HR operations in any organization.
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

                {/* Toggle Buttons */}
                <div className="flex justify-center gap-3 mb-6">
                  <button
                    onClick={() => setMode("classroom")}
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
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm ${
                      mode === "online"
                        ? "bg-[#003c6a] text-white"
                        : "bg-white text-[#003c6a] border border-[#003c6a]"
                    }`}
                  >
                    <FaLaptop className="text-base" /> Online
                  </button>
                </div>

                {/* Form */}
                <form
                  id="enquiry-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="rounded-xl px-5 py-3 text-black bg-[#edf2f7] border border-[#b6c3d1] focus:border-[#003c6a] placeholder:text-gray-700 text-sm focus:ring-2 focus:ring-[#003c6a] outline-none"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="rounded-xl px-5 text-black py-3 bg-[#edf2f7] border border-[#b6c3d1] focus:border-[#003c6a] placeholder:text-gray-700 text-sm focus:ring-2 focus:ring-[#003c6a] outline-none"
                    required
                  />
                  <div className="flex flex-col  sm:flex-row gap-3">
                    <input
                      name="phone"
                      type="number"
                      placeholder="Mobile Num"
                      className="w-full sm:w-1/2 rounded-xl px-5 py-3 text-black bg-[#edf2f7] border border-[#b6c3d1] focus:border-[#003c6a] placeholder:text-gray-700 text-sm focus:ring-2 focus:ring-[#003c6a] outline-none"
                      required
                    />
                    <select
                      name="batch"
                      defaultValue=""
                      className="w-full sm:w-1/2 rounded-xl px-5 py-3 bg-[#edf2f7] border border-[#b6c3d1] focus:border-[#003c6a] text-sm text-gray-700 focus:ring-2 focus:ring-[#003c6a] outline-none"
                      required
                    >
                      <option value="" disabled>
                        How & Where
                      </option>
                      <option>Morning Batch</option>
                      <option>Evening Batch</option>
                      <option>Weekend</option>
                    </select>
                  </div>
                  <SelectCourse
                    name="course"
                    options={COURSE_OPTIONS}
                    defaultValue={preselectedCourse}
                  />

                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Your Message"
                    className="rounded-xl px-5 text-black py-3 bg-[#edf2f7] border border-[#b6c3d1] focus:border-[#003c6a] placeholder:text-gray-700 text-sm focus:ring-2 focus:ring-[#003c6a] outline-none resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white font-semibold text-base hover:from-[#0891b2] hover:to-[#16bca7] transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }


  function SelectCourse({ name = "course", options, defaultValue = "" }) {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(defaultValue || "");
    const [hoverIdx, setHoverIdx] = React.useState(
      Math.max(
        0,
        options.findIndex((o) => o === (defaultValue || ""))
      )
    );
    const wrapRef = React.useRef(null);
    const listRef = React.useRef(null);

    // Close on outside click
    React.useEffect(() => {
      const onDocClick = (e) => {
        if (!wrapRef.current?.contains(e.target)) setOpen(false);
      };
      document.addEventListener("mousedown", onDocClick);
      return () => document.removeEventListener("mousedown", onDocClick);
    }, []);

    // Ensure hovered item stays in view
    React.useEffect(() => {
      if (!open) return;
      const el = listRef.current?.querySelector(`[data-idx="${hoverIdx}"]`);
      el?.scrollIntoView({ block: "nearest" });
    }, [hoverIdx, open]);

    const choose = (val, idx) => {
      setSelected(val);
      setHoverIdx(idx);
      setOpen(false);
    };

    const onKeyDown = (e) => {
      if (
        !open &&
        (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")
      ) {
        e.preventDefault();
        setOpen(true);
        return;
      }
      if (!open) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHoverIdx((i) => Math.min(options.length - 1, i + 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setHoverIdx((i) => Math.max(0, i - 1));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        choose(options[hoverIdx], hoverIdx);
      }
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
    };

    return (
      <div className="relative" ref={wrapRef}>
        {/* Hidden input so FormData picks up the value */}
        <input type="hidden" name={name} value={selected} />

        {/* Button */}
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          onKeyDown={onKeyDown}
          className="w-full rounded-xl px-5 py-3 bg-[#edf2f7] border border-[#b6c3d1] text-left text-sm text-gray-700 focus:ring-2 focus:ring-[#003c6a] focus:border-[#003c6a] outline-none"
        >
          {selected || "Select Course"}
        </button>

        {/* Options panel (max 5 items visible, scroll for the rest) */}
        {open && (
          <div
            className="absolute z-20 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden"
            role="listbox"
          >
            <ul
              ref={listRef}
              className="max-h-60 overflow-y-auto py-1" /* ~5 items tall */
            >
              {options.map((opt, idx) => {
                const isSel = opt === selected;
                const isHover = idx === hoverIdx;
                return (
                  <li
                    key={opt}
                    data-idx={idx}
                    role="option"
                    aria-selected={isSel}
                    onMouseEnter={() => setHoverIdx(idx)}
                    onMouseDown={(e) => e.preventDefault()} // prevents blur before click
                    onClick={() => choose(opt, idx)}
                    className={`px-4 py-2 text-sm cursor-pointer ${
                      isHover ? "bg-slate-100" : ""
                    } ${
                      isSel ? "font-semibold text-slate-900" : "text-slate-700"
                    }`}
                  >
                    {opt}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
