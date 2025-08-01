import React from "react";
import InterviewCard from "../components/common/InterviewCard";
import telephoneImg from "../assets/telephone.jpg";
// eslint-disable-next-line no-unused-vars
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

      <InterviewCard
        title="Behavioural Interview Questions and Answers"
        date="November 6, 2024"
        description="Behavioral examples focus on how you've handled situations in the past to understand your skills and decision-making. They look at how you approached challenges, worked with others, and made decisions. Sharing real-life examples helps demonstrate your abilities in action. Using specific situations makes it easier to see how you respond under..."
        route="/interview/behavioural"
        image={telephoneImg}
      />

      <InterviewCard
        title="Personal Interview Questions and Answers"
        date="November 6, 2024"
        description="The Personal section of an interview delves into a candidate's character, strengths, motivations, and work approach. These questions offer insight into how well an individual might integrate with a team, tackle challenges, and grow within the organization. By preparing for personal interview questions, candidates can highlight their personality..."
        route="/interview/personal"
        image={telephoneImg}
      />
    </motion.div>
  );
};

export default Interview;
