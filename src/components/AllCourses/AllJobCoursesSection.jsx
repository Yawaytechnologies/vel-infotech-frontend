import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const courses = [
  "Java", "Python", "Software Testing", "Selenium Testing", "Full Stack Development",
  "Data Science", "AWS Training", "Digital Marketing", "DevOps", "Hardware Networking",
  "ETL Testing", "Cyber Security", "Business Analytics", "SAP", "Salesforce", "ServiceNow",
  "Data Science & Artificial Intelligence", "Production Support", "PL SQL", "SQL",
  "Big Data Developer", "Soft Skill Training", "RPA (Robotic Process Automation)"
];

export default function AllJobCoursesSection() {
  return (
    <section className="bg-[#eaf5fd] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#003c6a] mb-4">
          Popular Courses
        </h2>
        <p className="text-gray-700 text-lg">
          We present to you the most popular courses recommended by experts.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <Link
            to={`/all-courses/${encodeURIComponent(course)}`} // encodes "AWS Training" safely
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="w-16 h-16 mb-4">
              <img
                src={`https://placehold.co/64x64?text=${course.split(" ")[0]}`}
                alt={course}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-md font-bold text-gray-800 text-center">{course}</h3>
            <p className="text-sm text-gray-500">Online | Offline</p>

            <div className="flex items-center justify-center gap-1 text-sm mt-2 text-gray-600">
              <FaUserGraduate className="text-gray-500" />
              <span>{Math.floor(Math.random() * 5000 + 10000).toLocaleString()}+ Learners</span>
            </div>

            <div className="flex justify-center items-center mt-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <AiFillStar key={i} />
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
