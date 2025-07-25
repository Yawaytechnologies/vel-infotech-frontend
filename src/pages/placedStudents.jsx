import React from "react";
import { motion } from "framer-motion"; // 👈 import Framer Motion

const categoryData = [
  { id: 1, label: "Non-IT to IT (Career Transition)", count: "2455+" },
  { id: 2, label: "Diploma Candidates", count: "2947+" },
  { id: 3, label: "Non-Engineering Students (Arts & Science)", count: "3018+" },
  { id: 4, label: "Engineering Students", count: "4207+" },
  { id: 5, label: "CTC Greater than 5 LPA", count: "4478+" },
  { id: 6, label: "Academic Percentage Less than 60%", count: "5236+" },
  { id: 7, label: "Career Break / Gap Students", count: "2359+" },
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
  return (
    <div className="bg-blue-200">
      {/* Hero Section */}
      <div
        className="relative w-full h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/placement.jpg')" }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-3xl sm:text-4xl font-bold">
            Placed Students List
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 border border-green-400">
            <h2 className="text-2xl font-bold text-green-800 mb-2 border-b-2 border-green-400 inline-block">
              List of Students Placed from Vel infotech
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              With the growing number of graduates and the insufficient demand
              in IT field, candidates now need to learn techniques and usage of
              upcoming technologies that are utilized by these MNC’s... With the
              growing number of graduates and the insufficient demand in IT
              field, candidates now need to learn techniques and usage of
              upcoming technologies that are utilized by these MNC’s...
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg px-4 py-3 border border-green-400">
            <h2 className="text-2xl font-bold text-green-800 mb-2 border-b-2 border-green-400 inline-block">
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

      {/* Role-based Placements */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
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
    </div>
  );
};

export default PlacedStudents;
