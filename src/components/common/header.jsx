import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";
import Logo from "../../assets/infotech.svg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  
  { name: "Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
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
<div className="flex items-center justify-start w-full px-3 lg:px-8 h-[64px]">
  {/* Logo & name */}
  <div className="flex items-center flex-shrink-0">
    <img
      src={Logo}
      alt="Logo"
      className="h-12 w-auto object-contain"
    />
    <span className="text-2xl font-bold text-primary font-poppins tracking-widest ml-2 select-none">
      Vel Infotech
    </span>
  </div>

  {/* Nav links: Take up remaining space, push to right */}
<nav className="hidden md:flex items-center gap-2 lg:gap-7 lg:ml-30 h-full">
    {navLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        onClick={() => setCurrent(link.name)}
        onMouseEnter={() => setCurrent(link.name)}
        className={`
          relative px-4 py-2 rounded-full font-medium text-base transition-all duration-200
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

  {/* Phone Numbers (Desktop only, right-aligned) */}
  <div className="hidden md:flex flex-row items-center lg:ml-25 gap-15 ml-12">
    <div className="flex flex-col items-center">
      <span className="font-semibold text-base text-gray-800">Enquiry:</span>
      <a href="tel:+919444183254" className="text-[#005BAC] hover:underline text-base font-semibold">
        +91 94441 83254
      </a>
    </div>
    <div className="flex flex-col items-center">
      <span className="font-semibold text-base text-gray-800">Support:</span>
      <a href="tel:+919444183254" className="text-[#005BAC] hover:underline text-base font-semibold">
        +91 94441 83254
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
<div className="hidden md:flex w-full bg-[#005BAC] min-h-[44px] items-center px-6 z-40 fixed">
  <nav className="w-full flex justify-center gap-10 text-white font-semibold text-md relative">
    {/* Direct Links */}
    <a href="/courses" className="transition">All Courses</a>
    <a href="/corporate-training" className="transition">Internship</a>
    <a href="/placed-students" className="transition">Placed Students List</a>
    <a href="/reviews" className="transition">Reviews</a>
    <a href="/reviews" className="transition">Blog</a>
    {/* More Dropdown */}
    <div className="relative group">
      <button className="transition">More ▾</button>

      {/* Fix: use group-hover + absolute + no gap */}
      <div className="absolute left-0 top-full mt-1 bg-white text-black rounded shadow-lg min-w-[180px] z-50 hidden group-hover:flex flex-col">
        <a href="/job-seekers" className="px-4 py-2 hover:bg-gray-100">Interview Questions</a>
        <a href="/resources" className="px-4 py-2 hover:bg-gray-100">Tutorials</a>
        <a href="/branches" className="px-4 py-2 hover:bg-gray-100">Sample Resume</a>
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
