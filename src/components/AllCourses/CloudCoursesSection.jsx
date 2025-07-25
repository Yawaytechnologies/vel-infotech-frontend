import React from "react";

const courses = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
    title: "Azure",
    duration: "45 hrs",
    link: "#",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    title: "AWS",
    duration: "45 hrs",
    link: "#",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Cloud_logo.svg",
    title: "GCP",
    duration: "60 hrs",
    link: "#",
  },
];

export default function CloudCoursesSection() {
  return (
    <section className="py-8 px-4 md:px-0 max-w-6xl mx-auto">
      <h2 className="text-center text-4xl font-bold mb-8 text-gray-900">Courses</h2>

      <div className="flex items-center gap-4 justify-center mb-6 flex-wrap">
        <span className="text-2xl font-semibold text-blue-900">Cloud Computing</span>
        <a
          href="#"
          className="bg-blue-900 hover:bg-blue-700 text-white font-medium rounded-md px-6 py-2 text-sm flex items-center gap-1"
        >
          Know More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
        {courses.map((course) => (
          <div
            key={course.title}
            className="bg-gray-50 rounded-xl p-6 flex flex-col items-center w-full max-w-xs border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={course.logo} alt={course.title} className="w-12 h-12 object-contain" />
              <span className="font-semibold text-lg text-gray-800">{course.title}</span>
            </div>
            <div className="text-sm text-blue-900 font-medium mb-4">
              Duration: <span className="font-semibold">{course.duration}</span>
            </div>
            <a
              href={course.link}
              className="bg-blue-900 hover:bg-blue-700 text-white text-sm font-medium rounded-md px-4 py-1.5 flex items-center gap-1 transition"
            >
              Know More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>

      <hr className="mt-10 border-t border-gray-300" />
    </section>
  );
}
