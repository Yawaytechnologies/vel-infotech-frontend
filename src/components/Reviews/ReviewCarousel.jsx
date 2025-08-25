import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  {
    name: "John Doe",
    role: "CEO",
    stars: "★★★★★",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Exceptional quality and timely delivery. Highly recommended!",
  },
];

const ReviewsCarousel = () => {
  return (
    <section className="bg-gradient-to-tr from-blue-100 to-blue-300 min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
        What Our Clients Say
      </h2>

      <div className="w-full max-w-6xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <ReviewCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
