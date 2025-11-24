import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";
import Logo1 from "../../assets/LL.png";
import { Link } from "react-router-dom";

/* ✅ Updated groupedCourses: proper /all-courses/:slug slugs */
const groupedCourses = [
  {
    category: "Software Development",
    items: [
      { name: "Java", slug: "java-full-stack-developer-course" },
      { name: "Python", slug: "python-full-stack-developer-course" },
      { name: "Full Stack Development", slug: "full-stack-development-course" },
      { name: "PL SQL", slug: "pl-sql-developer-course" },
      { name: "SQL", slug: "sql-developer-course" },
    ],
  },
  {
    category: "Data Science & Analytics",
    items: [
      { name: "Data Science", slug: "data-science-training-program" },
      { name: "Business Analytics", slug: "business-analytics-course" },
      { name: "Data Science & AI", slug: "data-science-and-ai-program" },
      { name: "Big Data Developer", slug: "big-data-developer-program" },
    ],
  },
  {
    category: "Non Coding Courses",
    items: [
      { name: "Scrum Master", slug: "scrum-master-program" },
      { name: "Business Analyst", slug: "business-analyst-program" },
      { name: "Product Management", slug: "product-management-program" },
    ],
  },
  {
    category: "Testing",
    items: [
      { name: "Software Testing", slug: "software-testing-program" },
      { name: "Selenium Testing", slug: "selenium-testing-program" },
      { name: "ETL Testing", slug: "etl-testing-program" },
    ],
  },
  {
    category: "Cloud Computing",
    items: [
      { name: "AWS Training", slug: "aws-training-program" },
      { name: "DevOps", slug: "devops-training-program" },
    ],
  },
  {
    category: "IT Infrastructure",
    items: [
      { name: "Hardware Networking", slug: "hardware-and-networking-program" },
      { name: "Cyber Security", slug: "cyber-security-program" },
    ],
  },
  {
    category: "Business Solutions",
    items: [
      { name: "SAP", slug: "sap-training-program" },
      { name: "Salesforce", slug: "salesforce-training-program" },
      { name: "ServiceNow", slug: "servicenow-training-program" },
      { name: "RPA (Robotic Process Automation)", slug: "rpa-robotic-process-automation-course" },
    ],
  },
  {
    category: "IT Operations",
    items: [
      { name: "Production Support", slug: "production-support-program" },
    ],
  },
  {
    category: "Business & Marketing",
    items: [
      { name: "Digital Marketing", slug: "digital-marketing-program" },
    ],
  },
  {
    category: "Professional Development",
    items: [
      { name: "Soft Skill Training", slug: "soft-skills-training" },
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
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img
                src={Logo1}
                alt="Logo"
                className="h-28 w-auto object-contain md:h-30 lg:h-43 md:pt-1 md:pb-2 cursor-pointer"
              />
            </Link>
          </div>

          {/* Top Nav */}
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

          {/* Contact Numbers */}
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

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-full bg-white/60 backdrop-blur hover:bg-white/80 transition ml-2"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu className="w-7 h-7 text-primary" />
          </button>
        </div>

        {/* Desktop Subheader */}
        <div className="hidden md:flex w-full bg-[#005BAC] min-h-[54px] items-center px-6 z-40 fixed top-[64px] left-0">
          <nav className="w-full flex justify-center gap-10 text-white font-semibold text-md relative">
            {/* All Courses dropdown */}
            <div className="relative group">
              <button className="transition flex items-center gap-1 focus:outline-none">
                All Courses ▾
              </button>
              <div
                className="absolute left-0 top-full mt-0 bg-white text-black rounded-lg shadow-lg min-w-[260px] z-50 hidden group-hover:flex flex-row overflow-visible"
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="flex flex-col w-64 rounded-l-lg">
                  {groupedCourses.map((cat, idx) => (
                    <div
                      key={cat.category}
                      className={`px-5 py-3 text-[15px] font-medium cursor-pointer transition-all whitespace-nowrap flex items-center justify-between ${
                        activeCategory === idx
                          ? "bg-[#f0f4fa] text-[#005BAC]"
                          : "hover:bg-gray-100 text-gray-800"
                      }`}
                      onMouseEnter={() => setActiveCategory(idx)}
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

                {activeCategory !== null && (
                  <div className="flex flex-col min-w-[220px] max-h-[60vh] overflow-y-auto bg-white rounded-r-lg">
                    {groupedCourses[activeCategory].items.map((item) => (
                      <Link
                        key={item.name}
                        to={`/all-courses/${item.slug}`} // ✅ proper slug
                        className="px-7 py-3 text-gray-800 hover:bg-[#f3f8fe] hover:text-[#005BAC] rounded-r-lg transition-all text-[15px] font-normal whitespace-nowrap"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Other top menu links */}
            <Link to="/internship" className="transition">
              Internship
            </Link>
            <Link to="/placed-students" className="transition">
              Placed Students List
            </Link>
            <Link to="/reviews" className="transition">
              Reviews
            </Link>
            <Link to="/blog" className="transition">
              Blog
            </Link>

            {/* More dropdown */}
            <div className="relative group">
              <button className="transition">More ▾</button>
              <div className="absolute left-0 top-full mt-0 bg-white text-black rounded shadow-lg min-w-[180px] z-50 hidden group-hover:flex flex-col">
                <Link to="/interview-questions" className="px-4 py-2 hover:bg-gray-100">
                  Interview Questions
                </Link>
                <Link to="/resources" className="px-4 py-2 hover:bg-gray-100">
                  Tutorials
                </Link>
                <Link to="/sample-resume" className="px-4 py-2 hover:bg-gray-100">
                  Sample Resume
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Overlay for mobile */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 transition-all duration-300 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Mobile sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-[85vw] max-w-[360px] bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-6 border-b border-black/20">
            <img src={Logo1} alt="Logo" className="h-29 w-auto mb-1" />
            <button onClick={() => setMenuOpen(false)}>
              <FiX className="w-8 h-8 text-text-secondary" />
            </button>
          </div>

          <nav className="flex flex-col mt-4 px-6 gap-2 overflow-y-auto flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-medium font-base py-2 text-gray-700 hover:text-[#005BAC]"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile All Courses */}
            <div>
              <button
                className="w-full flex items-center justify-between py-2 text-gray-700 text-md hover:text-[#005BAC]"
                onClick={() => setMobileCoursesOpen((prev) => !prev)}
              >
                <span>All Courses</span>
                {mobileCoursesOpen ? <FiChevronDown /> : <FiChevronRight />}
              </button>
              {mobileCoursesOpen && (
                <div className="ml-2 pb-2">
                  {groupedCourses.map((cat, idx) => (
                    <div key={cat.category} className="mb-1">
                      <button
                        className="w-full flex items-center justify-between text-base text-gray-900 py-2 hover:text-[#005BAC]"
                        onClick={() =>
                          setMobileCategory(mobileCategory === idx ? null : idx)
                        }
                      >
                        <span>{cat.category}</span>
                        <FiChevronRight
                          className={`ml-2 transition-transform ${
                            mobileCategory === idx ? "rotate-90 text-[#005BAC]" : ""
                          }`}
                        />
                      </button>

                      {mobileCategory === idx && (
                        <div className="pl-4">
                          {cat.items.map((item) => (
                            <Link
                              key={item.name}
                              to={`/all-courses/${item.slug}`}
                              className="block py-1 text-gray-800 hover:text-[#005BAC]"
                              onClick={() => setMenuOpen(false)}
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
          </nav>
        </aside>
      </header>
    </>
  );
}
