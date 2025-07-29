import React from "react";
import InterviewCard from "../components/common/InterviewCard";
import telephoneImg from "../assets/telephone.jpg";

import { motion } from "framer-motion";

const Interview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-full mx-auto px-4 py-8 pt-[140px] bg-background-to-br from-[#e5f1ff] to-white min-h-screen"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[#1a2650]">
        Explore Interview Guides
      </h1>

      <InterviewCard
        title="Telephone Interview Questions and Answers"
        date="November 7, 2024"
        description="Telephone Interview Questions and Answers provides key insights and strategies for acing phone interviews. It covers common questions, tips for clear communication, and best practices for handling remote job screenings. The guide helps candidates prepare for everything from technical queries to behavioral assessments. With these tips, job..."
        route="/interview/telephone"
        image={telephoneImg}
      />

      <InterviewCard
        title="Genpact Interview Questions and Answers"
        date="November 6, 2024"
        description="Genpact interview questions typically focus on assessing a candidate's technical skills, problem-solving abilities, and cultural fit within the organization. Expect questions on your past experiences, how you handle challenges, and your ability to work in teams or under pressure. They may also inquire about your knowledge of the company's"
        route="/interview/genpact"
        image={telephoneImg}
      />
    </motion.div>
  );
};

export default Interview;
