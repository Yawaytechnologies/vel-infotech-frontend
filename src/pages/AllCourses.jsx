import React from 'react';
import Seo from '../seo/Seo';
import BannerSection from '../components/AllCourses/BannerSection';
import AllJobCoursesSection from '../components/AllCourses/AllJobCoursesSection';
import Info from "../components/AllCourses/Info";
import EnquiryFormmCard from '../components/AllCourses/EnquireForm';
import AboutUs from '../components/home/AboutUs';



export default function AllCourses() {
  return (
    <div>
      <Seo
        title="IT Courses in Chennai | Java, Python, Full Stack & Placement"
        description="Explore all IT courses at Vell InfoTech - Java, Python, Full Stack Development, Data Science, AI, Cloud Computing & more with 100% job placement in Chennai."
        keywords="Data science and AI course Chennai, Data science course in Chennai with job, AI course with placement Tamil Nadu, Cloud and DevOps training with placement, Full stack developer course with placement, Programming course near me"
        canonical="https://www.vellinfotech.com/all-courses"
      />
      <BannerSection />
      {/* Rest of your AllCourses content below */}
      <Info />
      <AllJobCoursesSection/>

     <AboutUs />
            
      
       
      
    </div>
  );
}
