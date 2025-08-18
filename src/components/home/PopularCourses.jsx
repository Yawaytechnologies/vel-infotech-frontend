import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "120K", label: "Students Enrolled" },
  { value: "20+", label: "Overall Branches" },
  { value: "2500+", label: "Last Year Placed Students" },
  { value: "10+", label: "Years Of Experience" },
];

const courses = [
  {
    title: "Java",
    learners: "15,000+",
    rating: 5,
    image: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    mode: "Online | Offline"
  },
  {
    title: "Python",
    learners: "13,500+",
    rating: 5,
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    mode: "Online | Offline"
  },
  {
    title: "SQL",
    learners: "9,000+",
    rating: 5,
    image: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
    mode: "Online | Offline"
  },
  {
    title: "DataScience",
    learners: "12,000+",
    rating: 5,
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721296.png",
    mode: "Online | Offline"
  },
  {
    title: "SoftwareTesting",
    learners: "8,500+",
    rating: 5,
    image: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
    mode: "Online | Offline"
  },
  {
    title: "AWSTraining",
    learners: "7,800+",
    rating: 5,
    image: "https://cdn-icons-png.flaticon.com/512/873/873120.png",
    mode: "Online | Offline"
  },
  {
    title: "DevOps",
    learners: "8,200+",
    rating: 5,
    image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    mode: "Online | Offline"
  },
  {
    title: "Salesforce",
    learners: "6,900+",
    rating: 5,
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968770.png",
    mode: "Online | Offline"
  }
];

export default function PopularCoursesSection() {
  return (
    <section className="bg-[#e8f1f8]">
      {/* Blue background and heading */}
      <div className="bg-[#56628b] pt-10 pb-8">
        <h2 className="text-white text-2xl md:text-3xl font-extrabold text-center mb-8">
          You Always Get the Best Guidance
        </h2>
      </div>
      {/* Floating stats card */}
      <div className="flex justify-center -mt-14 mb-8 px-2">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between px-4 py-7 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex-1 flex flex-col items-center justify-center"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-[#202b3c]">
                {stat.value}
              </div>
              <div className="w-10 border-b-4 border-[#e53935] rounded mt-1 mb-1" />
              <div className="text-base md:text-lg text-[#202b3c] text-center font-normal">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Courses heading */}
      <div className="text-center py-8">
        <h2 className="text-4xl font-semibold text-gray-800 mb-2">
          Popular Courses
        </h2>
        <p className="text-md text-gray-600">
          We present to you the most popular courses recommended by experts.
        </p>
      </div>

      {/* Course Cards */}
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
        {courses.map((course, idx) => (
          <Link
            key={idx}
            to={`/all-courses/${encodeURIComponent(course.title)}`}
            className="bg-white rounded-xl shadow-md p-3 hover:shadow-lg transition-all block hover:scale-105 cursor-pointer"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-20 mx-auto mb-3"
            />
            <h3 className="text-sm font-semibold text-center mb-1">
              {course.title}
            </h3>
            <p className="text-xs text-gray-500 text-center mb-1">{course.mode}</p>
            <div className="flex items-center justify-center text-gray-500 text-xs gap-1">
              <span>👥 {course.learners} Learners</span>
              <span className="ml-2 text-yellow-500">
                {"★".repeat(course.rating)}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center pb-8">
        <Link to="/all-courses">
          <button className="bg-[#005BAC] text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Browse All Courses
          </button>
        </Link>
      </div>

      {/* Footer CTA */}
      <div className="bg-[#2e7dbf] text-white text-center py-3 px-2 text-xs md:text-base">
        <p className="font-semibold">
          We Provide the Best Online Course{" "}
          <span className="inline-flex items-center gap-2 text-yellow-300 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6.62 10.79a15.07 15.07 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.72 11.72 0 003.65.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.58 3.65 1 1 0 01-.21 1.11z" />
            </svg>
            +91-9600593838 
          </span>
        </p>
      </div>
    </section>
  );
}
