import React from "react";
import { FaCloud, FaDatabase, FaLaptopCode } from "react-icons/fa";

// Styles for each category
const categoryStyles = {
  salesforce: {
    topBg: "bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500",
    accent: "text-blue-600",
    badgeBg: "bg-blue-100 text-blue-800",
    icon: FaCloud, // Using cloud for Salesforce
  },
  plsql: {
    topBg: "bg-gradient-to-r from-orange-400 via-red-400 to-pink-500",
    accent: "text-orange-600",
    badgeBg: "bg-orange-100 text-orange-800",
    icon: FaDatabase, // Database icon for PL/SQL
  },
  testing: {
    topBg: "bg-gradient-to-r from-green-400 via-lime-400 to-teal-500",
    accent: "text-green-600",
    badgeBg: "bg-green-100 text-green-800",
    icon: FaLaptopCode, // Laptop code icon for Testing
  },
};

// Generic Review Card
const ReviewCard = ({ category, photo, name, role, company }) => {
  const style = categoryStyles[category];
  const Icon = style.icon;

  return (
    <div className="w-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition transform hover:scale-105 hover:-translate-y-2 bg-white">
      {/* Top Section */}
      <div
        className={`${style.topBg} p-6 flex flex-col items-center justify-center space-y-2`}
      >
        <Icon className="text-5xl text-white mb-2 animate-bounce" />
        <h3 className="text-white text-xl font-bold tracking-wide">
          {category.toUpperCase()}
        </h3>
      </div>

      {/* Bottom Section */}
      <div className="p-6 text-center min-h-[240px] flex flex-col items-center justify-center space-y-5 relative">
        {/* Badge */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${style.badgeBg}`}
        >
          {category.toUpperCase()}
        </span>

        {/* Photo */}
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-md -mt-14"
        />

        {/* Name & Role */}
        <div className="max-w-xs mx-auto">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className={`text-sm font-medium ${style.accent}`}>{role}</p>
        </div>

        {/* Message */}
        <div
          className={`p-4 rounded-lg border-l-4 shadow-inner max-w-[85%] mx-auto ${
            style.badgeBg.split(" ")[0]
          }`}
        >
          <p className="text-sm text-gray-700 leading-relaxed">
            {name} has completed the {category.toUpperCase()} program at{" "}
            <span className="font-medium">{company}</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Page Rendering 3 Cards in one row
export default function ReviewCardsPage() {
  const reviews = [
    {
      category: "salesforce",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Doe",
      role: "Salesforce Developer",
      company: "Vel Infotech",
    },
    {
      category: "plsql",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Ananya Sharma",
      role: "PL/SQL Developer",
      company: "Vel Infotech",
    },
    {
      category: "testing",
      photo: "https://randomuser.me/api/portraits/men/55.jpg",
      name: "Raj Kumar",
      role: "QA Engineer",
      company: "Vel Infotech",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-8 lg:px-32 flex items-center justify-center">
      <div className="flex flex-wrap justify-center items-start gap-10">
        {reviews.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </div>
    </div>
  );
}
