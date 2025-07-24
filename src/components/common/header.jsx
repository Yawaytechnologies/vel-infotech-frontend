import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/infotech.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [current, setCurrent] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  // ESC key closes drawer
  useEffect(() => {
    if (!menuOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [menuOpen]);

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 w-full z-50 bg-background backdrop-blur-xl border-b border-white/20">
        <div className=" flex items-center justify-between ">
          {/* Logo */}
          <div className="flex items-center h-18 ">
            <img
              src={Logo}
              alt="Logo"
                className="h-15 w-auto object-contain"
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
                  ${
                    current === link.name
                      ? "text-white bg-[#005BAC] shadow-lg"
                      : "text-gray-800/90 hover:text-text-secondary/90"
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
          {/* Mobile Nav Icon */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-full bg-white/60 backdrop-blur hover:bg-white/80 transition"
            onClick={() => setMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <FiMenu className="w-7 h-7 text-primary" />
          </button>
        </div>
         <div className="hidden md:flex w-full bg-[#005BAC] min-h-[44px] items-center px-6 z-40  fixed">
        {" "}
        {/* mt matches header height */}
        <nav className="w-full flex justify-center gap-15 text-white font-semibold text-md relative">
          <a href="/courses" className=" transition">
            All Courses
          </a>
          <a
            href="/corporate-training"
            className=" transition"
          >
            Corporate Training
          </a>
          <a
            href="/placed-students"
            className=" transition"
          >
            Placed Students list
          </a>
          <a href="/reviews" className=" transition">
            Reviews
          </a>
          <a href="/job-seekers" className=" transition">
            Job seekers
          </a>
          <a href="/resources" className=" transition">
            Resources
          </a>
          <a href="/branches" className=" transition">
            Branches
          </a>
          {/* More Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1  transition focus:outline-none">
              More
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded shadow-xl py-2 z-20 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
              <a
                href="/interview-questions"
                className="block px-5 py-2 text-primary hover:bg-gray-100 transition"
              >
                Interview Questions
              </a>
              <a
                href="/internship"
                className="block px-5 py-2 text-primary hover:bg-gray-100 transition"
              >
                Internship
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
        {/* Sidebar Drawer */}
        <aside
          className={`fixed top-0 left-0 h-full w-[80vw] max-w-xs bg-white z-50 shadow-2xl flex flex-col
        transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
          style={{ transitionProperty: "transform, box-shadow, opacity" }}
        >
          {/* Top: Logo and Close button */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#41e392] shadow-xl rounded-full flex items-center justify-center">
                <span className="text-xl font-extrabold text-white tracking-wider">
                  V
                </span>
              </div>
              <span className="text-xl font-bold text-primary font-poppins ml-1">
                Vel <span className="text-[#41e392]">InfoTech</span>
              </span>
            </div>
            <button
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FiX className="w-7 h-7 text-gray-500" />
            </button>
          </div>
          {/* Nav links, vertical */}
          <nav className="flex flex-col gap-1 mt-4 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setCurrent(link.name);
                  setMenuOpen(false);
                }}
                className={`
                  text-lg font-semibold rounded-lg px-5 py-3 w-full text-left transition-all
                  ${
                    current === link.name
                      ? "bg-[#41e392] text-white shadow-md"
                      : "hover:bg-[#41e392]/20 text-primary"
                  }
                `}
              >
                {link.name}
              </a>
            ))}
          </nav>
          {/* Optionally: Add social links or sidebar footer here */}
        </aside>
      </header>

      {/* Subheader (below main header) */}
     
    </>
  );
}
