import React from 'react';
import BannerSection from '../components/AllCourses/BannerSection';
import AllJobCoursesSection from '../components/AllCourses/AllJobCoursesSection';
import Info from "../components/AllCourses/Info";
import EnquiryFormCard from '../components/AllCourses/EnquireForm';
import AboutUs from '../components/home/AboutUs';



export default function AllCourses() {
  return (
    <div>
      <BannerSection />
      {/* Rest of your AllCourses content below */}
      <Info />
      <AllJobCoursesSection/>

     <AboutUs />
            
      
       
      
    </div>
  );
}
