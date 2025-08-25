import React from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Alice Johnson",
    role: "Product Manager",
    stars: "★★★★★",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "This product exceeded my expectations. The support team is also fantastic!",
  },
  {
    name: "David Lee",
    role: "Software Engineer",
    stars: "★★★★☆",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Great performance and reliable service. Would definitely recommend.",
  },
  {
    name: "Emma Watson",
    role: "Graphic Designer",
    stars: "★★★★★",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Beautiful UI and smooth experience. Truly love working with this team!",
  },
];

const ReviewsSection = () => {
  return (
    <section className="bg-gradient-to-tr from-blue-100 to-blue-300 min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
        What Our Students Say
      </h2>

      <div className="grid gap-8 md:grid-cols-3 w-full max-w-7xl">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
