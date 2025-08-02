import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";
import Logo from "../../assets/infotech.svg";
import Logo1 from "../../assets/infotech.png";


const groupedCourses = [
  {
    category: "Software Development",
    items: [
      { name: "Java", href: "/all-courses/Java" },
      { name: "Python", href: "/all-courses/Python" },
      { name: "Full Stack Development", href: "/all-courses/FullStackDevelopement" },
      { name: "PL SQL", href: "/all-courses/plsql" },
      { name: "SQL", href: "/all-courses/Sql" },
    ],
  },
  {
    category: "Data Science & Analytics",
    items: [
      { name: "Data Science", href: "/all-courses/DataScience" },
      { name: "Business Analytics", href: "/all-courses/BusinessAnalytics" },
      { name: "Data Science & AI", href: "/all-courses/DataScienceAi" },
      { name: "Big Data Developer", href: "/all-courses/BigDataDeveloper" },
    ],
  },
  {
    category: "Testing",
    items: [
      { name: "Software Testing", href: "/all-courses/SoftwareTesting" },
      { name: "Selenium Testing", href: "all-courses/SeleniumTesting" },
      { name: "ETL Testing", href: "/all-courses/EtlTesting" },
    ],
  },
  {
    category: "Cloud Computing",
    items: [
      { name: "AWS Training", href: "/all-courses/AwsTraining" },
      { name: "DevOps", href: "/all-courses/DevOps" },
    ],
  },
  {
    category: "IT Infrastructure",
    items: [
      { name: "Hardware Networking", href: "/all-courses/HardwareNetworking" },
      { name: "Cyber Security", href: "/all-courses/CyberSecurity" },
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
    items: [{ name: "Production Support", href: "/production-support" }],
  },
  {
    category: "Business & Marketing",
    items: [{ name: "Digital Marketing", href: "/digital-marketing" }],
  },
  {
    category: "Professional Development",
    items: [{ name: "Soft Skill Training", href: "/soft-skill-training" }],
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },

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
  // ESC key closes drawer
  useEffect(() => {
    if (!menuOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) setSidebarMenus({});
  }, [menuOpen]);

  const toggleSidebarMenu = (label) => {
    setSidebarMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 w-full z-50 bg-background border-b border-white/20">
        <div className="flex w-full items-center justify-between px-3 lg:px-8 h-[64px]">
          {/* Logo & name */}
          <div className="flex items-center flex-shrink-0">
            <img
              src={Logo}
              alt="Logo"
              className="h-18 sm:h-14 md:h-18 w-auto object-contain"
            />
            <a
              href="/"
              className="text-xl sm:text-2xl font-bold text-primary font-poppins tracking-widest ml-2 select-none"
            >
              Vel Infotech
            </a>
          </div>

          {/* Nav links: Take up remaining space, push to right */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-15 lg:ml-30 h-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setCurrent(link.name)}
                onMouseEnter={() => setCurrent(link.name)}
                className={`
  relative font-medium text-base transition-all duration-200
  ${
    current === link.name
      ? "text-[#005BAC]"
      : "text-gray-800/90 hover:text-[#005BAC]"
  }
  group
`}
                style={{
                  boxShadow:
                    current === link.name
                      ? "0 2px 18px 0 rgba(46,140,255,0.12)"
                      : "none",
                }}
              >
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Phone Numbers (Desktop only, right-aligned) */}
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

          {/* Mobile Nav Icon */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-full bg-white/60 backdrop-blur hover:bg-white/80 transition ml-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <FiMenu className="w-7 h-7 text-primary" />
          </button>
        </div>

        {/* Desktop Subheader */}
{/* Desktop Subheader */}
<div className="hidden md:flex w-full bg-[#005BAC] min-h-[44px] items-center px-6 z-40 fixed top-[64px] left-0">
  <nav className="w-full flex justify-center gap-10 text-white font-semibold text-md relative">
    {/* All Courses Dropdown */}
<div className="relative group">
      <button className="transition flex items-center gap-1 focus:outline-none">
        All Courses ▾
      </button>
      {/* Main Category Menu */}
      <div
  className="absolute left-0 top-full mt-0 bg-white text-black rounded-lg shadow-lg min-w-[260px] z-50 hidden group-hover:flex flex-row  overflow-visible"
  onMouseLeave={() => setActiveCategory(null)}
  onMouseEnter={() => {}} // (optional, can omit)
>
  <div className="flex flex-col w-64  scrollbar-none pr-0 rounded-l-lg">
   {groupedCourses.map((cat, idx) => (
  <div
    key={cat.category}
    className={`px-5 py-3 text-[15px] font-medium cursor-pointer transition-all whitespace-nowrap flex items-center justify-between
      ${activeCategory === idx
        ? "bg-[#f0f4fa] text-[#005BAC]"
        : "hover:bg-gray-100 text-gray-800"}
      `}
    onMouseEnter={() => setActiveCategory(idx)}
    style={{
      borderRadius: activeCategory === idx ? '8px 0 0 8px' : '8px 0 0 8px'
    }}
  >
    {/* Text on left */}
    <span>{cat.category}</span>
    {/* Arrow on right */}
    <FiChevronRight
      className={`text-gray-400 transition-transform duration-200
        ${activeCategory === idx ? "translate-x-1" : ""}
      `}
      size={18}
    />
  </div>
))}

  </div>
  {/* Subcourses flyout menu */}
  {activeCategory !== null && (
    <div
      className="flex flex-col min-w-[220px] max-h-[60vh] overflow-y-auto scrollbar-none bg-white rounded-r-lg shadow-none"
      style={{
        position: 'relative',
        left: '-4px',
        boxShadow: 'none'
      }}
    >
      {groupedCourses[activeCategory].items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="px-7 py-3 text-gray-800 hover:bg-[#f3f8fe] hover:text-[#005BAC] rounded-r-lg transition-all text-[15px] font-normal whitespace-nowrap"
        >
          {item.name}
        </a>
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
        <a href="/interview-questions" className="px-4 py-2 hover:bg-gray-100">Interview Questions</a>
        <a href="/resources" className="px-4 py-2 hover:bg-gray-100">Tutorials</a>
        <a href="/branches" className="px-4 py-2 hover:bg-gray-100">Sample Resume</a>
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

         <aside
          className={`fixed top-0 left-0 h-full w-[85vw] max-w-[360px] bg-white z-50 shadow-2xl flex flex-col
            transform transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
          style={{ transitionProperty: "transform, box-shadow, opacity" }}
        >
          {/* Logo and Close button */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-black/20">
            <div className="flex flex-col items-start gap-0">
              <img src={Logo1} alt="Logo" className="h-19 w-auto mb-1" />
            </div>
            <button
              className="p-2 rounded-full hover:bg-text-secondary"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FiX className="w-8 h-8 text-text-secondary" />
            </button>
          </div>

          {/* Main nav links (with All Courses accordion at top) */}
          <nav className="flex flex-col mt-4 px-6 gap-2 overflow-y-auto scrollbar-none flex-1">
            {/* All Courses Mobile Dropdown */}
            <div>
              <button
                className="w-full flex items-center justify-between py-2 text-text-secondary text-lg font-bold hover:text-[#005BAC] transition"
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
                        className="w-full flex items-center justify-between text-base text-gray-900 font-medium py-2 hover:text-[#005BAC] transition"
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
            {/* "More" collapsible */}
            <div>
              <button
                className="w-full flex items-center justify-between py-2 text-text-secondary text-lg font-semibold hover:text-[#cbe8ff] transition"
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
                      href="/all-courses"
                      className="block px-6 py-2 text-medium font-base text-text-secondary hover:bg-[#1a5c90] transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      All-Courses
                    </a>
                  </li>
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
                      className="block px-6 py-2 text-medium font-medium text-text-secondary hover:bg-[#1a5c90] transition"
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
