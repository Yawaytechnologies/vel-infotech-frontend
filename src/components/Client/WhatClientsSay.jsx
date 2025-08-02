import React, {useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sanjay Kumar",
    role: "Full Stack Developer at Infosys",
    feedback:
      "The training was top-notch! The practical approach and real-time projects helped me land my dream job.",
  },
  {
    name: "Anjali R",
    role: "UI/UX Designer at TCS",
    feedback:
      "Amazing experience. The instructors are supportive and the course content is industry relevant.",
  },
  {
    name: "Rahul S",
    role: "DevOps Engineer at HCL",
    feedback:
      "Hands-on labs and mentorship helped me build real confidence. Highly recommend this institute.",
  },
  {
    name: "Divya M",
    role: "React Developer at Cognizant",
    feedback:
      "I learned React from scratch and built my portfolio with guidance. Great placement support too!",
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const cardWidth = 340;

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, testimonials.length - visibleCount)
    );
  };

  return (
    <section className="bg-white py-16">
      <div className="w-full px-6 sm:px-12">
        <h2 className="text-4xl font-bold text-[#005BAC] mb-10 text-center">
          What Our Students Say
        </h2>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="w-[85vw] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[340px] max-w-[340px] bg-gray-50 p-6 rounded-xl shadow-md flex-shrink-0"
              >
                <p className="text-gray-700 italic mb-4">"{t.feedback}"</p>
                <h3 className="text-blue-700 font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons Below */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= testimonials.length - visibleCount}
            className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition ${
              currentIndex >= testimonials.length - visibleCount
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
