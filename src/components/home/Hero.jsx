import React from "react";
import heroImage from "../../assets/hero-pic.png";
import Bg from "../../assets/rectangl.png";

export default function HeroSection() {
  // Remove "Branches" card; only 4 cards now
  const stats = [
    { value: "650+", label: "EXPERTS" },
    { value: "350+", label: "TIEUPS" },
    { value: "7+", label: "COUNTRIES" },
    { value: "15+", label: "AWARDS" },
  ];

  return (
   <section
  className="
    relative w-full min-h-[700px]
    flex items-center justify-center
    bg-no-repeat bg-bottom bg-cover
  "
  style={{
    backgroundImage: `
    url(${Bg})
     
      
    `,
   
  }}
>
      <div className="relative z-10 w-full max-w-7xl flex flex-col mt-10 md:flex-row items-center justify-between px-6 py-0 gap-6 mx-auto">
        {/* LEFT: Text & Stats */}
        <div className="flex-1 flex flex-col items-start text-left max-w-xl">
          <div className="text-[#005BAC]/90 uppercase tracking-wider text-lg mb-1 font-semibold">
            TRANSFORMING ASPIRATIONS
          </div>
          <h1 className="text-white text-3xl font-extrabold leading-tight mb-2">
            Unlock Your Success , <br className="hidden md:block" />
            <span className="relative">
              <span className="text-[#005BAC] drop-shadow-md">Shape a Brighter Tomorrow With Us</span> 
            </span>
          </h1>
          <p className="text-white text-base md:text-lg mb-4 font-medium opacity-90">
At Vel InfoTech, we empower aspiring professionals with industry-relevant skills and expert mentors. Join India’s leading software training institute and unlock your potential for a brighter, successful career in tech.

          </p>
          {/* Stats: 2 rows, last one centered */}
          <div className="w-full mt-2 space-y-3">
            {/* First row (3 cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {stats.slice(0, 3).map((stat) => (
                <div
                  key={stat.value}
                  className="bg-gradient-to-tr from-[#005BAC] to-[#005BAC] rounded-xl shadow-md flex flex-col items-center justify-center px-2 py-4 min-h-[70px] w-full border border-white/10 transition-transform hover:scale-105 duration-200"
                >
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="mt-0.5 text-sm font-semibold uppercase text-white/90 tracking-wide text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            {/* Second row: 1 card, centered */}
            <div className="grid grid-cols-3 gap-3">
              <div /> {/* Empty for left space */}
              <div>
                <div className="bg-gradient-to-tr from-[#005BAC] to-[#005BAC] rounded-xl shadow-md flex flex-col items-center justify-center px-2 py-4 min-h-[70px] w-full border border-white/10 transition-transform hover:scale-105 duration-200">
                  <div className="text-xl font-bold text-white">{stats[3].value}</div>
                  <div className="mt-0.5 text-sm font-semibold uppercase text-white/90 tracking-wide text-center">
                    {stats[3].label}
                  </div>
                </div>
              </div>
              <div /> {/* Empty for right space */}
            </div>
          </div>
        </div>
        {/* RIGHT: Hero Image */}
        <div className="flex-1 flex justify-center items-end mt-8 md:mt-0">
          <img
            src={heroImage}
            alt="Student"
            className="max-w-[380px] md:max-w-[450px] w-full h-auto drop-shadow-2xl"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
