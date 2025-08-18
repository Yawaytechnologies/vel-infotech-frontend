import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// Single Review Card
const ReviewCard = ({ name, message, avatar, linkedinUrl, rating, category }) => {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-lg transition max-w-sm w-full border border-gray-200">
      {/* Avatar + Name */}
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={`${i < rating ? "text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <p className="text-xs text-gray-500">{category}</p>
        </div>
      </div>

      {/* Review Message */}
      <p className="mt-4 text-gray-700">{message}</p>

      {/* LinkedIn Button */}
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          View Profile
        </a>
      )}
    </div>
  );
};

// Pagination Component
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 disabled:opacity-40 hover:bg-gray-300"
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-full ${
            currentPage === page
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 disabled:opacity-40 hover:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default function ReviewBanner3() {
  const reviews = [
    {
      name: "John Doe",
      message: "Amazing service! Highly recommended.",
      avatar: "https://i.pravatar.cc/150?img=3",
      linkedinUrl: "https://linkedin.com/in/johndoe",
      rating: 5,
      category: "PL/SQL",
    },
    {
      name: "Jane Smith",
      message: "Loved the experience, great team!",
      avatar: "https://i.pravatar.cc/150?img=4",
      linkedinUrl: "https://linkedin.com/in/janesmith",
      rating: 4,
      category: "Testing",
    },
    {
      name: "Sam Wilson",
      message: "Would definitely come back again.",
      avatar: "https://i.pravatar.cc/150?img=5",
      linkedinUrl: "https://linkedin.com/in/samwilson",
      rating: 5,
      category: "SalesForce",
    },
    {
      name: "Chris Evans",
      message: "The process was smooth and enjoyable.",
      avatar: "https://i.pravatar.cc/150?img=6",
      linkedinUrl: "https://linkedin.com/in/chrisevans",
      rating: 4,
      category: "PL/SQL",
    },
    {
      name: "Tony Stark",
      message: "Genius service! Will tell all my friends.",
      avatar: "https://i.pravatar.cc/150?img=7",
      linkedinUrl: "https://linkedin.com/in/tonystark",
      rating: 5,
      category: "Testing",
    },
    {
      name: "Natasha Romanoff",
      message: "A true professional experience.",
      avatar: "https://i.pravatar.cc/150?img=8",
      linkedinUrl: "https://linkedin.com/in/natasha",
      rating: 5,
      category: "Team",
    },
  ];

  const categories = ["All", "PLSQL", "Testing", "SalesForce"];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const reviewsPerPage = 3;

  const filteredReviews =
    selectedCategory === "All"
      ? reviews
      : reviews.filter((r) => r.category === selectedCategory);

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = filteredReviews.slice(
    startIndex,
    startIndex + reviewsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10">Students Reviews</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filter */}
        <div className="w-full lg:w-64 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Filter by Category</h3>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition ${
                    selectedCategory === cat
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Review Cards */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentReviews.length > 0 ? (
              currentReviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No reviews found in this category.
              </p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
