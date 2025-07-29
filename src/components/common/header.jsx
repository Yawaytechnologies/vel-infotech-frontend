import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";
import Logo from "../../assets/infotech.svg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
];

const sidebarLinks = [
  { label: "Corporate Training", href: "/corporate-training" },
  { label: "Placed Students list", href: "/placed-students" },
  { label: "Reviews", href: "/reviews" },
  { label: "Job seekers", href: "/job-seekers" },
  { label: "Resources", href: "/resources" },
  { label: "Branches", href: "/branches" },
  {
    label: "More",
    submenu: [
      { label: "Interview Questions", href: "/interview-questions" },
      { label: "Internship", href: "/internship" },
    ],
  },
];

export default function Header() {
  const [current, setCurrent] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarMenus, setSidebarMenus] = useState({});

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
  <div className="flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center h-18 pt-2">
      <img
        src={Logo}
        alt="Logo"
        className="h-20 w-auto object-contain"
      />

            <span className="text-2xl font-bold text-primary font-poppins tracking-widest ml-2 select-none">
              Vel <span className="text-[#005BAC]">InfoTech</span>
            </span>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setCurrent(link.name)}
                onMouseEnter={() => setCurrent(link.name)}
                className={`
                  relative px-5 py-2 rounded-full font-medium text-base 
                  transition-all duration-200
                  ${current === link.name
                    ? "text-white bg-[#005BAC] shadow-lg"
                    : "text-gray-800/90 hover:text-text-secondary/90"}
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
          {/* Mobile Nav Icon */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-full bg-white/60 backdrop-blur hover:bg-white/80 transition"
            onClick={() => setMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <FiMenu className="w-7 h-7 text-primary" />
          </button>
        </div>

        {/* Desktop Subheader */}
        <div className="hidden md:flex w-full bg-[#005BAC] min-h-[44px] items-center px-6 z-40 fixed">
          <nav className="w-full flex justify-center gap-15 text-white font-semibold text-md relative">
            <a href="/courses" className="transition">All Courses</a>
            <a href="/corporate-training" className="transition">Corporate Training</a>
            <a href="/placed-students" className="transition">Placed Students list</a>
            <a href="/reviews" className="transition">Reviews</a>
            <a href="/job-seekers" className="transition">Job seekers</a>
            <a href="/resources" className="transition">Resources</a>
            <a href="/branches" className="transition">Branches</a>
            <div className="relative group">
              <button className="flex items-center gap-1 transition focus:outline-none">
                More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded shadow-xl py-2 z-20 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
                <a href="/interview-questions" className="block px-5 py-2 text-primary hover:bg-gray-100 transition">Interview Questions</a>
                <a href="/internship" className="block px-5 py-2 text-primary hover:bg-gray-100 transition">Internship</a>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Subheader: Only All Courses */}
        <div className="md:hidden w-full bg-[#005BAC] min-h-[44px] flex items-center px-6 z-40 fixed left-0 top-[60px]">
          <nav className="w-full flex justify-center text-white font-semibold text-md relative">
            <a href="/courses" className="transition">All Courses</a>
          </nav>
        </div>

        {/* Sidebar Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 transition-all duration-300 ${menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Sidebar Drawer */}
 <aside
  className={`fixed top-0 left-0 h-full w-[85vw] max-w-[360px] bg-[#0068b6] z-50 shadow-2xl flex flex-col
    transform transition-transform duration-300
    ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
  style={{ transitionProperty: "transform, box-shadow, opacity" }}
>
  {/* Logo and Close button */}
  <div className="flex items-center justify-between px-6 py-6 border-b border-white/30">
    <div className="flex flex-col items-start gap-0">
      <img src={Logo} alt="Logo" className="h-9 w-auto mb-1" />
      <span className="text-2xl font-extrabold text-white font-poppins leading-tight">
        Vel <span className="text-[#cbe8ff]">InfoTech</span>
      </span>
    </div>
    <button
      className="p-2 rounded-full hover:bg-white/10"
      onClick={() => setMenuOpen(false)}
      aria-label="Close menu"
    >
      <FiX className="w-8 h-8 text-white" />
    </button>
  </div>

  {/* Main nav links */}
  <nav className="flex flex-col mt-4 px-6 gap-2">
    {navLinks.filter(n => n.name !== "Corporate Training").map((link) => (
      <a
        key={link.name}
        href={link.href}
        onClick={() => setMenuOpen(false)}
        className="text-xl font-bold py-2 text-white text-left transition-all hover:text-[#cbe8ff]"
      >
        {link.name}
      </a>
    ))}
    {/* "More" collapsible */}
    <div>
      <button
        className="w-full flex items-center justify-between py-2 text-white text-xl font-bold hover:text-[#cbe8ff] transition"
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
        <ul className="bg-[#015495] rounded-lg mt-1 pb-1">
          <li>
            <a
              href="/corporate-training"
              className="block px-6 py-2 text-lg font-semibold text-white hover:bg-[#1a5c90] transition"
              onClick={() => setMenuOpen(false)}
            >
              Corporate Training
            </a>
          </li>
          <li>
            <a
              href="/placed-students"
              className="block px-6 py-2 text-lg font-semibold text-white hover:bg-[#1a5c90] transition"
              onClick={() => setMenuOpen(false)}
            >
              Placed Students list
            </a>
          </li>
          <li>
            <a
              href="/reviews"
              className="block px-6 py-2 text-lg font-semibold text-white hover:bg-[#1a5c90] transition"
              onClick={() => setMenuOpen(false)}
            >
              Reviews
            </a>
          </li>
          <li>
            <a
              href="/job-seekers"
              className="block px-6 py-2 text-lg font-semibold text-white hover:bg-[#1a5c90] transition"
              onClick={() => setMenuOpen(false)}
            >
              Job seekers
            </a>
          </li>
          <li>
            <a
              href="/resources"
              className="block px-6 py-2 text-lg font-semibold text-white hover:bg-[#1a5c90] transition"
              onClick={() => setMenuOpen(false)}
            >
              Resources
            </a>
          </li>
          <li>
            <a
              href="/branches"
              className="block px-6 py-2 text-lg font-semibold text-white hover:bg-[#1a5c90] transition"
              onClick={() => setMenuOpen(false)}
            >
              Branches
            </a>
          </li>
          <li>
            <a
              href="/interview-questions"
              className="block px-6 py-2 text-lg font-semibold text-white hover:bg-[#1a5c90] transition"
              onClick={() => setMenuOpen(false)}
            >
              Interview Questions
            </a>
          </li>
          <li>
            <a
              href="/internship"
              className="block px-6 py-2 text-lg font-semibold text-white hover:bg-[#1a5c90] transition"
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
