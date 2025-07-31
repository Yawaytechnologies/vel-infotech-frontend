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

import { CheckCircle, BookOpenCheck, Laptop2, Award } from 'lucide-react';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="bg-gradient-to-br from-[#f0f4ff] to-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0077cc] to-[#005BAC] text-white py-24 px-8 sm:px-16 md:px-32 relative overflow-hidden">
        <div className="relative z-10 mt-20">
          <h1 className="text-5xl font-bold mb-6 font-heading">Welcome to Vel InfoTech</h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl">
            Founded with a vision to bridge the gap between ambition and achievement, Vel InfoTech equips individuals with the skills and confidence to succeed.
          </p>
        </div>
      </section>
      </div>

   
        <section className="py-20 px-6 bg-gradient-to-br from-[#ccf2ff] via-[#e0f7fa] to-[#f0fcff] text-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-semibold text-[#005BAC] mb-6">Why Choose Us</h2>
          <p className="text-lg text-gray-700 mb-12">
            We are proud of the impact we’ve made and the milestones we've achieved over the years.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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


<section className="py-24 bg-gradient-to-br from-[#fffaf0] via-[#fef5e5] to-[#fff7cc]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-[#FF6F00] mb-4">Our Impact</h2>
    <p className="text-lg text-gray-700 mb-12">
      We are proud of the lives we've changed and the success stories we’ve created through our training programs.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Impact 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-l-4 border-[#FF6F00]">
        <div className="text-5xl font-extrabold text-[#FF6F00] mb-2">90%</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Job Placement Rate</h3>
        <p className="text-gray-600">
          90% of our students get placed within 6 months of completing the program.
        </p>
      </div>

      {/* Impact 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-l-4 border-[#FFA000]">
        <div className="text-5xl font-extrabold text-[#FFA000] mb-2">40%</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Average Salary Hike</h3>
        <p className="text-gray-600">
          On average, graduates see a 40% increase in salary within the first year.
        </p>
      </div>

      {/* Impact 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-l-4 border-[#FFC107]">
        <div className="text-5xl font-extrabold text-[#FFC107] mb-2">100+</div>
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
<section className="py-16 bg-[#e0f7fa]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Company Culture</h2>
    <p className="text-lg text-gray-600 mb-12">
      At Vel InfoTech, we believe in creating a supportive and dynamic environment where our team can thrive, collaborate, and innovate. Here’s what drives us:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Culture Point 1 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold text-[#005BAC] mb-4">Collaboration</h3>
        <p className="text-gray-700 mb-4">
          We believe that teamwork is the key to success. Our team works closely together to solve problems, brainstorm new ideas, and deliver exceptional results.
        </p>
      </div>

      {/* Culture Point 2 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold text-[#005BAC] mb-4">Continuous Learning</h3>
        <p className="text-gray-700 mb-4">
          We are committed to growth and innovation. We encourage our employees to continuously learn and stay updated with the latest industry trends.
        </p>
      </div>

      {/* Culture Point 3 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold text-[#005BAC] mb-4">Innovation</h3>
        <p className="text-gray-700 mb-4">
          We foster a culture of creativity and forward-thinking. We constantly look for new ways to innovate in our training programs, technology, and services.
        </p>
      </div>

      <div className="hidden lg:block"></div>

      {/* Culture Point 4 */}
      <div className="bg-white p-8  rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold text-[#005BAC] mb-4">Passion for Helping Others</h3>
        <p className="text-gray-700 mb-4">
          Our mission is simple – to help individuals build their careers and achieve their goals. We take pride in seeing our students succeed in the tech industry.
        </p>
      </div>
    </div>

   

    <div className="mt-12">
      <p className="text-xl text-gray-700">
        At Vel InfoTech, we foster a culture of collaboration, continuous learning, and innovation. Our team is passionate about making a difference and helping individuals achieve their career goals.
      </p>
    </div>
  </div>
</section>

  




      {/* Our Mission Section */}
      <section className="py-12 px-6 sm:px-12 md:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-primary mb-6">Our Mission</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            At Vel InfoTech, we aim to bridge the gap between education and the real-world tech industry. 
            We strive to provide the latest skills that are required to thrive in the ever-evolving technology sector.
          </p>
          <div className="flex justify-center">
            
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-blue-100 py-12 px-6 sm:px-12 md:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-primary mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-primary mb-4">Excellence</h3>
              <p className="text-gray-700">
                We believe in excellence and strive to deliver the best quality training and career opportunities for our students.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-primary mb-4">Innovation</h3>
              <p className="text-gray-700">
                Embracing change and technological advancements, we focus on the innovative methods that drive results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-primary mb-4">Integrity</h3>
              <p className="text-gray-700">
                Integrity is at the core of our approach. We maintain transparency and honesty in all our interactions.
              </p>
            </div>
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
      <section className="bg-gray-100 py-12 px-6 sm:px-12 md:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-primary mb-6">Get in Touch</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            Have any questions? Want to know more about our courses? We're here to help!
          </p>
          <p className="text-lg text-blue-600 hover:text-blue-800 mb-4">
            <a href="mailto:info@velinfotech.com">info@velinfotech.com</a>
          </p>
          <p className="text-lg text-blue-600 hover:text-blue-800">
            <a href="tel:+917669100251">+91-7669 100 251</a>
          </p>
        </div>
      </section>


     
    



      






    </div>
  );
};

export default About;
