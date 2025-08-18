import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const courses = [
  { title: "Java", image: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
  { title: "Python", image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
  { title: "Software Testing", image: "https://cdn.simpleicons.org/cypress" },
  { title: "Selenium Testing", image: "https://cdn.simpleicons.org/selenium/43B02A" },
  { title: "Full Stack Development", image: "https://cdn-icons-png.flaticon.com/512/16990/16990193.png" },
  { title: "Data Science", image: "https://cdn-icons-png.flaticon.com/512/8649/8649623.png" },
  { title: "Aws Training", image: "https://cdn-icons-png.flaticon.com/512/11518/11518934.png" },
  { title: "DevOps", image: "https://cdn-icons-png.flaticon.com/512/5271/5271250.png" },
  { title: "Hardware Networking", image: "https://cdn-icons-png.flaticon.com/512/4828/4828804.png" },
  { title: "ETL Testing", image: "https://cdn-icons-png.flaticon.com/512/16813/16813580.png" },
  { title: "Cyber Security", image: "https://cdn-icons-png.flaticon.com/512/7700/7700417.png" },
  { title: "Business Analytics", image: "https://cdn-icons-png.flaticon.com/512/8955/8955275.png" },
  { title: "Sap", image: "https://cdn.simpleicons.org/sap" },
  { title: "SalesForce", image: "https://cdn-icons-png.flaticon.com/512/5968/5968914.png" },
  { title: "ServiceNow", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/ServiceNow_logo.svg/512px-ServiceNow_logo.svg.png" },
  { title: "Data Science Ai", image: "https://cdn-icons-png.flaticon.com/512/8100/8100831.png" },
  { title: "Plsql", image: "https://cdn-icons-png.flaticon.com/512/603/603201.png" },
  { title: "Sql", image: "https://cdn-icons-png.flaticon.com/512/4248/4248449.png" },
  { title: "Big Data Developer", image: "https://cdn-icons-png.flaticon.com/512/4354/4354656.png" },
  { title: "RPA", image: "https://cdn-icons-png.flaticon.com/512/8001/8001983.png " },
];

export default function AllJobCoursesSection() {
  return (
    <section id="popular-courses" className="bg-[#eaf5fd] py-16 px-4">
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
            to={`/all-courses/${encodeURIComponent(course.title)}`}
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="w-16 h-16 mb-4">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            <h3 className="text-md font-bold text-gray-800 text-center">{course.title}</h3>
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
