import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const COURSE_GROUPS = [
  {
    label: "Cloud Computing Training",
    sub: [
      { name: "AWS Training", href: "/aws-training" },
      { name: "DevOps", href: "/devops" },
      { name: "Production Support", href: "/production-support" },
    ],
  },
  {
    label: "Programming Languages",
    sub: [
      { name: "Java", href: "/java" },
      { name: "Python", href: "/python" },
    ],
  },
  {
    label: "Software Testing",
    sub: [
      { name: "Software Testing", href: "/software-testing" },
      { name: "Selenium Testing", href: "/selenium-testing" },
      { name: "ETL Testing", href: "/etl-testing" },
    ],
  },
  {
    label: "Web Design & Development",
    sub: [
      { name: "Full Stack", href: "/full-stack-development" },
      { name: "ReactJS", href: "/reactjs" },
      { name: "MERN Stack", href: "/mern-stack" },
      { name: "Angular", href: "/angular" },
      { name: "WordPress", href: "/wordpress" },
      { name: "HTML", href: "/html" },
      { name: "CSS", href: "/css" },
      { name: "MEAN Stack", href: "/mean-stack" },
      { name: "Vue.js", href: "/vuejs" },
      { name: "jQuery", href: "/jquery" },
    ],
  },
  {
    label: "Data Science & AI",
    sub: [
      { name: "Data Science", href: "/data-science" },
      { name: "AI", href: "/ai" },
      { name: "Business Analytics", href: "/business-analytics" },
      { name: "Big Data Developer", href: "/big-data-developer" },
    ],
  },
  // Add more groups as needed...
];

export default function AllCoursesDropdown() {
  const [hovered, setHovered] = useState(0); // index of hovered group

  return (
    <div className="relative group">
      <button className="transition">All Courses ▾</button>
      <div className="absolute left-0 top-full mt-1 bg-white text-black rounded shadow-2xl min-w-[540px] z-50 flex hidden group-hover:flex">
        {/* LEFT COLUMN: Main Categories */}
        <div className="flex flex-col w-60 border-r border-gray-200 py-2">
          {COURSE_GROUPS.map((grp, idx) => (
            <button
              key={grp.label}
              className={`flex items-center justify-between px-4 py-2 text-left hover:bg-blue-50 hover:text-[#005BAC] font-medium transition ${
                idx === hovered
                  ? "bg-[#005BAC] text-white font-bold"
                  : "bg-white text-gray-800"
              }`}
              onMouseEnter={() => setHovered(idx)}
              tabIndex={-1}
            >
              {grp.label}
              <FiChevronRight className="ml-1" />
            </button>
          ))}
        </div>
        {/* RIGHT COLUMN: Subcourses */}
        <div className="flex flex-col min-w-[220px] py-2">
          {COURSE_GROUPS[hovered].sub.map((sc) => (
            <a
              key={sc.name}
              href={sc.href}
              className="px-4 py-2 hover:bg-gray-100 text-gray-800 whitespace-nowrap font-normal"
            >
              {sc.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
