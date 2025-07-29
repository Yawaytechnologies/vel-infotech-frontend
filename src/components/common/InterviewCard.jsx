import React from "react";
import { Link } from "react-router-dom";

const InterviewCard = ({ title, date, description, route,image }) => {
  return (
    <div
      className="group bg-white p-2 shadow-md hover:shadow-ms hover:scale-[1.02] transition-all duration-300 border rounded-lg mb-5 cursor-pointer"
    >
      <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
        {title}
      </h2>

      <div className="flex flex-wrap items-center text-ms text-gray-600 gap-4 mb-3">
        <span>🌐 Global 04</span>
        <span>📅 {date}</span>
        <span>🏷️ Interview Questions</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md-2">
        <img
          src={image}
          alt="Interview"
          className="w-60 h-auto rounded"
        />
        <p className="text-gray-700 text-lg">
          {description.substring(0, 250)}...
        </p>
      </div>

      <div className="mt-0 text-right">
        <Link
          to={route}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded inline-block transition-all duration-200"
        >
          Readmore &raquo;
        </Link>
      </div>
    </div>
  );
};

export default InterviewCard;
