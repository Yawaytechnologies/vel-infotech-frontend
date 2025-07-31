// src/pages/Internship.jsx
import React from "react";
import internshipBg from "../assets/internship.jpg";
import slider2 from "../assets/Slider2.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import dataScienceIcon from "../assets/datascience.png";
import pythonIcon from "../assets/python.png";
import aiIcon from "../assets/ai.png";
import javaIcon from "../assets/java.png";

const Internship = () => {
  return (
    <div className=" bg-gray-200 pb-10">
      {/* Hero Banner */}
      <div
        className="relative mt-[110px] w-full h-90 bg-cover bg-center flex items-center justify-start text-left text-white px-6 md:px-110"
        style={{
          backgroundImage: `url(${slider2})`,
        }}
      >
        {/* Main Heading */}
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold">
          Internship
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto py-10 px-2">
        <div className="w-full  bg-[#f0f6ff] py-10 px-2 ">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Text Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 relative z-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Best Online Training Institute in Chennai & Bangalore
              </h2>
              <p className="text-gray-700 text-md mb-2 leading-relaxed">
                Feed this question to Google and it coughs up – ‘An “internship”
                is an opportunity offered by an employer to potential employees,
                called “interns”, to work at a firm for a fixed, limited period
                of time.’
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Let’s make it simpler for you – it’s a job before the actual
                job, a peek into your career before it actually starts. You will
                go to the office (unless it’s remote), have real
                responsibilities, learn new skills, and possibly get paid.
                Sounds great, right?
              </p>
            </div>

            {/* Right Full-Height Image */}
            <div className="flex justify-center items-center">
              <img
                src={internshipBg}
                alt="Internship Illustration"
                className="w-full max-w-[500px]   hover:scale-105 transition-transform duration-300"
              />
            </div>

           
          </div>

          <div className="mt-18 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Dotnet", color: "bg-blue-400", icon: "🌀" },
              { title: "Cyber Security", color: "bg-blue-400", icon: "🔐" },
              { title: "Networking", color: "bg-blue-400", icon: "🌐" },
              { title: "Java", color: "bg-blue-400", icon: "☕" },
              {
                title: "Artificial Intelligence",
                color: "bg-blue-400",
                icon: "🤖",
              },
              { title: "Cloud Computing", color: "bg-blue-400", icon: "☁️" },
              { title: "Python", color: "bg-blue-400", icon: "🐍" },
              { title: "Data Science", color: "bg-blue-400", icon: "📊" },
              { title: "Ethical Hacking", color: "bg-blue-400", icon: "💻" },
              { title: "PHP", color: "bg-blue-400", icon: "🐘" },
              { title: "Machine Learning", color: "bg-blue-400", icon: "🧠" },
              { title: "Data Analytics", color: "bg-blue-400", icon: "📈" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer ${item.color}`}
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600">Internship</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src={internshipBg}
              alt="Job Internship"
              className="w-full max-w-md rounded-lg shadow-md"
            />
          </div>

          {/* Text */}
          <div className="bg-white p-6 rounded-lg shadow border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Now, why you should do an internship?
            </h2>
            <p className="mb-2">
              Again, breaking it down into five main points:
            </p>
            <ol className="list-decimal pl-4 space-y-2">
              <li>
                <strong>Because of work ex-matters –</strong> 44 out of 100
                employers value relevant work experience more than any other
                qualifications while recruiting.
              </li>
              <li>
                <strong>
                  Because it allows you to apply classroom knowledge in
                  real-life situations –
                </strong>{" "}
                Internships give you a way to utilize your knowledge base and
                expand it.
              </li>
              <li>
                <strong>
                  Because many students don’t know what they want –
                </strong>{" "}
                Internships can be used as tools to discover what you’re good
                at.
              </li>
              <li>
                <strong>Because they help you build a network –</strong> The
                professional contacts you make during internships can help you
                land a full-time role.
              </li>
              <li>
                <strong>Because they might lead to a job –</strong> Many
                companies use internships to evaluate and recruit future
                employees.
              </li>
            </ol>

            {/* CTA Button */}
            <div className="mt-6">
              <a
                href="#apply"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Internship Cards */}
      <div className="bg-[#005BAC] py-14 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Trending Internship in Chennai
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "Data Science Internship",
              image: dataScienceIcon,
              gradient: "from-red-800 to-indigo-00",
            },
            {
              title: "Python Internship",
              image: pythonIcon,
              gradient: "from-purple-600 to-pink-500",
            },
            {
              title: "Artificial Intelligence Internship",
              image: aiIcon,
              gradient: "from-blue-900 to-cyan-600",
            },
            {
              title: "Java Internship",
              image: javaIcon,
              gradient: "from-green-600 to-emerald-400",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all"
            >
              <div
                className={`p-4 bg-gradient-to-r ${item.gradient} text-white text-center`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg leading-tight">
                  {item.title.split(" ")[0]} <br /> Internship
                </h3>
              </div>
              <div className="p-4 text-center">
                <p className="font-medium text-gray-800">{item.title}</p>
                <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      {/* <div id="apply" className="bg-gray-100 "> */}
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg px-6 py-8 pb-2">
        <h3 className="text-2xl font-bold mb-6 text-center text-blue-800">
          Internship Application Form
        </h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Interested Course / Domain"
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Internship;
