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
        title="Vell InfoTech | Best Software Training & Placement Chennai"
        description="Vell InfoTech Chennai | Offers best software training & IT courses with 100% placement support | Learn Java, Python, Full Stack, AI, Data Science & get high-paying IT jobs."
        keywords="IT training institute in Chennai, Best IT training institute, Software training institute, IT courses with placement, Placement training institute, Software developer training, IT job training and placement, Java training in Chennai, Python course in Chennai, Full stack developer training, Software development courses, Software testing course with placement, Data science course with placement"
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
