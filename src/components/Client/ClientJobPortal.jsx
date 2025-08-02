import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const jobOpenings = [
  {
    title: "Frontend Developer",
    company: "TechNova Inc.",
    location: "Remote",
    description:
      "Build modern UI interfaces with React, optimize performance and ensure responsive design.",
    applyLink: "#",
  },
  {
    title: "Backend Engineer",
    company: "DataWorks",
    location: "Bangalore, India",
    description:
      "Design RESTful APIs and microservices using Node.js and MongoDB in a cloud-native environment.",
    applyLink: "#",
  },
  {
    title: "UI/UX Designer",
    company: "PixelStudio",
    location: "New York, NY",
    description:
      "Create engaging user interfaces and experiences for both mobile and web applications.",
    applyLink: "#",
  },
  {
    title: "DevOps Engineer",
    company: "CloudNet",
    location: "Berlin, Germany",
    description:
      "Implement CI/CD pipelines and automate cloud infrastructure with Docker and Kubernetes.",
    applyLink: "#",
  },
  {
    title: "Mobile App Developer",
    company: "AppForge",
    location: "San Francisco, CA",
    description:
      "Develop and maintain cross-platform mobile apps using React Native and Expo.",
    applyLink: "#",
  },
];

const JobOpeningsScroll = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const cardWidth = 340;

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 640 ? 1 : 3);
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
      Math.min(prev + 1, jobOpenings.length - visibleCount)
    );
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 1.2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => setIsDragging(false);

  return (
    <section className="bg-gray-50 py-16 h-auto">
      <div className="w-full">
        {/* Header */}
        <div className="px-6 sm:px-12">
          <h2 className="text-4xl font-bold text-[#005BAC] mb-10 !text-center sm:text-left">
            Explore Job Openings
          </h2>
        </div>

        {/* Slider Container */}
        <div className="w-full px-6 sm:px-12">
          <div
            ref={containerRef}
            className="overflow-x-auto sm:overflow-hidden w-full cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={stopDrag}
          >
            <div
              className="flex gap-4 px-4 sm:px-0 transition-transform duration-500 ease-in-out sm:transform"
              style={{
                transform:
                  visibleCount > 1
                    ? `translateX(-${currentIndex * cardWidth}px)`
                    : "none",
              }}
            >
              {jobOpenings.map((job, index) => (
  <div
    key={index}
    className="w-[85vw] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[340px] max-w-[340px] bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex-shrink-0"
  >
    <h3 className="text-lg font-semibold text-blue-600 mb-1">
      {job.title}
    </h3>
    <p className="text-sm text-gray-700 font-medium">{job.company}</p>
    <p className="text-sm text-gray-500 mb-3">{job.location}</p>
    <p className="text-sm text-gray-600 mb-4">{job.description}</p>
    <a
      href={job.applyLink}
      className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition"
    >
      Apply Now
    </a>
  </div>
))}

            </div>
          </div>

          {/* Navigation Buttons Below */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition ${
                currentIndex >= jobOpenings.length - visibleCount
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentIndex >= jobOpenings.length - visibleCount}
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobOpeningsScroll;
