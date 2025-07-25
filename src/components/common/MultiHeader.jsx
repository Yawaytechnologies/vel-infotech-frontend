import { useState } from "react";
import {
  FaInstagram, FaLinkedin, FaYoutube, FaFacebookF, FaPhoneAlt, FaUserCircle, FaBars, FaSearch, FaTimes,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import logobr from "../../assets/logbr.png";
// --- MENU ITEMS FOR SIDEBAR ---
const menuItems = [
  { name: "Recommended Courses", expandable: true },
  { name: "All Courses", expandable: true },
  { name: "Corporate Training" },
  { name: "Placed Students list" },
  { name: "Reviews", expandable: true },
  { name: "Job seekers", expandable: true },
  { name: "Resources" },
  { name: "Branches" },
  { name: "More", expandable: true },
];

export default function ResponsiveHeader() {
  // Mobile header state
  const [showContact, setShowContact] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header>
      {/* --- DESKTOP HEADER --- */}
      <div className="hidden md:block">
        {/* 1. Orange Notice Bar */}
        <div className="w-full bg-gradient-to-r from-[#ff5152] via-[#ff8d35] to-[#ffe468] px-4 py-2 flex items-center justify-between text-white text-base font-medium">
          <span>
            Join Our 100% Job Guarantee Courses (Open to All Graduates / Diploma Holders / Career Gaps / Non-IT Backgrounds / Pass-Outs from Any Year).
          </span>
          <div className="flex items-center gap-2">
            <a href="#" className="font-bold underline text-black hover:text-[#e36414] transition-all">Placement Records</a>
            <button className="ml-2 p-1 rounded-full hover:bg-black/10">
              <IoMdClose size={24} className="text-white drop-shadow" />
            </button>
          </div>
        </div>

        {/* 2. Social Icons + Contact Info */}
        <div className="w-full bg-[#4b5563] px-4 py-2 flex flex-wrap items-center justify-between text-gray-200 text-sm">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:scale-110"><FaInstagram size={20} /></a>
            <a href="#" className="hover:scale-110"><FaLinkedin size={20} /></a>
            <a href="#" className="hover:scale-110"><FaYoutube size={20} /></a>
            <a href="#" className="hover:scale-110"><FaFacebookF size={20} /></a>
          </div>
          <div className="flex flex-wrap items-center gap-8 justify-center">
            <span>Hire From Us: <b>+91-8925 958 900</b></span>
            <span>Corporate: <b>+91 89259 58907</b></span>
            <span>Support: <b>+91 8447 446 138</b></span>
          </div>
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-blue-200" size={20} />
            <a href="#" className="text-blue-200 font-medium hover:underline">Placement Statistics</a>
          </div>
        </div>

        {/* 3. Logo + Search + Phone */}
        <div className="w-full bg-white px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-3">
           <img src={logobr} alt="ACTE Logo" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center flex-1 max-w-xl mx-6">
            <select className="border border-gray-300 bg-gray-100 rounded-l px-3 py-2 outline-none text-gray-700 font-medium">
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
             
            </select>
            <input
              type="text"
              placeholder="Search for Courses"
              className="border-t border-b border-gray-300 bg-gray-100 rounded-r px-4 py-2 w-full outline-none"
            />
          </div>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center">
              <FaPhoneAlt className="text-blue-700 mb-1" size={10} />
              <span className="font-bold text-gray-700">Online Enquiry</span>
              <span className="text-blue-700 font-semibold text-lg">+919600593838</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-gray-700">Chennai</span>
              <span className="text-blue-700 font-semibold text-lg">+91-9953 306 008</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-gray-700">Bangalore</span>
              <span className="text-blue-700 font-semibold text-lg">+91-7200 844 755</span>
            </div>
          </div>
        </div>

        {/* 4. Menu Bar */}
        <nav className="w-full bg-[#1b5c3c] px-4 py-3">
          <ul className="flex flex-wrap gap-12 items-center justify-center text-white font-semibold text-md">
           
            <li className="hover:underline hover:text-[#ffda3c] cursor-pointer">All Courses</li>
            <li className="hover:underline hover:text-[#ffda3c] cursor-pointer">Corporate Training</li>
            <li className="hover:underline hover:text-[#ffda3c] cursor-pointer">Placed Students list</li>
            <li className="hover:underline hover:text-[#ffda3c] cursor-pointer">Reviews</li>
            <li className="hover:underline hover:text-[#ffda3c] cursor-pointer">Job seekers</li>
            <li className="hover:underline hover:text-[#ffda3c] cursor-pointer">Resources</li>
            <li className="hover:underline hover:text-[#ffda3c] cursor-pointer">Branches</li>
            <li className="hover:underline hover:text-[#ffda3c] cursor-pointer">More</li>
          </ul>
        </nav>
      </div>

      {/* --- MOBILE HEADER --- */}
      <div className="block md:hidden">
        <div className="w-full max-w-md mx-auto shadow-lg rounded overflow-hidden bg-white relative">
          {/* FIRST BAR - Job Guarantee Notice */}
          <div className="w-full px-4 py-3 text-white text-center font-medium bg-gradient-to-r from-[#fa5439] via-[#fca33c] to-[#ffe352] relative flex flex-col items-center justify-center">
            <span className="text-base leading-snug">
              Join Our 100% Job Guarantee Courses<br />
              (Open to All Graduates/ Diploma Holders/ Career Gaps/ Non-IT Backgrounds/ Pass-Outs from Any Year).{" "}
              <a href="#" className="font-bold underline text-black">Placement Records</a>
            </span>
            <button className="absolute right-2 top-2" aria-label="Close">
              <IoMdClose size={22} />
            </button>
          </div>

          {/* SECOND BAR - Contact Dropdown */}
          <div className="bg-[#444e5c] text-white py-3 px-4 flex items-center justify-between">
            <button
              className="flex items-center gap-2 font-bold text-lg w-full"
              onClick={() => setShowContact((v) => !v)}
            >
              <FaPhoneAlt className="text-xl" />
              Course Enquiry Numbers
              <span className="ml-auto">{showContact ? "▲" : "▼"}</span>
            </button>
          </div>
          {/* Contact numbers dropdown */}
          {showContact && (
            <div className="bg-[#f5f5f7] text-gray-700 text-sm px-5 py-2">
              <div>Online: <span className="font-semibold text-blue-700">+91-7669 100 251</span></div>
              <div>Chennai: <span className="font-semibold text-blue-700">+91-9953 306 008</span></div>
              <div>Bangalore: <span className="font-semibold text-blue-700">+91-7200 844 755</span></div>
            </div>
          )}

          {/* THIRD BAR - Logo & Placement Stats */}
          <div className="bg-white py-4 flex items-center justify-between px-5 border-b">
            <img src="/logo.png" alt="ACTE" className="h-9 w-auto" />
            <span className="block w-px h-7 bg-gray-300 mx-3" />
            <a href="#" className="text-[#164389] font-bold text-lg hover:underline">
              Placement Statistics
            </a>
          </div>

          {/* FOURTH BAR - Menu (Hamburger + Search) */}
          <div className="bg-[#16896a] flex items-center px-4 py-3">
            <button
              aria-label="Open menu"
              onClick={() => setSidebarOpen(true)}
              className="text-white text-2xl mr-4 focus:outline-none"
            >
              <FaBars />
            </button>
            <span className="text-white font-semibold text-base flex-1">Student Portal</span>
            <FaSearch className="text-white text-xl" />
          </div>

          {/* SIDEBAR & BACKDROP */}
          {sidebarOpen && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black bg-opacity-40 z-40"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close sidebar"
              />
              {/* Sidebar */}
              <nav
                className="fixed top-0 left-0 h-full w-[80vw] max-w-xs bg-[#495966] z-50 shadow-lg
                        flex flex-col py-7 px-6 animate-slideIn"
                style={{
                  transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <button
                  aria-label="Close menu"
                  className="absolute top-4 right-4 text-gray-100 text-2xl"
                  onClick={() => setSidebarOpen(false)}
                >
                  <FaTimes />
                </button>
                <ul className="mt-4 flex-1">
                  {menuItems.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between py-3 px-1 text-white text-[17px] font-normal border-b border-[#5b697a] last:border-b-0"
                    >
                      <span>{item.name}</span>
                      {item.expandable && (
                        <span className="text-xl font-light">+</span>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              {/* Sidebar Animation */}
              <style>
                {`
                  .animate-slideIn {
                    animation: slideInLeft 0.3s cubic-bezier(0.4,0,0.2,1);
                  }
                  @keyframes slideInLeft {
                    from { transform: translateX(-100%); }
                    to   { transform: translateX(0); }
                  }
                `}
              </style>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
