// src/pages/Home.jsx
import React from "react";
import Seo from "../seo/Seo"; // <- make sure this exists (shown in earlier message)

import HeroSection from "../components/home/Hero";
import WhyChooseUs from "../components/home/Whychooseus";
import LanguageStack from "../components/home/LanguageStack";
import AboutUs from "../components/home/AboutUs";
import PopularCoursesSection from "../components/home/PopularCourses";
import FAQSection from "../components/home/Faq";

function Home() {
  return (
    <>
      <Seo
        title="Vell Infotech — Best Software Training & Placement Support"
        description="Vell Infotech provides software training and placement support to help students master tech skills and land high-paying jobs in leading companies."
        canonical="https://www.vellinfotech.com/"
      />

      <div className="bg-white pt-10 md:pt-26 lg:pt-28">
        <HeroSection />
        <div id="next-section">
          <AboutUs />
        </div>
        <WhyChooseUs />
        <LanguageStack />
        <PopularCoursesSection />
        <FAQSection />
      </div>
    </>
  );
}

export default Home;
