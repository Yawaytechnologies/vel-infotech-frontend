import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Java",
    image: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
  },
  {
    title: "Python",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  },
  {
    title: "SoftwareTesting",
    image: "https://cdn-icons-png.flaticon.com/512/5429/5429613.png",
  },
  {
    title: "SeleniumTesting",
    image: "https://cdn-icons-png.flaticon.com/512/9431/9431234.png",
  },
  {
    title: "FullStackDevelopement",
    image: "https://cdn-icons-png.flaticon.com/512/11333/11333060.png",
  },
  {
    title: "DataScience",
    image: "https://cdn-icons-png.flaticon.com/512/3011/3011270.png",
  },
  {
    title: "AwsTraining",
    image: "https://cdn-icons-png.flaticon.com/512/873/873120.png",
  },
  {
    title: "DevOps",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828940.png",
  },
  {
    title: "HardwareNetworking",
    image: "https://cdn-icons-png.flaticon.com/512/6509/6509196.png",
  },
  {
    title: "EtlTesting",
    image: "https://cdn-icons-png.flaticon.com/512/6556/6556211.png",
  },
  {
    title: "CyberSecurity",
    image: "https://cdn-icons-png.flaticon.com/512/9846/9846388.png",
  },
  {
    title: "BusinessAnalytics",
    image: "https://cdn-icons-png.flaticon.com/512/2344/2344070.png",
  },
  {
    title: "Sap",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968249.png",
  },
  {
    title: "SalesForce",
    image: "https://cdn-icons-png.flaticon.com/512/919/919830.png",
  },
  {
    title: "ServiceNow",
    image: "https://cdn-icons-png.flaticon.com/512/8353/8353875.png",
  },
  {
    title: "DataScienceAi",
    image: "https://cdn-icons-png.flaticon.com/512/4366/4366843.png",
  },
  {
    title: "Plsql",
    image: "https://cdn-icons-png.flaticon.com/512/603/603201.png",
  },
  {
    title: "Sql",
    image: "https://cdn-icons-png.flaticon.com/512/4248/4248449.png",
  },
  {
    title: "BigDataDeveloper",
    image: "https://cdn-icons-png.flaticon.com/512/2150/2150480.png",
  },
  {
    title: "RPA",
    image: "https://cdn-icons-png.flaticon.com/512/4116/4116122.png",
  },
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
            to={`/all-courses/${encodeURIComponent(course.title)}`}
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="w-16 h-16 mb-4">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-contain"
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
