import React from "react";

// Star rating component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex space-x-1 text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.572-.955L10 0l2.94 5.955 6.572.955-4.756 4.635 1.122 6.545z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.572-.955L10 0l2.94 5.955 6.572.955-4.756 4.635 1.122 6.545z"
            fill="url(#half)"
          />
        </svg>
      )}
    </div>
  );
};

// Review card component with category color
const ReviewCard = ({ name, role, rating, review, source, sourceLink, category }) => {
  const categoryStyles = {
    Testing: "bg-blue-50 border-l-4 border-blue-400",
    AWS: "bg-yellow-50 border-l-4 border-yellow-400",
    "PL/SQL": "bg-purple-50 border-l-4 border-purple-400",
  };

  return (
    <div
      className={`w-full rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 mb-6 ${
        categoryStyles[category] || "bg-gray-50 border-l-4 border-gray-300"
      }`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
        <StarRating rating={rating} />
      </div>
      <p className="text-gray-700 mb-4">{review}</p>
      <a
        href={sourceLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-500 hover:underline"
      >
        {source}
      </a>
    </div>
  );
};

// Full-width review page with new categories
export default function ReviewCard1() {
  const reviews = [
    {
      name: "John Doe",
      role: "QA Engineer",
      rating: 4.5,
      review: "Excellent hands-on testing workshops, very practical and detailed.",
      source: "Internal Feedback",
      sourceLink: "#",
      category: "Testing",
    },
    {
      name: "Ananya Sharma",
      role: "Cloud Engineer",
      rating: 4.8,
      review: "AWS course was very thorough, covered all key services and deployment practices.",
      source: "Internal Feedback",
      sourceLink: "#",
      category: "AWS",
    },
    {
      name: "Raj Kumar",
      role: "Database Developer",
      rating: 4.6,
      review: "PL/SQL course had excellent examples and clear explanation of advanced concepts.",
      source: "Internal Feedback",
      sourceLink: "#",
      category: "PL/SQL",
    },
    {
      name: "Priya Singh",
      role: "QA Analyst",
      rating: 4.2,
      review: "Testing course improved my automation skills significantly.",
      source: "Internal Feedback",
      sourceLink: "#",
      category: "Testing",
    },
  ];

  const categories = ["Testing", "AWS", "PL/SQL"];

  const categoryHeadingStyles = {
    Testing: "text-blue-600",
    AWS: "text-yellow-600",
    "PL/SQL": "text-purple-600",
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-8 lg:px-32">
      <h1 className="text-3xl font-bold text-center mb-10">
        Vel Infotech Training Reviews
      </h1>

      {categories.map((cat) => {
        const categoryReviews = reviews.filter((r) => r.category === cat);
        if (categoryReviews.length === 0) return null;

        return (
          <div key={cat} className="mb-12">
            <h2 className={`text-2xl font-semibold mb-6 ${categoryHeadingStyles[cat]}`}>
              {cat} Reviews
            </h2>
            {categoryReviews.map((rev, i) => (
              <ReviewCard key={i} {...rev} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
