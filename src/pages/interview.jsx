// ✅ Interview.jsx — Updated with AWS, Selenium, Python, Java cards
import React from "react";
import InterviewCard from "../components/common/InterviewCard";
import interviewImg from "../assets/interview.png";
import interviewImg1 from "../assets/interview1.png";
import interviewImg2 from "../assets/interview2.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Interview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-background min-h-screen"
    >
      {/* Hero Banner */}
      <div
        className="relative w-full mt-[54px] sm:mt-[100px] h-[250px] sm:h-[320px] md:h-[390px]
             flex items-center justify-start px-3 sm:px-4 md:px-10 lg:px-10"
        style={{
          backgroundImage: `url(${interviewImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%", // 💡 key line to stretch full width + height
        }}
      >
        <h1
          className="relative z-10 text-white font-bold leading-snug
             text-[13px] sm:text-[20px] md:text-[28px] lg:text-[36px]
             max-w-[95%] sm:max-w-[80%] md:max-w-[600px]
             tracking-wide text-left"
        >
          Explore Interview Guides
        </h1>
      </div>

      {/* Interview Cards */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <InterviewCard
          title="AWS Interview Questions and Answers"
          date="August 1, 2025"
          description="Master AWS basics, services, and deployment strategies with common interview Q&A."
          route="/interview/aws"
          image={interviewImg2}
        />
        <InterviewCard
          title="Selenium Interview Questions and Answers"
          date="August 1, 2025"
          description="Covers Selenium tools, frameworks, and real-time automation test scenarios."
          route="/interview/selenium"
          image={interviewImg1}
        />
        <InterviewCard
          title="Python Interview Questions and Answers"
          date="August 1, 2025"
          description="Essential Python coding, logic, OOPs, and real-time project questions."
          route="/interview/python"
          image={interviewImg2}
        />
        <InterviewCard
          title="Java Interview Questions and Answers"
          date="August 1, 2025"
          description="Core Java concepts, OOP principles, collections, and memory management."
          route="/interview/java"
          image={interviewImg1}
        />
      </div>
    </motion.div>
  );
};

export default Interview;
