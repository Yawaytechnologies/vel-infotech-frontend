import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import bgPlacement from "../assets/bgplacement.jpg";
import { FaLaptop, FaChalkboardTeacher } from "react-icons/fa";

const categoryData = [
  {
    id: 1,
    label: "Non-IT to IT (Career Transition)",
    count: "2455+",
    gradient: "from-[#005BAC] to-[#0078D7]",
  },
  {
    id: 2,
    label: "Diploma Candidates",
    count: "2947+",
    gradient: "from-[#005BAC] to-[#0078D7]",
  },
  {
    id: 3,
    label: "Non-Engineering  (Arts & Science)",
    count: "3018+",
    gradient: "from-[#005BAC] to-[#0078D7]",
  },
  {
    id: 4,
    label: "Engineering Students",
    count: "4207+",
    gradient: "from-[#005BAC] to-[#0078D7]",
  },
  {
    id: 5,
    label: "CTC Greater than 5 LPA",
    count: "4478+",
    gradient: "from-[#005BAC] to-[#0078D7]",
  },
  {
    id: 6,
    label: "Academic Percentage Less than 60%",
    count: "5236+",
    gradient: "from-[#005BAC] to-[#0078D7]",
  },
  {
    id: 7,
    label: "Career Break / Gap Students",
    count: "2359+",
    gradient: "from-[#005BAC] to-[#0078D7]",
  },
  {
    id: 8,
    label: "Freshers Hired",
    count: "3120+",
    gradient: "from-[#005BAC] to-[#0078D7]",
  },
  {
    id: 9,
    label: "Working Professionals Upskilled",
    count: "1980+",
    gradient: "from-[#005BAC] to-[#0078D7]",
  },
];

const roleDataColumns = [
  [
    { role: "Data Analysts", count: "532+" },
    { role: "Fullstack Developers", count: "680+" },
    { role: "Python Developers", count: "440+" },
    { role: "Java Developers", count: "250+" },
    { role: "Software Testers", count: "623+" },
    { role: "Data Scientists", count: "701+" },
    { role: "AWS Engineers", count: "378+" },
  ],
  [
    { role: "Digital Marketing Executives", count: "371+" },
    { role: "Cloud Engineers", count: "1012+" },
    { role: "Salesforce Developer", count: "1819+" },
    { role: "PowerBI Developer", count: "1583+" },
    { role: "Microsoft Azure Developer", count: "871+" },
    { role: "ServiceNow Engineers", count: "242+" },
    { role: "Angular Developers", count: "288+" },
  ],
  [
    { role: "Ethical Hackers", count: "485+" },
    { role: "React Developers", count: "1901+" },
    { role: ".NET Developers", count: "1419+" },
    { role: "Network Engineers", count: "371+" },
    { role: "Business Analysts", count: "1542+" },
    { role: "AI Engineers", count: "483+" },
    { role: "Business Intelligence Developers", count: "588+" },
  ],
];

const PlacedStudents = () => {
  const [mode, setMode] = useState("classroom");
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div
        className="relative mt-[108px] w-full h-75 sm:h-[300px] md:h-[390px] bg-cover bg-center flex items-center justify-start px-4 sm:px-10 md:px-20 lg:px-40 text-blue-800"
        style={{
          backgroundImage: `url(${bgPlacement})`,
        }}
      >
        <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-snug sm:px-10 md:px-0">
          Placed Students List
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto  px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 border border-blue-400">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 border-b-2 border-gray-400 inline-block">
              List of Students Placed from Vel infotech
            </h2>
            <p className="text-gray-600 mt-5 leading-relaxed">
              With the growing number of graduates and the insufficient demand
              in IT field, candidates now need to learn techniques and usage of
              upcoming technologies that are utilized by these MNC’s... With the
              growing number of graduates and the insufficient demand in IT
              field, candidates now need to learn techniques and usage of
              upcoming technologies that are utilized by these MNC’s...
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg px-4 py-3 border border-blue-400">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 border-b-2 border-gray-400 inline-block">
              Training and Placement
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              At Vel infotech , we have trainers that are experts in the
              corresponding field. Our trainers are major professionals, who
              have worked or are still working in a well-reputed MNC... With the
              growing number of graduates and the insufficient demand in IT
              field, candidates now need to learn techniques and usage of
              upcoming technologies that are utilized by these MNC’s...
            </p>
          </div>
        </div>
      </div>

      {/* Category Cards Section with Framer Motion */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-black-800 mb-5">
          Placement Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categoryData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center cursor-pointer`}
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.label}
              </h3>
              <div className="flex justify-center">
                <span className="inline-block px-3 py-1 rounded-full bg-white text-sm font-bold text-gray-800">
                  {item.count}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Role-based Placements */}
      <div className="max-w-8xl  mx-auto px-4 pb-20">
        <h2 className="text-3xl font-semibold text-center text-black-800 mb-6">
          Role-based Placements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roleDataColumns.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white-900 rounded-lg shadow-md bg-blue-700 p-4"
            >
              <h3 className="text-xl font-bold text-center text-white mb-4">
                Role-based Placements
              </h3>
              {column.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`flex justify-between items-center py-2 px-4 my-2 rounded-lg shadow-sm hover:shadow-md cursor-pointer ${
                    item.highlight
                      ? "bg-orange-400 text-white font-semibold"
                      : "bg-white"
                  }`}
                >
                  <span
                    className={`text-sm sm:text-base ${
                      item.highlight
                        ? "text-white"
                        : "text-gray-800 font-medium"
                    }`}
                  >
                    {item.role}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs sm:text-sm font-bold rounded-full ${
                      item.highlight
                        ? "bg-yellow-400 text-gray-900"
                        : "bg-yellow-300 text-gray-800"
                    }`}
                  >
                    {item.count}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
      {/* Placed Students Table */}
      <div className="max-w-7xl mx-auto px-4 pb-10">
        <h2 className="text-3xl font-semibold text-center text-black-900 mb-6">
          Placed Students JAN 2025 – MARCH 2025
        </h2>

        <div className="overflow-x-auto rounded-lg shadow-md bg-white">
          <table className="w-full text-sm text-left border border-blue-900">
            <thead className="text-white bg-gradient-to-r from-[#005BAC] to-[#003c6a] ">
              <tr>
                <th scope="col" className="px-4 py-3 border-r border-blue-600">
                  ID
                </th>
                <th scope="col" className="px-4 py-3 border-r border-blue-600">
                  Name
                </th>
                <th scope="col" className="px-4 py-3 border-r border-blue-600">
                  Company
                </th>
                <th scope="col" className="px-4 py-3 border-r border-blue-600">
                  Designation
                </th>
                <th scope="col" className="px-4 py-3">
                  Course Done
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {[
                {
                  id: 1,
                  name: "Poornima",
                  company: "TCS",
                  designation: "Software Engineer",
                  course: "Fullstack Development",
                },
                {
                  id: 2,
                  name: "Ram",
                  company: "Infosys",
                  designation: "Web Developer",
                  course: "Angular JS",
                },
                {
                  id: 3,
                  name: "Kapilesh",
                  company: "HCL Technologies",
                  designation: "Software Developer",
                  course: "Python",
                },
                {
                  id: 4,
                  name: "Gowtham",
                  company: "Wipro",
                  designation: "Software Tester",
                  course: "Selenium",
                },
                {
                  id: 5,
                  name: "Sindhu",
                  company: "IBM India",
                  designation: "Software Developer",
                  course: "Java",
                },
                {
                  id: 6,
                  name: "Janani",
                  company: "Capgemini",
                  designation: "Data Scientist",
                  course: "Python",
                },
                {
                  id: 7,
                  name: "Ashwin",
                  company: "Wipro",
                  designation: "Fullstack Developer",
                  course: "Angular Js",
                },
                {
                  id: 8,
                  name: "Meenakshi",
                  company: "Cognizant",
                  designation: "PowerBI Developer",
                  course: "PowerBI",
                },
                {
                  id: 9,
                  name: "Rachana",
                  company: "TCS",
                  designation: "Software Tester",
                  course: "Selenium",
                },
                {
                  id: 10,
                  name: "Mukunth",
                  company: "Infosys",
                  designation: "Cloud Engineer",
                  course: "AWS",
                },
              ].map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-100 border-b border-blue-200"
                >
                  <td className="px-4 py-2 font-semibold">{student.id}</td>
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.company}</td>
                  <td className="px-4 py-2">{student.designation}</td>
                  <td className="px-4 py-2">{student.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center   pt-2 px-2 pb-2">
        {/* Left Side - Text Content */}
        <div className="relative backdrop-blur-[4px] bg-white/30 border border-white/60 shadow-2xl rounded-3xl p-8 transition-all hover:scale-[1.015] hover:shadow-2xl duration-300">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-7 ml-19">
            Placement Highlights
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            With the growing number of graduates and the insufficient demand in
            IT field, candidates now need to learn techniques and technologies
            utilized by MNCs.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              <strong>Industry Trend:</strong> Real-time skills required by top
              companies
            </li>
            <li>
              <strong>Top Domains:</strong> Fullstack, Cloud, Testing, Data
              Science
            </li>
            <li>
              <strong>Freshers & Experienced:</strong> Placement support for all
              levels
            </li>
          </ul>
        </div>

        {/* Right Side - Enquiry Form */}
        <div className="w-full max-w-lg mx-auto">
          <div className="relative backdrop-blur-[4px] bg-white/30 border border-white/60 shadow-2xl rounded-3xl p-8 transition-all hover:scale-[1.015] hover:shadow-2xl duration-300">
            <h5 className="text-2xl font-bold mb-5 text-center bg-gradient-to-r from-[#005BAC] to-[#003c6a] bg-clip-text text-transparent tracking-tight">
              Get a Free Training Quote
            </h5>
            <div className="flex justify-center mb-5 gap-2">
              <button
                onClick={() => setMode("classroom")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-full text-xs sm:text-base lg:text-lg shadow
                  ${
                    mode === "classroom"
                      ? "bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white shadow-lg"
                      : "bg-white/60 text-black border border-[#a7f3d0]/40"
                  } transition-all duration-200`}
              >
                <FaChalkboardTeacher className="text-xl" /> Class Room
              </button>
              <button
                onClick={() => setMode("online")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-full text-xs sm:text-base lg:text-lg shadow
                  ${
                    mode === "online"
                      ? "bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white shadow-lg"
                      : "bg-white/60 text-black border border-[#a7f3d0]/40"
                  } transition-all duration-200`}
              >
                <FaLaptop className="text-xl" /> Online
              </button>
            </div>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl bg-background px-5 py-3 border border-[#003c6a]/60 text-base font-medium focus:ring-2 focus:ring-[#003c6a] outline-none shadow"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="rounded-xl bg-background px-5 py-3 border border-[#003c6a]/60 text-base font-medium focus:ring-2 focus:ring-[#003c6a] outline-none shadow"
              />
              <div className="flex gap-3">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="rounded-xl bg-background px-5 py-3 border border-[#003c6a]/60 text-base font-medium w-1/2 focus:ring-2 focus:ring-[#003c6a] outline-none shadow"
                />
                <select
                  defaultValue=""
                  className="rounded-xl bg-background px-5 py-3 border border-[#003c6a]/60 text-base font-medium w-1/2 focus:ring-2 focus:ring-[#003c6a] outline-none shadow"
                >
                  <option value="" disabled>
                    How & Where
                  </option>
                  <option>Morning Batch</option>
                  <option>Evening Batch</option>
                  <option>Weekend</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Type Course"
                className="rounded-xl bg-background px-5 py-3 border border-[#003c6a]/60 text-base font-medium focus:ring-2 focus:ring-[#003c6a] outline-none shadow"
              />
              <textarea
                placeholder="Your Message"
                rows={2}
                className="rounded-xl bg-background px-5 py-3 border border-[#003c6a]/60 text-base font-medium focus:ring-2 focus:ring-[#003c6a] outline-none resize-none shadow"
              />
              <button className="bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white font-extrabold py-3 rounded-xl hover:from-[#0891b2] hover:to-[#16bca7] transition shadow-lg mt-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacedStudents;
