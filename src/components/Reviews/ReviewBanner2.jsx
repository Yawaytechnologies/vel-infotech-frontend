import React from "react";
import { FaUserFriends, FaBriefcase, FaGlobe } from "react-icons/fa";

const reviewsData = [
  {
    category: "IT",
    icon: <FaBriefcase className="text-blue-400 text-xl" />,
    name: "Alice Johnson",
    role: "Software Developer",
    message:
      "The IT training was phenomenal! I learned React, Node.js, and AWS from scratch, and landed a job in 3 months.",
  },
  {
    category: "Non-IT",
    icon: <FaUserFriends className="text-green-400 text-xl" />,
    name: "Rajesh Kumar",
    role: "Business Analyst",
    message:
      "Coming from a non-IT background, I was nervous at first. The trainers made complex concepts easy to understand.",
  }
];

export default function ReviewBanner2() {
  return (
    <div className="space-y-10 p-6">
      {reviewsData.map((review, i) => (
        <div key={i} className="flex items-start space-x-4">
          {/* Left: Icon & Category */}
          <div className="flex-shrink-0 mt-1">{review.icon}</div>

          {/* Right: Content */}
          <div>
            {/* Category label */}
            <span
              className={`uppercase text-xs tracking-wider font-bold ${
                review.category === "IT"
                  ? "text-blue-500"
                  : review.category === "Non-IT"
                  ? "text-green-500"
                  : "text-orange-500"
              }`}
            >
              {review.category}
            </span>

            {/* Name & role */}
            <h4 className="font-semibold text-gray-800">{review.name}</h4>
            <p className="text-sm text-gray-500">{review.role}</p>

            {/* Message bubble */}
            <div
              className={`mt-2 px-4 py-2 rounded-lg inline-block max-w-lg text-sm ${
                review.category === "IT"
                  ? "bg-blue-50 text-gray-800"
                  : review.category === "Non-IT"
                  ? "bg-green-50 text-gray-800"
                  : "bg-orange-50 text-gray-800"
              }`}
            >
              {review.message}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
