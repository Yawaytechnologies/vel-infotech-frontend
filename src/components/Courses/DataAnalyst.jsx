  import React, { useState, useRef } from "react";
  import { FaLaptop, FaChalkboardTeacher } from "react-icons/fa";
  // eslint-disable-next-line no-unused-vars
  import { motion } from "framer-motion";
  import JavaSyllabus from "../coursecomponent/Javasyllabus";
  import Syllabus from "../coursecomponent/SyllabusLocked";
  import { SYLLABI } from "../coursecomponent/Syllabi";
  import ha1 from "../../assets/handson1.jpg"
  import ha2 from "../../assets/handson2.jpg"
  import ha3 from "../../assets/handson3.webp"
  import ha4 from "../../assets/handson4.webp"

  import { FiChevronDown } from "react-icons/fi";

  const HEADER_OFFSET = 110; // adjust to your sticky header height

  const scrollToWithOffset = (ref) => {
    const el = ref?.current;
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  export default function DataAnalystPage() {
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
    const course = SYLLABI.dataAnalyst;
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
      
      "Production Support",
      "Digital Marketing",
      "Soft Skill Training",
      "Scrum Master",
      "Business Analyst",
      "Product Management",
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
              Join Our 100% Job Guaranteed <br />
              <span className="text-yellow-400">
                Data Analyst Course
              </span>
              
            </h2>

            <ul className="space-y-3 mt-6 text-lg">
              
              <li>
  ✅ Join the <strong>Best Data Analyst Training Institute</strong> to master
  data analytics from basics to advanced.
</li>
<li>
  ✅ Learn <strong>Excel, SQL, Python, Power BI, Tableau</strong> and more.
</li>
<li>
  ✅ Work on <strong>real-world datasets & case studies</strong> with hands-on
  projects.
</li>
<li>
  ✅ Choose <strong>flexible learning modes</strong> – Weekday / Weekend /
  Fast-track.
</li>
<li>
  ✅ Earn an industry-recognized
  <strong>Data Analyst Certification</strong>.
</li>
<li>
  ✅ Career support: Resume building, mock interviews & job
  placement assistance.
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
              Become a Data Analyst in 3 Months
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
              <span className="absolute inset-0 z-0 before:absolute before:w-full before:aspect-square before:-left-full before:-top-1/2 before:bg-emerald-500 before:rounded-full before:transition-all before:duration-700 before:ease-in-out group-hover:before:left-0 group-hover:before:scale-150 before:-z-10"></span>

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
                Overview of Data Analyst Course
              </h2>
              <div className="w-28 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed text-center md:text-left">
  Our Data Analyst Training equips you with the skills and practical
  experience required to become an industry-ready professional. This
  course covers essential tools and technologies like Excel, SQL, Python,
  Power BI, Tableau, and more. You’ll also work on real-world datasets,
  master data visualization and reporting, and receive interview
  preparation support to kick-start your career in data analytics.
</p>


              {/* What You’ll Learn */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">
  What You’ll Learn From Data Analyst Training
</h3>
<ul className="space-y-4 text-gray-800 text-base md:text-lg">
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Build a strong foundation in Excel for data cleaning, analysis, and
    reporting.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Learn SQL to query, manipulate, and manage structured data in databases.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Master Python for data analysis, statistical techniques, and automation.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Create insightful dashboards and visualizations using Power BI and Tableau.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Work on real-world datasets and capstone projects to solve business problems
    with data.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Get career support with resume building, mock interviews, and placement
    assistance.
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
  Master Data Analytics with structured modules covering Excel, SQL, Python, Power BI, Tableau, and more.
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
