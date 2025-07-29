import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBriefcase,
  FaLaptopCode,
  FaUsers,
  FaRocket,
  FaGraduationCap,
  FaGlobe,
} from "react-icons/fa";

const categoryData = [
  {
    id: 1,
    label: "Non-IT to IT (Career Transition)",
    count: "2455+",
    icon: <FaRocket />,
  },
  {
    id: 2,
    label: "Diploma Candidates",
    count: "2947+",
    icon: <FaUserGraduate />,
  },
  {
    id: 3,
    label: "Non-Engineering Students (Arts & Science)",
    count: "3018+",
    icon: <FaUsers />,
  },
  {
    id: 4,
    label: "Engineering Students",
    count: "4207+",
    icon: <FaLaptopCode />,
  },
  {
    id: 5,
    label: "CTC Greater than 5 LPA",
    count: "4478+",
    icon: <FaBriefcase />,
  },
  {
    id: 6,
    label: "Academic Percentage Less than 60%",
    count: "5236+",
    icon: <FaGraduationCap />,
  },
  {
    id: 7,
    label: "Career Break / Gap Students",
    count: "2359+",
    icon: <FaUserGraduate />,
  },
  {
    id: 8,
    label: "Postgraduate Candidates",
    count: "1432+",
    icon: <FaGraduationCap />,
  },
  { id: 9, label: "Remote Job Seekers", count: "1769+", icon: <FaGlobe /> },
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

const placedStudents = [
  {
    name: "Poornima",
    company: "Tata Consultancy Services (TCS)",
    designation: "Software Engineer",
    course: "Fullstack Development",
  },
  {
    name: "Ram",
    company: "Infosys",
    designation: "Web Developer",
    course: "Angular JS",
  },
  {
    name: "Kapilesh",
    company: "HCL Technologies",
    designation: "Software Developer",
    course: "Python",
  },
  {
    name: "Gowtham",
    company: "Wipro",
    designation: "Software Tester",
    course: "Selenium",
  },
  {
    name: "Sindhu",
    company: "IBM India",
    designation: "Software Developer",
    course: "Java",
  },
  {
    name: "Janani",
    company: "Capgemini",
    designation: "Data Scientist",
    course: "Python",
  },
  {
    name: "Kapilesh",
    company: "HCL Technologies",
    designation: "Software Developer",
    course: "Python",
  },
  {
    name: "Gowtham",
    company: "Wipro",
    designation: "Software Tester",
    course: "Selenium",
  },
  {
    name: "Sindhu",
    company: "IBM India",
    designation: "Software Developer",
    course: "Java",
  },
  {
    name: "Janani",
    company: "Capgemini",
    designation: "Data Scientist",
    course: "Python",
  },
];

const PlacedStudents = () => {
  return (
    <div className="bg-blue-200">
      {/* Hero Section */}
      <div
        className="relative pt-[180px] w-full h-[400px]  bg-cover bg-center "
        style={{ backgroundImage: "url('/images/placement.jpg')" }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-3xl sm:text-4xl font-bold">
            Placed Students List
          </h1>
        </div>
      </div>

      {/* Info Section */}

      <div className="w-7xl mx-auto px-4 py-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-lg p-6 border border-green-400"
        >
          <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-400 inline-block">
            List of Students Placed from Vel infotech
          </h2>
          <p className="text-lg  text-gray-800 leading-relaxed">
            With the growing number of graduates and the insufficient demand in
            IT field, candidates now need to learn techniques and usage of
            upcoming technologies that are utilized by these MNC’s.At Vel
            infotech, we have trainers that are experts in the corresponding
            field. Our trainers are major professionals, who have worked or are
            still working in a well-reputed MNC.At Vel infotech, we have
            trainers that are experts in the corresponding field. Our trainers
            are major professionals, who have worked or are still working in a
            well-reputed MNC.At Vel infotech, we have trainers that are experts
            in the corresponding field. Our trainers are major professionals,
            who have worked or are still working in a well-reputed MNC.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white shadow-md rounded-lg px-6 py-4 border border-green-400"
        >
          <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 border-green-400 inline-block">
            Training and Placement
          </h2>
          <p className="text-lg  text-gray-800 leading-relaxed">
            At Vel infotech, we have trainers that are experts in the
            corresponding field. Our trainers are major professionals, who have
            worked or are still working in a well-reputed MNC. At Vel infotech,
            we have trainers that are experts in the corresponding field. Our
            trainers are major professionals, who have worked or are still
            working in a well-reputed MNC.At Vel infotech, we have trainers that
            are experts in the corresponding field. Our trainers are major
            professionals, who have worked or are still working in a
            well-reputed MNC.At Vel infotech, we have trainers that are experts
            in the corresponding field. Our trainers are major professionals,
            who have worked or are still working in a well-reputed MNC.At Vel
            infotech, we have trainers that are experts in the corresponding
            field. Our trainers are major professionals, who have worked or are
            still working in a well-reputed MNC.
          </p>
        </motion.div>
      </div>

      {/* Category Section */}
      <div className="w-7xl mx-auto px-4 pb-16 ">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-green-800 mb-8">
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
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center cursor-pointer"
            >
              <div className="flex justify-center text-3xl text-green-700 mb-2">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {item.label}
              </h3>
              <div className="flex justify-center">
                <span className="inline-block px-3 py-1 rounded-full bg-yellow-300 text-sm font-bold text-gray-800">
                  {item.count}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Role-based Section */}
      <div className="w-full mx-auto px-4 pb-20">
        <h2 className="text-3xl font-semibold text-center text-green-800 mb-8">
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
              className="bg-green-100 rounded-lg shadow-md p-4"
            >
              <h3 className="text-xl font-bold text-center text-blue-900 mb-4">
                Role-based Placements
              </h3>
              {column.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex justify-between items-center py-2 px-4 my-2 rounded-lg shadow-sm hover:shadow-md cursor-pointer bg-white"
                >
                  <span className="text-gray-800 font-medium">{item.role}</span>
                  <span className="px-3 py-1 text-sm font-bold rounded-full bg-yellow-300 text-gray-800">
                    {item.count}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Student Table Section (No Photo) */}
      <div className="max-w-9xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Placed Students JAN 2025 – MARCH 2025
        </h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-300">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-white bg-blue-900 uppercase">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Designation</th>
                <th className="px-6 py-3">Course Done</th>
              </tr>
            </thead>
            <tbody>
              {placedStudents.map((student, index) => (
                <tr
                  key={index}
                  className="border-b bg-white hover:bg-blue-50 transition"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium">{student.name}</td>
                  <td className="px-6 py-4">{student.company}</td>
                  <td className="px-6 py-4">{student.designation}</td>
                  <td className="px-6 py-4">{student.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* ✅ Registration Form Section */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          Register for Placement Assistance
        </h2>
        <form className="bg-white shadow-lg rounded-lg p-8 space-y-6 border border-blue-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                WhatsApp Number
              </label>
              <input
                type="tel"
                placeholder="Enter WhatsApp number"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Course Interested
              </label>
              <input
                type="text"
                placeholder="e.g. Java, Python, Fullstack"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-800 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlacedStudents;
