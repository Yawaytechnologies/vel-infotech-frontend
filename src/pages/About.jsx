import React from 'react';
import tr from "../assets/training1.png";
import ts from "../assets/Thennarasu S.png";
import ba from "../assets/benjamin Andrew.png";
import ss from "../assets/Sudha Selvarajan.png";
import wave from "../assets/wave-bg.svg";
import theory from "../assets/theory.svg";
import practical from "../assets/practicals.svg";
import assignment from "../assets/assignment.svg";
import certification from "../assets/Groupcertification-61553.svg";
import resume from "../assets/resume.svg";
import interview from "../assets/interview.svg";
import job from "../assets/job.svg";
import aboutus from "../assets/AboutUs.jpg"

import { CheckCircle, BookOpenCheck, Laptop2, Award } from 'lucide-react';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Background from "../assets/Background1.jpg"

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* <div className="bg-gradient-to-br from-[#f0f4ff] to-white min-h-screen font-sans"> */}
      {/* Hero Section */}
      <section
  className="min-h-screen w-full bg-sky-500 bg-cover bg-center bg-no-repeat text-white px-8 sm:px-16 md:px-32 py-16 relative overflow-hidden"
  style={{
    backgroundImage: `url(${Background})`,
    backgroundSize: 'contain',         // ensures full coverage
    backgroundPosition: 'center',    // keeps it centered
    backgroundRepeat: 'no-repeat',   // prevents tiling
  }}
>
  <div className="relative z-10 mt-20 p-8 rounded-md flex flex-col md:flex-row items-center md:items-start gap-10 -translate-x-8">
    
    {/* Text Content */}
    <div className="flex-1">
      <h1 className="text-5xl font-bold mb-6 font-heading">Welcome to Vel InfoTech</h1>
      <p className="text-lg sm:text-xl mb-8 max-w-3xl">
        Founded with a vision to bridge the gap between ambition and achievement, Vel InfoTech equips individuals with the skills and confidence to succeed.
      </p>
    </div>

  </div>
</section>


     {/*  </div> */}

   
        <section className="py-12 px-6 bg-gradient-to-br from-[#ccf2ff] via-[#e0f7fa] to-[#f0fcff] text-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-semibold text-[#005BAC] mb-6">Why Choose Us</h2>
          <p className="text-lg text-gray-700 mb-12">
            We are proud of the impact we’ve made and the milestones we've achieved over the years.
          </p>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#0077cc]">
              <CheckCircle className="text-[#0077cc] w-6 h-6 mb-2 mx-auto" />
              <h3 className="text-lg font-bold text-[#005BAC]">Expert Trainers with Real-World Experience</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#00acc1]">
              <CheckCircle className="text-[#00acc1] w-6 h-6 mb-2 mx-auto" />
              <h3 className="text-lg font-bold text-[#005BAC]">Flexible Learning Modes (Classroom / Online)</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#ff7043]">
              <CheckCircle className="text-[#ff7043] w-6 h-6 mb-2 mx-auto" />
              <h3 className="text-lg font-bold text-[#005BAC]">Practical, Job-Ready Curriculum</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#66bb6a]">
              <CheckCircle className="text-[#66bb6a] w-6 h-6 mb-2 mx-auto" />
              <h3 className="text-lg font-bold text-[#005BAC]">Resume Building & Interview Preparation</h3>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-xl text-gray-700">
              All our courses are led by industry experts and backed by hands-on projects and career guidance.
            </p>
          </div>
        </div>
      </section>




      

    
{/*training methodology */}

 <section className="py-24 px-8 sm:px-16 md:px-32 bg-[#e0f7fa]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 
            className="py-10 text-3xl font-semibold text-gray-800 mb-6" 
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }} 
            viewport={{ once: true }}>
            Our Training Methodology
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.2
                }
              }
            }}>

            {[
              {
                label: 'Foundation Theory',
                icon: <BookOpenCheck className="w-10 h-10 text-[#0077cc] mb-4 mx-auto" />,
                desc: 'Start with core concepts delivered by expert instructors using engaging explanations.'
              },
              {
                label: 'Hands-on Practice',
                icon: <Laptop2 className="w-10 h-10 text-[#00acc1] mb-4 mx-auto" />,
                desc: 'Students work on structured lab exercises, gaining confidence with real tools.'
              },
              {
                label: 'Project-based Evaluation',
                icon: <Award className="w-10 h-10 text-[#66bb6a] mb-4 mx-auto" />,
                desc: 'Apply knowledge on capstone projects assessed for technical and creative strength.'
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white rounded-xl shadow-lg p-6 text-gray-700 border-t-4 border-[#0077cc]"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}>
                {step.icon}
                <h3 className="text-xl font-semibold mb-2">{step.label}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
{/* <section className="py-24 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-br from-sky-100 to-blue-50">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-12">
      Our Training Methodology
    </h2>

    {/* Optional: Background Wave */}
    {/* <img src={wave} alt="wave" className="mx-auto mb-12" /> */}

    {/* Grid of Steps */}
{/*     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-y-12 gap-x-6 items-start justify-items-center">
 */}      
      {/* <div className="flex flex-col items-center">
        <img src={theory} alt="Theory" className="w-16 h-16 mb-2" />
        <h2 className="font-bold text-sm sm:text-base">Theory</h2>
      </div>

      <div className="flex flex-col items-center">
        <img src={practical} alt="Practicals" className="w-16 h-16 mb-2" />
        <h2 className="font-bold text-sm sm:text-base">Practicals</h2>
      </div>

      <div className="flex flex-col items-center">
        <img src={assignment} alt="Assignments" className="w-16 h-16 mb-2" />
        <h2 className="font-bold text-sm sm:text-base">Assignments</h2>
      </div>

      <div className="flex flex-col items-center">
        <img src={certification} alt="Certification" className="w-16 h-16 mb-2" />
        <h2 className="font-bold text-sm sm:text-base">Certification</h2>
      </div>

      <div className="flex flex-col items-center">
        <img src={resume} alt="Resume" className="w-16 h-16 mb-2" />
        <h2 className="font-bold text-sm sm:text-base text-center">Resume<br/>Preparation</h2>
      </div>

      <div className="flex flex-col items-center">
        <img src={interview} alt="Interview" className="w-16 h-16 mb-2" />
        <h2 className="font-bold text-sm sm:text-base text-center">Attending<br/>Interview</h2>
      </div>

      <div className="flex flex-col items-center">
        <img src={job} alt="Job" className="w-16 h-16 mb-2" />
        <h2 className="font-bold text-sm sm:text-base">Job</h2>
      </div>
    </div>
  </div>
</section> 
 */}


<section className="py-12 bg-gradient-to-br from-[#E6F2FF] via-[#A0CFFF] to-[#66B2FF]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-[#003366] mb-4">Our Impact</h2>
    <p className="text-lg text-gray-700 mb-6">
      We are proud of the lives we've changed and the success stories we’ve created through our training programs.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Impact 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-l-4 border-[#005BAC]">
        <div className="text-5xl font-extrabold text-[#005BAC] mb-2">90%</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Job Placement Rate</h3>
        <p className="text-gray-600">
          90% of our students get placed within 6 months of completing the program.
        </p>
      </div>

      {/* Impact 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-l-4 border-[#00ACC1]">
        <div className="text-5xl font-extrabold text-[#00ACC1] mb-2">40%</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Average Salary Hike</h3>
        <p className="text-gray-600">
          On average, graduates see a 40% increase in salary within the first year.
        </p>
      </div>

      {/* Impact 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-l-4 border-[#66B2FF]">
        <div className="text-5xl font-extrabold text-[#66B2FF] mb-2">100+</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Hiring Partners</h3>
        <p className="text-gray-600">
          We’ve partnered with 100+ leading companies to hire our talented graduates.
        </p>
      </div>
    </div>

    <div className="mt-12">
      <p className="text-xl text-gray-700 font-medium italic">
        "Our training isn’t just about education—it’s about transformation."
      </p>
    </div>
  </div>
</section>

{/*Customer testemonials */}
<section className="py-16 bg-[#fafafa]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Students Say</h2>
    <p className="text-lg text-gray-600 mb-12">
      Our success is measured by the success of our students. Here's how Vel InfoTech has transformed their careers.
    </p>

    <div className="flex flex-wrap justify-center gap-12">
      {/* Testimonial 1 */}
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <p className="text-lg text-gray-700 italic">
          "Good place for job seekers. 💯 placement."
        </p>
        <div className="mt-6 flex items-center">
          <img
            src={ts}
            alt="John Doe"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-800">Thennarasu S</h4>
            <p className="text-sm text-gray-500"></p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <p className="text-lg text-gray-700 italic">
          Good service and trusted Organisation
        </p>
        <div className="mt-6 flex items-center">
          <img
            src={ba}
            alt="benjamin Andrew"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-800">benjamin Andrew</h4>
            <p className="text-sm text-gray-500"></p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <p className="text-lg text-gray-700 italic">
          Best Consultancy for the people who seek jobs.100 percentage placement guaranteed.
        </p>
        <div className="mt-6 flex items-center">
          <img
            src={ss}
            alt="Mark Johnson"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-800">Sudha Selvarajan</h4>
            <p className="text-sm text-gray-500"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Core services or offerings*/}
{/* <section className="py-16 bg-[#f5f5f5]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Core Services</h2>
    <p className="text-lg text-gray-600 mb-12">
      At Vel InfoTech, we offer a diverse range of tech courses and services designed to help you advance in your career. Explore the options below:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"> */}
      {/* Service 1 */}
      

      {/* Service 2 */}
      {/* <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold text-[#005BAC] mb-4">Data Science and Machine Learning</h3>
        <p className="text-gray-700 mb-4">
          Gain the skills needed to analyze data and create machine learning models. Our hands-on approach ensures practical experience.
        </p>
        <a href="/courses/data-science" className="text-[#005BAC] font-semibold hover:underline transition">
          Learn More
        </a>
      </div> */}

      {/* Service 3 */}
      {/* <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold text-[#005BAC] mb-4">Cloud Computing and AWS</h3>
        <p className="text-gray-700 mb-4">
          Dive deep into cloud technologies. Learn how to use AWS to deploy and manage scalable applications.
        </p>
        <a href="/courses/aws" className="text-[#005BAC] font-semibold hover:underline transition">
          Learn More
        </a>
      </div> */}

      {/* Service 4 */}
      {/* <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold text-[#005BAC] mb-4">Corporate Training for Teams</h3>
        <p className="text-gray-700 mb-4">
          We offer customized corporate training to help your team stay ahead in the tech industry. Tailored to your business needs.
        </p>
        <a href="/corporate-training" className="text-[#005BAC] font-semibold hover:underline transition">
          Learn More
        </a>
      </div>
    </div>
  </div>
</section> */}
{/*company culture*/}
<section className="py-20 bg-gradient-to-br from-[#d0f4ff] via-[#e6faff] to-[#ffffff]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-[#003366] mb-6 tracking-tight">Our Company Culture</h2>
    <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
      At Vel InfoTech, we create a supportive and dynamic space where our team thrives, collaborates, and constantly innovates.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Culture Point 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#0077cc] hover:scale-105 transform">
        <h3 className="text-xl font-semibold text-[#005BAC] mb-3">🤝 Collaboration</h3>
        <p className="text-gray-600">
          Teamwork fuels our success. We solve challenges together and celebrate wins as one.
        </p>
      </div>

      {/* Culture Point 2 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#00acc1] hover:scale-105 transform">
        <h3 className="text-xl font-semibold text-[#005BAC] mb-3">📚 Continuous Learning</h3>
        <p className="text-gray-600">
          Growth is our mindset. We promote lifelong learning and staying ahead in tech.
        </p>
      </div>

      {/* Culture Point 3 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#66bb6a] hover:scale-105 transform">
        <h3 className="text-xl font-semibold text-[#005BAC] mb-3">💡 Innovation</h3>
        <p className="text-gray-600">
          We thrive on fresh ideas and pushing boundaries in everything we do.
        </p>
      </div>

      {/* Culture Point 4 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#ffa726] hover:scale-105 transform">
        <h3 className="text-xl font-semibold text-[#005BAC] mb-3">🎯 Passion for Impact</h3>
        <p className="text-gray-600">
          Our true reward is seeing our students transform their lives through learning.
        </p>
      </div>
    </div>

    <div className="mt-14">
      <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        At Vel InfoTech, our culture is rooted in teamwork, growth, innovation, and impact. We're united by a shared mission to empower futures and spark careers.
      </p>
    </div>
  </div>
</section>

  



<section className="py-20 bg-gradient-to-br from-[#d0e8ff] via-[#a3cfff] to-[#74b6ff]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-[#002b66] mb-6 tracking-tight">Our Core Values</h2>
    <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
      At Vel InfoTech, our values drive our mission and shape the way we work and grow together.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Core Value 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#0d47a1] hover:scale-105 transform">
        <h3 className="text-xl font-semibold text-[#0d47a1] mb-3">🔷 Integrity</h3>
        <p className="text-gray-600">
          We act with honesty and transparency in everything we do—no compromises.
        </p>
      </div>

      {/* Core Value 2 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#1976d2] hover:scale-105 transform">
        <h3 className="text-xl font-semibold text-[#1976d2] mb-3">🌊 Growth</h3>
        <p className="text-gray-600">
          We grow ourselves so we can help others grow—both personally and professionally.
        </p>
      </div>

      {/* Core Value 3 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#2196f3] hover:scale-105 transform">
        <h3 className="text-xl font-semibold text-[#2196f3] mb-3">🚀 Excellence</h3>
        <p className="text-gray-600">
          We strive for excellence in everything—from training to technology to service.
        </p>
      </div>

      {/* Core Value 4 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#64b5f6] hover:scale-105 transform">
        <h3 className="text-xl font-semibold text-[#64b5f6] mb-3">💬 Empathy</h3>
        <p className="text-gray-600">
          We listen, understand, and respond with compassion—our students come first.
        </p>
      </div>
    </div>

    <div className="mt-14">
      <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        These values guide us every day as we build an inclusive, empowering, and forward-thinking learning environment.
      </p>
    </div>
  </div>
</section>



      {/* Team Members Section */}
{/* <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet Our Team</h2>
    <p className="text-lg text-gray-600 mb-12">
      Our strength lies in our people. Meet the passionate professionals behind Vel InfoTech.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"> */}
      {/* Member 1 */}
      {/* <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <img src="" alt="Thennarasu S" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
        <h4 className="text-xl font-semibold text-gray-800">Senior Technical Trainer</h4>
        <p className="text-gray-600">Senior Trainer</p>
      </div>
 */}
      {/* Member 2 */}
      {/* <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <img src="" alt="Benjamin Andrew" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
        <h4 className="text-xl font-semibold text-gray-800">Assistant Trainer</h4>
        <p className="text-gray-600">Placement Coordinator</p>
      </div> */}

      {/* Member 3 */}
      {/* <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"> */}
     {/*    <img src="" alt="Sudha Selvarajan" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
        <h4 className="text-xl font-semibold text-gray-800">Curriculum Developer</h4>
        <p className="text-gray-600">Career Counselor</p>
      </div>
    </div>
  </div>
</section> */}


      

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 py-16 px-6 sm:px-12 md:px-24 rounded-lg shadow-lg max-w-7xl mx-auto text-center text-white">
  <h2 className="text-4xl font-extrabold mb-6 drop-shadow-md">Get in Touch</h2>
  <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto drop-shadow-sm">
    Have any questions? Want to know more about our courses? We're here to help!
  </p>
  <div className="space-y-4">
    <a
      href="mailto:info@velinfotech.com"
      className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
    >
      info@velinfotech.com
    </a>
    <br />
    <a
      href="tel:+917669100251"
      className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
    >
      +91-7669 100 251
    </a>
  </div>
</section>


     
    



      






    </div>
  );
};

export default About;
