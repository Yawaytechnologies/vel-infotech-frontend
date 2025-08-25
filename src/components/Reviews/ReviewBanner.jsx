import React from "react";
import rb2 from "../../assets/Reviews1.jpg";

export default function ReviewBanner() {
  return (
    <section
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${rb2})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full w-full px-4 text-center text-white">
        <div className="space-y-4 max-w-[95%] sm:max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug drop-shadow-lg">
            What People Are Saying
          </h1>
          <p className="text-sm sm:text-base md:text-lg drop-shadow-md">
            Real voices. Real impact. Discover how our work has made a difference in people’s lives.
          </p>
        </div>
      </div>
    </section>
  );
}
