import React from "react";
// import heroBg from "../../assets/hero.png"; // adjust the path as per your structure
import heroImage from "../../assets/hero-pic.png";
import Bg from "../../assets/bgreen.png";
export default function HeroSection() {
  return (
        <section
      className="
        relative w-full min-h-[620px]
        flex items-center justify-center
        bg-no-repeat bg-bottom bg-cover
        "
      style={{
        backgroundImage: `url(${Bg})`
      }}
    >
      
      
      {/* Inner content is centered and constrained */}
      <div className="relative z-10 mt-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between px-6 py-12 gap-8 mx-auto"> {/* Left: Content */}
        <div className="max-w-xl text-left">
          <h1 className="text-3xl md:text-3xl font-extrabold mb-3 text-[#41e392]">
            Vel InfoTech
          </h1>
          <h2 className="text-lg md:text-xl font-bold mb-4 text-primary">
            Studying made smarter
          </h2>
          <p className="mb-6 text-base md:text-md text-gray-800 leading-relaxed font-medium">
Vel InfoTech offers comprehensive software training designed for real-world success. Experience hands-on learning through interactive classes, live coding, and practical projects, guided by industry experts. We provide dedicated mentorship, interview preparation, and strong placement support to help you launch or advance your career in the tech industry.</p>
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-2.5 bg-[#41e392] text-white font-bold rounded-full shadow-lg hover:bg-[#41e392]/80 transition">
              Join for Free
            </button>
           
          </div>
        </div>
        {/* Right: Illustration or image */}
        
        <div className="flex-1 flex justify-center items-center">
          <img
            src={heroImage}
            alt="Learning Illustration"
            className="max-w-[420px] w-full h-auto drop-shadow-2xl"
            draggable={false}
          />
        </div> 
       
      </div>
    </section>
  );
}
