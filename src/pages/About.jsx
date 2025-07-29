import React from 'react';
import tr from "../assets/training.jpg";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
   <section className="bg-[#005BAC] text-white py-24 px-8 sm:px-16 md:px-32 relative overflow-hidden">
  <div className="absolute top-0 left-0 right-0 bottom-0 z-0 bg-white opacity-50 clip-cloud"></div>
  
  <div className="relative z-10 mt-24">
    <h1 className="text-4xl mt-25 font-extrabold mb-6">
      Welcome to Vel InfoTech
    </h1>
    <div className="flex flex-col md:flex-row items-center justify-between">
  <p className="text-lg sm:text-xl mb-8 md:mb-0 md:w-1/2">
      Founded with a vision to bridge the gap between ambition and achievement, Vel InfoTech is a leading training institute dedicated to equipping individuals with the skills, knowledge, and confidence to succeed in today's competitive world.
    </p>
    <img
      src={tr}  
      alt="About Us"
      className="mx-auto md:float-right md:w-1/2 rounded-lg shadow-2xl md:ml-8"
    />
    </div>
  </div>
</section>



      <section className="py-16 bg-[#e0f7fa]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Achievements</h2>
    <p className="text-lg text-gray-600 mb-12">
      We are proud of the impact we’ve made and the milestones we've achieved over the years. Here's a glimpse into what we’ve accomplished so far:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Accomplishment 1 */}
      <div className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
  <h3 className="text-2xl font-bold text-white">10,000+</h3>
  <p className="text-gray-200">Students Trained</p>
</div>

      {/* Accomplishment 2 */}
       <div className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
  <h3 className="text-2xl font-bold text-white">10,000+</h3>
  <p className="text-gray-200">Industry Awards</p>
</div>

      {/* Accomplishment 3 */}
       <div className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
  <h3 className="text-2xl font-bold text-white">10,000+</h3>
  <p className="text-gray-200">Corporate Par</p>
</div>

      {/* Accomplishment 4 */}
       <div className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
  <h3 className="text-2xl font-bold text-white">10,000+</h3>
  <p className="text-gray-200">Students Placed in Top Tech Companies</p>
</div>
    </div>

    <div className="mt-12">
      <p className="text-xl text-gray-600">
        "We’ve trained over 10,000 students and partnered with leading tech companies like Microsoft and Google to bring industry-specific certifications to our courses."
      </p>
    </div>
  </div>
</section>

{/*Our impact */}
<section className="py-16 bg-[#f0f8ff]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Impact</h2>
    <p className="text-lg text-gray-600 mb-12">
      We take pride in the real-world results our students achieve after completing our courses. Here's how we’ve made a difference:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Impact 1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-4xl font-bold text-[#0066cc]">90%</h3>
        <p className="text-xl text-gray-700 mt-2">Graduates Secured Jobs</p>
        <p className="text-gray-600 mt-4">
          90% of our graduates secure a job in the tech industry within 6 months of completing our courses.
        </p>
      </div>

      {/* Impact 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-4xl font-bold text-[#0066cc]">40%</h3>
        <p className="text-xl text-gray-700 mt-2">Average Salary Increase</p>
        <p className="text-gray-600 mt-4">
          Our graduates see an average salary increase of 40% within the first year after completing our courses.
        </p>
      </div>

      {/* Impact 3 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-4xl font-bold text-[#0066cc]">100+</h3>
        <p className="text-xl text-gray-700 mt-2">Top Tech Companies Hiring</p>
        <p className="text-gray-600 mt-4">
          We’ve partnered with over 100 top tech companies to provide placement opportunities for our students.
        </p>
      </div>
    </div>

    <div className="mt-12">
      <p className="text-xl text-gray-600">
        "90% of our graduates secure a job in the tech industry within 6 months of completing our courses, with an average salary increase of 40%."
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
          "Vel InfoTech changed my career. Thanks to their expert guidance, I transitioned from a junior developer to a senior role in just 12 months!"
        </p>
        <div className="mt-6 flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="John Doe"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-800">John Doe</h4>
            <p className="text-sm text-gray-500">Full Stack Developer</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <p className="text-lg text-gray-700 italic">
          "The data analytics course was a game-changer. I was able to land a job at a top tech company with a 30% pay hike!"
        </p>
        <div className="mt-6 flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Jane Smith"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-800">Jane Smith</h4>
            <p className="text-sm text-gray-500">Data Analyst</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <p className="text-lg text-gray-700 italic">
          "The full-stack Python course at Vel InfoTech gave me the skills and confidence to start my own tech business!"
        </p>
        <div className="mt-6 flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Mark Johnson"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-800">Mark Johnson</h4>
            <p className="text-sm text-gray-500">Founder & CEO, TechStart</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Core services or offerings*/}
<section className="py-16 bg-[#f5f5f5]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Core Services</h2>
    <p className="text-lg text-gray-600 mb-12">
      At Vel InfoTech, we offer a diverse range of tech courses and services designed to help you advance in your career. Explore the options below:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Service 1 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold text-[#005BAC] mb-4">Full Stack Web Development</h3>
        <p className="text-gray-700 mb-4">
          Master the art of building modern web applications. From front-end to back-end, we cover everything you need to know.
        </p>
        <a href="/courses/full-stack" className="text-[#005BAC] font-semibold hover:underline transition">
          Learn More
        </a>
      </div>

      {/* Service 2 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold text-[#005BAC] mb-4">Data Science and Machine Learning</h3>
        <p className="text-gray-700 mb-4">
          Gain the skills needed to analyze data and create machine learning models. Our hands-on approach ensures practical experience.
        </p>
        <a href="/courses/data-science" className="text-[#005BAC] font-semibold hover:underline transition">
          Learn More
        </a>
      </div>

      {/* Service 3 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold text-[#005BAC] mb-4">Cloud Computing and AWS</h3>
        <p className="text-gray-700 mb-4">
          Dive deep into cloud technologies. Learn how to use AWS to deploy and manage scalable applications.
        </p>
        <a href="/courses/aws" className="text-[#005BAC] font-semibold hover:underline transition">
          Learn More
        </a>
      </div>

      {/* Service 4 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
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
</section>
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

      {/* Culture Point 4 */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
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
            <img
              src="https://via.placeholder.com/800x400"  // Replace with relevant image
              alt="Mission"
              className="rounded-lg shadow-xl"
            />
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

      {/* Team Section */}
      <section className="py-12 px-6 sm:px-12 md:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-primary mb-6">Meet Our Team</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-64 mb-8 hover:shadow-2xl transition duration-300">
              <img
                src="https://via.placeholder.com/150"  // Replace with actual team member image
                alt="Team Member"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-primary">John Doe</h4>
              <p className="text-gray-700">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-64 mb-8 hover:shadow-2xl transition duration-300">
              <img
                src="https://via.placeholder.com/150"  // Replace with actual team member image
                alt="Team Member"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-primary">Jane Smith</h4>
              <p className="text-gray-700">Chief Technology Officer</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-64 mb-8 hover:shadow-2xl transition duration-300">
              <img
                src="https://via.placeholder.com/150"  // Replace with actual team member image
                alt="Team Member"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-primary">Samuel Lee</h4>
              <p className="text-gray-700">Lead Instructor</p>
            </div>
          </div>
        </div>
      </section>

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
