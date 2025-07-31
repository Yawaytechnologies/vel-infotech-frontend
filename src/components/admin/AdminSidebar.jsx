import {
  FiHome,
  FiCalendar,
  FiUser,
  FiUsers,
  FiBook,
  FiGrid,
  FiClipboard,
  FiBriefcase,
  FiGift,
  FiChevronRight,
  FiDollarSign,
} from "react-icons/fi";
import React, { useState } from "react";
import { MdArrowRight } from "react-icons/md";
const menu = [
  { name: "Dashboard", icon: FiHome, active: true },

  { name: "Professors", icon: FiUser },
  { name: "Students", icon: FiUsers },
  { name: "Courses", icon: FiBook },
  { name: "Library", icon: FiGrid },
  { name: "Departments", icon: FiClipboard },
  { name: "Staff", icon: FiBriefcase },
  { name: "Holiday", icon: FiGift },
  { name: "Fees", icon: FiDollarSign },
];

export default function AdminSidebar({
  open,
  mobileOpen,
  onCloseMobile,
 
}) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={`
    hidden md:flex flex-col bg-white
    fixed  left-0 z-30
    shadow-[0_8px_32px_0_rgba(60,72,102,0.13)]
    
    transition-all duration-300
    ${open ? "w-[260px]" : "w-[72px]"}
    h-[calc(100vh-72px)]
    overflow-y-auto scrollbar-hide
  `}
      >
        <div className="flex-1 flex flex-col py-8 px-2">
          <span
            className={`text-xs font-semibold text-gray-400 px-5 mb-3 tracking-wider ${
              !open && "text-center px-0"
            }`}
          >
            {open ? "MAIN MENU" : ""}
          </span>
          <ul className="flex flex-col gap-1">
            {menu.map((item, idx) => (
              <li key={item.name}>
                <a
                  href="#"
                  className={`
          flex items-center justify-between
          ${open ? "gap-4 px-5" : "justify-center"}
          py-3 rounded-xl text-[15px] font-medium transition
          ${
            hoveredIdx === idx
              ? "bg-[#eceeff] text-[#7c6cff] font-semibold"
              : "hover:bg-[#f6f7fb] text-[#222e3a]"
          }
        `}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Left: Icon + Name */}
                  <span className="flex items-center">
                    <item.icon size={22} />
                    <span
                      className={`whitespace-nowrap transition-all duration-300 ${
                        open ? "block ml-2" : "hidden"
                      }`}
                    >
                      {item.name}
                    </span>
                  </span>
                  {/* Right: Arrow */}
                  {open && (
                    <MdArrowRight className="text-gray-300 text-2xl ml-4" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {/* Mobile sidebar */}
      <aside
        className={`
    fixed top-[72px] left-0 z-39 bg-white
    shadow-[0_8px_32px_0_rgba(60,72,102,0.13)]
    h-[calc(100vh-72px)]
    w-[260px]
    transition-transform duration-300
    
    md:hidden
    ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
    overflow-y-auto scrollbar-hide
  `}
      >
        <div className="flex flex-col py-8 px-2 h-full">
          <span className="text-xs font-semibold text-gray-400 px-5 mb-3 tracking-wider">
            MAIN MENU
          </span>
          <ul className="flex flex-col gap-1">
            {menu.map((item, idx) => (
              <li key={item.name}>
                <a
                  href="#"
                  className={`
              flex items-center justify-between gap-4 px-5
              py-3 rounded-xl text-[12px] font-medium transition
              ${
                hoveredIdx === idx
                  ? "bg-[#eceeff] text-[#7c6cff] font-semibold"
                  : "hover:bg-[#f6f7fb] text-[#222e3a]"
              }
            `}
                  onClick={onCloseMobile}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Left: Icon + Name */}
                  <span className="flex items-center">
                    <item.icon size={22} />
                    <span className="whitespace-nowrap ml-2">{item.name}</span>
                  </span>
                  {/* Right: Arrow */}
                  <MdArrowRight className="text-gray-300 text-2xl ml-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
