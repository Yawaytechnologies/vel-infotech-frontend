import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";
import Logo1 from "../../assets/infotech.png";
import Vel from "../../assets/Brandd.png";
import { Link } from "react-router-dom";

const groupedCourses = [
  {
    category: "Software Development",
    items: [
      { name: "Java", href: "/all-courses/Java" },
      { name: "Python", href: "/all-courses/Python" },
      {
        name: "Full Stack Development",
        href: "/all-courses/FullStackDevelopement",
      },
      { name: "PL SQL", href: "/all-courses/Plsql" }, // matches Route
      { name: "SQL", href: "/all-courses/Sql" },
      { name: "Blockchain", href: "/all-courses/BlockchainTraining" },
      { name: "UI-UX", href: "/all-courses/UIUXTraining" },
      { name: "Unix Shell Scripting", href: "/all-courses/unixshell" },

    ],
  },
    {
      category: "Java Developer",
      items: [
        { name: "AJAX", href: "/all-courses/AjaxTraining" },
        { name: "AngularJS", href: "/all-courses/AnularJs" },
        { name: "Angular", href: "/all-courses/Angular" },
        { name: "Core Java", href: "/all-courses/CoreJava" },
        { name: "Hibernate", href: "/all-courses/HibernateCourse" },
        { name: "J2EE", href: "/all-courses/J2EECourse" },
        { name: "Springboot", href: "/all-courses/SpringbootCourse" },
      ],
    },
  {
    category: "Data Science & Analytics",
    items: [
      { name: "Data Science", href: "/all-courses/DataScience" },
      { name: "Business Analytics", href: "/all-courses/BusinessAnalytics" },
      { name: "Data Science & AI", href: "/all-courses/DataScienceAi" },
      { name: "Big Data Developer", href: "/all-courses/BigDataDeveloper" },
      { name: "Data Analyst", href: "/all-courses/DataAnalyst" },
      { name: "Artificial Intelligence", href: "/all-courses/ai" },
      { name: "Machine Learning", href: "/all-courses/ml" },
    ],
  },
  {
    category: "Oracle training",
    items: [
      { name: "Oracle SQL training", href: "/all-courses/OracleSql" },
      { name: "Oracle PlSQL training", href: "/all-courses/OraclePlSql" },
      { name: "Oracle DBA training", href: "/all-courses/OracleDba" },
      { name: "Oracle Fusion training", href: "/all-courses/OracleFusion" },
      { name: "Performance training", href: "/all-courses/PerformanceTuning" },
    ],
  },
   {
    category: "Fullstack Development",
    items: [
      { name: "Java Fullstack", href: "/all-courses/javafullstack" },
      { name: "Python Fullstack", href: "/all-courses/pythonfullstack" },
      { name: ".NET Fullstack", href: "/all-courses/dotnetfullstack" },
      
    ],
  },
  {
    category: "Big Data",
    items: [
      { name: "Hadoop Spark Fullstack", href: "/all-courses/hadoopSpark" },
      { name: "Hadoop Testing", href: "/all-courses/hadoopTesting" },
      { name: "Big Data Administration", href: "/all-courses/hadoopAdministrator" },
      
    ],
  },
  {
    category: "Non Coding Courses",
    items: [
      { name: "Scrum Master", href: "/all-courses/ScrumMaster" },
      { name: "Business Analyst", href: "/all-courses/BusinessAnalyst" },
      { name: "Product Management", href: "/all-courses/ProductManagement" },
    ],
  },
  {
    category: "Testing",
    items: [
      { name: "Software Testing", href: "/all-courses/SoftwareTesting" },
      { name: "Selenium Testing", href: "/all-courses/SeleniumTesting" }, // ABSOLUTE
      { name: "ETL Testing", href: "/all-courses/EtlTesting" },
      { name: "IOT Testing", href: "/all-courses/IOTtesting" },
      { name: "Cypress Testing", href: "/all-courses/Cypresstesting" },
      { name: "TypeScript Testing", href: "/all-courses/typeScriptTesting" },
      { name: "Playwright Testing", href: "/all-courses/playwrightTesting" },
      { name: "API Testing", href: "/all-courses/ApiTesting" },
      { name: "Manual Testing", href: "/all-courses/ManualTesting" },
      
    ],
  },
  {
    category: "Cloud Computing",
    items: [
      { name: "AWS Training", href: "/all-courses/AwsTraining" },
      { name: "DevOps", href: "/all-courses/DevOps" },
      { name: "AWS Data Engineer", href: "/all-courses/awsDataEngineer" },
      { name: "AWS Solutions Architect", href: "/all-courses/AwsSolutionsArchitect" },
      { name: "Azure Training", href: "/all-courses/AzureTraining" },
      { name: "GCP Training", href: "/all-courses/GoogleCloudPlatform" },
      { name: "Snowflake Training", href: "/all-courses/Snowflake" },

    ],
  },
  {
    category: "IT Infrastructure",
    items: [
      { name: "Hardware Networking", href: "/all-courses/HardwareNetworking" },
      { name: "Cyber Security", href: "/all-courses/CyberSecurity" },
      { name: "VMware Training", href: "/all-courses/Vmware" },
    ],
  },
  {
    category: "Business Solutions",
    items: [
      { name: "SAP", href: "/all-courses/Sap" },
      { name: "Salesforce", href: "/all-courses/SalesForce" },
      { name: "ServiceNow", href: "/all-courses/ServiceNow" },
      { name: "RPA (Robotic Process Automation)", href: "/all-courses/RPA" },
    ],
  },
  {
    category: "IT Operations",
    items: [
      { name: "Production Support", href: "/all-courses/ProductionSupport" },
    ],
  },
  {
    category: "Business & Marketing",
    items: [
      { name: "Digital Marketing", href: "/all-courses/DigitalMarketing" },
    ],
  },
  {
    category: "Professional Development",
    items: [
      { name: "Soft Skill Training", href: "/all-courses/SoftSkillsTraining" }
    ],
  },
  {
    category: "Human Resource Training",
    items: [
      { name: "Junior HR Training", href: "/all-courses/juniorHr" },
      { name: "Senior HR Training", href: "/all-courses/seniorHr" },
      { name: "Talent Acquisition", href: "/all-courses/talentaqu" },
      
    ],
  },
  {
    category: "Human Resource Training",
    items: [
      { name: "Junior HR Training", href: "/all-courses/juniorHr" },
      { name: "Senior HR Training", href: "/all-courses/seniorHr" },
      { name: "Talent Acquisition", href: "/all-courses/talentaqu" },
      
    ],
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/all-courses" },
  { name: "Clients", href: "/client" },
  { name: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [current, setCurrent] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarMenus, setSidebarMenus] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handleEsc = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) setSidebarMenus({});
  }, [menuOpen]);

  const toggleSidebarMenu = (label) =>
    setSidebarMenus((prev) => ({ ...prev, [label]: !prev[label] }));

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background border-b border-white/20">
        <div className="flex w-full items-center justify-between px-3 lg:px-8 h-[78px]">
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img
                src={Vel}
                alt="Logo"
                className="h-28 w-auto object-contain md:h-30 lg:h-43 md:pt-3 md:pb-2"
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-2 lg:gap-10 lg:ml-30 h-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setCurrent(link.name)}
                onMouseEnter={() => setCurrent(link.name)}
                className={`relative font-medium text-base transition-all duration-200 ${
                  current === link.name
                    ? "text-[#005BAC]"
                    : "text-gray-800/90 hover:text-[#005BAC]"
                } group`}
                style={{
                  boxShadow:
                    current === link.name
                      ? "0 2px 18px 0 rgba(46,140,255,0.12)"
                      : "none",
                }}
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex flex-row items-center lg:ml-25 gap-15 ml-12">
            <div className="flex flex-col items-center">
              <span className="font-semibold text-base text-gray-800">
                Enquiry:
              </span>
              <a
                href="tel:+919600593838"
                className="text-[#005BAC] hover:underline text-base font-semibold"
              >
                +91 9600593838
              </a>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold text-base text-gray-800">
                Support:
              </span>
              <a
                href="tel:+919600383839"
                className="text-[#005BAC] hover:underline text-base font-semibold"
              >
                +91 9600383839
              </a>
            </div>
          </div>

          <button
            className="md:hidden flex items-center justify-center p-2 rounded-full bg-white/60 backdrop-blur hover:bg-white/80 transition ml-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <FiMenu className="w-7 h-7 text-primary" />
          </button>
        </div>

        {/* Desktop Subheader */}
        <div className="hidden md:flex w-full bg-[#005BAC] min-h-[54px] items-center px-6 z-40 fixed top-[64px] left-0">
          <nav className="w-full flex justify-center gap-10 text-white font-semibold text-md relative">
            {/* All Courses */}
            <div className="relative group">
              <button className="transition flex items-center gap-1 focus:outline-none">
                All Courses ▾
              </button>

              {/* Desktop "All Courses" dropdown */}
<div
  className="absolute left-0 top-full mt-0 bg-white text-black rounded-lg shadow-lg z-50 hidden group-hover:flex flex-row"
  onMouseLeave={() => setActiveCategory(null)}
>
  {/* Left panel - categories */}
  <div className="flex flex-col w-64 rounded-l-lg max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
    {groupedCourses.map((cat, idx) => (
      <div
        key={cat.category}
        className={`px-5 py-3 text-[15px] font-medium cursor-pointer transition-all whitespace-nowrap flex items-center justify-between ${
          activeCategory === idx ? "bg-[#f0f4fa] text-[#005BAC]" : "hover:bg-gray-100 text-gray-800"
        }`}
        onMouseEnter={() => setActiveCategory(idx)}
        style={{ borderRadius: "8px 0 0 8px" }}
      >
        <span>{cat.category}</span>
        <FiChevronRight
          className={`text-gray-400 transition-transform duration-200 ${
            activeCategory === idx ? "translate-x-1" : ""
          }`}
          size={18}
        />
      </div>
    ))}
  </div>

  {/* Right panel - items */}
  {activeCategory !== null && (
    <div
      className="flex flex-col min-w-[220px] bg-white rounded-r-lg max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      style={{ position: "relative", left: "-4px" }}
    >
      {groupedCourses[activeCategory].items.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="px-7 py-3 text-gray-800 hover:bg-[#f3f8fe] hover:text-[#005BAC] rounded-r-lg transition-all text-[15px] font-normal whitespace-nowrap"
        >
          {item.name}
        </Link>
      ))}
    </div>
  )}
</div>

</div>

            <a href="/internship" className="transition">
              Internship
            </a>
            <a href="/placed-students" className="transition">
              Placed Students List
            </a>
            <a href="/reviews" className="transition">
              Reviews
            </a>
            <a href="/blog" className="transition">
              Blog
            </a>

            {/* More Dropdown */}
            <div className="relative group">
              <button className="transition">More ▾</button>
              <div className="absolute left-0 top-full mt-0 bg-white text-black rounded shadow-lg min-w-[180px] z-50 hidden group-hover:flex flex-col">
                <a
                  href="/interview-questions"
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  Interview Questions
                </a>
                <a href="/resources" className="px-4 py-2 hover:bg-gray-100">
                  Tutorials
                </a>
                <a
                  href="/sample-resume"
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  Sample Resume
                </a>
              </div>
            </div>
          </nav>
        </div>
        {/* Sidebar Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 transition-all duration-300 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-[85vw] max-w-[360px] bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ transitionProperty: "transform, box-shadow, opacity" }}
        >
          <div className="flex items-center justify-between px-6 py-6 border-b border-black/20">
            <div className="flex flex-col items-start gap-0">
              <img src={Vel} alt="Logo" className="h-29 w-auto mb-1" />
            </div>
            <button
              className="p-2 rounded-full hover:bg-text-secondary"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FiX className="w-8 h-8 text-text-secondary" />
            </button>
          </div>

          <nav className="flex flex-col mt-4 px-6 gap-2 overflow-y-auto scrollbar-none flex-1">
            {/* Main nav links */}
            {navLinks
              .filter((n) => n.name !== "Corporate Training")
              .map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-medium font-base py-2 text-text-secondary text-left transition-all hover:text-[#cbe8ff]"
                >
                  {link.name}
                </a>
              ))}
            {/* All Courses Mobile Dropdown */}
            <div>
              <button
                className="w-full flex items-center justify-between py-2 text-text-secondary text-md font-base hover:text-[#005BAC] transition"
                onClick={() => setMobileCoursesOpen((prev) => !prev)}
              >
                <span>All Courses</span>
                {mobileCoursesOpen ? (
                  <FiChevronDown className="ml-2" />
                ) : (
                  <FiChevronRight className="ml-2" />
                )}
              </button>
              {mobileCoursesOpen && (
                <div className="ml-2 pb-2">
                  {groupedCourses.map((cat, idx) => (
                    <div key={cat.category} className="mb-1">
                      {/* Main category (expand/collapse) */}
                      <button
                        className="w-full flex items-center justify-between text-base text-gray-900 font-base py-2 hover:text-[#005BAC] transition"
                        onClick={() =>
                          setMobileCategory(mobileCategory === idx ? null : idx)
                        }
                      >
                        <span>{cat.category}</span>
                        <FiChevronRight
                          className={`ml-2 transform transition-transform duration-200 ${
                            mobileCategory === idx
                              ? "rotate-90 text-[#005BAC]"
                              : ""
                          }`}
                        />
                      </button>
                      {/* Show sub-courses if this category is open */}
                      {mobileCategory === idx && (
                        <div className="pl-4">
                          {cat.items.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block py-1 text-gray-800 hover:text-[#005BAC] text-[15px]"
                              onClick={() => setMenuOpen(false)}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* "More" collapsible */}
            <div>
              <button
                className="w-full flex items-center justify-between py-2 text-text-secondary text-md font-base hover:text-[#cbe8ff] transition"
                onClick={() => toggleSidebarMenu("More")}
              >
                <span>More</span>
                {sidebarMenus["More"] ? (
                  <FiChevronDown className="ml-2" />
                ) : (
                  <FiChevronRight className="ml-2" />
                )}
              </button>
              {/* Collapsible submenu */}
              {sidebarMenus["More"] && (
                <ul className="bg-[#fffff] rounded-lg mt-1 pb-1">
                 
                  <li>
                    <a
                      href="/placed-students"
                      className="block px-6 py-2 text-medium font-base text-text-secondary hover:bg-[#1a5c90] transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      Placed Students list
                    </a>
                  </li>
                  <li>
                    <a
                      href="/reviews"
                      className="block px-6 py-2 text-medium font-base text-text-secondary hover:bg-[#1a5c90] transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a
                      href="/interview-questions"
                      className="block px-6 py-2 text-medium font-base text-text-secondary hover:bg-[#1a5c90] transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      Interview Questions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/internship"
                      className="block px-6 py-2 text-medium font-base text-text-secondary hover:bg-[#1a5c90] transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      Internship
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </aside>
      </header>
    </>
  );
}

function MobileAllCourses({ groupedCourses, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [catIdx, setCatIdx] = useState(null);
  return (
    <div>
      <button
        className="w-full flex items-center justify-between py-2 text-text-secondary text-md font-base hover:text-[#005BAC] transition"
        onClick={() => setOpen((p) => !p)}
      >
        <span>All Courses</span>
        {open ? (
          <FiChevronDown className="ml-2" />
        ) : (
          <FiChevronRight className="ml-2" />
        )}
      </button>

      {open && (
        <div className="ml-2 pb-2">
          {groupedCourses.map((cat, idx) => (
            <div key={cat.category} className="mb-1">
              <button
                className="w-full flex items-center justify-between text-base text-gray-900 font-base py-2 hover:text-[#005BAC] transition"
                onClick={() => setCatIdx(catIdx === idx ? null : idx)}
              >
                <span>{cat.category}</span>
                <FiChevronRight
                  className={`ml-2 transform transition-transform duration-200 ${
                    catIdx === idx ? "rotate-90 text-[#005BAC]" : ""
                  }`}
                />
              </button>

              {catIdx === idx && (
                <div className="pl-4">
                  {cat.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href} // ABSOLUTE
                      className="block py-1 text-gray-800 hover:text-[#005BAC] text-[15px]"
                      onClick={onNavigate}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileMore({ sidebarMenus, toggleSidebarMenu, onNavigate }) {
  return (
    <div>
      <button
        className="w-full flex items-center justify-between py-2 text-text-secondary text-md font-base hover:text-[#005BAC] transition"
        onClick={() => toggleSidebarMenu("More")}
      >
        <span>More</span>
        {sidebarMenus["More"] ? (
          <FiChevronDown className="ml-2" />
        ) : (
          <FiChevronRight className="ml-2" />
        )}
      </button>

      {sidebarMenus["More"] && (
        <ul className="rounded-lg mt-1 pb-1">
          <li>
            <Link
              to="/all-courses"
              className="block px-6 py-2 text-medium font-base text-text-secondary hover:text-[#005BAC] transition"
              onClick={onNavigate}
            >
              All-Courses
            </Link>
          </li>
          <li>
            <Link
              to="/placed-students"
              className="block px-6 py-2 text-medium font-base text-text-secondary hover:text-[#005BAC] transition"
              onClick={onNavigate}
            >
              Placed Students list
            </Link>
          </li>
          <li>
            <Link
              to="/reviews"
              className="block px-6 py-2 text-medium font-base text-text-secondary hover:text-[#005BAC] transition"
              onClick={onNavigate}
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="/interview-questions"
              className="block px-6 py-2 text-medium font-base text-text-secondary hover:text-[#005BAC] transition"
              onClick={onNavigate}
            >
              Interview Questions
            </Link>
          </li>
          <li>
            <Link
              to="/internship"
              className="block px-6 py-2 text-medium font-base text-text-secondary hover:text-[#005BAC] transition"
              onClick={onNavigate}
            >
              Internship
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
