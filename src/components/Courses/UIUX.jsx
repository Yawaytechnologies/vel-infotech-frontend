  import React, { useState, useRef } from "react";
  import { FaLaptop, FaChalkboardTeacher } from "react-icons/fa";
  import { ArrowRight } from "lucide-react";
  import { Users, Monitor, User, UserCheck } from "lucide-react"; // Icons
  // eslint-disable-next-line no-unused-vars
  import { motion } from "framer-motion";
  import Syllabus from "../coursecomponent/SyllabusLocked";
  import { SYLLABI } from "../coursecomponent/Syllabi";
  import ui from "../../assets/ui.jpg";
  import UX from "../../assets/UX.jpg";
  import diff from "../../assets/difference-web-ui-ux-design.jpg";
  import best from "../../assets/Best Tools for ui ux design.jpg";

  const HEADER_OFFSET = 110; // adjust to your sticky header height

  const scrollToWithOffset = (ref) => {
    const el = ref?.current;
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  const modes = [
  {
    title: "Online Training",
    description: "Instructor Led live online training",
    icon: <Users className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Classroom Training",
    description: "Instructor Led classroom training",
    icon: <Monitor className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "One to One Training",
    description: "Customized and Exclusive training based on your requirement",
    icon: <User className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Team/Corporate Training",
    description: "Customized Corporate Training",
    icon: <UserCheck className="w-10 h-10 text-blue-600" />,
  },
];

  const topics = [
  {
    title: "User Interface Design - UI",
    description:
      "User Interface Design shapes the users digital experience. It is a bridge between humans and computers (i.e) from websites to mobile apps.",
    image:
      ui, // Replace with your image
    link: "#",
  },
  {
    title: "User Experience Design - UX",
    description:
      "User Experience Design helps user to know about the look and feel of the product, website or app.",
    image:
      UX, // Replace with your image
    link: "#",
  },
  {
    title: "Tools For UI UX Design",
    description:
      "For Designing purpose various tools can be used, such that we can create, modify and explore user interface and user experience by specialized software application.",
    image:
      best, // Replace with your image
    link: "#",
  },
  {
    title: "Difference between web Design an UI UX Design",
    description:
      "Web design is only related to web pages and website application. UI UX Design are related to any kind of design of software and applications.",
    image:
      diff, // Replace with your image
    link: "#",
  },
];

  export default function UIUXPage() {
    const [mode, setMode] = useState("classroom");
    const course = SYLLABI.uxui;
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
      
      "Production Support",
      "Digital Marketing",
      "Soft Skill Training",
      "Scrum Master",
      "Business Analyst",
      "Product Management",
      "UX-UI",
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
                UX and UI Course
              </span>
              
            </h2>

            <ul className="space-y-3 mt-6 text-lg">
              <li>
  ✅ Join the <strong>Best UI/UX Design Training Institute</strong> to
  master <strong>User Interface & User Experience Design</strong>.
</li>
<li>
  ✅ Learn industry tools –{" "}
  <strong>Figma, Adobe XD, Sketch, Photoshop, Illustrator</strong>.
</li>
<li>
  ✅ Work on <strong>real-world design projects</strong> with hands-on
  prototyping & wireframing.
</li>
<li>
  ✅ Choose <strong>flexible learning modes</strong> – Weekday /
  Weekend / Fast-track.
</li>
<li>
  ✅ Earn an industry-recognized{" "}
  <strong>UI/UX Designer Certification</strong>.
</li>
<li>
  ✅ Career support: Portfolio building, mock interviews & job
  referrals.
</li>
<li>
  ✅ Master <strong>Design Thinking & User Research</strong> for better
  product design.
</li>
<li>
  ✅ Gain expertise in <strong>Usability Testing & Interaction Design</strong>.
</li>
<li>
  ✅ Stay updated with the latest <strong>UI/UX trends & best practices</strong>.
</li>
<li>
  ✅ Get guidance from <strong>industry-expert mentors</strong> with live projects.
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
              Become a UI-UX Developer in 3 Months
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
                Overview of UI and UX Course
              </h2>
              <div className="w-28 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed text-center md:text-left">
  Our UI/UX Developer Training equips you with the design skills and
  practical knowledge required to create user-friendly, visually appealing,
  and responsive digital experiences. This course covers design principles,
  wireframing, prototyping, usability testing, and tools like Figma,
  Adobe XD, Photoshop, and Illustrator. You’ll also learn frontend basics
  with HTML, CSS, and JavaScript to bring designs to life, work on
  real-world projects, and receive interview preparation support to build
  a successful career in UI/UX.
</p>


             {/* What You’ll Learn */}
<h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">
  What You’ll Learn From UI/UX Developer Training
</h3>
<ul className="space-y-4 text-gray-800 text-base md:text-lg">
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Understand the fundamentals of UI/UX design, including design thinking,
    user research, and usability principles.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Learn to create wireframes, prototypes, and interactive mockups using
    tools like Figma and Adobe XD.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Master visual design skills such as typography, color theory, iconography,
    and layout for web and mobile applications.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Gain exposure to frontend basics with HTML, CSS, and JavaScript to
    transform designs into functional interfaces.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Work on real-world projects that focus on improving user experience and
    solving design challenges.
  </li>
  <li className="flex items-start gap-3">
    <span className="text-purple-600 mt-1">➤</span>
    Receive career support through portfolio building, resume preparation,
    mock interviews, and placement guidance.
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
  Master UI/UX design with structured modules covering design thinking,
  wireframing, prototyping, visual design, usability testing, and frontend
  essentials like HTML, CSS, and JavaScript.
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
        <section className="py-12 px-6 bg-[#f6f9ff] mt-16 rounded-2xl shadow-md">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {topics.map((topic, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={topic.image}
              alt={topic.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {topic.title}
              </h3>
              <p className="text-gray-600 text-sm flex-grow">
                {topic.description}
              </p>
              <a
                href={topic.link}
                className="mt-4 inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="py-12 px-6 bg-[#f6f9ff] mt-16  rounded-2xl shadow-md">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
  Modes Of Delivery
</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modes.map((mode, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white rounded-xl border border-gray-200 shadow-2xl hover:shadow-md transition-all duration-300 p-6"
            >
              {mode.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {mode.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{mode.description}</p>
            </div>
          ))}
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
