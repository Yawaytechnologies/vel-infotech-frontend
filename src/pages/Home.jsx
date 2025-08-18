import React from "react";
import HeroSection from "../components/home/Hero";
import WhyChooseUs from "../components/home/Whychooseus";
import LanguageStack from "../components/home/LanguageStack";
import AboutUs from "../components/home/AboutUs";
import PopularCoursesSection from "../components/home/PopularCourses";
import FAQSection from "../components/home/Faq";

function Home() {
  return (
  <div className="bg-white pt-[64px] md:pt-[108px]">
      <HeroSection />
      <div id="next-section">
        <AboutUs />
      </div>
      <WhyChooseUs />
      <LanguageStack />
      <PopularCoursesSection />
      <FAQSection />
    </div>
  );
}

export default Home;
